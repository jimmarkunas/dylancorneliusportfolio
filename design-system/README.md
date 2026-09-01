# Dylan Cornelius Design System

## Status
Milestone 3 — Brand Rules & Tokens completed.

Canonical visual rules now live in `BRAND.md`; canonical implementation values live in `tokens.css`. Milestone 4 will turn those primitives into an approved component catalog.

## Purpose
This directory is the canonical design-system authority for Dylan Cornelius branded web pages and graphical assets.

The system was derived from explicit brand decisions, approved/current branded implementation evidence, the Milestone 2 audit, and the precedence rules below. Legacy implementation details remain evidence, not automatic brand rules.

## Authority and precedence
When sources conflict, use this order:

1. **Explicit current approval from Dylan Cornelius**
2. **Canonical files in `/design-system/`**
3. **Approved reference assets stored in `/design-system/references/`**
4. **Existing portfolio implementation in this repository**
5. **Existing Figma concepts and historical brand materials**
6. **AI inference or newly invented styling**

AI inference must never override an approved or canonical rule.

## Governance rules
- GitHub is the ongoing source of truth for the design system.
- Figma is a reference and discovery source, not a required runtime dependency.
- Read `BRAND.md` before making visual decisions.
- Use `tokens.css` rather than copying arbitrary values from legacy CSS.
- Do not promote an existing CSS value, component treatment, or Figma treatment into the design system merely because it exists.
- When canonical rules and legacy implementation disagree, canonical rules govern new work; migrate legacy pages intentionally rather than silently rewriting them.
- When a new source conflicts with the canonical system, flag the conflict for explicit approval rather than averaging or silently choosing.
- Canonical rules should be written once and referenced elsewhere rather than duplicated across AI-specific instruction files.

## Current design-system files
- `README.md` — governance, precedence, and project status
- `AUDIT.md` — Milestone 2 evidence inventory, conflicts, template-residue quarantine, and historical decision queue. **Research evidence, not canonical styling.**
- `BRAND.md` — **canonical human-readable visual rules and principles**
- `tokens.css` — **canonical implementation tokens for typography, color, spacing, width, radius, elevation, motion, and core control roles**

## Planned later milestones
- `components.html` — approved reusable component and pattern catalog (Milestone 4)
- `references/` — approved visual references and source assets (Milestone 5)
- AI/design-system validation and finalization (Milestone 6)

## AI usage
Before producing or modifying branded assets in this repository:

1. Read this README.
2. Read `BRAND.md`.
3. Use `tokens.css` for primitive design values.
4. Use `AUDIT.md` only to understand legacy evidence/history; do not use it to override canonical rules.
5. Once `components.html` and approved references exist, use them as additional required sources.

If a requested treatment conflicts with `BRAND.md` or `tokens.css`, follow the user's explicit current request and record the system change if it is intended to become a new rule.

## Change control
Changes to canonical design-system rules should be intentional and reviewable in Git history. Silent stylistic drift is not an acceptable update mechanism.
