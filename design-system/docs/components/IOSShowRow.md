# IOSShowRow

One show — a playlist of scenes — in tonight's lineup, as a native iOS / iPadOS list row. Tapping the row pushes the show's scene list (IOSSceneRow). Ending a show happens in IOSLiveBar, never in the row.

`RA.IOSShowRow`

## Use

```jsx
<RA.IOSShowRow />
```

## Props

```ts
export interface IOSShowRowProps { code?: number | string; order?: string; title: string; state?: "default" | "next" | "selected" | "live" | "attention" | "done" | "draft"; images?: string[]; scenes?: Array<"ready" | "armed" | "played" | "live" | "fault" | "unavailable">; current?: number; duration?: number; elapsed?: number; nowPlaying?: string; reason?: string; sizeClass?: "compact" | "regular"; onOpen?: () => void; onStart?: () => void }
```

## Guidance

One show — a playlist of scenes — in tonight's lineup, as a native iOS / iPadOS list row. Tapping the row pushes the show's scene list (IOSSceneRow). Ending a show happens in IOSLiveBar, never in the row.

### Props
`code`, `order` (start time or place in the night), `title`, `state` (`default | next | selected | live | attention | done | draft`), `images` (up to three scene artworks, stacked like sleeves), `scenes` (one state per scene: `ready | armed | played | live | fault | unavailable`), `current`, `duration`, `elapsed`, `nowPlaying`, `reason`, `sizeClass`, `onOpen`, `onStart`.

### Anatomy
Inset-grouped row with a disclosure chevron. Eyebrow `SHOW 02` in Geist Mono plus the start time; title `.headline` (`.title3` regular); status capsule, scene count and total time `.footnote`; the **set strip** — one 5pt segment per scene, coloured by that scene's state — and, while Live, a "Now" line. Ready, Up next and Selected offer a Start capsule (filled toxic when Up next).

### States
**Up next**: cyan edge and start time. **Live**: toxic edge, tint, live clock, strip progress and Now line. **Needs attention**: danger tint and the reason. **Played**: dimmed stack and grey strip. **Draft**: outlined strip. **Selected**: magenta edge and tint.

### SwiftUI
`NavigationLink(value: show) { ShowRow(show) }` inside an `.insetGrouped` `List`; the strip is an `HStack(spacing: 2)` of `Capsule()` segments with an `.accessibilityLabel("Scene 4 of 12 playing")` on the whole strip. On iPad the lineup lives in the sidebar of a `NavigationSplitView`.
