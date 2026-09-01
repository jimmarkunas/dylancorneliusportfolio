# DCMLLC Design System Roadmap

## Refined six-milestone plan

The six-stage structure is complete at the implementation level. Milestone 6 remains an ongoing validation discipline with an empirical cross-agent certification gate.

---

## Milestone 1 — Authority & Source of Truth ✅

**Goal:** establish one governing source and prevent cross-tool drift.

Completed:
- GitHub established as durable source of truth
- precedence/governance rules established
- `AGENTS.md` and `CLAUDE.md` created as thin AI entry points
- legacy portfolio/Figma treated as evidence rather than automatic doctrine

---

## Milestone 2 — Evidence & Production Audit ✅

**Goal:** identify what exists, what has proven useful, what is legacy residue, and what conflicts.

Completed:
- typography/color/layout/motion/component audit
- legacy/template contamination identified
- production-tested Claude rules introduced as higher-authority evidence
- conflicts explicitly surfaced rather than averaged

Primary artifact: `AUDIT.md`

---

## Milestone 3 — Canonical Foundations & Reconciliation ✅

**Goal:** encode the invariant brand system after reconciling production-tested practice.

Completed:
- Brand Orange `#D9660E`; hover `#BE590C`
- Brand Navy `#27374D`
- Brand Teal `#1A9E8E`
- previous M3 orange/navy/dark values retired
- Inter fixed as sole web typeface
- typography/spacing/radius/shadow/motion tokens reconciled
- logo status resolved
- design-affecting copy constraints formalized
- channel-specific rules separated into `SCHEMES.md`

Primary artifacts: `BRAND.md`, `tokens.css`, `SCHEMES.md`

---

## Milestone 4 — Component & Page Pattern System ✅

**Goal:** turn primitive rules into reusable, visual, executable patterns that Claude and ChatGPT can reuse without inventing new styling.

Completed:
- typography hierarchy
- CTA/button hierarchy
- links, cards, proof, process, results, guarantees
- desktop/mobile navigation principles
- forms/validation
- dark sections, icons, portrait/image rules
- conversion hero and sales-page section patterns
- article CTA hierarchy
- component responsive/accessibility/governance rules

Primary artifacts: `COMPONENTS.md`, `components.html`

---

## Milestone 5 — Channel Schemes & Approved Reference Library ✅

**Goal:** pair the component system with platform-specific execution rules and approved visual precedent.

Completed:
- Elementor/WordPress HTML, Gutenberg, blank-canvas, featured-media, featured-image, blog-post, five-file delivery, scheduling routing, sales-page and Skool schemes
- cross-channel asset reuse policy
- canonical logo/reference hierarchy
- Dylan portrait hierarchy and named-client proof-photo rules
- crop-safe featured-image reference treatment
- component-to-reference mapping
- legacy/unclassified imagery quarantine
- visual reference gallery

Primary artifacts: `SCHEMES.md`, `references/README.md`, `references/index.html`

---

## Milestone 6 — Cross-Agent Validation, Migration & Drift Control ✅ OPERATIONALIZED / 🔶 CERTIFICATION

**Goal:** make consistency measurable, make legacy convergence deliberate, and correct drift in the shared system rather than in separate agent prompts.

### Implemented

- canonical validation protocol in `VALIDATION.md`
- seven identical Claude/ChatGPT test briefs in `validation/AGENT-TEST-PACK.md`
- shared 20-point scoring rubric and certification template in `validation/SCORECARD.md`
- critical-failure rules
- compact decision-log requirement for traceability
- static repository conformance baseline
- false-positive rules for historical/retired-value documentation
- drift-resolution workflow by canonical layer
- legacy migration policy and migration ledger in `MIGRATION.md`
- persistent exception registry in `EXCEPTIONS.md`
- AI entry-point requirements wired into `AGENTS.md` and `CLAUDE.md`

### Static baseline result

**PASS — September 1, 2026.**

Canonical active tokens/rules are internally aligned. Retired colors/typefaces remain in clearly historical/prohibited documentation and known legacy production files; these are tracked as migration debt rather than mistaken for current system rules.

### Empirical cross-agent certification gate

Certification is complete only after:

1. Claude runs all seven briefs unchanged.
2. ChatGPT runs all seven briefs unchanged.
3. Both runs are scored against the same rubric.
4. Every test scores at least 18/20 with no critical failure.
5. Material discrepancies are corrected in the appropriate canonical layer.
6. A rerun confirms all affected tests pass for both agents.

Because this environment cannot invoke the user's Claude runtime, that paired behavioral run remains **PENDING**, not silently assumed.

### Ongoing operating rule

After certification, Milestone 6 becomes maintenance rather than a new project phase:
- rerun affected tests after material design-system changes
- run the full suite after large changes/new major channels
- migrate legacy implementation only when touched or explicitly commissioned
- record justified contextual deviations in `EXCEPTIONS.md`
- periodically remove obsolete/duplicated guidance

---

# Current one-line roadmap

**✅ M1 Authority → ✅ M2 Audit → ✅ M3 Foundations/Reconciliation → ✅ M4 Components & Page Patterns → ✅ M5 Schemes & References → ✅ M6 Operationalized / 🔶 Cross-Agent Certification**
