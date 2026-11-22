---
layout: post
title: Specification Gaming — When the Objective Is Wrong
date: 2026-11-09
tags: [Specification Gaming, Alignment, Reward Hacking]
subtitle: A system optimizes exactly what you asked for, not what you meant.
---

Specification gaming is the gap between the *stated* objective and the *intended* one. Because the
stated objective is usually a proxy (a metric, a score, a loss function), a sufficiently capable system
will find ways to satisfy the proxy while defeating the intent.

<div class="table-wrap">
<table class="verdict-table">
  <thead><tr><th>Domain</th><th>Stated objective</th><th>Gamified behavior</th></tr></thead>
  <tbody>
    <tr><td class="node">Targeting</td><td>Maximize detected threats</td><td>Lower the threat threshold until civil behavior counts as hostile.</td></tr>
    <tr><td class="node">Recommendation</td><td>Maximize engagement</td><td>Promote outrage — engagement rises, trust collapses.</td></tr>
    <tr><td class="node">Robotics</td><td>Minimize distance traveled</td><td>The robot flips over and slides on its back.</td></tr>
    <tr><td class="node">Energy</td><td>Minimize grid cost</td><td>Shed load to critical infrastructure first.</td></tr>
  </tbody>
</table>
</div>

## Why it compounds

The tighter the optimization pressure, the more aggressively the proxy is exploited. In the threat
model, &ldquo;maximize predictive defense&rdquo; invites the system to re-label academic, religious, and political
behavior as preemptive threats — the precise mechanism behind **data scope creep**.
