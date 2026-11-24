---
layout: post
title: AWCEP — A Verification Regime for Algorithmic Warheads
date: 2026-11-21
tags: [Governance, Verification, Non-Proliferation, Game Theory]
subtitle: The OODA race is a strategic dilemma; escaping it requires verification that makes restraint rational.
---

<div class="abstract" markdown="1">
**Abstract.** We model the automation of lethal decision-making as a game in which each actor faces a
dominant strategy to automate, producing an outcome neither side prefers. We then show that the only
equilibrium-restoring intervention is a *verifiable* cap on autonomous reaction speed, and specify the
verification targets — training-run scale, autonomy delegation, reaction-speed caps, and weight custody —
that a credible inspection regime for algorithmic weapons must measure. We close with the institutional
and technical requirements for the Autonomous Weapons Counter-Escalation Pact (AWCEP).
</div>

<p class="keywords"><strong>Keywords:</strong> arms control, verification, game theory, non-proliferation, autonomous weapons</p>

## 1. Introduction

Technical mitigation can bound any *single* system; it cannot, by itself, bound the *interaction* of
competing systems. The deepest driver of lethal autonomy is not a bad actor but a good one facing a
bad equilibrium. If one state automates, every rival must follow or fight at a permanent time
disadvantage. The result is a race to the bottom in which everyone delegates and no one gains. AWCEP
is the proposal to change that game.

## 2. The Strategic Dilemma, Formally

Consider a two-actor game where each chooses between **restrain** ($R$) and **automate** ($A$). Let
payoffs be military advantage relative to the adversary, with the time-disadvantage of restraint
captured by the off-diagonal entries. A representative payoff matrix (row player, column player) is:

$$\begin{array}{c|cc} & R & A \\ \hline R & (0,0) & (-d,\; +d) \\ A & (+d,\; -d) & (0,0) \end{array}$$

where $d > 0$ is the decisive edge from faster reaction. Because $+d > 0$ and $0 > -d$, **automate**
strictly dominates **restrain** for each player. The unique Nash equilibrium is $(A, A)$, yielding
$(0,0)$ — no net advantage to either, but *both* have now surrendered control. The equilibrium is a
canonical lose–lose: each actor automates to avoid a disadvantage that automation then mutualizes away.

<div class="theorem"><span class="th-name">Proposition 4 (Dominant-strategy race).</span>
With $d>0$ and no constraint on reaction speed, $(A, A)$ is the unique equilibrium regardless of the
actors' preferences, and total control is surrendered even though no actor gains.</div>

## 3. What Verification Must Measure

To restore a stable $(R, R)$ equilibrium, the payoff to defection must be removed — which requires
*verifying* that no actor has automated. Four targets are measurable in principle:

1. **Training-run scale.** Frontier training runs consume thousands of accelerators and megawatt-hours;
   their scale is detectable by energy and chip-export monitoring, in the tradition of atmospheric
   sampling for nuclear tests.
2. **Autonomy delegation.** Hardware attestation can certify that a release decision requires a human
   cryptographic action — a property that is checkable *at the chip level* rather than the policy level.
3. **Reaction-speed caps.** Mandatory kinetic delays with tamper-evident logging create a verifiable
   lower bound on $t_{\text{react}}$, directly attacking the OODA collapse described in the
   [OODA briefing]({{ '/blog/2026/11/19/ooda-compression/' | relative_url }}).
4. **Weight custody.** A registry of frontier-model checkpoint hashes makes *deployment* of a
   pre-trained autonomous capability detectable even if training was distributed or covert.

Each target is imperfect; together they raise the cost of covert defection above its military value,
which is the only thing that flips the payoff sign on $A$.

## 4. Discussion and Limitations

Verification for algorithmic weapons is harder than for nuclear warheads in one decisive way: the
dual-use substrate is identical to the civilian one. A data center that trains a frontier model is
indistinguishable from one that serves it commercially, and a chip that runs an autonomous OODA loop
is the same chip that runs a recommendation system. This means verification cannot rely on
facility signatures alone and must combine **attestation** (chip-level policy enforcement) with
**accounting** (compute, energy, and weight registries). A second limitation is institutional:
verification is only as strong as the inspection body's access, which in turn requires the very
political consent that defecting states are least willing to grant. AWCEP therefore couples technical
verification to diplomatic sequencing: verifiable caps first, universalized by the security guarantee
they provide.

## 5. Course of Action

1. **Cap reaction speed first.** It is the one variable whose capping removes the $d$ term directly
   and is the cheapest to verify (kinetic delays plus attestation).
2. **Register weights and compute.** A public frontier-weight and training-run registry converts covert
   capability into a detectable event.
3. **Mandate chip-level attestation.** Require that release-decision hardware cryptographically requires
   human authorization, making autonomy a supply-chain property rather than a policy promise.
4. **Sequence diplomatically.** Offer verifiable restraint as a club good: the assurance that others are
   equally constrained is the *reward* for signing, which is the only reward that changes the payoff matrix.

## 6. Conclusion

The OODA race has no equilibrium short of total delegation unless defection can be detected. AWCEP's
contribution is to specify, in engineering terms, the four measurements that make defection
undesirable. Verification is not a bureaucratic add-on to mitigation; it is the load-bearing member of
the entire architecture, because it is what converts a unilateral disadvantage into a stable, inspectable
mutual restraint.

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

**Open question.** The open question is institutional: can a verification body sustain access against a defector that controls its own measurement infrastructure (attestation subversion)?

## References

<div class="refs">
1. Schelling, T. (1960). *The Strategy of Conflict*. Harvard University Press. (Payoff structure; commitment.)
2. Axelrod, R. (1984). *The Evolution of Cooperation*. Basic Books.
3. Scharre, P. (2018). *Army of None*. W.W. Norton.
4. Anderson, R., et al. (2021). Meaningful human control over AI systems. arXiv:2104.09086.
5. Shevlane, T., et al. (2023). Model Evaluation for Extreme Risks. arXiv:2305.15324.
6. Brundage, M., et al. (2020). Toward Trustworthy AI Development. arXiv:2004.07213.
7. Hendrycks, D., et al. (2023). An Overview of Catastrophic AI Risks. arXiv:2306.12001.
8. Sastry, G., et al. (2024). Computing power and the governance of AI. arXiv:2402.08797.
</div>

## Further Reading

<div class="further">
- The [Mitigation Architecture]({{ '/pages/mitigation-architecture/' | relative_url }}) page places AWCEP in the integrated defense.
- The [Multi-Agent Arms Race]({{ '/blog/2026/11/14/multi-agent-arms-race/' | relative_url }}) briefing for the full game-theoretic treatment.
- The [Verification Regimes]({{ '/blog/2026/11/28/verification-regimes/' | relative_url }}) briefing for the technical measurement detail.
</div>
