# Dylan Cornelius Design System

## Status
Milestones 1–5 are complete. **Milestone 6 — Cross-Agent Validation, Migration & Drift Control — is operationalized.** The repository/static baseline passes; empirical Claude-vs-ChatGPT certification remains pending the first paired seven-test run.

## Purpose
This directory is the canonical design-system authority for Dylan Cornelius / DCMLLC branded web pages and graphical assets.

The system deliberately separates six layers:

1. **Brand invariants** — `BRAND.md`
2. **Design primitives** — `tokens.css`
3. **Reusable component/page-pattern contracts** — `COMPONENTS.md` + `components.html`
4. **Channel-specific delivery schemes** — `SCHEMES.md`
5. **Approved visual precedent** — `references/README.md` + `references/index.html`
6. **Validation, exceptions, and legacy convergence** — `VALIDATION.md`, `EXCEPTIONS.md`, `MIGRATION.md`, `validation/`

This structure prevents platform mechanics, legacy implementation, one-off exceptions, or agent-specific prompts from silently mutating the brand.

## Authority and precedence

1. **Explicit current written approval from Dylan Cornelius**
2. **Canonical files in `/design-system/`**
3. **Approved reference assets and mappings in `/design-system/references/`**
4. **Existing portfolio implementation**
5. **Existing Figma concepts and historical brand materials**
6. **AI inference or newly invented styling**

The September 1, 2026 production-tested Claude brief has been incorporated into the canonical files. Where the earlier Milestone 3 baseline conflicted, the production-tested rules won.

## Canonical files

- `README.md` — governance and current status
- `ROADMAP.md` — six-milestone roadmap
- `AUDIT.md` — historical evidence and legacy/template residue; **not canonical styling**
- `BRAND.md` — invariant brand, visual, imagery, and design-affecting copy rules
- `tokens.css` — machine-readable design values
- `COMPONENTS.md` — component/page-pattern contracts, responsive behavior, accessibility, and usage rules
- `components.html` — canonical visual implementation reference
- `SCHEMES.md` — channel-specific delivery rules for Elementor, Gutenberg, featured images, WordPress, Skool, scheduling routing, and cross-channel reuse
- `references/README.md` — approved reference hierarchy and legacy-image quarantine
- `references/index.html` — visual gallery of approved, addressable references
- `VALIDATION.md` — cross-agent scoring, static conformance, drift-resolution rules, and certification gate
- `validation/AGENT-TEST-PACK.md` — seven identical Claude/ChatGPT validation briefs
- `validation/SCORECARD.md` — shared scoring/certification template
- `EXCEPTIONS.md` — canonical registry of intentional non-global deviations
- `MIGRATION.md` — controlled legacy-convergence policy and migration ledger

## Key reconciled decisions

- Brand Orange: `#D9660E`
- Orange hover/active: `#BE590C`
- Brand Navy: `#27374D`
- Brand Teal: `#1A9E8E`
- Dark surface: Brand Navy `#27374D`
- Body text: `#4B5563`
- Muted/caption text: `#6B7280`
- Web font: Inter only
- Featured-image headline exception: Bricolage Grotesque Bold
- Primary CTA: Orange fill + White text
- Canonical logo: `assets/images/brand/dylan-logo-150.svg` until Dylan explicitly approves a true vector replacement
- WordPress featured-image master: 1200×628 with crop-safe essential-message zone
- Skool group-cover master: DCMLLC-owned 16:9 / 1600×900 production standard
- Skool post-header master: 1200×675 / 16:9 when a distinct Skool asset is justified

Retired values such as `#EA5116`, `#1E3A5F`, and `#2C2C55` must not appear in new active work.

## AI usage

Before producing or modifying branded work:

1. Read this README.
2. Read `BRAND.md`.
3. Read/use `tokens.css`.
4. Read `COMPONENTS.md`; use `components.html` as visual precedent.
5. Read `references/README.md` / `references/index.html` before selecting imagery or proof.
6. Read the applicable channel rules in `SCHEMES.md`.
7. Read `EXCEPTIONS.md` before intentionally deviating from a canonical rule.
8. Read `MIGRATION.md` when touching legacy portfolio implementation.
9. Follow `VALIDATION.md` when changing the design system or running cross-agent validation.
10. Use `AUDIT.md` only for history/evidence.

If a component or reference already exists, reuse it before inventing a new pattern. If production experience exposes a recurring problem, update the smallest appropriate canonical layer rather than patching Claude and ChatGPT independently.

## Change control

- meaningful system changes are reviewable in Git history
- one-off deviations belong in `EXCEPTIONS.md`, not global tokens
- repeated exceptions should trigger review of the underlying canonical rule
- legacy pages migrate deliberately when touched; no automatic global redesign
- component changes update `COMPONENTS.md` and `components.html` together
- channel-only differences belong in `SCHEMES.md`
- reference changes belong in `references/README.md` and `references/index.html`
- material system changes rerun the affected validation tests
- agent divergence is corrected in the shared design system, not in separate hidden prompt rules

## Phase 6 state

Static canonical-system conformance baseline: **PASS — September 1, 2026.**

Cross-agent behavioral certification: **PENDING** until Claude and ChatGPT both complete `validation/AGENT-TEST-PACK.md` and pass `validation/SCORECARD.md` after any required reconciliation.

## Current one-line roadmap

**✅ M1 Authority → ✅ M2 Audit → ✅ M3 Foundations/Reconciliation → ✅ M4 Components & Page Patterns → ✅ M5 Schemes & References → ✅ M6 Operationalized / 🔶 Cross-Agent Certification**
