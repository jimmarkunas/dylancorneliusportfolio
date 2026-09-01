# Dylan Cornelius Brand System

## Status
**Canonical — Milestone 3.**

This file defines the approved visual rules for Dylan Cornelius branded web pages and graphical assets. It supersedes conflicting visual treatments found in legacy portfolio CSS, templates, and historical concepts unless an explicit current exception is documented.

Use `tokens.css` for implementation values. Use this file for intent, hierarchy, and usage rules.

---

# 1. Brand character

The visual system should feel:

- **Clear** — easy to scan, direct hierarchy, no ornamental clutter
- **Credible** — executive/professional rather than influencer-hype
- **Human** — real people, real outcomes, approachable language and imagery
- **Decisive** — strong headings, explicit calls to action, confident contrast
- **Strategic** — structured layouts, visible frameworks, restrained visual logic
- **Energetic without being frantic** — orange and teal provide energy; motion and decoration remain controlled

Avoid generic tech-template styling, decorative complexity for its own sake, random gradients, excessive animation, and large families of near-duplicate colors.

---

# 2. Core color system

## Primary brand colors

### Brand Navy — `#1E3A5F`
Primary structural color.

Use for:
- body/headline text on light backgrounds
- primary navigation and structural rules
- primary filled buttons when a conservative/executive treatment is appropriate
- icons and diagrams that need authority rather than emphasis

### Brand Orange — `#EA5116`
Primary accent and attention color.

Use for:
- emphasis inside headings
- section eyebrows and labels
- rules, bullets, borders, active states
- key visual anchors
- selected calls to action when contrast requirements are met

Orange should be intentional. Do not scatter orange across every element on a page.

### Brand Teal — `#1A9E8E`
Secondary accent.

Use for:
- positive forward movement
- secondary calls to action
- selected icons, status markers, and framework accents
- contrast against orange when a second semantic accent is genuinely useful

Do not use teal merely to make a layout more colorful.

### Deep Indigo — `#2C2C55`
Canonical dark-section surface.

Use for:
- full-width dark bands
- testimonial/proof sections
- high-emphasis narrative sections
- occasional hero or footer backgrounds

Deep Indigo replaces the legacy portfolio's arbitrary near-black family as the preferred branded dark surface.

## Supporting colors

- Soft Navy: `#2C4D6F` — secondary text and lower-emphasis structure
- Soft Blue: `#DCE6F4` — borders, diagram fills, quiet informational backgrounds
- Soft Gray: `#F3F4F6` — page sections, cards, neutral separation
- Warm Tint: `#FFF5F0` — restrained orange-tinted background
- Success Green: `#30B38F` — semantic success/check/progress only; do not substitute for Brand Teal
- White: `#FFFFFF`
- Near Black: `#111111` — functional text only where contrast requires it; not a primary brand surface

## Noncanonical legacy colors
Unless explicitly approved for a specific future component, do not introduce or propagate:

- legacy near-blacks such as `#161616`, `#131313`, `#202020`, `#222222`, etc. as the default page system
- portfolio orange variants such as `#FF6600`, `#FF630E`, `#FD562A`, `#EC671A`, `#ff4a17`
- legacy default blues such as `#4277FF` / `#3960EA`
- homepage pathway brown `#7A4B2B`
- homepage pathway blue `#1F5F9B`

Existing pages may retain those values until intentionally migrated. New branded work should not copy them.

---

# 3. Accessibility and color contrast

Brand colors do not override accessibility requirements.

- White text on Brand Navy or Deep Indigo is approved.
- Brand Orange `#EA5116` is primarily an accent color. At ordinary button-label sizes, do **not** assume white text on Brand Orange is accessible.
- For filled orange controls with normal-size white labels, use the accessible Action Orange token from `tokens.css` (`#C94310`).
- Brand Orange may use near-black text when the brighter orange surface is required.
- For filled teal controls with white normal-size labels, use the accessible Action Teal token from `tokens.css` (`#147D72`).
- Visible keyboard focus must never be removed.
- Interactive targets should be at least 44×44 CSS pixels where practical.

---

# 4. Typography

## Canonical family
**Inter** is the single brand type family.

Use:
- 400 Regular
- 600 Semi Bold
- 700 Bold

