# GitHub Recovery Steps (Manchester repo)

This repository is currently back on **Manchester** content locally.

## Current local state
- Branch: `work`
- Latest commits:
  - `6c9555f` Revert "Rebrand site for Banbury Plumbing domain and local coverage"
  - `7a2b27a` Rebrand site for Banbury Plumbing domain and local coverage

Because this clone currently has no `origin` remote configured, nothing can be pushed until remote is added.

## Push the revert to GitHub

```bash
cd /workspace/manchester_blocked_drain_co_uk

git remote add origin https://github.com/WebFoundryAI/manchester_blocked_drain_co_uk.git
# if origin already exists, run: git remote set-url origin https://github.com/WebFoundryAI/manchester_blocked_drain_co_uk.git

git fetch origin

git push -u origin work
```

## Open PR on GitHub
Create a PR from `work` into your default branch (`main` or whatever your repo uses) with:
- Title: `Revert accidental Banbury rebrand from Manchester repo`
- Include commit `6c9555f` in the PR.

## Sanity checks

```bash
git log --oneline -n 3
# should show 6c9555f at top

rg -n "Banbury Plumbing|banburyplumbing.co.uk" src astro.config.mjs public
# should not show active Manchester-branding files as Banbury
```
