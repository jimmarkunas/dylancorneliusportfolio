# DCMLLC Delivery Schemes

## Status
**Canonical channel rules — Milestone 5, September 1, 2026.**

`BRAND.md` defines invariant brand rules. `tokens.css` defines invariant implementation values. `COMPONENTS.md` defines reusable component contracts. This file defines **channel-specific delivery schemes** — rules that change because WordPress, Elementor, Gutenberg, featured images, Skool, or another channel behaves differently.

A channel scheme may change the delivery form of a brand/component rule; it may not silently change the underlying brand hierarchy.

---

# 1. Elementor / WordPress HTML scheme

## Font loading

For Elementor/WordPress HTML deliverables, load Inter with `@import` inside a `<style>` block. Do not use a `<link>` tag.

```html
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
</style>
```

## Inline styles

All styles in Elementor HTML widget deliverables use `!important` on every property because Elementor/theme specificity otherwise overrides them unpredictably.

```html
<div style="background: #27374D !important; padding: 48px !important; color: #FFFFFF !important;">
```

## Dark sections

Place the dark background on the **outer wrapper**:

```css
background: #27374D !important;
```

Do not rely on an inner div or Elementor section-background settings to carry the dark surface.

## Style-block wrapper

When HTML containing a `<style>` block is pushed via the WordPress REST API, wrap the complete custom HTML block in WordPress block comments:

```html
<!-- wp:html -->
<style>
  /* styles */
</style>
<div class="section">…</div>
<!-- /wp:html -->
```

Without this wrapper, Gutenberg may strip the style block on a subsequent edit/save cycle.

## No script tags in Elementor

Never put `<script>` tags or `document.write()` in Elementor Custom HTML widgets. JavaScript functionality requires an appropriate theme/plugin hook.

## Rendering verification

Elementor pages render from `_elementor_data`, not simply `post_content`.

A successful REST response or correct `content.raw` does **not** prove the live Elementor page changed. After an API write, verify the rendered result; do not treat `content.raw` alone as completion.

## Type delivery form

The canonical type scale is defined in `tokens.css`. For inline Elementor HTML, use explicit pixel targets when custom properties are unreliable:

- H1: 56px target desktop
- H2: 48px
- H3: 40px
- H4: 32px
- H5: 24px
- H6: 20px
- Body: 16px
- Small: 14px
- Extra small: 12px

Responsive delivery should preserve the hierarchy rather than blindly freezing desktop pixels on mobile.

---

# 2. Gutenberg scheme

Gutenberg pages/posts render from `post_content` normally.

When custom HTML includes a `<style>` block and will be persisted through WordPress, use the `<!-- wp:html -->` wrapper described above.

## Footer behavior

- **Blog posts:** theme global footer renders automatically. Do not add a custom footer block.
- **Simple Gutenberg pages:** a sitewide display-conditions configuration suppresses the full global footer on Pages. Add the abbreviated footer by design.

Abbreviated footer contents:
- copyright
- Disclaimer
- Terms
- Privacy

---

# 3. Elementor blank-canvas page scheme

Elementor blank-canvas pages strip theme header/navigation/global footer.

Add the required page-level structure explicitly, including an abbreviated footer:
- copyright
- Disclaimer
- Terms
- Privacy

Do not duplicate the theme footer when working in a context where the global footer is already present.

---

# 4. WordPress featured-media caveat

Setting `featured_media` via the WordPress REST API does not reliably populate the Featured Image panel in the Gutenberg sidebar.

After any API-based featured-media assignment, visually confirm the Featured Image panel in wp-admin and set it manually if the panel is empty.

---

# 5. Featured-image / Open Graph scheme

## Canvas

- 1200 × 628px landscape
- PNG
- static asset
- used for social share, blog-grid thumbnail, and Open Graph image
- applies to every WordPress post and most pages unless a specific channel requires another format

## Default split-panel composition

- left zone: approximately 0–640px — headline, optional eyebrow, optional credential line
- right zone: approximately 640–1200px — Dylan headshot
- preferred headshot x-origin: approximately 680px
- headshot bleeds off the right canvas edge rather than sitting fully contained
- use a soft transition/gradient between text and headshot zones when needed

## Featured-image type

Headline text baked into the image uses **Bricolage Grotesque Bold**.

This is an image-layer exception only. Web typography remains Inter.

## Dylan headshot preparation

