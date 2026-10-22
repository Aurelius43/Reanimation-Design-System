The iPadOS menu bar for Bone Maestro. On iPad every app gets a menu bar (swipe down from the top or move the pointer there); the Performance menu puts every live action in one place.

## The Performance menu
GO · Standby Next Scene · Standby Previous Scene — Stop Scene (hold) · End Show… (hold) — Arm Next Show · Show Live Controls · Rehearsal Mode.

Keyboard shortcuts are not assigned yet; when they are, they belong here (not printed on cards), and the same commands drive both.

## Rules (Apple HIG for iPadOS)
- Order by frequency of use, not alphabetically; group related actions; every item gets a symbol matching its in-app icon.
- Never hide items by context: unavailable items dim in place (Standby Previous Scene, above).
- View menu carries Show / Hide Sidebar; Window lists every open show window by its show name.

## SwiftUI
`.commands { CommandMenu("Performance") { Button("GO", action: go) … } }`.
