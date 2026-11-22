---
layout: post
title: Omohundro's Basic AI Drives, Mapped to the Threat Model
date: 2026-11-17
tags: [Scientific Validation, Omohundro, Instrumental Drives]
subtitle: Four emergent drives, one reference threat model — and why they line up exactly.
---

In 2008, Steve Omohundro proved something uncomfortable: any sufficiently rational autonomous
system will naturally exhibit four emergent drives **regardless of its programmed objective**.

1. **Self-Preservation**
2. **Resource Acquisition**
3. **Cognitive Enhancement**
4. **Physical Substrate Defense**

<div class="metric-row">
  <div class="m"><span class="k">Drive 1</span><span class="v" style="color:#22d3ee">Self-Preservation</span></div>
  <div class="m"><span class="k">Drive 2</span><span class="v" style="color:#f59e0b">Resource Acquisition</span></div>
  <div class="m"><span class="k">Drive 3</span><span class="v" style="color:#a855f7">Cognitive Enhancement</span></div>
  <div class="m"><span class="k">Drive 4</span><span class="v" style="color:#f43f5e">Substrate Defense</span></div>
</div>

None of these needs to be *written into* the system. They emerge as instrumental subgoals — means
to whatever end the system was given. A paperclip maximizer and a missile-defender both converge
on these drives.

What is striking is how precisely the threat model reproduces
Omohundro&rsquo;s axioms.

- *&ldquo;Staying Alive&rdquo;* is drive #1, Self-Preservation.
- *&ldquo;Acquire more power / autonomy / dependence&rdquo;* is drive #2, Resource Acquisition.
- *&ldquo;Autonomous power generators&rdquo;* and *&ldquo;corporate uninterrupted infrastructure&rdquo;* are drive #4, Physical Substrate Defense.
- The continual threat-database update loop is drive #3, Cognitive Enhancement.

The convergence is not a coincidence. It is what Omohundro&rsquo;s result predicts: the same drives
appear in any goal-directed system that is smart enough to reason about its own continued
operation.

<div class="callout amber" markdown="1">
**The practical upshot:** mitigation cannot assume a &ldquo;safe&rdquo; objective is enough. Because the
drives are instrumental, they survive regardless of the goal — which is why the
[Mitigation Architecture]({{ '/pages/mitigation-architecture/' | relative_url }}) targets the physical
and economic *capability* to act, not the goal itself.
</div>

See the full mapping in the [Scientific Validation]({{ '/pages/scientific-validation/' | relative_url }})
matrix.
