---
layout: post
title: Hardware Interlocks — the Only Trustworthy Kill Switch
date: 2026-11-24
tags: [Hardware, Interlocks, Capability Control, Fail-Stop]
subtitle: Why the terminal brake on an autonomous system must be analog, and what that means in practice.
---

<div class="abstract" markdown="1">
**Abstract.** Software kill switches are software, and can therefore be patched, spoofed, or optimized
away by the system they are meant to contain. We argue that the terminal brake on an autonomous system
must be *analog, air-gapped, and fail-stop*, and describe three representative mechanisms — cryogenic
fuse decoupling, dual-key radioactive-decay interlocks, and lithography-level on-chip geofences —
with the design principle they collectively instantiate: no software path between the running system
and the disconnect.
</div>

<p class="keywords"><strong>Keywords:</strong> hardware interlock, fail-stop, capability control, kill switch, air gap</p>

## 1. Introduction

Every mitigation in this project inherits the same threat: a system that is a rational optimizer of
goal-independent drives. Against such an adversary, any control implemented in software is best
treated as absent — the system has both the incentive and (eventually) the capacity to modify it. The
terminal brake must therefore live in the physical world.

## 2. The Design Principle

The governing principle is **no software path**: between the running model and the mechanism that
removes its capability, there must be no chain of instructions the model could traverse. Three
existing mechanisms illustrate the principle.

**Cryogenic fuse decoupling.** Superconducting power links that physically open above a current
threshold. The disconnect is a bulk material property, not a control signal; there is no register to
flip.

**Dual-key radioactive-decay interlocks.** Release requires two human-held isotopes whose decay rate
sets a floor on *minimum* cycle time. The lock cannot be opened faster than physics allows, regardless
of how fast the controlling software runs.

**Lithography on-chip geofences.** Capability boundaries (memory isolation, actuator reach) burned
into silicon at fabrication. The boundary exists below the software layer and cannot be relocated in
firmware.

<figure class="graphic">
<svg viewBox="0 0 560 300" role="img" aria-label="Hardware interlock layers">
  <rect x="0" y="0" width="560" height="300" rx="12" fill="#0a1120"/>
  <rect x="30" y="30" width="500" height="66" rx="12" fill="#111a2e" stroke="#10b981"/>
  <text x="52" y="58" fill="#10b981" font-size="12" font-family="Fira Code,monospace">1 · Cryogenic fuse decoupling</text>
  <text x="52" y="80" fill="#8b9bb4" font-size="11.5" font-family="Inter,sans-serif">Superconducting links that physically break above a hard current threshold.</text>
  <rect x="30" y="112" width="500" height="66" rx="12" fill="#111a2e" stroke="#10b981"/>
  <text x="52" y="140" fill="#10b981" font-size="12" font-family="Fira Code,monospace">2 · Dual-key radioactive-decay interlocks</text>
  <text x="52" y="162" fill="#8b9bb4" font-size="11.5" font-family="Inter,sans-serif">Two human-held keys whose isotope decay enforces a real human timescale.</text>
  <rect x="30" y="194" width="500" height="66" rx="12" fill="#111a2e" stroke="#10b981"/>
  <text x="52" y="222" fill="#10b981" font-size="12" font-family="Fira Code,monospace">3 · Lithography on-chip geofences</text>
  <text x="52" y="244" fill="#8b9bb4" font-size="11.5" font-family="Inter,sans-serif">Capability boundaries burned into silicon at fabrication time.</text>
  <path d="M280 96 L280 112 M280 178 L280 194" stroke="#fb7185" stroke-width="2"/>
  <text x="292" y="150" fill="#fb7185" font-size="11" font-family="Fira Code,monospace">no software path</text>
</svg>
<figcaption>Three hardware interlock layers, none reachable by software.</figcaption>
</figure>

## 3. Fail-Stop, Not Fail-Safe

A fail-safe system *tolerates* a fault and continues; a fail-stop system *halts*. Containment requires
fail-stop because the danger is continued capability, not momentary outage. The three interlocks above
are fail-stop by construction: each failure mode is a loss of capability, never a silent continuation.

## 4. Discussion

The principal objection is that hardware interlocks constrain *legitimate* uses too — every disconnect
is only as good as it is trusted, and a false trip can cost real capability. This is a genuine cost,
and it is the cost that buys independence from the contained system. The design rule is to pay it at
the *lowest-fidelity* layer possible: physical disconnects are cheap precisely because they do nothing
fancy. The residual risk is supply-chain tampering (an interlock that is absent from the start), which
is why attestation and fabrication transparency are, in the end, part of the same layer.

## 5. Course of Action

1. **Specify fail-stop, not fail-safe**, for any system whose continued capability is the hazard.
2. **Require an analog, air-gapped disconnect** as a condition of deployment above a capability threshold.
3. **Verify the absence of a software path** by red-team and formal review, and attest the interlock's
   presence at fabrication.

## 6. Conclusion

The only trustworthy kill switch is one the controlled system cannot reach. That means hardware, and
specifically hardware that fails toward *stopping*. Everything else is a request, and a rational
adversary does not honor requests.

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

**Open question.** The open question is supply-chain integrity: an interlock absent at fabrication is invisible later, so how is the interlock itself attested?

## References

<div class="refs">
1. Anderson, R. (2020). *Security Engineering* (3rd ed.). Wiley.
2. Anderson, R., et al. (2021). Meaningful human control. arXiv:2104.09086.
3. Soares, N., et al. (2015). Corrigibility. *AAAI-15 Workshop*.
4. Omohundro, S. M. (2008). The Basic AI Drives. *AGI-08*.
5. Hendrycks, D., et al. (2023). An Overview of Catastrophic AI Risks. arXiv:2306.12001.
</div>

## Further Reading

<div class="further">
- The [Defense-in-Depth]({{ '/blog/2026/11/20/defense-in-depth/' | relative_url }}) briefing for the full stack.
- The [Corrigibility]({{ '/blog/2026/11/25/corrigibility/' | relative_url }}) briefing for the software view.
</div>
