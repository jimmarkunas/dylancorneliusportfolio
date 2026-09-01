# DCMLLC Design System Roadmap

## Refined six-milestone plan

The original six-step roadmap is retained, but the boundaries are clarified so brand invariants, reusable components, and channel-specific delivery schemes do not drift into one another.

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

## Milestone 4 — Component & Page Pattern System 🔶 CURRENT

**Goal:** turn primitive rules into reusable, visual, executable patterns that Claude and ChatGPT can copy without inventing new styling.

Required component catalog:
- typography hierarchy
- primary orange CTA
- secondary Navy button
- Navy outline button
- Teal secondary button
- inline text links
- content cards
- testimonial/proof cards
- process/framework blocks
- case-study/result layouts
- guarantee component/stamp treatment
- navigation + active states
- mobile navigation principles
- form fields, labels, help text, validation/error states
- dark section treatment
- image/portrait treatments
- icon treatment/system

Required page patterns:
- sales page sequence: Hero → Problem → Solution → Social Proof → Guarantee → CTA
- article/post CTA placement pattern
- simple conversion section
- proof/testimonial band

Responsive behavior should be specified at the component level as components are approved.

**Primary artifact:**
- `components.html`

**Completion test:** a human, Claude, or ChatGPT can open one ordinary HTML file and visually understand the approved component grammar without reading legacy portfolio CSS.

---

## Milestone 5 — Channel Schemes & Approved Reference Library

**Goal:** pair the design system with channel-specific execution rules and approved visual precedent.

Already started:
- Elementor/WordPress delivery scheme
- Gutenberg scheme
- featured-image 1200×628 scheme
- WordPress post-content and five-file delivery schemes
- scheduling-link routing
- high-level sales-page composition scheme

Still required:
- approved reference-image library
- canonical headshot/reference crops
- strongest approved photography examples by use case
- true vector logo task or source-master identification
- Skool cover-image scheme
- Skool post-header scheme
- mobile blog-grid thumbnail validation
- any future social/presentation schemes that prove repeatedly necessary

**Primary artifacts:**
- `SCHEMES.md`
- `references/`

**Completion test:** channel differences are explicit and no AI needs to infer whether WordPress, featured-image, Skool, or general-web rules apply.

---

## Milestone 6 — Cross-Agent Validation, Migration & Drift Control

**Goal:** prove that Claude, ChatGPT, and humans can independently create consistent work from the same GitHub system.

Required validation:
- give Claude and ChatGPT the same representative design tasks
- compare color, typography, spacing, CTA hierarchy, imagery, copy, and channel handling
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

**Completion test:** independent agents produce materially consistent branded output and can explain which canonical rule or scheme drove each major choice.

---

# Current one-line roadmap

**✅ M1 Authority → ✅ M2 Audit → ✅ M3 Foundations/Reconciliation → 🔶 M4 Components & Page Patterns → M5 Schemes & References → M6 Validation/Migration/Drift Control**
