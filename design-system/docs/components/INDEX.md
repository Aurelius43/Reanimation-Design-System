# Component index

121 React components on `RA` (import them from `@aurelius43/reanimation`). Each links to its card: props, usage and guidance. Read the card before using a component.

## Actions · Core

| Component | What it is |
| --- | --- |
| [`Button`](Button.md) | Labeled command button in five style families — Primary, Secondary, Tertiary, Destructive and Brand / Expressive — at three sizes. |
| [`IconButton`](IconButton.md) | Icon-only command in Primary, Secondary, Ghost and Destructive styles, with a 44×44 interaction target around a 32, 44 or 48px visual. |

## Inputs + Selection · Core

| Component | What it is |
| --- | --- |
| [`TextInput`](TextInput.md) | Single-line text field with label, optional helper, error and success messaging — Standard, Password, Search and Numeric kinds. |
| [`Checkbox`](Checkbox.md) | Binary or mixed selection with a 20px box inside a 44×44 target, plus a body-size label. |
| [`Radio`](Radio.md) | Single choice within a group, with a 20px ring inside a 44×44 target. |
| [`Switch`](Switch.md) | Immediate on/off setting, in the Web (44×24) and iOS (51×31) geometries, with a 44px interaction target. |
| [`TextArea`](TextArea.md) | Multi-line text entry with label, requirement, helper, error and success — one anatomy for the Web, iOS and Android adapters. |
| [`PickerField`](PickerField.md) | Field that opens a native picker or menu and shows the chosen value. |
| [`DateTimeHost`](DateTimeHost.md) | Native-first date / time host: Date, Time or Date and time, each Empty, Filled, Error, Disabled or Read only. |
| [`Slider`](Slider.md) | Generic single-value slider, continuous or stepped, LTR or RTL — independent of playback or device state. |
| [`FormMessage`](FormMessage.md) | Titled form feedback: Information (pending or context), Danger (input summary or failed save), Success (confirmed persistence). |
| [`FormSubmitActions`](FormSubmitActions.md) | Cancel + submit pair for forms: Default, Saving, Failed, Saved. |
| [`FormSection`](FormSection.md) | Semantic form section with fields, feedback and actions slots. |
| [`SelectionRow`](SelectionRow.md) | Whole-row choice with a persistent label and optional description, for Web, iOS and Android. |
| [`IOSTextField`](IOSTextField.md) | Apple text-entry adapter: SF Pro 17pt label, 52pt borderless background-surface field (radius-md), helper and error below. |
| [`AndroidTextField`](AndroidTextField.md) | Material outlined text field adapted to Bone Maestro roles: 56dp field, 4dp radius, floating label, Roboto, supporting text owned by the wrapper. |
| [`AndroidCheckbox`](AndroidCheckbox.md) | Material checkbox with a whole-row label target and a 48dp minimum (ra-platform-target-minimum on Android). |
| [`AndroidRadio`](AndroidRadio.md) | Material radio button with a whole-row label target and 48dp minimum. |
| [`AndroidSwitch`](AndroidSwitch.md) | Material 3 switch: 52×32dp track, 16dp thumb growing to 24dp when on, whole-row label target. |

## Labels + Data · Core

