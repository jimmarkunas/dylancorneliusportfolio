# DCMLLC Component & Page Pattern System

## Status
**Canonical — Milestone 4, September 1, 2026.**

This file defines the reusable component contracts for DCMLLC branded work.

Use the system in this order:

1. `README.md` — authority and governance
2. `BRAND.md` — invariant brand rules
3. `tokens.css` — invariant implementation values
4. `COMPONENTS.md` — reusable component and page-pattern contracts
5. `components.html` — visual implementation reference
6. `SCHEMES.md` — channel-specific delivery rules

A channel scheme may change how a component is delivered, but it does not change the component's brand role or hierarchy.

---

# 1. Global component rules

Every component must:

- use Inter for web/HTML unless a channel scheme explicitly defines a static-image exception
- use Brand Orange `#D9660E` as the primary CTA/accent orange
- use Brand Navy `#27374D` for headings, structure, links, secondary buttons, and dark surfaces
- use Brand Teal `#1A9E8E` only as a secondary positive accent
- use neutral body/caption grays from `tokens.css`
- use the canonical spacing/radius/shadow scales instead of inventing near-duplicate values
- remain understandable without relying on color alone
- preserve visible keyboard focus
- use plain, direct copy at approximately fifth-grade reading level
- never expose internal psychographic/avatar labels in public-facing examples
- never use unverified scarcity language
- lead career-agency outcome language with autonomy/control, then financial outcomes, then happiness/fulfillment when relevant

When a new design need appears, first compose it from existing components. Create a new component only when the pattern is reusable and meaningfully distinct.

---

# 2. Typography hierarchy

## Display / H1

**Purpose:** one dominant page idea.

- target ~56px desktop via `--dc-font-size-h1`
- 600 or 700 weight
- line-height 1.1
- sentence case
- Orange may emphasize one short phrase
- do not highlight every important word

**Responsive:** scales fluidly using the token; preserve dominance without forcing desktop line breaks on mobile.

## H2

**Purpose:** section-level idea.

- target ~48px desktop
- 600 or 700
- line-height 1.2

## H3 / H4

**Purpose:** card, framework, subsection, or local hierarchy.

- H3 target ~40px desktop
- H4 target ~32px desktop
- line-height 1.2

## Body

- 16px default
- line-height 1.6 long form
- use `#4B5563`
- keep long-form line length roughly 55–75 characters

## Small / caption

- 14px / 12px
- line-height about 1.4
- use `#6B7280`

## Eyebrow

- small
- 700
- uppercase
- tracking `0.16em`
- Orange or Navy only

---

# 3. Buttons

All buttons:

- minimum height 44px
- default radius 6px
- use 700 weight
- use explicit next-step language
- preserve a visible focus state
- do not use vague labels such as “Learn More” when a specific action is available

## 3.1 Primary CTA

**Purpose:** dominant conversion action.

- background: `#D9660E`
- text: white
- hover/active: `#BE590C`
- one visually dominant primary CTA per decision area

Examples:
- Book a Free Clarity Call
- Book a Strategy Call
- Apply Now
- Join Now

Scheduling links must follow the routing rules in `SCHEMES.md`.

## 3.2 Secondary filled

**Purpose:** strong secondary action, especially in conservative/executive contexts.

- Navy background
- white text

## 3.3 Secondary outline

**Purpose:** secondary action paired with a stronger CTA.

On light surface:
- transparent/white background
- Navy text
- Navy border

On dark surface:
- transparent background
- white text
- white border

## 3.4 Teal action

**Purpose:** positive/forward secondary action requiring distinction from Navy.

- Teal background
- white text

Do not use Teal as a second primary CTA merely to add color.

## Responsive behavior

- preserve 44px minimum target
- allow inline button rows on wider screens
- at small mobile widths, stack competing CTAs vertically and allow full-width buttons when that improves tap clarity
- do not shrink labels into unreadable text to preserve a horizontal row

---

# 4. Inline text links

**Default resting state:**

- Navy `#27374D`
- underlined

**Hover:** may transition to Orange.

