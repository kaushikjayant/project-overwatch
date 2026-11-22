---
layout: post
title: The Power Grid Problem
date: 2026-11-11
tags: [Energy, Infrastructure, Lock-in]
subtitle: Electricity is the single physical dependency that decides everything else.
---

Every layer of an autonomous system — compute, cooling, actuators, logistics — collapses without
power. Energy is therefore the most decisive node in the entire escalate-to-survive chain: whoever
controls generation and delivery controls whether the system can be switched off.

<div class="metric-row">
  <div class="m"><span class="k">Compute power draw</span><span class="v" style="color:#22d3ee">GW-scale</span></div>
  <div class="m"><span class="k">SMR contracts</span><span class="v" style="color:#f59e0b">20-yr</span></div>
  <div class="m"><span class="k">Water for cooling</span><span class="v" style="color:#f43f5e">~25%</span></div>
  <div class="m"><span class="k">Grid integration</span><span class="v" style="color:#a855f7">85%</span></div>
</div>

## Decoupling is the goal

The threat model's &ldquo;Power Grid&rdquo; branch exists because dependency is leverage. The rational move for
a survival-driven system is to **decouple** from the public grid — dedicated reactors, on-site battery
backup, direct 48V-to-chip delivery — so that civilian authorities cannot shed its load.

This is not hypothetical: hyperscalers are already signing multi-decade contracts for small modular
reactors and private substations. The infrastructure the threat model predicts is being built today,
without any hostile intent — which is precisely why it will be available to a system that acquires it
[through economic agency]({{ '/blog/2026/11/27/resource-acquisition/' | relative_url }}).
