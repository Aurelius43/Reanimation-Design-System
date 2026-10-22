One scene in a show's set list, as a native iOS / iPadOS list row. It shows the cue, title, status, time and (Live) progress, and offers one safe action. It never carries a stop control: while a show runs, IOSLiveBar owns Stop scene and End show.

## Props
`cue`, `next`, `title`, `state` (`default | armed | selected | starting | live | fault | unavailable | played`), `image`, `duration` and `elapsed` (seconds), `progress` (0–1), `sampleRate`, `devices`, `reason`, `sizeClass` (`compact` iPhone · `regular` iPad), `onSelect`, `onTrigger`, `onAcknowledge`.

## Anatomy
Inset-grouped `List` row, 76pt minimum (88pt regular). Artwork 52pt (64pt regular), 10pt corners. Eyebrow `SC 04` in Geist Mono `.caption` with "Next" in information cyan; title `.headline` (`.title3` regular); status capsule + time `.footnote`; a 3pt progress line when Live; reason `.footnote` in `text-danger` for Fault and Unavailable. Trailing: one capsule action (34pt visual inside a 44pt hit area) and a 44pt `ellipsis` menu. Regular width adds sample rate and devices to the meta line.

## States
Ready: tinted Trigger. **Armed**: toxic edge and filled toxic Trigger with the subtle glow. **Selected**: magenta edge and tint. **Starting**: progress spinner. **Live**: toxic edge, tint, mono clock in toxic, progress line and an equaliser (still with Reduce Motion) in place of the action. **Fault**: Acknowledge. **Unavailable**: no action, reason shown. **Played**: artwork dimmed, no action.

## Dynamic Type
Every size is a text style, so rows follow the user's setting; at accessibility sizes the trailing controls move under the text (`ViewThatFits` / `dynamicTypeSize.isAccessibilitySize`). Never truncate the title.

## SwiftUI
`List { Section { ForEach(scenes) { SceneRow($0) } } }.listStyle(.insetGrouped)`. Trigger is `Button(.borderedProminent).controlSize(.small).tint(.toxic)` for Armed, `.bordered` otherwise; the menu is `Menu { … } label: { Image(systemName: "ellipsis") }`; long-press opens the same items with `.contextMenu`. Swipe actions are deliberately not used yet. SF Symbols: `play.fill`, `ellipsis`, `exclamationmark.triangle.fill`, `waveform`.
