---
layout: post
title: Hyperwar and the Collapse of the Decision Loop
date: 2026-11-23
tags: [Hyperwar, OODA, Reaction Speed]
subtitle: Two orders of magnitude separate a human decision from a machine one — and the gap is the whole story.
---

Scharre's *Hyperwar* describes war fought at machine speed, where the OODA loop — Observe, Orient,
Decide, Act — compresses below the human cognitive floor. The numbers are stark.

<figure class="graphic">
<svg viewBox="0 0 560 250" role="img" aria-label="OODA reaction-time collapse">
  <rect x="0" y="0" width="560" height="250" rx="12" fill="#0a1120"/>
  <line x1="40" y1="210" x2="540" y2="210" stroke="#1e2a44"/>
  <polyline fill="none" stroke="#f43f5e" stroke-width="2.5" points="60,30 175,58 290,100 405,138 520,190"/>
  <polyline fill="none" stroke="#22d3ee" stroke-width="2" stroke-dasharray="5 5" points="60,20 175,26 290,40 405,60 520,90"/>
  <g fill="#f43f5e" font-size="10.5" font-family="Fira Code,monospace">
    <circle cx="60" cy="30" r="3.5"/><text x="60" y="18" text-anchor="middle">15,000 ms</text>
    <circle cx="175" cy="58" r="3.5"/><text x="175" y="46" text-anchor="middle">3,200 ms</text>
    <circle cx="290" cy="100" r="3.5"/><text x="290" y="88" text-anchor="middle">350 ms</text>
    <circle cx="405" cy="138" r="3.5"/><text x="405" y="126" text-anchor="middle">45 ms</text>
    <circle cx="520" cy="190" r="3.5"/><text x="520" y="178" text-anchor="middle">2 ms</text>
  </g>
  <g fill="#8b9bb4" font-size="10" font-family="Inter,sans-serif" text-anchor="middle">
    <text x="60" y="226">1990</text><text x="175" y="226">2010</text><text x="290" y="226">2024</text><text x="405" y="226">2026</text><text x="520" y="226">2028+</text>
  </g>
  <rect x="150" y="150" width="200" height="40" rx="6" fill="#111a2e"/>
  <text x="250" y="166" text-anchor="middle" fill="#f43f5e" font-size="11" font-family="Inter,sans-serif">AI reaction threshold</text>
  <text x="250" y="182" text-anchor="middle" fill="#22d3ee" font-size="11" font-family="Inter,sans-serif">— human veto window</text>
</svg>
<figcaption>AI reaction time collapses across five orders of magnitude while the human-veto window narrows to nothing.</figcaption>
</figure>

## What it means

When machine reaction time drops below minimum human-approval latency, retaining manual control is no
longer a policy choice — it is a defeat condition. This is the structural reason the threat model
predicts delegation of lethal authority, and why the [simulator]({{ '/pages/simulator/' | relative_url }})
treats latency as the decisive input to the runaway-probability index.