| Component | What it is |
| --- | --- |
| [`Tag`](Tag.md) | Compact pill label for categories and metadata in seven tones. |
| [`StatusBadge`](StatusBadge.md) | Outcome status shown as a dot plus a label in a bordered pill: Neutral, Success, Warning, Information, Danger. |
| [`CounterBadge`](CounterBadge.md) | Static count attached to a named item, in the seven Tag tones. |
| [`Avatar`](Avatar.md) | Static identity visual: Small 32, Medium 40, Large 64 · Initials, Image or Fallback. |
| [`Chip`](Chip.md) | Composable Input and Filter chip; Selected is independent of hover, pressed, focus and disabled. |
| [`ListRow`](ListRow.md) | List row in three kinds — Browse (opens a detail), Selection (checkbox) and Setting (switch). |
| [`ReadinessRow`](ReadinessRow.md) | Static readout for one validation outcome: Complete, Checking or Needs attention. |
| [`Card`](Card.md) | Content container in four types: Basic, Interactive, Selected and the opt-in Poster. |
| [`TableHeaderCell`](TableHeaderCell.md) | Sortable column header: None (↕), Ascending (↑), Descending (↓) or Not sortable. |
| [`TableCell`](TableCell.md) | Data cell with Start or End alignment, wrapping text or any composition (badge, avatar, action). |
| [`TableRow`](TableRow.md) | Table row with its own selection checkbox and a cells slot. |
| [`DataTable`](DataTable.md) | Composed data table: caption, summary, search toolbar, bulk actions, sortable header with select-all, rows and pagination — in Table and Compact presentations… |
| [`FileRow`](FileRow.md) | Per-file acquisition, validation and durable-add row with nine distinct states. |

## Navigation · Core

| Component | What it is |
| --- | --- |
| [`SidebarItem`](SidebarItem.md) | Sidebar destination in Expanded or Collapsed display: Default, Hover, Active, Focus, Disabled. |
| [`Sidebar`](Sidebar.md) | Compatibility sidebar preset: Expanded (280) or Collapsed (76) × Normal, Live or Performance mode. |
| [`TopNavigation`](TopNavigation.md) | Compatibility top bar: Desktop or Mobile × Normal, Live or Performance mode. |
| [`ChoiceItem`](ChoiceItem.md) | Single tab or segment for ChoiceGroup. |
| [`ChoiceGroup`](ChoiceGroup.md) | Arbitrary-count Tabs or Segments group with roving focus (Left/Right arrows). |
| [`Tabs`](Tabs.md) | Compatibility three-tab preset (Overview / Activity / Settings) over ChoiceGroup. |
| [`SegmentedControl`](SegmentedControl.md) | Compatibility fixed-three segmented preset (Day / Week / Month) over ChoiceGroup segments. |
| [`Breadcrumbs`](Breadcrumbs.md) | Desktop trail and mobile back-context. |
| [`Pagination`](Pagination.md) | Page numbers on desktop, a "Page n of m" summary on mobile; Previous and Next stay as targets. |
| [`DestinationItem`](DestinationItem.md) | Building block for primary destinations in Tab, Row or Rail presentation. |
| [`NavigationShell`](NavigationShell.md) | Generic navigation host — Bottom bar, Sidebar, Rail or Top bar — independent of route names and count. |
| [`PrimaryNavigation`](PrimaryNavigation.md) | Canonical four-destination navigation (Connect, Control, Library, Scenes) placed for iPhone tabs, iPad sidebar, Web sidebar or Web top. |
| [`AdaptiveDestination`](AdaptiveDestination.md) | Responsive list destination: LTR or RTL × default or enlarged text × selected × focus. |
| [`AdaptiveMenu`](AdaptiveMenu.md) | Content-fit destination menu, companion to primary navigation for narrow or large-text layouts. |
| [`AndroidNavigation`](AndroidNavigation.md) | Material 3 navigation bar (compact) or rail (expanded) with the four stable destinations and paired outline / filled icons. |
| [`IOSNavigationBar`](IOSNavigationBar.md) | iOS navigation bar reference: inline or large title, with or without back. |
| [`IOSBackButton`](IOSBackButton.md) | iOS back behavior reference: Standard (chevron + previous title) or Compact (chevron only, previous title as accessible name). |
| [`IOSTabBar`](IOSTabBar.md) | iOS tab bar reference (compatibility: Home / Library / Performance). |
| [`IOSToolbar`](IOSToolbar.md) | iOS bottom toolbar reference: Standard (Share, Add, More) or Editing (Delete, Duplicate, Done) context. |
| [`IOSSegmentedControl`](IOSSegmentedControl.md) | iOS segmented control reference. |
| [`IOSListItem`](IOSListItem.md) | iOS list navigation row: Disclosure, Value or None accessory. |
| [`IOSSheet`](IOSSheet.md) | iOS sheet with navigation bar: Medium or Large detent. |

