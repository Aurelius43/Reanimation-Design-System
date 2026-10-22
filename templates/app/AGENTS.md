# Design system

This app uses the **Reanimation Design System** (package `@aurelius43/reanimation`).

Before any UI, styling, component, token, icon or copy work, read `node_modules/@aurelius43/reanimation/AGENTS.md` and follow it. Start at `node_modules/@aurelius43/reanimation/design-system/docs/components/INDEX.md` and read the card for each component you use.

- Use the package's components and `var(--ra-…)` tokens. Never hand-build a control the system has, and never invent colors, spacing, radii or durations.
- Never edit, copy or patch files from the package. If the system is missing something, tell the user: changes are made in Claude Design and synced to the package.
- To update the system in this app: `npm install github:Aurelius43/Reanimation-Design-System` and commit the lockfile.
