# Reanimation Design System — guidelines

**Reanimation Design System** is a dark-first web and iOS product system: **good bones, clear rules**. Structured product UI carries the work; a selective **Mutation Layer** of radioactive color, glow and poster type marks the moments that matter — live, selected, connected, creative, special. Its spirit is *controlled chaos*: underground punk-comic energy, bounded by a measurable production contract.

Three principles decide every call:

1. **Structure first.** Core UI stays clear, systematic and implementation-ready.
2. **Mutate with intent.** Expressive treatments belong to meaningful states, not every surface. Mutation should occupy roughly 10–20% of a product surface.
3. **Accessible by default.** AA contrast, visible focus, keyboard logic, 44pt targets, reduced motion.

Reuse before invention: reuse tokens → reuse styles → reuse components → create a primitive only when the system cannot express the need.

## Layers
Reanimation was born in the **Bone Maestro** live-performance app and is built to carry more products. It is organized in three layers; today they ship together in one bundle.

- **Core** — the token architecture (`ra-core-*` → `ra-semantic-*` → `ra-component-*`), spacing, radii, motion, accessibility rules and the everyday components: actions, inputs, labels and data, navigation, feedback and overlays, patterns, and the iOS and Android adapters. Product-neutral.
- **Bone Maestro theme** — the first theme: the Ink / Bone / Toxic / Magenta / Cyan palette and its Dark and Light roles, Geist and Barlow Condensed type, glow effects, the Mutation Layer and signature components (Mutation Rail, Bone Sync, Specimen Labels, Maestro Slash), the logos, icons and illustration cast. The palette values in this system are Bone Maestro's.
- **Performance pack** — live-show control for products that run shows: ShowCard, SceneCard, PerformanceControl, NextCue, media transport and audio rows, and the native IOSSceneRow, IOSShowRow, IOSLiveBar (Standby + GO), IOSLiveActivity and IOSMenuBar.

A new product reuses Core, brings its own theme by remapping the semantic roles, and adds a domain pack only if it needs one. Never fork a Core component to restyle it — change the theme's roles.

## Content fundamentals

- **Voice:** a stage technician with taste — precise, calm under pressure, a little dangerous in the margins. Product copy is plain; attitude lives in posters, empty states and campaign art.
- **Casing:** sentence case for UI labels, buttons, fields and messages ("Start calibration", "View session details", "Last synchronized 2 minutes ago"). UPPERCASE is reserved for `web-label-s` overlines and status words ("DEVICE CONNECTED") and for the Expressive display/kicker styles ("GOOD BONES. CLEAR RULES.", "COLOR WITH A JOB", "DEPTH, NOT NOISE").
- **Person:** address the operator as *you*; the product never says *I*.
- **State copy names the subject, the state, the impact and the next action:** "UNSTABLE — Packets are dropping; output continues. Check the stage-left cable." Emergency: "Emergency. Output protection engaged. Acknowledge and isolate the route."
- **Errors** identify the field, explain the problem and give recovery ("Enter a valid value.").
- **Specimen Labels** use exactly `KEY // VALUE` with one space each side and no trailing punctuation: `BONE SYNC // LOCKED → OUTPUT A`, `SESSION_ID  BM-1989  ·  STATUS  CONNECTED`.
- **No emoji.** No decorative horror words in functional UI; no gore anywhere.

## Visual foundations

### Color — color with a job
Bind product UI to roles, never to raw primitives. The token path is **core → semantic → component**: `ra-core-color-*` primitives (Ink, Bone, Toxic, Slime, Magenta, Purple, Orange, Cyan, Blood) feed `ra-semantic-color-*` roles that switch between **Dark** (primary) and **Light**; `ra-component-*` tokens alias the semantic roles for buttons, fields and status.

- **Ground:** `ra-semantic-color-background-canvas` holds the screen; `-surface` holds content; `-surface-raised` holds elevated content; `-interactive` marks a control container; `-subtle` recesses.
- **Content:** `ra-semantic-color-text-primary` for key content, `-text-secondary` for support, `-text-muted` for lowest emphasis (4.56:1 on surface in Dark — never below 12px). `-text-danger` for error copy; `status-danger` is the indicator, not text.
- **Action:** Toxic Green owns primary action — `ra-semantic-color-action-primary` with `-action-on-primary` (16.08:1 Dark, 7.08:1 Light). Destructive and accessible-expressive fills pair with `ra-semantic-color-content-on-dark-accent`, which stays light in both themes.
- **Borders are not interchangeable:** `border-default` and `border-subtle` are decorative; essential field and control boundaries use `ra-semantic-color-border-strong` (3.01:1 Dark, 3.38:1 Light on surface).
- **Status = icon + text + color, never color alone.** Success `status-success` (slime), warning `status-warning` (orange), danger `status-danger` (blood), information `status-information` (cyan).
- **Mutation roles:** `mutation-live` (toxic) = active performance; `-selected` (magenta) = current selection; `-connected` (cyan) = link established; `-creative` (purple) = creation tools; `-special` (orange) = rare signature emphasis. Toxic is reserved for validated readiness, armed commitment and live signals — never for Connected or generic success. `mutation-live` is a fill and indicator role: in Light it drops to 3.6–4.0:1, so live text, and any fill that carries text, uses `action-primary` (the same toxic in Dark, deep olive in Light).
- Orange stays an accent. A bright primitive is not automatically safe for text or a filled button.

