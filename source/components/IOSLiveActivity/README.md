The show, at a glance, while the phone is locked or another app is open: Lock Screen, and Dynamic Island compact, minimal and expanded.

## Props
`variant` (`lockscreen | compact | minimal | expanded`), `cue`, `scene`, `show`, `image`, `elapsed`, `duration`, `next`.

## Rules
- **Read-only, on purpose.** Nothing consequential can fire from a locked phone or the island — no GO, no Stop. Tapping opens the app straight onto the live controls; the Lock Screen says so ("Controls in app").
- **One number matters most:** the scene clock in Geist Mono, toxic, tabular figures. Compact shows artwork + clock + a progress ring; minimal shows only the ring.
- **Standby is visible** in the expanded island and on the Lock Screen, so the operator knows what GO will fire before unlocking.
- Always dark (Live Activities sit on the wallpaper and the island is black); toxic is the only accent.

## SwiftUI / ActivityKit
`ActivityConfiguration(for: ShowAttributes.self)` with a Lock Screen view and `DynamicIsland { expanded regions } compactLeading: { art } compactTrailing: { Text(timerInterval:) + ProgressView(.circular) } minimal: { ProgressView(.circular) }`. Drive the clock with `Text(timerInterval:)` so it ticks without updates; push an update only when the scene or standby changes. `.widgetURL` deep-links to the live sheet.
