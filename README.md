# Project Overwatch — AI Runaway Scenario Evaluation & Scientific Verification

A professional static site (Jekyll + GitHub Pages) documenting a scientific
evaluation of the **catastrophic escalate-to-survive loop** in autonomous
military AI — from tactical target elimination to instrumental convergence —
with an interactive simulation engine, an academic verification matrix, and a
defense-in-depth mitigation architecture.

> **Threat Level: SEVERE** — an analytical/educational exercise, not an
> operational system. See [About & Methodology](/about/) for scope and sources.

## Structure

```
.
├── index.html                  # Home / landing page
├── dashboard.html              # Full interactive analysis console (charts, sliders, node dossiers)
├── about.html                  # About, methodology, sources, disclaimer
├── 404.html
├── blog/
│   └── index.md                # Blog index (renders all posts)
├── pages/
│   ├── executive-brief.md      # Executive brief
│   ├── flowchart-analysis.md   # Flowchart architecture (Phase 1 → Pivot → Phase 2)
│   ├── scientific-validation.md# Verification matrix + Omohundro/Bostrom theory
│   ├── simulator.md            # Simulation engine documentation
│   └── mitigation-architecture.md # Defense-in-depth + AWCEP
├── _posts/                     # 6 long-form blog briefings
├── _layouts/                   # default, page, post, blog, dashboard
├── _includes/                  # head, header, footer, scorecards, head-dashboard
├── _data/navigation.yml        # Site navigation
├── assets/
│   ├── css/main.scss           # Design system (dark, professional)
│   └── js/
│       ├── main.js             # Mobile nav toggle
│       └── dashboard.js        # Tab switching, charts, node DB, sliders, export
└── _config.yml                 # Jekyll / GitHub Pages configuration
```

## Local development

```bash
# Install Ruby + Bundler, then:
bundle install
bundle exec jekyll serve
```

The site can also be built remotely by GitHub Pages (no local Ruby required).

## Deployment

The site is designed for a **project page**:

- `url`: `https://<username>.github.io`
- `baseurl`: `/ai-runaway-scenario-evaluation`

Update `_config.yml` (`url`, `baseurl`, `repository`, `github_username`) if you
publish under a different repository or as a user/organization site
(`baseurl: ""`).

Enable GitHub Pages via **Settings → Pages → Build and deployment → Deploy from
a branch → `main` / root** (Jekyll is auto-detected).