## Feedback + Overlays · Core

| Component | What it is |
| --- | --- |
| [`Alert`](Alert.md) | Page-level message on a solid tone fill: Information, Success, Warning, Danger, Live. |
| [`Toast`](Toast.md) | Transient confirmation on surface-raised with a 1px tone border and a filled tone glyph. |
| [`InlineStatus`](InlineStatus.md) | Compact local status: a filled tone label (dot + word) followed by a sentence-readable detail. |
| [`Snackbar`](Snackbar.md) | Transient bottom-surface feedback: Message, Action (one text action such as Undo) or Loading (spinner + step count, action-primary border). |
| [`ProgressBar`](ProgressBar.md) | Linear progress: Large (8px) or Small (4px) × Determinate, Complete, Indeterminate, Paused. |
| [`LoadingSpinner`](LoadingSpinner.md) | Indeterminate loading indicator: Small 16, Medium 24, Large 32, with or without a label. |
| [`SkeletonLoader`](SkeletonLoader.md) | Placeholder structure that mirrors final content: Row, Card or Table. |
| [`SpotIllustration`](SpotIllustration.md) | Geometric spot for empty states: No data (creative), No results (information), Offline (warning), Completed (success). |
| [`EmptyState`](EmptyState.md) | Empty, no-results, offline or completed state: spot + title + description + actions. |
| [`ConnectionStatus`](ConnectionStatus.md) | Connection indicator: Live (mutation-live, optional PULSE) or Connected (mutation-connected, static). |
| [`Dialog`](Dialog.md) | Modal task or confirmation: Compact (420) or Large (620), optional illustration, Default or Destructive tone. |
| [`Tooltip`](Tooltip.md) | Non-interactive description that opens on hover and keyboard focus and never receives focus. |
| [`Popover`](Popover.md) | Non-modal anchored surface with title, description, content, close control and optional action; dismisses on click outside. |
| [`MenuItem`](MenuItem.md) | Composable command row: Checked, Focused, Interaction and Tone are independent. |
| [`MenuSurface`](MenuSurface.md) | Anchored or context command surface with a variable items list. |
| [`DropdownMenu`](DropdownMenu.md) | Compatibility preset of performance commands over MenuSurface (group label, Open, Rename, Duplicate, Live mode check, Delete). |
| [`ContextMenu`](ContextMenu.md) | Compatibility preset of cue commands over MenuSurface (Cut, Copy, Paste after, Delete). |
| [`BottomSheet`](BottomSheet.md) | Responsive bottom sheet: drag indicator, title, description, content, actions; Medium or Large detent, optional illustration. |
| [`SheetChoice`](SheetChoice.md) | Selectable choice row used inside BottomSheet. |

## Performance · Performance pack

| Component | What it is |
| --- | --- |
| [`SceneCard`](SceneCard.md) | Scene tile in five variants — Compact, Standard, Featured, Live, Stacked — and six states: Default, Hover, Selected, Playing Live, Disabled, Unavailable. |
| [`ShowCard`](ShowCard.md) | A show is a playlist of scenes. A night runs several shows in order (warm-up, main set, encore), and ShowCard is how each one is listed, started and followed. Three variants (Row, Tile, Featured) and seven states:… |
| [`PerformanceControl`](PerformanceControl.md) | The stage command surface: Offline, Ready, Starting, Live, Fault — with a guarded emergency stop. |
| [`MediaTransport`](MediaTransport.md) | Preview-only Play / Pause / Stop with explicit status copy: Idle, Playing, Paused, Loading, Ended, Unavailable, Error. |
| [`MediaPosition`](MediaPosition.md) | Position readout with optional seek: Default, Hover, Focused, Dragging, Read only, Unavailable. |
| [`MediaVolume`](MediaVolume.md) | Preview volume with Mute that remembers the previous value: Default, Focused, Muted, Unavailable. |
| [`AudioRow`](AudioRow.md) | Responsive audio preview row — Compact (320+) or Wide (600+) — across Idle, Playing, Paused, Loading, Ended, Unavailable, Error. |
| [`AudioTrackRow`](AudioTrackRow.md) | Compatibility single-line media row (Audio Track / Audio Row): play, title + format metadata, decorative waveform, time and state badge. |
| [`PreviewSurface`](PreviewSurface.md) | Isolated audio preview surface: eyebrow, AudioRow, MediaVolume and the scope note. |
| [`NextCue`](NextCue.md) | The next stage cue — Ready, Pending or Blocked — in Compact or Wide layout. |
| [`MiniPlayer`](MiniPlayer.md) | Pulse Puck mini player for audio preview: Compact or Wide × Idle, Playing, Paused, Loading, Ended, Unavailable, Error. |

