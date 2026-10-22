A show is a playlist of scenes. A night runs several shows in order (warm-up, main set, encore), and ShowCard is how each one is listed, started and followed. Three variants (Row, Tile, Featured) and seven states: Draft, Ready, Up next, Selected, Live, Needs attention, Played.

## Props
`variant` (`row | tile | featured`), `state` (`draft | default | next | selected | live | attention | done`), `code` (shown as `SHOW // 02`), `order` (place in the night, e.g. "Set 2 of 4 · 20:00"), `title`, `images` (up to three scene artworks; Row stacks them like sleeves, Tile and Featured use the first as the cover), `scenes` (one state per scene, in order: `ready | armed | played | live | fault | unavailable`), `current` (index of the playing scene), `duration` (seconds or text), `elapsed` (seconds, Live), `nowPlaying`, `upNext`, `reason` (Needs attention), `slot`, `blocked` (disables Start), `onSelect`, `onOpen`, `onStart`, `onEnd`.

## Anatomy
Same skin as SceneCard: 12px padding (16 Featured), 14px radius, `background-surface` with a `border-default` edge. Code line (`SHOW // 02` in Geist Mono, then its place in the night), title, status and meta (scene count, total time), then the **set strip**: one 6px segment per scene, coloured by that scene's state. Live adds a Now / Next readout with the show clock. Actions sit right on Row and under a divider on Tile and Featured. Featured carries the title as Barlow Condensed poster type over the cover — the one expressive surface on a screen.

## Set strip
Ready segments are `border-strong`; Armed is a toxic outline; Played is toxic at 55%; the playing scene is solid toxic with the subtle glow and a slow pulse (static with reduced motion); Fault and Unavailable are `status-danger`. A Played show greys the whole strip. The strip is read out as text ("Scene 5 of 12 playing", "2 of 3 scenes ready, 1 issue").

## States
- **Ready** offers Start show. Starting a show arms its first scene; it does not send output — scenes still trigger one by one.
- **Up next** (cyan edge and order line) is the show queued after the current one.
- **Selected** is magenta, as everywhere.
- **Live** is toxic: rail, 2px border, glow, Now / Next and clock. End show is guarded: press and hold for 0.75 seconds.
- **Needs attention** is `status-danger` and always says which scene and what to do; its action is Resolve.
- **Draft** has a dashed edge and Edit show. **Played** is quiet and offers Recap.

## Night lineup
List a night's shows as Row cards in running order, one per row with an 8px gap, inside a `role="list"`. Only one show is Live at a time; the show after it is Up next. Opening a show leads to its stacked SceneCard set list.

## Responsive
The card lays out from its own width. At 520px and below, Row moves its actions under a divider as a full-width row. At 260px and below, Row drops the sleeve stack and actions stack.

## On iOS and iPadOS
Native apps use **IOSShowRow** (tonight's lineup) with **IOSLiveBar** for ending a show. The web card follows the same touch rules as SceneCard: hover-only tints and a drift-proof hold.
