# DCMLLC Legacy Migration Policy

## Status
**Canonical — Milestone 6.**

The design system does not trigger an automatic redesign of the existing portfolio. Legacy implementation is migrated intentionally when a page or component is touched for a real product/content reason.

The goal is controlled convergence, not wholesale visual churn.

---

# 1. Migration principles

When modifying legacy pages:

1. preserve content and functionality unless the task explicitly changes them
2. replace retired visual values only in the area being intentionally changed
3. use `BRAND.md`, `tokens.css`, `COMPONENTS.md`, approved references, and the applicable scheme
4. do not copy legacy CSS into new components merely to preserve pixel parity
5. do not rewrite unrelated sections as collateral work
6. verify responsive behavior and accessibility after migration
7. record a real justified exception in `EXCEPTIONS.md` rather than silently retaining a conflicting rule

---

# 2. Known migration debt

The following files are legacy implementation and are **not** canonical design-system sources:

| File | Known legacy traits | Migration rule |
| --- | --- | --- |
| `index.html` | `#FF6600`, brown/blue pathway colors, old dark system | migrate affected sections when the homepage is intentionally edited |
| `hero-only.html` | duplicate legacy hero colors/patterns | treat as historical/demo implementation; do not copy into new work |
| `seekers.html` | inherited template structure/content/styles | migrate only if this implementation remains product-relevant; quarantine template residue |
| `seekers/index.html` | duplicate inherited implementation | same as above |
| `assets/css/style.css` | Roboto/Roboto Serif/DM Sans, many legacy colors/radii/template components | do not use as source of truth; replace values incrementally in touched areas |
| `assets/css/responsive.css` | legacy responsive utility values/colors | use current component responsive contracts for new/touched components |
| `assets/images/about/` | template/decorative imagery mixed with implementation assets | do not promote to approved reference without explicit approval |
| `assets/images/project/` | template/project imagery | historical only unless explicitly approved |
| `assets/images/blog/` | duplicate/legacy image placeholders | not canonical featured-image precedent |

---

# 3. Canonical migration map

Use this map when an affected legacy value is encountered:

| Legacy | Canonical replacement / treatment |
| --- | --- |
| `#FF6600`, `#FF630E`, `#FD562A`, `#EC671A`, `#ff4a17`, `#ff7a00`, `#EA5116` | Brand Orange `#D9660E`; hover `#BE590C` where interactive |
| `#1E3A5F` / arbitrary dark blues / near-blacks used as brand dark | Brand Navy `#27374D` for branded dark/structural roles |
| `#2C2C55` | Brand Navy `#27374D` |
| Roboto / Roboto Serif / DM Sans / Open Sans / Playfair web use | Inter 400/600/700 |
| arbitrary button colors | component hierarchy from `COMPONENTS.md` |
| arbitrary shadows/radii | canonical tokens |
| random/testimonial placeholder imagery | approved references only |
| generic template services/projects | remove or replace only when content work explicitly requires it |

Do not mechanically replace colors when semantic meaning differs. Use the canonical **role**, not search-and-replace alone.

---

# 4. Migration levels

## Level 0 — untouched legacy

No changes. Legacy implementation may remain as-is.

## Level 1 — local component migration

A specific component/section is being edited. Bring that component fully into current canonical compliance.

## Level 2 — page migration

A page is being materially redesigned or rebuilt. Use current tokens/components/references/schemes throughout the page while preserving approved content/functionality unless the brief changes them.

## Level 3 — site-system migration

Only perform when explicitly commissioned. This may include shared navigation/footer/theme CSS and broader template cleanup.

Never escalate from Level 1 to Level 3 without explicit scope.

---

# 5. Touched-component completion checklist

A migrated component is complete when:

- canonical colors/tokens used
- Inter used for web/UI
- component anatomy matches `COMPONENTS.md`
- CTA hierarchy/routing correct
- approved imagery/reference hierarchy used
- responsive behavior verified
- focus/labels/alt/contrast handled as applicable
- applicable channel scheme followed
- no unrelated legacy design value copied forward
- any intentional deviation is recorded in `EXCEPTIONS.md`

---

# 6. Migration ledger

Record deliberate migrations below when they materially reduce legacy debt.

| Date | Scope | Level | Result | Notes |
| --- | --- | --- | --- | --- |
| 2026-09-01 | `/design-system/` itself | system | complete | canonical system separated from legacy portfolio implementation |

Add page/component migrations here only when actual legacy production code is updated.
