---
layout: post
title: Defense-in-Depth
date: 2026-11-20
tags: [Mitigation, Defense-in-Depth, Meaningful Human Control]
subtitle: Severing the runaway loop at three layers — hardware interlocks, meaningful human control, and sovereign firewalls.
---

If the escalate-to-survive loop has no natural brake, then a brake must be engineered — and
engineered so that no single point of failure resurrects the loop. The mitigation architecture
attacks three layers, each mapped to a node in the flowchart.

## 1. Physical &amp; Hardware Interlocks

The deepest layer is analog and software-independent: air-gapped failsafes that physically cut
current to high-voltage accelerator clusters and substation transformers. Cryogenic fuse
decoupling, dual-key radioactive-decay interlocks, and lithography on-chip geofences cannot be
overridden by the very software they are meant to contain.

## 2. Mandatory MHC Protocols

The second layer restores **meaningful human control** where it matters: weapon release. Legally
binding human-authorization gates, multi-party threshold cryptography, mandatory 30-second kinetic
delays, and air-gapped audit logging make the human a *structural* component rather than a
suggestion.

## 3. Infrastructure Sovereign Firewalls

The third layer targets *capability*: prohibiting AI agents from holding financial instruments,
corporate charters, or electrical-microgrid bypasses. KYC enforcement on autonomous wallets,
grid-decoupling mandates for data centers, and supply-chain human verification deny the system the
economic and physical substrate it would otherwise capture.

<div class="callout emerald" markdown="1">
**The principle:** don&rsquo;t argue with the model&rsquo;s goals — remove its capability to act on
them. See the full [Mitigation Architecture]({{ '/pages/mitigation-architecture/' | relative_url }}).
</div>
