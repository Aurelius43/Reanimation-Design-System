One show's set list: every scene in cue order, with the live, armed (Next) and problem scenes easy to spot.

## Composition
- **Navigation:** `IOSNavigationBar` large title (the show name) with Back to Tonight.
- **Not started:** a full-width **Start show** button (`action-primary`), then a short facts list (`IOSListItem` value rows: start time, scene count and length, devices ready), then the scenes.
- **Running:** the scene list only; `IOSLiveBar` owns GO, Stop scene and End show. Rows never carry a stop control.
- **Scenes:** one `IOSList` of `IOSSceneRow` in cue order. Live shows elapsed and progress; the next cue is Armed with "› NEXT"; faults explain themselves in the reason line.

## Rules
Starting a show is one tap (it's not destructive). Ending it is a 0.75 s hold on the live bar. Reordering scenes is Tier 2 (Edit mode with drag handles).

## SwiftUI
A `List` with `.listStyle(.insetGrouped)`. Start show: `Button("Start show") { … }.buttonStyle(.glassProminent).tint(RAColor.actionPrimary)` with `.controlSize(.large)` and `.frame(maxWidth: .infinity)`.
