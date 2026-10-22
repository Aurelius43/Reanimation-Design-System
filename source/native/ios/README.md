# Reanimation for SwiftUI (iOS and iPadOS)

Native starting point for building Reanimation apps in SwiftUI. These files are generated from the design system's tokens and icon list. Don't edit them; regenerate from Claude Design.

| File | What it gives you |
| --- | --- |
| `ReanimationTokens.swift` | `RAColor` (semantic roles, `.Component`, `.Core`), `RASpace`, `RARadius`, `RASize`, `RAStroke`, `RAFont` (Dynamic Type roles), `RAMotion` (durations and the seven signature behaviors), `RAHold.duration` (0.75 s), `RAEffect` shadows and glows, plus `.raShadow(_:)` and `.raHitTarget()` |
| `ReanimationIcons.swift` | `RAIcon`: every system icon name resolved to its SF Symbol (or custom symbol), with selected variants |
| `sf-symbols.md` | The same map as a table, with notes and the rows to verify |

## Setup

1. Add both `.swift` files to the app target. They need iOS 15 or later (`Color(uiColor:)`); the design targets iOS and iPadOS 26.
2. Dark-first: set `.preferredColorScheme(.dark)` at the root unless the app offers an Appearance setting. Colors follow the system appearance, so Light works too.
3. Fonts: SF Pro comes with the system. For expressive poster type, add Barlow Condensed Black and Bold (from Google Fonts) to the target and list them under `UIAppFonts` in Info.plist; `RAFont.expressiveDisplay()` uses them. Never use them for controls, navigation or data.
4. Custom symbol: export the approved Bluetooth vector to the asset catalog as a symbol image named `custom.bluetooth`.
5. Tint: set the app's accent color to `RAColor.actionPrimary` so system controls (toggles, links, the selected tab) pick up the toxic accent.

## Using it

```swift
Text("Moon Tower")
    .font(RAFont.headingL)
    .foregroundStyle(RAColor.textPrimary)

RoundedRectangle(cornerRadius: RARadius.lg)
    .fill(RAColor.backgroundSurface)
    .padding(RASpace.s4)

RAIcon.scenes.image(selected: isSelected)

withAnimation(RAMotion.respecting(reduceMotion, RAMotion.cue)) { armed = true }

LongPressGesture(minimumDuration: RAHold.duration)
```

## Rules that matter on iOS

- Bind to `RAColor` semantic roles, never `RAColor.Core` or hex.
- Ship Dynamic Type text styles (`RAFont`), never fixed sizes. Test the largest accessibility sizes.
- 44 pt hit areas everywhere (`.raHitTarget()`).
- Liquid Glass only on the floating navigation layer (tab bar, live bar, menus), never on rows or content.
- Every stop is a 0.75 s hold; GO is one tap. VoiceOver gets named actions confirmed by an alert.
- Use system presentations (`.alert`, `.confirmationDialog`, `.sheet`) and system controls; the component cards show their Reanimation styling and content.

## Reference screens

The `Screen*` cards (Tonight, Show detail, Live, Library, Devices, Settings) show full iPhone and iPad layouts built from the components, each with a composition list and the SwiftUI structure to use.
