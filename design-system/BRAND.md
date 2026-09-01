# DCMLLC Brand System

## Status
**Canonical — Milestone 3 reconciled, September 1, 2026.**

This file defines invariant brand rules for Dylan Cornelius Management LLC (DCMLLC) / Get Your Best Job Ever / Best Job Ever branded web pages and graphical assets.

The production-tested Claude project brief supplied by Dylan on September 1, 2026 supersedes the earlier Milestone 3 choices where they conflict. Channel-specific implementation rules live in `SCHEMES.md`; implementation values live in `tokens.css`; component implementations live in `components.html`.

---

# 1. Brand identity

**Company:** Dylan Cornelius Management LLC (DCMLLC)  
**Brand:** Get Your Best Job Ever / Best Job Ever  
**Primary website:** dylancornelius.com  
**Primary audience:** mid-career professionals, roughly ages 32–55

The visual and verbal system must feel:

- **Clear** — easy to scan, direct hierarchy, no decorative clutter
- **Credible** — executive/professional, never influencer-hype
- **Human** — real people, real outcomes, approachable language and imagery
- **Decisive** — strong headings, explicit calls to action, confident contrast
- **Energetic without being frantic** — orange and teal provide energy; motion and decoration remain controlled
- **Anti-hustle, anti-fluffy, anti-jargon** — direct, plain-spoken, approximately fifth-grade reading level

Avoid generic tech-template styling, ornamental complexity, random gradients, excessive animation, corporate euphemism, and near-duplicate design values.

---

# 2. Canonical color system

## Primary Orange — `#D9660E`

This is the **only brand orange**.

Use for:
- primary CTA button backgrounds
- heading emphasis
- eyebrows and section labels
- icons and active states
- selective accent rules and borders

Interactive hover/active orange is **`#BE590C`**.

Do not use orange as resting inline body-link text. Inline body links use navy and underline.

## Brand Navy — `#27374D`

Primary structural color.

Use for:
- headings
- structural rules
- navigation
- inline body links
- dark-section backgrounds
- secondary filled buttons

Dark sections use Brand Navy; there is no separate indigo dark-surface color.

## Brand Teal — `#1A9E8E`

Secondary accent.

Use for:
- positive forward movement
- secondary CTAs when a distinct treatment is useful
- selected icons and status markers
- framework accents

Do not use teal merely to add visual variety.

## Supporting colors

- Light neutral background: `#F9FAFB`
- Body text gray: `#4B5563`
- Caption / muted text: `#6B7280`
- Soft blue background / border: `#DCE6F4`
- Success / trust: `#30B38F`
- Error / alert: `#EA5117` — warnings only
- White: `#FFFFFF`

Body and caption text use neutral gray, not navy-derived gray.

## Retired colors — prohibited in new work

- `#EA5116` — retired orange
- `#1E3A5F` — retired navy
- `#2C2C55` — retired M3 dark indigo
- `#FF6600`, `#FF630E`, `#FD562A`, `#EC671A`, `#ff4a17`, `#ff7a00` — legacy oranges

Existing legacy pages may contain these values until intentionally migrated. Never copy them into new deliverables.

---

# 3. Typography

## Web / HTML

**Inter is the sole web type family.**

Weights:
- 400 Regular
- 600 Semi Bold
- 700 Bold

Fallback stack:

`Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

Do not introduce Roboto, Roboto Serif, DM Sans, Open Sans, Playfair Display, or another web typeface without an explicit system revision.

## Featured-image exception

**Bricolage Grotesque Bold** is approved for headline text baked into 1200×628 featured-image PNGs. It is not a web/CSS font token.

## Canonical type scale

- H1: target ~56px desktop
- H2: target ~48px desktop
- H3: target ~40px desktop
- H4: target ~32px desktop
- H5: 24px
- H6: 20px
- Body: 16px
- Small: 14px
- Extra small: 12px

Use the responsive definitions in `tokens.css`. Channel delivery may use explicit pixel equivalents where the platform requires them; see `SCHEMES.md`.

## Line heights

- Display / H1: 1.1
- H2–H4: 1.2
- Long-form body: 1.6
- Card copy / captions / tight UI: 1.4

## Eyebrows / section labels

- small
- 700 weight
- uppercase
- `letter-spacing: 0.16em`
- Brand Orange or Brand Navy only

## Copy width

Long-form prose should generally remain about 55–75 characters per line.

---

# 4. Buttons and links

## Primary CTA

Default conversion control:
- background: Brand Orange `#D9660E`
- text: White `#FFFFFF`
- hover/active: `#BE590C`
- minimum height: 44px
- default radius: 6px

Orange is the default primary CTA color across sales pages, landing pages, blog posts, and other web contexts.

## Secondary button

Use either:
- Navy outline + Navy text on light surfaces, or
- Navy fill + White text

## Teal button

Use Brand Teal + White for positive/forward secondary actions when distinct visual weight is useful.

## CTA language

CTA labels name the actual next step. Prefer “Book a Free Clarity Call” over vague labels such as “Learn More.”

Never use unverified scarcity language such as “limited spots available.”

## Inline body links

Resting/default inline body links:
- Navy `#27374D`
- underlined

Orange may be used as the hover color, but not as the sustained normal-size body-link color.

---

# 5. Layout and spacing

## Content width bands

- **Narrow:** 720px — articles, forms, focused conversion copy
- **Standard:** 960px — most sections
- **Wide:** 1200px — heroes, comparisons, multi-column sections

