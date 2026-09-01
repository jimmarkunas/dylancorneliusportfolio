# Milestone 2 — Brand Audit

## Status
Completed as an evidence inventory. This file is **not** a canonical brand specification and must not be treated as one.

The purpose of this audit is to identify what the current portfolio actually does, distinguish recurring brand evidence from template residue, and create a finite decision queue for Milestone 3.

## Audit rules
- Record what exists; do not silently normalize it.
- Repetition increases confidence that a treatment was intentional, but does not make it canonical.
- Vendor/framework CSS is excluded from brand evidence unless a Dylan-specific implementation depends on it.
- Placeholder/template content and its associated treatments are low-confidence evidence.
- Conflicts remain conflicts until resolved in Milestone 3.

## Sources reviewed
### Primary repository evidence
- `index.html`
- `hero-only.html`
- `seekers.html`
- `seekers/index.html`
- `assets/css/style.css`
- `assets/css/responsive.css`
- `assets/images/brand/`
- active portrait, banner, testimonial, and supporting image directories

### Supporting brand evidence outside the portfolio
A newer branded sales-page implementation available to the project identifies a different palette and type system: navy `#1e3a5f`, orange `#ff7a00`, teal `#1A9E8E`, cream `#f3f4f6`, Open Sans body type, and Playfair Display display type. This is useful comparison evidence, but it is not promoted to canonical status here.

### Figma coverage
Figma is connected as a reference source, but no concrete Figma file URL/file key is present in this repository or other addressable project material. Direct canvas inspection was therefore not performed in this milestone. This is recorded as a source-coverage gap rather than filled by inference.

---

# 1. Typography inventory

## Portfolio implementation
The first-party stylesheet imports:
- `Roboto`
- `Roboto Serif`
- `DM Sans`

Observed roles:
- Body and paragraph copy: primarily `Roboto`
- Hero/display headline: `Roboto Serif`, weight 600
- `DM Sans`: appears in isolated/specialized classes rather than as the dominant body/display system
- Generic/plugin assets also contain Arial/Font Awesome; these are not evidence of the core brand type system

Representative desktop scale found in the portfolio:
- Hero headline: 80px / 88px
- Generic h1: 70px / 80px
- Generic h2: 45px / 55px
- Section display heading: 48px / 55px
- Paragraph: 16px / 26px
- Section eyebrow: 21px, uppercase, 5px tracking

Responsive hero headline sizes include approximately 65px, 54px, 47px, 40px, and 28px at different breakpoints.

## Finding
**Conflicted.** The portfolio itself contains more than one type family, and supporting branded material uses yet another system. No font family should be declared canonical until Milestone 3.

---

# 2. Color inventory

## Strongly recurring portfolio colors
- Orange/action: `#FF6600` / shorthand `#f60`
- Near-black primary surface: `#161616`
- Other dark surfaces: `#131313`, `#151515`, `#171717`, `#191919`, `#202020`, `#222222`, `#232323`, `#242424`, `#2f2f2f`
- White: `#FFFFFF`
- Muted light text: `#c8c5c5`

## Orange variants present
- `#FF6600`
- `#FF630E`
- `#FD562A`
- `#fd562a`
- `#EC671A`
- `#e65c00`
- `#ff4a17`

These variants appear in navigation states, service/template areas, testimonials, hover states, progress bars, and other components.

## Other notable colors
- Hero pathway brown: `#7a4b2b`
- Hero pathway blue: `#1f5f9b`
- Legacy/default button blue: `#4277FF`, hover `#3960EA`
- Old body/link darks: `#130f40`, `#2c3e50`
- Supporting branded implementation: navy `#1e3a5f`, orange `#ff7a00`, teal `#1A9E8E`, cream `#f3f4f6`

## Findings
- **Orange is high-confidence brand evidence.** Its exact canonical value is unresolved.
- **Dark + high-contrast light foreground is high-confidence portfolio evidence.** Whether the canonical dark should remain near-black or shift to navy is unresolved.
- **Brown and blue hero-path colors are intentional in the current homepage implementation but are not yet proven to be global brand colors.**
- Several orange/red/blue variants are likely implementation history or template residue and should be consolidated only after approval.

---

# 3. Layout and spacing inventory

## Container widths
Observed first-party values include:
- 1400px large desktop container
- 1170px secondary/content container
- 1140px intermediate implementation
- 1000px, 960px, 800px, 720px, 700px, 550px, 540px, 500px responsive widths

The newer supporting sales-page implementation uses narrower content bands such as roughly 1100px and 820px.

## Section spacing
Repeated values include:
- 80px / 60px section padding on desktop
- 55px / 30px smaller-screen section padding
- 60px and 40px utility top spacing
- component/card gaps commonly in the 14–30px range

## Finding
There is a coherent preference for generous desktop spacing and constrained centered content, but there is **not yet one deliberate spacing scale or one content-width rule**.

---

# 4. Shape, borders, shadows, and elevation

## Radius values found
- 4px
- 5px
- 6px
- 8px
- 10px
- 12px
- 15px
- 16px
- 18px
- 20px
- 24px
- 30px
- `999px` pills
- 50% circles

## Recurrent shape patterns
- Pill CTAs
- Rounded dark cards
- Circular portrait/testimonial imagery
- Thin borders on dark surfaces
- Orange-accent borders and grid details

## Shadows/elevation
The portfolio uses:
- soft dropdown shadows
- deeper dark-card shadows
- orange-tinted inset glows on newer process/CTA cards
- occasional older/template hard shadows

