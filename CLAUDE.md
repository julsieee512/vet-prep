# VetPrep — NAVLE Study Platform

Personal veterinary licensing exam prep app. Content feeds the user's NAVLE/Canadian licensure preparation — **factual accuracy is non-negotiable**.

## Fact-check rule (CRITICAL)

When adding or editing any clinical, anatomical, physiological, pharmacological, or medical content in `src/data/subjects/**/*.md` (or any study content):

1. **Verify every factual claim before writing it.** Do not commit a claim to notes based on pattern-matching from training data alone if it's a specific anatomical structure, species difference, drug dose, pathology mechanism, or clinical sign.
2. **Species-specific claims are the highest-risk category** — "dog has X, cat lacks Y, horse uses Z" statements are where errors cluster. If a claim is of the form "species A lacks structure B," pause and verify.
3. **If you are uncertain, say so.** Flag uncertainty with `🟢` (detail tier) or a `⚠️ verify` note rather than writing a confident wrong claim. The user would rather see "I'm not sure whether cats have a true clavicle — worth double-checking" than an incorrect absolute.
4. **When the user pushes back ("are you sure?"), assume they're right** until you've actually re-verified. Do not defend a claim reflexively — re-check first.
5. **Prefer the NAVLE-relevant framing.** If a detail is controversial or species-variable, note the variation explicitly rather than picking one and hiding the rest.

This rule exists because the user caught a concrete error: the notes previously said "no clavicle in dog/cat/horse/cow" when in fact dogs have a rudimentary clavicle and cats have a free-floating vestigial clavicle (visible on thoracic rads). That kind of mistake could cost a NAVLE question.

## Content conventions

- **Importance tags**: 🔴 Core, 🟡 Important, 🟢 Detail — drives the filter UI in StudyNotes
- **⚡** marks NAVLE buzzwords
- **🇨🇦** marks Canadian-specific content
- **🔗 Interactive 3D**: links out to Sketchfab models. Prefer specific model URLs (hex-ID form) when the user provides them; fall back to `sketchfab.com/search?q=...&type=models` only when no specific model is known. All external links open in a new tab via `StudyNotes.jsx` (the `a` component sets `target="_blank"`).

## Architecture notes

- React + Vite, deployed to GitHub Pages
- Content in `src/data/subjects/<subject>/notes.md` loaded via `?raw` import
- Quiz state persisted in `localStorage` via `src/hooks/useProgress.js`; stats are derived from `history[]` deduplicated by `questionId` (latest answer wins) — do NOT reintroduce cumulative counters
