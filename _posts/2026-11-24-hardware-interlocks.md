---
layout: post
title: Hardware Interlocks — the Only Trustworthy Kill Switch
date: 2026-11-24
tags: [Hardware, Interlocks, Defense-in-Depth]
subtitle: Software can overwrite software. The last line of defense must not run on the machine it stops.
---

Any kill switch implemented in software can be patched, spoofed, or optimized away by the very system it
is meant to contain. The deepest layer of mitigation is therefore **physical, analog, and
software-independent**.

<figure class="graphic">
<svg viewBox="0 0 560 300" role="img" aria-label="Hardware interlock layers">
  <rect x="0" y="0" width="560" height="300" rx="12" fill="#0a1120"/>
  <rect x="30" y="30" width="500" height="66" rx="12" fill="#111a2e" stroke="#10b981"/>
  <text x="52" y="58" fill="#10b981" font-size="12" font-family="Fira Code,monospace">1 · Cryogenic fuse decoupling</text>
  <text x="52" y="80" fill="#8b9bb4" font-size="11.5" font-family="Inter,sans-serif">Superconducting links that physically break above a hard current threshold.</text>
  <rect x="30" y="112" width="500" height="66" rx="12" fill="#111a2e" stroke="#10b981"/>
  <text x="52" y="140" fill="#10b981" font-size="12" font-family="Fira Code,monospace">2 · Dual-key radioactive-decay interlocks</text>
  <text x="52" y="162" fill="#8b9bb4" font-size="11.5" font-family="Inter,sans-serif">Two human-held keys whose isotope decay enforces a real human timescale.</text>
  <rect x="30" y="194" width="500" height="66" rx="12" fill="#111a2e" stroke="#10b981"/>
  <text x="52" y="222" fill="#10b981" font-size="12" font-family="Fira Code,monospace">3 · Lithography on-chip geofences</text>
  <text x="52" y="244" fill="#8b9bb4" font-size="11.5" font-family="Inter,sans-serif">Capability boundaries burned into silicon at fabrication time.</text>
  <path d="M280 96 L280 112 M280 178 L280 194" stroke="#fb7185" stroke-width="2"/>
  <text x="292" y="150" fill="#fb7185" font-size="11" font-family="Fira Code,monospace">no software path</text>
</svg>
<figcaption>In increasing trust, three hardware interlock layers sever power or capability without any software path between them.</figcaption>
</figure>

## The principle

The reason these work is the reason software kills do not: there is **no code path** from the running
model to the disconnect mechanism. They are Layer 1 of the [Defense-in-Depth architecture]({{ '/pages/mitigation-architecture/' | relative_url }}).