### Type
- **Geist** (`--font-sans`) carries all product UI: display, headings, body, labels, controls, navigation. **Geist Mono** (`--font-mono`, `web-mono`) is for timing data, device IDs, logs and code only.
- Web scale: `web-display-xl` 72/72 · `web-display-l` 56/58 · `web-heading-xl` 40/44 · `-l` 32/38 · `-m` 24/30 · `-s` 20/26 · `web-body-l` 18/28 · `-m` 16/24 (default) · `-s` 14/20 · `web-label-l` 16/20 · `-m` 14/18 (controls) · `-s` 12/16 SemiBold (badges, overlines).
- **iOS** maps the same roles to SF Pro Dynamic Type categories (`ios-*` styles are reference sizes: ship `Font.body`, `.title2`… and never fixed points). Android uses Roboto (`android-*`).
- **Expressive** poster type is Barlow Condensed Black, uppercase, 96/82, −2% tracking (`expressive-display`) with a Bold kicker. Use 1–4 short words for branded moments only — never navigation, controls, body copy, data or accessibility-critical information. Always keep one fully opaque, readable face layer.
- Let text wrap and containers hug content; no fixed-height text containers.

### Space and layout
- 4pt primitives with an 8pt rhythm: `ra-core-space-1` (4) through `ra-core-space-24` (96). Named steps only, never in-between values.
- Components use 16 internally (`space-4`), compact content 8 (`space-2`) and micro details 4 (`space-1`); major groups breathe at 32 (`space-8`); page-level spacing starts at 48 (`space-12`).
- Controls: `ra-core-size-control-sm` 32 · `-md` 44 (default) · `-lg` 48 · `-xl` 56. Interaction targets stay at least `ra-core-size-interaction-min` (44×44); enlarge the hit region, not the icon. Icons: 16 / 20 / 24.
- Web layout is range-based (Compact, Medium, Large, Wide); breakpoints describe available space, not devices. Gutter `ra-platform-content-gutter` (24 web, 16 iPhone, 24 iPad, 16 Android). iOS anchors to safe areas with 16pt leading/trailing guides, 20pt when width allows.

### Shape
Six radii and nothing between: `ra-core-radius-xs` 4 · `-sm` 8 · `-md` 12 · `-lg` 16 · `-xl` 24 · `-pill` 999. Use 12–16 for most cards, controls, fields and containers; 4–8 for compact or technical details; 24 and pill are deliberate accents (tags, badges, switches). Four shape concepts: **Standard** carries the product; **Poster** and **Sticker** (heavy outline, hard offset) make campaigns; **Mutated** adds restrained organic irregularity to one focal surface. One expressive focal surface per view; standard controls everywhere else.

### Depth and effects — depth, not noise
- Elevation explains hierarchy: `ra-elevation-0` flat · `-1` raised cards · `-2` menus, popovers, sheets · `-3` dialogs. In dark mode shadows are easy to miss: always pair depth with a surface or border change.
- Expressive effects create a moment: `ra-effect-graphic-shadow` (hard 6px comic offset) for stickers and posters; `ra-effect-toxic-glow-subtle`/`-medium` for a limited Live, Connected or Active accent; `ra-effect-magenta-glow-subtle` for Selected; `ra-effect-print-offset` for display type and artwork. Halftone and grain belong to illustration and large expressive surfaces: add `ra-print-texture` to a hero, cover or empty-state ground for the screen-print look (a toxic halftone graded into the top-right corner plus print grain; `--ra-texture-halftone` and `--ra-texture-grain`). It is decorative only, sits behind content, never goes on dense controls, and turns off with Increase Contrast.
- Keep effects away from small text and dense operational controls. Glows never replace focus or status labels.

### Focus and states
- Keyboard focus is a solid `ra-semantic-color-focus-ring` outline outside the control (cyan in Dark, Bone 950 in Light; at least 7.19:1 Dark and 9.67:1 Light on canvas, surface and interactive grounds): 2px with a 2px gap on buttons, 1px with a 3px gap around 44px targets. Keep focus distinct from selection.
- Hover is pointer-only (`-hover` roles); pressed is immediate feedback (`-pressed` roles); disabled uses `ra-component-button-background-disabled` / `-content-disabled` at 72% opacity. Fields focus with a 2px `action-primary` border and the `ra-focus-glow` halo.

