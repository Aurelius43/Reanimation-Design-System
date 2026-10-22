# ScreenLibrary

Everything that isn't on tonight's running order: scenes and saved shows.

## Composition
- **Navigation:** `IOSNavigationBar` large title "Library"; Library tab selected.
- **Switcher:** `IOSSegmentedControl` (Scenes · Shows).
- **Scenes:** `IOSSceneRow` without cue numbers; problems grouped under "Needs attention" with their reason.
- **Shows:** `IOSShowRow` with `order: "Library"`; drafts use the `draft` state.
- **Live:** if a show is running, the live bar stays on the tab bar here too.
- **iPad:** library in the sidebar; the selected scene or show in the detail column.

## Coming in Tier 2
Search (iOS 26 search tab), context menus with preview, and import from Files.

## SwiftUI
`Picker` with `.pickerStyle(.segmented)` above a `List`. iPad: `NavigationSplitView`.
