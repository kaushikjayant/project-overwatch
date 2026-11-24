---
layout: post
title: Meaningful Human Control, Operationalized
date: 2026-11-23
tags: [Meaningful Human Control, Governance, Weapons, Latency]
subtitle: Turning a slogan into checkable architectural requirements.
---

<div class="abstract" markdown="1">
**Abstract.** &ldquo;Meaningful human control&rdquo; is widely invoked and rarely defined. We operationalize it
as three testable architectural properties — latency feasibility, information sufficiency, and
non-bypassable authorization — and show that each reduces to an engineering quantity that can be
verified at the component level. We then reconcile MHC with the tempo imperative: it is viable only
where engagement pace is capped in tandem.
</div>

<p class="keywords"><strong>Keywords:</strong> meaningful human control, MHC, authorization, latency, verification</p>

## 1. Introduction

A human observing a dashboard is not a human in control. MHC separates the two, but only if it is
stated as a set of *testable* properties rather than a policy sentiment. This briefing gives the
operational definition and the verification story.

## 2. Three Properties

**P1 — Latency feasibility.** The human decision step must fit inside the engagement window;
formally, $t_{\text{machine}} + t_{\text{human}} \le \tau$ as in the
[OODA note]({{ '/blog/2026/11/19/ooda-compression/' | relative_url }}). If this fails, &ldquo;control&rdquo; is a
fiction regardless of authorization policy.

**P2 — Information sufficiency.** The human must see enough to *judge*, not merely approve a summary.
Operationally this requires that the decision-relevant representation be auditable and complete — the
opposite of a single confidence score.

**P3 — Non-bypassable authorization.** Release must require a human-originated cryptographic action
that no software path can emulate. This is the component that converts &ldquo;human in the loop&rdquo; from a
log statement into a hardware-enforced fact.

## 3. Verification

Each property is checkable. P1 is verified by timing the full release chain under load; P2 by
inspection of the decision surface presented to the operator; P3 by hardware attestation that the
release gate is gated on a human key. The three together form a *falsifiable* claim: a system either
satisfies them or it does not, and the test does not require trusting the system's own account of
itself — which is the entire point.

## 4. Discussion

MHC collides with the tempo imperative by construction: P1 reintroduces the additive human latency
that the OODA analysis showed to be a defeat condition at high tempo. There is no engineering
resolution to this tension; there is only a *policy* resolution — cap the engagement pace so that the
human step is affordable. MHC and pace caps are therefore not two policies but one policy with two
faces. Anderson et al. (2021) reach the same conclusion from the governance side.

## 5. Course of Action

1. **Adopt the three properties as a certification test**, not a values statement.
2. **Couple MHC to pace caps** — do not deploy MHC-required systems in regimes where P1 cannot hold.
3. **Require attestation at the supply chain** so that authorization requirements are baked into
   release hardware, not added in software.

## 6. Conclusion

MHC is achievable and verifiable — but only as a set of architectural properties, and only in the pace
regime where those properties can hold. Stated this way, it stops being a slogan and becomes a
falsifiable engineering requirement.

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

**Open question.** The open question is whether P1 (latency feasibility) and the tempo imperative can ever be jointly satisfied, or whether all MHC regimes must first bound the engagement pace.

## References

<div class="refs">
1. Anderson, R., et al. (2021). Meaningful human control over AI systems. arXiv:2104.09086.
2. Scharre, P. (2018). *Army of None*. W.W. Norton.
3. Boyd, J. R. (1995). *The Essence of Winning and Losing*.
4. Amodei, D., et al. (2016). Concrete Problems in AI Safety. arXiv:1606.06565.
5. Anderson, R. (2020). *Security Engineering*. Wiley.
</div>

## Further Reading

<div class="further">
- The [Defense-in-Depth]({{ '/blog/2026/11/20/defense-in-depth/' | relative_url }}) briefing for where MHC sits in the stack.
- The [Hardware Interlocks]({{ '/blog/2026/11/24/hardware-interlocks/' | relative_url }}) briefing for the P3 primitive.
</div>