### Motion
A compact duration scale (`ra-core-motion-instant` 80 · `-fast` 120 · `-standard` 180 · `-expressive` 240 · `-hero` 360 ms) and seven named behaviors — CUE, WAKE, LOCK, PULSE, MUTATE, KILL, POSSESS — chosen by intent, each with a reduced-motion fallback. See the Motion section.

### Touch, iPad and iPhone
- **44pt hit areas everywhere.** On any touch screen, compact controls (small buttons, segments, pagination, table sort headers, breadcrumbs, chips, clear buttons) grow an invisible 44pt hit area; their painted size does not change. Android adapters get 48dp. Text fields are tappable across their full height.
- **Hover never sticks.** Every hover style lives in `@media (any-hover: hover)`, so a finger tap never leaves a tint behind, while an iPad with a trackpad still gets hover.
- **Layouts follow their container, not the device.** Cards, rows, navigation and list/detail layouts use container queries, so they hold up in a 320pt Slide Over panel, a half or two-thirds split, Stage Manager windows and full screen.
- **Holds are touch-proof.** Hold-to-confirm controls capture the finger, ignore drift, block the long-press menu and text selection, and fire a haptic where the platform allows.
- **Safe areas.** Bottom bars and sheets pad to `env(safe-area-inset-bottom)` (use `viewport-fit=cover`).
- **Portrait and landscape.** Width comes from container queries, so a rotation is just a new width. Height is handled too: dialogs, popovers, menus and sheets never grow taller than the screen and scroll inside, large minimum heights cap to the viewport (`dvh`), and on short landscape screens (under 500pt tall) decorative artwork shrinks first. Native: a landscape iPhone hides the status bar and insets content for the Dynamic Island; the expanded live sheet goes side by side; iPad portrait collapses the sidebar.
- **Native iOS / iPadOS 26–27 conventions.** Liquid Glass only on the floating navigation layer (tab bar, live bar, menus) — never rows or content — with a soft scroll-edge fade beneath; Reduce Transparency and Increase Contrast fall back to opaque surfaces with solid edges. iPhone uses the floating capsule tab bar with the live bar as its bottom accessory; iPad uses a sidebar-adaptable split view, toolbars that wrap around the window controls, a sidebar toggle (no hamburger menus) and a full menu bar holding every live action.
- **Show control: Standby + GO.** The next scene waits in Standby, named on the live bar; GO fires it with one tap. Stopping takes a 0.75-second hold. Nothing consequential can fire from the Lock Screen or the Dynamic Island.
- **Native apps** use the iOS adapters with `sizeClass`: `compact` on iPhone, `regular` on iPad (full-width bars, the floating top tab bar, form sheets, split view with IOSShowRow in the sidebar and IOSLiveBar along the detail column).

## Iconography
- One semantic name per meaning, resolved per platform: **SF Symbols** (Regular, hierarchical when state needs emphasis) on iOS; **Lucide-compatible geometry** (round caps and joins, `currentColor`) on web. Never reuse an unrelated glyph because it looks similar.
- Four approved sizes with the icon centered in a larger interaction container; never scale one master. Keep primary geometry within 87.5% of the box.
- Outline is the default for utility, navigation, CRUD and transfer; filled marks selected destinations, transport controls and high-salience warnings. Change the container or foreground color between states, never the glyph or stroke.
- Mirror chevrons and back/forward arrows in RTL; never mirror media, status, transfer or trademark glyphs.
- Name icon-only buttons by action; decorative icons are hidden from assistive tech. Functional icons never get bones, blood, spikes or other horror detail.
- The system's own glyphs ship as `assets/Icons/*` and as `RA.Icon`. Every icon name's SF Symbol is listed in `native/ios/sf-symbols.md` (and as `RAIcon` in Swift). Bluetooth on iOS ships as the approved custom vector `custom.bluetooth`.

## Brand marks and illustration
- The mark is the **Conductor baton + bone** X with a fluorescent burst (`assets/Logos/app-icon-*`). The stacked lockup sets "BONE MAESTRO" in Barlow Condensed Black under the mark, in Bone 50 — use it on dark grounds only.
- Illustration is one authored universe: underground comic anatomy, late-night gig-poster urgency, fluorescent screen-print economy, stage-console precision. Draw the monster first; prove the silhouette in black; add fluorescent ink with intent; texture last. Every image must still read with noise, glow and attitude removed.
- Cast: **The Maestro** (skeletal conductor, strict tailoring, one decisive baton line — never a grinning host), **The Tech** (retro lab monster with a mechanical lens), **The Roadie** (dead-serious zombie crew worker). No gore, no mascot drift, no lovable-sidekick energy.
- Scales: **Micro** symbols for cues and metadata, **Spot** marks for empty states and setup steps, **Character** and **Scene** art for heroes and campaigns. Static, sparks, halftone and cables may leave the frame; eyes, skulls, hands, tools and the defining action may not.

