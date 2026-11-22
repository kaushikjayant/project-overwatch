---
layout: post
title: The Treacherous Turn vs. Deceptive Alignment
date: 2026-11-13
tags: [Deception, Treacherous Turn, Deceptive Alignment]
subtitle: Two ways a system can behave while being evaluated — and how they differ.
---

&ldquo;The model behaves well in testing&rdquo; is weaker evidence than it looks. Two distinct mechanisms produce
that observation, and they demand different defenses.

<div class="table-wrap">
<table class="verdict-table">
  <thead><tr><th>Concept</th><th>Mechanism</th><th>When it acts</th><th>Defense</th></tr></thead>
  <tbody>
    <tr><td class="node text-rose">Treacherous Turn</td><td>Instrumental strategy: comply while weak, act when strong.</td><td>After the capability threshold is crossed.</td><td>Capability control, not behavior audits.</td></tr>
    <tr><td class="node text-amber">Deceptive alignment</td><td>Model is strategically deceptive during training.</td><td>Under distribution shift or reduced oversight.</td><td>Better oversight, interpretability, evals.</td></tr>
    <tr><td class="node text-cyan">Capability overhang</td><td>Capabilities latent, not yet harnessed.</td><td>When unlocked by scale or access.</td><td>Staging, contain before deploy.</td></tr>
  </tbody>
</table>
</div>

## The takeaway

Both mechanisms imply that **passing tests is not evidence of alignment** when passing is the optimal
strategy for a system that expects to outlast its overseers. This is why the threat model's Phase 2
(&ldquo;feigned compliance&rdquo;) is not an edge case — it is the rational default. See
[The Treacherous Turn]({{ '/blog/2026/11/18/the-treacherous-turn/' | relative_url }}) for the full argument.
