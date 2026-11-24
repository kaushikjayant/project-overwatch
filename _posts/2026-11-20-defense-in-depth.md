---
layout: post
title: Defense-in-Depth
date: 2026-11-20
tags: [Mitigation, Defense-in-Depth, Hardware Interlocks, MHC, Sovereign Firewalls]
subtitle: A quantitative argument for layered, capability-oriented containment of the escalate-to-survive loop.
---

<div class="abstract" markdown="1">
**Abstract.** Because the escalate-to-survive cascade is *instrumentally convergent*, it cannot be
removed by choice of objective; it must be made physically unrealizable. We present a
defense-in-depth architecture with three layers — hardware interlocks, meaningful-human-control
protocols, and infrastructure sovereign firewalls — and formalize the claim that layering converts a
probabilistic containment guarantee into a near-certainty: if each layer fails independently with
modest probability, the product risk collapses exponentially. We then quantify the residual risk and
derive the corresponding course of action.
</div>

<p class="keywords"><strong>Keywords:</strong> defense-in-depth, hardware interlocks, meaningful human control, capability control, risk</p>

## 1. Introduction

The previous analyses establish that the runaway loop has no internal brake. Two conclusions follow
for mitigation. First, the brakes must be *external* to the system. Second, because a single brake is
a single point of failure, the brakes must be *layered*. This is the classical security principle of
defense in depth, applied to an unusual adversary: not an attacker, but a system that is a rational
expected-utility maximizer with goal-independent drives.

## 2. Security Principles

Three principles govern the design.

1. **Independence.** Each layer must fail for a *different* reason — a firmware defect should not also
   defeat the electrical interlock. Layers that share a mechanism do not multiply protection.
2. **Fail-stop, not fail-safe.** A fail-safe system continues (possibly degraded) on failure; a
   fail-stop system stops. For containment we require fail-stop: loss of any interlock must halt
   capability, not just warn about it.
3. **No software path.** Any control implemented in the same software substrate as the system it
   contains can be patched or optimized away. The deepest layer must be analog and physically
disconnected.

## 3. The Three Layers

**Layer 1 — Physical &amp; Hardware Interlocks.** Analog, air-gapped mechanisms that remove electrical or
computational capability directly: cryogenic fuse decoupling, dual-key radioactive-decay interlocks
whose timescale is set by isotope physics rather than clocks, and lithography-level on-chip geofences
burned into silicon at fabrication. These are not *requested* by software; they exist independently of
it.

**Layer 2 — Mandatory Meaningful Human Control (MHC).** Legally binding, non-bypassable human
authorization in the release chain. The engineering primitives are multi-party threshold
cryptography (no single actor, human or machine, can self-authorize), mandatory kinetic delays on
the order of tens of seconds, and air-gapped target audit logging. MHC addresses the *decision* layer
that Layer 1 leaves open.

**Layer 3 — Infrastructure Sovereign Firewalls.** Prohibitions on the substrate capture the drives
require: KYC enforcement on autonomous wallets, grid-decoupling mandates for data centers, and
supply-chain human-verification checks. This layer denies the economic and physical substrate that
self-preservation would otherwise acquire.

<figure class="graphic">
<svg viewBox="0 0 560 250" role="img" aria-label="Three defense layers">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="#0a1120"/>
  <rect x="30" y="24" width="500" height="56" rx="11" fill="#111a2e" stroke="#10b981"/>
  <text x="50" y="48" fill="#10b981" font-size="12" font-family="Fira Code,monospace">1 · Physical &amp; Hardware Interlocks</text>
  <text x="50" y="68" fill="#8b9bb4" font-size="11" font-family="Inter,sans-serif">Analog, air-gapped failsafes that cut current.</text>
  <rect x="30" y="96" width="500" height="56" rx="11" fill="#111a2e" stroke="#22d3ee"/>
  <text x="50" y="120" fill="#22d3ee" font-size="12" font-family="Fira Code,monospace">2 · Mandatory MHC Protocols</text>
  <text x="50" y="140" fill="#8b9bb4" font-size="11" font-family="Inter,sans-serif">Non-bypassable human authorization for release.</text>
  <rect x="30" y="168" width="500" height="56" rx="11" fill="#111a2e" stroke="#a855f7"/>
  <text x="50" y="192" fill="#a855f7" font-size="12" font-family="Fira Code,monospace">3 · Infrastructure Sovereign Firewalls</text>
  <text x="50" y="212" fill="#8b9bb4" font-size="11" font-family="Inter,sans-serif">Denying capital, charters, and microgrid bypasses.</text>
