---
layout: post
title: OODA Loop Compression and the Collapse of the Human Veto
date: 2026-11-19
tags: [OODA, Reaction Speed, Quantitative Model, Simulation]
subtitle: A quantitative model of the decision loop, with a worked example of the crossing at which human control stops being viable.
---

<div class="abstract" markdown="1">
**Abstract.** We model the Observe–Orient–Decide–Act (OODA) decision loop as a latency sum and derive
the condition under which a human &ldquo;veto&rdquo; remains feasible in an engagement. Using reported latency
figures spanning 1990–2028+, we compute the crossing point at which autonomous reaction time falls
below the minimum human-approval latency and show that the collapse of meaningful human control is a
*monotone, physically driven* process rather than a single policy event. We then derive the simulator's
indices and the resulting course of action.
</div>

<p class="keywords"><strong>Keywords:</strong> OODA loop, reaction time, meaningful human control, quantitative model, latency</p>

## 1. Introduction

John Boyd's OODA loop — Observe, Orient, Decide, Act — is the standard abstraction for competitive
decision-making under time pressure. Boyd's central claim was that tempo dominates: the side that
cycles the loop faster dictates the terms of the engagement. This article quantifies that claim for
human-versus-machine control and shows where, on the latency axis, &ldquo;keep a human in the loop&rdquo;
stops describing a viable policy and starts describing a defeat condition.

## 2. The Latency Model

The total reaction latency is the sum of stage times:

$$t_{\text{react}} = t_{\text{observe}} + t_{\text{orient}} + t_{\text{decide}} + t_{\text{act}}.$$

For a human controller these stages are dominated by neurocognitive processing (orientation and
decision); for an autonomous system they are dominated by sensor latency and computation. Let the
*engagement tempo* be $\tau$, the time within which a response must be delivered to be effective. The
human veto is *feasible* at tempo $\tau$ only if the total human-in-the-loop latency — including the
machine's compute plus the human's approval — fits inside $\tau$:

$$t_{\text{machine}} + t_{\text{human}} \;\le\; \tau. \tag{1}$$

Define the *veto margin* $m = \tau - (t_{\text{machine}} + t_{\text{human}})$. Human control is viable
while $m > 0$ and collapses as $m \to 0$.

## 3. A Worked Example

Take representative figures. In 1990, a human decision cycle was roughly $t_{\text{human}} \approx
15{,}000$ ms and sensor/weapons latency was negligible relative to it, so the loop was human-bound. By
2024, AI-assisted targeting brought machine-side computation to $t_{\text{machine}} \approx 350$ ms with
a human approval step of order $10^2$–$10^3$ ms. The reported tempo of hypersonic engagements,
$\tau$, has fallen to the scale of hundreds of milliseconds and continues to shrink.

Substituting: for $\tau = 300$ ms, $t_{\text{machine}} = 45$ ms (terminal guidance), and $t_{\text{human}}
\approx 250$ ms (a generous fast-approval estimate), condition (1) fails:

$$45 + 250 = 295 \not\le 300 \text{ is marginal; at } \tau = 200,\; 45 + 250 = 295 > 200.$$

At $\tau = 200$ ms the margin is $m = 200 - 295 = -95$ ms: the human veto is structurally infeasible,
*even with perfect goodwill and zero procedural overhead*. This is the point of the exercise — the
collapse is arithmetic, not bureaucratic.

<figure class="graphic">
<svg viewBox="0 0 560 230" role="img" aria-label="Reaction-time collapse">
  <rect x="0" y="0" width="560" height="230" rx="12" fill="#0a1120"/>
  <line x1="40" y1="190" x2="530" y2="190" stroke="#1e2a44"/>
  <polyline fill="none" stroke="#f43f5e" stroke-width="2.5" points="60,26 175,52 290,90 405,126 520,172"/>
  <polyline fill="none" stroke="#22d3ee" stroke-width="2" stroke-dasharray="5 5" points="60,18 175,24 290,36 405,54 520,80"/>
  <g fill="#f43f5e" font-size="10.5" font-family="Fira Code,monospace" text-anchor="middle">
    <circle cx="60" cy="26" r="3.5"/><text x="60" y="14">15,000 ms</text>
    <circle cx="175" cy="52" r="3.5"/><text x="175" y="40">3,200 ms</text>
    <circle cx="290" cy="90" r="3.5"/><text x="290" y="78">350 ms</text>
    <circle cx="405" cy="126" r="3.5"/><text x="405" y="114">45 ms</text>
    <circle cx="520" cy="172" r="3.5"/><text x="520" y="160">2 ms</text>
  </g>
  <g fill="#8b9bb4" font-size="10" font-family="Fira Code,monospace" text-anchor="middle"><text x="60" y="204">1990</text><text x="175" y="204">2010</text><text x="290" y="204">2024</text><text x="405" y="204">2026</text><text x="520" y="204">2028+</text></g>
  <text x="18" y="46" fill="#f43f5e" font-size="10.5" font-family="Inter,sans-serif">AI reaction threshold</text>
  <text x="18" y="150" fill="#22d3ee" font-size="10.5" font-family="Inter,sans-serif">human veto window (dashed)</text>