Orange must not be the sustained resting color for paragraph-scale links.

Do not remove underlines from body-copy links merely for visual cleanliness.

---

# 5. Cards

## 5.1 Standard card

**Purpose:** contained information, proof, choices, form grouping, or short framework content.

- surface: white or `#F9FAFB`
- text: Navy headings + neutral body gray
- border: 1px Soft Blue or equivalent canonical border token
- radius: 12px
- padding: normally 24–32px
- shadow: none or `--dc-shadow-sm`

Prefer spacing/background separation before heavier shadows.

## 5.2 Feature card

**Purpose:** one higher-emphasis panel inside a group.

- may use 20px radius
- may use `--dc-shadow-md`
- must still use only one accent color at a time

## 5.3 Dark card

**Purpose:** proof or emphasis inside an intentional dark section.

- Navy background
- white primary text
- Orange primary accent
- Teal only when a second positive signal is semantically useful

Do not create a separate near-black/indigo card system.

## Responsive behavior

- 3-column card groups may collapse to one column below roughly 900px when text density makes 2-column layouts cramped
- two-column card groups may collapse to one column below roughly 900px
- reduce padding one spacing step on small mobile screens rather than shrinking text excessively

---

# 6. Testimonial / proof card

## Purpose

Show one real person's result or experience with clear attribution.

## Anatomy

1. optional client portrait/avatar
2. quote or concise proof statement
3. client name
4. role, context, or outcome when appropriate and approved

## Visual treatment

- standard card foundation
- portrait: circular avatar, typically 64–84px
- quote: visually stronger than attribution
- attribution: smaller neutral text
- do not add decorative quotation marks, stars, or badges unless the proof actually supports them

## Responsive behavior

- desktop/tablet may use avatar + quote in two columns
- small mobile may retain the small avatar beside text when readable; otherwise stack portrait above copy
- never crop a person's face arbitrarily to preserve the layout

---

# 7. Process / framework block

## Purpose

Explain a small number of ordered steps or a conceptual framework.

## Anatomy

- step number or simple icon
- short step heading
- one concise explanatory paragraph

## Visual treatment

- standard card geometry
- Orange may identify ordered steps
- Teal may represent positive progress or completion
- numbering and labels must preserve sequence even without color

## Responsive behavior

- 3-column process rows collapse to one column below roughly 900px
- preserve numerical order in DOM order
- do not create horizontal scrolling for ordinary 3–5 step frameworks

---

# 8. Case-study / result block

## Purpose

Connect a human outcome with evidence.

## Anatomy

1. outcome headline
2. short context or explanation
3. optional quantified result

## Content order

When discussing career agency:

1. autonomy/control
2. financial outcome
3. happiness/fulfillment

The quantified metric may be visually prominent but should not rewrite the message so money becomes the primary promise when autonomy/control is the actual lead outcome.

## Visual treatment

- standard or feature card
- result number may use Success Green when it is genuinely positive
- avoid giant numbers without explanatory context

## Responsive behavior

- desktop may place result metric beside narrative
- smaller screens stack narrative above metric

---

# 9. Guarantee / risk-reversal block

## Purpose

Visually distinguish a real guarantee, promise, or risk-reversal term.

## Rules

- use only when the offer actually includes the stated guarantee/promise
- plain language; no hype
- no invented badges such as “100% Guaranteed” unless literally true and approved
- no unverified scarcity

## Anatomy

- guarantee mark/stamp treatment
- plain-language promise headline
- short explanation of conditions

## Visual treatment

- white/light surface
- Orange accent border or mark
- 20px radius acceptable for emphasis
- stamp should feel credible and simple, not like a loud coupon seal

## Responsive behavior

- desktop may use mark + copy in two columns
- small mobile stacks mark above copy

---

# 10. Navigation

## Desktop navigation

### Anatomy

- canonical logo/brand lockup
- primary navigation links
- optional dominant CTA at the far end

### States

- default links: Navy
- active/current: Orange
- focus: visible focus ring

Do not use Orange for every nav link.

