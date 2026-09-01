# DCMLLC Design System Roadmap

## Refined six-milestone plan

The six-stage structure is retained, with brand invariants, reusable components, channel-specific delivery schemes, and approved visual references kept separate so they do not drift into one another.

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
- Orange primary CTA; Navy/outline/Teal secondary variants
- inline links
- cards, testimonial/proof, process/framework, result/case-study, guarantee
- desktop/mobile navigation principles
- forms and validation
- dark sections
- icon grammar
- portrait/image component rules
- conversion hero
- Problem / Solution / Social Proof / Guarantee / CTA sections
- Hero → Problem → Solution → Social Proof → Guarantee → CTA sales-page sequence
- article CTA hierarchy
- component responsive behavior
- component accessibility baseline
- component governance

Primary artifacts: `COMPONENTS.md`, `components.html`

---

## Milestone 5 — Channel Schemes & Approved Reference Library ✅

**Goal:** pair the component system with platform-specific execution rules and approved visual precedent so agents do not infer channel mechanics or select arbitrary imagery.

Completed channel schemes:
- Elementor/WordPress HTML
- Gutenberg
- Elementor blank canvas
- WordPress featured-media caveat
- 1200×628 featured-image/Open Graph master
- mobile/blog-grid crop-safe behavior without creating a duplicate mobile master
- WordPress post-content delivery
- five-file WordPress deliverable standard
- scheduling-link routing
- sales-page composition
- Skool group cover
- Skool group icon
- Skool post header / event imagery
- cross-channel asset reuse policy

Completed reference system:
- canonical current logo identified
- vector-master status resolved without inventing a replacement
- primary headshot and professional contextual portrait precedents identified
- repository Dylan portrait source pool classified
- Big Bend/tandem lifestyle category formalized
- speaker/office batch category formalized
- named client proof-photo rules formalized
- featured-image crop-safe composition formalized
- component-to-reference mapping created
- legacy/unclassified imagery quarantined
- static visual reference gallery created

Primary artifacts:
- `SCHEMES.md`
- `references/README.md`
- `references/index.html`

**Completion test:** channel differences and approved visual precedent are explicit. An agent does not need to infer whether WordPress, Skool, featured-image, general-web, or asset-specific rules apply, and it does not need to browse arbitrary repository images to choose a visual.

---

## Milestone 6 — Cross-Agent Validation, Migration & Drift Control 🔶 CURRENT

**Goal:** prove that Claude, ChatGPT, and humans can independently create materially consistent work from the same GitHub system, then make drift correction part of normal maintenance.

### Validation suite

Run the same representative briefs independently through Claude and ChatGPT:

1. sales-page hero
2. testimonial/proof section
3. simple form section
4. 1200×628 featured image
5. Gutenberg blog-post CTA
6. Elementor dark section
7. Skool cover or post header

Compare:
- color/token selection
- typography hierarchy
- spacing/radius/shadow choices
- CTA hierarchy and routing
- imagery/reference choice
- copy constraints
- responsive behavior
- channel-specific mechanics

### Drift-resolution rule

When outputs differ materially:
1. identify the ambiguous or conflicting canonical rule
2. correct the design system, not the one-off prompt
3. update the smallest appropriate layer: BRAND, token, component, reference, or scheme
4. rerun the representative test

### Legacy migration

- migrate legacy portfolio pages intentionally when they are touched
- do not perform an automatic global redesign merely because tokens exist
- replace retired colors/fonts/components as part of purposeful edits
- keep content/functionality stable unless the task explicitly changes them

### Version/change control

- version meaningful system changes in Git
- record approved exceptions instead of allowing silent divergence
- periodically remove obsolete/duplicate guidance
- keep `AGENTS.md` and `CLAUDE.md` thin pointers to the same canonical system

**Completion test:** independent agents produce materially consistent branded output and can identify which canonical brand rule, token, component contract, reference, and channel scheme drove each major design choice.

---

# Current one-line roadmap

**✅ M1 Authority → ✅ M2 Audit → ✅ M3 Foundations/Reconciliation → ✅ M4 Components & Page Patterns → ✅ M5 Schemes & References → 🔶 M6 Validation/Migration/Drift Control**
