# Dylan Cornelius Design System

## Status
Milestones 1–5 are complete and reconciled with the production-tested Claude project rules supplied September 1, 2026. **Milestone 6 — Cross-Agent Validation, Migration & Drift Control — is now current.**

## Purpose
This directory is the canonical design-system authority for Dylan Cornelius / DCMLLC branded web pages and graphical assets.

The system deliberately separates five layers:

1. **Brand invariants** — `BRAND.md`
2. **Design primitives** — `tokens.css`
3. **Reusable component/page-pattern contracts** — `COMPONENTS.md` + `components.html`
4. **Channel-specific delivery schemes** — `SCHEMES.md`
5. **Approved visual precedent** — `references/README.md` + `references/index.html`

This keeps production constraints from mutating the brand, prevents legacy imagery from becoming accidental precedent, and gives Claude/ChatGPT the same executable visual grammar.

## Authority and precedence

1. **Explicit current written approval from Dylan Cornelius**
2. **Canonical files in `/design-system/`**
3. **Approved reference assets and mappings in `/design-system/references/`**
4. **Existing portfolio implementation**
5. **Existing Figma concepts and historical brand materials**
6. **AI inference or newly invented styling**

The September 1, 2026 production-tested Claude brief has been incorporated into the canonical files. Where the previous Milestone 3 baseline conflicted, the production-tested rules won.

## Canonical files

- `README.md` — governance and current status
- `ROADMAP.md` — refined six-milestone roadmap
- `AUDIT.md` — historical evidence, conflicts, and legacy/template residue; **not canonical styling**
- `BRAND.md` — canonical invariant brand, visual, imagery, and design-affecting copy rules
- `tokens.css` — canonical machine-readable design values
- `COMPONENTS.md` — canonical component/page-pattern contracts, responsive behavior, accessibility, and usage rules
- `components.html` — canonical visual implementation reference for reusable components and page patterns
- `SCHEMES.md` — canonical channel-specific delivery rules for Elementor, Gutenberg, featured images, WordPress posts, Skool, scheduling routing, and cross-channel reuse
- `references/README.md` — canonical reference-asset hierarchy, usage rules, and legacy-image quarantine
- `references/index.html` — visual gallery of approved, addressable reference assets

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
- Skool group-cover master: DCMLLC-owned 16:9 / 1600×900 production standard with central safe zone
- Skool post-header master: 1200×675 / 16:9 when a distinct Skool asset is actually needed

Retired values such as `#EA5116`, `#1E3A5F`, and `#2C2C55` must not appear in new work.

## AI usage

Before producing or modifying branded work:

1. Read this README.
2. Read `BRAND.md`.
3. Read/use `tokens.css`.
4. Read `COMPONENTS.md` for component anatomy, variants, responsive behavior, and accessibility rules.
5. Use `components.html` as the visual implementation precedent.
6. Read `references/README.md` and use `references/index.html` when selecting imagery, logo treatment, client proof, or visual precedent.
7. If the deliverable is channel-specific, read the matching rules in `SCHEMES.md`.
8. Use `AUDIT.md` only for history/evidence; never let it override current canonical rules.
9. Use `ROADMAP.md` to understand what is complete versus still being validated.

If a component need is already covered by `COMPONENTS.md`, reuse it before inventing a new pattern. If imagery is already mapped in `references/README.md`, use that hierarchy before browsing arbitrary repository assets. When a new requirement conflicts with canonical rules, follow Dylan's explicit current instruction and update the canonical files if the change is intended to persist.

## Change control

- system changes are intentional and reviewable in Git history
- one-off exceptions remain exceptions unless explicitly promoted
- do not silently average conflicting rules
- do not copy arbitrary legacy CSS into new components
- do not treat every image in `/assets/images/` as approved reference material
- migrate legacy pages deliberately when they are touched
- when production experience reveals a component problem, update `COMPONENTS.md` and `components.html` together
- channel-only differences belong in `SCHEMES.md`, not in global tokens
- reference changes belong in `references/README.md` and `references/index.html`
- avoid duplicating canonical prose across `AGENTS.md` and `CLAUDE.md`; those files only point agents here

## Current one-line roadmap

**✅ M1 Authority → ✅ M2 Audit → ✅ M3 Foundations/Reconciliation → ✅ M4 Components & Page Patterns → ✅ M5 Schemes & References → 🔶 M6 Validation/Migration/Drift Control**
