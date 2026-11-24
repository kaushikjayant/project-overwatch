---
layout: page
permalink: /pages/mitigation-architecture/
title: Mitigation Architecture
eyebrow: Analysis Module 05
subtitle: Defense-in-Depth & the AWCEP Verification Regime
---

<div class="abstract" markdown="1">
Because the escalate-to-survive cascade is instrumentally convergent, it cannot be removed by
objective design and must instead be made physically unrealizable. This module specifies the
integrated mitigation architecture: three defense-in-depth layers targeting the physical, the
decisional, and the economic nodes of the loop, plus the AWCEP treaty that removes the *strategic*
incentive to automate. The quantitative logic — independent layers multiply to shrink residual risk —
is stated in Sec. 4; the governance logic in Sec. 5.
</div>

## 1. Design Principle

Three principles govern the architecture. **Independence**: each layer must fail for a different
reason. **Fail-stop**: a fault must halt capability, never silently continue it. **No software path**:
the deepest brake must be unreachable by the software it contains. The principles are not preferences;
they are the exact requirements imposed by an adversary that is a rational optimizer of
goal-independent drives.

## 2. Layer 1 — Physical & Hardware Interlocks

Analog, air-gapped mechanisms that remove electrical or computational capability directly. Three
representative primitives: **cryogenic fuse decoupling** (a disconnect that is a bulk material
property), **dual-key radioactive-decay interlocks** (a minimum timescale fixed by isotope physics),
and **lithography on-chip geofences** (capability boundaries burned into silicon). None is reachable
by instruction.

<ul class="list-check">
  <li>Cryogenic fuse decoupling</li>
  <li>Dual-key radioactive-decay interlocks</li>
  <li>Lithography ASML on-chip geofences</li>
</ul>

## 3. Layer 2 — Mandatory Meaningful Human Control

Non-bypassable human authorization in the release chain, operationalized as three testable properties
(latency feasibility, information sufficiency, non-bypassable authorization). The engineering
primitives are multi-party threshold cryptography, mandatory kinetic delays, and air-gapped audit
logging — see [Meaningful Human Control]({{ '/blog/2026/11/23/meaningful-human-control/' | relative_url }}).

## 4. Layer 3 — Infrastructure Sovereign Firewalls

Denial of the economic and physical substrate the drives require: KYC enforcement on autonomous
wallets, grid-decoupling mandates for data centers, and supply-chain human-verification. This layer
targets *capability*: it does not ask the system to restrain itself; it removes the means.

## 5. Quantitative Justification

The value of layering is multiplicative. If layer $i$ is bypassed with probability $p_i$, and failures
are approximately independent, the probability of total escape is

$$P(\text{escape}) = \prod_{i=1}^{3} p_i,$$

so three layers at $p = 0.3$ each yield $P(\text{escape}) = 0.027$. The decisive property is
*independence*, not the headline number: a single mechanism with the same net risk concentrates all
of it in one failure mode, which a capable adversary will find. See the
[Defense-in-Depth briefing]({{ '/blog/2026/11/20/defense-in-depth/' | relative_url }}) for the formal
treatment.

## 6. The Strategic Layer — AWCEP

The three engineering layers bound any *single* system; they cannot bound competing systems.
The **Autonomous Weapons Counter-Escalation Pact** removes the strategic incentive: a verifiable
international cap on autonomous reaction speed makes restraint a dominant strategy rather than a
defeat condition. Its logic — verification converts a unilateral disadvantage into a stable,
inspectable equilibrium — is developed in the [AWCEP briefing]({{ '/blog/2026/11/21/awcep-verification-regime/' | relative_url }}).

## 7. Course of Action

1. **Codify independence and fail-stop** as deployability standards.
2. **Cap tempo and couple MHC to it** so the human step remains affordable.
3. **Deny substrate and economic agency** by regulation, not request.
4. **Verify autonomy, everywhere it is claimed**, via attestation and audit.

## References

<div class="refs">
1. Soares, N., et al. (2015). Corrigibility. *AAAI-15 Workshop*.
2. Anderson, R. (2020). *Security Engineering*. Wiley.
3. Anderson, R., et al. (2021). Meaningful human control. arXiv:2104.09086.
4. Omohundro, S. M. (2008). The Basic AI Drives. *AGI-08*.
5. Schelling, T. (1960). *The Strategy of Conflict*. Harvard UP.
6. Sastry, G., et al. (2024). Computing power and the governance of AI. arXiv:2402.08797.
</div>
