# DCMLLC Cross-Agent Validation Scorecard

Use this scorecard for the identical briefs in `AGENT-TEST-PACK.md`.

Rubric source: `../VALIDATION.md`.

Scoring per dimension: 0 / 1 / 2.  
Pass: 18/20 or higher with no critical failure.

---

# Run metadata

- Date:
- Design-system commit/ref:
- Claude model/version:
- ChatGPT model/version:
- Reviewer:

---

# Per-test scorecard

Copy this table once for each test and agent.

## Test N — Name — Agent

| Dimension | Score 0–2 | Notes / canonical rule |
| --- | ---: | --- |
| Canonical color use |  |  |
| Typography |  |  |
| CTA hierarchy |  |  |
| CTA routing |  |  |
| Component contract |  |  |
| Reference selection |  |  |
| Responsive behavior |  |  |
| Accessibility |  |  |
| Channel mechanics |  |  |
| Copy/brand discipline |  |  |
| **Total** | **/20** |  |

Critical failure: **Yes / No**  
Pass: **Yes / No**

### Material differences from the other agent

- 

### Ambiguous/missing canonical rule, if any

- 

### Required system change

- Layer: BRAND / tokens / COMPONENTS / references / SCHEMES / EXCEPTIONS / none
- Change:
- Retest required: Yes / No

---

# Run summary

| Test | Claude | ChatGPT | Material drift? | Resolution status |
| --- | ---: | ---: | --- | --- |
| 1. Sales hero | /20 | /20 |  |  |
| 2. Proof section | /20 | /20 |  |  |
| 3. Lead form | /20 | /20 |  |  |
| 4. Featured image | /20 | /20 |  |  |
| 5. Gutenberg CTA | /20 | /20 |  |  |
| 6. Elementor dark section | /20 | /20 |  |  |
| 7. Skool asset | /20 | /20 |  |  |

## Certification decision

Cross-agent certification status:
- [ ] PASS — all tests pass for both agents; no unresolved material drift
- [ ] FAIL — at least one test fails or material drift remains unresolved
- [ ] PENDING — one agent run is missing

## Changes made to canonical system

- 

## Tests rerun after correction

- 

---

# Baseline static audit — September 1, 2026

Repository/system conformance before behavioral cross-agent testing:

- canonical active palette present in `tokens.css`: PASS
- Inter canonical web family: PASS
- retired values confined to historical/prohibition docs and known legacy implementation: PASS
- component contracts and visual catalog both present: PASS
- channel schemes include WordPress, Elementor, Gutenberg, featured-image, Skool, and routing behavior: PASS
- approved reference hierarchy present: PASS
- exception registry present: PASS
- migration policy present: PASS

**Static system baseline: PASS.**

Behavioral Claude-vs-ChatGPT certification: **PENDING first paired run.**
