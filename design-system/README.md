# Dylan Cornelius Design System

## Status
Milestone 2 — Brand Audit completed. Canonical brand rules and tokens are pending Milestone 3.

## Purpose
This directory is the canonical design-system authority for Dylan Cornelius branded web pages and graphical assets.

The design system will be derived from the approved portfolio implementation, existing approved Figma concepts, and explicit brand approvals. Existing implementation details are evidence, not automatically brand rules.

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
- Do not promote an existing CSS value, component treatment, or Figma treatment into the design system merely because it exists.
- When implementation and Figma disagree, flag the conflict for approval rather than averaging or silently choosing.
- Once a design decision is approved and recorded in `/design-system/`, downstream pages and assets should follow it unless Dylan explicitly requests an exception or a system revision.
- Canonical rules should be written once and referenced elsewhere rather than duplicated across AI-specific instruction files.

## Current design-system files
- `README.md` — governance, precedence, and project status
- `AUDIT.md` — Milestone 2 evidence inventory, conflicts, template-residue quarantine, and Milestone 3 decision queue. **AUDIT.md is research evidence, not itself a canonical brand specification.**

## Planned canonical files
The following files will be created in later milestones:

- `BRAND.md` — human-readable brand rules and visual principles
- `tokens.css` — canonical design values such as colors, type, spacing, radii, and widths
- `components.html` — approved visual component and pattern catalog
- `references/` — approved visual references

Until those files are created and approved, this README governs source selection and conflict resolution. The audit records evidence but does **not** declare current portfolio styling to be approved brand doctrine.

## AI usage
Any AI or human contributor creating branded work from this repository should read this file before making visual decisions. `AUDIT.md` may be used to understand existing evidence and unresolved conflicts, but it must not be treated as authorization to choose among disputed values. Once the later canonical files exist, they should also be read before producing or modifying branded assets.

## Change control
Changes to canonical design-system rules should be intentional and reviewable in Git history. Silent stylistic drift is not an acceptable update mechanism.
