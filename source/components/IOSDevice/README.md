Preview frame for the iOS and iPadOS adapters: screen corners, status bar, safe areas and the home indicator. Not shipped in product UI — it exists so every iOS preview shows real proportions.

## Props
`device` (`phone` 390×844pt · `pad` 1194×834pt), `orientation` (`portrait | landscape`; phones default to portrait, iPads to landscape — a landscape iPhone hides the status bar and insets content 48pt for the Dynamic Island side), `textSize` (`default` · `xl` · `ax` accessibility, which reflows rows), `label`.

## The iPad performance screen
A `NavigationSplitView`: tonight's lineup (IOSShowRow) in the sidebar, the selected show's set list (IOSSceneRow, regular) in the detail column, and the regular IOSLiveBar pinned to the bottom of the detail column. On iPhone the same flow is a `NavigationStack` (Tonight → show) with the compact live bar above the tab bar. Helper classes: `ra-iosscroll` (content area), `ra-iosdock` (bottom inset), `ra-iossplit` with `__side` and `__detail`.