## Finding
Rounded geometry is recurring, but the number of radius/elevation variants indicates implementation drift. Milestone 3 should reduce this to a small intentional set.

---

# 5. Motion and interaction inventory

Observed systems include:
- 0.2–0.5s button/link transitions
- global reveal animation: 0.7s opacity + 26px vertical translation
- WOW/fade-in classes
- carousel motion
- preloader spinner/pulse
- tilt interactions
- several legacy floating/oscillating decorative animations

The current hero explicitly disables animation on its decorative frame.

## Finding
Motion is **conflicted**: some newer implementation choices deliberately suppress decorative motion while the inherited template contains many animated effects. A canonical motion principle is needed rather than preserving every effect.

---

# 6. Recurrent component and pattern candidates

These are strong candidates for the later component catalog because they are Dylan-specific or repeatedly implemented:

1. Header / logo lockup
2. Header CTA pill
3. Split hero: copy + portrait/figure
4. Large display headline with orange emphasis
5. Three-path homepage CTA stack
6. Small uppercase tracked eyebrow / section label
7. Two-column About section
8. Stat/counter blocks
9. Testimonial cards with client portrait, quote, rating, attribution
10. Dark process cards with orange accent/border treatment
11. FAQ accordion
12. Full-width conversion CTA panel
13. Footer brand/contact block

## Components requiring validation before reuse
- service cards and service section
- portfolio/project cards
- pricing cards
- legacy tab/skills/award modules
- sidebar/mobile search/contact modules

These appear substantially inherited from the original template and should not be treated as approved brand components merely because CSS exists for them.

---

# 7. Template and legacy contamination

The portfolio contains clear evidence of inherited template material, including:
- “Search Courses” mobile/sidebar language
- fake contact information such as `example@gmail.com` and `+98 012345 6789`
- “Desktop Apps,” “Web Development,” “Mobile Apps,” and “Web Design” service content
- lorem-ipsum-style placeholder service copy
- generic project/blog assets and styles unrelated to the current coaching brand
- duplicate `seekers.html` and `seekers/index.html` implementations with similar inherited structures

## Rule for Milestone 3
Do **not** derive canonical tokens or components from these areas unless the same treatment is independently supported by Dylan-specific implementation elsewhere.

---

# 8. Brand asset inventory

## Strong candidates
- `assets/images/brand/dylan-logo-150.svg`
- homepage hero figure/image assets
- Dylan portrait photography under `assets/images/pics/`
- named client testimonial portraits under `assets/images/testimonial/`

## Unclassified brand candidates
- `assets/images/brand/1.png`
- `assets/images/brand/2.png`
- `assets/images/brand/4.png`
- `assets/images/brand/5.png`
- `assets/images/brand/6.png`
- `assets/images/brand/7.png`

These should be visually reviewed during the approved-reference milestone rather than assumed to be canonical.

## Logo quality issue
`dylan-logo-150.svg` is not a clean vector master. It wraps an embedded raster PNG inside an SVG container. It may remain a usable web asset, but a true vector/source-master logo should be identified if one exists before the final asset library is declared complete.

---

# 9. Strong recurring visual themes

The portfolio evidence supports the following themes with relatively high confidence:

- Orange is the dominant accent/action signal.
- High-contrast dark surfaces with white/light text are central to the current portfolio.
- Large display typography is a defining feature.
- Small uppercase, widely tracked labels recur as section signposts.
- Portrait/personality-led imagery is important.
- CTAs are prominent and visually explicit rather than understated.
- Rounded cards, pills, and circular portraits recur.
- Orange is often used for emphasis, borders, bullets, active states, and calls to action.

These are **directional observations**, not yet canonical rules.

---

# 10. Decision queue for Milestone 3

Milestone 3 should resolve these specific questions and encode the answers in `BRAND.md` and `tokens.css`:

1. **Primary dark:** near-black portfolio (`#161616` family) vs. navy supporting brand (`#1e3a5f` family), or an explicitly defined role for both.
2. **Primary orange:** `#ff6600` vs. `#ff7a00`; determine approved variants/hover states.
3. **Teal:** whether teal is a canonical secondary/accent color and, if so, exact value/usage.
4. **Typography:** Roboto + Roboto Serif vs. Open Sans + Playfair Display vs. another approved system; remove incidental families.
5. **Semantic pathway colors:** decide whether homepage brown `#7a4b2b` and blue `#1f5f9b` are system colors or page-specific exceptions.
6. **Content widths:** choose a small set of canonical max-widths.
7. **Spacing:** collapse arbitrary spacing into a short reusable scale.
8. **Radii:** reduce many values to a deliberate small set plus pill/circle.
9. **Elevation:** define permitted border/shadow treatments.
10. **Motion:** define restrained/default motion and prohibited decorative motion.
11. **Logo source:** identify the approved master and acceptable lockups.
12. **Image treatment:** formalize portrait crop, object-position, overlays, borders, and background treatment.

---

# Milestone 2 completion criteria

- [x] First-party portfolio CSS inventoried at the system level
- [x] Core pages and duplicate page implementation reviewed
- [x] Typography families and hierarchy patterns identified
- [x] Color families and conflicts identified
- [x] Layout, spacing, radii, elevation, and motion patterns identified
- [x] Reusable component candidates identified
- [x] Template/legacy residue explicitly quarantined
- [x] Brand assets inventoried at a useful level
- [x] Cross-source conflicts recorded rather than silently reconciled
- [x] Milestone 3 decision queue created
- [x] Figma direct-inspection limitation explicitly recorded

**Result:** Milestone 2 is complete. No disputed visual value has been promoted to canonical status.