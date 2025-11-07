# Ritual DApp

A small, focused UI — centered, mono-typed pages for oracle, companion (chat), reputation, and generator flows.

This README is intended to be updated frequently as new features are added. Use the "Feature log" template below when you add or change behavior.

## Quick links
- `/oracle` — input + single block output
- `/companion` — chat bubbles (no avatars)
- `/reputation` — button + score + interpretation
- `/generator` — input + placeholder image + Mint button

## Tech
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS utilities

## Project structure (high level)
- `app/`
	- `layout.tsx` — top nav + container
	- `globals.css` — global styles (IBM Plex Mono, palette, `.app-main` container)
	- `oracle/`, `companion/`, `reputation/`, `generator/` — pages
- `components/`
	- `PromptInput.tsx` — auto-resizing textarea + Send button
	- `PromptOutput.tsx` — output block + chat primitives
- `public/` — static assets (e.g. `file.svg` used as generator placeholder)

## UI / Design notes
- Typography: IBM Plex Mono (monospace primary)
- Colors: background `#FAFAFA`, text `#111`, subtext `#777`, accent `#5B4DF4`
- Layout: content constrained to `700px`, centered with generous padding
- Input: auto-expanding textarea, Enter to send, Shift+Enter for newline
- Output: fade-in animation, subtle dividers/shadows, no avatars or gradients

## How to update this README when adding features
Add a short feature entry to the "Feature log" section (or `CHANGELOG.md`) using the template below.

Feature entry template:

- Date: YYYY-MM-DD
- Title: Short descriptive title
- Files changed: list of files (paths)
- Description: 1–3 sentences describing the change and why
- Notes: API changes, migration steps, and any manual tasks
- Tests: what to run to validate (optional)

Example:

- Date: 2025-11-07
- Title: Add PromptInput auto-resize and send states
- Files changed: `components/PromptInput.tsx`, `app/globals.css`
- Description: Implemented an auto-resizing textarea with Enter=send and a send button that shows idle→thinking→done states. Improves UX for quick interactions.
- Notes: No API changes. Client-only component.
- Tests: Manually verify Enter and Shift+Enter behavior and send button visual states.

## Quick checklist before opening a PR
- [ ] Run `npm run lint` and address warnings
- [ ] Run `npm run build` locally (recommended for production changes)
- [ ] Update this README with a feature entry (use template)
- [ ] Add a brief PR description that includes screenshots or GIFs for UI changes

## Troubleshooting
- If you hit a runtime error while running `npm run dev`, check the terminal for the stack trace and the component file referenced. Common issues:
	- Missing `export default` in a page under `app/` — each route file must export a React component as default.
	- Client components must include `"use client"` at the top if they use hooks or browser-only APIs.

## Feature log
- 2025-11-07 — Initial UI spec implemented: global styles, PromptInput, PromptOutput, and pages for oracle/companion/reputation/generator. (See `app/` and `components/`)

---

If you want, I can also:
- Add a `CHANGELOG.md` and append entries when we complete todos.
- Add contribution guidelines for faster collaboration.
- Add example screenshots and embed them here.