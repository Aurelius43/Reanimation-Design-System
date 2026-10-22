/* @ds-bundle: {"format":4,"namespace":"RA","components":[{"name":"Button"},{"name":"IconButton"},{"name":"TextInput"},{"name":"Checkbox"},{"name":"Radio"},{"name":"Switch"},{"name":"Tag"},{"name":"StatusBadge"},{"name":"Icon"},{"name":"Glyph"},{"name":"TextArea"},{"name":"PickerField"},{"name":"DateTimeHost"},{"name":"Slider"},{"name":"FormMessage"},{"name":"FormSubmitActions"},{"name":"FormSection"},{"name":"SelectionRow"},{"name":"IOSTextField"},{"name":"AndroidTextField"},{"name":"AndroidCheckbox"},{"name":"AndroidRadio"},{"name":"AndroidSwitch"},{"name":"CounterBadge"},{"name":"Avatar"},{"name":"Chip"},{"name":"ListRow"},{"name":"ReadinessRow"},{"name":"Card"},{"name":"TableHeaderCell"},{"name":"TableCell"},{"name":"TableRow"},{"name":"DataTable"},{"name":"FileRow"},{"name":"SidebarItem"},{"name":"Sidebar"},{"name":"TopNavigation"},{"name":"ChoiceItem"},{"name":"ChoiceGroup"},{"name":"Tabs"},{"name":"SegmentedControl"},{"name":"Breadcrumbs"},{"name":"Pagination"},{"name":"DestinationItem"},{"name":"NavigationShell"},{"name":"PrimaryNavigation"},{"name":"AdaptiveDestination"},{"name":"AdaptiveMenu"},{"name":"AndroidNavigation"},{"name":"IOSNavigationBar"},{"name":"IOSBackButton"},{"name":"IOSTabBar"},{"name":"IOSToolbar"},{"name":"IOSSegmentedControl"},{"name":"IOSListItem"},{"name":"IOSSheet"},{"name":"Alert"},{"name":"Toast"},{"name":"InlineStatus"},{"name":"Snackbar"},{"name":"ProgressBar"},{"name":"LoadingSpinner"},{"name":"SkeletonLoader"},{"name":"SpotIllustration"},{"name":"EmptyState"},{"name":"ConnectionStatus"},{"name":"Dialog"},{"name":"Tooltip"},{"name":"Popover"},{"name":"MenuItem"},{"name":"MenuSurface"},{"name":"DropdownMenu"},{"name":"ContextMenu"},{"name":"BottomSheet"},{"name":"SheetChoice"},{"name":"SceneCard"},{"name":"ShowCard"},{"name":"PerformanceControl"},{"name":"MediaTransport"},{"name":"MediaPosition"},{"name":"MediaVolume"},{"name":"AudioRow"},{"name":"AudioTrackRow"},{"name":"PreviewSurface"},{"name":"NextCue"},{"name":"MiniPlayer"},{"name":"IOSDevice"},{"name":"IOSList"},{"name":"IOSSceneRow"},{"name":"IOSShowRow"},{"name":"IOSLiveBar"},{"name":"IOSLiveActivity"},{"name":"IOSMenuBar"},{"name":"IOSAlert"},{"name":"IOSPermissionPrimer"},{"name":"IOSDeviceRow"},{"name":"IOSPairingSheet"},{"name":"IOSConnectionBanner"},{"name":"IOSSignal"},{"name":"MutationRail"},{"name":"MutationRailRow"},{"name":"MutationLevel"},{"name":"MaestroSlash"},{"name":"BoneSync"},{"name":"SpecimenLabel"},{"name":"AndroidButton"},{"name":"AndroidFilterChip"},{"name":"AndroidSearch"},{"name":"AndroidListItem"},{"name":"AndroidDialog"},{"name":"AndroidAppBar"},{"name":"AndroidBottomSheet"},{"name":"CollectionBrowser"},{"name":"CollectionDetail"},{"name":"WorkspaceListDetail"},{"name":"FilesAcquisition"},{"name":"ContentMediaDetail"},{"name":"LibraryCollection"},{"name":"LibraryInspector"},{"name":"AudioImport"},{"name":"WebAcquisition"}]} */
(function () {
  var React = window.React;
  var h = React.createElement;
  var ICONS = {"add":["0 0 20 20","<g transform=\"matrix(1 0 0 1 4 9)\"><path d=\"M0 1C0 0.45 0.45 0 1 0L11 0C11.55 0 12 0.45 12 1L12 1C12 1.55 11.55 2 11 2L1 2C0.45 2 0 1.55 0 1L0 1Z\" fill=\"currentColor\"/></g><g transform=\"matrix(1 0 0 1 9 4)\"><path d=\"M0 1C0 0.45 0.45 0 1 0L1 0C1.55 0 2 0.45 2 1L2 11C2 11.55 1.55 12 1 12L1 12C0.45 12 0 11.55 0 11L0 1Z\" fill=\"currentColor\"/></g>"],"arrow-right":["0 0 20 20","<g transform=\"matrix(1 0 0 1 3 6)\"><path d=\"M0 3C-0.55 3 -1 3.45 -1 4C-1 4.55 -0.55 5 0 5L0 4L0 3ZM14 4L14.71 4.71C15.1 4.32 15.1 3.68 14.71 3.29L14 4ZM10.71 -0.71C10.32 -1.1 9.68 -1.1 9.29 -0.71C8.9 -0.32 8.9 0.32 9.29 0.71L10 0L10.71 -0.71ZM9.29 7.29C8.9 7.68 8.9 8.32 9.29 8.71C9.68 9.1 10.32 9.1 10.71 8.71L10 8L9.29 7.29ZM0 4L0 5L14 5L14 4L14 3L0 3L0 4ZM14 4L14.71 3.29L10.71 -0.71L10 0L9.29 0.71L13.29 4.71L14 4ZM14 4L13.29 3.29L9.29 7.29L10 8L10.71 8.71L14.71 4.71L14 4Z\" fill=\"currentColor\"/></g>"],"close":["0 0 24 24","<g transform=\"matrix(1 0 0 1 6 6)\"><path d=\"M0.71 -0.71C0.32 -1.1 -0.32 -1.1 -0.71 -0.71C-1.1 -0.32 -1.1 0.32 -0.71 0.71L0 0L0.71 -0.71ZM11.29 12.71C11.68 13.1 12.32 13.1 12.71 12.71C13.1 12.32 13.1 11.68 12.71 11.29L12 12L11.29 12.71ZM12.71 0.71C13.1 0.32 13.1 -0.32 12.71 -0.71C12.32 -1.1 11.68 -1.1 11.29 -0.71L12 0L12.71 0.71ZM-0.71 11.29C-1.1 11.68 -1.1 12.32 -0.71 12.71C-0.32 13.1 0.32 13.1 0.71 12.71L0 12L-0.71 11.29ZM0 0L-0.71 0.71L11.29 12.71L12 12L12.71 11.29L0.71 -0.71L0 0ZM12 0L11.29 -0.71L-0.71 11.29L0 12L0.71 12.71L12.71 0.71L12 0Z\" fill=\"currentColor\"/></g>"],"connect-filled":["0 0 24 24","<g transform=\"matrix(1 0 0 1 0 0)\"><g><g transform=\"matrix(1 0 0 1 6 2)\"><path d=\"M2 0L4 0L4 4L8 4L8 0L10 0L10 4L12 4L12 10C12 11.42 11.5 12.79 10.58 13.88C9.67 14.96 8.4 15.68 7 15.92L7 20L5 20L5 15.92C3.6 15.68 2.33 14.96 1.42 13.88C0.5 12.79 0 11.42 0 10L0 4L2 4L2 0ZM3 8L3 10L5 10L5 8L3 8ZM7 8L7 10L9 10L9 8L7 8Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></g></g></g>"],"connect-outline":["0 0 24 24","<g transform=\"matrix(1 0 0 1 0 0)\"><g><g transform=\"matrix(1 0 0 1 7 3)\"><path d=\"M3 0C3 -0.55 2.55 -1 2 -1C1.45 -1 1 -0.55 1 0L2 0L3 0ZM1 4C1 4.55 1.45 5 2 5C2.55 5 3 4.55 3 4L2 4L1 4ZM9 0C9 -0.55 8.55 -1 8 -1C7.45 -1 7 -0.55 7 0L8 0L9 0ZM7 4C7 4.55 7.45 5 8 5C8.55 5 9 4.55 9 4L8 4L7 4ZM0 4L0 3C-0.55 3 -1 3.45 -1 4L0 4ZM10 4L11 4C11 3.45 10.55 3 10 3L10 4ZM10 9L9 9L10 9ZM5 14L5 13L5 14ZM4 18C4 18.55 4.45 19 5 19C5.55 19 6 18.55 6 18L5 18L4 18ZM3 7C2.45 7 2 7.45 2 8C2 8.55 2.45 9 3 9L3 8L3 7ZM3.01 9C3.56 9 4.01 8.55 4.01 8C4.01 7.45 3.56 7 3.01 7L3.01 8L3.01 9ZM7 7C6.45 7 6 7.45 6 8C6 8.55 6.45 9 7 9L7 8L7 7ZM7.01 9C7.56 9 8.01 8.55 8.01 8C8.01 7.45 7.56 7 7.01 7L7.01 8L7.01 9ZM2 0L1 0L1 4L2 4L3 4L3 0L2 0ZM8 0L7 0L7 4L8 4L9 4L9 0L8 0ZM0 4L0 5L10 5L10 4L10 3L0 3L0 4ZM10 4L9 4L9 9L10 9L11 9L11 4L10 4ZM10 9L9 9C9 10.06 8.58 11.08 7.83 11.83L8.54 12.54L9.24 13.24C10.37 12.12 11 10.59 11 9L10 9ZM8.54 12.54L7.83 11.83C7.08 12.58 6.06 13 5 13L5 14L5 15C6.59 15 8.12 14.37 9.24 13.24L8.54 12.54ZM5 14L5 13C3.94 13 2.92 12.58 2.17 11.83L1.46 12.54L0.76 13.24C1.88 14.37 3.41 15 5 15L5 14ZM1.46 12.54L2.17 11.83C1.42 11.08 1 10.06 1 9L0 9L-1 9C-1 10.59 -0.37 12.12 0.76 13.24L1.46 12.54ZM0 9L1 9L1 4L0 4L-1 4L-1 9L0 9ZM5 14L4 14L4 18L5 18L6 18L6 14L5 14ZM3 8L3 9L3.01 9L3.01 8L3.01 7L3 7L3 8ZM7 8L7 9L7.01 9L7.01 8L7.01 7L7 7L7 8Z\" fill=\"currentColor\"/></g></g></g>"],"control-filled":["0 0 24 24","<g transform=\"matrix(1 0 0 1 0 0)\"><g><g transform=\"matrix(1 0 0 1 4 2)\"><path d=\"M0 0L2 0L2 6L0 6L0 0ZM0 10L2 10L2 20L0 20L0 10ZM7 0L9 0L9 11L7 11L7 0ZM7 15L9 15L9 20L7 20L7 15ZM14 0L16 0L16 4L14 4L14 0ZM14 8L16 8L16 20L14 20L14 8Z\" fill=\"currentColor\"/></g><g transform=\"matrix(1 0 0 1 2 7)\"><path d=\"M6 3C6 1.34 4.66 0 3 0C1.34 0 0 1.34 0 3C0 4.66 1.34 6 3 6C4.66 6 6 4.66 6 3Z\" fill=\"currentColor\"/></g><g transform=\"matrix(1 0 0 1 9 12)\"><path d=\"M6 3C6 1.34 4.66 0 3 0C1.34 0 0 1.34 0 3C0 4.66 1.34 6 3 6C4.66 6 6 4.66 6 3Z\" fill=\"currentColor\"/></g><g transform=\"matrix(1 0 0 1 16 5)\"><path d=\"M6 3C6 1.34 4.66 0 3 0C1.34 0 0 1.34 0 3C0 4.66 1.34 6 3 6C4.66 6 6 4.66 6 3Z\" fill=\"currentColor\"/></g></g></g>"],"control-outline":["0 0 24 24","<g transform=\"matrix(1 0 0 1 0 0)\"><g><g transform=\"matrix(1 0 0 1 5 3)\"><path d=\"M1 0C1 -0.55 0.55 -1 0 -1C-0.55 -1 -1 -0.55 -1 0L0 0L1 0ZM-1 5C-1 5.55 -0.55 6 0 6C0.55 6 1 5.55 1 5L0 5L-1 5ZM1 9C1 8.45 0.55 8 0 8C-0.55 8 -1 8.45 -1 9L0 9L1 9ZM-1 18C-1 18.55 -0.55 19 0 19C0.55 19 1 18.55 1 18L0 18L-1 18ZM8 0C8 -0.55 7.55 -1 7 -1C6.45 -1 6 -0.55 6 0L7 0L8 0ZM6 10C6 10.55 6.45 11 7 11C7.55 11 8 10.55 8 10L7 10L6 10ZM8 14C8 13.45 7.55 13 7 13C6.45 13 6 13.45 6 14L7 14L8 14ZM6 18C6 18.55 6.45 19 7 19C7.55 19 8 18.55 8 18L7 18L6 18ZM15 0C15 -0.55 14.55 -1 14 -1C13.45 -1 13 -0.55 13 0L14 0L15 0ZM13 3C13 3.55 13.45 4 14 4C14.55 4 15 3.55 15 3L14 3L13 3ZM15 7C15 6.45 14.55 6 14 6C13.45 6 13 6.45 13 7L14 7L15 7ZM13 18C13 18.55 13.45 19 14 19C14.55 19 15 18.55 15 18L14 18L13 18ZM0 0L-1 0L-1 5L0 5L1 5L1 0L0 0ZM0 9L-1 9L-1 18L0 18L1 18L1 9L0 9ZM7 0L6 0L6 10L7 10L8 10L8 0L7 0ZM7 14L6 14L6 18L7 18L8 18L8 14L7 14ZM14 0L13 0L13 3L14 3L15 3L15 0L14 0ZM14 7L13 7L13 18L14 18L15 18L15 7L14 7Z\" fill=\"currentColor\"/></g><g transform=\"matrix(1 0 0 1 3 8)\"><path d=\"M2 0L2 1C2.55 1 3 1.45 3 2L4 2L5 2C5 0.34 3.66 -1 2 -1L2 0ZM4 2L3 2C3 2.55 2.55 3 2 3L2 4L2 5C3.66 5 5 3.66 5 2L4 2ZM2 4L2 3C1.45 3 1 2.55 1 2L0 2L-1 2C-1 3.66 0.34 5 2 5L2 4ZM0 2L1 2C1 1.45 1.45 1 2 1L2 0L2 -1C0.34 -1 -1 0.34 -1 2L0 2Z\" fill=\"currentColor\"/></g><g transform=\"matrix(1 0 0 1 10 13)\"><path d=\"M2 0L2 1C2.55 1 3 1.45 3 2L4 2L5 2C5 0.34 3.66 -1 2 -1L2 0ZM4 2L3 2C3 2.55 2.55 3 2 3L2 4L2 5C3.66 5 5 3.66 5 2L4 2ZM2 4L2 3C1.45 3 1 2.55 1 2L0 2L-1 2C-1 3.66 0.34 5 2 5L2 4ZM0 2L1 2C1 1.45 1.45 1 2 1L2 0L2 -1C0.34 -1 -1 0.34 -1 2L0 2Z\" fill=\"currentColor\"/></g><g transform=\"matrix(1 0 0 1 17 6)\"><path d=\"M2 0L2 1C2.55 1 3 1.45 3 2L4 2L5 2C5 0.34 3.66 -1 2 -1L2 0ZM4 2L3 2C3 2.55 2.55 3 2 3L2 4L2 5C3.66 5 5 3.66 5 2L4 2ZM2 4L2 3C1.45 3 1 2.55 1 2L0 2L-1 2C-1 3.66 0.34 5 2 5L2 4ZM0 2L1 2C1 1.45 1.45 1 2 1L2 0L2 -1C0.34 -1 -1 0.34 -1 2L0 2Z\" fill=\"currentColor\"/></g></g></g>"],"expand":["0 0 24 24","<g><g transform=\"matrix(1 0 0 1 9 6)\"><path d=\"M-0.85 11.15C-1.32 11.62 -1.32 12.38 -0.85 12.85C-0.38 13.32 0.38 13.32 0.85 12.85L0 12L-0.85 11.15ZM6 6L6.85 6.85L7.7 6L6.85 5.15L6 6ZM0.85 -0.85C0.38 -1.32 -0.38 -1.32 -0.85 -0.85C-1.32 -0.38 -1.32 0.38 -0.85 0.85L0 0L0.85 -0.85ZM0 12L0.85 12.85L6.85 6.85L6 6L5.15 5.15L-0.85 11.15L0 12ZM6 6L6.85 5.15L0.85 -0.85L0 0L-0.85 0.85L5.15 6.85L6 6Z\" fill=\"currentColor\"/></g></g>"],"folder-lock":["0 0 20 20","<g><g transform=\"matrix(1 0 0 1 1.67 2.5)\"><path d=\"M6.67 15.17C7.22 15.17 7.67 14.72 7.67 14.17C7.67 13.62 7.22 13.17 6.67 13.17L6.67 14.17L6.67 15.17ZM0 12.5L-1 12.5L0 12.5ZM1.67 0L1.67 -1L1.67 0ZM4.92 0L4.92 1L4.93 1L4.92 0ZM6.33 0.75L5.49 1.3L5.5 1.31L6.33 0.75ZM7 1.75L7.84 1.2L7.83 1.19L7 1.75ZM8.39 2.5L8.39 3.5L8.39 3.5L8.39 2.5ZM15 2.5L15 1.5L15 2.5ZM16.18 2.99L15.47 3.7L16.18 2.99ZM15.67 6.25C15.67 6.8 16.12 7.25 16.67 7.25C17.22 7.25 17.67 6.8 17.67 6.25L16.67 6.25L15.67 6.25ZM14 11.67C14 12.22 14.45 12.67 15 12.67C15.55 12.67 16 12.22 16 11.67L15 11.67L14 11.67ZM11.67 10L12.67 10L11.67 10ZM10.67 11.67C10.67 12.22 11.12 12.67 11.67 12.67C12.22 12.67 12.67 12.22 12.67 11.67L11.67 11.67L10.67 11.67ZM6.67 14.17L6.67 13.17L1.67 13.17L1.67 14.17L1.67 15.17L6.67 15.17L6.67 14.17ZM1.67 14.17L1.67 13.17C1.49 13.17 1.32 13.1 1.2 12.97L0.49 13.68L-0.22 14.39C0.28 14.89 0.96 15.17 1.67 15.17L1.67 14.17ZM0.49 13.68L1.2 12.97C1.07 12.85 1 12.68 1 12.5L0 12.5L-1 12.5C-1 13.21 -0.72 13.89 -0.22 14.39L0.49 13.68ZM0 12.5L1 12.5L1 1.67L0 1.67L-1 1.67L-1 12.5L0 12.5ZM0 1.67L1 1.67C1 1.49 1.07 1.32 1.2 1.2L0.49 0.49L-0.22 -0.22C-0.72 0.28 -1 0.96 -1 1.67L0 1.67ZM0.49 0.49L1.2 1.2C1.32 1.07 1.49 1 1.67 1L1.67 0L1.67 -1C0.96 -1 0.28 -0.72 -0.22 -0.22L0.49 0.49ZM1.67 0L1.67 1L4.92 1L4.92 0L4.92 -1L1.67 -1L1.67 0ZM4.92 0L4.93 1C5.04 1 5.15 1.03 5.25 1.08L5.72 0.2L6.19 -0.69C5.79 -0.9 5.35 -1 4.91 -1L4.92 0ZM5.72 0.2L5.25 1.08C5.35 1.13 5.43 1.21 5.49 1.3L6.33 0.75L7.16 0.2C6.92 -0.17 6.58 -0.48 6.19 -0.69L5.72 0.2ZM6.33 0.75L5.5 1.31L6.17 2.31L7 1.75L7.83 1.19L7.15 0.19L6.33 0.75ZM7 1.75L6.17 2.3C6.41 2.67 6.74 2.97 7.13 3.18L7.6 2.3L8.08 1.42C7.98 1.37 7.9 1.29 7.84 1.2L7 1.75ZM7.6 2.3L7.13 3.18C7.52 3.39 7.95 3.5 8.39 3.5L8.39 2.5L8.39 1.5C8.28 1.5 8.17 1.47 8.08 1.42L7.6 2.3ZM8.39 2.5L8.39 3.5L15 3.5L15 2.5L15 1.5L8.39 1.5L8.39 2.5ZM15 2.5L15 3.5C15.18 3.5 15.35 3.57 15.47 3.7L16.18 2.99L16.89 2.28C16.39 1.78 15.71 1.5 15 1.5L15 2.5ZM16.18 2.99L15.47 3.7C15.6 3.82 15.67 3.99 15.67 4.17L16.67 4.17L17.67 4.17C17.67 3.46 17.39 2.78 16.89 2.28L16.18 2.99ZM16.67 4.17L15.67 4.17L15.67 6.25L16.67 6.25L17.67 6.25L17.67 4.17L16.67 4.17ZM15 11.67L16 11.67L16 10L15 10L14 10L14 11.67L15 11.67ZM15 10L16 10C16 9.29 15.72 8.61 15.22 8.11L14.51 8.82L13.81 9.53C13.93 9.65 14 9.82 14 10L15 10ZM14.51 8.82L15.22 8.11C14.72 7.61 14.04 7.33 13.33 7.33L13.33 8.33L13.33 9.33C13.51 9.33 13.68 9.4 13.81 9.53L14.51 8.82ZM13.33 8.33L13.33 7.33C12.63 7.33 11.95 7.61 11.45 8.11L12.16 8.82L12.86 9.53C12.99 9.4 13.16 9.33 13.33 9.33L13.33 8.33ZM12.16 8.82L11.45 8.11C10.95 8.61 10.67 9.29 10.67 10L11.67 10L12.67 10C12.67 9.82 12.74 9.65 12.86 9.53L12.16 8.82ZM11.67 10L10.67 10L10.67 11.67L11.67 11.67L12.67 11.67L12.67 10L11.67 10ZM10.83 11.67L10.83 12.67L15.83 12.67L15.83 11.67L15.83 10.67L10.83 10.67L10.83 11.67ZM15.83 11.67L15.83 12.67C15.74 12.67 15.67 12.59 15.67 12.5L16.67 12.5L17.67 12.5C17.67 11.49 16.85 10.67 15.83 10.67L15.83 11.67ZM16.67 12.5L15.67 12.5L15.67 15L16.67 15L17.67 15L17.67 12.5L16.67 12.5ZM16.67 15L15.67 15C15.67 14.91 15.74 14.83 15.83 14.83L15.83 15.83L15.83 16.83C16.85 16.83 17.67 16.01 17.67 15L16.67 15ZM15.83 15.83L15.83 14.83L10.83 14.83L10.83 15.83L10.83 16.83L15.83 16.83L15.83 15.83ZM10.83 15.83L10.83 14.83C10.93 14.83 11 14.91 11 15L10 15L9 15C9 16.01 9.82 16.83 10.83 16.83L10.83 15.83ZM10 15L11 15L11 12.5L10 12.5L9 12.5L9 15L10 15ZM10 12.5L11 12.5C11 12.59 10.93 12.67 10.83 12.67L10.83 11.67L10.83 10.67C9.82 10.67 9 11.49 9 12.5L10 12.5Z\" fill=\"currentColor\"/></g></g>"],"library-filled":["0 0 24 24","<g transform=\"matrix(1 0 0 1 0 0)\"><g><g transform=\"matrix(1 0 0 1 2 2)\"><path d=\"M0 3C0 2.2 0.32 1.44 0.88 0.88C1.44 0.32 2.2 0 3 0L8.5 0L10.5 3L17 3C17.8 3 18.56 3.32 19.12 3.88C19.68 4.44 20 5.2 20 6L20 17C20 17.8 19.68 18.56 19.12 19.12C18.56 19.68 17.8 20 17 20L3 20C2.2 20 1.44 19.68 0.88 19.12C0.32 18.56 0 17.8 0 17L0 3ZM5 12C5 13.33 5.53 14.6 6.46 15.54C7.4 16.47 8.67 17 10 17C11.33 17 12.6 16.47 13.54 15.54C14.47 14.6 15 13.33 15 12C15 10.67 14.47 9.4 13.54 8.46C12.6 7.53 11.33 7 10 7C8.67 7 7.4 7.53 6.46 8.46C5.53 9.4 5 10.67 5 12ZM10 9C10.39 9 10.78 9.08 11.15 9.23C11.51 9.38 11.84 9.6 12.12 9.88C12.4 10.16 12.62 10.49 12.77 10.85C12.92 11.22 13 11.61 13 12C13 12.39 12.92 12.78 12.77 13.15C12.62 13.51 12.4 13.84 12.12 14.12C11.84 14.4 11.51 14.62 11.15 14.77C10.78 14.92 10.39 15 10 15C9.2 15 8.44 14.68 7.88 14.12C7.32 13.56 7 12.8 7 12C7 11.2 7.32 10.44 7.88 9.88C8.44 9.32 9.2 9 10 9ZM9 11L11 11L11 13L9 13L9 11Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></g></g></g>"],"library-outline":["0 0 24 24","<g transform=\"matrix(1 0 0 1 0 0)\"><g><g transform=\"matrix(1 0 0 1 3 3)\"><path d=\"M2 0L2 -1L2 0ZM7 0L7.83 -0.55C7.65 -0.83 7.33 -1 7 -1L7 0ZM9 3L8.17 3.55C8.35 3.83 8.67 4 9 4L9 3ZM16 3L16 2L16 3ZM0 16L-1 16L0 16ZM0 4L1 4L1 2L0 2L-1 2L-1 4L0 4ZM0 2L1 2C1 1.73 1.11 1.48 1.29 1.29L0.59 0.59L-0.12 -0.12C-0.68 0.44 -1 1.2 -1 2L0 2ZM0.59 0.59L1.29 1.29C1.48 1.11 1.73 1 2 1L2 0L2 -1C1.2 -1 0.44 -0.68 -0.12 -0.12L0.59 0.59ZM2 0L2 1L7 1L7 0L7 -1L2 -1L2 0ZM7 0L6.17 0.55L8.17 3.55L9 3L9.83 2.45L7.83 -0.55L7 0ZM9 3L9 4L16 4L16 3L16 2L9 2L9 3ZM16 3L16 4C16.27 4 16.52 4.11 16.71 4.29L17.41 3.59L18.12 2.88C17.56 2.32 16.8 2 16 2L16 3ZM17.41 3.59L16.71 4.29C16.89 4.48 17 4.73 17 5L18 5L19 5C19 4.2 18.68 3.44 18.12 2.88L17.41 3.59ZM18 5L17 5L17 16L18 16L19 16L19 5L18 5ZM18 16L17 16C17 16.27 16.89 16.52 16.71 16.71L17.41 17.41L18.12 18.12C18.68 17.56 19 16.8 19 16L18 16ZM17.41 17.41L16.71 16.71C16.52 16.89 16.27 17 16 17L16 18L16 19C16.8 19 17.56 18.68 18.12 18.12L17.41 17.41ZM16 18L16 17L2 17L2 18L2 19L16 19L16 18ZM2 18L2 17C1.73 17 1.48 16.89 1.29 16.71L0.59 17.41L-0.12 18.12C0.44 18.68 1.2 19 2 19L2 18ZM0.59 17.41L1.29 16.71C1.11 16.52 1 16.27 1 16L0 16L-1 16C-1 16.8 -0.68 17.56 -0.12 18.12L0.59 17.41ZM0 16L1 16L1 4L0 4L-1 4L-1 16L0 16Z\" fill=\"currentColor\"/></g><g transform=\"matrix(1 0 0 1 8 10)\"><path d=\"M8 4L7 4C7 5.66 5.66 7 4 7L4 8L4 9C6.76 9 9 6.76 9 4L8 4ZM4 8L4 7C2.34 7 1 5.66 1 4L0 4L-1 4C-1 6.76 1.24 9 4 9L4 8ZM0 4L1 4C1 2.34 2.34 1 4 1L4 0L4 -1C1.24 -1 -1 1.24 -1 4L0 4ZM4 0L4 1C5.66 1 7 2.34 7 4L8 4L9 4C9 1.24 6.76 -1 4 -1L4 0Z\" fill=\"currentColor\"/></g><g transform=\"matrix(1 0 0 1 11.5 13.5)\"><path d=\"M1 0.5L0 0.5C0 0.22 0.22 0 0.5 0L0.5 1L0.5 2C1.33 2 2 1.33 2 0.5L1 0.5ZM0.5 1L0.5 0C0.78 0 1 0.22 1 0.5L0 0.5L-1 0.5C-1 1.33 -0.33 2 0.5 2L0.5 1ZM0 0.5L1 0.5C1 0.78 0.78 1 0.5 1L0.5 0L0.5 -1C-0.33 -1 -1 -0.33 -1 0.5L0 0.5ZM0.5 0L0.5 1C0.22 1 0 0.78 0 0.5L1 0.5L2 0.5C2 -0.33 1.33 -1 0.5 -1L0.5 0Z\" fill=\"currentColor\"/></g></g></g>"],"loading":["0 0 24 24","<g><g transform=\"matrix(1 0 0 1 3 3)\"><path d=\"M18.96 9C18.96 8.47 18.53 8.04 18 8.04C17.47 8.04 17.04 8.47 17.04 9L18 9L18.96 9ZM11.48 1.35C11.99 1.52 12.53 1.24 12.69 0.74C12.86 0.23 12.58 -0.31 12.08 -0.47L11.78 0.44L11.48 1.35ZM18 9L17.04 9C17.04 10.7 16.5 12.35 15.5 13.73L16.28 14.29L17.06 14.85C18.29 13.15 18.96 11.1 18.96 9L18 9ZM16.28 14.29L15.5 13.73C14.51 15.1 13.1 16.12 11.48 16.65L11.78 17.56L12.08 18.47C14.08 17.82 15.82 16.56 17.06 14.85L16.28 14.29ZM11.78 17.56L11.48 16.65C9.87 17.17 8.13 17.17 6.52 16.65L6.22 17.56L5.92 18.47C7.92 19.12 10.08 19.12 12.08 18.47L11.78 17.56ZM6.22 17.56L6.52 16.65C4.9 16.12 3.49 15.1 2.5 13.73L1.72 14.29L0.94 14.85C2.18 16.56 3.92 17.82 5.92 18.47L6.22 17.56ZM1.72 14.29L2.5 13.73C1.5 12.35 0.96 10.7 0.96 9L0 9L-0.96 9C-0.96 11.1 -0.29 13.15 0.94 14.85L1.72 14.29ZM0 9L0.96 9C0.96 7.3 1.5 5.65 2.5 4.27L1.72 3.71L0.94 3.15C-0.29 4.85 -0.96 6.9 -0.96 9L0 9ZM1.72 3.71L2.5 4.27C3.49 2.9 4.9 1.88 6.52 1.35L6.22 0.44L5.92 -0.47C3.92 0.18 2.18 1.44 0.94 3.15L1.72 3.71ZM6.22 0.44L6.52 1.35C8.13 0.83 9.87 0.83 11.48 1.35L11.78 0.44L12.08 -0.47C10.08 -1.12 7.92 -1.12 5.92 -0.47L6.22 0.44Z\" fill=\"currentColor\"/></g></g>"],"pause":["0 0 24 24","<g><g transform=\"matrix(1 0 0 1 5 3)\"><path d=\"M10 0L10 0.67L13 0.67L13 0L13 -0.67L10 -0.67L10 0ZM13 0L13 0.67C13.19 0.67 13.33 0.82 13.33 1L14 1L14.67 1C14.67 0.08 13.92 -0.67 13 -0.67L13 0ZM14 1L13.33 1L13.33 17L14 17L14.67 17L14.67 1L14 1ZM14 17L13.33 17C13.33 17.18 13.19 17.33 13 17.33L13 18L13 18.67C13.92 18.67 14.67 17.92 14.67 17L14 17ZM13 18L13 17.33L10 17.33L10 18L10 18.67L13 18.67L13 18ZM10 18L10 17.33C9.82 17.33 9.67 17.18 9.67 17L9 17L8.33 17C8.33 17.92 9.08 18.67 10 18.67L10 18ZM9 17L9.67 17L9.67 1L9 1L8.33 1L8.33 17L9 17ZM9 1L9.67 1C9.67 0.82 9.82 0.67 10 0.67L10 0L10 -0.67C9.08 -0.67 8.33 0.08 8.33 1L9 1ZM1 0L1 0.67L4 0.67L4 0L4 -0.67L1 -0.67L1 0ZM4 0L4 0.67C4.18 0.67 4.33 0.82 4.33 1L5 1L5.67 1C5.67 0.08 4.92 -0.67 4 -0.67L4 0ZM5 1L4.33 1L4.33 17L5 17L5.67 17L5.67 1L5 1ZM5 17L4.33 17C4.33 17.18 4.18 17.33 4 17.33L4 18L4 18.67C4.92 18.67 5.67 17.92 5.67 17L5 17ZM4 18L4 17.33L1 17.33L1 18L1 18.67L4 18.67L4 18ZM1 18L1 17.33C0.82 17.33 0.67 17.18 0.67 17L0 17L-0.67 17C-0.67 17.92 0.08 18.67 1 18.67L1 18ZM0 17L0.67 17L0.67 1L0 1L-0.67 1L-0.67 17L0 17ZM0 1L0.67 1C0.67 0.82 0.82 0.67 1 0.67L1 0L1 -0.67C0.08 -0.67 -0.67 0.08 -0.67 1L0 1Z\" fill=\"currentColor\"/></g></g>"],"play":["0 0 24 24","<g><g transform=\"matrix(1 0 0 1 5 3)\"><path d=\"M0 2L0.67 2L0.67 2L0 2ZM3.01 0.27L2.67 0.85L2.67 0.85L3.01 0.27ZM15.01 7.27L14.67 7.85L14.67 7.85L15.01 7.27ZM15.01 10.73L14.67 10.15L14.67 10.15L15.01 10.73ZM3.01 17.73L2.67 17.15L2.67 17.15L3.01 17.73ZM0 16L0.67 16L0.67 16L0 16ZM0 2L0.67 2C0.67 1.77 0.73 1.54 0.85 1.33L0.27 1L-0.31 0.66C-0.54 1.07 -0.67 1.53 -0.67 2L0 2ZM0.27 1L0.85 1.33C0.96 1.13 1.13 0.96 1.34 0.84L1 0.27L0.67 -0.31C0.26 -0.08 -0.07 0.26 -0.31 0.66L0.27 1ZM1 0.27L1.34 0.84C1.54 0.73 1.77 0.67 2 0.67L2.01 0L2.01 -0.67C1.54 -0.67 1.08 -0.55 0.67 -0.31L1 0.27ZM2.01 0L2 0.67C2.24 0.67 2.47 0.73 2.67 0.85L3.01 0.27L3.34 -0.3C2.94 -0.54 2.48 -0.67 2.01 -0.67L2.01 0ZM3.01 0.27L2.67 0.85L14.67 7.85L15.01 7.27L15.34 6.69L3.34 -0.3L3.01 0.27ZM15.01 7.27L14.67 7.85C14.87 7.96 15.04 8.13 15.16 8.33L15.74 8L16.31 7.67C16.08 7.26 15.75 6.93 15.34 6.69L15.01 7.27ZM15.74 8L15.16 8.33C15.27 8.54 15.34 8.77 15.34 9L16 9L16.67 9C16.67 8.53 16.55 8.07 16.31 7.67L15.74 8ZM16 9L15.34 9C15.34 9.23 15.28 9.46 15.16 9.66L15.74 10L16.32 10.33C16.55 9.92 16.67 9.46 16.67 9L16 9ZM15.74 10L15.16 9.66C15.04 9.87 14.88 10.03 14.67 10.15L15.01 10.73L15.35 11.3C15.75 11.07 16.08 10.73 16.32 10.33L15.74 10ZM15.01 10.73L14.67 10.15L2.67 17.15L3.01 17.73L3.34 18.3L15.35 11.3L15.01 10.73ZM3.01 17.73L2.67 17.15C2.47 17.27 2.24 17.33 2 17.33L2.01 18L2.01 18.67C2.48 18.67 2.94 18.54 3.34 18.3L3.01 17.73ZM2.01 18L2 17.33C1.77 17.33 1.54 17.27 1.34 17.16L1 17.73L0.67 18.31C1.08 18.55 1.54 18.67 2.01 18.67L2.01 18ZM1 17.73L1.34 17.16C1.13 17.04 0.96 16.87 0.85 16.67L0.27 17L-0.31 17.34C-0.07 17.74 0.26 18.08 0.67 18.31L1 17.73ZM0.27 17L0.85 16.67C0.73 16.46 0.67 16.23 0.67 16L0 16L-0.67 16C-0.67 16.47 -0.54 16.93 -0.31 17.34L0.27 17ZM0 16L0.67 16L0.67 2L0 2L-0.67 2L-0.67 16L0 16Z\" fill=\"currentColor\"/></g></g>"],"radio":["0 0 20 20","<g><g transform=\"matrix(1 0 0 1 1.67 4.11)\"><path d=\"M12.58 1.65C12.19 1.26 11.56 1.26 11.17 1.65C10.78 2.04 10.78 2.67 11.17 3.06L11.87 2.36L12.58 1.65ZM11.17 8.71C10.78 9.11 10.78 9.74 11.17 10.13C11.56 10.52 12.19 10.52 12.58 10.13L11.87 9.42L11.17 8.71ZM14.94 -0.71C14.55 -1.1 13.91 -1.1 13.52 -0.71C13.13 -0.32 13.13 0.32 13.52 0.71L14.23 0L14.94 -0.71ZM13.52 11.07C13.13 11.46 13.13 12.1 13.52 12.49C13.91 12.88 14.55 12.88 14.94 12.48L14.23 11.78L13.52 11.07ZM1.73 12.48C2.12 12.88 2.75 12.88 3.14 12.49C3.54 12.1 3.54 11.46 3.15 11.07L2.44 11.78L1.73 12.48ZM0 5.89L-1 5.89L0 5.89ZM3.15 0.71C3.54 0.32 3.54 -0.32 3.14 -0.71C2.75 -1.1 2.12 -1.1 1.73 -0.71L2.44 0L3.15 0.71ZM4.09 10.13C4.48 10.52 5.11 10.52 5.5 10.13C5.89 9.74 5.89 9.11 5.5 8.71L4.79 9.42L4.09 10.13ZM3.33 5.89L4.33 5.89L3.33 5.89ZM5.5 3.06C5.89 2.67 5.89 2.04 5.5 1.65C5.11 1.26 4.48 1.26 4.09 1.65L4.79 2.36L5.5 3.06ZM11.87 2.36L11.17 3.06C11.91 3.81 12.34 4.83 12.34 5.89L13.34 5.89L14.34 5.89C14.34 4.3 13.7 2.78 12.58 1.65L11.87 2.36ZM13.34 5.89L12.34 5.89C12.34 6.95 11.91 7.97 11.17 8.71L11.87 9.42L12.58 10.13C13.7 9 14.34 7.48 14.34 5.89L13.34 5.89ZM14.23 0L13.52 0.71C14.9 2.08 15.67 3.95 15.67 5.89L16.67 5.89L17.67 5.89C17.67 3.42 16.69 1.04 14.94 -0.71L14.23 0ZM16.67 5.89L15.67 5.89C15.67 7.83 14.9 9.7 13.52 11.07L14.23 11.78L14.94 12.48C16.69 10.73 17.67 8.36 17.67 5.89L16.67 5.89ZM2.44 11.78L3.15 11.07C1.77 9.7 1 7.83 1 5.89L0 5.89L-1 5.89C-1 8.36 -0.02 10.73 1.73 12.48L2.44 11.78ZM0 5.89L1 5.89C1 3.95 1.77 2.08 3.15 0.71L2.44 0L1.73 -0.71C-0.02 1.04 -1 3.42 -1 5.89L0 5.89ZM4.79 9.42L5.5 8.71C4.75 7.97 4.33 6.95 4.33 5.89L3.33 5.89L2.33 5.89C2.33 7.48 2.96 9 4.09 10.13L4.79 9.42ZM3.33 5.89L4.33 5.89C4.33 4.83 4.75 3.81 5.5 3.06L4.79 2.36L4.09 1.65C2.96 2.78 2.33 4.3 2.33 5.89L3.33 5.89ZM10 5.89L9 5.89C9 6.26 8.7 6.56 8.33 6.56L8.33 7.56L8.33 8.56C9.81 8.56 11 7.36 11 5.89L10 5.89ZM8.33 7.56L8.33 6.56C7.97 6.56 7.67 6.26 7.67 5.89L6.67 5.89L5.67 5.89C5.67 7.36 6.86 8.56 8.33 8.56L8.33 7.56ZM6.67 5.89L7.67 5.89C7.67 5.52 7.97 5.22 8.33 5.22L8.33 4.22L8.33 3.22C6.86 3.22 5.67 4.42 5.67 5.89L6.67 5.89ZM8.33 4.22L8.33 5.22C8.7 5.22 9 5.52 9 5.89L10 5.89L11 5.89C11 4.42 9.81 3.22 8.33 3.22L8.33 4.22Z\" fill=\"currentColor\"/></g></g>"],"scenes-filled":["0 0 24 24","<g transform=\"matrix(1 0 0 1 0 0)\"><g><g transform=\"matrix(1 0 0 1 2 2)\"><path d=\"M0 0L20 0L20 17C20 17.8 19.68 18.56 19.12 19.12C18.56 19.68 17.8 20 17 20L3 20C2.2 20 1.44 19.68 0.88 19.12C0.32 18.56 0 17.8 0 17L0 0ZM2 2L2 5L6 5L4.2 2L2 2ZM6.5 2L8.3 5L12.7 5L10.9 2L6.5 2ZM13.2 2L15 5L18 5L18 2L13.2 2ZM8 9L8 17L15 13L8 9Z\" fill=\"currentColor\" fill-rule=\"evenodd\"/></g></g></g>"],"scenes-outline":["0 0 24 24","<g transform=\"matrix(1 0 0 1 0 0)\"><g><g transform=\"matrix(1 0 0 1 3 3)\"><path d=\"M0 16L-1 16L0 16ZM0 0L0 -1C-0.55 -1 -1 -0.55 -1 0L0 0ZM18 0L19 0C19 -0.55 18.55 -1 18 -1L18 0ZM4.86 -0.51C4.57 -0.99 3.96 -1.14 3.49 -0.86C3.01 -0.57 2.86 0.04 3.14 0.51L4 0L4.86 -0.51ZM6.14 5.51C6.43 5.99 7.04 6.14 7.51 5.86C7.99 5.57 8.14 4.96 7.86 4.49L7 5L6.14 5.51ZM11.86 -0.51C11.57 -0.99 10.96 -1.14 10.49 -0.86C10.01 -0.57 9.86 0.04 10.14 0.51L11 0L11.86 -0.51ZM13.14 5.51C13.43 5.99 14.04 6.14 14.51 5.86C14.99 5.57 15.14 4.96 14.86 4.49L14 5L13.14 5.51ZM0 5L0 6L18 6L18 5L18 4L0 4L0 5ZM18 5L17 5L17 16L18 16L19 16L19 5L18 5ZM18 16L17 16C17 16.27 16.89 16.52 16.71 16.71L17.41 17.41L18.12 18.12C18.68 17.56 19 16.8 19 16L18 16ZM17.41 17.41L16.71 16.71C16.52 16.89 16.27 17 16 17L16 18L16 19C16.8 19 17.56 18.68 18.12 18.12L17.41 17.41ZM16 18L16 17L2 17L2 18L2 19L16 19L16 18ZM2 18L2 17C1.73 17 1.48 16.89 1.29 16.71L0.59 17.41L-0.12 18.12C0.44 18.68 1.2 19 2 19L2 18ZM0.59 17.41L1.29 16.71C1.11 16.52 1 16.27 1 16L0 16L-1 16C-1 16.8 -0.68 17.56 -0.12 18.12L0.59 17.41ZM0 16L1 16L1 5L0 5L-1 5L-1 16L0 16ZM0 5L1 5L1 0L0 0L-1 0L-1 5L0 5ZM0 0L0 1L18 1L18 0L18 -1L0 -1L0 0ZM18 0L17 0L17 5L18 5L19 5L19 0L18 0ZM4 0L3.14 0.51L6.14 5.51L7 5L7.86 4.49L4.86 -0.51L4 0ZM11 0L10.14 0.51L13.14 5.51L14 5L14.86 4.49L11.86 -0.51L11 0Z\" fill=\"currentColor\"/></g><g transform=\"matrix(1 0 0 1 10 12)\"><path d=\"M0 0L0.51 -0.86C0.21 -1.04 -0.18 -1.05 -0.49 -0.87C-0.81 -0.69 -1 -0.36 -1 0L0 0ZM5 3L5.51 3.86C5.82 3.68 6 3.35 6 3C6 2.65 5.82 2.32 5.51 2.14L5 3ZM0 6L-1 6C-1 6.36 -0.81 6.69 -0.49 6.87C-0.18 7.05 0.21 7.04 0.51 6.86L0 6ZM0 0L-0.51 0.86L4.49 3.86L5 3L5.51 2.14L0.51 -0.86L0 0ZM5 3L4.49 2.14L-0.51 5.14L0 6L0.51 6.86L5.51 3.86L5 3ZM0 6L1 6L1 0L0 0L-1 0L-1 6L0 6Z\" fill=\"currentColor\"/></g></g></g>"],"stop":["0 0 24 24","<g><g transform=\"matrix(1 0 0 1 3 3)\"><path d=\"M2 0L2 1.08L16 1.08L16 0L16 -1.08L2 -1.08L2 0ZM16 0L16 1.08C16.51 1.08 16.92 1.49 16.92 2L18 2L19.08 2C19.08 0.3 17.7 -1.08 16 -1.08L16 0ZM18 2L16.92 2L16.92 16L18 16L19.08 16L19.08 2L18 2ZM18 16L16.92 16C16.92 16.51 16.51 16.92 16 16.92L16 18L16 19.08C17.7 19.08 19.08 17.7 19.08 16L18 16ZM16 18L16 16.92L2 16.92L2 18L2 19.08L16 19.08L16 18ZM2 18L2 16.92C1.49 16.92 1.08 16.51 1.08 16L0 16L-1.08 16C-1.08 17.7 0.3 19.08 2 19.08L2 18ZM0 16L1.08 16L1.08 2L0 2L-1.08 2L-1.08 16L0 16ZM0 2L1.08 2C1.08 1.49 1.49 1.08 2 1.08L2 0L2 -1.08C0.3 -1.08 -1.08 0.3 -1.08 2L0 2Z\" fill=\"currentColor\"/></g></g>"]};
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function omit(o, keys) { var r = {}; for (var k in o) if (keys.indexOf(k) < 0) r[k] = o[k]; return r; }

  /* Icon: Bone Maestro product glyphs, single-ink via currentColor. */
  function Icon(props) {
    var def = ICONS[props.name] || ICONS.add;
    var size = props.size || 20;
    var rest = omit(props, ['name', 'size', 'label', 'className']);
    var a11y = props.label ? { role: 'img', 'aria-label': props.label } : { 'aria-hidden': 'true', focusable: 'false' };
    return h('svg', Object.assign({ className: cx('ra-icon', props.className), width: size, height: size, viewBox: def[0], dangerouslySetInnerHTML: { __html: def[1] } }, a11y, rest));
  }

  function Spinner() { return h('span', { className: 'ra-spinner', 'aria-hidden': 'true' }); }

  var SIZE = { small: 'sm', sm: 'sm', medium: 'md', md: 'md', large: 'lg', lg: 'lg' };

  /* Button: Primary, Secondary, Tertiary, Destructive, Brand / Expressive. */
  function Button(props) {
    var variant = props.variant || 'primary';
    var size = SIZE[props.size] || 'md';
    var loading = !!props.loading;
    var rest = omit(props, ['variant', 'size', 'loading', 'leadingIcon', 'trailingIcon', 'children', 'className', 'type']);
    var lead = loading ? h(Spinner) : (props.leadingIcon ? (H.Visual ? H.Visual(props.leadingIcon, 20) : h(Icon, { name: props.leadingIcon, size: 20 })) : null);
    return h('button', Object.assign({
      type: props.type || 'button',
      className: cx('ra-button', 'ra-button--' + variant, size !== 'md' && 'ra-button--' + size, props.className),
      'aria-busy': loading ? 'true' : undefined
    }, rest), lead, h('span', null, props.children), props.trailingIcon && !loading ? (H.Visual ? H.Visual(props.trailingIcon, 20) : h(Icon, { name: props.trailingIcon, size: 20 })) : null);
  }

  /* IconButton: Primary, Secondary, Ghost, Destructive. 44px target around a 32/44/48 visual. */
  function IconButton(props) {
    var variant = props.variant || 'secondary';
    var size = SIZE[props.size] || 'md';
    var rest = omit(props, ['variant', 'size', 'icon', 'label', 'selected', 'className', 'type']);
    return h('button', Object.assign({
      type: props.type || 'button',
      className: cx('ra-iconbutton', 'ra-iconbutton--' + variant, size !== 'md' && 'ra-iconbutton--' + size, props.className),
      'aria-label': props.label,
      title: props.label,
      'aria-pressed': props.selected === undefined ? undefined : String(!!props.selected)
    }, rest), h('span', { className: 'ra-iconbutton__visual' }, (H.Visual ? H.Visual(props.icon || 'add', 20) : h(Icon, { name: props.icon || 'add', size: 20 }))));
  }

  function ErrorGlyph() {
    return h('svg', { className: 'ra-status-glyph', width: 20, height: 20, viewBox: '0 0 20 20', 'aria-hidden': 'true' },
      h('circle', { cx: 10, cy: 10, r: 7, fill: 'none', stroke: 'var(--ra-semantic-color-status-danger)', strokeWidth: 2 }),
      h('rect', { x: 9, y: 5.5, width: 2, height: 7, rx: 1, fill: 'var(--ra-semantic-color-status-danger)' }),
      h('circle', { cx: 10, cy: 14, r: 1, fill: 'var(--ra-semantic-color-status-danger)' }));
  }
  function SuccessGlyph() {
    return h('svg', { className: 'ra-status-glyph', width: 20, height: 20, viewBox: '0 0 20 20', 'aria-hidden': 'true' },
      h('circle', { cx: 10, cy: 10, r: 7, fill: 'none', stroke: 'var(--ra-semantic-color-status-success)', strokeWidth: 2 }),
      h('path', { d: 'M7 10.2l2 2 4-4.4', fill: 'none', stroke: 'var(--ra-semantic-color-status-success)', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }));
  }
  function Spark() {
    return h('svg', { width: 14, height: 14, viewBox: '0 0 14 14', 'aria-hidden': 'true', style: { flex: 'none' } },
      h('rect', { x: 0, y: 6, width: 14, height: 2, rx: 1, fill: 'currentColor' }),
      h('rect', { x: 6, y: 0, width: 2, height: 14, rx: 1, fill: 'currentColor' }));
  }

  var uid = 0;
  /* TextInput: Standard, Password, Search, Numeric. */
  function TextInput(props) {
    var idRef = React.useRef(null);
    if (!idRef.current) idRef.current = props.id || 'ra-field-' + (++uid);
    var id = idRef.current;
    var kind = props.kind || 'standard';
    var type = { standard: 'text', password: 'password', search: 'search', numeric: 'text' }[kind] || 'text';
    var hasError = !!props.error, hasSuccess = !hasError && !!props.success;
    var msg = hasError ? props.error : (hasSuccess ? props.success : props.helper);
    var msgId = msg ? id + '-msg' : undefined;
    var rest = omit(props, ['label', 'helper', 'error', 'success', 'kind', 'optional', 'onClear', 'leadingIcon', 'className', 'id', 'readOnly', 'disabled']);
    return h('div', { className: cx('ra-field', hasError && 'ra-field--error', hasSuccess && 'ra-field--success', props.disabled && 'ra-field--disabled', props.readOnly && 'ra-field--readonly', props.className) },
      h('div', { className: 'ra-field__label-row' },
        h('label', { className: 'ra-field__label', htmlFor: id }, props.label),
        props.optional ? h('span', { className: 'ra-field__optional' }, 'Optional') : null),
      h('div', { className: 'ra-field__surface' },
        props.leadingIcon === false ? null : (props.leadingIcon ? (H.Visual ? H.Visual(props.leadingIcon, 20) : h(Icon, { name: props.leadingIcon, size: 20 })) : h(Spark)),
        h('input', Object.assign({
          id: id, className: 'ra-field__input', type: type,
          inputMode: kind === 'numeric' ? 'decimal' : undefined,
          disabled: props.disabled, readOnly: props.readOnly,
          'aria-invalid': hasError ? 'true' : undefined,
          'aria-describedby': msgId
        }, rest)),
        props.onClear && !props.disabled && !props.readOnly ? h('button', { type: 'button', className: 'ra-field__clear', 'aria-label': 'Clear ' + (props.label || 'field'), onClick: props.onClear }, h(Icon, { name: 'close', size: 12 })) : null),
      msg ? h('div', { className: 'ra-field__message', id: msgId, role: hasError ? 'alert' : undefined }, hasError ? h(ErrorGlyph) : hasSuccess ? h(SuccessGlyph) : null, msg) : null);
  }

  function Choice(kind, props) {
    var mixed = kind === 'checkbox' && !!props.indeterminate;
    var rest = omit(props, ['label', 'error', 'indeterminate', 'platform', 'className']);
    var ref = React.useRef(null);
    React.useEffect(function () { if (ref.current && kind === 'checkbox') ref.current.indeterminate = mixed; });
    if (rest.checked !== undefined && !rest.onChange) { rest.defaultChecked = rest.checked; delete rest.checked; }
    var input = h('input', Object.assign({
      ref: ref, className: 'ra-choice__input',
      type: kind === 'radio' ? 'radio' : 'checkbox',
      role: kind === 'switch' ? 'switch' : undefined,
      'aria-checked': mixed ? 'mixed' : undefined,
      'aria-invalid': props.error ? 'true' : undefined
    }, rest));
    var visual = kind === 'switch'
      ? h('span', { className: 'ra-switch__track' }, h('span', { className: 'ra-switch__thumb' }))
      : h('span', { className: 'ra-choice__box' },
          kind === 'checkbox' ? h('svg', { className: 'ra-choice__check', width: 14, height: 10, viewBox: '-1 -1 14 10', 'aria-hidden': 'true' }, h('path', { d: 'M0 4L4 8L12 0', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' })) : null,
          kind === 'checkbox' ? h('span', { className: 'ra-choice__dash' }) : null);
    var target = h('span', { className: cx('ra-choice__target', 'ra-' + kind, mixed && 'is-mixed', kind === 'switch' && props.platform === 'ios' && 'ra-switch--ios') }, input, visual);
    return h('label', { className: cx('ra-choice', props.error && 'ra-choice--error', props.disabled && 'ra-choice--disabled', props.className) }, target, props.label ? h('span', null, props.label) : null);
  }
  /* Checkbox: Unchecked, Checked, Mixed. */
  function Checkbox(props) { return Choice('checkbox', props); }
  /* Radio: Unselected, Selected. */
  function Radio(props) { return Choice('radio', props); }
  /* Switch: Web (44×24) and iOS (51×31). */
  function Switch(props) { return Choice('switch', props); }

  /* Tag: tonal label. */
  function Tag(props) {
    var rest = omit(props, ['tone', 'children', 'className']);
    return h('span', Object.assign({ className: cx('ra-tag', 'ra-tag--' + (props.tone || 'neutral'), props.className) }, rest), props.children);
  }
  /* StatusBadge: outcome status with dot + label. */
  function StatusBadge(props) {
    var rest = omit(props, ['status', 'children', 'className']);
    return h('span', Object.assign({ className: cx('ra-badge', 'ra-badge--' + (props.status || 'neutral'), props.className) }, rest), h('span', { className: 'ra-badge__dot', 'aria-hidden': 'true' }), props.children);
  }

  var X = { Button: Button, IconButton: IconButton, TextInput: TextInput, Checkbox: Checkbox, Radio: Radio, Switch: Switch, Tag: Tag, StatusBadge: StatusBadge, Icon: Icon };
  var H = { h: h, cx: cx, omit: omit, Icon: Icon, Spinner: Spinner, Button: Button, IconButton: IconButton, Checkbox: Checkbox, Radio: Radio, Switch: Switch, Tag: Tag, StatusBadge: StatusBadge, ErrorGlyph: ErrorGlyph, SuccessGlyph: SuccessGlyph, React: React };
  /* ---- 10-shared.js ---- */
  (function(){
  /* Inline Lucide-compatible glyphs used across families (stroke, currentColor). */
  function Glyph(p) {
    var s = p.size || 20;
    var D = {
      'chevron-right': 'M9 6l6 6-6 6', 'chevron-left': 'M15 6l-6 6 6 6', 'chevron-down': 'M6 9l6 6 6-6', 'chevron-up': 'M6 15l6-6 6 6',
      check: 'M5 12.5l4.5 4.5L19 7.5', x: 'M6 6l12 12M18 6L6 18', filter: 'M4 7h16M7 12h10M10 17h4',
      'audio-lines': 'M2 10v3M6 6v11M10 3v18M14 8v7M18 5v13M22 10v3', more: 'M12 6h.01M12 12h.01M12 18h.01', 'more-h': 'M6 12h.01M12 12h.01M18 12h.01', sidebar: 'M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM9 5v14', 'lock': 'M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3',
      info: 'M12 16v-4M12 8h.01M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0z', alert: 'M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z',
      'circle-check': 'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0zM8 12l3 3 5-6', 'circle-x': 'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0zM15 9l-6 6M9 9l6 6',
      search: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM21 21l-4.3-4.3', calendar: 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
      clock: 'M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0zM12 6v6l4 2', upload: 'M12 15V3M7 8l5-5 5 5M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4',
      volume: 'M11 5 6 9H2v6h4l5 4V5zM15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14', 'volume-x': 'M11 5 6 9H2v6h4l5 4V5zM22 9l-6 6M16 9l6 6',
      'skip-forward': 'M5 4l10 8-10 8V4zM19 5v14', 'skip-back': 'M19 20 9 12l10-8v16zM5 19V5', menu: 'M4 6h16M4 12h16M4 18h16',
      home: 'M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3z', user: 'M20 21a8 8 0 0 0-16 0M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10z', settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z',
      edit: 'M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z', trash: 'M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6', copy: 'M9 9h11v11H9zM5 15H4V4h11v1',
      'grip': 'M9 6h.01M15 6h.01M9 12h.01M15 12h.01M9 18h.01M15 18h.01', share: 'M4 12v8h16v-8M16 6l-4-4-4 4M12 2v13'
    };
    return h('svg', { className: cx('ra-glyph', p.className), width: s, height: s, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: p.stroke || 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' }, h('path', { d: D[p.name] || D.check }));
  }
  H.Glyph = Glyph; X.Glyph = Glyph;
  H.Visual = function (icon, size) { return H.isBM(icon) ? h(H.Icon, { name: icon, size: size || 20 }) : h(Glyph, { name: icon, size: size || 20 }); };
  H.isBM = function (n) { return ['add', 'arrow-right', 'close', 'expand', 'folder-lock', 'radio', 'play', 'pause', 'stop', 'loading', 'connect-outline', 'connect-filled', 'control-outline', 'control-filled', 'library-outline', 'library-filled', 'scenes-outline', 'scenes-filled'].indexOf(n) >= 0; };


  })();
  /* ---- 11b-inputs.js ---- */
  (function(){
  var Glyph = H.Glyph;
  var fid = 0;
  function useId(p, pre) { var r = React.useRef(null); if (!r.current) r.current = p.id || (pre + (++fid)); return r.current; }
  function FieldShell(p, control, id) {
    var err = !!p.error, ok = !err && !!p.success;
    var msg = err ? p.error : ok ? p.success : p.helper, mid = msg ? id + '-msg' : undefined;
    return h('div', { className: cx('ra-field', 'ra-field--b3', err && 'ra-field--error', ok && 'ra-field--success', p.disabled && 'ra-field--disabled', p.readOnly && 'ra-field--readonly', p.className) },
      h('div', { className: 'ra-field__label-row' }, h('label', { className: 'ra-field__label ra-field__label--lg', htmlFor: id }, p.label), p.requirement ? h('span', { className: 'ra-field__optional' }, p.requirement) : null),
      control(mid),
      msg ? h('div', { className: 'ra-field__message', id: mid }, err ? h(H.ErrorGlyph) : ok ? h(H.SuccessGlyph) : null, msg) : null);
  }

  /* TextArea: multi-line entry (Web, iOS, Android adapters share one anatomy). */
  function TextArea(p) {
    var id = useId(p, 'ra-ta-');
    var rest = omit(p, ['label', 'requirement', 'helper', 'error', 'success', 'className', 'platform', 'id']);
    return FieldShell(p, function (mid) {
      return h('textarea', Object.assign({ id: id, className: cx('ra-textarea', p.platform && 'ra-textarea--' + p.platform), rows: 4, 'aria-invalid': p.error ? 'true' : undefined, 'aria-describedby': mid }, rest));
    }, id);
  }
  X.TextArea = TextArea;

  /* PickerField: opens a native picker or menu; shows the chosen value. */
  function PickerField(p) {
    var id = useId(p, 'ra-pick-');
    return FieldShell(p, function (mid) {
      return h('button', { id: id, type: 'button', className: cx('ra-picker', !p.value && 'is-empty'), disabled: p.disabled || p.readOnly, onClick: p.onClick, 'aria-haspopup': p.native ? undefined : 'listbox', 'aria-invalid': p.error ? 'true' : undefined, 'aria-describedby': mid },
        p.icon ? H.Visual(p.icon, 20) : null,
        h('span', { className: 'ra-picker__value' }, p.value || p.placeholder || 'Choose'),
        p.readOnly ? null : h(Glyph, { name: 'chevron-down', size: 20 }));
    }, id);
  }
  X.PickerField = PickerField;

  /* DateTimeHost: native-first date / time / date-and-time host around Picker Fields. */
  function DateTimeHost(p) {
    var kind = p.kind || 'date';
    var date = h(PickerField, { label: p.dateLabel || 'Date', requirement: p.requirement, value: p.dateValue, placeholder: 'Choose date', icon: 'calendar', error: p.error, disabled: p.disabled, readOnly: p.readOnly });
    var time = h(PickerField, { label: p.timeLabel || 'Time', requirement: p.requirement, value: p.timeValue, placeholder: 'Choose time', icon: 'clock', error: kind === 'time' ? p.error : undefined, disabled: p.disabled, readOnly: p.readOnly });
    return h('fieldset', { className: cx('ra-datetime', p.className) },
      p.legend ? h('legend', { className: 'ra-field__label ra-field__label--lg' }, p.legend) : null,
      h('div', { className: 'ra-datetime__controls' }, kind !== 'time' ? date : null, kind !== 'date' ? time : null),
      h('div', { className: 'ra-datetime__context' }, p.context || 'Format follows your locale.'));
  }
  X.DateTimeHost = DateTimeHost;

  /* Slider: generic single-value range, LTR or RTL. */
  function Slider(p) {
    var id = useId(p, 'ra-sl-');
    var min = p.min != null ? p.min : 0, max = p.max != null ? p.max : 100;
    var st = React.useState(p.defaultValue != null ? p.defaultValue : (min + max) / 2);
    var val = p.value != null ? p.value : st[0];
    var pct = (val - min) / (max - min) * 100;
    return h('div', { className: cx('ra-slider', p.disabled && 'is-disabled', p.className), dir: p.dir },
      h('div', { className: 'ra-slider__top' }, h('label', { htmlFor: id }, p.label || 'Level'), h('output', { htmlFor: id }, p.format ? p.format(val) : val)),
      h('div', { className: 'ra-slider__target' },
        h('input', { id: id, type: 'range', min: min, max: max, step: p.step || 1, value: val, disabled: p.disabled, style: { '--ra-slider-pct': pct + '%' }, 'aria-describedby': p.helper ? id + '-h' : undefined,
          onChange: function (e) { st[1](+e.target.value); p.onChange && p.onChange(+e.target.value); } })),
      h('div', { className: 'ra-slider__range' }, h('span', null, p.minLabel != null ? p.minLabel : min), h('span', null, p.maxLabel != null ? p.maxLabel : max)),
      p.helper ? h('div', { className: 'ra-slider__helper', id: id + '-h' }, p.helper) : null);
  }
  X.Slider = Slider;

  /* FormMessage: titled form feedback — Information, Danger, Success. */
  function FormMessage(p) {
    var tone = p.tone || 'information';
    return h('div', { className: cx('ra-formmsg', 'ra-formmsg--' + tone, p.className), role: tone === 'danger' ? 'alert' : 'status' },
      h('div', { className: 'ra-formmsg__title' }, p.title), h('div', { className: 'ra-formmsg__body' }, p.children || p.message));
  }
  X.FormMessage = FormMessage;

  /* FormSubmitActions: Default, Saving, Failed, Saved. */
  function FormSubmitActions(p) {
    var st = p.state || 'default';
    var label = { default: p.submitLabel || 'Save changes', saving: 'Saving changes', failed: 'Try again', saved: p.submitLabel || 'Save changes' }[st];
    return h('div', { className: cx('ra-formactions', p.className) },
      h(Button, { variant: 'secondary', disabled: st === 'saving', onClick: p.onCancel }, p.cancelLabel || 'Cancel'),
      h(Button, { variant: 'primary', type: 'submit', loading: st === 'saving', onClick: p.onSubmit }, label),
      st === 'saved' ? h('span', { className: 'ra-formactions__note', role: 'status' }, h(H.SuccessGlyph), 'Saved') : null);
  }
  X.FormSubmitActions = FormSubmitActions;

  /* FormSection: titled group with fields, feedback and actions slots. */
  function FormSection(p) {
    return h('section', { className: cx('ra-formsection', p.className), 'aria-labelledby': p.title ? undefined : undefined },
      h('h3', { className: 'ra-formsection__title' }, p.title), p.description ? h('p', { className: 'ra-formsection__desc' }, p.description) : null,
      h('div', { className: 'ra-formsection__fields' }, p.children), p.feedback || null, p.actions || null);
  }
  X.FormSection = FormSection;

  /* SelectionRow: whole-row choice with a persistent label and description (Web, iOS, Android). */
  function SelectionRow(p) {
    var C = { checkbox: Checkbox, radio: Radio, switch: Switch }[p.control || 'checkbox'];
    var ctrl = h(C, omit(Object.assign({}, p, { label: undefined, platform: p.control === 'switch' && p.platform === 'ios' ? 'ios' : undefined }), ['description', 'control', 'className']));
    return h('label', { className: cx('ra-selrow', p.platform && 'ra-selrow--' + p.platform, p.className) },
      h('span', { className: 'ra-selrow__control' }, ctrl),
      h('span', { className: 'ra-selrow__text' }, h('span', { className: 'ra-selrow__label' }, p.label), p.description ? h('span', { className: 'ra-selrow__desc' }, p.description) : null));
  }
  X.SelectionRow = SelectionRow;

  /* IOSTextField: Apple text-entry adapter (SF Pro, 52pt surface). */
  function IOSTextField(p) {
    var id = useId(p, 'ra-ios-');
    var err = !!p.error, msg = err ? p.error : p.helper;
    var rest = omit(p, ['label', 'helper', 'error', 'className', 'id']);
    return h('div', { className: cx('ra-iosfield', err && 'is-error', p.disabled && 'is-disabled', p.readOnly && 'is-readonly', p.className) },
      h('label', { htmlFor: id, className: 'ra-iosfield__label' }, p.label),
      h('input', Object.assign({ id: id, className: 'ra-iosfield__input', 'aria-invalid': err ? 'true' : undefined, 'aria-describedby': msg ? id + '-m' : undefined }, rest)),
      msg ? h('div', { id: id + '-m', className: 'ra-iosfield__msg' }, msg) : null);
  }
  X.IOSTextField = IOSTextField;

  /* Android adapters: Material geometry, Bone Maestro color roles, 48dp targets. */
  function AndroidTextField(p) {
    var id = useId(p, 'ra-and-');
    var err = !!p.error, msg = err ? p.error : (p.readOnly ? (p.readOnlyHelper || p.helper) : p.helper);
    var rest = omit(p, ['label', 'helper', 'error', 'className', 'id', 'readOnlyHelper']);
    return h('div', { className: cx('ra-andfield', err && 'is-error', p.disabled && 'is-disabled', p.readOnly && 'is-readonly', p.className) },
      h('div', { className: 'ra-andfield__box' },
        h('input', Object.assign({ id: id, className: 'ra-andfield__input', placeholder: ' ', 'aria-invalid': err ? 'true' : undefined, 'aria-describedby': msg ? id + '-m' : undefined }, rest)),
        h('label', { htmlFor: id, className: 'ra-andfield__label' }, p.label)),
      msg ? h('div', { id: id + '-m', className: 'ra-andfield__msg' }, msg) : null);
  }
  X.AndroidTextField = AndroidTextField;
  function andChoice(kind) {
    return function (p) {
      var rest = omit(p, ['label', 'className', 'indeterminate', 'error']);
      var ref = React.useRef(null);
      React.useEffect(function () { if (ref.current) ref.current.indeterminate = !!p.indeterminate; });
      if (rest.checked !== undefined && !rest.onChange) { rest.defaultChecked = rest.checked; delete rest.checked; }
      var vis = kind === 'switch' ? h('span', { className: 'ra-and__track' }, h('span', { className: 'ra-and__thumb' }))
        : h('span', { className: 'ra-and__box' }, kind === 'checkbox' ? h('svg', { className: 'ra-and__check', viewBox: '0 0 18 18', width: 18, height: 18, 'aria-hidden': 'true' }, h('path', { d: p.indeterminate ? 'M4 9h10' : 'M3.5 9.5l3.5 3.5 7.5-8', fill: 'none', stroke: 'currentColor', strokeWidth: 2 })) : null);
      return h('label', { className: cx('ra-and', 'ra-and--' + kind, p.indeterminate && 'is-mixed', p.error && 'is-error', p.disabled && 'is-disabled', p.className) },
        h('span', { className: 'ra-and__target' }, h('input', Object.assign({ ref: ref, type: kind === 'radio' ? 'radio' : 'checkbox', role: kind === 'switch' ? 'switch' : undefined, className: 'ra-and__input' }, rest)), vis),
        h('span', { className: 'ra-and__label' }, p.label));
    };
  }
  X.AndroidCheckbox = andChoice('checkbox'); X.AndroidRadio = andChoice('radio'); X.AndroidSwitch = andChoice('switch');

  })();
  /* ---- 11c-labels-data.js ---- */
  (function(){
  var Glyph = H.Glyph;
  /* CounterBadge: compact count pill. */
  function CounterBadge(p) {
    return h('span', Object.assign({ className: cx('ra-counter', 'ra-tag--' + (p.tone || 'neutral'), p.className) }, omit(p, ['tone', 'value', 'className', 'children'])), p.value !== undefined ? p.value : p.children);
  }
  X.CounterBadge = CounterBadge;

  /* Avatar: Small 32 / Medium 40 / Large 64 · Initials, Image, Fallback. */
  function Avatar(p) {
    var size = { small: 'sm', medium: 'md', large: 'lg' }[p.size] || p.size || 'md';
    var content = p.src ? h('img', { src: p.src, alt: p.alt || '' }) : h('span', { 'aria-hidden': p.label ? 'true' : undefined }, p.initials || '?');
    return h('span', { className: cx('ra-avatar', 'ra-avatar--' + size, p.className), role: p.label ? 'img' : undefined, 'aria-label': p.label }, content);
  }
  X.Avatar = Avatar;

  /* Chip: composable Input / Filter chip with independent Selected and interaction. */
  function Chip(p) {
    var kind = p.kind || 'filter';
    var sel = !!p.selected;
    var lead = p.leading !== undefined ? p.leading : (kind === 'input' ? h('span', { className: 'ra-chip__dot' }) : (sel ? h(Glyph, { name: 'check', size: 16 }) : h(Glyph, { name: 'filter', size: 16 })));
    var main = h('button', {
      type: 'button', className: 'ra-chip__main', disabled: p.disabled, onClick: p.onClick,
      'aria-pressed': kind === 'filter' ? String(sel) : undefined
    }, lead, h('span', null, p.label || p.children));
    var dismiss = kind === 'input' && p.onDismiss ? h('button', { type: 'button', className: 'ra-chip__dismiss', disabled: p.disabled, 'aria-label': 'Remove ' + (p.label || ''), onClick: p.onDismiss }, h(Glyph, { name: 'x', size: 14 })) : null;
    return h('span', { className: cx('ra-chip', 'ra-chip--' + kind, sel && 'is-selected', p.disabled && 'is-disabled', p.className) }, main, dismiss);
  }
  X.Chip = Chip;

  function ListContent(p) {
    return h('span', { className: 'ra-listrow__content' },
      h('span', { className: 'ra-listrow__title' }, p.title),
      p.secondary ? h('span', { className: 'ra-listrow__secondary' }, p.secondary) : null,
      p.metadata ? h('span', { className: 'ra-listrow__secondary' }, p.metadata) : null,
      p.status ? h(StatusBadge, { status: p.status.tone || p.status.status || 'information' }, p.status.label) : null);
  }
  /* ListRow: Row / Browse, Row / Selection, Row / Setting. */
  function ListRow(p) {
    var kind = p.kind || 'browse';
    var icon = p.icon === false ? null : h('span', { className: 'ra-listrow__lead', 'aria-hidden': 'true' }, H.Visual(p.icon || (kind === 'setting' ? 'radio' : kind === 'selection' ? 'filter' : 'folder-lock')));
    var cls = cx('ra-listrow', 'ra-listrow--' + kind, p.selected && 'is-selected', p.disabled && 'is-disabled', p.className);
    if (kind === 'browse') {
      return h('button', { type: 'button', className: cls, disabled: p.disabled, onClick: p.onClick, 'aria-current': p.selected ? 'true' : undefined },
        p.selected ? h('span', { className: 'ra-rail', 'aria-hidden': 'true' }) : null, icon, h(ListContent, p),
        h('span', { className: 'ra-listrow__trail', 'aria-hidden': 'true' }, h(Glyph, { name: 'chevron-right', size: 20 })));
    }
    var control = kind === 'selection'
      ? h(Checkbox, { checked: p.checked, defaultChecked: p.defaultChecked, onChange: p.onChange, disabled: p.disabled, 'aria-label': typeof p.title === 'string' ? p.title : undefined })
      : h(Switch, { checked: p.checked, defaultChecked: p.defaultChecked, onChange: p.onChange, disabled: p.disabled, 'aria-label': typeof p.title === 'string' ? p.title : undefined });
    return h('label', { className: cls }, icon, h(ListContent, p), h('span', { className: 'ra-listrow__control' }, control));
  }
  X.ListRow = ListRow;

  /* ReadinessRow: static validation outcome. */
  function ReadinessRow(p) {
    var st = p.status || 'complete';
    var map = { complete: ['success', 'Complete'], checking: ['information', 'Checking'], attention: ['danger', 'Needs attention'] };
    var m = map[st] || map.complete;
    return h('div', { className: cx('ra-listrow', 'ra-readiness', p.className), role: 'group', 'aria-label': p.title },
      h('span', { className: 'ra-listrow__content' },
        h('span', { className: 'ra-listrow__title' }, p.title || 'Readiness check'),
        p.detail ? h('span', { className: 'ra-listrow__secondary' }, p.detail) : null,
        h(StatusBadge, { status: m[0], className: 'ra-readiness__badge' }, p.statusLabel || m[1])));
  }
  X.ReadinessRow = ReadinessRow;

  /* Card: Basic, Interactive, Selected, Poster. */
  function Card(p) {
    var type = p.type || 'basic';
    if (type === 'poster') {
      return h('article', { className: cx('ra-card-poster', p.className) },
        h('div', { className: 'ra-card-poster__visual' }, p.image ? h('img', { src: p.image, alt: p.imageAlt || '' }) : null,
          p.sticker ? h('span', { className: 'ra-card-poster__sticker' }, p.sticker) : null),
        h('div', { className: 'ra-card-poster__body' },
          p.badge ? h('span', { className: 'ra-card-poster__badge' }, p.badge) : null,
          p.kicker ? h('div', { className: 'ra-card-poster__kicker' }, p.kicker) : null,
          h('h3', { className: 'ra-card-poster__title' }, p.title),
          p.subtitle ? h('div', { className: 'ra-card-poster__subtitle' }, p.subtitle) : null,
          p.body ? h('p', { className: 'ra-card-poster__text' }, p.body) : null,
          p.tag ? h('div', { className: 'ra-card__meta' }, h(Tag, { tone: 'magenta' }, p.tag), p.metadata ? h('span', { className: 'ra-card-poster__meta' }, p.metadata) : null) : null,
          h('div', { className: 'ra-card-poster__footer' }, h('span', null, p.footer), p.action ? h(Button, { variant: 'expressive', trailingIcon: 'arrow-right', onClick: p.onAction }, p.action) : null)));
    }
    var interactive = type === 'interactive' || type === 'selected';
    var Tagname = interactive && p.onClick ? 'button' : 'article';
    return h(Tagname, {
      className: cx('ra-card', 'ra-card--' + type, p.disabled && 'is-disabled', p.className),
      onClick: p.onClick, disabled: Tagname === 'button' ? p.disabled : undefined, type: Tagname === 'button' ? 'button' : undefined,
      'aria-pressed': Tagname === 'button' && type === 'selected' ? 'true' : undefined, tabIndex: interactive && Tagname !== 'button' ? 0 : undefined
    },
      type === 'selected' ? h('span', { className: 'ra-rail', 'aria-hidden': 'true' }) : null,
      type === 'selected' ? h('span', { className: 'ra-card__selected' }, 'Selected') : null,
      h('div', { className: 'ra-card__header' },
        p.icon !== false ? h('span', { className: 'ra-card__visual', 'aria-hidden': 'true' }, H.Visual(p.icon || 'audio-lines', 24)) : null,
        h('div', { className: 'ra-card__heading' },
          p.badge ? h(StatusBadge, { status: p.badgeStatus || 'neutral' }, p.badge) : null,
          h('h3', { className: 'ra-card__title' }, p.title),
          p.subtitle ? h('div', { className: 'ra-card__subtitle' }, p.subtitle) : null),
        p.menu ? h(IconButton, { variant: 'ghost', size: 'sm', icon: 'add', label: p.menu }) : null),
      p.body ? h('p', { className: 'ra-card__body' }, p.body) : null,
      p.tag || p.metadata ? h('div', { className: 'ra-card__meta' }, p.tag ? h(Tag, null, p.tag) : null, p.metadata ? h('span', null, p.metadata) : null) : null,
      p.footer || p.action ? h('div', { className: 'ra-card__divider' }) : null,
      p.footer || p.action ? h('div', { className: 'ra-card__footer' }, h('span', null, p.footer), p.action ? h(Button, { variant: 'secondary', trailingIcon: 'arrow-right' }, p.action) : null) : null);
  }
  X.Card = Card;

  /* Data table primitives. */
  function TableHeaderCell(p) {
    var sort = p.sort === undefined ? 'none' : p.sort;
    var glyph = { none: '↕', ascending: '↑', descending: '↓' }[sort];
    var ariaSort = { ascending: 'ascending', descending: 'descending' }[sort] || (sort === false ? undefined : 'none');
    var inner = sort === false ? h('span', { className: 'ra-th__label' }, p.label)
      : h('button', { type: 'button', className: 'ra-th__btn', onClick: p.onSort, disabled: p.disabled }, h('span', { className: 'ra-th__label' }, p.label), h('span', { 'aria-hidden': 'true' }, glyph));
    return h('th', { className: cx('ra-th', p.align === 'end' && 'is-end', p.className), scope: 'col', 'aria-sort': ariaSort, style: p.style }, inner);
  }
  function TableCell(p) { return h('td', { className: cx('ra-td', p.align === 'end' && 'is-end', p.className) }, p.children); }
  function TableRow(p) {
    return h('tr', { className: cx('ra-tr', p.selected && 'is-selected', p.disabled && 'is-disabled', p.className), 'aria-selected': p.onSelect || p.selectable ? String(!!p.selected) : undefined },
      p.selectable !== false ? h('td', { className: 'ra-td ra-td--select' }, h(Checkbox, { checked: !!p.selected, onChange: p.onSelect || function () {}, disabled: p.disabled, 'aria-label': p.label ? 'Select ' + p.label : 'Select row' })) : null,
      p.children);
  }
  X.TableHeaderCell = TableHeaderCell; X.TableCell = TableCell; X.TableRow = TableRow;

  /* DataTable: composed table with caption, toolbar, bulk actions, states and compact presentation. */
  function DataTable(p) {
    var cols = p.columns || [], rows = p.rows || [], state = p.state || 'results';
    var selected = rows.filter(function (r) { return r.selected; }).length;
    var all = rows.length && selected === rows.length;
    var toolbar = h('div', { className: 'ra-table__toolbar' },
      h(X.TextInput, { label: p.searchLabel || 'Search records', kind: 'search', placeholder: 'Search', leadingIcon: 'search' }),
      p.toolbarAction ? h(Button, { variant: 'secondary' }, p.toolbarAction) : null);
    var feedback = null;
    if (state !== 'results') {
      var msg = { empty: ['No records yet', 'Create the first record to see it here.'], 'no-results': ['No matching records', 'Try a different search or clear filters.'], loading: ['Loading records', 'Keep this page open.'], error: ['Records could not load', 'Check the connection, then try again.'] }[state];
      feedback = X.EmptyState ? h(X.EmptyState, { title: msg[0], body: msg[1], spot: state === 'error' ? 'offline' : state === 'no-results' ? 'no-results' : state === 'loading' ? null : 'no-data', loading: state === 'loading', action: state === 'error' ? 'Retry' : undefined })
        : h('div', { className: 'ra-table__feedback', role: state === 'error' ? 'alert' : 'status' }, h('strong', null, msg[0]), h('span', null, msg[1]));
    }
    var body;
    if (p.presentation === 'compact') {
      body = h('div', { className: 'ra-table__compact' }, rows.map(function (r, i) {
        return h(ListRow, { key: r.id || i, kind: 'selection', title: r.cells[0], secondary: r.cells.slice(1).join(' · '), checked: !!r.selected, onChange: function () {}, icon: false });
      }));
    } else {
      body = h('div', { className: 'ra-table__scroll' }, h('table', { className: 'ra-table__grid' },
        h('thead', null, h('tr', { className: 'ra-tr ra-tr--head' },
          h('th', { className: 'ra-th ra-td--select', scope: 'col' }, h(Checkbox, { checked: !!all, indeterminate: selected > 0 && !all, onChange: function () {}, 'aria-label': 'Select all on this page' })),
          cols.map(function (c, i) { return h(TableHeaderCell, { key: i, label: c.label, sort: c.sort, align: c.align }); }))),
        h('tbody', null, rows.map(function (r, i) {
          return h(TableRow, { key: r.id || i, selected: r.selected, label: String(r.cells[0]) }, r.cells.map(function (v, j) { return h(TableCell, { key: j, align: cols[j] && cols[j].align }, v); }));
        }))));
    }
    return h('section', { className: cx('ra-table', p.presentation === 'compact' && 'ra-table--compact', p.className), 'aria-label': p.caption },
      h('h3', { className: 'ra-table__caption' }, p.caption),
      p.summary ? h('div', { className: 'ra-table__summary' }, p.summary) : null,
      toolbar,
      state === 'results' && selected ? h('div', { className: 'ra-table__bulk' }, h('span', null, selected + ' selected on this page'), (p.bulkActions || []).map(function (a, i) { return h(Button, { key: i, variant: 'secondary' }, a); })) : null,
      state === 'results' ? body : feedback,
      state === 'results' ? h('div', { className: 'ra-table__pagination' }, h(Button, { variant: 'secondary', disabled: true, leadingIcon: undefined }, 'Previous'), h('span', null, p.range || ('1–' + rows.length + ' of ' + rows.length)), h(Button, { variant: 'secondary', disabled: true }, 'Next')) : null);
  }
  X.DataTable = DataTable;

  /* FileRow: per-file acquisition, validation and durable-add row. */
  function FileRow(p) {
    var st = p.state || 'selected';
    var text = { selected: 'Selected — not checked', checking: 'Checking file', ready: 'Ready to add', saving: 'Adding file' + (p.progress != null ? ' · ' + p.progress + '%' : ''), complete: 'Added', rejected: 'Rejected — choose another file', failed: 'Not added — retry available', cancelled: 'Cancelled', unavailable: 'Unavailable' }[st];
    var danger = st === 'rejected' || st === 'failed';
    var progress = st === 'checking' || st === 'saving' ? h(X.ProgressBar || 'div', { size: 'small', value: st === 'saving' ? p.progress : undefined, label: text }) : null;
    return h('div', { className: cx('ra-filerow', 'ra-filerow--' + st, p.className), role: 'group', 'aria-label': p.filename },
      h('div', { className: 'ra-filerow__name' }, p.filename),
      p.metadata ? h('div', { className: 'ra-filerow__meta' }, p.metadata) : null,
      h('div', { className: cx('ra-filerow__status', danger && 'is-danger'), role: danger ? 'alert' : 'status' }, p.statusText || text),
      p.details ? h('div', { className: 'ra-filerow__meta' }, p.details) : null,
      progress,
      p.actions ? h('div', { className: 'ra-filerow__actions' }, p.actions) : null);
  }
  X.FileRow = FileRow;

  })();
  /* ---- 11d-navigation.js ---- */
  (function(){
  var Glyph = H.Glyph;
  var DEST = ['connect', 'control', 'library', 'scenes'];
  var DEST_LABEL = { connect: 'Connect', control: 'Control', library: 'Library', scenes: 'Scenes' };
  function destIcon(d, sel, size) { return DEST.indexOf(d) >= 0 ? h(H.Icon, { name: d + (sel ? '-filled' : '-outline'), size: size || 24 }) : H.Visual(d, size || 24); }
  function modeBadge(mode) {
    if (!mode || mode === 'normal') return null;
    return h('span', { className: 'ra-modebadge ra-modebadge--' + mode }, h('span', { className: 'ra-modebadge__dot', 'aria-hidden': 'true' }), mode === 'live' ? 'LIVE' : 'PERFORMANCE');
  }
  H.modeBadge = modeBadge;

  /* SidebarItem: Expanded or Collapsed; Default, Hover, Active, Focus, Disabled. */
  function SidebarItem(p) {
    return h('a', { href: p.href || '#', className: cx('ra-sideitem', p.active && 'is-active', p.collapsed && 'is-collapsed', p.disabled && 'is-disabled', p.className), 'aria-current': p.active ? 'page' : undefined, 'aria-disabled': p.disabled ? 'true' : undefined, 'aria-label': p.collapsed ? p.label : undefined, title: p.collapsed ? p.label : undefined, onClick: p.onClick },
      p.active ? h('span', { className: 'ra-sideitem__indicator', 'aria-hidden': 'true' }) : null,
      h('span', { className: 'ra-sideitem__icon', 'aria-hidden': 'true' }, p.icon ? H.Visual(p.icon, 18) : (p.active ? '◆' : '◇')),
      p.collapsed ? null : h('span', { className: 'ra-sideitem__label' }, p.label),
      !p.collapsed && p.count != null ? h('span', { className: 'ra-sideitem__count' }, p.count) : null);
  }
  X.SidebarItem = SidebarItem;

  /* Sidebar: Expanded / Collapsed × Normal, Live, Performance mode. */
  function Sidebar(p) {
    var items = p.items || [], footer = p.footer || [];
    var item = function (it, i) { return h(SidebarItem, Object.assign({ key: i, collapsed: p.collapsed }, it)); };
    return h('nav', { className: cx('ra-sidebar', p.collapsed && 'is-collapsed', p.mode && 'ra-sidebar--' + p.mode, p.className), 'aria-label': p.label || 'Primary' },
      h('div', { className: 'ra-sidebar__header' }, h('span', { className: 'ra-sidebar__brand' }, p.brand || 'BM'), p.collapsed ? null : modeBadge(p.mode)),
      items.map(item), h('div', { className: 'ra-sidebar__space' }), footer.map(item));
  }
  X.Sidebar = Sidebar;

  /* TopNavigation: Desktop / Mobile × Normal, Live, Performance. */
  function TopNavigation(p) {
    var mobile = p.viewport === 'mobile';
    return h('header', { className: cx('ra-topnav', mobile && 'is-mobile', p.className) },
      h('span', { className: 'ra-topnav__brand' }, p.brand || 'BONE MAESTRO'),
      !mobile ? h('nav', { className: 'ra-topnav__items', 'aria-label': 'Primary' }, (p.items || []).map(function (it, i) { return h('a', { key: i, href: it.href || '#', className: cx('ra-topnav__item', it.active && 'is-active'), 'aria-current': it.active ? 'page' : undefined }, it.label); })) : null,
      modeBadge(p.mode), h('span', { className: 'ra-topnav__space' }),
      !mobile ? h('button', { type: 'button', className: 'ra-topnav__search' }, h(Glyph, { name: 'search', size: 16 }), 'Search') : null,
      !mobile ? h(X.Avatar, { size: 'sm', initials: p.initials || 'AM', label: p.account || 'Account' }) : h('button', { type: 'button', className: 'ra-ios__btn ra-topnav__menu', 'aria-label': 'Open menu' }, h(Glyph, { name: 'menu', size: 22 })));
  }
  X.TopNavigation = TopNavigation;

  /* ChoiceItem / ChoiceGroup: arbitrary-count tabs or segments. */
  function ChoiceItem(p) {
    return h('button', { type: 'button', role: p.kind === 'segment' ? 'radio' : 'tab', className: cx('ra-choiceitem', 'ra-choiceitem--' + (p.kind || 'tab'), p.selected && 'is-selected', p.className), 'aria-selected': p.kind === 'segment' ? undefined : String(!!p.selected), 'aria-checked': p.kind === 'segment' ? String(!!p.selected) : undefined, disabled: p.disabled, onClick: p.onClick, tabIndex: p.selected ? 0 : -1 }, p.label || p.children);
  }
  function ChoiceGroup(p) {
    var st = React.useState(p.defaultValue != null ? p.defaultValue : 0);
    var val = p.value != null ? p.value : st[0];
    var kind = p.kind === 'segments' ? 'segment' : 'tab';
    function pick(i) { st[1](i); p.onChange && p.onChange(i); }
    function onKey(e) {
      var n = p.items.length, d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!d) return; e.preventDefault(); var i = (val + d + n) % n; pick(i);
      var b = e.currentTarget.querySelectorAll('button')[i]; b && b.focus();
    }
    return h('div', { className: cx('ra-choicegroup', 'ra-choicegroup--' + kind, p.className), role: kind === 'segment' ? 'radiogroup' : 'tablist', 'aria-label': p.label, onKeyDown: onKey },
      (p.items || []).map(function (it, i) { var o = typeof it === 'string' ? { label: it } : it; return h(ChoiceItem, { key: i, kind: kind, label: o.label, disabled: o.disabled, selected: i === val, onClick: function () { pick(i); } }); }));
  }
  X.ChoiceItem = ChoiceItem; X.ChoiceGroup = ChoiceGroup;
  /* Tabs and SegmentedControl: compatibility presets over ChoiceGroup. */
  X.Tabs = function (p) { return h(ChoiceGroup, Object.assign({ kind: 'tabs', items: ['Overview', 'Activity', 'Settings'] }, p)); };
  X.SegmentedControl = function (p) { return h(ChoiceGroup, Object.assign({ kind: 'segments', items: ['Day', 'Week', 'Month'], defaultValue: 1 }, p)); };

  /* Breadcrumbs: desktop trail; mobile back-context. */
  function Breadcrumbs(p) {
    var items = p.items || [];
    if (p.viewport === 'mobile') {
      var parent = items[items.length - 2];
      return h('nav', { className: 'ra-crumbs', 'aria-label': 'Breadcrumb' }, h('a', { href: parent && parent.href || '#', className: 'ra-crumbs__link' }, '‹ ' + (parent ? parent.label : 'Back')), h('span', { className: 'ra-crumbs__sep', 'aria-hidden': 'true' }, '/'), h('span', { className: 'ra-crumbs__current', 'aria-current': 'page' }, items[items.length - 1] && items[items.length - 1].label));
    }
    return h('nav', { className: cx('ra-crumbs', p.className), 'aria-label': 'Breadcrumb' }, h('ol', null, items.map(function (it, i) {
      var last = i === items.length - 1;
      return h('li', { key: i }, last ? h('span', { className: 'ra-crumbs__current', 'aria-current': 'page' }, it.label) : h('a', { href: it.href || '#', className: 'ra-crumbs__link' }, it.label), last ? null : h('span', { className: 'ra-crumbs__sep', 'aria-hidden': 'true' }, '›'));
    })));
  }
  X.Breadcrumbs = Breadcrumbs;

  /* Pagination: page numbers on desktop, "Page n of m" on mobile; Previous/Next always. */
  function Pagination(p) {
    var st = React.useState(p.defaultPage || 1), page = p.page || st[0], total = p.total || 8;
    function go(n) { if (n < 1 || n > total) return; st[1](n); p.onChange && p.onChange(n); }
    var nums = total <= 6 ? Array.from({ length: total }, function (_, i) { return i + 1; }) : [1, 2, 3, '…', total];
    if (total > 6 && page > 3 && page < total) nums = [1, '…', page, '…', total];
    return h('nav', { className: cx('ra-pagination', p.className), 'aria-label': 'Pagination' },
      h('button', { type: 'button', className: 'ra-pagination__step', onClick: function () { go(page - 1); }, disabled: page <= 1, 'aria-label': 'Previous page' }, '‹'),
      p.viewport === 'mobile' ? h('span', { className: 'ra-pagination__summary' }, 'Page ' + page + ' of ' + total)
        : nums.map(function (n, i) { return n === '…' ? h('span', { key: i, className: 'ra-pagination__gap', 'aria-hidden': 'true' }, '…') : h('button', { key: i, type: 'button', className: cx('ra-pagination__page', n === page && 'is-current'), 'aria-current': n === page ? 'page' : undefined, onClick: function () { go(n); } }, n); }),
      h('button', { type: 'button', className: 'ra-pagination__step', onClick: function () { go(page + 1); }, disabled: page >= total, 'aria-label': 'Next page' }, '›'));
  }
  X.Pagination = Pagination;

  /* DestinationItem: Tab, Row or Rail presentation of a primary destination. */
  function DestinationItem(p) {
    var pres = p.presentation || 'tab';
    return h('a', { href: p.href || '#', className: cx('ra-dest', 'ra-dest--' + pres, p.selected && 'is-selected', p.className), 'aria-current': p.selected ? 'page' : undefined, onClick: p.onClick },
      h('span', { className: 'ra-dest__icon', 'aria-hidden': 'true' }, destIcon(p.destination || 'connect', p.selected)),
      h('span', { className: 'ra-dest__label' }, p.label || DEST_LABEL[p.destination] || p.destination));
  }
  X.DestinationItem = DestinationItem;

  /* NavigationShell: Bottom bar, Sidebar, Rail or Top bar host for destinations. */
  function NavigationShell(p) {
    var pres = p.presentation || 'bottom';
    var itemPres = pres === 'sidebar' ? 'row' : pres === 'rail' ? 'rail' : pres === 'top' ? 'row' : 'tab';
    var dests = p.destinations || DEST;
    return h('nav', { className: cx('ra-shell', 'ra-shell--' + pres, p.className), 'aria-label': p.label || 'Primary' },
      p.brand ? h('div', { className: 'ra-shell__brand' }, p.brand) : null,
      h('div', { className: 'ra-shell__dests' }, dests.map(function (d, i) { var o = typeof d === 'string' ? { destination: d } : d; return h(DestinationItem, Object.assign({ key: i, presentation: itemPres, selected: (p.selected || dests[0]) === (o.destination || o.label) }, o)); })));
  }
  X.NavigationShell = NavigationShell;

  /* PrimaryNavigation: the four canonical destinations, placed for iPhone tabs, iPad sidebar, Web sidebar or Web top. */
  function PrimaryNavigation(p) {
    var map = { 'iphone': 'bottom', 'ipad': 'sidebar', 'web-sidebar': 'sidebar', 'web-top': 'top' };
    return h(NavigationShell, { presentation: map[p.placement || 'iphone'], selected: p.selected || 'connect', brand: (p.placement === 'ipad' || p.placement === 'web-sidebar') ? 'BONE MAESTRO' : undefined, className: cx('ra-primarynav', 'ra-primarynav--' + (p.placement || 'iphone'), p.className) });
  }
  X.PrimaryNavigation = PrimaryNavigation;

  /* AdaptiveDestination / AdaptiveMenu: LTR or RTL, default or enlarged text, wrapping labels. */
  function AdaptiveDestination(p) {
    return h('a', { href: p.href || '#', className: cx('ra-adest', p.enlarged && 'is-enlarged', p.selected && 'is-selected', p.className), dir: p.dir, 'aria-current': p.selected ? 'page' : undefined },
      h('span', { className: 'ra-dest__icon', 'aria-hidden': 'true' }, destIcon(p.destination || 'connect', p.selected)),
      h('span', { className: 'ra-adest__label' }, p.label || DEST_LABEL[p.destination]));
  }
  function AdaptiveMenu(p) {
    var labels = p.labels || {};
    return h('nav', { className: cx('ra-amenu', p.className), dir: p.dir, 'aria-label': p.label || 'Destinations' },
      DEST.map(function (d) { return h(AdaptiveDestination, { key: d, destination: d, label: labels[d], dir: p.dir, enlarged: p.enlarged, selected: (p.selected || 'connect') === d }); }));
  }
  X.AdaptiveDestination = AdaptiveDestination; X.AdaptiveMenu = AdaptiveMenu;

  /* AndroidNavigation: Material 3 navigation bar (compact) or rail (expanded). */
  function AndroidNavigation(p) {
    var rail = p.placement === 'rail', sel = p.selected || 'connect', dests = p.destinations || DEST;
    return h('nav', { className: cx('ra-andnav', rail && 'is-rail', p.className), 'aria-label': 'Primary' }, dests.map(function (d) {
      var on = d === sel;
      return h('a', { key: d, href: '#', className: cx('ra-andnav__item', on && 'is-selected'), 'aria-current': on ? 'page' : undefined },
        h('span', { className: 'ra-andnav__pill' }, destIcon(d, on)), h('span', { className: 'ra-andnav__label' }, DEST_LABEL[d] || d));
    }));
  }
  X.AndroidNavigation = AndroidNavigation;

  /* iOS adapters (design references for SwiftUI): navigation bar, tab bar, toolbar, segmented control, list row, back, sheet. */
  function iosBtn(icon, label, onClick) { return h('button', { type: 'button', className: 'ra-ios__btn', 'aria-label': label, onClick: onClick }, h(Glyph, { name: icon, size: 22 })); }
  function IOSNavigationBar(p) {
    var reg = p.sizeClass === 'regular';
    var lead = p.back ? h(IOSBackButton, { label: p.back }) : (reg && p.sidebarToggle !== false ? iosBtn('sidebar', 'Show sidebar') : h('span', { className: 'ra-iosnav__lead' }));
    return h('div', { className: cx('ra-ios', 'ra-iosnav', p.large && 'is-large', reg && 'is-regular', p.className) },
      h('div', { className: 'ra-iosnav__bar' },
        p.windowControls ? h('span', { className: 'ra-ioswin', role: 'group', 'aria-label': 'Window controls' }, h('button', { type: 'button', 'aria-label': 'Close window', className: 'is-close' }), h('button', { type: 'button', 'aria-label': 'Minimize window', className: 'is-min' }), h('button', { type: 'button', 'aria-label': 'Window layouts', className: 'is-max' })) : null,
        lead,
        p.large ? h('span', { className: 'ra-iosnav__space' }) : h('span', { className: 'ra-iosnav__title' }, p.title),
        iosBtn('more-h', 'More')),
      p.large ? h('h1', { className: 'ra-iosnav__large' }, p.title) : null);
  }
  function IOSBackButton(p) { return h('button', { type: 'button', className: cx('ra-ios__back', p.compact && 'is-compact'), onClick: p.onClick, 'aria-label': p.compact ? 'Back to ' + p.label : undefined }, h(Glyph, { name: 'chevron-left', size: 22 }), p.compact ? null : h('span', null, p.label)); }
  function IOSTabBar(p) {
    var tabs = p.tabs || [{ label: 'Home', icon: 'home' }, { label: 'Library', icon: 'library-outline' }, { label: 'Performance', icon: 'control-outline' }];
    var sel = p.selected || 0;
    var reg = p.sizeClass === 'regular';
    if (p.minimized && !reg) { var t0 = tabs[sel]; return h('nav', { className: cx('ra-ios', 'ra-iostab', 'is-minimized', p.className), 'aria-label': 'Tabs' }, h('a', { href: '#', className: 'ra-iostab__item is-selected', 'aria-current': 'page', 'aria-label': t0.label + ', tab ' + (sel + 1) + ' of ' + tabs.length }, H.Visual(t0.icon, 24))); }
    return h('nav', { className: cx('ra-ios', 'ra-iostab', reg && 'is-regular', p.className), 'aria-label': 'Tabs' }, tabs.map(function (t, i) {
      return h('a', { key: i, href: '#', className: cx('ra-iostab__item', i === sel && 'is-selected'), 'aria-current': i === sel ? 'page' : undefined }, reg ? null : H.Visual(t.icon, 26), h('span', null, t.label));
    }));
  }
  function IOSToolbar(p) {
    var items = p.editing ? [['trash', 'Delete'], ['copy', 'Duplicate'], ['check', 'Done']] : [['share', 'Share'], ['plus', 'Add'], ['more-h', 'More']];
    return h('div', { className: cx('ra-ios', 'ra-iostoolbar', p.sizeClass === 'regular' && 'is-regular', p.className), role: 'toolbar' }, items.map(function (it, i) { return h('span', { key: i, style: { display: 'contents' } }, i ? h('span', { className: 'ra-iosnav__space' }) : null, it[0] === 'plus' ? h('button', { type: 'button', className: 'ra-ios__btn', 'aria-label': it[1] }, h(H.Icon, { name: 'add', size: 22 })) : iosBtn(it[0], it[1])); }));
  }
  function IOSSegmentedControl(p) {
    var st = React.useState(p.defaultValue || 0), v = p.value != null ? p.value : st[0];
    return h('div', { className: cx('ra-ios', 'ra-iosseg', p.sizeClass === 'regular' && 'is-regular', p.className), role: 'radiogroup', 'aria-label': p.label }, (p.items || ['Now', 'Week', 'Month']).map(function (l, i) {
      return h('button', { key: i, type: 'button', role: 'radio', 'aria-checked': String(i === v), className: cx('ra-iosseg__item', i === v && 'is-selected'), onClick: function () { st[1](i); p.onChange && p.onChange(i); } }, l);
    }));
  }
  function IOSListItem(p) {
    var acc = p.accessory || 'disclosure';
    return h('a', { href: '#', className: cx('ra-ios', 'ra-ioslist', p.sizeClass === 'regular' && 'is-regular', p.className) },
      h('span', { className: 'ra-ioslist__icon', 'aria-hidden': 'true' }, H.Visual(p.icon || 'audio-lines', 22)),
      h('span', { className: 'ra-ioslist__title' }, p.title),
      acc === 'value' ? h('span', { className: 'ra-ioslist__value' }, p.value) : null,
      acc !== 'none' ? h('span', { className: 'ra-ioslist__chev', 'aria-hidden': 'true' }, h(Glyph, { name: 'chevron-right', size: 18 })) : null);
  }
  function IOSSheet(p) {
    var form = p.sizeClass === 'regular';
    return h('div', { className: cx('ra-ios', 'ra-iossheet', p.detent === 'large' && 'is-large', form && 'is-form', p.className), role: 'dialog', 'aria-label': p.title, 'aria-modal': 'true' },
      form ? null : h('div', { className: 'ra-iossheet__grabber', 'aria-hidden': 'true' }),
      h('div', { className: 'ra-iossheet__bar' }, h('button', { type: 'button', className: 'ra-ios__link' }, p.cancel || 'Cancel'), h('span', { className: 'ra-iosnav__title' }, p.title), h('button', { type: 'button', className: 'ra-ios__link is-strong' }, p.confirm || 'Done')),
      h('div', { className: 'ra-iossheet__content' }, p.heading ? h('h2', { className: 'ra-iossheet__heading' }, p.heading) : null, p.children));
  }
  X.IOSNavigationBar = IOSNavigationBar; X.IOSBackButton = IOSBackButton; X.IOSTabBar = IOSTabBar; X.IOSToolbar = IOSToolbar;
  X.IOSSegmentedControl = IOSSegmentedControl; X.IOSListItem = IOSListItem; X.IOSSheet = IOSSheet;

  })();
  /* ---- 11e-feedback.js ---- */
  (function(){
  var Glyph = H.Glyph;
  var TONE_ICON = { information: 'info', success: 'circle-check', warning: 'alert', danger: 'circle-x', live: 'audio-lines' };
  function toneIcon(tone) { return h('span', { className: 'ra-fb__icon', 'aria-hidden': 'true' }, h(Glyph, { name: TONE_ICON[tone] || 'info', size: 18 })); }

  /* Alert: page-level message, solid tone fill. */
  function Alert(p) {
    var tone = p.tone || 'information';
    return h('div', { className: cx('ra-alert', 'ra-alert--' + tone, p.className), role: tone === 'danger' || tone === 'warning' ? 'alert' : 'status' },
      toneIcon(tone),
      h('div', { className: 'ra-fb__msg' }, h('div', { className: 'ra-fb__title' }, p.title), p.description ? h('div', { className: 'ra-fb__desc' }, p.description) : null),
      h('div', { className: 'ra-fb__actions' }, p.action ? h(Button, { variant: 'secondary', size: 'sm', onClick: p.onAction }, p.action) : null, p.onDismiss ? h(Button, { variant: 'tertiary', size: 'sm', onClick: p.onDismiss, className: 'ra-alert__dismiss' }, p.dismissLabel || 'Dismiss') : null));
  }
  X.Alert = Alert;

  /* Toast: transient raised confirmation with a tone border. */
  function Toast(p) {
    var tone = p.tone || 'success';
    return h('div', { className: cx('ra-toast', 'ra-toast--' + tone, p.className), role: tone === 'danger' ? 'alert' : 'status' },
      toneIcon(tone),
      h('div', { className: 'ra-fb__msg' }, h('div', { className: 'ra-fb__title' }, p.title), p.description ? h('div', { className: 'ra-fb__desc' }, p.description) : null),
      p.onDismiss ? h(Button, { variant: 'tertiary', size: 'sm', onClick: p.onDismiss }, p.dismissLabel || 'Dismiss') : null);
  }
  X.Toast = Toast;

  /* InlineStatus: compact local status — tone label + detail. */
  function InlineStatus(p) {
    var tone = p.tone || 'information';
    return h('div', { className: cx('ra-inline', p.className), role: 'status' },
      h('span', { className: 'ra-inline__label ra-inline__label--' + tone }, h('span', { className: 'ra-inline__dot', 'aria-hidden': 'true' }), p.label),
      p.detail ? h('span', { className: 'ra-inline__detail' }, p.detail) : null);
  }
  X.InlineStatus = InlineStatus;

  /* Snackbar: bottom-surface feedback — Message, Action or Loading. */
  function Snackbar(p) {
    var mode = p.mode || 'message', tone = p.tone || 'success';
    return h('div', { className: cx('ra-snackbar', 'ra-toast--' + tone, mode === 'loading' && 'is-loading', p.className), role: 'status' },
      mode === 'loading' ? h(Spinner) : h('span', { className: 'ra-snackbar__icon', 'aria-hidden': 'true' }, h(Glyph, { name: TONE_ICON[tone], size: 18 })),
      h('div', { className: 'ra-fb__title ra-snackbar__msg' }, p.message),
      mode === 'loading' && p.progress ? h('span', { className: 'ra-snackbar__progress' }, p.progress) : null,
      mode === 'action' && p.action ? h(Button, { variant: 'tertiary', size: 'sm', onClick: p.onAction, className: 'ra-snackbar__action' }, p.action) : null);
  }
  X.Snackbar = Snackbar;

  /* ProgressBar: Large or Small · Determinate, Complete, Indeterminate, Paused. */
  function ProgressBar(p) {
    var state = p.state || (p.value == null ? 'indeterminate' : 'determinate');
    var v = state === 'complete' ? 100 : (p.value != null ? p.value : 64);
    var valueText = state === 'complete' ? '100%' : state === 'paused' ? 'Paused · ' + v + '%' : state === 'indeterminate' ? '' : v + '%';
    return h('div', { className: cx('ra-progress', p.size === 'small' && 'is-small', 'is-' + state, p.className) },
      p.label || valueText ? h('div', { className: 'ra-progress__top' }, h('span', null, p.label), h('span', { className: 'ra-progress__value' }, valueText)) : null,
      h('div', { className: 'ra-progress__track', role: 'progressbar', 'aria-label': p.label, 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': state === 'indeterminate' ? undefined : v, 'aria-valuetext': valueText || undefined },
        h('span', { className: 'ra-progress__bar', style: state === 'indeterminate' ? undefined : { width: v + '%' } })));
  }
  X.ProgressBar = ProgressBar;

  /* LoadingSpinner: Small 16 / Medium 24 / Large 32, optional label. */
  function LoadingSpinner(p) {
    var size = p.size || 'medium';
    return h('span', { className: cx('ra-loader', 'ra-loader--' + size, p.className), role: 'status' },
      h('span', { className: 'ra-loader__ring', 'aria-hidden': 'true' }), p.label ? h('span', { className: 'ra-loader__label' }, p.label) : h('span', { className: 'ra-sr' }, 'Loading'));
  }
  X.LoadingSpinner = LoadingSpinner;

  /* SkeletonLoader: Row, Card or Table placeholder. */
  function SkeletonLoader(p) {
    var pat = p.pattern || 'row', L = function (w, hgt, k) { return h('span', { key: k, className: 'ra-skel__line', style: { width: w, height: hgt } }); };
    var body = pat === 'card' ? [h('span', { key: 'm', className: 'ra-skel__media' }), L('100%', 12, 1), L('76%', 8, 2)]
      : pat === 'table' ? [0, 1, 2].map(function (i) { return h('span', { key: i, className: 'ra-skel__row' }, L('30%', 12, 'a'), L('40%', 12, 'b'), L('20%', 12, 'c')); })
      : [h('span', { key: 'a', className: 'ra-skel__avatar' }), h('span', { key: 't', className: 'ra-skel__text' }, L('100%', 12, 1), L('62%', 8, 2))];
    return h('div', { className: cx('ra-skel', 'ra-skel--' + pat, p.className), 'aria-busy': 'true', 'aria-label': p.label || 'Loading content' }, body);
  }
  X.SkeletonLoader = SkeletonLoader;

  /* SpotIllustration: geometric empty-state spot — No data, No results, Offline, Completed. */
  var SPOT = { 'no-data': ['creative', 'database', '00'], 'no-results': ['information', 'search', '0/0'], offline: ['warning', 'circle-x', 'OFF'], completed: ['success', 'circle-check', 'OK'] };
  function SpotIllustration(p) {
    var s = SPOT[p.variant || 'no-data'] || SPOT['no-data'];
    var icon = s[1] === 'database' ? h('svg', { className: 'ra-glyph', width: 34, height: 34, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' }, h('ellipse', { cx: 12, cy: 5, rx: 9, ry: 3 }), h('path', { d: 'M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3' })) : h(Glyph, { name: s[1], size: 34 });
    return h('div', { className: cx('ra-spot', 'ra-spot--' + s[0], p.className), 'aria-hidden': 'true' },
      h('span', { className: 'ra-spot__backdrop' }), h('span', { className: 'ra-spot__orbit' }), h('span', { className: 'ra-spot__a1' }), h('span', { className: 'ra-spot__a2' }),
      h('span', { className: 'ra-spot__tile' }, icon), h('span', { className: 'ra-spot__mark' }, s[2]));
  }
  X.SpotIllustration = SpotIllustration;

  /* EmptyState: spot + title + description + actions. */
  function EmptyState(p) {
    var art = p.image ? h('img', { className: 'ra-empty__art', src: p.image, alt: '' }) : (p.loading ? h(LoadingSpinner, { size: 'large' }) : (p.spot === null ? null : h(SpotIllustration, { variant: p.spot || 'no-data' })));
    return h('section', { className: cx('ra-empty', p.className), 'aria-live': p.loading ? 'polite' : undefined },
      art, h('div', { className: 'ra-empty__content' }, h('h3', { className: 'ra-empty__title' }, p.title), p.body ? h('p', { className: 'ra-empty__body' }, p.body) : null),
      p.action || p.secondaryAction ? h('div', { className: 'ra-empty__actions' }, p.action ? h(Button, { variant: 'primary', onClick: p.onAction, leadingIcon: p.actionIcon }, p.action) : null, p.secondaryAction ? h(Button, { variant: 'secondary', onClick: p.onSecondary }, p.secondaryAction) : null) : null);
  }
  X.EmptyState = EmptyState;

  /* ConnectionStatus: Live or Connected, Pulse or Static. */
  function ConnectionStatus(p) {
    var state = p.state || 'live';
    return h('span', { className: cx('ra-conn', 'ra-conn--' + state, p.pulse !== false && state === 'live' && 'is-pulse', p.className), role: 'status' },
      h('span', { className: 'ra-conn__mark', 'aria-hidden': 'true' }, h('span', { className: 'ra-conn__outer' }), h('span', { className: 'ra-conn__mid' }), h('span', { className: 'ra-conn__dot' })),
      h('span', { className: 'ra-conn__label' }, p.label || (state === 'live' ? 'Live' : 'Connected')));
  }
  X.ConnectionStatus = ConnectionStatus;

  /* Dialog: modal task or confirmation; Compact or Large, optional illustration, Default or Destructive. */
  function Dialog(p) {
    var destructive = p.tone === 'destructive';
    return h('div', { className: cx('ra-dialog', p.size === 'large' && 'is-large', p.className), role: destructive ? 'alertdialog' : 'dialog', 'aria-modal': 'true', 'aria-label': p.title },
      p.image ? h('img', { className: 'ra-dialog__art', src: p.image, alt: '' }) : null,
      h('div', { className: 'ra-dialog__header' }, h('div', { className: 'ra-dialog__heading' }, h('h2', { className: 'ra-dialog__title' }, p.title), p.description ? h('p', { className: 'ra-dialog__desc' }, p.description) : null),
        p.onClose !== false ? h(IconButton, { variant: 'ghost', size: 'sm', icon: 'close', label: 'Close', onClick: p.onClose }) : null),
      p.children ? h('div', { className: 'ra-dialog__body' }, p.children) : null,
      h('div', { className: 'ra-dialog__actions' }, h(Button, { variant: 'secondary', onClick: p.onCancel }, p.cancelLabel || 'Cancel'), h(Button, { variant: destructive ? 'destructive' : 'primary', onClick: p.onConfirm }, p.confirmLabel || (destructive ? 'Delete' : 'Save'))));
  }
  X.Dialog = Dialog;

  /* Tooltip: non-interactive description on hover and focus; never receives focus. */
  function Tooltip(p) {
    var content = h('span', { className: 'ra-tooltip', role: 'tooltip', id: p.id }, h('span', null, p.label), p.shortcut ? h('kbd', { className: 'ra-tooltip__kbd' }, p.shortcut) : null);
    if (!p.children) return content;
    return h('span', { className: 'ra-tipwrap' }, p.children, h('span', { className: 'ra-tipwrap__tip' }, content));
  }
  X.Tooltip = Tooltip;

  /* Popover: non-modal anchored surface with title, description, content and close. */
  function Popover(p) {
    return h('div', { className: cx('ra-popover', p.className), role: 'dialog', 'aria-label': p.title },
      h('div', { className: 'ra-dialog__header' }, h('div', { className: 'ra-dialog__heading ra-popover__heading' }, h('div', { className: 'ra-popover__title' }, p.title), p.description ? h('div', { className: 'ra-dialog__desc' }, p.description) : null), h(IconButton, { variant: 'ghost', size: 'sm', icon: 'close', label: 'Close', onClick: p.onClose })),
      p.children, p.action ? h('div', null, h(Button, { size: 'sm', onClick: p.onAction }, p.action)) : null);
  }
  X.Popover = Popover;

  /* MenuItem (composable) and MenuSurface. */
  function MenuItem(p) {
    var destructive = p.tone === 'destructive' || p.tone === 'danger';
    return h('button', { type: 'button', role: p.checkable ? 'menuitemcheckbox' : 'menuitem', 'aria-checked': p.checkable ? String(!!p.checked) : undefined, className: cx('ra-menuitem', destructive && 'is-destructive', p.className), disabled: p.disabled, 'aria-disabled': p.disabled ? 'true' : undefined, onClick: p.onClick },
      h('span', { className: 'ra-menuitem__check', 'aria-hidden': 'true' }, p.checked ? h(Glyph, { name: 'check', size: 16 }) : null),
      p.icon ? h('span', { className: 'ra-menuitem__icon', 'aria-hidden': 'true' }, H.Visual(p.icon, 18)) : null,
      h('span', { className: 'ra-menuitem__label' }, p.label),
      p.shortcut ? h('kbd', { className: 'ra-menuitem__kbd' }, p.shortcut) : null,
      p.submenu ? h(Glyph, { name: 'chevron-right', size: 16 }) : null);
  }
  function MenuSurface(p) {
    return h('div', { className: cx('ra-menu', p.className), role: 'menu', 'aria-label': p.label }, (p.items || []).map(function (it, i) {
      if (it === '-' || it.separator) return h('div', { key: i, className: 'ra-menu__sep', role: 'separator' });
      if (it.group) return h('div', { key: i, className: 'ra-menu__group' }, it.group);
      return h(MenuItem, Object.assign({ key: i }, it));
    }), p.children);
  }
  X.MenuItem = MenuItem; X.MenuSurface = MenuSurface;
  /* DropdownMenu and ContextMenu: compatibility presets over MenuSurface. */
  X.DropdownMenu = function (p) { return h(MenuSurface, Object.assign({ label: 'Performance', items: [{ group: 'PERFORMANCE' }, { label: 'Open performance', icon: 'upload', shortcut: '↵' }, { label: 'Rename', icon: 'edit', shortcut: '⌘ R' }, { label: 'Duplicate', icon: 'copy', shortcut: '⌘ D' }, '-', { label: 'Live mode', icon: 'audio-lines', checkable: true, checked: true }, '-', { label: 'Delete performance', icon: 'trash', tone: 'destructive', shortcut: '⌫' }] }, p, { className: cx('ra-menu--dropdown', p.className) })); };
  X.ContextMenu = function (p) { return h(MenuSurface, Object.assign({ label: 'Cue', items: [{ label: 'Cut cue', icon: 'copy', shortcut: '⌘ X' }, { label: 'Copy cue', icon: 'copy', shortcut: '⌘ C' }, { label: 'Paste after', icon: 'copy', shortcut: '⌘ V', disabled: true }, '-', { label: 'Delete cue', icon: 'trash', tone: 'destructive', shortcut: '⌫' }] }, p, { className: cx('ra-menu--context', p.className) })); };

  /* BottomSheet: responsive sheet with drag indicator, heading, content and actions. */
  function BottomSheet(p) {
    return h('div', { className: cx('ra-bsheet', p.detent === 'large' && 'is-large', p.className), role: 'dialog', 'aria-modal': 'true', 'aria-label': p.title },
      h('div', { className: 'ra-bsheet__grab', 'aria-hidden': 'true' }),
      p.image ? h('img', { className: 'ra-dialog__art', src: p.image, alt: '' }) : null,
      h('div', { className: 'ra-dialog__heading' }, h('h2', { className: 'ra-dialog__title' }, p.title), p.description ? h('p', { className: 'ra-dialog__desc' }, p.description) : null),
      p.children ? h('div', { className: 'ra-bsheet__content' }, p.children) : null,
      p.actions ? h('div', { className: 'ra-dialog__actions' }, p.actions) : null);
  }
  function SheetChoice(p) {
    return h('button', { type: 'button', className: cx('ra-sheetchoice', p.selected && 'is-selected'), 'aria-pressed': String(!!p.selected), onClick: p.onClick },
      H.Visual(p.icon || 'audio-lines', 18), h('span', { className: 'ra-sheetchoice__label' }, p.label), p.selected ? h(Glyph, { name: 'check', size: 18 }) : null);
  }
  X.BottomSheet = BottomSheet; X.SheetChoice = SheetChoice;

  })();
  /* ---- 11f-performance.js ---- */
  (function(){
  var Glyph = H.Glyph;
  function fmt(s) { if (s == null || isNaN(s)) return '--:--'; s = Math.max(0, Math.floor(s)); return String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); }
  H.fmt = fmt;

  /* SceneCard: Compact, Standard, Featured, Stacked × Default, Armed, Selected, Starting, Live, Fault, Disabled, Unavailable. */
  function SceneArt(p) {
    return h('div', { className: 'ra-scene__art', style: p.image ? { backgroundImage: 'url(' + p.image + ')' } : undefined, 'aria-hidden': 'true' },
      p.image ? null : h('span', { className: 'ra-scene__orbit' }), p.image ? null : h(Glyph, { name: 'audio-lines', size: 40 }));
  }
  /* Press-and-hold guard for consequential actions (pointer or Space/Enter held for `ms`). */
  /* useHold: press-and-hold guard shared by every consequential action.
     Pointer is captured on press, so a finger drifting off the control does not cancel the hold; lifting, cancelling or
     blurring does. Space / Enter held for `ms` works the same. Fires a short haptic where the platform exposes one. */
  function haptic(ms) { try { if (navigator.vibrate) navigator.vibrate(ms); } catch (e) {} }
  function useHold(ms, onHold, disabled) {
    var s = React.useState(false), t = React.useRef(null);
    function clear() { if (t.current) { clearTimeout(t.current); t.current = null; } s[1](false); }
    function start(e) {
      if (disabled || t.current) return;
      if (e.type === 'keydown') { if (e.key !== ' ' && e.key !== 'Enter') return; e.preventDefault(); if (e.repeat) return; }
      if (e.type === 'pointerdown') { if (e.button > 0) return; try { e.currentTarget.setPointerCapture(e.pointerId); } catch (x) {} }
      s[1](true); haptic(8);
      t.current = setTimeout(function () { t.current = null; s[1](false); haptic([12, 40, 24]); onHold && onHold(); }, ms);
    }
    function stop(e) { if (e && e.type === 'keyup' && e.key !== ' ' && e.key !== 'Enter') return; clear(); }
    React.useEffect(function () { return function () { if (t.current) clearTimeout(t.current); }; }, []);
    return { holding: s[0], handlers: { onPointerDown: start, onPointerUp: stop, onPointerCancel: stop, onLostPointerCapture: stop, onKeyDown: start, onKeyUp: stop, onBlur: stop,
      onContextMenu: function (e) { e.preventDefault(); }, onClick: function (e) { e.preventDefault(); } } };
  }
  H.useHold = useHold; H.haptic = haptic;
  function HoldButton(p) {
    var ms = p.ms || 750, hold = useHold(ms, p.onHold, p.disabled);
    return h('button', Object.assign({ type: 'button', className: cx('ra-button', 'ra-button--destructive', 'ra-hold', hold.holding && 'is-holding', p.className), disabled: p.disabled, style: { '--hold-ms': ms + 'ms' },
      'aria-label': p.label + ' (press and hold)' }, hold.handlers),
      h('span', { className: 'ra-hold__fill', 'aria-hidden': 'true' }), H.Visual(p.icon || 'stop', 20), h('span', null, p.label), h('span', { className: 'ra-hold__guard', 'aria-hidden': 'true' }, 'HOLD'));
  }
  H.HoldButton = HoldButton;
  var SC_STATUS = { default: ['neutral', 'Ready'], armed: ['toxic', 'Armed'], selected: ['magenta', 'Selected'], starting: ['information', 'Starting'], live: ['live', 'Live'], fault: ['danger', 'Fault'], disabled: ['neutral', 'Disabled'], unavailable: ['danger', 'Unavailable'] };
  var SC_REASON = { starting: 'Waiting for the device to confirm.', fault: 'Output stopped. Acknowledge to reset the scene.', unavailable: 'Not available on the connected devices.' };
  function SceneCard(p) {
    var variant = p.variant === 'live' ? 'standard' : (p.variant || 'compact'), state = p.state || 'default';
    var live = state === 'live', starting = state === 'starting', fault = state === 'fault', blocked = state === 'disabled' || state === 'unavailable';
    var st = SC_STATUS[state] || SC_STATUS.default, label = state === 'default' && p.status ? p.status : st[1];
    var statusTag = live ? h(X.InlineStatus, { tone: 'live', label: 'Live' })
      : (state === 'unavailable' || fault) ? h(StatusBadge, { status: 'danger' }, label)
      : starting ? h(StatusBadge, { status: 'information' }, label)
      : h(Tag, { tone: st[0], className: state === 'armed' ? 'ra-scene__armed' : undefined }, state === 'armed' ? h('span', { className: 'ra-scene__armdot', 'aria-hidden': 'true' }) : null, label);
    var devices = p.devices == null ? 2 : p.devices;
    var devText = typeof devices === 'number' ? devices + (devices === 1 ? ' device' : ' devices') : devices;
    var dur = p.duration != null ? p.duration : 222, durText = typeof dur === 'number' ? fmt(dur) : dur;
    var telemetry = h('div', { className: 'ra-scene__telemetry' },
      h('span', null, h(Glyph, { name: 'clock', size: 14 }), durText),
      h('span', null, h(Glyph, { name: 'audio-lines', size: 14 }), p.sampleRate || '48 kHz'),
      h('span', null, h(H.Icon, { name: 'radio', size: 14 }), devText));
    var progress = null;
    if (live) {
      var el = p.elapsed != null ? p.elapsed : 18, total = typeof dur === 'number' ? dur : null;
      var pct = p.progress != null ? p.progress : (total ? el / total : 0); pct = Math.max(0, Math.min(1, pct));
      progress = h('div', { className: 'ra-scene__progress' },
        h('div', { className: 'ra-scene__clock' }, h('span', { className: 'ra-scene__elapsed' }, fmt(el)), h('span', { className: 'ra-scene__remain' }, total ? '−' + fmt(total - el) : '')),
        h('div', { className: 'ra-scene__bar', role: 'progressbar', 'aria-label': 'Scene progress', 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': Math.round(pct * 100), 'aria-valuetext': fmt(el) + ' of ' + durText },
          h('span', { className: 'ra-scene__fill', style: { width: (pct * 100) + '%' } })));
    }
    var reason = (state === 'unavailable' || fault || starting) ? h('p', { className: cx('ra-scene__reason', !starting && 'is-danger') }, p.reason || SC_REASON[state]) : null;
    var primary = live ? h(HoldButton, { label: 'Stop', icon: 'stop', onHold: p.onStop })
      : fault ? h(Button, { variant: 'secondary', leadingIcon: 'check', onClick: p.onAcknowledge }, 'Acknowledge')
      : h(Button, { variant: 'primary', loading: starting, disabled: blocked || starting, leadingIcon: 'arrow-right', onClick: p.onTrigger }, starting ? 'Starting' : (p.actionLabel || 'Trigger'));
    var actions = h('div', { className: 'ra-scene__actions' }, primary,
      h(IconButton, { variant: 'secondary', icon: 'more', label: 'More for ' + p.title, disabled: state === 'disabled' }));
    var cue = p.cue != null ? h('span', { className: 'ra-scene__cue' }, 'SC ' + String(p.cue).padStart(2, '0')) : null;
    var next = p.next ? h('span', { className: 'ra-scene__next' }, 'Next') : null;
    var title = p.onSelect && !blocked ? h('button', { type: 'button', className: 'ra-scene__select', 'aria-pressed': state === 'selected' ? 'true' : 'false', onClick: p.onSelect }, p.title) : p.title;
    var identity = h('div', { className: 'ra-scene__identity' },
      (cue || next) ? h('div', { className: 'ra-scene__cueline' }, cue, next) : null,
      h('div', { className: 'ra-scene__title' }, title), h('div', { className: 'ra-scene__status', role: live || starting || fault ? 'status' : undefined }, statusTag), telemetry);
    return h('article', { className: cx('ra-scene', 'ra-scene--' + variant, 'is-' + state, p.className), 'aria-label': (p.cue != null ? 'Scene ' + p.cue + ', ' : '') + p.title + ', ' + label, 'aria-disabled': state === 'disabled' ? 'true' : undefined },
      live ? h('span', { className: 'ra-scene__rail', 'aria-hidden': 'true' }) : null,
      h('div', { className: 'ra-scene__inner' },
        h(SceneArt, { image: p.image }),
        variant === 'compact' ? [h('div', { key: 'i', className: 'ra-scene__body' }, identity, progress, reason), h('div', { key: 'a', className: 'ra-scene__side' }, actions)]
          : [h('div', { key: 'b', className: 'ra-scene__body' }, identity, progress, reason, p.description ? h('p', { className: 'ra-scene__desc' }, p.description) : null), h('div', { key: 'd', className: 'ra-scene__divider' }), h('div', { key: 'a', className: 'ra-scene__foot' }, actions)]));
  }
  X.SceneCard = SceneCard;

  /* ShowCard: a show is a playlist of scenes; a night runs several shows in order. Row, Tile, Featured × Draft, Ready, Next, Selected, Live, Attention, Done. */
  var SH_STATUS = { draft: ['neutral', 'Draft'], default: ['neutral', 'Ready'], next: ['information', 'Up next'], selected: ['magenta', 'Selected'], live: ['live', 'Live'], attention: ['danger', 'Needs attention'], done: ['neutral', 'Played'] };
  function ShowStack(p) {
    var imgs = (p.images || []).slice(0, 3);
    return h('div', { className: 'ra-show__stack', 'aria-hidden': 'true' },
      imgs.length ? imgs.map(function (src, i) { return h('span', { key: i, className: 'ra-show__sleeve', style: { backgroundImage: 'url(' + src + ')', zIndex: 3 - i } }); })
        : [h('span', { key: 0, className: 'ra-show__sleeve is-empty' }, h(Glyph, { name: 'audio-lines', size: 24 }))]);
  }
  function ShowStrip(p) {
    var sc = p.scenes || [], cur = p.current;
    var played = 0, issues = 0;
    sc.forEach(function (s) { if (s === 'played') played++; if (s === 'fault' || s === 'unavailable') issues++; });
    var text = p.state === 'live' ? 'Scene ' + ((cur != null ? cur : played) + 1) + ' of ' + sc.length + ' playing'
      : p.state === 'done' ? 'All ' + sc.length + ' scenes played'
      : (sc.length - issues) + ' of ' + sc.length + ' scenes ready' + (issues ? ', ' + issues + (issues === 1 ? ' issue' : ' issues') : '');
    return h('div', { className: 'ra-show__strip', role: 'img', 'aria-label': text },
      sc.map(function (s, i) { return h('span', { key: i, className: cx('ra-show__seg', 'is-' + (i === cur && p.state === 'live' ? 'live' : s)) }); }));
  }
  function ShowCard(p) {
    var variant = p.variant || 'row', state = p.state || 'default';
    var live = state === 'live', done = state === 'done', attention = state === 'attention', draft = state === 'draft';
    var st = SH_STATUS[state] || SH_STATUS.default;
    var scenes = p.scenes || [], count = scenes.length;
    var statusTag = live ? h(X.InlineStatus, { tone: 'live', label: 'Live' })
      : attention ? h(StatusBadge, { status: 'danger' }, st[1])
      : state === 'next' ? h(StatusBadge, { status: 'information' }, st[1])
      : h(Tag, { tone: st[0] }, st[1]);
    var dur = p.duration != null ? p.duration : 0, durText = typeof dur === 'number' ? (dur > 0 ? fmt(dur) : '--:--') : dur;
    var meta = h('div', { className: 'ra-show__meta' },
      h('span', null, h(H.Icon, { name: 'scenes-outline', size: 14 }), count + (count === 1 ? ' scene' : ' scenes')),
      h('span', null, h(Glyph, { name: 'clock', size: 14 }), durText),
      p.slot ? h('span', null, h(Glyph, { name: 'calendar', size: 14 }), p.slot) : null);
    var clock = null;
    if (live) {
      var el = p.elapsed || 0, total = typeof dur === 'number' ? dur : null;
      clock = h('div', { className: 'ra-show__now' },
        h('div', { className: 'ra-show__nowline' }, h('span', { className: 'ra-show__nowlabel' }, 'Now'), h('span', { className: 'ra-show__nowtitle' }, p.nowPlaying || ''), h('span', { className: 'ra-show__clock' }, fmt(el), total ? h('span', { className: 'ra-show__remain' }, ' / ' + fmt(total)) : null)),
        p.upNext ? h('div', { className: 'ra-show__nowline is-next' }, h('span', { className: 'ra-show__nowlabel' }, 'Next'), h('span', { className: 'ra-show__nowtitle' }, p.upNext)) : null);
    }
    var reason = attention ? h('p', { className: 'ra-show__reason' }, p.reason || 'A scene in this show is not ready. Open the show to fix it.') : null;
    var primary = live ? h(H.HoldButton, { label: 'End show', icon: 'stop', onHold: p.onEnd })
      : attention ? h(Button, { variant: 'secondary', leadingIcon: 'alert', onClick: p.onOpen }, 'Resolve')
      : done ? h(Button, { variant: 'secondary', leadingIcon: 'chevron-right', onClick: p.onOpen }, 'Recap')
      : draft ? h(Button, { variant: 'secondary', leadingIcon: 'edit', onClick: p.onOpen }, 'Edit show')
      : h(Button, { variant: 'primary', leadingIcon: 'play', disabled: p.blocked, onClick: p.onStart }, 'Start show');
    var actions = h('div', { className: 'ra-show__actions' }, primary,
      !(attention || done || draft) ? h(IconButton, { variant: 'secondary', icon: 'chevron-right', label: 'Open ' + p.title, onClick: p.onOpen }) : null,
      h(IconButton, { variant: 'secondary', icon: 'more', label: 'More for ' + p.title }));
    var code = h('div', { className: 'ra-show__codeline' },
      p.code != null ? h('span', { className: 'ra-show__code' }, 'SHOW // ' + String(p.code).padStart(2, '0')) : null,
      p.order ? h('span', { className: 'ra-show__order' }, p.order) : null);
    var title = p.onSelect ? h('button', { type: 'button', className: 'ra-show__select', 'aria-pressed': state === 'selected' ? 'true' : 'false', onClick: p.onSelect }, p.title) : p.title;
    var art = variant === 'row' ? h(ShowStack, { images: p.images }) : h('div', { className: 'ra-show__cover', style: p.images && p.images[0] ? { backgroundImage: 'url(' + p.images[0] + ')' } : undefined, 'aria-hidden': 'true' },
      variant === 'featured' ? h('span', { className: 'ra-show__poster' }, p.title) : null);
    return h('article', { className: cx('ra-show', 'ra-show--' + variant, 'is-' + state, p.className), 'aria-label': (p.code != null ? 'Show ' + p.code + ', ' : '') + p.title + ', ' + st[1] },
      live ? h('span', { className: 'ra-show__rail', 'aria-hidden': 'true' }) : null,
      h('div', { className: 'ra-show__inner' }, art,
        h('div', { className: 'ra-show__body' }, code,
          h('div', { className: 'ra-show__title' }, title),
          h('div', { className: 'ra-show__status', role: live || attention ? 'status' : undefined }, statusTag, meta)),
        h('div', { className: 'ra-show__detail' }, h(ShowStrip, { scenes: scenes, current: p.current, state: state }), clock, reason),
        h('div', { className: 'ra-show__side' }, actions)));
  }
  X.ShowCard = ShowCard;

  /* PerformanceControl: Offline, Ready, Starting, Live, Fault — with a guarded emergency stop. */
  var PC = {
    offline: { title: 'Offline', label: 'Scene length', time: '03:42.00', meta: 'Scene 04 · 03:42 duration', reads: ['Not connected', 'Output unavailable', 'Link offline'], action: 'Connect device', guard: 'NOT ARMED' },
    ready: { title: 'Ready to trigger', label: 'Scene length', time: '03:42.00', meta: 'Scene 04 · two-channel spatial audio', reads: ['Maestro MR-8 · Ready', 'Armed · 48 kHz', 'Bluetooth LE · Strong'], action: 'Trigger scene', guard: 'HOLD' },
    starting: { title: 'Starting', label: 'Acknowledging', time: '00:00.64', meta: 'Scene 04 · awaiting device confirmation', reads: ['Maestro MR-8 · Syncing', 'Opening output', 'Bluetooth LE · Strong'], action: 'Starting…', guard: 'HOLD' },
    live: { title: 'Live performance', label: 'Elapsed', time: '00:18.42', meta: 'Scene 04 · two-channel spatial audio', reads: ['Maestro MR-8 · Live', 'Active · −12 dBFS', 'Bluetooth LE · Strong'], action: 'Stop performance', guard: 'HOLD' },
    fault: { title: 'Fault', label: 'Stopped at', time: '00:02.16', meta: 'Scene 04 · start interrupted', reads: ['Maestro MR-8 · Fault', 'Output silenced', 'Link recovered'], action: 'Acknowledge fault', guard: 'HOLD' }
  };
  function PerformanceControl(p) {
    var st = p.state || 'ready', c = PC[st], stopHold = useHold(750, p.onEmergencyStop, st === 'offline');
    var liveHold = useHold(750, p.onPrimary, st !== 'live');
    var heads = [['Connected device', 'radio'], ['Audio', 'volume'], ['Transport', 'connect-outline']];
    return h('section', { className: cx('ra-perf', 'is-' + st, p.className), 'aria-label': 'Performance control' },
      h('div', { className: 'ra-perf__head' }, h('span', { className: 'ra-perf__icon', 'aria-hidden': 'true' }, h(Glyph, { name: st === 'offline' ? 'circle-x' : st === 'fault' ? 'alert' : 'audio-lines', size: 20 })),
        h('div', { className: 'ra-perf__headtext' }, h('span', { className: 'ra-perf__eyebrow' }, 'Performance control'), h('span', { className: 'ra-perf__state', role: 'status' }, c.title)),
        st === 'live' ? h(X.ConnectionStatus, { state: 'live' }) : null),
      h('div', { className: 'ra-perf__scene' },
        h('div', null, h('div', { className: 'ra-perf__label' }, 'Current scene'), h('div', { className: 'ra-perf__name' }, p.scene || 'Midnight Relay'), h('div', { className: 'ra-perf__meta' }, c.meta)),
        h('div', { className: 'ra-perf__time' }, h('div', { className: 'ra-perf__label' }, c.label), h('div', { className: 'ra-perf__clock' }, p.time || c.time))),
      h('div', { className: 'ra-perf__reads' }, heads.map(function (hd, i) { return h('div', { key: i, className: 'ra-perf__read' }, h('div', { className: 'ra-perf__readlabel' }, H.Visual(hd[1], 14), hd[0]), h('div', { className: 'ra-perf__readvalue' }, c.reads[i])); })),
      h('div', { className: 'ra-perf__controls' },
        st === 'live'
          ? h('button', Object.assign({ type: 'button', className: cx('ra-perf__primary', 'ra-hold', liveHold.holding && 'is-holding'), style: { '--hold-ms': '750ms' }, 'aria-label': 'Stop performance (press and hold)' }, liveHold.handlers),
              h('span', { className: 'ra-hold__fill', 'aria-hidden': 'true' }), h(Glyph, { name: 'x', size: 20 }), h('span', null, c.action), h('span', { className: 'ra-hold__guard', 'aria-hidden': 'true' }, 'HOLD'))
          : h('button', { type: 'button', className: 'ra-perf__primary', disabled: st === 'starting', 'aria-busy': st === 'starting' ? 'true' : undefined, onClick: p.onPrimary }, st === 'starting' ? h(Spinner) : (st === 'offline' ? h(H.Icon, { name: 'connect-outline', size: 20 }) : h(Glyph, { name: st === 'fault' ? 'check' : 'skip-forward', size: 20 })), c.action),
        h('button', Object.assign({ type: 'button', className: cx('ra-perf__stop', 'ra-hold', stopHold.holding && 'is-holding'), disabled: st === 'offline', style: { '--hold-ms': '750ms' }, 'aria-label': 'Emergency stop (press and hold)' }, stopHold.handlers), h('span', { className: 'ra-hold__fill', 'aria-hidden': 'true' }), h('span', { className: 'ra-perf__guard' }, c.guard), h('span', { className: 'ra-perf__stoplabel' }, h(Glyph, { name: 'circle-x', size: 16 }), 'Emergency stop'))));
  }
  X.PerformanceControl = PerformanceControl;

  /* MediaTransport: preview Play / Pause / Stop with state copy. */
  var TR = { idle: 'Preview ready · No stage commands', playing: 'Preview playing · No stage commands', paused: 'Preview paused', loading: 'Loading preview…', ended: 'Preview ended', unavailable: 'Preview unavailable', error: 'Preview could not play' };
  function MediaTransport(p) {
    var st = p.state || 'idle', playing = st === 'playing';
    var primary = st === 'error' ? 'Retry' : st === 'ended' ? 'Replay' : playing ? 'Pause' : 'Play';
    return h('div', { className: cx('ra-transport', 'is-' + st, p.className) },
      h('div', { className: 'ra-row' },
        h(Button, { variant: 'primary', loading: st === 'loading', disabled: st === 'unavailable', leadingIcon: playing ? 'pause' : 'play', onClick: p.onPrimary }, primary),
        h(Button, { variant: 'secondary', disabled: !(playing || st === 'paused' || st === 'loading'), leadingIcon: 'stop', onClick: p.onStop }, 'Stop')),
      h('div', { className: cx('ra-transport__status', st === 'error' && 'is-danger'), role: 'status' }, p.status || TR[st]));
  }
  X.MediaTransport = MediaTransport;

  /* MediaPosition: position readout with optional seek. */
  function MediaPosition(p) {
    var st = p.state || 'default', dur = p.duration != null ? p.duration : 222;
    var s = React.useState(p.defaultValue != null ? p.defaultValue : 78), v = p.value != null ? p.value : s[0];
    var ro = st === 'readonly' || st === 'unavailable';
    var pct = dur ? v / dur * 100 : 0;
    return h('div', { className: cx('ra-position', 'is-' + st, p.className) },
      h('div', { className: 'ra-position__times' }, h('span', null, st === 'unavailable' ? '--:--' : fmt(v)), h('span', null, st === 'unavailable' ? '--:--' : fmt(dur))),
      ro ? h('div', { className: 'ra-position__track', role: 'progressbar', 'aria-label': p.label || 'Playback position', 'aria-valuemin': 0, 'aria-valuemax': dur, 'aria-valuenow': st === 'unavailable' ? undefined : v }, h('span', { style: { width: (st === 'unavailable' ? 0 : pct) + '%' } }))
        : h('div', { className: 'ra-slider ra-position__seek' }, h('input', { type: 'range', min: 0, max: dur, value: v, 'aria-label': p.label || 'Seek', 'aria-valuetext': fmt(v) + ' of ' + fmt(dur), style: { '--ra-slider-pct': pct + '%' }, onChange: function (e) { s[1](+e.target.value); p.onSeek && p.onSeek(+e.target.value); } })));
  }
  X.MediaPosition = MediaPosition;

  /* MediaVolume: preview volume with mute that remembers the previous value. */
  function MediaVolume(p) {
    var s = React.useState(p.defaultValue != null ? p.defaultValue : 72), m = React.useState(!!p.muted);
    var v = s[0], muted = m[0], un = p.state === 'unavailable';
    return h('div', { className: cx('ra-volume', un && 'is-unavailable', p.className) },
      h('div', { className: 'ra-volume__label' }, p.label || 'Preview volume'),
      h('div', { className: 'ra-volume__row' },
        h(Button, { variant: 'secondary', leadingIcon: undefined, disabled: un, onClick: function () { m[1](!muted); }, 'aria-pressed': String(muted) }, h(Glyph, { name: muted ? 'volume-x' : 'volume', size: 18 }), muted ? 'Unmute' : 'Mute'),
        h('span', { className: 'ra-volume__value' }, un ? 'Unavailable' : muted ? 'Muted' : v + '%')),
      h('div', { className: cx('ra-slider', un && 'is-disabled') }, h('input', { type: 'range', min: 0, max: 100, value: muted ? 0 : v, disabled: un, 'aria-label': p.label || 'Preview volume', style: { '--ra-slider-pct': (muted ? 0 : v) + '%' }, onChange: function (e) { s[1](+e.target.value); m[1](false); } })));
  }
  X.MediaVolume = MediaVolume;

  /* AudioRow: responsive preview row (Compact 320+, Wide 600+) × playback states. */
  function AudioRow(p) {
    var st = p.state || 'idle';
    return h('div', { className: cx('ra-audiorow', p.layout === 'wide' && 'is-wide', 'is-' + st, p.className), role: 'group', 'aria-label': p.title },
      h('div', { className: 'ra-audiorow__info' }, h('div', { className: 'ra-audiorow__title' }, p.title || 'Midnight Relay — Stage Left Spatial Mix'), h('div', { className: 'ra-audiorow__meta' }, p.meta || 'Audio · 03:42')),
      h(MediaTransport, { state: st }),
      h(MediaPosition, { state: st === 'unavailable' ? 'unavailable' : 'readonly', duration: p.duration, value: st === 'idle' ? 0 : st === 'ended' ? (p.duration || 222) : (p.position != null ? p.position : 78) }));
  }
  X.AudioRow = AudioRow;

  /* AudioTrackRow: compatibility single-line media row (Audio Track / Audio Row). */
  function AudioTrackRow(p) {
    var st = p.state || 'idle', bars = [];
    for (var i = 0; i < 28; i++) bars.push(h('span', { key: i, style: { height: (4 + ((i * 7) % 13)) + 'px' } }));
    return h('div', { className: cx('ra-trackrow', 'is-' + st, p.className), role: 'group', 'aria-label': p.title },
      h(IconButton, { variant: 'secondary', size: 'sm', icon: st === 'playing' ? 'pause' : 'play', label: (st === 'playing' ? 'Pause ' : 'Play ') + (p.title || ''), disabled: st === 'unavailable' }),
      h('div', { className: 'ra-trackrow__info' }, h('div', { className: 'ra-trackrow__title' }, p.title || 'Low Orbit Entrance Theme'), h('div', { className: 'ra-trackrow__meta' }, p.meta || 'STEREO · 48 kHz · MASTER')),
      h('div', { className: 'ra-trackrow__wave', 'aria-hidden': 'true' }, bars),
      h('div', { className: 'ra-trackrow__time' }, (p.position || '00:00') + ' / ' + (p.duration || '02:48')),
      h(StatusBadge, { status: st === 'error' ? 'danger' : st === 'playing' ? 'success' : st === 'loading' ? 'information' : 'neutral' }, st.toUpperCase()));
  }
  X.AudioTrackRow = AudioTrackRow;

  /* PreviewSurface: isolated audio preview — row + volume + scope note. */
  function PreviewSurface(p) {
    return h('section', { className: cx('ra-previewsurf', p.layout === 'wide' && 'is-wide', p.className), 'aria-label': 'Isolated audio preview' },
      h('div', { className: 'ra-previewsurf__eyebrow' }, 'Isolated audio preview'),
      h(AudioRow, { state: p.state || 'playing', title: p.title, meta: p.meta, layout: p.layout }),
      h(MediaVolume, null),
      h('p', { className: 'ra-previewsurf__note' }, 'Preview only · No stage commands. Keep Stop preview available while audition continues.'));
  }
  X.PreviewSurface = PreviewSurface;

  /* NextCue: Ready, Pending or Blocked next stage cue with an explicit trigger. */
  function NextCue(p) {
    var st = p.state || 'ready';
    var eyebrow = { ready: 'Next · Ready to trigger', pending: 'Queued · Manual trigger pending', blocked: 'Blocked · Device not ready' }[st];
    return h('section', { className: cx('ra-nextcue', 'is-' + st, p.layout === 'wide' && 'is-wide', p.className), 'aria-label': 'Next cue' },
      h('div', { className: 'ra-nextcue__eyebrow' }, eyebrow),
      h('div', { className: 'ra-nextcue__title' }, p.title || 'Signal Garden'),
      h('div', { className: 'ra-nextcue__meta' }, p.meta || 'Next scene · Selecting does not perform'),
      h('div', { className: 'ra-row' }, h(Button, { variant: 'primary', disabled: st === 'blocked', trailingIcon: 'arrow-right', onClick: p.onTrigger }, 'Trigger next'), h(Button, { variant: 'secondary', onClick: p.onRemove }, 'Remove')));
  }
  X.NextCue = NextCue;

  /* MiniPlayer (Pulse Puck): persistent audio-preview mini player, Compact or Wide × playback states. */
  function MiniPlayer(p) {
    var st = p.state || 'playing', playing = st === 'playing';
    var label = { idle: 'Ready', playing: 'Playing', paused: 'Paused', loading: 'Loading', ended: 'Ended', unavailable: 'Unavailable', error: 'Could not play' }[st];
    var glyph = st === 'loading' ? 'loading' : playing ? 'pause' : st === 'ended' ? 'play' : 'play';
    return h('div', { className: cx('ra-mini', p.layout === 'wide' && 'is-wide', 'is-' + st, p.className), role: 'region', 'aria-label': 'Audio preview' },
      h('button', { type: 'button', className: 'ra-mini__puck', disabled: st === 'unavailable', 'aria-label': (playing ? 'Pause ' : 'Play ') + (p.title || 'preview') },
        h('span', { className: 'ra-mini__ring', 'aria-hidden': 'true' }), h(H.Icon, { name: glyph, size: 24 })),
      h('div', { className: 'ra-mini__info' }, h('div', { className: 'ra-mini__title' }, p.title || 'Midnight Relay'), h('div', { className: 'ra-mini__state' }, 'Audio preview · ' + label), h('div', { className: 'ra-mini__time' }, (p.position || '00:00') + '  /  ' + (p.duration || '03:42'))),
      h('button', { type: 'button', className: 'ra-mini__expand', 'aria-label': 'Expand player' }, h(H.Icon, { name: 'expand', size: 20 })),
      p.layout === 'wide' ? h(IconButton, { variant: 'ghost', icon: 'stop', label: 'Stop preview', disabled: !(playing || st === 'paused') }) : null);
  }
  X.MiniPlayer = MiniPlayer;

  })();
  /* ---- 11g-ios-performance.js ---- */
  (function(){
  /* iOS + iPadOS performance adapters: design references for SwiftUI.
     IOSSceneRow and IOSShowRow are calm list rows; IOSLiveBar owns every consequential stop.
     sizeClass 'compact' = iPhone and iPad slide-over; 'regular' = iPad full screen and split view. */
  var Glyph = H.Glyph, fmt = H.fmt, useHold = H.useHold;

  function iosPill(tone, label, dot) {
    return h('span', { className: cx('ra-iospill', 'is-' + tone) }, dot ? h('span', { className: 'ra-iospill__dot', 'aria-hidden': 'true' }) : null, label);
  }
  function iosArt(src, size, live) {
    return h('span', { className: cx('ra-iosart', live && 'is-live'), style: Object.assign({ width: size, height: size }, src ? { backgroundImage: 'url(' + src + ')' } : null), 'aria-hidden': 'true' },
      src ? null : h(Glyph, { name: 'audio-lines', size: Math.round(size * 0.42) }));
  }
  function iosMore(label) { return h('button', { type: 'button', className: 'ra-iosrow__more', 'aria-label': label }, h(Glyph, { name: 'more-h', size: 22, stroke: 2.6 })); }
  function iosCapsule(kind, label, icon, onClick, opts) {
    opts = opts || {};
    return h('button', { type: 'button', className: cx('ra-ioscap', 'is-' + kind), disabled: opts.disabled, onClick: onClick, 'aria-label': opts.aria },
      icon ? H.Visual(icon, 16) : null, h('span', null, label));
  }

  /* IOSDevice: preview frame (status bar, safe areas, home indicator). textSize scales Dynamic Type. */
  var DT = { default: 1, xl: 1.18, ax: 1.53 };
  function IOSDevice(p) {
    var pad = p.device === 'pad', dt = DT[p.textSize || 'default'] || 1;
    var orient = p.orientation || (pad ? 'landscape' : 'portrait');
    var hideStatus = !pad && orient === 'landscape';
    return h('div', { className: cx('ra-iosdevice', pad ? 'is-pad' : 'is-phone', 'is-' + orient, p.textSize === 'ax' && 'is-ax', p.className), style: { '--dt': dt }, role: 'group', 'aria-label': p.label || ((pad ? 'iPad' : 'iPhone') + ' ' + orient + ' preview') },
      h('div', { className: 'ra-iosdevice__screen' },
        hideStatus ? null : h('div', { className: 'ra-iosdevice__status', 'aria-hidden': 'true' }, h('span', null, '9:41'), h('span', { className: 'ra-iosdevice__sys' }, h('i'), h('i'), h('i'))),
        h('div', { className: 'ra-iosdevice__body' }, p.children),
        h('div', { className: 'ra-iosdevice__home', 'aria-hidden': 'true' })));
  }

  /* IOSList: inset-grouped section (List with .insetGrouped). */
  function IOSList(p) {
    return h('section', { className: cx('ra-ioslistgroup', p.className), 'aria-label': p.header },
      p.header ? h('h3', { className: 'ra-ioslistgroup__header' }, p.header) : null,
      h('div', { className: 'ra-ioslistgroup__rows', role: 'list' }, React.Children.map(p.children, function (c) { return c ? h('div', { role: 'listitem', className: 'ra-ioslistgroup__item' }, c) : null; })),
      p.footer ? h('p', { className: 'ra-ioslistgroup__footer' }, p.footer) : null);
  }

  /* IOSSceneRow: one scene in a show's set list. No stop control here: the live bar owns it. */
  var SR = { default: ['neutral', 'Ready'], armed: ['toxic', 'Armed'], selected: ['magenta', 'Selected'], starting: ['info', 'Starting'], live: ['live', 'Live'], fault: ['danger', 'Fault'], unavailable: ['danger', 'Unavailable'], played: ['quiet', 'Played'] };
  function IOSSceneRow(p) {
    var state = p.state || 'default', regular = p.sizeClass === 'regular', st = SR[state] || SR.default;
    var live = state === 'live', dur = p.duration != null ? p.duration : 222;
    var cue = p.cue != null ? 'SC ' + String(p.cue).padStart(2, '0') : null;
    var devText = p.devices == null ? '2 devices' : typeof p.devices === 'number' ? p.devices + (p.devices === 1 ? ' device' : ' devices') : p.devices;
    var pct = live ? Math.max(0, Math.min(1, p.progress != null ? p.progress : (p.elapsed || 0) / dur)) : 0;
    var trailing = state === 'live' ? h('span', { className: 'ra-iosrow__eq', 'aria-hidden': 'true' }, h('i'), h('i'), h('i'), h('i'))
      : state === 'starting' ? h('span', { className: 'ra-iosrow__spin', role: 'img', 'aria-label': 'Starting' })
      : state === 'fault' ? iosCapsule('plain', 'Acknowledge', null, p.onAcknowledge)
      : (state === 'unavailable' || state === 'played') ? null
      : iosCapsule(state === 'armed' ? 'fill' : 'tint', 'Trigger', 'play', p.onTrigger, { aria: 'Trigger ' + p.title });
    var meta = [h('span', { key: 't', className: 'ra-iosrow__time' }, live ? fmt(p.elapsed || 0) + ' / ' + fmt(dur) : fmt(dur))];
    if (regular) { meta.push(h('span', { key: 's' }, p.sampleRate || '48 kHz')); meta.push(h('span', { key: 'd' }, devText)); }
    return h('div', { className: cx('ra-ios', 'ra-iosrow', 'ra-iosscene', 'is-' + state, regular ? 'is-regular' : 'is-compact'), 'aria-label': (cue ? 'Scene ' + p.cue + ', ' : '') + p.title + ', ' + st[1] },
      (live || state === 'selected' || state === 'armed') ? h('span', { className: 'ra-iosrow__edge', 'aria-hidden': 'true' }) : null,
      iosArt(p.image, regular ? 64 : 52, live),
      h('div', { className: 'ra-iosrow__main' },
        (cue || p.next) ? h('div', { className: 'ra-iosrow__eyebrow' }, cue, p.next ? h('span', { className: 'ra-iosrow__next' }, 'Next') : null) : null,
        h('button', { type: 'button', className: 'ra-iosrow__title', onClick: p.onSelect }, p.title),
        h('div', { className: 'ra-iosrow__meta' }, iosPill(st[0], st[1], live || state === 'armed' || state === 'starting'), meta),
        live ? h('div', { className: 'ra-iosrow__progress', role: 'progressbar', 'aria-label': 'Scene progress', 'aria-valuemin': 0, 'aria-valuemax': 100, 'aria-valuenow': Math.round(pct * 100) }, h('span', { style: { width: pct * 100 + '%' } })) : null,
        p.reason || state === 'fault' || state === 'unavailable' ? h('p', { className: cx('ra-iosrow__reason', (state === 'fault' || state === 'unavailable') && 'is-danger') }, p.reason || (state === 'fault' ? 'Output stopped. Acknowledge to reset.' : 'Not available on the connected devices.')) : null),
      h('div', { className: 'ra-iosrow__trail' }, trailing, iosMore('More for ' + p.title)));
  }

  /* IOSShowRow: one show (a playlist of scenes) in tonight's lineup. Tapping pushes its scene list. */
  var SH = { default: ['neutral', 'Ready'], next: ['info', 'Up next'], selected: ['magenta', 'Selected'], live: ['live', 'Live'], attention: ['danger', 'Needs attention'], done: ['quiet', 'Played'], draft: ['quiet', 'Draft'] };
  function IOSShowRow(p) {
    var state = p.state || 'default', regular = p.sizeClass === 'regular', st = SH[state] || SH.default, live = state === 'live';
    var sc = p.scenes || [], dur = p.duration != null ? p.duration : 0;
    var imgs = (p.images || []).slice(0, 3);
    var stack = h('span', { className: 'ra-iosstack', 'aria-hidden': 'true' }, (imgs.length ? imgs : [null]).map(function (src, i) {
      return h('span', { key: i, className: 'ra-iosstack__s', style: Object.assign({ zIndex: 3 - i }, src ? { backgroundImage: 'url(' + src + ')' } : null) }, src ? null : h(Glyph, { name: 'audio-lines', size: 20 }));
    }));
    var issues = sc.filter(function (s) { return s === 'fault' || s === 'unavailable'; }).length;
    var stripLabel = live ? 'Scene ' + ((p.current || 0) + 1) + ' of ' + sc.length + ' playing' : state === 'done' ? 'All ' + sc.length + ' scenes played' : (sc.length - issues) + ' of ' + sc.length + ' scenes ready';
    var trailing = state === 'default' || state === 'next' || state === 'selected' ? iosCapsule(state === 'next' ? 'fill' : 'tint', 'Start', 'play', p.onStart, { aria: 'Start ' + p.title }) : null;
    return h('div', { className: cx('ra-ios', 'ra-iosrow', 'ra-iosshow', 'is-' + state, regular ? 'is-regular' : 'is-compact'), 'aria-label': p.title + ', ' + st[1] },
      (live || state === 'selected' || state === 'next') ? h('span', { className: 'ra-iosrow__edge', 'aria-hidden': 'true' }) : null,
      stack,
      h('div', { className: 'ra-iosrow__main' },
        h('div', { className: 'ra-iosrow__eyebrow' }, p.code != null ? 'SHOW ' + String(p.code).padStart(2, '0') : null, p.order ? h('span', { className: 'ra-iosrow__order' }, p.order) : null),
        h('button', { type: 'button', className: 'ra-iosrow__title', onClick: p.onOpen }, p.title),
        h('div', { className: 'ra-iosrow__meta' }, iosPill(st[0], st[1], live), h('span', null, sc.length + (sc.length === 1 ? ' scene' : ' scenes')), h('span', { className: 'ra-iosrow__time' }, live ? fmt(p.elapsed || 0) + ' / ' + fmt(dur) : dur ? fmt(dur) : '--:--')),
        h('div', { className: 'ra-iosstrip', role: 'img', 'aria-label': stripLabel }, sc.map(function (s, i) { return h('span', { key: i, className: 'is-' + (live && i === p.current ? 'live' : s) }); })),
        live && p.nowPlaying ? h('p', { className: 'ra-iosrow__now' }, h('b', null, 'Now'), ' ', p.nowPlaying) : null,
        state === 'attention' ? h('p', { className: 'ra-iosrow__reason is-danger' }, p.reason || 'A scene in this show is not ready.') : null),
      h('div', { className: 'ra-iosrow__trail' }, trailing, h('span', { className: 'ra-iosrow__chev', 'aria-hidden': 'true' }, h(Glyph, { name: 'chevron-right', size: 18, stroke: 2.4 }))));
  }

  /* Hold ring: circular press-and-hold control used by the live bar. */
  function IOSHoldRing(p) {
    var ms = p.ms || 750, hold = useHold(ms, p.onHold, p.disabled);
    return h('button', Object.assign({ type: 'button', className: cx('ra-iosring', p.kind === 'end' && 'is-end', hold.holding && 'is-holding', p.className), disabled: p.disabled, style: { '--hold-ms': ms + 'ms' },
      'aria-label': p.label + ', press and hold' }, hold.handlers),
      h('svg', { className: 'ra-iosring__track', viewBox: '0 0 48 48', 'aria-hidden': 'true' }, h('circle', { cx: 24, cy: 24, r: 21 }), h('circle', { className: 'ra-iosring__arc', cx: 24, cy: 24, r: 21, pathLength: 100 })),
      h('span', { className: 'ra-iosring__core', 'aria-hidden': 'true' }, H.Visual(p.icon || 'stop', 18)),
      p.showLabel ? h('span', { className: 'ra-iosring__label', 'aria-hidden': 'true' }, p.label) : null);
  }
  function IOSHoldBar(p) {
    var ms = p.ms || 750, hold = useHold(ms, p.onHold, p.disabled);
    return h('button', Object.assign({ type: 'button', className: cx('ra-iosholdbar', p.kind === 'end' && 'is-end', hold.holding && 'is-holding'), disabled: p.disabled, style: { '--hold-ms': ms + 'ms' },
      'aria-label': p.label + ', press and hold' }, hold.handlers),
      h('span', { className: 'ra-iosholdbar__fill', 'aria-hidden': 'true' }), H.Visual(p.icon || 'stop', 18), h('span', null, p.label), h('span', { className: 'ra-iosholdbar__guard', 'aria-hidden': 'true' }, hold.holding ? 'Keep holding' : 'Hold'));
  }

  /* GO: fires the standby cue. One tap — speed matters on cue — made safe by always showing what will fire. */
  function IOSGo(p) {
    return h('button', { type: 'button', className: cx('ra-iosgo', p.size === 'large' && 'is-large', p.size === 'small' && 'is-small'), disabled: p.disabled || !p.next, onClick: function () { H.haptic && H.haptic(14); p.onGo && p.onGo(); },
      'aria-label': p.next ? 'Go: ' + p.next : 'Go, nothing in standby' }, h('span', { className: 'ra-iosgo__label' }, 'GO'));
  }
  /* IOSLiveBar: the one home for Stop scene and End show while a show runs.
     compact: floating bar above the tab bar (iPhone). regular: full-width bar along the bottom of the detail column (iPad).
     expanded: the sheet the compact bar opens into. */
  function IOSLiveBar(p) {
    var state = p.state || 'live', size = p.sizeClass || 'compact', dur = p.duration || 222, el = p.elapsed || 0;
    var pct = Math.max(0, Math.min(1, el / dur)), starting = state === 'starting';
    var cue = p.cue != null ? 'SC ' + String(p.cue).padStart(2, '0') : '';
    var clock = starting ? 'Starting…' : fmt(el) + ' / ' + fmt(dur);
    var label = 'Live: ' + (cue ? cue + ' ' : '') + p.scene + ', ' + p.show;
    if (p.expanded) {
      return h('div', { className: cx('ra-ios', 'ra-ioslive', 'is-expanded', 'is-' + state), role: 'region', 'aria-label': label },
        h('div', { className: 'ra-iossheet__grabber', 'aria-hidden': 'true' }),
        h('div', { className: 'ra-ioslive__x-head' }, h('span', { className: 'ra-ioslive__show' }, p.show), h('button', { type: 'button', className: 'ra-ios__link', onClick: p.onCollapse }, 'Done')),
        h('div', { className: 'ra-ioslive__x-body' },
        iosArt(p.image, 220, !starting),
        h('div', { className: 'ra-ioslive__x-side' },
        h('div', { className: 'ra-ioslive__x-meta' },
          h('div', { className: 'ra-ioslive__cue' }, cue, h('span', null, starting ? 'Starting' : 'Live')),
          h('div', { className: 'ra-ioslive__x-title' }, p.scene),
          h('div', { className: 'ra-ioslive__x-bar', role: 'progressbar', 'aria-label': 'Scene progress', 'aria-valuenow': Math.round(pct * 100), 'aria-valuemin': 0, 'aria-valuemax': 100 }, h('span', { style: { width: pct * 100 + '%' } })),
          h('div', { className: 'ra-ioslive__x-clock' }, h('span', null, fmt(el)), h('span', null, '−' + fmt(dur - el))),
          null),
        p.next ? h('div', { className: 'ra-ioslive__standby is-sheet' }, h('div', { className: 'ra-ioslive__sbtext' }, h('span', { className: 'ra-ioslive__sblabel' }, 'Standby'), h('span', { className: 'ra-ioslive__sbname' }, p.next)), h(IOSGo, { next: p.next, onGo: p.onGo, disabled: starting, size: 'large' })) : null,
        h('div', { className: 'ra-ioslive__x-actions' },
          h(IOSHoldBar, { label: 'Stop scene', icon: 'stop', onHold: p.onStop, disabled: starting }),
          h(IOSHoldBar, { label: 'End show', icon: 'x', kind: 'end', onHold: p.onEndShow })))));
    }
    var progress = h('span', { className: 'ra-ioslive__progress', 'aria-hidden': 'true' }, h('span', { style: { width: pct * 100 + '%' } }));
    var now = h('button', { type: 'button', className: 'ra-ioslive__now', onClick: p.onExpand, 'aria-label': label + '. ' + clock + '. Open live controls' },
      iosArt(p.image, size === 'regular' ? 48 : 40, !starting),
      h('span', { className: 'ra-ioslive__text' },
        h('span', { className: 'ra-ioslive__title' }, h('span', { className: 'ra-ioslive__cue' }, cue), p.scene),
        h('span', { className: 'ra-ioslive__sub' }, h('span', { className: 'ra-ioslive__clock' }, clock), h('span', { className: 'ra-ioslive__subshow' }, '· ' + p.show))));
    if (size === 'regular') {
      return h('div', { className: cx('ra-ios', 'ra-ioslive', 'is-regular', 'is-' + state), role: 'region', 'aria-label': label },
        now,
        h('div', { className: 'ra-ioslive__mid' },
          h('div', { className: 'ra-ioslive__clockrow' }, h('span', { className: 'ra-ioslive__clock' }, starting ? 'Starting…' : fmt(el)), h('span', { className: 'ra-ioslive__bar' }, h('span', { style: { width: pct * 100 + '%' } })), h('span', { className: 'ra-ioslive__remain' }, '−' + fmt(dur - el))),
          null),
        p.next ? h('div', { className: 'ra-ioslive__standby' }, h('div', { className: 'ra-ioslive__sbtext' }, h('span', { className: 'ra-ioslive__sblabel' }, 'Standby'), h('span', { className: 'ra-ioslive__sbname' }, p.next)), h(IOSGo, { next: p.next, onGo: p.onGo, disabled: starting })) : null,
        h('div', { className: 'ra-ioslive__acts' },
          h(IOSHoldRing, { label: 'Stop scene', showLabel: true, onHold: p.onStop, disabled: starting }),
          h(IOSHoldRing, { label: 'End show', icon: 'x', kind: 'end', showLabel: true, onHold: p.onEndShow })), progress);
    }
    return h('div', { className: cx('ra-ios', 'ra-ioslive', 'is-compact', 'is-' + state), role: 'region', 'aria-label': label },
      now, h(IOSHoldRing, { label: 'Stop scene', onHold: p.onStop, disabled: starting }), p.next ? h(IOSGo, { next: p.next, onGo: p.onGo, disabled: starting, size: 'small' }) : null, progress);
  }


  /* IOSLiveActivity: Lock Screen and Dynamic Island while a show runs. Read-only by design:
     nothing consequential can fire from a locked phone — tapping opens the app on the live controls. */
  function IOSLiveActivity(p) {
    var v = p.variant || 'lockscreen', dur = p.duration || 222, el = p.elapsed || 0, pct = Math.max(0, Math.min(1, el / dur));
    var cue = p.cue != null ? 'SC ' + String(p.cue).padStart(2, '0') : '';
    var label = 'Bone Maestro live: ' + cue + ' ' + p.scene + ', ' + fmt(el) + ' of ' + fmt(dur);
    var ring = function (sz) { var r = sz / 2 - 2, c = 2 * Math.PI * r; return h('svg', { className: 'ra-iosla__ring', width: sz, height: sz, viewBox: '0 0 ' + sz + ' ' + sz, 'aria-hidden': 'true' }, h('circle', { cx: sz / 2, cy: sz / 2, r: r }), h('circle', { className: 'is-fill', cx: sz / 2, cy: sz / 2, r: r, strokeDasharray: c, strokeDashoffset: c * (1 - pct) })); };
    if (v === 'compact') return h('div', { className: 'ra-ios ra-iosla ra-iosla--compact', role: 'img', 'aria-label': label },
      iosArt(p.image, 24, true), h('span', { className: 'ra-iosla__island', 'aria-hidden': 'true' }), h('span', { className: 'ra-iosla__clock' }, fmt(el)), ring(22));
    if (v === 'minimal') return h('div', { className: 'ra-ios ra-iosla ra-iosla--minimal', role: 'img', 'aria-label': label }, ring(24));
    if (v === 'expanded') return h('div', { className: 'ra-ios ra-iosla ra-iosla--expanded', role: 'group', 'aria-label': label },
      h('div', { className: 'ra-iosla__row' }, iosArt(p.image, 48, true), h('div', { className: 'ra-iosla__text' }, h('span', { className: 'ra-iosla__cue' }, cue + ' · LIVE'), h('span', { className: 'ra-iosla__title' }, p.scene)), h('span', { className: 'ra-iosla__big' }, fmt(el))),
      h('div', { className: 'ra-iosla__bar' }, h('span', { style: { width: pct * 100 + '%' } })),
      h('div', { className: 'ra-iosla__foot' }, h('span', null, p.next ? 'Standby  ' + p.next : p.show), h('span', null, '−' + fmt(dur - el))));
    return h('div', { className: 'ra-ios ra-iosla ra-iosla--lock', role: 'group', 'aria-label': label },
      h('div', { className: 'ra-iosla__row' }, iosArt(p.image, 52, true),
        h('div', { className: 'ra-iosla__text' }, h('span', { className: 'ra-iosla__cue' }, cue + ' · LIVE · ' + p.show), h('span', { className: 'ra-iosla__title' }, p.scene)),
        h('span', { className: 'ra-iosla__big' }, fmt(el))),
      h('div', { className: 'ra-iosla__bar' }, h('span', { style: { width: pct * 100 + '%' } })),
      h('div', { className: 'ra-iosla__foot' }, h('span', null, p.next ? 'Standby  ' + p.next : ''), h('span', { className: 'ra-iosla__lock' }, h(Glyph, { name: 'lock', size: 12 }), 'Controls in app')));
  }

  /* IOSMenuBar: the iPadOS menu bar for the performance app — every live action in one place.
     Items never hide; unavailable ones dim in place. */
  var MENUS = ['Bone Maestro', 'File', 'Edit', 'View', 'Performance', 'Window', 'Help'];
  var PERF = [[['GO', '', 'play'], ['Standby Next Scene', '', 'chevron-down'], ['Standby Previous Scene', '', 'chevron-up']],
    [['Stop Scene (hold)', '', 'stop'], ['End Show… (hold)', '', 'x']],
    [['Arm Next Show', '', 'skip-forward'], ['Show Live Controls', '', 'audio-lines'], ['Rehearsal Mode', '', 'clock']]];
  function IOSMenuBar(p) {
    var open = p.open || 'Performance', dis = p.disabled || [];
    return h('div', { className: 'ra-ios ra-iosmenubar' },
      h('div', { className: 'ra-iosmenubar__bar', role: 'menubar', 'aria-label': 'Menu bar' }, MENUS.map(function (m, i) {
        return h('button', { key: m, type: 'button', role: 'menuitem', 'aria-haspopup': 'true', 'aria-expanded': m === open ? 'true' : 'false', className: cx('ra-iosmenubar__m', i === 0 && 'is-app', m === open && 'is-open') }, m); })),
      open === 'Performance' ? h('div', { className: 'ra-iosmenubar__menu', role: 'menu', 'aria-label': 'Performance' }, PERF.map(function (grp, gi) {
        return h('div', { key: gi, className: 'ra-iosmenubar__grp', role: 'group' }, grp.map(function (it) {
          var off = dis.indexOf(it[0]) >= 0;
          return h('button', { key: it[0], type: 'button', role: 'menuitem', 'aria-disabled': off ? 'true' : undefined, className: cx('ra-iosmenubar__item', off && 'is-disabled') },
            h('span', { className: 'ra-iosmenubar__ic', 'aria-hidden': 'true' }, H.Visual(it[2], 16)), h('span', { className: 'ra-iosmenubar__lb' }, it[0]));
        }));
      })) : null);
  }
  X.IOSDevice = IOSDevice; X.IOSList = IOSList; X.IOSSceneRow = IOSSceneRow; X.IOSShowRow = IOSShowRow; X.IOSLiveBar = IOSLiveBar; X.IOSLiveActivity = IOSLiveActivity; X.IOSMenuBar = IOSMenuBar;

  })();
  /* ---- 11h-ios-system.js ---- */
  (function(){
  /* iOS + iPadOS system patterns: alerts and confirmation dialogs, permission primers,
     device pairing, device rows and the connection banner. Design references for SwiftUI. */
  var Glyph = H.Glyph;

  function pill(tone, label, dot) {
    return h('span', { className: cx('ra-iospill', 'is-' + tone) }, dot ? h('span', { className: 'ra-iospill__dot', 'aria-hidden': 'true' }) : null, label);
  }
  function spin(label) { return h('span', { className: 'ra-iossys__spin', role: 'img', 'aria-label': label || 'Working' }); }

  /* IOSAlert: alert (centered) or confirmation dialog (action sheet on iPhone, popover on iPad).
     actions: [{ label, role: 'cancel' | 'destructive' | 'default', preferred }] */
  function IOSAlert(p) {
    var kind = p.variant === 'confirmation' ? 'confirmation' : 'alert', regular = p.sizeClass === 'regular';
    var acts = p.actions || (kind === 'alert'
      ? [{ label: 'Cancel', role: 'cancel' }, { label: 'OK', role: 'default', preferred: true }]
      : [{ label: 'Delete', role: 'destructive' }, { label: 'Cancel', role: 'cancel' }]);
    var titleId = 'ra-iosalert-t-' + (p.id || kind);
    function btn(a, i) {
      return h('button', { key: i, type: 'button', className: cx('ra-iosalert__btn', 'is-' + (a.role || 'default'), a.preferred && 'is-preferred'), onClick: a.onClick }, a.label);
    }
    var body = h('div', { className: 'ra-iosalert__text' },
      p.title ? h('h2', { id: titleId, className: 'ra-iosalert__title' }, p.title) : null,
      p.message ? h('p', { className: 'ra-iosalert__msg' }, p.message) : null);
    var node;
    if (kind === 'alert') {
      var stacked = acts.length > 2 || p.stacked;
      node = h('div', { className: cx('ra-ios', 'ra-iosalert', 'is-alert', p.className), role: 'alertdialog', 'aria-modal': 'true', 'aria-labelledby': p.title ? titleId : undefined },
        body, h('div', { className: cx('ra-iosalert__actions', stacked && 'is-stacked') }, acts.map(btn)));
    } else {
      var cancel = acts.filter(function (a) { return a.role === 'cancel'; })[0];
      var rest = acts.filter(function (a) { return a.role !== 'cancel'; });
      node = h('div', { className: cx('ra-ios', 'ra-iosalert', 'is-confirmation', regular ? 'is-popover' : 'is-sheet', p.className), role: 'dialog', 'aria-modal': regular ? undefined : 'true', 'aria-labelledby': p.title ? titleId : undefined },
        h('div', { className: 'ra-iosalert__group' }, (p.title || p.message) ? body : null, rest.map(btn)),
        /* iPad popovers dismiss by tapping outside, so they drop the Cancel button. */
        (!regular && cancel) ? h('div', { className: 'ra-iosalert__group is-cancel' }, btn(cancel, 'c')) : null);
    }
    if (!p.overlay) return node;
    return h('div', { className: cx('ra-iosoverlay', kind === 'confirmation' && !regular && 'is-bottom', kind === 'confirmation' && regular && 'is-anchored') }, node);
  }

  /* IOSPermissionPrimer: explains a permission before the system prompt, or recovers after it was denied. */
  var PERM = {
    bluetooth: { icon: 'radio', title: 'Find your stage devices', denied: 'Bluetooth is off for Bone Maestro',
      points: ['Finds Maestro devices near the stage', 'Keeps output in sync during a show', 'Only connects to devices you choose'],
      deniedBody: 'Without Bluetooth, Bone Maestro can’t find or control stage devices. Turn it on in Settings, then come back.' },
    network: { icon: 'connect-outline', title: 'Connect over your network', denied: 'Local network access is off',
      points: ['Reaches Maestro devices on the same Wi‑Fi', 'Sends cues with low latency', 'Never leaves your local network'],
      deniedBody: 'Bone Maestro can’t reach devices on your Wi‑Fi. Turn on Local Network in Settings, then come back.' },
    notifications: { icon: 'alert', title: 'Know when a device drops', denied: 'Notifications are off',
      points: ['Alerts you if a device disconnects mid-show', 'Tells you when a scene fails to start', 'No marketing, ever'],
      deniedBody: 'You won’t be alerted if a device drops during a show. You can turn notifications on in Settings.' }
  };
  function IOSPermissionPrimer(p) {
    var kind = PERM[p.kind] ? p.kind : 'bluetooth', c = PERM[kind], denied = p.state === 'denied';
    return h('section', { className: cx('ra-ios', 'ra-iosperm', denied && 'is-denied', p.className), 'aria-labelledby': 'ra-iosperm-' + kind },
      h('div', { className: 'ra-iosperm__mark', 'aria-hidden': 'true' }, H.Visual(denied ? 'alert' : c.icon, 40)),
      h('h2', { id: 'ra-iosperm-' + kind, className: 'ra-iosperm__title' }, denied ? c.denied : (p.title || c.title)),
      denied ? h('p', { className: 'ra-iosperm__body' }, c.deniedBody)
        : h('ul', { className: 'ra-iosperm__points' }, (p.points || c.points).map(function (t, i) {
            return h('li', { key: i }, h('span', { className: 'ra-iosperm__check', 'aria-hidden': 'true' }, h(Glyph, { name: 'check', size: 16, stroke: 2.6 })), t);
          })),
      h('div', { className: 'ra-iosperm__actions' },
        h('button', { type: 'button', className: 'ra-iossys__primary', onClick: p.onContinue }, denied ? 'Open Settings' : 'Continue'),
        h('button', { type: 'button', className: 'ra-ios__link', onClick: p.onLater }, 'Not now')),
      denied ? null : h('p', { className: 'ra-iosperm__foot' }, 'iOS will ask you next. You can change this anytime in Settings.'));
  }

  /* Signal bars (0–1). */
  function Signal(p) {
    var v = Math.max(0, Math.min(1, p.value == null ? 0.75 : p.value)), on = Math.round(v * 4);
    var label = on >= 4 ? 'Excellent' : on === 3 ? 'Good' : on === 2 ? 'Fair' : on === 1 ? 'Weak' : 'No signal';
    return h('span', { className: cx('ra-iossignal', on <= 1 && 'is-weak'), role: 'img', 'aria-label': 'Signal ' + label },
      [0, 1, 2, 3].map(function (i) { return h('i', { key: i, className: i < on ? 'is-on' : '' }); }));
  }

  /* IOSDeviceRow: a stage device. Connected (transport) ≠ Ready (validated) ≠ Armed ≠ Live. */
  var DV = {
    found: ['quiet', 'Nearby', false], connecting: ['info', 'Connecting', false], connected: ['info', 'Connected', true],
    ready: ['toxic', 'Ready', true], armed: ['toxic', 'Armed', true], live: ['live', 'Live', true],
    unstable: ['warning', 'Unstable', true], offline: ['quiet', 'Offline', false], failed: ['danger', 'Failed', false]
  };
  function IOSDeviceRow(p) {
    var state = DV[p.state] ? p.state : 'connected', st = DV[state], regular = p.sizeClass === 'regular';
    var trailing = state === 'connecting' ? spin('Connecting')
      : state === 'found' ? h('button', { type: 'button', className: 'ra-ioscap is-tint', onClick: p.onAction }, h('span', null, p.actionLabel || 'Connect'))
      : (state === 'offline' || state === 'failed') ? h('button', { type: 'button', className: 'ra-ioscap is-plain', onClick: p.onAction }, h('span', null, p.actionLabel || (state === 'failed' ? 'Try again' : 'Reconnect')))
      : h('span', { className: 'ra-iosrow__chev', 'aria-hidden': 'true' }, h(Glyph, { name: 'chevron-right', size: 18 }));
    return h('div', { className: cx('ra-ios', 'ra-iosdev', 'is-' + state, regular && 'is-regular', p.className) },
      h('span', { className: 'ra-iosdev__icon', 'aria-hidden': 'true' }, H.Visual('radio', 22)),
      h('span', { className: 'ra-iosdev__main' },
        h('span', { className: 'ra-iosdev__name' }, p.name || 'Maestro MR-8'),
        h('span', { className: 'ra-iosdev__meta' },
          pill(st[0], st[1], state === 'live' || state === 'armed' || state === 'unstable'),
          st[2] || state === 'found' ? h(Signal, { value: p.signal }) : null,
          h('span', { className: 'ra-iosdev__detail' }, p.detail || p.model || 'Stage output · 8 ch'))),
      h('span', { className: 'ra-iosdev__trail' }, trailing));
  }

  /* IOSPairingSheet: the steps after a device is picked (or the fallback list on devices without the system accessory picker). */
  function IOSPairingSheet(p) {
    var state = p.state || 'searching', regular = p.sizeClass === 'regular';
    var devices = p.devices || [{ name: 'Maestro MR-8', detail: 'Stage left · 8 ch', signal: 0.9 }, { name: 'Maestro MR-4', detail: 'FOH rack · 4 ch', signal: 0.5 }];
    var dev = devices[0];
    var content;
    if (state === 'searching' || state === 'found') {
      content = h('div', null,
        h('div', { className: 'ra-iospair__status' }, state === 'searching' ? spin('Searching') : null,
          h('span', null, state === 'searching' ? 'Looking for Maestro devices nearby…' : devices.length + ' devices nearby')),
        state === 'found' ? h(X.IOSList, { header: 'Nearby' }, devices.map(function (d, i) { return h(IOSDeviceRow, { key: i, state: 'found', name: d.name, detail: d.detail, signal: d.signal, sizeClass: p.sizeClass }); })) : null,
        h('p', { className: 'ra-iospair__hint' }, 'Power on the device and keep it within a few meters. Bluetooth must be on.'));
    } else {
      var steps = [['Connect', 'Linked over Bluetooth LE'], ['Check output', 'Firmware and channels validated'], ['Ready', 'Accepts cues from this iPhone']];
      var reached = state === 'paired' ? 3 : 1;
      content = h('div', { className: 'ra-iospair__device' },
        h('div', { className: cx('ra-iospair__hero', state === 'paired' && 'is-ok', state === 'failed' && 'is-fail'), 'aria-hidden': 'true' }, H.Visual(state === 'failed' ? 'alert' : state === 'paired' ? 'circle-check' : 'radio', 44)),
        h('h3', { className: 'ra-iospair__name' }, dev.name),
        h('p', { className: 'ra-iospair__sub' }, dev.detail),
        state === 'failed'
          ? h('p', { className: 'ra-iospair__error', role: 'alert' }, p.error || 'Couldn\u2019t connect to ' + dev.name + '. It stopped responding during setup. Move closer, restart the device, then try again.')
          : h('ol', { className: 'ra-iospair__steps' }, steps.map(function (s, i) {
              var done = i < reached, cur = state === 'pairing' && i === reached;
              return h('li', { key: i, className: cx(done && 'is-done', cur && 'is-current') },
                h('span', { className: 'ra-iospair__dot', 'aria-hidden': 'true' }, done ? h(Glyph, { name: 'check', size: 14, stroke: 3 }) : cur ? spin('In progress') : null),
                h('span', null, h('b', null, s[0]), h('small', null, s[1])));
            })));
    }
    var primary = state === 'paired' ? 'Done' : state === 'failed' ? 'Try again' : null;
    return h('div', { className: cx('ra-ios', 'ra-iossheet', 'ra-iospair', regular && 'is-form', p.className), role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Add a device' },
      regular ? null : h('div', { className: 'ra-iossheet__grabber', 'aria-hidden': 'true' }),
      h('div', { className: 'ra-iossheet__bar' }, h('button', { type: 'button', className: 'ra-ios__link' }, 'Cancel'), h('span', { className: 'ra-iosnav__title' }, 'Add a device'), h('span', { className: 'ra-iospair__barspace' })),
      h('div', { className: 'ra-iossheet__content' }, content,
        primary ? h('button', { type: 'button', className: 'ra-iossys__primary', onClick: p.onPrimary }, primary) : null));
  }

  /* IOSConnectionBanner: transport problems, shown under the navigation bar. Never covers the live bar. */
  var CB = {
    offline: ['wifi-off', 'Maestro MR-8 is offline', 'Output stopped on this device. Check its power and cable.', 'Retry', 'danger'],
    reconnecting: ['radio', 'Reconnecting to Maestro MR-8…', 'Output continues on the other devices.', null, 'info'],
    unstable: ['alert', 'Maestro MR-8 is unstable', 'Packets are dropping; output continues. Check the stage-left cable.', 'Details', 'warning'],
    restored: ['circle-check', 'Maestro MR-8 is back', 'Connected and ready.', null, 'success']
  };
  function IOSConnectionBanner(p) {
    var state = CB[p.state] ? p.state : 'offline', c = CB[state];
    var title = p.title || c[1], detail = p.detail || c[2];
    return h('div', { className: cx('ra-ios', 'ra-iosbanner', 'is-' + state, p.className), role: state === 'offline' ? 'alert' : 'status' },
      h('span', { className: 'ra-iosbanner__icon', 'aria-hidden': 'true' }, state === 'reconnecting' ? spin() : state === 'offline' ? h(Glyph, { name: 'circle-x', size: 20 }) : H.Visual(c[0], 20)),
      h('span', { className: 'ra-iosbanner__text' }, h('b', null, title), h('span', null, detail)),
      (p.action !== false && (p.actionLabel || c[3])) ? h('button', { type: 'button', className: 'ra-ioscap is-plain', onClick: p.onAction }, h('span', null, p.actionLabel || c[3])) : null);
  }

  X.IOSAlert = IOSAlert; X.IOSPermissionPrimer = IOSPermissionPrimer; X.IOSDeviceRow = IOSDeviceRow;
  X.IOSPairingSheet = IOSPairingSheet; X.IOSConnectionBanner = IOSConnectionBanner; X.IOSSignal = Signal;

  })();
  /* ---- 20-extended.js ---- */
  (function(){
  var Glyph = H.Glyph;

  /* ===== Signature layer ===== */
  /* MutationRail: rail geometry for M0 Dormant · M1 Ready · M2 Armed · M3 Live · M4 Critical. */
  function MutationRail(p) {
    var lvl = p.level != null ? p.level : 1;
    var w = lvl >= 2 ? 4 : 2;
    var col = lvl === 4 ? 'var(--ra-semantic-color-status-danger)' : lvl === 0 ? 'var(--ra-semantic-color-border-strong)' : 'var(--ra-semantic-color-mutation-live)';
    var cy = 32, parts = [];
    parts.push(h('rect', { key: 'cap', x: 0, y: cy - 8, width: 5, height: 16, rx: 2, fill: col }));
    if (lvl === 4) parts.push(h('rect', { key: 'notch', x: 9, y: cy - 10, width: 7, height: 20, rx: 1, fill: col }));
    if (lvl === 3) {
      [[8, 84], [100, 48], [156, 42]].forEach(function (s, i) { parts.push(h('rect', { key: 'p' + i, x: s[0], y: cy - 2, width: s[1], height: 4, rx: 2, fill: col, className: 'ra-rail__live' })); });
      parts.push(h('rect', { key: 'j', x: 92, y: cy - 5, width: 10, height: 10, rx: 2, fill: col }));
    } else {
      if (lvl >= 1) parts.push(h('rect', { key: 'n', x: 20, y: cy - 5, width: 10, height: 10, rx: 2, fill: col }));
      parts.push(h('rect', { key: 'a', x: 30, y: cy - w / 2, width: 86, height: w, rx: w / 2, fill: col }));
      parts.push(h('rect', { key: 'i', x: 116 + w / 2, y: cy - 8, width: 18 - w, height: 16, rx: 3, fill: 'none', stroke: col, strokeWidth: w }));
      parts.push(h('rect', { key: 'b', x: 134, y: cy - w / 2, width: 82, height: w, rx: w / 2, fill: col }));
    }
    var names = ['M0 — Dormant', 'M1 — Ready', 'M2 — Armed', 'M3 — Live', 'M4 — Critical'];
    return h('svg', { className: cx('ra-mrail', 'ra-mrail--m' + lvl, p.className), width: p.width || 216, height: 64, viewBox: '0 0 216 64', role: 'img', 'aria-label': p.label || names[lvl], opacity: lvl === 0 ? 0.42 : undefined, preserveAspectRatio: 'none' }, parts);
  }
  X.MutationRail = MutationRail;

  /* MutationRailRow: specimen row — level, status, rail and usage. */
  var RAIL_COPY = [
    ['Dormant', 'Neutral, static, and almost invisible. Use for available structure or disconnected routes that should not compete with content.', '1–2px / static / no glow', 'neutral'],
    ['Ready', 'Validated and able to accept a command. A stable activation node marks readiness.', '2px / node / no glow', 'information'],
    ['Armed', 'Committed to the next trigger. Strong junction, one-shot feedback.', '4px / junction / one-shot', 'warning'],
    ['Live', 'Consequential output is active now. Energized route, localized glow, optional slow pulse.', '4px / energized / pulse', 'success'],
    ['Critical', 'Override within Failure and Emergency. Danger structure replaces brand expression.', '4px / notch / held', 'danger']];
  function MutationRailRow(p) {
    var lvl = p.level != null ? p.level : 0, c = RAIL_COPY[lvl];
    return h('div', { className: cx('ra-railrow', p.className) },
      h('div', { className: 'ra-railrow__id' }, h('div', null, h('span', { className: 'ra-railrow__m' }, 'M' + lvl), ' ', c[0]), h(StatusBadge, { status: lvl === 3 ? 'success' : c[3] }, p.status || c[0])),
      h('div', { className: 'ra-railrow__rail' }, h(MutationRail, { level: lvl }), h('div', { className: 'ra-railrow__spec' }, c[2])),
      h('p', { className: 'ra-railrow__copy' }, c[1]));
  }
  X.MutationRailRow = MutationRailRow;

  /* MutationLevel: how expressive the context may be — M0 Clean … M4 Campaign. */
  function MutationLevel(p) {
    var lvl = p.level != null ? p.level : 0;
    var name = ['Clean', 'Signal', 'Active', 'Performance', 'Campaign'][lvl];
    return h('div', { className: cx('ra-mlevel', 'ra-mlevel--m' + lvl, p.className) }, h('span', { className: 'ra-mlevel__code' }, 'M' + lvl), h('span', { className: 'ra-mlevel__name' }, p.label || name));
  }
  X.MutationLevel = MutationLevel;

  /* MaestroSlash: the controlled delimiter shape — Micro, Section, Hero, Motion. */
  var SLASH = {
    micro: ['0 0 96 64', [['M0 31.08L72.16 7.56L88 0L77.44 17.64L4.4 42L0 31.08Z', 'live', 1]]],
    section: ['0 0 480 96', [['M0 91.76L426.4 22.32L520 0L457.6 52.08L26 124L0 91.76Z', 'live', 1]]],
    hero: ['0 0 720 420', [['M0 170.2L533 41.4L650 0L572 96.6L32.5 230L0 170.2Z', 'live', 0.24], ['M0 244.2L688.8 59.4L840 0L739.2 138.6L42 330L0 244.2Z', 'creative', 1]]],
    motion: ['0 0 640 160', [['M0 107.3L459.2 26.1L560 0L492.8 60.9L28 145L0 107.3Z', 'live', 1], ['M0 77.7L319.8 18.9L390 0L343.2 44.1L19.5 105L0 77.7Z', 'live', 0.2]]]
  };
  function MaestroSlash(p) {
    var v = SLASH[p.variant || 'micro'];
    return h('svg', { className: cx('ra-slash', 'ra-slash--' + (p.variant || 'micro'), p.className), viewBox: v[0], width: p.width, 'aria-hidden': 'true', preserveAspectRatio: 'xMinYMin slice', style: { overflow: 'hidden' } },
      v[1].map(function (s, i) { return h('path', { key: i, d: s[0], fill: 'var(--ra-semantic-color-mutation-' + s[1] + ')', opacity: s[2] }); }));
  }
  X.MaestroSlash = MaestroSlash;

  /* BoneSync: data-driven segment-and-joint signal — Micro, Status, Audio Track, Performance, Hero. */
  function BoneSync(p) {
    var type = p.type || 'performance';
    var dims = { micro: [112, 32, 6, 3], status: [208, 48, 10, 4], audio: [660, 74, 22, 5], performance: [700, 118, 22, 5], hero: [660, 154, 18, 6] }[type];
    var W = dims[0], Hh = dims[1], n = dims[2], sw = dims[3], cy = Hh / 2;
    var vals = p.values || Array.from({ length: n }, function (_, i) { return ((i * 37) % 11) / 10; });
    var col = type === 'audio' || type === 'micro' ? 'var(--ra-semantic-color-text-primary)' : 'var(--ra-semantic-color-mutation-live)';
    var x0 = type === 'micro' ? 4 : 18, x1 = W - (type === 'micro' ? 4 : 28), step = (x1 - x0) / n, seg = Math.max(6, step * 0.72), out = [];
    out.push(h('rect', { key: 'line', x: x0, y: cy - 0.5, width: x1 - x0, height: 1, fill: 'var(--ra-semantic-color-border-default)' }));
    vals.forEach(function (v, i) {
      var up = i % 2 ? 1 : -1, amp = (0.35 + 0.65 * v) * (cy - sw - 2);
      out.push(h('rect', { key: 's' + i, x: x0 + i * step, y: cy + up * amp - sw / 2, width: seg, height: sw, rx: sw / 2, fill: col, opacity: i % 3 === 1 ? 0.78 : 1 }));
    });
    var joints = type === 'micro' ? 2 : type === 'status' ? 3 : type === 'hero' ? 4 : 5;
    for (var j = 1; j <= joints; j++) { var jx = x0 + (x1 - x0) * j / (joints + 1); out.push(h('circle', { key: 'j' + j, cx: jx, cy: cy, r: sw + 1.5, fill: 'var(--ra-semantic-color-background-canvas)', stroke: col, strokeWidth: sw * 0.6 })); }
    if (type !== 'micro' && type !== 'audio') out.push(h('path', { key: 'arr', d: 'M' + (x1 + 6) + ' ' + (cy - 6) + 'l6 6-6 6M' + (x1) + ' ' + cy + 'h12', stroke: col, strokeWidth: 2, fill: 'none', strokeLinecap: 'round' }));
    return h('svg', { className: cx('ra-bonesync', 'ra-bonesync--' + type, p.className), viewBox: '0 0 ' + W + ' ' + Hh, width: p.width || W, height: p.width ? undefined : Hh, role: 'img', 'aria-label': p.label || 'Bone Sync signal' }, out);
  }
  X.BoneSync = BoneSync;

  /* SpecimenLabel: KEY // VALUE production markings — Micro, Inline, Card, Panel, Editorial. */
  function SpecimenLabel(p) {
    var v = p.variant || 'inline', idx = p.index || '01';
    var kv = h('span', { className: 'ra-spec__kv' }, h('span', { className: 'ra-spec__key' }, p.k || 'SCENE'), h('span', { className: 'ra-spec__slash' }, ' // '), h('span', { className: 'ra-spec__val' }, p.value || '04'));
    if (v === 'micro') return h('span', { className: 'ra-spec ra-spec--micro' }, h('span', { className: 'ra-spec__idx' }, idx), h('span', { className: 'ra-spec__sep' }), kv);
    if (v === 'inline') return h('span', { className: 'ra-spec ra-spec--inline' }, h('span', { className: 'ra-spec__idx' }, idx), kv);
    if (v === 'editorial') return h('div', { className: 'ra-spec ra-spec--editorial' }, h('div', { className: 'ra-spec__left' }, h('span', { className: 'ra-spec__fmt ra-spec__accent' }, p.format || 'ISSUE / MARK'), h('span', { className: 'ra-spec__big' }, idx)), h('span', { className: 'ra-spec__div' }),
      h('div', { className: 'ra-spec__right' }, h('span', { className: 'ra-spec__fmt' }, p.classification || 'ARCHIVE / PERFORMANCE OBJECT'), h('span', { className: 'ra-spec__title' }, p.k || 'SPECIMEN'), h('span', { className: 'ra-spec__val' }, '// ' + (p.value || 'BM-042'))));
    return h('div', { className: 'ra-spec ra-spec--' + v }, h('div', { className: 'ra-spec__top' }, v === 'panel' ? h('span', { className: 'ra-spec__key-bar' }) : null, h('span', { className: 'ra-spec__fmt' }, p.format || (v === 'panel' ? 'PANEL / LOCKUP' : 'CARD / SPEC')), h('span', { className: 'ra-spec__idx' }, idx)), kv);
  }
  X.SpecimenLabel = SpecimenLabel;

  /* ===== Android core (Material 3 geometry, Bone Maestro roles) ===== */
  function AndroidButton(p) {
    var a = p.appearance || 'filled';
    return h('button', Object.assign({ type: 'button', className: cx('ra-andbtn', 'ra-andbtn--' + a, p.className) }, omit(p, ['appearance', 'className', 'icon', 'children'])), p.icon ? H.Visual(p.icon, 18) : null, p.children);
  }
  function AndroidFilterChip(p) {
    return h('button', { type: 'button', className: cx('ra-andchip', p.selected && 'is-selected', p.className), 'aria-pressed': String(!!p.selected), disabled: p.disabled, onClick: p.onClick }, p.selected ? h(Glyph, { name: 'check', size: 18 }) : null, p.label || p.children);
  }
  function AndroidSearch(p) {
    if (p.mode === 'expanded') return h('div', { className: 'ra-andsearch is-expanded' }, h('div', { className: 'ra-andsearch__bar' }, h('button', { type: 'button', className: 'ra-ios__btn', 'aria-label': 'Back' }, h(Glyph, { name: 'chevron-left', size: 24 })), h('input', { className: 'ra-andsearch__input', placeholder: p.placeholder || 'Search scenes', defaultValue: p.query, 'aria-label': 'Search' }), p.query ? h('button', { type: 'button', className: 'ra-ios__btn', 'aria-label': 'Clear query' }, h(Glyph, { name: 'x', size: 20 })) : null), p.children ? h('div', { className: 'ra-andsearch__results' }, p.children) : null);
    return h('button', { type: 'button', className: 'ra-andsearch' }, h(Glyph, { name: 'menu', size: 24 }), h('span', { className: 'ra-andsearch__hint' }, p.placeholder || 'Search scenes'), h(Glyph, { name: 'search', size: 24 }));
  }
  function AndroidListItem(p) {
    return h('a', { href: '#', className: cx('ra-andlist', p.selected && 'is-selected', p.disabled && 'is-disabled', p.className), 'aria-current': p.selected ? 'true' : undefined },
      p.icon ? h('span', { className: 'ra-andlist__icon' }, H.Visual(p.icon, 24)) : null,
      h('span', { className: 'ra-andlist__text' }, p.overline ? h('span', { className: 'ra-andlist__over' }, p.overline) : null, h('span', { className: 'ra-andlist__title' }, p.title), p.supporting ? h('span', { className: 'ra-andlist__sup' }, p.supporting) : null),
      p.trailing ? h('span', { className: 'ra-andlist__trail' }, p.trailing) : null);
  }
  function AndroidDialog(p) {
    var destructive = p.intent === 'destructive';
    return h('div', { className: 'ra-anddialog', role: destructive ? 'alertdialog' : 'dialog', 'aria-modal': 'true', 'aria-label': p.title },
      h('h2', { className: 'ra-anddialog__title' }, p.title), h('p', { className: 'ra-anddialog__body' }, p.description),
      h('div', { className: 'ra-anddialog__actions' }, h(AndroidButton, { appearance: 'text' }, p.cancelLabel || 'Cancel'), h(AndroidButton, { appearance: 'text', className: destructive ? 'is-danger' : undefined }, p.confirmLabel || (destructive ? 'Delete' : 'Confirm'))));
  }
  function AndroidAppBar(p) {
    return h('header', { className: cx('ra-andbar', p.scrolled && 'is-scrolled', p.className) }, h('button', { type: 'button', className: 'ra-ios__btn ra-andbar__btn', 'aria-label': 'Navigate up' }, h(Glyph, { name: 'chevron-left', size: 24 })), h('h1', { className: 'ra-andbar__title' }, p.title || 'Scenes'), h('button', { type: 'button', className: 'ra-ios__btn ra-andbar__btn', 'aria-label': 'Search' }, h(Glyph, { name: 'search', size: 24 })), h('button', { type: 'button', className: 'ra-ios__btn ra-andbar__btn', 'aria-label': 'More options' }, h(Glyph, { name: 'more', size: 24 })));
  }
  function AndroidBottomSheet(p) {
    return h('div', { className: cx('ra-andsheet', p.modal && 'is-modal', p.className), role: p.modal ? 'dialog' : 'region', 'aria-modal': p.modal ? 'true' : undefined, 'aria-label': p.title },
      h('div', { className: 'ra-andsheet__handle', 'aria-hidden': 'true' }), p.title ? h('h2', { className: 'ra-andsheet__title' }, p.title) : null, p.children);
  }
  X.AndroidButton = AndroidButton; X.AndroidFilterChip = AndroidFilterChip; X.AndroidSearch = AndroidSearch; X.AndroidListItem = AndroidListItem;
  X.AndroidDialog = AndroidDialog; X.AndroidAppBar = AndroidAppBar; X.AndroidBottomSheet = AndroidBottomSheet;

  /* ===== Patterns and blocks ===== */
  /* CollectionBrowser: search, filters, results summary, record rows and feedback states. */
  function CollectionBrowser(p) {
    var st = p.state || 'results', records = p.records || [];
    var filters = p.filters || [];
    var sel = React.useState(p.defaultFilter != null ? p.defaultFilter : 0);
    var body;
    if (st === 'results') body = h('div', { className: 'ra-collection__rows' }, records.map(function (r, i) { return h(X.ListRow, Object.assign({ key: i, kind: 'browse' }, r)); }));
    else body = h(X.EmptyState, { spot: st === 'no-results' ? 'no-results' : st === 'error' ? 'offline' : st === 'loading' ? null : 'no-data', loading: st === 'loading', title: { empty: 'No ' + (p.noun || 'records') + ' yet', 'no-results': 'No matching ' + (p.noun || 'records'), loading: 'Loading ' + (p.noun || 'records'), error: (p.title || 'Records') + ' could not load' }[st], body: { empty: 'Create the first one to see it here.', 'no-results': 'Try a different search or clear filters.', loading: 'Keep this view open.', error: 'Check the connection, then try again.' }[st], action: st === 'error' ? 'Retry' : st === 'empty' ? (p.createLabel || 'Create') : st === 'no-results' ? 'Clear filters' : undefined });
    return h('section', { className: cx('ra-collection', p.className), 'aria-label': p.title },
      h('h2', { className: 'ra-collection__title' }, p.title || 'Projects'),
      h(X.TextInput, { label: p.searchLabel || 'Search', kind: 'search', placeholder: 'Search ' + (p.noun || 'records'), leadingIcon: 'search' }),
      filters.length ? h('div', { className: 'ra-row ra-collection__filters', role: 'group', 'aria-label': 'Filters' }, filters.map(function (f, i) { return h(X.Chip, { key: i, kind: 'filter', label: f, selected: i === sel[0], onClick: function () { sel[1](i); } }); })) : null,
      st === 'results' ? h('div', { className: 'ra-collection__summary', role: 'status' }, p.summary || (records.length + ' ' + (p.noun || 'records') + ' · ' + records.filter(function (r) { return r.selected; }).length + ' selected')) : null,
      body);
  }
  X.CollectionBrowser = CollectionBrowser;

  /* CollectionDetail: selected record detail — Selected, No selection, Unavailable. */
  function CollectionDetail(p) {
    var st = p.state || 'selected';
    if (st !== 'selected') return h('section', { className: cx('ra-detail', p.className) }, h(X.EmptyState, { spot: st === 'unavailable' ? 'offline' : 'no-data', title: st === 'unavailable' ? 'This record is unavailable' : 'Select a record', body: st === 'unavailable' ? 'It may have been moved or you may have lost access.' : 'Details appear here when you choose a record.' }));
    return h('section', { className: cx('ra-detail', p.className), 'aria-label': p.title },
      h('h2', { className: 'ra-detail__title' }, p.title || 'Cinder campaign'), p.meta ? h('div', { className: 'ra-detail__meta' }, p.meta) : null,
      p.summary ? h('p', { className: 'ra-detail__text' }, p.summary) : null, p.body ? h('p', { className: 'ra-detail__text' }, p.body) : null,
      p.action ? h('div', null, h(Button, { variant: 'secondary', onClick: p.onAction }, p.action)) : null, p.children);
  }
  X.CollectionDetail = CollectionDetail;

  /* WorkspaceListDetail: Expanded (list + detail), Compact list or Compact detail. */
  function WorkspaceListDetail(p) {
    var layout = p.layout || 'expanded';
    return h('div', { className: cx('ra-workspace', 'is-' + layout, p.className) },
      layout !== 'compact-detail' ? h('div', { className: 'ra-workspace__list' }, p.list) : null,
      layout !== 'compact-list' ? h('div', { className: 'ra-workspace__detail' }, layout === 'compact-detail' ? h(X.IOSBackButton || 'span', { label: p.backLabel || 'Projects' }) : null, p.detail) : null);
  }
  X.WorkspaceListDetail = WorkspaceListDetail;

  /* FilesAcquisition: browse-first acquisition — Native / Web × Empty, Review, Working, Partial, Complete, Cancelled. */
  function FilesAcquisition(p) {
    var st = p.state || 'empty', web = p.presentation === 'web';
    var drag = React.useState(false);
    var msg = { empty: 'Choose files to review before adding them.', review: 'Review each file, then add the ready ones.', working: 'Adding files — keep this view open.', partial: 'Some files were not added. Retry or choose others.', complete: 'All files were added.', cancelled: 'Adding was cancelled. Nothing else was added.' }[st];
    var target = h('div', { className: cx('ra-acq__target', web && 'is-web', drag[0] && 'is-drag'), onDragOver: web ? function (e) { e.preventDefault(); drag[1](true); } : undefined, onDragLeave: web ? function () { drag[1](false); } : undefined, onDrop: web ? function (e) { e.preventDefault(); drag[1](false); } : undefined },
      h('label', { className: 'ra-button ra-button--secondary ra-acq__choose' }, h('input', { type: 'file', multiple: true, className: 'ra-sr', accept: p.accept }), h(Glyph, { name: 'upload', size: 18 }), h('span', null, p.chooseLabel || 'Choose files')),
      h('span', { className: 'ra-acq__hint' }, web ? 'Choose files or drop them here.' : 'Choose files from Files or another provider.'));
    return h('section', { className: cx('ra-acq', p.className), 'aria-label': p.title },
      h('h2', { className: 'ra-acq__title' }, p.title || 'Add project files'), h('div', { className: 'ra-acq__rules' }, p.rules || 'PDF or PNG · Up to 10 MB per file'),
      target, p.children, st === 'partial' ? h(X.FormMessage, { tone: 'danger', title: 'Some files were not added', message: msg }) : st === 'complete' ? h(X.FormMessage, { tone: 'success', title: 'Files added', message: msg }) : h('div', { className: 'ra-acq__status', role: 'status' }, msg),
      st === 'review' ? h('div', { className: 'ra-row' }, h(Button, null, 'Add ready files'), h(Button, { variant: 'secondary' }, 'Cancel')) : st === 'working' ? h(Button, { variant: 'secondary' }, 'Cancel adding') : null);
  }
  X.FilesAcquisition = FilesAcquisition;

  /* ContentMediaDetail: article-style detail whose media state (Ready, Loading, Unavailable, Error) is independent of the text. */
  function ContentMediaDetail(p) {
    var ms = p.mediaState || 'ready';
    var media = ms === 'ready' ? h('img', { className: 'ra-cmd__media', src: p.image, alt: p.imageAlt || '' })
      : h('div', { className: 'ra-cmd__media ra-cmd__media--state', role: 'status' }, ms === 'loading' ? h(X.LoadingSpinner, { label: 'Loading media' }) : h('span', null, h(Glyph, { name: ms === 'error' ? 'alert' : 'circle-x', size: 20 }), ms === 'error' ? ' Media could not load. The article is still available.' : ' Media unavailable.'), ms === 'error' ? h(Button, { variant: 'secondary', size: 'sm' }, 'Retry media') : null);
    return h('article', { className: cx('ra-cmd', p.className) },
      h('h2', { className: 'ra-cmd__title' }, p.title || 'Inside the workshop'), p.summary ? h('p', { className: 'ra-cmd__summary' }, p.summary) : null,
      h('figure', { className: 'ra-cmd__figure' }, media, p.caption ? h('figcaption', null, p.caption) : null),
      (p.body || []).map(function (t, i) { return h('p', { key: i, className: 'ra-cmd__body' }, t); }),
      p.action ? h('div', null, h(Button, { variant: 'secondary' }, p.action)) : null);
  }
  X.ContentMediaDetail = ContentMediaDetail;

  /* LibraryCollection / LibraryInspector: Library Workspace task blocks. */
  function LibraryCollection(p) { return h(CollectionBrowser, Object.assign({ title: 'Scenes', noun: 'scenes', filters: ['Ready', 'Draft', 'Archived'] }, p, { className: cx('ra-library', p.layout === 'wide' && 'is-wide', p.className) })); }
  function LibraryInspector(p) {
    var st = p.state || 'selected';
    if (st !== 'selected') return h(CollectionDetail, { state: st === 'unavailable' ? 'unavailable' : 'none' });
    return h('section', { className: 'ra-detail ra-inspector', 'aria-label': p.title || 'Midnight Relay' },
      h('h2', { className: 'ra-detail__title ra-inspector__title' }, p.title || 'Midnight Relay'), h('div', { className: 'ra-inspector__meta' }, p.meta || '03:42 · 2 assigned devices'),
      h('p', { className: 'ra-detail__text' }, p.body || 'Review the audio and device assignments before performing.'),
      h(Button, { variant: 'secondary', leadingIcon: 'play', className: 'ra-inspector__action' }, p.action || 'Preview audio'),
      h('p', { className: 'ra-inspector__note' }, 'Preview audio without starting a live performance.'));
  }
  X.LibraryCollection = LibraryCollection; X.LibraryInspector = LibraryInspector;

  /* AudioImport: user-confirmed audio import with separate validation and durable-save outcomes (13 states × Compact / Wide). */
  var AI = {
    empty: ['information', null, 'Choose audio files to review before importing.', ['Choose audio files']],
    validating: ['information', 'Checking files', 'Checking 3 files. You can keep working.', ['Cancel check']],
    ready: ['success', 'Ready to import', '3 files are ready. Importing does not start playback.', ['Import 3 files', 'Choose different files']],
    partial: ['warning', '2 of 3 files are ready', 'notes.mp4 is not a supported audio type.', ['Import 2 files', 'Choose different files']],
    rejected: ['danger', 'No files can be imported', 'None of the chosen files are supported audio.', ['Choose other files']],
    unavailable: ['danger', 'Import is unavailable', 'The library cannot accept files right now.', ['Try again later']],
    duplicate: ['warning', 'Already in your library', 'night-drive.wav matches an existing track.', ['Import as copy', 'Skip duplicate']],
    importing: ['information', 'Importing 3 files', 'Keep this view open until import finishes.', ['Cancel import']],
    failed: ['danger', 'Import failed', 'Nothing was saved. Your selection is kept.', ['Retry import', 'Choose different files']],
    'partial-import': ['warning', '2 files imported, 1 failed', 'stage-left.wav was not saved.', ['Retry failed file', 'Done']],
    complete: ['success', '3 files imported', 'They are in your library. Importing did not start playback.', ['Open library', 'Import more']],
    cancelling: ['information', 'Cancelling import', 'Files already saved stay in your library.', []],
    cancelled: ['information', 'Import cancelled', '1 file was saved before cancelling.', ['Choose audio files']]
  };
  function AudioImport(p) {
    var st = p.state || 'empty', c = AI[st];
    var busy = st === 'validating' || st === 'importing' || st === 'cancelling';
    return h('section', { className: cx('ra-import', p.layout === 'wide' && 'is-wide', p.className), 'aria-label': 'Import audio' },
      h('div', { className: 'ra-import__eyebrow' }, 'Import audio'), h('h2', { className: 'ra-import__title' }, 'Bring in your audio'),
      h('p', { className: 'ra-import__lead' }, 'Choose audio files to review before importing.'),
      c[1] ? h(X.FormMessage, { tone: c[0] === 'warning' ? 'information' : c[0], title: c[1], message: c[2] }) : null,
      busy ? h(X.ProgressBar, { label: c[1], state: st === 'importing' ? 'determinate' : 'indeterminate', value: st === 'importing' ? 40 : undefined }) : null,
      p.files ? h('div', { className: 'ra-import__files' }, p.files.map(function (f, i) { return h(X.ReadinessRow, Object.assign({ key: i }, f)); })) : null,
      h('div', { className: 'ra-import__actions' }, c[3].map(function (a, i) { return h(Button, { key: i, variant: i ? 'secondary' : (st === 'failed' || st === 'rejected' ? 'secondary' : 'primary') }, a); })),
      h('p', { className: 'ra-import__note' }, 'Importing does not start playback.'));
  }
  X.AudioImport = AudioImport;

  /* WebAcquisition: web drop target around the same import flow — Default, Drag active, Focused, Rejected. */
  function WebAcquisition(p) {
    var st = p.state || 'default', d = React.useState(false);
    var active = st === 'drag' || d[0];
    return h('div', { className: cx('ra-webacq', active && 'is-drag', st === 'focused' && 'is-focused', st === 'rejected' && 'is-rejected', p.className), onDragOver: function (e) { e.preventDefault(); d[1](true); }, onDragLeave: function () { d[1](false); }, onDrop: function (e) { e.preventDefault(); d[1](false); } },
      h('div', { className: 'ra-webacq__label' }, p.label || 'Drop audio files here, or choose files'),
      p.children || h(AudioImport, { state: 'empty' }),
      h('div', { className: cx('ra-webacq__hint', st === 'rejected' && 'is-danger'), role: st === 'rejected' ? 'alert' : undefined }, st === 'rejected' ? 'That file type is not supported. Choose WAV, AIFF, MP3 or M4A.' : active ? 'Release to review these files. Nothing is imported yet.' : 'Choose or drop audio files. Review them before importing.'));
  }
  X.WebAcquisition = WebAcquisition;

  })();

  window.RA = Object.assign(window.RA || {}, X, { iconNames: Object.keys(ICONS) });
})();
