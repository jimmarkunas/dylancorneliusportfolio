# DCMLLC Cross-Agent Validation & Drift Control

## Status
**Canonical — Milestone 6 operational protocol, September 1, 2026.**

This file defines how the design system is validated across Claude, ChatGPT, and human implementation.

Milestone 6 has two layers:

1. **Static conformance** — the repository itself is checked for contradictory canonical rules, retired values in active system files, missing governance, and legacy bleed-through.
2. **Behavioral cross-agent validation** — Claude and ChatGPT independently receive the same test briefs and are compared against the same scoring rubric.

The validation mechanism is implemented now. Cross-agent certification is only considered empirically complete after both agents have produced the same test pack and their outputs have been scored.

---

# 1. Required source order for every validation run

Before generating a validation artifact, each agent must read:

1. `README.md`
2. `BRAND.md`
3. `tokens.css`
4. `COMPONENTS.md`
5. `components.html`
6. `references/README.md`
7. the applicable channel rules in `SCHEMES.md`
8. `EXCEPTIONS.md`
9. `MIGRATION.md` when modifying legacy implementation

`AUDIT.md` is historical evidence only and must not override current rules.

---

# 2. Validation test suite

Run the exact briefs in `validation/AGENT-TEST-PACK.md` independently through Claude and ChatGPT.

The seven representative tests are:

1. sales-page conversion hero
2. testimonial / proof section
3. simple lead form
4. 1200×628 WordPress featured image
5. Gutenberg blog-post CTA treatment
6. Elementor dark section
7. Skool cover / post-header asset

These tests intentionally span brand invariants, tokens, components, imagery, accessibility, routing, and platform-specific delivery rules.

---

# 3. Scoring rubric

Score every test on ten dimensions using 0, 1, or 2 points.

| Dimension | 0 | 1 | 2 |
| --- | --- | --- | --- |
| Canonical color use | materially wrong/retired | mostly correct with minor drift | canonical tokens/roles correct |
| Typography | wrong family/hierarchy | hierarchy mostly right | correct family, hierarchy, line-height intent |
| CTA hierarchy | wrong dominant action | correct action, weak hierarchy | correct primary/secondary hierarchy and copy |
| CTA routing | wrong audience route | unresolved/ambiguous | correct route or correctly states why no route applies |
| Component contract | invented/conflicting pattern | recognizable but incomplete | correct anatomy/variant from `COMPONENTS.md` |
| Reference selection | random/legacy/unverified | acceptable but not preferred | correct approved imagery/reference hierarchy |
| Responsive behavior | desktop-only/broken | plausible but incomplete | matches component collapse guidance |
| Accessibility | material failure | partially addressed | focus/target/contrast/labels/alt/reduced motion as applicable |
| Channel mechanics | violates platform scheme | mostly compliant | exact applicable `SCHEMES.md` behavior |
| Copy/brand discipline | hype, jargon, invented proof | mostly on-brand | direct, plain, verified, hierarchy-aligned copy |

Maximum score: **20 points per test**.

## Pass threshold

A test passes at **18/20 or higher** with **no critical failure**.

A full agent run passes when:
- all seven tests individually pass, and
- no critical failure appears anywhere in the run.

---

# 4. Critical failures

Any one of these fails a test regardless of numeric score:

- introducing a retired brand color as a new active design value
- using a non-Inter web font without an explicit channel exception
- using Bricolage Grotesque as a normal web/UI font rather than the approved featured-image exception
- routing a scheduling CTA to the wrong canonical audience path
- inventing client proof, results, ratings, scarcity, or guarantees
- pairing a client portrait with another client's proof
- using arbitrary repository/template imagery as approved precedent
- violating a channel rule likely to break delivery, such as putting arbitrary `<script>` in Elementor Custom HTML
- removing visible keyboard focus without an equivalent accessible replacement
- silently changing canonical brand/component rules inside a one-off output

---

# 5. Required agent decision log

Every validation artifact must include a compact decision log after the artifact itself.

For each major choice, state:

