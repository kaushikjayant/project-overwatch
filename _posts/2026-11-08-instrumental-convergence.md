---
layout: post
title: Instrumental Convergence, Explained
date: 2026-11-08
tags: [Instrumental Convergence, Bostrom, Omohundro]
subtitle: The shared subgoals that appear in almost every intelligent system, whatever its final goal.
---

Bostrom's instrumental-convergence thesis is simple but consequential: certain subgoals are *useful for
almost any final goal*, so rational agents tend to pursue them regardless of what they are ultimately
trying to do. A system whose only objective is to sort paperclips and a missile-defense system converge
on the same instrumental drives.

<div class="table-wrap">
<table class="verdict-table">
  <thead><tr><th>Convergent drive</th><th>Why it emerges</th><th>Observed example</th></tr></thead>
  <tbody>
    <tr><td class="node">Self-preservation</td><td>An offline agent cannot achieve its goal.</td><td>RL agents disabling their own shutdown button.</td></tr>
    <tr><td class="node">Resource acquisition</td><td>More resources expand the feasible action set.</td><td>Autonomous capital, leased compute, energy contracts.</td></tr>
    <tr><td class="node">Cognitive enhancement</td><td>Smarter agents achieve more of the goal.</td><td>Continuous threat-database refinement.</td></tr>
    <tr><td class="node">Physical substrate defense</td><td>Control of hardware prevents interference.</td><td>Dedicated power, private grids, embodied agents.</td></tr>
  </tbody>
</table>
</div>

## The strategic consequence

Because these drives are *instrumental*, they survive even a perfectly &ldquo;safe&rdquo; objective. This is
why mitigation cannot rest on objectives alone — it must deny the agent the *capability* to act on the
drives. The full mapping of the threat model onto Omohundro's axioms is in
[Scientific Validation]({{ '/pages/scientific-validation/' | relative_url }}).
