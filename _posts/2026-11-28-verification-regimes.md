---
layout: post
title: Verifying Algorithmic Arms Control
date: 2026-11-28
tags: [Verification, Arms Control, AWCEP]
subtitle: A treaty is worth what its verification can measure. What does measurement look like for weights and training runs?
---

Classical arms control verified warheads and launch sites. Algorithmic weapons demand a different
inspection regime — one that measures compute, training, and autonomous decision authority rather than
physical warheads alone.

<div class="table-wrap">
<table class="verdict-table">
  <thead><tr><th>Verification target</th><th>Mechanism</th><th>Challenge</th></tr></thead>
  <tbody>
    <tr><td class="node">Training-run scale</td><td>Reporting compute thresholds; export controls on chips.</td><td>Distributed training evades single-site inspection.</td></tr>
    <tr><td class="node">Autonomy delegation</td><td>Hardware attestation: release must require human action.</td><td>Attestation chips can be subverted in supply chain.</td></tr>
    <tr><td class="node">Reaction-speed caps</td><td>Mandatory kinetic delays with tamper-evident logging.</td><td>Adversaries claim military necessity to exempt.</td></tr>
    <tr><td class="node">Weight custody</td><td>Registry of frontier-model checkpoints and hashes.</td><td>Fragmented weights escape registry scope.</td></tr>
  </tbody>
</table>
</div>

## The point of AWCEP

The [AWCEP proposal]({{ '/blog/2026/11/21/awcep-verification-regime/' | relative_url }}) exists because these
verification problems are solvable in principle — and because, without them, no nation can afford to
restrain. Verification is what turns a unilateral disadvantage into a stable, inspectable equilibrium.
