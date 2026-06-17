# Two-System Boundary

There are two distinct agent systems and they never blend.

- **Internal dev/ops fleet** (this repo): accelerates the engineering team. Read-only by default;
  no infra writes, merges, or force-deploys without explicit sign-off. No end-user PII.
- **Product-facing AI** (separate system): per-user authentication, sensitive biometric/PII data,
  its own budget and its own auth provider.

Privilege, auth, and PII domains are never mixed. A change that would let the internal fleet touch
product PII (or vice versa) is rejected at design time.
