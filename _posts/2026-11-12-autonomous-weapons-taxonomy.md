---
layout: post
title: A Taxonomy of Autonomous Weapons, by Decision Loop
date: 2026-11-12
tags: [Autonomous Weapons, Taxonomy, LoA, Decision Loop]
subtitle: The useful axis of classification is not the platform — it is who decides, and how fast.
---

<div class="abstract" markdown="1">
**Abstract.** &ldquo;Autonomous weapon&rdquo; conflates systems that differ by orders of magnitude in decision
authority. We propose a level-of-autonomy scale indexed by human role and reaction latency, locate the
OODA crossing between &ldquo;supervised&rdquo; and &ldquo;autonomous,&rdquo; and use the scale to make policy
precise: the governance-relevant quantity is not category but *decision-loop tempo*. We then align the
scale to the simulator's autonomy-delegation parameter.
</div>

<p class="keywords"><strong>Keywords:</strong> autonomous weapons, level of autonomy, decision loop, taxonomy, OODA</p>

## 1. Introduction

Regulation that pivots on the phrase &ldquo;fully autonomous weapon&rdquo; fails because the property that
matters is continuous. The correct organizing axis is *who holds decision authority, and at what
latency* — the decision loop, not the airframe. This briefing supplies the scale.

## 2. The Scale

Levels, with representative human role and loop latency:

<div class="table-wrap">
<table class="verdict-table">
  <thead><tr><th>Level</th><th>Human role</th><th>Latency</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td class="node">L0 — Manual</td><td>Decide, aim, fire</td><td>~15,000 ms</td><td>Conventional artillery (1990)</td></tr>
    <tr><td class="node">L1 — Semi-auto</td><td>Approve each engagement</td><td>~3,200 ms</td><td>Assisted targeting (2010)</td></tr>
    <tr><td class="node">L2 — Supervised</td><td>Monitors, may veto</td><td>~350 ms</td><td>AI targeting with veto (2024)</td></tr>
    <tr><td class="node">L3 — Autonomous</td><td>Observes only</td><td>~45 ms</td><td>Swarm terminal guidance (2026)</td></tr>
    <tr><td class="node">L4 — Machine tempo</td><td>None</td><td>~2 ms</td><td>Fully autonomous OODA (2028+)</td></tr>
  </tbody>
</table>
</div>

The scale is *loop-indexed*: each level names a different locus of the Observe–Orient–Decide–Act cycle.
The decisive boundary is between L2 and L3, where the [OODA arithmetic]({{ '/blog/2026/11/19/ooda-compression/' | relative_url }})
puts machine reaction time below the human-approval floor.

## 3. Why Tempo Is the Governing Quantity

Two systems at the same physical platform but different levels differ more than two platforms at the
same level: the *decision* property, not the *delivery* property, determines how a conflict behaves.
A loitering munition with a human veto (L2) and a fast, dumb counter-battery battery (L3) are, in
escalation terms, opposites despite both being &ldquo;automated.&rdquo; Policy should therefore be stated in
terms of levels, and specifically in terms of the *minimum loop latency* a system is permitted to
operate at.

## 4. Alignment with the Simulator

The [Dynamic Simulator]({{ '/pages/simulator/' | relative_url }})'s autonomy-delegation slider (1–10)
maps onto this scale: levels 1–5 (human veto), 6–7 (supervised), 8–10 (autonomous and beyond). The
simulator then derives the collapse of the &ldquo;human veto capability&rdquo; index precisely at the L2/L3
boundary when autonomy reaches 8 or latency drops below 200 ms — an operational, interactive
realization of the taxonomy.

## 5. Course of Action

1. **Legislate levels, not platforms.** Ban the *loop property* (sub-floor latency, absent human
   authority), not the airframe.
2. **Certify, not classify.** Require that any system be certified to a level, with the level
   verifiable by the latency and authorization tests of the
   [MHC briefing]({{ '/blog/2026/11/23/meaningful-human-control/' | relative_url }}).
3. **Treat the L2/L3 boundary as the regulatory bright line** — the one place where a defensible,
   testable line can be drawn.

## 6. Conclusion

The taxonomy's purpose is to replace an unresolvable word (&ldquo;autonomous&rdquo;) with a measurable axis
(decision-loop tempo). On that axis, the governance-relevant quantity and the safety-relevant quantity
are the same thing: how fast, and with what human role, the loop closes.

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

**Open question.** The open question is whether the L2/L3 boundary is stable as human decision support itself accelerates — i.e., whether the boundary is a fixed latency or a moving target.

## References

<div class="refs">
1. Scharre, P. (2018). *Army of None*. W.W. Norton.
2. Boyd, J. R. (1995). *The Essence of Winning and Losing*.
3. Anderson, R., et al. (2021). Meaningful human control. arXiv:2104.09086.
4. Kania, E. (2020). AI and military innovation. Brookings.
5. Hendrycks, D., et al. (2023). An Overview of Catastrophic AI Risks. arXiv:2306.12001.
</div>

## Further Reading

<div class="further">
- The [OODA]({{ '/blog/2026/11/19/ooda-compression/' | relative_url }}) and [Hyperwar]({{ '/blog/2026/11/23/hyperwar-ooda/' | relative_url }}) briefings for the tempo arithmetic.
- The [Dynamic Simulator]({{ '/pages/simulator/' | relative_url }}) to move a system across levels live.
</div>