## iOS + iPadOS Performance · Performance pack

| Component | What it is |
| --- | --- |
| [`IOSDevice`](IOSDevice.md) | Preview frame for the iOS and iPadOS adapters: screen corners, status bar, safe areas and the home indicator. Not shipped in product UI — it exists so every iOS preview shows real proportions. |
| [`IOSList`](IOSList.md) | IOSList |
| [`IOSSceneRow`](IOSSceneRow.md) | One scene in a show's set list, as a native iOS / iPadOS list row. It shows the cue, title, status, time and (Live) progress, and offers one safe action. It never carries a stop control: while a show runs, IOSLiveBar… |
| [`IOSShowRow`](IOSShowRow.md) | One show — a playlist of scenes — in tonight's lineup, as a native iOS / iPadOS list row. Tapping the row pushes the show's scene list (IOSSceneRow). Ending a show happens in IOSLiveBar, never in the row. |
| [`IOSLiveBar`](IOSLiveBar.md) | The live bar is the one place to run a show: GO fires the standby scene, and Stop scene / End show stop it. Rows stay calm and tappable; these controls never move and never scroll away. |
| [`IOSLiveActivity`](IOSLiveActivity.md) | The show, at a glance, while the phone is locked or another app is open: Lock Screen, and Dynamic Island compact, minimal and expanded. |
| [`IOSMenuBar`](IOSMenuBar.md) | The iPadOS menu bar for Bone Maestro. On iPad every app gets a menu bar (swipe down from the top or move the pointer there); the Performance menu puts every live action in one place. |
| [`IOSAlert`](IOSAlert.md) | Native alerts and confirmation dialogs. Use an alert for a short, important message that needs a decision now. Use a confirmation dialog to confirm a destructive or consequential choice the person just started. On… |
| [`IOSPermissionPrimer`](IOSPermissionPrimer.md) | A full-screen explanation shown right before iOS asks for a permission, and the recovery screen after the person said no. Bone Maestro needs Bluetooth and the local network to reach stage devices, and notifications… |
| [`IOSDeviceRow`](IOSDeviceRow.md) | One stage device in a list: name, state, signal and where it is. The row keeps the system's state ladder honest: Connected ≠ Ready ≠ Armed ≠ Live. |
| [`IOSPairingSheet`](IOSPairingSheet.md) | The sheet for adding a stage device: find it, connect, validate output, done. It follows the state ladder, so a device isn't called Ready until its output is checked. |
| [`IOSConnectionBanner`](IOSConnectionBanner.md) | A banner for transport problems, shown under the navigation bar while the rest of the app keeps working. It never covers the live bar, and it never blocks GO or Stop. |
| [`IOSSignal`](IOSSignal.md) | IOSSignal |

## Signature Layer · Bone Maestro theme