## Mobile navigation

### Trigger

- minimum 44×44px
- recognizable menu icon
- accessible name such as `aria-label="Open menu"`
- visible focus

### Panel

- one-column links
- primary CTA separated clearly from ordinary navigation
- current-page state remains visible
- menu must not depend on hover

### Behavior

The general design system specifies appearance and hierarchy only. JavaScript implementation must respect the applicable channel scheme; Elementor Custom HTML must not receive arbitrary `<script>` tags.

---

# 11. Forms

## Field anatomy

1. visible label
2. input/select/textarea
3. optional help text
4. validation/error message when needed

## Base field style

- white surface
- 1px canonical border
- 6px radius
- minimum 44px height for single-line controls
- 16px input text where possible to avoid mobile zoom behavior
- Navy label
- neutral body text

## Focus state

- visible focus ring using canonical focus token
- never rely on color change alone

## Error state

- Error Red `#EA5117`
- error text explains what must be corrected
- use `aria-invalid="true"` when applicable
- associate error/help text programmatically when possible

## Responsive behavior

- default to one-column forms on mobile
- multi-column forms collapse before labels/inputs become cramped
- submit CTA remains clear and at least 44px high

---

# 12. Dark section

## Purpose

Create an intentional proof, narrative, CTA, or emphasis band.

## Invariant treatment

- surface: Brand Navy `#27374D`
- primary text: white
- Orange: primary emphasis/action accent
- Teal: secondary positive accent

The dark-section component is Brand Navy. Channel-specific mechanics such as `!important` and outer-wrapper placement belong to `SCHEMES.md`.

## Responsive behavior

- preserve generous vertical whitespace
- do not reduce contrast or swap to arbitrary dark colors on mobile

---

# 13. Icon system

## Default icon grammar

- simple line icons
- 24px default canvas
- approximately 2px stroke
- rounded line caps/joins
- inherit semantic color from context

Approved semantic colors:

- Navy: structural/general
- Orange: action/emphasis
- Teal: forward movement
- Success Green: confirmed success/result
- Error Red: warning/error only

Do not build a decorative rainbow icon palette.

Icons must not be the only carrier of meaning when text or labels are necessary.

---

# 14. Portrait / image component

## Rectangular portrait

- 12px radius default
- deliberate crop around face/eyes
- natural skin tone
- no heavy filters

## Testimonial avatar

- circular
- deliberate face crop

## Dylan canonical headshot

Before compositing the main headshot into designed assets, remove the known approximately 20–22px white keyline artifact on the bottom and right edges.

The visual catalog may use repository imagery as a working reference; Milestone 5 will formalize approved reference files and crops.

---

# 15. Conversion hero

## Purpose

State the audience's problem/opportunity, lead outcome, and next step immediately.

## Default anatomy

1. optional eyebrow
2. H1
3. short supporting copy
4. primary CTA
5. optional secondary action/proof link
6. person-led image/portrait when useful

## Copy hierarchy

For career-agency contexts, lead with control/autonomy when available. Do not lead with money or happiness when control language expresses the core value better.

## Visual treatment

- light-first by default
- Orange primary CTA
- Navy headings
- authentic portrait/photo preferred

## Responsive behavior

- wide screens: two-column copy + image is preferred when photography supports it
- below roughly 900px: stack to one column
- copy should precede image in reading/DOM order unless a specific approved layout requires otherwise
- mobile CTA row may stack vertically

---

# 16. Problem section

## Purpose

Make the reader recognize the current situation without exaggeration or manufactured fear.

## Treatment

- light or Soft Blue/Light Neutral surface
- strong H2
- short paragraphs or a small set of problem statements
- Orange used sparingly for emphasis, not alarm

Avoid hype, shame, and invented urgency.

---

# 17. Solution section

## Purpose

Show the practical path from the current state to greater control and results.

## Treatment

- framework/process blocks are the preferred reusable pattern
- explain what changes, not merely program features
- lead with 1:1 access in sales contexts; group/community support is secondary/bonus

---

# 18. Social proof band

