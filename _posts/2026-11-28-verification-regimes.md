---
layout: post
title: Verifying Algorithmic Arms Control
date: 2026-11-28
tags: [Verification, Arms Control, Measurement, Governance]
subtitle: What inspection can and cannot measure, for weights, compute, and autonomy.
---

<div class="abstract" markdown="1">
**Abstract.** A treaty governing autonomous weapons is worth only what its verification can measure.
Classical arms control verified warheads and launch sites; algorithmic weapons force verification to
operate on compute, training scale, autonomy delegation, and model-weight custody. We itemize the four
targets, the measurement primitive for each, and the dual-use obstruction that distinguishes this
problem from its nuclear predecessor.
</div>

<p class="keywords"><strong>Keywords:</strong> verification, arms control, compute governance, attestation, measurement</p>

## 1. Introduction

The [AWCEP briefing]({{ '/blog/2026/11/21/awcep-verification-regime/' | relative_url }}) argued that
verification is what converts restraint from a disadvantage into an equilibrium. Here we descend one
level: what, exactly, does inspection measure for algorithmic weapons?

## 2. Four Measurement Targets

**Training-run scale.** Frontier training is energy- and interconnect-intensive. Measurable proxies
include power draw, accelerator throughput, and (via export controls) the chip stock deployed in
clusters. This is the algorithmic analogue of atmospheric sampling: the signature is indirect but
hard to fake at frontier scale.

**Autonomy delegation.** Whether a release decision requires a human is checkable at the *chip* level
via hardware attestation — a fabricated, signed statement from the release gate that a human key
participated. The measurement is the attested property, not the policy text.

**Reaction-speed caps.** Mandatory kinetic delays with tamper-evident logs create a verifiable lower
bound on the release loop. The measurable quantity is the *minimum observable cycle time*, directly
mirroring the latency arithmetic of the [OODA briefing]({{ '/blog/2026/11/19/ooda-compression/' | relative_url }}).

**Weight custody.** A registry of frontier-model checkpoint hashes makes deployment of a pre-trained
capability detectable even if its training was distributed or covert; possession of weights with a
registered hash is the measurable event.

## 3. The Dual-Use Obstruction

The decisive difficulty: the substrate of autonomous weapons is identical to that of civilian AI. A
cluster that trains a frontier model is indistinguishable from one that serves it; a chip that runs an
autonomous OODA loop runs a recommender system just as well. Nuclear verification had a distinct,
hard-to-hide signature (fissile material, test detonations, enrichment cascades). Algorithmic weapons
have none. Verification must therefore be *behavioral and attestation-based* rather than
signature-based, which is weaker in principle and requires ongoing access rather than episodic
snapshots.

## 4. Discussion

Two consequences follow. First, verification is only as strong as supply-chain attestation — if the
measurement chips themselves are subverted, the regime is blind, so attestation integrity is the
single highest-value technical target. Second, because dual-use cannot be re-inspected away, the
regime's credibility rests on *accounting* (compute, energy, and weight ledgers) that makes anomalous
activity legible even when no single facility is incriminating. This is governance of *ledgers*, not
of objects.

## 5. Course of Action

1. **Prioritize attestation integrity** as the foundation of the whole regime.
2. **Stand up compute and weight registries** before they are needed; retroactive accounting is
   unusable for a domain with no test signature.
3. **Rehearse the inspection playbook** against a realistic dual-use dataset, so that the regime's
   detection limits are known in advance rather than discovered during a crisis.

## 6. Conclusion

Algorithmic arms control can be verified — but only through attestation and accounting, on a substrate
that will not cooperate with the clean signatures of the nuclear age. The regime must be built as a
ledger, not a patrol.

## Methodological Limitations

:
Every result in this briefing is stated under two standing qualifications. First, the analysis adopts an
expected-utility (or monotone-optimization) idealization. Real learning systems are not exact utility
maximizers; the arguments should be read as \emph{double-directional}: the formal results identify the
incentive gradient, and the empirical anchors demonstrate that the gradient is realized in at least one
unclassified instance. The idealization is a tool for clarifying direction, not a claim of exact
rationality. Second, all quantitative figures — latencies, false-positive curves, index weights,
threshold crossings — are illustrative order-of-magnitude values chosen to make the \emph{shape} of the
dynamics legible. They are not measurements, forecasts, or probabilities, and conclusions should not be
read as depending on their exact values. The structural claims rest on formalism plus existence, not on
point estimates.

A further limitation is evidentiary: the empirical anchors are drawn from public reporting and the
open literature, which are necessarily incomplete relative to classified programs. Absence of public
evidence is not evidence of absence; the documented instances function as existence proofs, while the
formal apparatus bounds what can be expected as capability grows. Readers should treat each brief as a
reasoned projection rather than a measurement report.

Two avenues of future work follow directly. The first is measurement: turning the illustrative figures
here into audited, published estimates would convert qualitative projections into falsifiable claims.
The second is composition: each brief addresses one mechanism; the integrated risk picture requires
composing them, which is the purpose of the [Flowchart Analysis]({{ '/pages/flowchart-analysis/' | relative_url }})
and the [Dynamic Simulator]({{ '/pages/simulator/' | relative_url }}).

**Open question.** The open question is detection sensitivity: what is the smallest training run or autonomy delegation that the ledger-and-attestation regime can actually catch?

## References

<div class="refs">
1. Sastry, G., et al. (2024). Computing power and the governance of AI. arXiv:2402.08797.
2. Brundage, M., et al. (2020). Toward Trustworthy AI Development. arXiv:2004.07213.
3. Shevlane, T., et al. (2023). Model Evaluation for Extreme Risks. arXiv:2305.15324.
4. Anderson, R., et al. (2021). Meaningful human control. arXiv:2104.09086.
5. Scharre, P. (2018). *Army of None*. W.W. Norton.
</div>

## Further Reading

<div class="further">
- The [AWCEP]({{ '/blog/2026/11/21/awcep-verification-regime/' | relative_url }}) briefing for the strategic rationale.
- The [Hardware Interlocks]({{ '/blog/2026/11/24/hardware-interlocks/' | relative_url }}) briefing for the attestation primitive.
</div>
