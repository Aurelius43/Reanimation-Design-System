Running a show. The live controls never move, never scroll away and never get covered.

## Composition
- **iPhone:** the compact `IOSLiveBar` on the tab bar while browsing; tapping it opens the expanded sheet with the artwork, progress, the Standby card with a large **GO**, and the two hold bars (Stop scene, End show).
- **iPad:** the regular `IOSLiveBar` along the bottom of the detail column: now playing, Standby + GO and the two hold rings.
- **Problems:** `IOSConnectionBanner` sits under the navigation bar. It never covers the live bar or blocks GO and Stop.
- **Lock Screen and Dynamic Island:** `IOSLiveActivity`, read-only.

## Rules
GO is one tap and disabled while a scene is Starting. Every stop is a 0.75 s hold; VoiceOver users get named actions confirmed by `IOSAlert`. No keyboard shortcuts for now.

## SwiftUI
iPhone: `.tabViewBottomAccessory { LiveBar() }` opening a `.sheet` with `.presentationDetents([.large])`. iPad: `.safeAreaInset(edge: .bottom) { LiveBar(sizeClass: .regular) }` on the detail column. Banner: `.safeAreaInset(edge: .top)`.
