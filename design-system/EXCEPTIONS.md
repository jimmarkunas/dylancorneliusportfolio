# DCMLLC Design System Exceptions

## Status
**Canonical registry — Milestone 6.**

This file records intentional deviations from the canonical design system that should persist without being promoted into global rules.

**Current active exceptions: none.**

One-off production changes do not become canonical merely because they worked once.

---

# When to use an exception

Use an exception only when:
- the canonical rule is still correct generally
- the specific deliverable has a real contextual need to differ
- the deviation is intentional and approved
- promoting the deviation globally would create worse or misleading rules

Do **not** use an exception to avoid fixing an ambiguous or incorrect canonical rule.

If the same exception recurs repeatedly, review whether it should become a Brand, token, component, reference, or scheme change.

---

# Required exception record

Each active exception must include:

- **ID:** short stable identifier
- **Status:** active / superseded / expired
- **Scope:** exact page, asset, component, campaign, or channel
- **Canonical rule being overridden:** file + rule
- **Approved deviation:** exact treatment
- **Reason:** practical justification
- **Approved by:** Dylan Cornelius unless another explicit approval path is documented
- **Date approved**
- **Review trigger:** date or condition that should cause reconsideration
- **Replacement/migration note:** what happens when the exception ends

Template:

```md
## EX-001 — Short name

- Status: active
- Scope: ...
- Canonical rule: `COMPONENTS.md` — ...
- Approved deviation: ...
- Reason: ...
- Approved by: Dylan Cornelius
- Date approved: YYYY-MM-DD
- Review trigger: ...
- End-state: ...
```

---

# Exception governance

- exceptions are narrow by default
- exceptions do not change `tokens.css`
- agents must not generalize an exception to unrelated work
- expired/superseded exceptions remain in this file for history but are clearly marked inactive
- if an exception becomes the better reusable rule, update the appropriate canonical file and mark the exception superseded
- do not maintain separate exception lists in Claude and ChatGPT prompts
