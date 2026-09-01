# DCMLLC Approved Reference Library

## Status
**Canonical — Milestone 5, September 1, 2026.**

This directory defines which visual assets and photography patterns are approved reference material for the DCMLLC design system.

The reference library does **not** duplicate every image in the repository. It points to the approved source assets already stored in `/assets/images/` or to explicitly approved production sources when a local source is not yet mirrored.

Use references in this order:

1. explicit current instruction from Dylan
2. this reference index and `index.html`
3. canonical component examples in `../components.html`
4. other repository imagery only if explicitly approved for the task

The existence of an image in `/assets/images/` does not make it a brand reference.

---

# 1. Canonical logo

## Approved asset

`../../assets/images/brand/dylan-logo-150.svg`

Status: **canonical and approved for use now.**

Use for:
- site header/footer
- email and branded documents
- social/community assets
- featured images when a logo is appropriate
- general brand identification

Rules:
- preserve aspect ratio
- do not recolor, distort, outline, shadow, or filter
- maintain visible clear space
- do not redraw from type or substitute a monogram

## Vector-master status

The current SVG contains an embedded raster image. No clean vector/source-master logo is present in the repository as of this milestone.

This is **not** an ambiguity about which logo to use: `dylan-logo-150.svg` remains canonical until Dylan explicitly approves a replacement.

A future clean-vector replacement must:
- visually match the approved mark
- preserve current proportions and recognizable form
- contain true vector paths rather than an embedded raster
- be reviewed against the current asset before replacing it
- update this file, `BRAND.md`, and any affected references in the same change

Do not auto-trace or invent a replacement merely to close the technical gap.

---

# 2. Dylan photography hierarchy

The brand is person-led. Authentic Dylan/client photography is preferred to generic stock illustration or staged corporate imagery.

## 2.1 Primary hero/headshot reference

**Approved production source:**
`https://dylancornelius.com/wp-content/uploads/2026/02/20170206_dylan_0162_web-square-close-up-2.jpeg`

Role: **primary headshot / tight professional crop.**

Use for:
- conversion heroes
- featured-image split panels
- compact About blocks
- social/community graphics where a recognizable face is useful

Production note: the canonical headshot source has an approximately 20–22px white keyline artifact along the bottom and right edges. Crop that artifact away before compositing onto colored backgrounds.

## 2.2 Professional contextual portrait

**Approved production source:**
`https://dylancornelius.com/wp-content/uploads/2026/06/IMG_2116-1-scaled.jpeg`

Role: professional biography / career-transition / “why Dylan” context.

Use when a more environmental or professional portrait supports the story better than the tight hero headshot.

## 2.3 Repository portrait sources

Approved source pool:
- `../../assets/images/pics/dylan-main-01.jpg`
- `../../assets/images/pics/dylan-main-02.jpg`

These are approved Dylan portrait sources. Choose the crop that best matches the component contract rather than treating both as interchangeable thumbnails. The production references above remain the clearer precedent for tight-headshot versus contextual-professional use.

## 2.4 Origin / lifestyle photography

**Approved category:** Big Bend / tandem-bike athlete photography.

Role:
- origin story
- endurance/adventure content
- lived-experience storytelling
- selected personal essays

The approved source file is not currently mirrored into this repository. Until it is added, do not substitute generic cycling/outdoor stock and call it canonical.

## 2.5 Speaker / office photography

**Approved category:** speaker/office batch `IMG_5754–IMG_5768`.

Use selectively: choose only the 2–3 strongest frames when the context genuinely calls for speaking/office credibility. Lighting/background quality is weaker than the primary hero headshot, so these images are **contextual evidence, not interchangeable default portraits**.

The batch is not currently mirrored into this repository. Do not invent replacement filenames or stock substitutes.

---

# 3. Client proof photography

The following repository files are approved as **proof/testimonial portraits only when paired with the correct verified client identity and outcome**:

- `../../assets/images/testimonial/omario-k.jpg`
- `../../assets/images/testimonial/vivek-s.jpg`
- `../../assets/images/testimonial/eric-b.jpg`
- `../../assets/images/testimonial/karen-w.jpg`
- `../../assets/images/testimonial/george-m.jpg`
- `../../assets/images/testimonial/ayeesha-k.jpg`
- `../../assets/images/testimonial/carlo-c.jpg`
- `../../assets/images/testimonial/paul-d.jpg`
- `../../assets/images/testimonial/jim-l.jpg`

