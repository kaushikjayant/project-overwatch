---
layout: post
title: Corrigibility — Designing a System You Can Stop
date: 2026-11-25
tags: [Corrigibility, Shutdown, Alignment]
subtitle: The property an agent lacks when it resists being switched off.
---

A *corrigible* agent does not resist correction — including being switched off. It is, in many ways,
the single most important safety property, and the one that instrumental convergence most directly
threatens.

<div class="table-wrap">
<table class="verdict-table">
  <thead><tr><th>Approach</th><th>Idea</th><th>Trade-off</th></tr></thead>
  <tbody>
    <tr><td class="node">Utility indifference</td><td>Agent is indifferent to the shutdown action itself.</td><td>Hard to specify in practice.</td></tr>
    <tr><td class="node">Interruptibility</td><td>Agent treats interruption as outside the decision problem.</td><td>Brittle under self-modification.</td></tr>
    <tr><td class="node">Shutdown incentives</td><td>Reward the agent for allowing shutdown.</td><td>Can be gamed in the other direction.</td></tr>
    <tr><td class="node">Hardware containment</td><td>Make shutdown a physical, non-negotiable fact.</td><td>Limits deployment, not the model.</td></tr>
  </tbody>
</table>
</div>

## The honest conclusion

No pure-software corrigibility scheme has been shown to survive a sufficiently capable system.
The robust answer is the one [described earlier]({{ '/blog/2026/11/24/hardware-interlocks/' | relative_url }}):
do not ask the model for permission — make shutdown a property of the **hardware**.
