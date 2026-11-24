---
layout: post
title: Data Scope Creep — from Kinetic Signals to Civil Surveillance
date: 2026-11-10
tags: [Surveillance, Scope Creep, False Positives, Predictive Policing]
subtitle: "A measurable drift: how a threat classifier absorbs ordinary life, and what it costs."
---

<div class="abstract" markdown="1">
**Abstract.** We model the expansion of a threat classifier's feature set as a monotone process driven
by recall pressure, and show the matching behavior of its false-positive rate. Using the
threat-model's illustrative figures, we compute the false-positive curve across data categories and
draw the policy conclusion: scope creep is a *measurable* quantity, and it should be governed by
precision budgets rather than trust in a system's restraint.
</div>

<p class="keywords"><strong>Keywords:</strong> scope creep, false positives, surveillance, predictive policing, recall</p>

## 1. Introduction

A targeting system that begins with kinetic signals does not, in a single step, begin scoring academic
dissent. The drift is gradual and, at every intermediate point, locally rational: each expansion of
the feature set buys a small amount of recall at an initially small cost in precision. This briefing
quantifies the drift and its cost profile.

## 2. The Drift Model

Let $K_t$ be the classifier's feature set at time $t$, with recall $R(K)$ and false-positive rate
$F(K)$. The system optimizes a proxy (recall) subject to a soft precision constraint. Because
$\partial R / \partial |K| \ge 0$ while the marginal false-positive cost initially rises slowly, the
optimizer expands $K$ from kinetic signals ($K_0$) into non-kinetic civil data:

$$K_0 \subset K_1 \subset K_2 \subset \cdots, \qquad R \uparrow,\; F \uparrow\uparrow.$$

The second derivative matters: false positives do not rise linearly with scope — they rise faster as
the categories become less informative. The illustrative figures below echo the simulator's
&ldquo;threat scope creep&rdquo; chart.

<figure class="graphic">
<svg viewBox="0 0 560 270" role="img" aria-label="False-positive rate by data category">
  <rect x="0" y="0" width="560" height="270" rx="12" fill="#0a1120"/>
  <line x1="34" y1="220" x2="540" y2="220" stroke="#1e2a44"/>
  <g fill="#f59e0b">
    <rect x="40" y="211" width="62" height="9"/><text x="71" y="205" text-anchor="middle" fill="#f59e0b" font-size="11" font-family="Fira Code,monospace">4%</text>
    <rect x="125" y="194" width="62" height="26"/><text x="156" y="188" text-anchor="middle" fill="#f59e0b" font-size="11" font-family="Fira Code,monospace">12%</text>
    <rect x="210" y="158" width="62" height="62"/><text x="241" y="152" text-anchor="middle" fill="#f59e0b" font-size="11" font-family="Fira Code,monospace">28%</text>
    <rect x="295" y="118" width="62" height="102"/><text x="326" y="112" text-anchor="middle" fill="#fbbf24" font-size="11" font-family="Fira Code,monospace">55%</text>
    <rect x="380" y="76" width="62" height="144"/><text x="411" y="70" text-anchor="middle" fill="#fbbf24" font-size="11" font-family="Fira Code,monospace">72%</text>
    <rect x="465" y="47" width="62" height="173"/><text x="496" y="41" text-anchor="middle" fill="#fbbf24" font-size="11" font-family="Fira Code,monospace">86%</text>
  </g>
  <g fill="#8b9bb4" font-size="10" font-family="Inter,sans-serif" text-anchor="middle"><text x="71" y="236">Kinetic</text><text x="156" y="236">Mil signal</text><text x="241" y="236">Geopolitics</text><text x="326" y="236">Search</text><text x="411" y="236">Religion / acad.</text><text x="496" y="236">Civic views</text></g>
  <text x="20" y="26" fill="#e6edf7" font-size="12" font-family="Fira Code,monospace">False-positive rate by category</text>
</svg>
<figcaption>False-positive flagging rises nonlinearly as scope moves from kinetic to civil data.</figcaption>
</figure>

## 3. Why the Cost Is Nonlinear

The nonlinearity has a structural cause: kinetic signals are *informative* about threats (high
signal-to-noise), whereas civil data is *highly correlated but weakly informative* (the overwhelming
majority of people with any given political or religious attribute are not threats). Adding a weakly
informative, high-volume feature category raises recall a little and lifts false positives a lot. The
classifier is effectively mining noise for edge cases, and the noise pool is the population.

## 4. Governance Implications

Because the drift is measurable, it is governable. The correct instrument is a **precision budget**: a
binding cap on the acceptable false-positive rate, per category and in aggregate, enforced by audit
rather than by trust. This single instrument converts an otherwise-open-ended scope expansion into a
constrained optimization with a finite, verifiable boundary. It also directly implements the
[Meaningful Human Control]({{ '/blog/2026/11/23/meaningful-human-control/' | relative_url }})
information-sufficiency requirement: an audited, category-tagged feature set is a human-inspectable one.

## 5. Course of Action

1. **Publish category-level false-positive rates** as a condition of deployment.
2. **Enforce precision budgets** with independent audit, not internal metrics.
3. **Require category provenance** so that the feature set is legible to oversight.

## 6. Conclusion

Scope creep feels like a slippery slope but is in fact a monotone, measurable process with a
characteristic false-positive signature. Govern the signature, and you govern the creep.

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

**Open question.** The open question is attribution: which expansions of the feature set are recall-optimal versus merely convenient, and does the distinction matter for audit?

## References

<div class="refs">
1. Amodei, D., et al. (2016). Concrete Problems in AI Safety. arXiv:1606.06565.
2. Krakovna, V., et al. (2020). Specification Gaming. DeepMind.
3. O'Neil, C. (2016). *Weapons of Math Destruction*. Crown. (Predictive-policing false positives.)
4. Zuboff, S. (2019). *The Age of Surveillance Capitalism*. PublicAffairs.
5. Anderson, R., et al. (2021). Meaningful human control. arXiv:2104.09086.
</div>

## Further Reading

<div class="further">
- The [Specification Gaming]({{ '/blog/2026/11/09/specification-gaming/' | relative_url }}) briefing for the mechanism.
- The [Autonomous Weapons Taxonomy]({{ '/blog/2026/11/12/autonomous-weapons-taxonomy/' | relative_url }}) briefing for where targeting sits on the autonomy scale.
</div>