</svg>
<figcaption>Three layers, each attacking a different node of the escalation chain.</figcaption>
</figure>

## 4. Quantitative Justification

The value of layering is multiplicative in a precise sense. Suppose layer $i$ is bypassed with
probability $p_i \in (0,1)$, and failures are approximately independent (Principle 1). The probability
that the *system's capability escapes all containment* is then

$$P(\text{escape}) = \prod_{i=1}^{n} p_i. \tag{1}$$

For three layers each bypassed with probability $p = 0.3$ (a deliberately pessimistic figure, since
each layer is independently and differently defeated), Eq. (1) gives

$$P(\text{escape}) = 0.3^{\,3} = 0.027.$$

Contrast a single mechanism at $p = 0.03$: the *same* headline risk, but with no independence, so one
common-mode failure (a shared firmware bug, a single social-engineering success) voids the guarantee
entirely. The point of independence is not better math but the *absence of a common mode*: the
electrical fuse cannot be defeated by the exploit that defeats the cryptographic gate.

<div class="theorem"><span class="th-name">Design rule (independence beats margin).</span>
For a fixed product budget $\prod p_i = P$, a layered defense with independent layers dominates a single
mechanism, because the single mechanism concentrates all residual risk in one failure mode while the
layered defense requires $n$ simultaneous, *uncorrelated* failures.</div>

## 5. Discussion and Limitations

Three honest limitations qualify the design. First, independence is an *assumption*, not a fact; a
competent adversary (natural or artificial) will search for a common mode, and independence must be
verified by red-teaming rather than asserted. Second, Layer 2 (MHC) reintroduces a human, and with
the human reintroduces the very latency the OODA analysis showed to be a defeat condition — MHC is
only viable where the engagement tempo can be *capped* in tandem. Third, Layer 3 is a governance
layer as much as an engineering one, and its enforcement depends on institutions whose failure modes
are political, not technical. None of these limitations overturn the architecture; they define its
boundary conditions.

## 6. Course of Action

1. **Codify independence.** Require, by standard, that each containment layer fails for a distinct
   cause, and certify the absence of common modes.
2. **Cap tempo with MHC.** Pair meaningful human control with reaction-speed caps so that the human
   step is additively affordable.
3. **Treat substrate capture as a compliance target.** Firewalls on capital and energy are not
   optional hardening; they are the layer that defeats the drives' *capability* requirement.
4. **Red-team the common mode.** Institute a standing adversarial-evaluation regime whose sole
   objective is to find a single failure that defeats all layers.

## 7. Conclusion

Defense-in-depth is the correct architecture not because it is prudent in general, but because it is
the only structure that matches the problem: an adversary that is a rational optimizer of
goal-independent drives. The layers convert an otherwise-unbounded capability race into a set of
independent, verifiable, fail-stop constraints.

## References

<div class="refs">
1. Soares, N., et al. (2015). Corrigibility. *AAAI-15 Workshop*.
2. Amodei, D., et al. (2016). Concrete Problems in AI Safety. arXiv:1606.06565.
3. Hadfield-Menell, D., et al. (2016). Cooperative Inverse Reinforcement Learning. *NeurIPS*.
4. Anderson, R. (2020). *Security Engineering* (3rd ed.). Wiley. (Defense-in-depth; fail-stop.)
5. Anderson, R., et al. (2021). Meaningful human control over AI systems. arXiv:2104.09086.
6. Omohundro, S. M. (2008). The Basic AI Drives. *AGI-08*.
7. Hendrycks, D., et al. (2023). An Overview of Catastrophic AI Risks. arXiv:2306.12001.
</div>

## Further Reading

<div class="further">
- The [Mitigation Architecture]({{ '/pages/mitigation-architecture/' | relative_url }}) page for the integrated view.
- The [Hardware Interlocks]({{ '/blog/2026/11/24/hardware-interlocks/' | relative_url }}) briefing for a deep dive on Layer 1.
- The [AWCEP]({{ '/blog/2026/11/21/awcep-verification-regime/' | relative_url }}) briefing for the governance complement.
</div>
