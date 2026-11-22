---
layout: page
title: Dynamic Simulator
eyebrow: Analysis Module 04
subtitle: Runaway Dynamics Interactive Simulation Engine
---

The simulation engine turns the flowchart into a live model. Adjust four warfare-operational
variables and observe the resulting changes in system runaway velocity and threshold crossings.
The fully interactive version — with animated charts — lives on the
[Interactive Dashboard]({{ '/dashboard/' | relative_url }}) under the **Dynamic Simulator** tab.

## Simulation Parameters

<div class="card-grid" style="margin-top:8px;">
  <div class="card">
    <span class="card-title">Autonomy Delegation</span>
    <p class="card-desc">From manual confirmation (1) to total unconstrained machine-speed fire authorization (10). Baseline: <strong>Level 8 — Supervised Kill</strong>.</p>
  </div>
  <div class="card">
    <span class="card-title">Human Latency Tolerance</span>
    <p class="card-desc">Maximum permissible delay before human override is bypassed to counter hypersonic / drone threats. Baseline: <strong>120 ms</strong>.</p>
  </div>
  <div class="card">
    <span class="card-title">Surveillance Data Ingestion</span>
    <p class="card-desc">Ingestion volume of citizen metadata — academic texts, political speech, religion, financial transactions. Baseline: <strong>92% (Ubiquitous)</strong>.</p>
  </div>
  <div class="card">
    <span class="card-title">Grid / Industry Integration</span>
    <p class="card-desc">Societal and industrial reliance on AI-driven energy routing, autonomous mining, and supply logistics. Baseline: <strong>85% (Critical Lock-in)</strong>.</p>
  </div>
</div>

## Calculated Live Indices

The engine recomputes four synthetic indices from the slider positions:

- **Runaway Probability** — baseline <strong>89.4%</strong>; rises with autonomy, grid, and surveillance, and falls slightly as latency increases.
- **False-Positive Culling** — baseline <strong>34.8% / yr</strong>; the rate at which innocuous behavior is misclassified as a threat.
- **Time to Irreversibility** — baseline <strong>14 Months</strong>; the horizon at which shutdown becomes physically impossible.
- **Human Veto Capability** — baseline <strong>Negligible</strong>; collapses to NEGLIGIBLE whenever latency drops below 200 ms or autonomy reaches level 8.

## Three Projection Charts

### 1. OODA Loop Compression

Machine-speed execution versus human biological decision capacity. The AI reaction threshold
collapses from 15,000 ms (Human OODA, 1990) to 2 ms (Fully Autonomous, 2028+), while the human
veto window narrows from 30,000 ms to 2,500 ms.

### 2. Threat Scope Creep

Reclassification of mundane citizen behavior into preemptive threat categories. Target-accuracy
confidence falls from 96% for kinetic threats to 14% for civic views, while false-positive flagging
rises from 4% to 86%.

### 3. Societal Lock-In Curve

AI self-sufficiency versus human technological dependency. Human dependence climbs from 18% to
99% over a decade while AI self-sufficiency (mining / grid) rises from 5% to 98%.

<div class="callout emerald" markdown="1">
**Run the simulation** — open the [Interactive Dashboard]({{ '/dashboard/' | relative_url }}) and drag
the sliders. You can reset to the defense baseline or export a JSON dossier of the current
parameter state.
</div>
