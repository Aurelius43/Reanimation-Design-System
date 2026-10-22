The home screen for a night: every show in running order, with the live show front and center.

## Composition
- **Navigation:** `IOSNavigationBar` large title "Tonight"; `IOSTabBar` (Tonight · Library · Devices · Settings).
- **Content:** one `IOSList` headed with the date and show count; one `IOSShowRow` per show in running order.
- **Live:** while a show runs, `IOSLiveBar` (compact) sits on the tab bar as its bottom accessory. Before the first show starts, there's no live bar.
- **iPad:** a split view. The sidebar holds the show list (`sizeClass: "regular"` rows); the detail column shows the selected show's scenes with the regular live bar along its bottom. Portrait collapses the sidebar.

## States to design for
Before doors (first show Up next), show running, between shows (next show Up next, nothing live), a show needing attention (reason line), end of night (all Done).

## SwiftUI
`TabView` with `.tabViewBottomAccessory { LiveBar() }` and `.tabBarMinimizeBehavior(.onScrollDown)`. iPad: `NavigationSplitView` with the show `List` in the sidebar. Rows tap through to Show detail; Start show is the row's trailing button.
