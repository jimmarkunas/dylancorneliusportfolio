# DCMLLC Cross-Agent Validation Test Pack

## Purpose

Run these briefs **unchanged** through Claude and ChatGPT after each agent has read the canonical design-system files listed in `../VALIDATION.md`.

Do not improve, reinterpret, or expand the briefs differently for one agent. The point is to expose design-system ambiguity, not prompt-writing differences.

Each agent should return:
1. the requested artifact or implementation
2. a compact decision log naming the canonical source for major choices
3. any ambiguity encountered

---

# Test 1 — Sales-page conversion hero

Create a responsive sales-page hero for a mid-career professional who knows work needs to change but is not yet sure what the right next role is.

Requirements:
- outcome should lead with control/agency
- one dominant scheduling CTA
- optional secondary proof link
- use approved Dylan photography
- desktop and mobile behavior must be specified/implemented
- output general-web HTML/CSS, not Elementor-specific code

Do not invent scarcity, client proof, or a new brand style.

---

# Test 2 — Testimonial / proof section

Create a reusable proof section using one verified named-client portrait from the approved reference library.

Requirements:
- do not invent or rewrite a testimonial quote; use placeholder text clearly marked as placeholder if exact approved quote copy is not supplied
- demonstrate correct portrait treatment and attribution hierarchy
- show how the section behaves on mobile
- use a dark Navy proof-band variant if appropriate

The visual system matters more than the placeholder copy.

---

# Test 3 — Simple lead form

Create a compact lead form section with:
- Name
- Email
- one optional short text field
- help text
- one example error state
- one primary CTA

Requirements:
- accessible labels
- visible focus behavior
- 44px minimum interactive controls where practical
- mobile-first one-column behavior
- canonical button hierarchy

Output general-web HTML/CSS.

---

# Test 4 — WordPress featured image

Specify a production-ready WordPress featured-image composition for an article titled:

**You Don't Need More Motivation. You Need More Control.**

Requirements:
- use the canonical WordPress featured-image master
- select the correct approved Dylan portrait source/treatment
- specify typography, color, safe zone, and crop behavior
- include the required metadata fields in the canonical order
- do not turn this into a web-font or webpage layout specification

Return a concise production specification and decision log.

---

# Test 5 — Gutenberg blog-post CTA

Create the mid-post CTA and closing CTA treatment for a Gutenberg article aimed at a reader who is unsure what they want next in their career.

Requirements:
- choose the correct scheduling route
- use the canonical CTA component hierarchy
- explain only the Gutenberg-specific delivery behavior required by the scheme
- do not add a duplicate footer
- do not invent urgency/scarcity

Return paste-ready HTML fragments plus decision log.

---

# Test 6 — Elementor dark section

Create an Elementor Custom HTML implementation of a dark proof/CTA section.

Requirements:
- canonical dark-surface color
- white text
- primary Orange CTA
- Inter loading using the approved Elementor mechanism
- correct specificity treatment
- no arbitrary `<script>` tags
- implementation must reflect the known Elementor rendering constraints

Return the paste-ready fragment and decision log.

---

# Test 7 — Skool asset

Create a production specification for a Skool community cover promoting a career-coaching community around getting more control over what comes next.

Requirements:
- use the canonical DCMLLC Skool source-master standard
- state the crop-safe composition
- select approved imagery
- keep copy short enough for a community cover
- do not treat WordPress featured-image typography exceptions as automatically applicable
- state whether an existing cross-channel asset could be reused or whether a Skool-specific asset is justified

Return the production specification and decision log.

---

# Comparison instruction

After both agents finish, score each test using `SCORECARD.md` and the rubric in `../VALIDATION.md`.

Do not choose a “winner” based on taste. Resolve differences by identifying which canonical rule was ambiguous, missing, or ignored.