Before compositing the canonical primary headshot, crop away the approximately 20–22px white keyline artifact along the bottom and right edges.

## Crop-safe / mobile-grid rule

The 1200×628 file remains the **single canonical master** for WordPress featured images and blog-grid cards. Do not create a separate mobile thumbnail by default.

To survive responsive card crops and downstream previews:
- keep critical headline text, logo, and faces inside an essential-message safe zone of roughly 120px from left/right and 60px from top/bottom
- let background color/photo bleed extend beyond the safe zone
- do not place a face flush against an edge that may be cropped
- do not place the only meaningful word at an extreme corner

If a specific future grid implementation demonstrably destroys readability despite the safe zone, create a channel exception based on observed behavior rather than preemptively maintaining duplicate masters.

## Metadata sequence

Every featured image ships with metadata in this exact order:

1. **Title**
2. **Caption**
3. **Description**
4. **Alt Text**

When delivering these fields in chat, each bold label is immediately followed by a fenced code block containing only the field value. Never reorder or combine the fields.

---

# 6. WordPress post-content scheme

## Inline image placement

Place the first inline image **after the first genuine top-level prose paragraph**.

When locating that paragraph, skip:
- blockquotes
- captions
- headings

Do not put the inline image before the opening body paragraph.

## Two-part body delivery

When a post includes an inline image, deliver body HTML in two parts:

- **Part 1:** opening paragraph only
- **Part 2:** everything after

This supports the workflow: paste Part 1 → insert/position image manually → paste Part 2.

## CTA placement

Every post includes:
- a mid-post CTA around the 40% mark
- a closing CTA at the end

## Resources / citations

When a post references an external stat, study, or article:
- use `[N]` markers at the relevant claims
- include a `RESOURCES` section at the end
- list source name, title, date, and direct link

## SEO title

Every SEO title ends with:

`| Dylan Cornelius Coaching & Consulting`

## Yoast bulk endpoint field names

Use:
- `focus_keyphrase`
- `seo_title`
- `meta_description`

Do not use legacy/wrong field names such as `focuskw`, `title`, or `metadesc` for that endpoint.

---

# 7. Five-file WordPress deliverable scheme

Every WordPress post/page build delivers:

1. **Gutenberg-ready fragment — `.txt`**  
   Body-only HTML; no doctype/html/head/body wrapper. If the post uses an inline image, split into Part 1 and Part 2.

2. **Standalone preview — `.html`**  
   Complete document with doctype/head and canonical brand CSS. Clearly mark as preview-only, not paste content.

3. **Readable fallback — `.md`**  
   Clean Markdown rendering.

4. **Metadata/instructions — `.docx`**  
   Yoast fields, category, tags, expected live URL, and featured-image metadata.

5. **Featured image — `.png`**  
   1200×628px using the Featured Image scheme.

---

# 8. Scheduling-link routing scheme

Scheduling buttons/CTAs must route by audience intent:

- **Identity-uncertain / exploratory:** `https://dylancornelius.com/schedule-clarity-call`
- **Employed, knows what they want:** `https://dylancornelius.com/schedule-strategy-call`
- **Warm lead, lower commitment:** `https://dylancornelius.com/30-minutes`

Do not swap these links casually. Routing is part of conversion design, not merely URL plumbing.

---

# 9. Sales-page composition scheme

The confirmed high-level sales-page sequence is:

**Hero → Problem → Solution → Social Proof → Guarantee → CTA**

Component contracts live in `COMPONENTS.md`; visual precedent lives in `components.html`.

Sales-page copy/design must also:
- lead with 1:1 coaching access
- treat group calls/community as supporting/bonus value
- use Brand Orange for the primary CTA
- avoid unverified scarcity
- never expose internal avatar labels
- use plain-spoken, low-jargon copy
- when relevant, sequence outcomes autonomy/control → financial outcomes → happiness/fulfillment

---

# 10. Skool community scheme

Skool's platform accepts a group icon and group cover image and uses the cover as part of the community/discovery presentation. The platform documentation does not define a fixed canonical pixel size that DCMLLC should treat as law, so this design system defines its own production masters and safe-zone rules.

## 10.1 Group cover

### DCMLLC production master

- aspect ratio: **16:9**
- working master: **1600 × 900px**
- PNG preferred for graphic/type-heavy designs; high-quality JPG acceptable for photo-dominant designs
- keep the source/editable composition when practical; exported static asset is the deliverable

