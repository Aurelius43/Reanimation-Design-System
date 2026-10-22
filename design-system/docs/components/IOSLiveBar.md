# IOSLiveBar

The live bar is the one place to run a show: GO fires the standby scene, and Stop scene / End show stop it. Rows stay calm and tappable; these controls never move and never scroll away.

`RA.IOSLiveBar`

## Use

```jsx
<RA.IOSLiveBar />
```

## Props

```ts
export interface IOSLiveBarProps { sizeClass?: "compact" | "regular"; expanded?: boolean; state?: "live" | "starting"; cue?: number | string; scene: string; show: string; image?: string; elapsed?: number; duration?: number; next?: string; onGo?: () => void; onStop?: () => void; onEndShow?: () => void; onExpand?: () => void; onCollapse?: () => void }
```

## Guidance

The live bar is the one place to run a show: **GO** fires the standby scene, and **Stop scene** / **End show** stop it. Rows stay calm and tappable; these controls never move and never scroll away.

### Props
`sizeClass` (`compact` iPhone · `regular` iPad), `expanded` (the sheet the compact bar opens into), `state` (`live | starting`), `cue`, `scene`, `show`, `image`, `elapsed`, `duration`, `next` (the standby scene), `onGo`, `onStop`, `onEndShow`, `onExpand`, `onCollapse`.

### Layouts
- **Compact** (iPhone, iPad Slide Over): a 60pt Liquid Glass capsule sitting on the tab bar as its bottom accessory (like Music's mini player) — round artwork, cue + scene, clock + show, a hairline progress, the Stop ring and a 44pt GO. Tapping the text opens the expanded sheet.
- **Expanded**: a sheet with large artwork, the scene title, a progress bar with elapsed / remaining, the **Standby** card with a large GO, and two full-width hold bars: **Stop scene** (filled red) and **End show** (outlined red). End show only appears here, so it can never be hit from the mini bar.
- **Regular** (iPad): an 80pt glass bar along the bottom of the detail column — now playing with its clock, a centred progress readout when there is room (over 1000pt), **Standby** + a 64pt GO, and two hold rings (Stop scene, End show).

### GO and Standby
The show-control convention: the next scene waits in **Standby**, named on the bar, and **GO** fires it with one tap. Speed on cue matters more than a guard here — the safety is that you always see exactly what GO will fire. GO is disabled while a scene is Starting. Stopping is the opposite: rare and destructive, so it takes a 0.75-second hold — long enough to stop a stray touch, short enough for an emergency. Row Trigger buttons stay for out-of-order (ad-lib) firing.

### Material
The compact and regular bars are Liquid Glass — the floating navigation layer, never rows or content — with a soft scroll-edge fade beneath them. Reduce Transparency swaps glass for an opaque surface; Increase Contrast adds a solid edge. Toxic is the only tint, reserved for GO and the live state.

### Portrait and landscape
- **iPhone landscape**: the compact bar keeps its place; the expanded sheet lays the artwork beside the controls and puts Stop scene and End show side by side, so nothing scrolls off a 390pt-tall screen.
- **iPad portrait**: the sidebar tucks away and the detail column takes the full width; the regular bar spans it.
- **Narrow columns** (iPad portrait split view, Stage Manager): the regular bar reads its own width — Next folds away below 700pt; below 520pt the centre readout gives way to a hairline progress along the bottom and the ring labels hide.

### Hold to confirm
Press and hold for 0.75 seconds; the ring or bar fills as you hold, and lifting early cancels. A soft haptic marks the start and a firm one the stop (`.sensoryFeedback(.impact(weight: .light))` then `.warning`). Touch is captured on press, so a drifting thumb does not cancel; long-press menus, text selection and the callout are disabled on the control. With Reduce Motion the fill shows a static half-state instead of animating. **Starting** locks Stop until the device confirms output.

### VoiceOver and keyboard
Each control is announced as "Stop scene, press and hold". VoiceOver users get named actions on the bar — `.accessibilityAction(named: "Stop scene")` and `.accessibilityAction(named: "End show")` — each confirmed by an alert, instead of a timed hold. On iPad with a keyboard, holding Space or Return on the focused control works the same.

### SwiftUI
Compact: `TabView { … }.tabViewBottomAccessory { LiveBar() }` with `.tabBarMinimizeBehavior(.onScrollDown)` so the tab bar shrinks while the bar stays, opening a `.sheet` with `.presentationDetents([.large])`. GO: `Button("GO", action: go).buttonStyle(.glassProminent).tint(.toxic)`. Regular: the same view pinned with `.safeAreaInset(edge: .bottom)` on the detail column of the `NavigationSplitView`. Hold: a `LongPressGesture(minimumDuration: 0.75)` driving a `Circle().trim(from: 0, to: progress)` ring. A Live Activity for the Lock Screen and Dynamic Island is a planned follow-up.
