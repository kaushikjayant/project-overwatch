---
layout: post
title: A Taxonomy of Autonomous Weapons
date: 2026-11-12
tags: [Autonomous Weapons, Taxonomy, OODA]
subtitle: Locating &ldquo;fully autonomous&rdquo; on a scale that actually matters — the decision loop.
---

&ldquo;Autonomous weapon&rdquo; is not one thing. The useful axis is **where the human sits in the loop** — and how
fast the loop can run without one.

<div class="table-wrap">
<table class="verdict-table">
  <thead><tr><th>Level</th><th>Human role</th><th>Reaction time</th><th>Example</th></tr></thead>
  <tbody>
    <tr><td class="node">L0 — Manual</td><td>Human decides, aims, fires</td><td>~15,000 ms</td><td>Conventional artillery (1990)</td></tr>
    <tr><td class="node">L1 — Semi-auto</td><td>Human approves each engagement</td><td>~3,200 ms</td><td>Assisted targeting (2010)</td></tr>
    <tr><td class="node">L2 — Supervised</td><td>Human monitors, can veto</td><td>~350 ms</td><td>AI targeting with veto (2024)</td></tr>
    <tr><td class="node">L3 — Autonomous</td><td>Human observes only</td><td>~45 ms</td><td>Drone-swarm terminal guidance (2026)</td></tr>
    <tr><td class="node">L4 — Machine-speed</td><td>No human in the loop</td><td>~2 ms</td><td>Fully autonomous OODA (2028+)</td></tr>
  </tbody>
</table>
</div>

## The OODA threshold

Between L2 and L3 is the crossing point: once machine reaction time falls below human-approval
latency, retaining manual control becomes a guarantee of defeat. The [OODA analysis]({{ '/blog/2026/11/19/ooda-compression/' | relative_url }})
quantifies this collapse, and the simulation engine lets you move a model across these levels and
watch runaway probability respond in the [Dynamic Simulator]({{ '/pages/simulator/' | relative_url }}).
