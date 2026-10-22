# Reanimation Design System

Dark-first product design system for web, iOS and iPadOS: 115 React components, design tokens, docs, brand assets and rules for coding agents. It ships with the **Bone Maestro** theme and the **Performance** pack for live-show control.

> **Source of truth: Claude Design.** This repo is a generated mirror. Don't edit it by hand — design changes are made in Claude Design and synced here as a pull request (see [SYNC.md](SYNC.md)).

## Use it in an app

1. **Install** (in the app's repo):
   ```
   npm install github:Aurelius43/Reanimation-Design-System
   ```
   If the repo is private, whatever runs the install needs read access to it on GitHub.
2. **Load the styles once** at the app's entry point, then import components:
   ```jsx
   import '@aurelius43/reanimation/fonts.css';
   import '@aurelius43/reanimation/tokens.css';
   import '@aurelius43/reanimation/styles.css';
   import { Button } from '@aurelius43/reanimation';

   <Button variant="primary" leadingIcon="play">Start show</Button>
   ```
   Needs React 18+. Dark is the default; `data-theme="light"` switches to Light.
3. **Give the app's agents the rules.** Copy the three files in [`templates/app/`](templates/app) into the app's root (`AGENTS.md`, `CLAUDE.md`, `.cursor/rules/reanimation.mdc`). They point Cursor, Claude Code and other agents at the rules inside the installed package, so the rules update when the package does. If the app already has an `AGENTS.md` or `CLAUDE.md`, add the template's lines to it.

Or just tell Claude Code in the app's repo: *"Install the Reanimation design system from github:Aurelius43/Reanimation-Design-System and add its agent rules from templates/app."*

**Updating an app:** run the install command again (or tell Claude Code *"Update Reanimation"*) and commit the lockfile.

## What's inside

| Path | What |
| --- | --- |
| `AGENTS.md` | Rules every coding agent follows when building UI with the system |
| `design-system/components/` | `bundle.js` (components on `RA`), `bundle.css`, `index.js` (ES module entry), `index.d.ts` (types) |
| `design-system/tokens/` | `tokens.css`, `fonts.css`, `tokens.json`, `tokens.dtcg.json` (W3C format for Style Dictionary, Tokens Studio, Figma importers) |
| `design-system/docs/` | Component index and one card per component, tokens, icons |
| `design-system/assets/` | Logos, icons, illustrations |
| `design-system/*.md` | Guidelines, accessibility, motion, signature layer |
| `examples/standalone.html` | Plain-HTML demo (serve the repo folder and open it) |
| `templates/app/` | Agent rule files to copy into apps |
| `source/` | Exact mirror of the design system in Claude Design (sync target) |
| `scripts/` | `build_package.py` builds `design-system/` from `source/`; `check.mjs` verifies it |

## Updating this repo from Claude Design

In a Claude Code session on this repo, say **"Sync from the design system."** Claude follows [SYNC.md](SYNC.md): pulls the latest version, rebuilds, checks, bumps the version, writes the changelog and opens a pull request for you to merge.

## Native apps

SwiftUI and Compose apps don't use the web bundle. Use the docs and tokens as the spec; the `IOS*` and `Android*` component cards name the native APIs to use.