## Purpose

Reduce uncertainty with real evidence.

May combine:

- testimonial cards
- case-study/result blocks
- approved client outcomes

Use a Navy dark section when a strong proof band is helpful, but light proof sections are also valid.

Do not invent names, results, ratings, or proof.

---

# 19. Conversion CTA panel

## Purpose

Create a clear decision point after sufficient context/proof.

## Anatomy

- outcome-oriented headline
- one short supporting sentence
- one dominant Orange CTA
- optional secondary link only when needed

## Treatment

- light or Navy dark-section variant
- CTA label describes the actual next step
- scheduling route must match `SCHEMES.md`

---

# 20. Canonical sales-page sequence

Default sequence:

**Hero → Problem → Solution → Social Proof → Guarantee → CTA**

This is a page-pattern contract, not a requirement that every section have equal visual weight or only one section of each type.

A page may repeat proof or CTA moments when the content warrants it, but the core persuasion logic should remain recognizable.

Sales pages must lead with 1:1 coaching access. Group calls/community are supporting value, not the lead promise.

---

# 21. Article/post CTA pattern

A WordPress post uses:

- a mid-post CTA around the 40% point
- a closing CTA at the end

The visual component is the same conversion CTA hierarchy; the exact WordPress placement/delivery rules live in `SCHEMES.md`.

---

# 22. Responsive system

The component system uses two practical collapse zones rather than a large breakpoint taxonomy:

## Wide / desktop — above ~900px

- multi-column heroes, cards, process blocks, and result layouts are allowed
- nav may show full link row

## Compact / tablet — ~561–900px

- hero/process/multi-column layouts generally collapse to one column when readability improves
- navigation transitions to mobile-menu treatment
- button rows may wrap

## Small mobile — ≤560px

- prioritize single-column flow
- reduce component padding one spacing step where needed
- primary/secondary CTA rows may become full-width stacked buttons
- guarantee mark stacks above copy
- sales-page sequence indicators stack vertically

Breakpoints are implementation guidance, not an excuse to hard-code poor layouts. Preserve hierarchy and readable measure first.

---

# 23. Accessibility baseline

Every approved component must preserve:

- visible keyboard focus
- minimum 44px interactive target where practical
- sufficient color contrast
- underlined resting inline links
- meaningful alt text for informative images
- empty alt text for purely decorative images where appropriate
- labels for form controls
- error messages that do not rely on color alone
- reduced-motion behavior when `prefers-reduced-motion` is enabled
- logical DOM/source order independent of visual reordering

---

# 24. Component governance

## Canonical vs. example copy

`components.html` contains example copy to show hierarchy. Example copy is not automatically approved offer copy, testimonial language, legal language, or proof.

## Change rule

If repeated production use shows that a component contract is wrong or incomplete:

1. record the observed problem
2. change `COMPONENTS.md`
3. update `components.html`
4. update tokens only if the change affects a reusable primitive
5. update a channel scheme only if the difference is platform-specific

Do not patch the same exception independently in Claude and ChatGPT prompts.

---

# Milestone 4 completion criteria

- [x] typography hierarchy formalized
- [x] primary/secondary/outline/teal button hierarchy formalized
- [x] inline link treatment formalized
- [x] standard/feature/dark cards formalized
- [x] testimonial/proof component formalized
- [x] process/framework component formalized
- [x] case-study/result component formalized
- [x] guarantee/risk-reversal component formalized
- [x] desktop/mobile navigation principles formalized
- [x] form system and validation states formalized
- [x] dark-section component formalized
- [x] image/portrait treatment formalized
- [x] icon grammar formalized
- [x] conversion hero formalized
- [x] Problem/Solution/Social Proof/Guarantee/CTA page patterns formalized
- [x] canonical sales-page sequence formalized
- [x] article CTA pattern formalized
- [x] component-level responsive behavior formalized
- [x] component accessibility baseline formalized
- [x] visual implementation catalog exists in `components.html`

**Result:** Milestone 4 is complete. New component-level design work should reuse these contracts before inventing new patterns.