| Component | What it is |
| --- | --- |
| [`MutationRail`](MutationRail.md) | Rail geometry primitive for the five mutation levels: M0 Dormant, M1 Ready, M2 Armed, M3 Live, M4 Critical. |
| [`MutationRailRow`](MutationRailRow.md) | Specimen row pairing a mutation level with its status badge, rail and usage rule. |
| [`MutationLevel`](MutationLevel.md) | How expressive a context may be: M0 Clean, M1 Signal, M2 Active, M3 Performance, M4 Campaign. |
| [`MaestroSlash`](MaestroSlash.md) | The Maestro Slash: a controlled directional delimiter in Micro, Section, Hero and Motion variants. |
| [`BoneSync`](BoneSync.md) | Bone Sync makes energy legible: segments, joints, gaps and amplitude along a signal line — Micro, Status, Audio Track, Performance and Hero signals. |
| [`SpecimenLabel`](SpecimenLabel.md) | Production equipment markings for scene, device, signal, cue and live metadata — Micro, Inline, Card, Panel, Editorial. |

## Patterns · Core

| Component | What it is |
| --- | --- |
| [`CollectionBrowser`](CollectionBrowser.md) | Controlled collection composition: search, filter chips, results summary, record rows and feedback — Results, Empty, No results, Loading, Error. |
| [`CollectionDetail`](CollectionDetail.md) | Detail panel for the selected record: Selected, No selection, Unavailable. |
| [`WorkspaceListDetail`](WorkspaceListDetail.md) | List–detail workspace: Expanded (list and detail side by side), Compact list, or Compact detail with back navigation. |
| [`FilesAcquisition`](FilesAcquisition.md) | Browse-first file acquisition: Native or Web × Empty, Review, Working, Partial, Complete, Cancelled. |
| [`ContentMediaDetail`](ContentMediaDetail.md) | Content-heavy detail whose media state — Ready, Loading, Unavailable, Error — is independent of the article. |

## Library Workspace · Core

| Component | What it is |
| --- | --- |
| [`LibraryCollection`](LibraryCollection.md) | Library Workspace task block: the scene collection (Compact or Wide × Results, Empty, No results, Loading, Error) built on CollectionBrowser with Ready / Draft… |
| [`LibraryInspector`](LibraryInspector.md) | Library Workspace inspector for the selected scene: Selected, No selection, Unavailable. |

## Audio Import + Validation · Core

| Component | What it is |
| --- | --- |
| [`AudioImport`](AudioImport.md) | User-confirmed audio import with separate validation and durable-save outcomes: Empty, Validating, Ready, Partial, Rejected, Unavailable, Duplicate, Importing,… |
| [`WebAcquisition`](WebAcquisition.md) | Web-only drop target around the Audio Import flow: Default, Drag active, Focused, Rejected. |

## Iconography · Core

| Component | What it is |
| --- | --- |
| [`Icon`](Icon.md) | Bone Maestro product glyphs as single-ink inline SVG that inherits currentColor. |
| [`Glyph`](Glyph.md) | Lucide-compatible utility glyphs (2px stroke, round caps and joins, currentColor) for the web resolver, alongside the authored product glyphs in Icon. |

## Android Core · Core

| Component | What it is |
| --- | --- |
| [`AndroidButton`](AndroidButton.md) | Material 3 button in Filled, Outlined and Text appearances with a 48dp target envelope. |
| [`AndroidFilterChip`](AndroidFilterChip.md) | Material 3 filter chip: 32dp chip in a 48dp target; Selected independent of interaction. |
| [`AndroidSearch`](AndroidSearch.md) | Material 3 search: collapsed Bar (56dp, fully rounded, surface-raised) that opens a full-screen Expanded view with query field and results. |
| [`AndroidListItem`](AndroidListItem.md) | Material 3 list item: the whole row is one 48dp+ target; selection independent of press, focus and disabled. |
| [`AndroidDialog`](AndroidDialog.md) | Native Material basic dialog: Confirmation or Destructive intent. |
| [`AndroidAppBar`](AndroidAppBar.md) | Material 3 small top app bar: Default (flat) or Scrolled (on-scroll surface). |
| [`AndroidBottomSheet`](AndroidBottomSheet.md) | Material 3 bottom sheet content: Standard or Modal. |
