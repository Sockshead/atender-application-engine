#!/usr/bin/env node
// Validates the agent fleet: routing-map coverage, skill/subagent resolution,
// and a secret-leak scan over the fleet files. 0 tokens, deterministic.
// Run: node .claude/scripts/validate-agent-fleet.mjs
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join } from "node:path";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..", "..");
const A = join(ROOT, ".claude", "agents");
const SKILLS = join(ROOT, ".claude", "skills");

const routing = JSON.parse(readFileSync(join(A, "fleet-routing.json"), "utf8"));
const { fixtures } = JSON.parse(readFileSync(join(A, "routing-fixtures.json"), "utf8"));
const specialists = routing.specialists;
const fail = [];
const ok = (m) => console.log("  ok " + m);

// 1. Routing: highest-scoring specialist by match-phrase presence must equal expected.
function route(task) {
  const t = task.toLowerCase();
  let best = null, bestScore = -1;
  for (const [name, s] of Object.entries(specialists)) {
    const score = (s.match || []).filter((m) => t.includes(m)).length;
    if (score > bestScore) { bestScore = score; best = name; }
  }
  return best;
}
console.log("\n[1] Routing fixtures (task -> expected specialist):");
for (const f of fixtures) {
  const got = route(f.task);
  if (got === f.expect) ok(`${f.expect.padEnd(18)} <- "${f.task.slice(0, 52)}..."`);
  else fail.push(`ROUTING: "${f.task}" -> expected ${f.expect}, got ${got}`);
}

// 2. Every specialist has an agent def; orchestrator exists; toolkits resolve.
console.log("\n[2] Agent defs + toolkit resolution:");
if (!existsSync(join(A, routing.orchestrator + ".md"))) fail.push(`MISSING orchestrator def: ${routing.orchestrator}.md`);
else ok(`orchestrator ${routing.orchestrator}.md present`);
for (const [name, s] of Object.entries(specialists)) {
  if (!existsSync(join(A, name + ".md"))) fail.push(`MISSING agent def: ${name}.md`);
  for (const sk of s.skills || []) if (!existsSync(join(SKILLS, sk))) fail.push(`UNRESOLVED skill in ${name}: ${sk}`);
  for (const sub of s.subagents || []) if (!existsSync(join(A, sub + ".md"))) fail.push(`UNRESOLVED subagent in ${name}: ${sub}.md`);
  for (const e of s.enforces || []) if (!existsSync(join(ROOT, "docs", e + ".md"))) fail.push(`UNRESOLVED enforces doc in ${name}: docs/${e}.md`);
}
if (!fail.some((x) => x.startsWith("MISSING") || x.startsWith("UNRESOLVED"))) ok("all 8 specialist defs present; every skill/subagent/enforces resolves");

// 3. Secret-leak scan over committed fleet files.
console.log("\n[3] Secret-leak scan:");
const SECRET = [
  /AKIA[0-9A-Z]{16}/, /sk-[A-Za-z0-9]{20,}/, /xox[baprs]-[A-Za-z0-9-]{10,}/,
  /postgres(ql)?:\/\/[^\s"']+/i, /arn:aws:[a-z0-9-]+:[^\s"']+/i,
  /-----BEGIN [A-Z ]*PRIVATE KEY-----/, /AIza[0-9A-Za-z_-]{30,}/,
];
const scanFiles = [
  ...readdirSync(A).filter((f) => f.endsWith(".md") || f.endsWith(".json")).map((f) => join(A, f)),
  ...["agent-fleet.md", "agent-systems-boundary.md", "agent-operating-principles.md"]
    .map((f) => join(ROOT, "docs", f)).filter(existsSync),
];
let scanned = 0;
for (const file of scanFiles) {
  const txt = readFileSync(file, "utf8");
  scanned++;
  for (const re of SECRET) {
    const m = txt.match(re);
    if (m) fail.push(`SECRET-LEAK in ${file.replace(ROOT, "")}: matched ${re}`);
  }
}
if (!fail.some((x) => x.startsWith("SECRET-LEAK"))) ok(`no credentials/tokens/ARNs/DB-URLs in ${scanned} fleet files`);

// Verdict
console.log("\n" + "=".repeat(56));
if (fail.length === 0) { console.log("AGENT FLEET: PASS (routing + resolution + secret-scan)"); process.exit(0); }
console.log("AGENT FLEET: FAIL");
fail.forEach((f) => console.log("  - " + f));
process.exit(1);
