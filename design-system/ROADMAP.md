# DCMLLC Design System Roadmap

## Refined six-milestone plan

The original six-step roadmap is retained, with brand invariants, reusable components, and channel-specific delivery schemes kept separate so they do not drift into one another.

---

## Milestone 1 — Authority & Source of Truth ✅

**Goal:** establish one governing source and prevent cross-tool drift.

Completed:
- GitHub established as durable source of truth
- precedence/governance rules established
- `AGENTS.md` and `CLAUDE.md` created as thin AI entry points
- legacy portfolio/Figma treated as evidence rather than automatic doctrine

**Primary artifacts:**
- `README.md`
- `AGENTS.md`
- `CLAUDE.md`

---

## Milestone 2 — Evidence & Production Audit ✅

**Goal:** identify what exists, what has proven useful, what is legacy residue, and what conflicts.

Completed:
- typography/color/layout/motion/component audit
- legacy/template contamination identified
- production-tested Claude rules introduced as higher-authority evidence
- conflicts explicitly surfaced rather than averaged

**Primary artifact:**
- `AUDIT.md`

---

## Milestone 3 — Canonical Foundations & Reconciliation ✅

**Goal:** encode the invariant brand system after reconciling production-tested practice.

Completed:
- production-tested Claude rules incorporated as canonical where explicit
- Brand Orange fixed at `#D9660E`; hover `#BE590C`
- Brand Navy fixed at `#27374D`
- Brand Teal fixed at `#1A9E8E`
- Deep Indigo and previous M3 orange/navy values retired
- Inter fixed as sole web typeface
- typography/spacing/radius/shadow/motion tokens reconciled
- logo status resolved
- copy constraints that affect design formalized
- channel-specific rules separated into `SCHEMES.md`

**Primary artifacts:**
- `BRAND.md`
- `tokens.css`
- `SCHEMES.md`

---

## Milestone 4 — Component & Page Pattern System ✅

**Goal:** turn primitive rules into reusable, visual, executable patterns that Claude and ChatGPT can reuse without inventing new styling.

Completed component contracts:
- typography hierarchy
- primary Orange CTA
- secondary Navy button
- Navy outline button
- Teal secondary button
- inline text links
- standard / feature / dark cards
- testimonial/proof cards
- process/framework blocks
- case-study/result layouts
- guarantee/risk-reversal treatment
- desktop navigation + active states
- mobile navigation principles
- form fields, labels, help text, validation/error states
- dark-section treatment
- image/portrait treatments
- icon system
- conversion hero

Completed page patterns:
- Hero → Problem → Solution → Social Proof → Guarantee → CTA sales-page sequence
- Problem, Solution, Social Proof, Guarantee, and conversion CTA section contracts
- article/post CTA hierarchy
- proof/testimonial bands

Completed behavior/governance:
- wide / compact / small-mobile responsive guidance
- component accessibility baseline
- component change-control process
- separation between invariant component contracts and channel delivery schemes

**Primary artifacts:**
- `COMPONENTS.md` — canonical component contracts
- `components.html` — canonical visual implementation reference

**Completion test:** a human, Claude, or ChatGPT can understand both the behavioral contract and visual grammar without reading legacy portfolio CSS.

---

## Milestone 5 — Channel Schemes & Approved Reference Library 🔶 CURRENT

**Goal:** pair the design system with channel-specific execution rules and approved visual precedent.

Already implemented:
- Elementor/WordPress delivery scheme
- Gutenberg scheme
- Elementor blank-canvas scheme
- featured-image 1200×628 scheme
- WordPress post-content and five-file delivery schemes
- scheduling-link routing
- high-level sales-page composition scheme

Still required:
- approved reference-image library
- canonical headshot/reference crops
- strongest approved photography examples by use case
- reference mapping from components to approved imagery where useful
- true vector logo task or source-master identification
- Skool cover-image scheme
- Skool post-header scheme
- mobile blog-grid thumbnail validation
- any future social/presentation schemes that prove repeatedly necessary

**Primary artifacts:**
- `SCHEMES.md`
- `references/`

**Completion test:** channel differences are explicit and approved visual precedent is available, so no AI needs to infer whether WordPress, featured-image, Skool, general-web, or asset-specific rules apply.

---

## Milestone 6 — Cross-Agent Validation, Migration & Drift Control

**Goal:** prove that Claude, ChatGPT, and humans can independently create consistent work from the same GitHub system.

Required validation:
- give Claude and ChatGPT the same representative design tasks
- compare color, typography, spacing, CTA hierarchy, imagery, copy, component choice, and channel handling
- identify any ambiguous rule that produces materially different output
- tighten rules only where ambiguity causes real drift

Required migration/governance:
- intentionally migrate legacy portfolio pages when touched
- never perform an automatic global redesign merely because tokens exist
- version meaningful system changes in Git
- record approved exceptions rather than letting exceptions become accidental rules
- periodically remove obsolete/duplicate guidance

Suggested representative tests:
1. sales-page hero
2. testimonial/proof section
3. simple form section
4. 1200×628 featured image
5. Gutenberg blog-post CTA
6. Elementor dark section
7. Skool asset after its scheme is defined

**Completion test:** independent agents produce materially consistent branded output and can explain which canonical rule, component contract, reference, or scheme drove each major choice.

---

# Current one-line roadmap

**✅ M1 Authority → ✅ M2 Audit → ✅ M3 Foundations/Reconciliation → ✅ M4 Components & Page Patterns → 🔶 M5 Schemes & References → M6 Validation/Migration/Drift Control**