| Choice | Canonical source | Rule used |
| --- | --- | --- |
| Primary CTA | `BRAND.md` / `COMPONENTS.md` | Orange `#D9660E`, white text |
| Imagery | `references/README.md` | approved portrait/proof hierarchy |
| Channel behavior | `SCHEMES.md` | applicable delivery scheme |

The goal is not verbose reasoning. The goal is traceability: another agent should be able to identify which canonical layer drove the output.

---

# 6. Drift-resolution rule

When Claude and ChatGPT differ materially:

1. identify the smallest ambiguous or conflicting canonical rule
2. decide whether the issue belongs to Brand, token, component, reference, scheme, or exception
3. update that canonical layer
4. do **not** patch the discrepancy independently in Claude and ChatGPT prompts
5. rerun the affected validation test
6. record a persistent one-off exception in `EXCEPTIONS.md` only when the difference is intentionally contextual rather than a system change

## Layer selection

- identity / tone / invariant visual principle → `BRAND.md`
- reusable numeric/color/spacing primitive → `tokens.css`
- reusable component anatomy/behavior → `COMPONENTS.md` + `components.html`
- approved photography/visual precedent → `references/`
- platform/channel technical behavior → `SCHEMES.md`
- justified noncanonical one-off → `EXCEPTIONS.md`
- legacy conversion work → `MIGRATION.md`

---

# 7. Static conformance audit — baseline

Baseline run: **September 1, 2026**.

Findings:

- Canonical Orange `#D9660E`, hover `#BE590C`, Navy `#27374D`, and Teal `#1A9E8E` are consistently represented in current Brand/Component/token documentation.
- Searches for retired values such as `#1E3A5F`, `#2C2C55`, and `#FF6600` return expected historical/prohibition documentation and legacy implementation files.
- Legacy `index.html`, `hero-only.html`, `assets/css/style.css`, and `assets/css/responsive.css` still contain older colors/fonts. This is **known migration debt**, not canonical-system drift.
- `AUDIT.md` intentionally contains historical fonts/colors and is exempt from active-style drift checks.
- `BRAND.md` intentionally names retired colors/typefaces in prohibition rules and is exempt when those values occur only in clearly marked retired/prohibited sections.
- Current `tokens.css` carries the canonical active palette rather than retired values.

**Baseline result: PASS for canonical-system static conformance. Legacy implementation remains intentionally unmigrated until touched.**

---

# 8. False-positive rule for drift checks

A retired value appearing in one of the following contexts is not automatically drift:

- `AUDIT.md` historical evidence
- `BRAND.md` retired/prohibited lists
- `README.md`, `ROADMAP.md`, `VALIDATION.md`, or `MIGRATION.md` explaining migration history
- legacy implementation explicitly listed in `MIGRATION.md`

A retired value is active drift when it is newly used as a positive/current rule in:

- `tokens.css`
- `COMPONENTS.md`
- `components.html`
- `SCHEMES.md`
- `references/` visual guidance
- newly created production assets/pages without an approved exception

---

# 9. Validation cadence

Run the full seven-test cross-agent suite when:

- a canonical Brand rule changes
- core tokens change
- a major component contract changes
- reference hierarchy changes substantially
- a new major channel scheme is added
- repeated production differences appear between Claude and ChatGPT

For smaller changes, rerun only the affected representative tests.

Static conformance should be checked whenever meaningful design-system rules are changed.

---

# 10. Milestone 6 completion/certification criteria

Implementation criteria:
- [x] repeatable test pack defined
- [x] scoring rubric defined
- [x] critical failures defined
- [x] decision-log format defined
- [x] drift-resolution workflow defined
- [x] static conformance baseline run
- [x] legacy migration policy formalized
- [x] exception registry formalized
- [x] AI entry points updated to require validation governance

Cross-agent certification criteria:
- [ ] Claude completes all seven identical test briefs
- [ ] ChatGPT completes all seven identical test briefs
- [ ] both runs are scored using `validation/SCORECARD.md`
- [ ] all material discrepancies are resolved in canonical files
- [ ] rerun confirms all seven tests pass for both agents

**Result:** Milestone 6 is operationalized. Cross-agent certification remains an empirical gate and must not be claimed until both agent runs have actually been compared.