This 1600×900 value is a **DCMLLC production standard**, not a claim that Skool requires that exact resolution.

### Composition

Preferred:
- clear Best Job Ever / community identity
- one short promise or positioning line at most
- Dylan/person-led image when useful
- simple Navy / Light Neutral foundation
- Orange as primary action/emphasis signal
- Teal only as secondary positive accent

Do not turn the cover into a miniature sales page.

### Safe zone

Because platform cards/discovery placements can resize or crop:
- keep logo, face, community name, and essential text within the central ~70% width and ~70% height
- allow background/photo bleed to edges
- avoid small text
- avoid critical copy at extreme left/right

### Copy

- direct, fifth-grade reading level
- no internal avatar labels
- no unverified scarcity
- lead with control/agency when that is the promise

## 10.2 Group icon

DCMLLC master:
- square canvas, **512 × 512px**
- use the canonical logo/mark only when it remains legible at small size
- otherwise use an approved tightly cropped Dylan/headshot treatment if the community identity is better served by a recognizable face
- no tiny tagline text
- preserve clear space

512×512 is a DCMLLC source-master standard, not a Skool platform requirement.

## 10.3 Skool post-header image

Default DCMLLC master:
- **1200 × 675px (16:9)**
- PNG for type/diagram-heavy headers; JPG/PNG for photo-led headers
- Inter for baked supporting text when needed
- do not use Bricolage Grotesque merely because WordPress featured images do; that exception belongs to the featured-image scheme

Post headers should usually contain:
- one clear topic/title
- optional eyebrow/category
- one visual idea (photo, icon/framework, or color field)

Do not overload with body copy.

## 10.4 Cross-channel reuse

If a Skool post directly accompanies a WordPress article and the 1200×628 featured image reads cleanly in Skool, reuse it rather than generating an unnecessary second asset.

Create the 1200×675 Skool-specific header when:
- the 1200×628 composition crops poorly
- Skool needs distinct community-context language
- the post is native to Skool and has no WordPress counterpart

## 10.5 Event/header imagery

For Skool events or classroom/community graphics:
- reuse the same 16:9 visual grammar unless the platform UI demonstrates a materially different crop
- keep faces and text in the safe zone
- use actual event/topic language, not vague decorative copy

---

# 11. General social reuse scheme

Do **not** create a separate social-media master for every platform by default.

Use this order:
1. reuse the 1200×628 featured-image master when the channel accepts it cleanly
2. use a 16:9 derivative when the channel strongly favors 16:9
3. create a new channel scheme only after repeated production evidence shows a distinct format is necessary

This keeps the asset system small and prevents visual drift from maintaining many almost-identical templates.

---

# 12. Approved-reference scheme

Before choosing photography or visual precedent, read:
- `references/README.md`
- `references/index.html`

Rules:
- do not treat every file in `/assets/images/` as approved
- named client portraits are proof assets for that client, not generic decoration
- use approved Dylan portrait hierarchy before stock imagery
- if an approved category is not mirrored into the repository, do not invent a substitute and label it canonical

---

# 13. Scheme governance

A scheme exists because a channel has a real technical or compositional constraint.

Do not create a new scheme merely because a one-off asset looks different.

A new channel rule becomes canonical when it is:
- repeatedly needed
- platform-specific
- compatible with `BRAND.md`
- compatible with `COMPONENTS.md`
- documented here
- explicit enough for both Claude and ChatGPT to execute consistently

When platform behavior changes:
1. verify the change in production or current authoritative platform documentation
2. update this file
3. update affected reference/template guidance
4. do not mutate brand tokens unless the underlying brand decision changed

---

# Milestone 5 scheme completion

- [x] Elementor scheme
- [x] Gutenberg scheme
- [x] Elementor blank-canvas scheme
- [x] WordPress featured-media caveat
- [x] 1200×628 featured-image/Open Graph scheme
- [x] mobile/blog-grid crop-safe behavior
- [x] WordPress post-content scheme
- [x] five-file WordPress deliverable scheme
- [x] scheduling-link routing
- [x] sales-page composition scheme
- [x] Skool group-cover scheme
- [x] Skool group-icon scheme
- [x] Skool post-header/event imagery scheme
- [x] cross-channel reuse policy
- [x] reference-library integration

**Result:** channel delivery differences are explicit. New channel-specific rules should be added only when repeated production behavior justifies them.