Fallback stack:
`Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

Do not introduce Roboto, Roboto Serif, DM Sans, Open Sans, Playfair Display, or another family into new branded work without an explicit system revision.

## Hierarchy

### Display / H1
- large, direct, sentence case
- typically 600 or 700
- tight line height
- orange emphasis may be used for a short phrase, not every important word

### H2 / section headline
- substantial visual step below H1
- typically 600 or 700
- should carry the idea of the section without requiring body copy to explain the heading

### H3 / card headline
- 600 or 700
- concise and scannable

### Body
- 400 default
- 600 for meaningful emphasis
- avoid long passages in all-bold text

### Eyebrow / section label
- small
- 700
- uppercase
- wide tracking
- usually Brand Orange or Brand Navy

## Copy width
Long-form text should generally remain between roughly 55 and 75 characters per line. Do not stretch prose across the full width of large screens.

---

# 5. Layout and width

## Canonical content widths
Use only these default bands unless the composition has a specific reason not to:

- **Narrow:** 720px — articles, explanations, forms, focused conversion copy
- **Standard:** 960px — most content sections
- **Wide:** 1200px — heroes, comparison layouts, multi-column sections

Full-bleed backgrounds may span the viewport while content remains inside one of these bands.

## Page rhythm
- Prefer centered, readable content over extremely wide desktop layouts.
- Use generous vertical whitespace to separate ideas.
- Section boundaries should be obvious through spacing, background change, or a deliberate rule — not through decorative clutter.
- Two-column layouts should collapse cleanly on smaller screens.
- Mobile composition takes precedence over preserving desktop geometry.

---

# 6. Spacing

Use the spacing scale in `tokens.css` rather than one-off numbers.

Default rhythm:
- 4 / 8 / 12 / 16px for compact internal relationships
- 24 / 32px for component padding and local groups
- 48 / 64px for section groups
- 96px for major desktop section separation

Do not add new spacing values simply to match a historical page pixel-for-pixel.

---

# 7. Shape and borders

Canonical radii:
- **6px** — controls and compact utility elements
- **12px** — default cards, media, form containers
- **20px** — large feature cards or high-emphasis panels
- **999px** — pills only
- **50%** — true circular avatars/icons only

Borders should usually be 1px and quiet. Brand Orange can be used as a selective accent border, not as the default border on every card.

Do not reproduce the legacy collection of arbitrary 4/5/8/10/15/16/18/24/30px radii in new work.

---

# 8. Elevation

Use elevation sparingly.

Preferred order:
1. spacing/background separation
2. subtle border
3. restrained shadow when actual elevation is useful

Avoid heavy template-style drop shadows, glowing cards, or stacked shadow effects unless the component is explicitly approved later.

Use the three shadow levels in `tokens.css`; do not invent additional shadow recipes casually.

---

# 9. Buttons and calls to action

## Primary CTA
Default: Brand Navy background + white label.

Use when the action is the main decision on the page.

## Orange CTA
Use Action Orange + white label when orange is needed as the filled conversion control. Brand Orange remains the visual identity accent around it.

## Teal CTA
Use Action Teal + white label for a positive/forward secondary action.

## Secondary / outline
White or transparent background with Brand Navy border/text on light surfaces; white border/text on dark surfaces.

## Shape
Buttons normally use 6px or pill radius. Do not mix many button shapes on the same page.

## Language
CTA labels should describe the user's next step. Avoid vague labels such as “Learn More” when a more specific action is available.

---

# 10. Cards and framework blocks

Default card treatment:
- White or Soft Gray surface
- 1px Soft Blue or subtle neutral border
- 12px radius
- restrained padding using canonical spacing
- Navy text
- one accent color at a time

Dark cards are reserved for sections that intentionally use Deep Indigo.

Framework/process diagrams may combine Navy, Orange, Teal, Soft Blue, and Warm Tint, but should remain legible without relying solely on color.

---

# 11. Images and portraits

The brand is person-led. Prefer authentic photography of Dylan, clients, groups, coaching contexts, professional settings, and relevant lived experience over generic stock illustration.

## Portrait rules
- preserve natural skin tone
- no heavy color cast or dramatic filters
- default 12px radius for rectangular portraits
- testimonial/headshot avatars may be circular
- crop deliberately around face/eyes; do not rely on arbitrary center cropping
- use sufficient resolution for the rendered size

## Decorative imagery
Decorative shapes should support hierarchy, not compete with the person or message. One visual device is usually enough.

---

# 12. Logo

The currently available `assets/images/brand/dylan-logo-150.svg` may be used as an interim approved asset, but it contains an embedded raster image and is **not** the preferred long-term master.

Rules:
- preserve aspect ratio
- do not distort, stretch, outline, shadow, or recolor the embedded mark
- maintain visible clear space around the mark
- do not recreate the logo from text or substitute a generic monogram

A true vector/source-master logo remains an asset-library task for a later milestone.

---

# 13. Motion

Motion should communicate state or hierarchy, not create ambient activity.

Approved motion:
- hover/focus state changes
- modest fades or short vertical reveals
- accordion expansion/collapse
- purposeful carousel or step transitions

Avoid:
- perpetual floating decorative objects
- continuous pulsing unrelated to status
- tilt/parallax merely for novelty
- long page-entry animation sequences

Honor `prefers-reduced-motion`.

Use the timing/easing tokens in `tokens.css`.

---

# 14. Dark sections

Dark sections use **Deep Indigo `#2C2C55`**, not arbitrary near-black.

On Deep Indigo:
- primary text: White
- secondary text: light neutral/Soft Blue as appropriate
- Orange: emphasis/action accent
- Teal: secondary positive accent

Do not make the entire default site dark simply because the legacy portfolio was dark. Light-first pages with selective dark bands are the canonical default.

---

# 15. Pattern discipline

New work should reuse the same visual grammar:
- Inter typography
- Navy text/structure
- Orange primary accent
- Teal secondary accent
- light-first surfaces
- selective Deep Indigo sections
- limited width bands
- limited spacing scale
- limited radii
- restrained shadows
- people-centered imagery

When a new visual need appears, first attempt to solve it with the existing tokens and rules. Add a new token only when the need is reusable and meaningfully distinct.

---

# 16. Relationship to legacy implementation

The existing portfolio is migration evidence, not the canonical system.

When updating legacy pages:
- preserve content and functionality unless the task says otherwise
- replace legacy visual values incrementally with `tokens.css`
- do not copy template residue into new components
- do not attempt a global redesign merely because canonical tokens now exist

Milestone 4 will define approved reusable components. Until then, this file and `tokens.css` govern visual decisions at the primitive/system level.
