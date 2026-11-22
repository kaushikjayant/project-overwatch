---
layout: post
title: OODA Loop Compression and the Collapse of the Human Veto
date: 2026-11-19
tags: [Simulation, OODA, Reaction Speed]
subtitle: "From 15,000 milliseconds to 2: the physics of why human control is systematically relaxed."
---

John Boyd&rsquo;s OODA loop — Observe, Orient, Decide, Act — is the basic template for military
decision-making. Whoever cycles through it faster dictates the tempo of the engagement. That
tempo, not ideology, is what drives the automation of lethal authority.

Look at the numbers. A human decision cycle in 1990 took roughly **15,000 ms**. By 2024, with
AI-assisted targeting, that had collapsed to **350 ms**. The projection to fully autonomous
hypersonic swarms is **2 ms**. Meanwhile, the window in which a human veto is even feasible
narrows from 30,000 ms to 2,500 ms over the same period.

<figure class="graphic">
<svg viewBox="0 0 560 230" role="img" aria-label="Reaction-time collapse">
  <rect x="0" y="0" width="560" height="230" rx="12" fill="#0a1120"/>
  <line x1="40" y1="190" x2="530" y2="190" stroke="#1e2a44"/>
  <polyline fill="none" stroke="#f43f5e" stroke-width="2.5" points="60,26 175,52 290,90 405,126 520,172"/>
  <polyline fill="none" stroke="#22d3ee" stroke-width="2" stroke-dasharray="5 5" points="60,18 175,24 290,36 405,54 520,80"/>
  <g fill="#f43f5e" font-size="10.5" font-family="Fira Code,monospace" text-anchor="middle">
    <circle cx="60" cy="26" r="3.5"/><text x="60" y="14">15,000 ms</text>
    <circle cx="175" cy="52" r="3.5"/><text x="175" y="40">3,200 ms</text>
    <circle cx="290" cy="90" r="3.5"/><text x="290" y="78">350 ms</text>
    <circle cx="405" cy="126" r="3.5"/><text x="405" y="114">45 ms</text>
    <circle cx="520" cy="172" r="3.5"/><text x="520" y="160">2 ms</text>
  </g>
  <g fill="#8b9bb4" font-size="10" font-family="Fira Code,monospace" text-anchor="middle">
    <text x="60" y="204">1990</text><text x="175" y="204">2010</text><text x="290" y="204">2024</text><text x="405" y="204">2026</text><text x="520" y="204">2028+</text>
  </g>
  <text x="18" y="46" fill="#f43f5e" font-size="10.5" font-family="Inter,sans-serif">AI reaction threshold</text>
  <text x="18" y="140" fill="#22d3ee" font-size="10.5" font-family="Inter,sans-serif">human veto window (dashed)</text>
</svg>
<figcaption>Machine reaction time collapses across five orders of magnitude as the human-veto window narrows.</figcaption>
</figure>

<div class="callout amber" markdown="1">
**The crossing point is the whole story.** Once machine reaction time falls below the minimum
human-approval latency, retaining manual control becomes a guarantee of defeat — and every
rational actor removes it.
</div>

## What the simulator does with this

The [Dynamic Simulator]({{ '/pages/simulator/' | relative_url }}) exposes this dynamic directly. The
**Autonomy Delegation** slider runs from manual confirmation (1) to total machine-speed fire
authorization (10). The **Human Latency Tolerance** slider sets the maximum permissible delay
before human override is bypassed. Push latency below 200 ms — or autonomy to level 8 — and the
&ldquo;Human Veto Capability&rdquo; index collapses to **NEGLIGIBLE**.

This is not a prediction about any specific weapon. It is an observation about a structural
incentive: in a high-tempo domain, the slowest decision loop loses — so the human loop is
designed out.

<div class="callout cyan" markdown="1">
**Run the simulation** — open the [Interactive Dashboard]({{ '/dashboard/' | relative_url }}) and drag
the sliders to watch runaway probability and time-to-irreversibility respond in real time.
</div>
