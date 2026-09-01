# DCMLLC Delivery Schemes

## Status
**Canonical channel rules — September 1, 2026.**

`BRAND.md` defines invariant brand rules. `tokens.css` defines invariant implementation values. This file defines **channel-specific delivery schemes** — the rules that change because WordPress, Elementor, Gutenberg, featured images, or another channel behaves differently.

A channel scheme may change the delivery form of a brand rule; it may not change the brand rule itself.

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

# 5. Featured-image scheme

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

Component-level implementations live in `components.html`.

Sales-page copy/design must also follow these invariant rules:
- lead with 1:1 coaching access
- group calls/community are bonuses
- primary CTA uses Brand Orange
- no unverified scarcity
- internal avatar labels never appear
- plain-spoken, low-jargon copy
- when relevant, outcome sequence is autonomy/control → financial outcomes → happiness/fulfillment

---

# 10. Skool scheme

Skool community visual constraints are not yet sufficiently specified to declare a canonical scheme.

Until Milestone 5:
- apply `BRAND.md` colors, typography intent, imagery rules, and copy rules
- do not assume WordPress canvas sizes or composition rules apply
- do not invent a Skool-specific pattern and silently make it canonical

Milestone 5 will formalize cover-image and post-header schemes after reference examples are reviewed.

---

# 11. Scheme governance

A scheme exists because a channel has a real technical or compositional constraint.

Do not create a new scheme merely because a one-off asset looks different.

A new channel rule becomes canonical when it is:
- repeatedly needed
- platform-specific
- compatible with `BRAND.md`
- documented here
- explicit enough for both Claude and ChatGPT to execute consistently
