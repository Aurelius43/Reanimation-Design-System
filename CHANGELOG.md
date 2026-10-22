# Changelog

All changes come from Claude Design via the sync in SYNC.md.

## 0.2.0 — 2026-10-22

iOS Tier 1: SwiftUI tokens and SF Symbols map (native/ios), IOSAlert, IOSPermissionPrimer, IOSPairingSheet, IOSDeviceRow, IOSConnectionBanner, and six iPhone + iPad reference screens.

- **New components (iOS + iPadOS system):** `IOSAlert` (alerts and confirmation dialogs), `IOSPermissionPrimer` (Bluetooth, local network, notifications), `IOSPairingSheet`, `IOSDeviceRow`, `IOSSignal` and `IOSConnectionBanner`, with their types in `index.d.ts`. 121 components on `RA` (was 115).
- **New reference screens:** `ScreenTonight`, `ScreenShowDetail`, `ScreenLive`, `ScreenLibrary`, `ScreenDevices`, `ScreenSettings`, as full iPhone and iPad layouts. The docs are in `design-system/docs/screens/`.
- **New SwiftUI layer:** `native/ios/` has `ReanimationTokens.swift` (`RAColor`, `RASpace`, `RARadius`, `RAFont`, `RAMotion`, `RAHold`, `RAEffect`), `ReanimationIcons.swift` (`RAIcon`) and `sf-symbols.md`, all generated from the tokens.
- **Changed:** the Cover card is retitled "Reanimation" with a halftone and print-grain treatment, and the README describes the new iOS pieces. Halftone and grain effects come off the README's "Not synced yet" list.
- **No changes to:** tokens (`tokens.css` and `tokens.json` are identical), existing components' props, or assets.
- **Package:** `design-system/` is now built and committed, so the package entry points resolve.

## 0.1.0 — 2026-10-22

Initial import of the Reanimation Design System (formerly the Bone Maestro design system).

- 115 React components on `RA`, organized as Core, the Bone Maestro theme and the Performance pack.
- Tokens use the `--ra-` prefix (was `--bm-`); JS namespace `RA` (was `BM`).
- Every stop control is a 0.75-second press-and-hold, including PerformanceControl's Stop performance. Standby + GO is the show-control model.