Full-bleed backgrounds may span the viewport while content remains within one of these bands.

## Spacing

Use the canonical scale:
- 4 / 8 / 12 / 16px — compact relationships
- 24 / 32px — component padding and local groups
- 48 / 64px — section groups
- 96px — major desktop section separation

Do not create one-off spacing values merely to reproduce a legacy page pixel-for-pixel.

## Page rhythm

- centered, readable composition over unnecessarily wide layouts
- generous whitespace between ideas
- obvious section boundaries through spacing/background/rule
- two-column layouts collapse cleanly
- mobile composition takes precedence over preserving desktop geometry

---

# 6. Shape, borders, and elevation

Canonical radii:
- 6px — buttons and compact controls
- 12px — default cards, forms, rectangular portraits/media
- 20px — large feature panels
- 999px — pills only
- 50% — circular avatars only

Borders are normally 1px and quiet. Orange borders are selective accents, not universal card decoration.

Use elevation sparingly. Prefer:
1. spacing/background separation
2. subtle border
3. restrained shadow

Use the three shadows in `tokens.css`; do not casually invent additional shadow recipes.

---

# 7. Photography and imagery

The brand is person-led. Prefer authentic photography of Dylan, clients, coaching contexts, professional settings, and lived experience over generic stock illustration or staged corporate imagery.

## Portrait rules

- preserve natural skin tone
- no heavy color cast or dramatic filter
- 12px default radius for rectangular portraits
- 50% circular crop for testimonial/headshot avatars
- deliberate crop around face/eyes; never arbitrary center-crop
- use sufficient resolution for rendered size

## Dylan headshot production constraint

The canonical primary headshot source has an approximately 20–22px white keyline artifact along the bottom and right edges. Crop it away before compositing into featured images, cards, or other colored-background assets.

Preferred source hierarchy:
1. main square hero headshot — primary default
2. full professional portrait — About/bio contexts
3. Big Bend / tandem-bike athlete photo — origin story/lifestyle contexts
4. speaker/office batch — selective use only; do not treat as interchangeable defaults

## Decorative imagery

Decorative shapes support hierarchy and message; they do not compete with the person or copy. One visual device is usually enough.

---

# 8. Logo

`assets/images/brand/dylan-logo-150.svg` is the officially approved canonical logo until a true vector master is created.

The fact that it contains an embedded raster image does not reduce its current authority.

Rules:
- preserve aspect ratio
- maintain visible clear space
- do not recolor, shadow, outline, filter, stretch, or distort
- do not recreate it from type
- do not substitute a generic monogram
- on dark Navy backgrounds, confirm the embedded raster renders cleanly and provide clear space as needed

A clean vector rebuild remains a future asset task.

---

# 9. Motion

Motion communicates state or hierarchy; it does not create ambient activity.

Approved:
- hover/focus state changes
- short fades or vertical reveals, normally ≤240ms
- accordion expansion/collapse
- purposeful carousel transitions

Not approved:
- perpetual floating or pulsing decoration
- tilt/parallax for novelty
- long page-entry animation sequences

Always honor `prefers-reduced-motion`; transition durations become 0ms.

---

# 10. Dark sections

Dark sections use **Brand Navy `#27374D`**.

On Navy:
- primary text: White
- Orange: emphasis, CTA, eyebrow, icons
- Teal: secondary positive emphasis

For Elementor delivery, the exact outer-wrapper implementation rule is defined in `SCHEMES.md` and is mandatory.

---

# 11. Copy constraints that affect design

These constraints apply to component examples, mockups, placeholder copy, public design assets, and production deliverables.

## Never expose internal avatar labels

Do not publish: SEEKER, STRATEGIST, STEWARD, STRIVER, SURVIVOR, QUITTER.

## Lead with 1:1 access

Sales/design copy leads with 1:1 coaching access. Group calls and community are bonuses, not the primary promise.

## Reading level

Use direct, plain-spoken language at approximately fifth-grade reading level. Avoid jargon and corporate euphemism.

## Banned terms

Do not use:
- “instinct” / “instincts”
- “gut-check” / “gut check”

Use alternatives such as training, reflexes, insights, tactics, beliefs, habits, knowledge, learned patterns, developed skills, assessment, check, validation, self-assessment, or weekly review.

## Outcome sequence

When describing career change/agency outcomes, prefer:
1. autonomy / control
2. financial outcomes
3. happiness / fulfillment

Do not lead with money or happiness when autonomy language is available.

---

# 12. Pattern discipline

New work should reuse this grammar:
- Inter web typography
- Navy structure
- Orange primary CTA/accent
- Teal secondary accent
- neutral gray body/caption text
- light-first surfaces with selective Navy dark sections
- limited width bands
- limited spacing scale
- limited radii
- restrained shadows
- people-centered imagery
- direct, plain-spoken copy

When a new need appears, first solve it with existing rules and tokens. Add a token only when the need is reusable and meaningfully distinct.

---

# 13. Relationship to implementation schemes

`BRAND.md` answers **what must remain consistent**.

`SCHEMES.md` answers **how the same brand must be delivered in specific environments**, including:
- Elementor
- Gutenberg
- WordPress posts/pages
- featured images
- post packaging and metadata
- scheduling-link routing
- future Skool-specific assets

`components.html` answers **what reusable components look and behave like**.

The existing portfolio remains migration evidence, not the canonical system. Preserve content/functionality unless instructed otherwise, migrate deliberately, and never copy template residue into new work.