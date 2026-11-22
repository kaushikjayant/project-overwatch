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
**Run it yourself** — open the [Interactive Dashboard]({{ '/dashboard/' | relative_url }}) and drag
the sliders to watch runaway probability and time-to-irreversibility respond in real time.
</div>