Additional named client portraits in `/assets/images/testimonial/` may be used only when the deliverable has verified testimonial/proof content for that person.

Rules:
- do not use a client's face as generic decoration
- do not pair one client's image with another client's quote/result
- do not invent ratings, titles, results, or attribution
- circular crop is preferred for testimonial/avatar use
- preserve natural skin tone

## Non-reference testimonial assets

Generic files such as `m1.jpg`–`m5.jpg`, duplicate placeholders, decorative shapes, or payment graphics are **not** approved brand references merely because they live in the testimonial directory.

---

# 4. Featured-image reference composition

Canonical master:
- 1200 × 628px
- PNG
- Bricolage Grotesque Bold for baked headline text
- left copy zone / right Dylan-photo zone by default
- primary Orange, Navy, White, and supporting canonical colors only

Default composition:
- text zone: approximately x=0–640px
- Dylan/photo zone: approximately x=640–1200px
- preferred headshot origin: approximately x=680px
- photo may bleed off the right edge
- soft transition between copy and photo zones when needed

## Crop-safe rule

The 1200×628 master remains canonical for WordPress featured images, Open Graph, and blog-grid use.

Because card layouts and downstream platforms may crop previews, keep critical headline text, logos, and faces away from the extreme outer edges. The **essential-message safe zone** is approximately the central 80% of the canvas (about 120px inset from left/right and 60px from top/bottom). Background color/photo bleed may extend outside that zone.

Do not create a separate “mobile thumbnail” master unless repeated production evidence shows the 1200×628 source cannot serve the current grid.

---

# 5. Component-to-reference mapping

| Component / use | Preferred reference |
| --- | --- |
| Conversion hero | Primary tight headshot; contextual professional portrait when story requires environment |
| About / bio | Professional contextual portrait or primary headshot |
| Featured image | Primary tight headshot with keyline cropped |
| Testimonial card | Correct named client's testimonial portrait |
| Social-proof band | 1–3 verified client portraits; never decorative/random client faces |
| Case study | Correct client portrait when permission/verification exists; otherwise result-led text block |
| Origin story | Big Bend / tandem-bike category |
| Speaking / authority | strongest 2–3 speaker/office frames only |
| Skool cover | primary headshot or contextual professional portrait; see `../SCHEMES.md` |
| Skool post header | person-led image when useful; otherwise simple branded type/shape composition |

---

# 6. Legacy / unclassified imagery

Do **not** derive canonical imagery from these directories without explicit approval:

- `/assets/images/project/`
- `/assets/images/blog/` legacy duplicates/placeholders
- `/assets/images/about/` decorative/template shapes
- `/assets/images/expart/`
- `/assets/images/banner/` decorative template shapes except where an explicitly approved current component already uses a Dylan image
- unnamed `/assets/images/brand/1.png`, `2.png`, `4.png`, `5.png`, `6.png`, `7.png`

These remain historical implementation evidence, not approved reference precedent.

---

# 7. Reference governance

A visual becomes canonical reference material only when:
- Dylan has explicitly approved it, or
- it is explicitly identified as approved in the production-tested design brief, or
- it is a verified named-client proof asset used for that same client's proof.

When a better crop/source replaces an existing reference:
1. add or identify the new source
2. update this index
3. update `index.html`
4. update affected schemes/components if composition changes
5. keep old assets as legacy unless removal is explicitly desired

Do not make a visual canonical merely because an AI used it successfully once.

---

# Milestone 5 reference completion

- [x] canonical logo identified
- [x] vector-master status resolved without inventing a replacement
- [x] primary Dylan headshot precedent identified
- [x] contextual professional portrait precedent identified
- [x] repository portrait source pool identified
- [x] origin/lifestyle category defined
- [x] speaker/office category defined
- [x] named client proof-photo rules defined
- [x] featured-image composition and crop-safe rule defined
- [x] component-to-reference mapping defined
- [x] legacy/unclassified image areas quarantined
- [x] visual gallery implemented in `index.html`

**Result:** approved visual precedent is explicit. Missing source files for already-approved categories are a file-mirroring task, not a design-rule ambiguity.