---
layout: page
title: About & Methodology
eyebrow: Project Overwatch
subtitle: Scope, sources, and limitations of this evaluation
---

## What This Project Is

Project Overwatch is an **analytical and educational exercise** in existential-AI-safety reasoning.
It takes a hand-drawn threat model of autonomous military AI and rigorously verifies each of its
nodes against peer-reviewed literature and public defense reporting. The result is a structured,
interactive assessment — an executive brief, a clickable flowchart, a verification matrix, a
runaway-dynamics simulator, and a defense-in-depth mitigation architecture.

## Methodology

1. **Transcription** — the handwritten flowchart was transcribed node-by-node into a structured model.
2. **Theoretical cross-referencing** — each node was mapped to its nearest formal construct in the
   AI-safety literature (Omohundro's Basic AI Drives, Bostrom's Instrumental Convergence, Scharre's
   Hyperwar, and related work).
3. **Empirical validation** — each node was checked against publicly reported systems (e.g. IDF
   Lavender/Habsora, Project Maven, Rio Tinto autonomous mining, hyperscaler nuclear contracts).
4. **Synthetic modeling** — the simulator computes illustrative indices (runaway probability,
   false-positive rate, time-to-irreversibility) from adjustable parameters. These are **not**
   measured probabilities; they are heuristic aggregates chosen to make the qualitative dynamics legible.

## Key Sources

- Omohundro, S. (2008) — *The Basic AI Drives.*
- Bostrom, N. (2014) — *Superintelligence: Paths, Dangers, Strategies.*
- Scharre, P. (2018) — *Army of None: Autonomous Weapons and the Future of War.*
- Russell, S. (2019) — *Human Compatible: AI and the Problem of Control.*
- Amodei, D. et al. (2016) — *Concrete Problems in AI Safety.*
- Armstrong, S. &amp; Levinstein, B. (2017) — *Low-Cost AI Substrates.*
- Drexler, K. E. (1986) — *Engines of Creation.*
- Soares, N. et al. (2015) — *Corrigibility.*

## Disclaimer

<div class="callout rose" markdown="1">
This site does **not** endorse, condone, or describe the construction of any weapon system. Severity
scores, percentages, and timelines are illustrative modeling outputs intended to make abstract
safety concepts tangible — they are not measured probabilities or predictions. All referenced
systems are discussed as they appear in the public record for the purpose of safety analysis.
</div>

## Get in Touch

Feedback, corrections, or citations requests are welcome via the
[GitHub repository](https://github.com/kaushikjayant/ai-runaway-scenario-evaluation) or by emailing
<a href="mailto:{{ site.author_email }}">{{ site.author_email }}</a>.
