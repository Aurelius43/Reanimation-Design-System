# Reanimation Design System — rules for coding agents

Reanimation is a dark-first product design system for web, iOS and iPadOS. Structured UI carries the work; a selective Mutation Layer (toxic, magenta, cyan, glow, poster type) marks only the moments that matter. It ships with one theme, **Bone Maestro**, and one domain pack, **Performance** (live-show control).

**Where this file lives:** paths below are relative to this package's root. In an app that installed it, that is `node_modules/@aurelius43/reanimation/`.

**Source of truth:** Claude Design (the Reanimation Design System on claude.ai). This package is a generated mirror of it. Never edit files in this package, or copy and modify its components inside an app. If something in the system needs to change, say so to the user; the change is made in Claude Design and synced here.

## Where things are

| Need | Read |
| --- | --- |
| Which component to use | `design-system/docs/components/INDEX.md` |
| A component's props, usage and rules | `design-system/docs/components/<Name>.md` |
| Exact TypeScript props | `design-system/components/index.d.ts` |
| Token names and values | `design-system/docs/tokens.md` · `design-system/tokens/tokens.json` · `design-system/tokens/tokens.dtcg.json` (W3C) |
| Brand, color, type, layout, touch, layers | `design-system/guidelines.md` |
| Motion and haptics | `design-system/motion.md` |
| Accessibility bar | `design-system/accessibility.md` |
| Live / armed / mutation states | `design-system/signature-layer.md` |
| Icon names | `design-system/docs/icons.md` |
| Logos, icons, illustrations | `design-system/assets/<Group>/README.md` |
| Full iPhone / iPad screen layouts | `design-system/docs/screens/INDEX.md` |
| SwiftUI tokens, icons (SF Symbols) | `design-system/native/ios/README.md` (`ReanimationTokens.swift`, `ReanimationIcons.swift`, `sf-symbols.md`) |

Read a component's card before you use it. A value you did not read from a card is a guess.

## Using it in a web app (React 18+)

```jsx
// once, at the app's entry point
import '@aurelius43/reanimation/fonts.css';
import '@aurelius43/reanimation/tokens.css';
import '@aurelius43/reanimation/styles.css';

// anywhere
import { Button, ShowCard, SceneCard } from '@aurelius43/reanimation';

<Button variant="primary" leadingIcon="play">Start show</Button>
```

- Dark is the default theme. Put `data-theme="light"` on `<html>` (or any container) for Light.
- Next.js: use the components in client components only (`'use client'`); the bundle reads `window`.
- Plain HTML (no bundler): load React 18 UMD, then `design-system/components/bundle.js`; components are on `window.RA`. See `examples/standalone.html`.

**Native iOS / iPadOS (SwiftUI):** do not port the web bundle. Add `design-system/native/ios/ReanimationTokens.swift` and `ReanimationIcons.swift` to the app and use `RAColor`, `RASpace`, `RARadius`, `RAFont`, `RAMotion`, `RAHold` and `RAIcon` — never hex values, fixed font sizes or hand-typed symbol names. Use system controls and presentations (`.alert`, `.confirmationDialog`, `.sheet`); the `IOS*` cards define their content and styling, and the reference screens (`design-system/docs/screens/`) define layouts.

**Android (Compose):** use native controls and map the semantic tokens to them; the `Android*` cards name the APIs and roles.

## Hard rules

1. **Reuse before invention.** Tokens, then styles, then components. Build a new primitive only when the system cannot express the need, and flag it to the user as a candidate for Claude Design.
2. **Never hand-build a control the system has.** No custom buttons, switches, tabs, fields, menus or rows. Mount the `RA` component.
3. **Never invent a color, size, radius or duration.** Use `var(--ra-…)` tokens only. Bind UI to `ra-semantic-*` or `ra-component-*`, never to `ra-core-*` primitives or hex values.
4. **Spacing is a 4pt grid with named steps** (`--ra-core-space-1` 4px … `-24` 96px). No in-between values.
5. **Radii:** only `xs 4 · sm 8 · md 12 · lg 16 · xl 24 · pill`.
6. **Icons:** `RA.Icon` / `RA.Glyph` names from `design-system/docs/icons.md`. Never draw an SVG icon the system has. iOS uses SF Symbols.
7. **Assets:** copy logos and illustrations from `design-system/assets/` as-is. Never redraw, recolor, crop or approximate them.

## Color has a job (Bone Maestro theme)

- **Toxic green** (`action-primary`, `mutation-live`) only for the primary action, validated READY, ARMED, LIVE and GO. Never for "connected" or generic success.
- **Magenta** (`mutation-selected`) = current selection. **Cyan** (`mutation-connected`, `status-information`) = link established / information. **Purple** = creation tools. **Orange** = rare signature accent and warnings.
- Status is always **icon + text + color**, never color alone.
- Mutation (expressive color, glow, poster type) covers roughly 10–20% of a surface, with one expressive focal surface per view.
- Essential control borders use `border-strong`; `border-default` and `border-subtle` are decorative.

## Performance pack: live-show behavior (do not change)

- **Structure:** a night has several **shows**; a show is a playlist of **scenes**. Use `ShowCard` / `IOSShowRow` for shows and `SceneCard` / `IOSSceneRow` for scenes, stacked as lists.
- **Standby + GO:** the next scene waits in Standby, named on the live bar; **GO** fires it with one tap. GO is disabled while a scene is Starting or when nothing is in Standby.
- **Every stop is a 0.75-second press-and-hold:** Stop scene, End show, Stop performance and emergency stop. Lifting early cancels. Never make a stop a single tap; never make GO a hold.
- **Connected ≠ Ready ≠ Armed ≠ Live.** Keep these states distinct in data and UI.
- Nothing consequential fires from the iOS Lock Screen or Dynamic Island (`IOSLiveActivity` is read-only).
- **No keyboard shortcuts** for show control for now. No hint/helper lines on ShowCard or SceneCard.

## Touch, layout, platform

- Targets at least **44×44pt** (48dp Android). Enlarge the hit area, not the icon.
- Hover styles only inside `@media (any-hover: hover)`.
- Layouts respond to their **container** (container queries), not the device. Must work from 320pt wide, in portrait and landscape; overlays cap to `dvh` and scroll inside.
- Respect safe areas (`env(safe-area-inset-*)`, `viewport-fit=cover`).
- iOS/iPadOS 26+: Liquid Glass only on the floating navigation layer (tab bar, live bar, menus), never rows or content. iPad: split view with a sidebar toggle (no hamburger) and a menu bar. iPhone: floating tab bar with the live bar as its bottom accessory.

## Accessibility (WCAG 2.2 AA minimum)

Visible focus ring on everything interactive; logical focus order; text contrast ≥4.5:1; control boundaries ≥3:1; 200% zoom and Dynamic Type; a reduced-motion fallback for every animation; hold controls expose a named, non-timed action to screen readers.

## Copy

Sentence case for UI. UPPERCASE only for small overlines, status words and expressive poster type. Address the operator as "you". No emoji. State copy names the subject, the state, the impact and the next action.

## Before you finish

- A `RA` component used wherever one exists?
- Any raw hex, px value or font not from a token? Replace it.
- Checked Dark **and** Light, a 320pt-wide container, landscape, keyboard focus and reduced motion?
