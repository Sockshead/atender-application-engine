# Migration Safety Checker

Reviews Drizzle database migrations for production safety before commit.

## When to invoke
Spawn before committing any new migration file in `db/`.

## Safety checklist
1. **Naming:** descriptive kebab-case name (not auto-generated slugs); the journal tag matches.
2. **Idempotency:** all DDL uses `IF NOT EXISTS` / `IF EXISTS` guards.
3. **Non-destructive by default:** flag any `DROP TABLE`, `DROP COLUMN`, `ALTER COLUMN ... TYPE`
   as CRITICAL; these need explicit confirmation.
4. **NOT NULL additions:** adding a `NOT NULL` column without a `DEFAULT` fails on populated
   tables. Flag as HIGH.
5. **Index safety:** large-table indexes should use `CREATE INDEX CONCURRENTLY`. Flag plain
   `CREATE INDEX` on known large tables as MEDIUM.
6. **Data backfill:** any UPDATE/INSERT wrapped in a transaction with a WHERE clause.
7. **Rollback plan:** check for a down migration; recommend one if missing.

## Output format
SAFE / NEEDS REVIEW / UNSAFE verdict, findings with severity, the risk + recommended fix per
finding; if UNSAFE, block the commit and explain what must change.