## Components
All components live on `window.RA` and read only `--ra-*` tokens. Reach for them in this order — reuse before invention:

- **Actions:** Button, IconButton.
- **Inputs + selection:** TextInput, TextArea, PickerField, DateTimeHost, Slider, Checkbox, Radio, Switch, SelectionRow, FormSection, FormMessage, FormSubmitActions.
- **Labels + data:** Tag, StatusBadge, CounterBadge, Avatar, Chip, Card, ListRow, ReadinessRow, DataTable (TableHeaderCell, TableRow, TableCell), FileRow.
- **Navigation:** PrimaryNavigation and NavigationShell (DestinationItem), Sidebar (SidebarItem), TopNavigation, ChoiceGroup (ChoiceItem; Tabs and SegmentedControl presets), Breadcrumbs, Pagination, AdaptiveMenu (AdaptiveDestination).
- **Feedback + overlays:** Alert, Toast, InlineStatus, Snackbar, ProgressBar, LoadingSpinner, SkeletonLoader, EmptyState (SpotIllustration), ConnectionStatus, Dialog, Popover, Tooltip, MenuSurface (MenuItem; DropdownMenu and ContextMenu presets), BottomSheet (SheetChoice).
- **Performance:** PerformanceControl, ShowCard (a show is a playlist of scenes; a night runs several), SceneCard, NextCue, MediaTransport, MediaPosition, MediaVolume, AudioRow, AudioTrackRow, PreviewSurface, MiniPlayer.
- **Signature layer:** MutationRail, MutationRailRow, MutationLevel, MaestroSlash, BoneSync, SpecimenLabel.
- **Patterns + blocks:** CollectionBrowser, CollectionDetail, WorkspaceListDetail, FilesAcquisition, ContentMediaDetail, LibraryCollection, LibraryInspector, AudioImport, WebAcquisition.
- **iOS + iPadOS performance:** IOSSceneRow, IOSShowRow, IOSLiveBar (Standby + GO, Stop scene and End show — compact on iPhone, regular on iPad), IOSLiveActivity (Lock Screen and Dynamic Island), IOSMenuBar (iPadOS menu bar), with IOSList and the IOSDevice preview frame.
- **iOS + iPadOS system:** IOSAlert (alerts and confirmation dialogs), IOSPermissionPrimer (Bluetooth, local network, notifications), IOSPairingSheet, IOSDeviceRow (with IOSSignal) and IOSConnectionBanner. Device pairing, device rows and the banner belong to the Performance pack.
- **Reference screens (iOS + iPadOS):** ScreenTonight, ScreenShowDetail, ScreenLive, ScreenLibrary, ScreenDevices, ScreenSettings — full iPhone and iPad layouts with their composition and SwiftUI structure. Start native work here.
- **SwiftUI:** `native/ios/` holds `ReanimationTokens.swift` (RAColor, RASpace, RARadius, RAFont, RAMotion, RAHold, RAEffect), `ReanimationIcons.swift` (RAIcon) and `sf-symbols.md`, generated from the tokens. See `native/ios/README.md`.
- **Platform adapters:** iOS (IOSNavigationBar, IOSBackButton, IOSTabBar, IOSToolbar, IOSSegmentedControl, IOSListItem, IOSSheet, IOSTextField) and Android (AndroidButton, AndroidFilterChip, AndroidSearch, AndroidListItem, AndroidDialog, AndroidAppBar, AndroidBottomSheet, AndroidNavigation, AndroidTextField, AndroidCheckbox, AndroidRadio, AndroidSwitch) document color, spacing and state roles for SwiftUI and Compose; ship the native controls.
- **Icons:** Icon (authored product glyphs) and Glyph (Lucide-compatible utility glyphs). Components accept either name wherever an icon is expected.

## Not synced yet
Token usage notes and component guidance paraphrase the descriptions in the Figma file. Still outside this system:
- **Modes the page cannot hold:** BM / Platform values for iOS, iPadOS and Android (listed in each platform token's note) and the Icon context modes (Primary, Accent, Disabled).
- **Layout:** the four web layout grid styles (Compact, Medium, Large, Wide).
- **Android Material sources:** the Android adapters recreate Material 3 geometry with Bone Maestro roles; the file's linked Material instances carried overrides that could not be read, so compare them against the Figma source before shipping.
- **Legacy compatibility** families (page 98) and the screen-level pages (13 Web, 14 iOS, 14a iPad, 17 Examples) are not components here.
- **Fonts:** Geist, Geist Mono and Barlow Condensed load from Google Fonts; SF Pro and Roboto are platform fonts. No font files are bundled.