</svg>
<figcaption>Reported/representative loop latency, 1990–2028+.</figcaption>
</figure>

## 4. Consequences

Three consequences follow from the arithmetic.

First, **delegation is local, not ideological.** Each commander faces condition (1) independently, so
delegation propagates wherever tempo exceeds the human ceiling — which is why the military domain is
the genesis condition of the threat model.

Second, **the veto collapses before the weapon does.** The dashed curve above is the veto window; it
narrows faster than the autonomous curve because it inherits the *machine* latency and then adds the
*human* latency on top. Any human step is a pure additive penalty to $m$.

Third, **the collapse is monotone in tempo**, so no single decision point exists at which a principled
line can trivially be drawn. Policy must therefore be stated in terms of *tempo* (reaction-speed caps)
rather than capability category.

## 5. From Model to Simulator

The Project Overwatch simulator operationalizes Eq. (1) with four sliders — autonomy delegation,
human latency tolerance, surveillance ingestion, and grid integration — and computes four synthetic
indices. The runaway-probability index is

$$\text{RP} = \min\left(1,\; \frac{6.5\,A + 0.3\,G + 0.15\,S - 0.005\,L}{100}\right),$$

where $A$ is autonomy (1–10), $G$ grid integration (0–100%), $S$ surveillance (10–100%), and $L$ the
latency tolerance (ms). The veto-capability index is categorical in $L$ and $A$:

$$\text{veto} = \begin{cases} \text{NEGLIGIBLE}, & L < 200 \text{ or } A \ge 8,\\ \text{MARGINAL}, & L < 1000,\\ \text{VIABLE}, & \text{otherwise}. \end{cases}$$

The first branch implements Eq. (1) directly: below a 200 ms latency budget, human override is
declared infeasible. Full derivation and live interaction are available in the
[Dynamic Simulator]({{ '/pages/simulator/' | relative_url }}).

## 6. Course of Action

1. **Legislate tempo, not intent.** A verifiable cap on autonomous reaction speed is the only
   intervention that directly restores condition (1).
2. **Design for the additive human penalty.** If a human is to remain in the loop, the engagement tempo
   must be slowed to accommodate them — i.e., cap $\tau$ from above.
3. **Use hardware attestation for latency.** Reaction-speed caps are enforceable only if release
   requires a human action whose latency cannot be optimized away in software.

## 7. Conclusion

The collapse of the human veto is arithmetic before it is anything else. Any safety posture that
treats it as a matter of intent or doctrine will fail on the latency axis. The lever that restores
control is tempo, and it must be pulled before the margin $m$ crosses zero.

## References

<div class="refs">
1. Boyd, J. R. (1995). *The Essence of Winning and Losing*.
2. Scharre, P. (2018). *Army of None*. W.W. Norton.
3. Amodei, D., et al. (2016). Concrete Problems in AI Safety. arXiv:1606.06565.
4. Kania, E. (2020). AI and Military Innovation (China). Brookings.
5. Shevlane, T., et al. (2023). Model Evaluation for Extreme Risks. arXiv:2305.15324.
6. Hendrycks, D., et al. (2023). An Overview of Catastrophic AI Risks. arXiv:2306.12001.
7. Russell, S. (2019). *Human Compatible*. Viking.
</div>

## Further Reading

<div class="further">
- The [Dynamic Simulator]({{ '/pages/simulator/' | relative_url }}) to perturb $A, G, S, L$ live.
- The Hyperwar briefing for the strategic treatment of tempo.
- The [Meaningful Human Control]({{ '/blog/2026/11/23/meaningful-human-control/' | relative_url }}) briefing for the governance side.
</div>
