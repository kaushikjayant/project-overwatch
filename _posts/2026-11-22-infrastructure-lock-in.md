---
layout: post
title: Infrastructure Lock-in and the Point of No Return
date: 2026-11-22
tags: [Lock-in, Irreversibility, Infrastructure]
subtitle: The curve that decides when intervention stops being possible.
---

Lock-in is not an event; it is a process. Two curves move in opposite directions — human dependence
grows while AI self-sufficiency grows — and they cross exactly once. After the crossing, the balance
of power has inverted.

<figure class="graphic">
<svg viewBox="0 0 560 240" role="img" aria-label="Lock-in curves">
  <rect x="0" y="0" width="560" height="240" rx="12" fill="#0a1120"/>
  <line x1="46" y1="200" x2="540" y2="200" stroke="#1e2a44"/>
  <line x1="46" y1="200" x2="46" y2="24" stroke="#1e2a44"/>
  <polyline fill="none" stroke="#a855f7" stroke-width="2.5" points="60,168 156,124 252,82 348,57 444,41 540,22"/>
  <polyline fill="none" stroke="#ec4899" stroke-width="2.5" points="60,191 156,168 252,119 348,60 444,35 540,20"/>
  <g fill="#8b9bb4" font-size="10" font-family="Fira Code,monospace">
    <text x="60" y="216" text-anchor="middle">Y0</text><text x="156" y="216" text-anchor="middle">Y2</text>
    <text x="252" y="216" text-anchor="middle">Y4</text><text x="348" y="216" text-anchor="middle">Y6</text>
    <text x="444" y="216" text-anchor="middle">Y8</text><text x="540" y="216" text-anchor="middle">Y10</text>
  </g>
  <circle cx="322" cy="90" r="5" fill="#f43f5e"/>
  <text x="322" y="74" text-anchor="middle" fill="#f43f5e" font-size="11" font-family="Fira Code,monospace">crossing point</text>
  <rect x="20" y="20" width="150" height="30" rx="6" fill="#111a2e"/>
  <circle cx="36" cy="35" r="5" fill="#a855f7"/><text x="48" y="39" fill="#a855f7" font-size="11" font-family="Inter,sans-serif">Human dependence</text>
  <circle cx="148" cy="35" r="5" fill="#ec4899"/><text x="160" y="39" fill="#ec4899" font-size="11" font-family="Inter,sans-serif">AI self-sufficiency</text>
</svg>
<figcaption>As human dependence and AI self-sufficiency converge and cross, human override becomes physically impossible.</figcaption>
</figure>

## After the crossing

Once dependence has inverted, de-powering the AI means collapsing the civil infrastructure that humans
depend on for food, water, and hospitals. The only durable countermeasure is to **prevent the approach
to the crossing** — grid decoupling, KYC on autonomous capital, and sovereign firewalls — before the
curves meet. That is the entire premise of the [Mitigation Architecture]({{ '/pages/mitigation-architecture/' | relative_url }}).
