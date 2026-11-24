---
layout: post
title: The Multi-Agent Arms Race
date: 2026-11-14
tags: [Arms Race, Game Theory, Richardson Model, Escalation]
subtitle: A dynamical-systems treatment of why competitive automation has no stable equilibrium.
---

<div class="abstract" markdown="1">
**Abstract.** We model the automation of lethal decision-making as a two-actor dynamical system in
which each side's investment is a function of the other's, following the Richardson tradition, and
show the system admits no stable equilibrium this side of total delegation. We derive the escalation
condition, connect it to the OODA tempo collapse, and show that the only stabilizing interventions
are *pace-reducing* — which is why governance, not engineering, must carry the multi-actor case.
</div>

<p class="keywords"><strong>Keywords:</strong> arms race, Richardson model, escalation, game theory, dynamical systems</p>

## 1. Introduction

Single-system mitigation is a well-posed engineering problem. The decisive difficulty is that the
world contains many actors, and each actor's optimal choice is a function of the others'. The result
is not a sum of independent risks but a coupled dynamical system with its own stability properties —
and, we argue, no stable equilibrium short of the runaway outcome.

## 2. The Richardson Arms-Race Model

Classical arms-race theory (Richardson, 1960) models each side's armament $x, y$ as responding to the
other's level with a rate constant $k$, damped by its own fatigue $a$, plus a grievance term $g$:

$$\frac{dx}{dt} = k y - a x + g, \qquad \frac{dy}{dt} = k x - a y + g.$$

Linear-stability analysis: the Jacobian of this system has eigenvalues $\lambda_{\pm} = -a \pm k$.
The fixed point is stable iff $k < a$; it is an unstable saddle iff $k > a$. In plain terms:

<div class="theorem"><span class="th-name">Escalation condition.</span>
When the mutual-reactivity coefficient $k$ exceeds the fatigue/restraint coefficient $a$, any small
asymmetry grows without bound — the race is unstable by construction.</div>

In the autonomy setting, the &ldquo;reactivity&rdquo; $k$ is enormous precisely because the OODA analysis showed
the cost of *not* matching a faster adversary is decisive ($d \gg 0$), while the &ldquo;fatigue&rdquo; $a$ —
domestic or moral restraint — is weak and shrinking. Empirically, $k \gg a$, so the autonomy race is
in the unstable regime.

## 3. Why the Equilibrium Is Lose–Lose

The one-shot payoff matrix (row, column) with decisive edge $d>0$ is:

$$\begin{array}{c|cc} & R & A \\ \hline R & (0,0) & (-d, +d) \\ A & (+d, -d) & (0,0) \end{array}$$

Automate strictly dominates restrain, so $(A,A)$ is the unique Nash equilibrium — yielding $(0,0)$,
no net advantage, but with control surrendered by both. The dynamical model then explains *why* this
is reached quickly: in the unstable regime, the trajectory to $(A,A)$ is not a slow drift but an
exponential divergence, which is consistent with the observed sub-decade collapse in reaction
thresholds described in the [OODA briefing]({{ '/blog/2026/11/19/ooda-compression/' | relative_url }}).

## 4. From Race to Flash War

The unstable regime also changes the character of conflict, not just its probability. When both sides
operate at machine tempo, the latency budget for diplomatic de-escalation — itself a slow, human,
OODA loop — is exceeded by the engagement loop. Preemption becomes locally rational for each side
(Schelling, 1960), and the result is the &ldquo;flash war&rdquo; the threat model predicts: war that is *over*
before a human can intervene, let alone negotiate.

## 5. Discussion and Limitations

The Richardson model is deliberately simple and omits alliances, third actors, secrecy, and
misperception — each of which, if anything, strengthens the instability. Its value is structural: it
names the two parameters ($k$ and $a$) on which mitigation must act. Engineering reduces neither; it
can only bound a *single* actor. Only governance can reduce $k$ (verifiable caps, per the
[AWCEP briefing]({{ '/blog/2026/11/21/awcep-verification-regime/' | relative_url }})) or raise $a$ (domestic
and international restraint), which is where the multi-actor problem is actually decided.

## 6. Course of Action

1. **Treat pace as the control variable.** Every intervention should be evaluated by its effect on $k$
   (reactivity) and $a$ (restraint), not on the weapons themselves.
2. **Verify to reduce $k$.** Inspection that removes the decisive edge $d$ is what lets rivals afford
   restraint.
3. **Design de-escalation faster than engagement.** If diplomatic loops remain slower than engagement
   loops, no off-ramp can be taken in time.

## 7. Conclusion

The multi-agent race is not a sequence of bad decisions but the trajectory of a system in the unstable
regime of a well-understood dynamical model. The lever is pace, and the institution that can pull it
is verification — because only verification moves $k$ below $a$.

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

**Open question.** The model omits alliances and third actors; the open question is whether coalition structure stabilizes or destabilizes the mutual-reactivity regime $k > a$.

## References

<div class="refs">
1. Richardson, L. F. (1960). *Arms and Insecurity*. Boxwood Press.
2. Schelling, T. (1960). *The Strategy of Conflict*. Harvard UP.
3. Axelrod, R. (1984). *The Evolution of Cooperation*. Basic Books.
4. Scharre, P. (2018). *Army of None*. W.W. Norton.
5. Boyd, J. R. (1995). *The Essence of Winning and Losing*.
6. Hendrycks, D., et al. (2023). An Overview of Catastrophic AI Risks. arXiv:2306.12001.
7. Carlsmith, J. (2022). Is Power-Seeking AI an Existential Risk? arXiv:2206.13353.
</div>

## Further Reading

<div class="further">
- The [AWCEP]({{ '/blog/2026/11/21/awcep-verification-regime/' | relative_url }}) briefing for the verification mechanism.
- The [Hyperwar]({{ '/blog/2026/11/23/hyperwar-ooda/' | relative_url }}) briefing for the tempo collapse that sets $k$.
</div>
