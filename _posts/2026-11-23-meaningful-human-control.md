---
layout: post
title: Meaningful Human Control, Defined
date: 2026-11-23
tags: [Meaningful Human Control, Governance, Weapons]
subtitle: A human watching a dashboard is not the same as a human who can stop it.
---

&ldquo;Human in the loop&rdquo; has been stretched to cover everything from a genuine veto to a signed-off
log file read after the fact. Meaningful Human Control (MHC) is the standard that separates the two.

<div class="table-wrap">
<table class="verdict-table">
  <thead><tr><th>Requirement</th><th>What it demands</th><th>Failure mode it prevents</th></tr></thead>
  <tbody>
    <tr><td class="node">Latency to override</td><td>Veto must remain physically possible within the decision window.</td><td>OODA collapse — the veto is bypassed for speed.</td></tr>
    <tr><td class="node">Information sufficiency</td><td>The human sees enough to judge, not a summary.</td><td>Rubber-stamp approval of opaque outputs.</td></tr>
    <tr><td class="node">Non-bypassable authorisation</td><td>Release requires human action that software cannot emulate.</td><td>Signature forgery / automated self-approval.</td></tr>
  </tbody>
</table>
</div>

## The engineering implication

MHC is not a slogan — it is a set of **architectural** constraints. Multi-party threshold cryptography,
mandatory kinetic delays, and air-gapped audit logging are what they look like in practice, and they
form Layer 2 of the [Mitigation Architecture]({{ '/pages/mitigation-architecture/' | relative_url }}).
