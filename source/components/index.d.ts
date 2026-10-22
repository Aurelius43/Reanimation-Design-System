import * as React from "react";

export type IconName = "add" | "arrow-right" | "close" | "expand" | "folder-lock" | "radio" | "play" | "pause" | "stop" | "loading"
  | "connect-outline" | "connect-filled" | "control-outline" | "control-filled" | "library-outline" | "library-filled" | "scenes-outline" | "scenes-filled";

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Glyph name. */
  name: IconName;
  /** 16, 20 or 24. Default 20. */
  size?: 16 | 20 | 24 | number;
  /** Accessible name; omit for decorative icons. */
  label?: string;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "destructive" | "expressive";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  leadingIcon?: IconName;
  trailingIcon?: IconName;
  children: React.ReactNode;
}

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  /** Accessible name and tooltip. */
  label: string;
  variant?: "primary" | "secondary" | "ghost" | "destructive";
  size?: "sm" | "md" | "lg";
  /** Toggle state (aria-pressed). */
  selected?: boolean;
}

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  kind?: "standard" | "password" | "search" | "numeric";
  helper?: React.ReactNode;
  error?: React.ReactNode;
  success?: React.ReactNode;
  optional?: boolean;
  onClear?: () => void;
  leadingIcon?: IconName | false;
}

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
  indeterminate?: boolean;
  error?: boolean;
}

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
  error?: boolean;
}

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
  platform?: "web" | "ios";
}

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "neutral" | "toxic" | "magenta" | "purple" | "orange" | "information" | "danger";
}

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: "neutral" | "success" | "warning" | "information" | "danger";
}

export interface GlyphProps { name: string; size?: number; stroke?: number; className?: string }
export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; requirement?: string; helper?: React.ReactNode; error?: React.ReactNode; success?: React.ReactNode; platform?: "web" | "ios" | "android" };
export interface PickerFieldProps { label: string; requirement?: string; placeholder?: string; value?: string; icon?: string; helper?: React.ReactNode; error?: React.ReactNode; disabled?: boolean; readOnly?: boolean; native?: boolean; onClick?: () => void }
export interface DateTimeHostProps { kind?: "date" | "time" | "datetime"; legend?: string; dateValue?: string; timeValue?: string; error?: React.ReactNode; disabled?: boolean; readOnly?: boolean; context?: string }
export interface SliderProps { label?: string; value?: number; defaultValue?: number; min?: number; max?: number; step?: number; minLabel?: React.ReactNode; maxLabel?: React.ReactNode; helper?: string; format?: (v: number) => string; onChange?: (v: number) => void; disabled?: boolean; dir?: "ltr" | "rtl" }
export interface FormMessageProps { tone?: "information" | "danger" | "success"; title: string; message?: React.ReactNode; children?: React.ReactNode }
export interface FormSubmitActionsProps { state?: "default" | "saving" | "failed" | "saved"; submitLabel?: string; cancelLabel?: string; onSubmit?: () => void; onCancel?: () => void }
export interface FormSectionProps { title: string; description?: string; children?: React.ReactNode; feedback?: React.ReactNode; actions?: React.ReactNode }
export type SelectionRowProps = CheckboxProps & { control?: "checkbox" | "radio" | "switch"; label: React.ReactNode; description?: React.ReactNode; platform?: "web" | "ios" | "android" };
export type IOSTextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & { label: string; helper?: React.ReactNode; error?: React.ReactNode };
export type AndroidTextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & { label: string; helper?: React.ReactNode; error?: React.ReactNode; readOnlyHelper?: string };
export type AndroidCheckboxProps = CheckboxProps;
export type AndroidRadioProps = RadioProps;
export type AndroidSwitchProps = SwitchProps;
export interface CounterBadgeProps { tone?: "neutral" | "toxic" | "magenta" | "purple" | "orange" | "information" | "danger"; value?: React.ReactNode }
export interface AvatarProps { size?: "sm" | "md" | "lg"; initials?: string; src?: string; label?: string }
export interface ChipProps { kind?: "filter" | "input"; label: React.ReactNode; selected?: boolean; disabled?: boolean; onClick?: () => void; onDismiss?: () => void; leading?: React.ReactNode }
export interface ListRowProps { kind?: "browse" | "selection" | "setting"; title: React.ReactNode; secondary?: React.ReactNode; metadata?: React.ReactNode; status?: { tone: string; label: string }; icon?: string | false; selected?: boolean; checked?: boolean; defaultChecked?: boolean; onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; disabled?: boolean; onClick?: () => void }
export interface ReadinessRowProps { status?: "complete" | "checking" | "attention"; title: string; detail?: React.ReactNode; statusLabel?: string }
export interface CardProps { type?: "basic" | "interactive" | "selected" | "poster"; title: React.ReactNode; subtitle?: React.ReactNode; badge?: string; badgeStatus?: string; body?: React.ReactNode; tag?: string; metadata?: React.ReactNode; footer?: React.ReactNode; action?: string; menu?: string; icon?: string | false; image?: string; sticker?: string; kicker?: string; onClick?: () => void; disabled?: boolean }
export interface TableHeaderCellProps { label: React.ReactNode; sort?: "none" | "ascending" | "descending" | false; onSort?: () => void; align?: "start" | "end"; disabled?: boolean }
export interface TableCellProps { align?: "start" | "end"; children?: React.ReactNode }
export interface TableRowProps { selected?: boolean; onSelect?: () => void; selectable?: boolean; disabled?: boolean; label?: string; children?: React.ReactNode }
export interface DataTableProps { caption: string; summary?: string; columns: { label: string; sort?: "none" | "ascending" | "descending" | false; align?: "start" | "end" }[]; rows: { cells: React.ReactNode[]; selected?: boolean }[]; state?: "results" | "empty" | "no-results" | "loading" | "error"; presentation?: "table" | "compact"; toolbarAction?: string; bulkActions?: string[]; range?: string }
export interface FileRowProps { state?: "selected" | "checking" | "ready" | "saving" | "complete" | "rejected" | "failed" | "cancelled" | "unavailable"; filename: string; metadata?: string; details?: string; progress?: number; actions?: React.ReactNode; statusText?: string }
export interface SidebarItemProps { label: string; icon?: string; active?: boolean; count?: number; collapsed?: boolean; disabled?: boolean; href?: string; onClick?: () => void }
export interface SidebarProps { items: SidebarItemProps[]; footer?: SidebarItemProps[]; collapsed?: boolean; mode?: "normal" | "live" | "performance"; brand?: string; label?: string }
export interface TopNavigationProps { brand?: string; items?: { label: string; href?: string; active?: boolean }[]; mode?: "normal" | "live" | "performance"; viewport?: "desktop" | "mobile"; initials?: string }
export interface ChoiceItemProps { kind?: "tab" | "segment"; label: React.ReactNode; selected?: boolean; disabled?: boolean; onClick?: () => void }
export interface ChoiceGroupProps { kind?: "tabs" | "segments"; items: (string | { label: string; disabled?: boolean })[]; value?: number; defaultValue?: number; onChange?: (i: number) => void; label?: string }
export type TabsProps = Partial<ChoiceGroupProps>;
export type SegmentedControlProps = Partial<ChoiceGroupProps>;
export interface BreadcrumbsProps { items: { label: string; href?: string }[]; viewport?: "desktop" | "mobile" }
export interface PaginationProps { total?: number; page?: number; defaultPage?: number; onChange?: (p: number) => void; viewport?: "desktop" | "mobile" }
export interface DestinationItemProps { destination?: "connect" | "control" | "library" | "scenes" | string; label?: string; presentation?: "tab" | "row" | "rail"; selected?: boolean; href?: string; onClick?: () => void }
export interface NavigationShellProps { presentation?: "bottom" | "sidebar" | "rail" | "top"; destinations?: (string | DestinationItemProps)[]; selected?: string; brand?: string; label?: string }
export interface PrimaryNavigationProps { placement?: "iphone" | "ipad" | "web-sidebar" | "web-top"; selected?: "connect" | "control" | "library" | "scenes" }
export interface AdaptiveDestinationProps { destination?: string; label?: string; selected?: boolean; enlarged?: boolean; dir?: "ltr" | "rtl"; href?: string }
export interface AdaptiveMenuProps { selected?: string; dir?: "ltr" | "rtl"; enlarged?: boolean; labels?: Record<string, string>; label?: string }
export interface AndroidNavigationProps { placement?: "bar" | "rail"; selected?: string; destinations?: string[] }
export interface IOSNavigationBarProps { title: string; large?: boolean; back?: string; windowControls?: boolean; sidebarToggle?: boolean; sizeClass?: "compact" | "regular" }
export interface IOSBackButtonProps { label: string; compact?: boolean; onClick?: () => void }
export interface IOSTabBarProps { tabs?: { label: string; icon: string }[]; selected?: number; minimized?: boolean; sizeClass?: "compact" | "regular" }
export interface IOSToolbarProps { editing?: boolean; sizeClass?: "compact" | "regular" }
export interface IOSSegmentedControlProps { items?: string[]; value?: number; defaultValue?: number; onChange?: (i: number) => void; label?: string; sizeClass?: "compact" | "regular" }
export interface IOSListItemProps { title: string; icon?: string; accessory?: "disclosure" | "value" | "none"; value?: string; sizeClass?: "compact" | "regular" }
export interface IOSSheetProps { title: string; cancel?: string; confirm?: string; heading?: string; detent?: "medium" | "large"; children?: React.ReactNode; sizeClass?: "compact" | "regular" }
export interface AlertProps { tone?: "information" | "success" | "warning" | "danger" | "live"; title: React.ReactNode; description?: React.ReactNode; action?: string; onAction?: () => void; onDismiss?: () => void; dismissLabel?: string }
export interface ToastProps { tone?: "information" | "success" | "warning" | "danger" | "live"; title: React.ReactNode; description?: React.ReactNode; onDismiss?: () => void; dismissLabel?: string }
export interface InlineStatusProps { tone?: "information" | "success" | "warning" | "danger" | "live"; label: string; detail?: React.ReactNode }
export interface SnackbarProps { mode?: "message" | "action" | "loading"; tone?: "success" | "information"; message: React.ReactNode; action?: string; onAction?: () => void; progress?: string }
export interface ProgressBarProps { label?: string; value?: number; state?: "determinate" | "complete" | "indeterminate" | "paused"; size?: "large" | "small" }
export interface LoadingSpinnerProps { size?: "small" | "medium" | "large"; label?: string }
export interface SkeletonLoaderProps { pattern?: "row" | "card" | "table"; label?: string }
export interface SpotIllustrationProps { variant?: "no-data" | "no-results" | "offline" | "completed" }
export interface EmptyStateProps { spot?: "no-data" | "no-results" | "offline" | "completed" | null; image?: string; loading?: boolean; title: React.ReactNode; body?: React.ReactNode; action?: string; actionIcon?: string; onAction?: () => void; secondaryAction?: string; onSecondary?: () => void }
export interface ConnectionStatusProps { state?: "live" | "connected"; pulse?: boolean; label?: string }
export interface DialogProps { title: string; description?: React.ReactNode; children?: React.ReactNode; size?: "compact" | "large"; image?: string; tone?: "default" | "destructive"; confirmLabel?: string; cancelLabel?: string; onConfirm?: () => void; onCancel?: () => void; onClose?: (() => void) | false }
export interface TooltipProps { label: string; shortcut?: string; id?: string; children?: React.ReactNode }
export interface PopoverProps { title: string; description?: React.ReactNode; children?: React.ReactNode; action?: string; onAction?: () => void; onClose?: () => void }
export interface MenuItemProps { label: React.ReactNode; icon?: string; shortcut?: string; checkable?: boolean; checked?: boolean; submenu?: boolean; tone?: "normal" | "destructive"; disabled?: boolean; onClick?: () => void }
export interface MenuSurfaceProps { items?: (MenuItemProps | "-" | { group: string })[]; label?: string; children?: React.ReactNode }
export type DropdownMenuProps = Partial<MenuSurfaceProps>;
export type ContextMenuProps = Partial<MenuSurfaceProps>;
export interface BottomSheetProps { title: string; description?: React.ReactNode; children?: React.ReactNode; actions?: React.ReactNode; detent?: "medium" | "large"; image?: string }
export interface SheetChoiceProps { label: string; icon?: string; selected?: boolean; onClick?: () => void }
export interface SceneCardProps { variant?: "compact" | "standard" | "featured" | "stacked"; state?: "default" | "armed" | "selected" | "starting" | "live" | "fault" | "disabled" | "unavailable"; cue?: number | string; next?: boolean; title: string; status?: string; image?: string; description?: string; duration?: number | string; elapsed?: number; progress?: number; sampleRate?: string; devices?: number | string; reason?: string; actionLabel?: string; onSelect?: () => void; onTrigger?: () => void; onStop?: () => void; onAcknowledge?: () => void }
export interface ShowCardProps { variant?: "row" | "tile" | "featured"; state?: "draft" | "default" | "next" | "selected" | "live" | "attention" | "done"; code?: number | string; order?: string; title: string; images?: string[]; scenes?: Array<"ready" | "armed" | "played" | "live" | "fault" | "unavailable">; current?: number; duration?: number | string; elapsed?: number; nowPlaying?: string; upNext?: string; reason?: string; slot?: string; blocked?: boolean; onSelect?: () => void; onOpen?: () => void; onStart?: () => void; onEnd?: () => void }
export interface IOSDeviceProps { device?: "phone" | "pad"; orientation?: "portrait" | "landscape"; textSize?: "default" | "xl" | "ax"; label?: string; children?: React.ReactNode }
export interface IOSListProps { header?: string; footer?: string; children?: React.ReactNode }
export interface IOSSceneRowProps { cue?: number | string; next?: boolean; title: string; state?: "default" | "armed" | "selected" | "starting" | "live" | "fault" | "unavailable" | "played"; image?: string; duration?: number; elapsed?: number; progress?: number; sampleRate?: string; devices?: number | string; reason?: string; sizeClass?: "compact" | "regular"; onSelect?: () => void; onTrigger?: () => void; onAcknowledge?: () => void }
export interface IOSShowRowProps { code?: number | string; order?: string; title: string; state?: "default" | "next" | "selected" | "live" | "attention" | "done" | "draft"; images?: string[]; scenes?: Array<"ready" | "armed" | "played" | "live" | "fault" | "unavailable">; current?: number; duration?: number; elapsed?: number; nowPlaying?: string; reason?: string; sizeClass?: "compact" | "regular"; onOpen?: () => void; onStart?: () => void }
export interface IOSLiveActivityProps { variant?: "lockscreen" | "compact" | "minimal" | "expanded"; cue?: number | string; scene: string; show?: string; image?: string; elapsed?: number; duration?: number; next?: string }
export interface IOSMenuBarProps { open?: string; disabled?: string[] }
export interface IOSAlertAction { label: string; role?: "cancel" | "destructive" | "default"; preferred?: boolean; onClick?: () => void }
export interface IOSAlertProps { variant?: "alert" | "confirmation"; title?: string; message?: string; actions?: IOSAlertAction[]; stacked?: boolean; sizeClass?: "compact" | "regular"; overlay?: boolean; id?: string }
export interface IOSPermissionPrimerProps { kind?: "bluetooth" | "network" | "notifications"; state?: "ask" | "denied"; title?: string; points?: string[]; onContinue?: () => void; onLater?: () => void }
export interface IOSSignalProps { value?: number }
export interface IOSDeviceRowProps { name?: string; state?: "found" | "connecting" | "connected" | "ready" | "armed" | "live" | "unstable" | "offline" | "failed"; signal?: number; detail?: string; model?: string; actionLabel?: string; onAction?: () => void; sizeClass?: "compact" | "regular" }
export interface IOSPairingSheetProps { state?: "searching" | "found" | "pairing" | "paired" | "failed"; devices?: { name: string; detail?: string; signal?: number }[]; error?: string; onPrimary?: () => void; sizeClass?: "compact" | "regular" }
export interface IOSConnectionBannerProps { state?: "offline" | "reconnecting" | "unstable" | "restored"; title?: string; detail?: string; actionLabel?: string; action?: boolean; onAction?: () => void }
export interface IOSLiveBarProps { sizeClass?: "compact" | "regular"; expanded?: boolean; state?: "live" | "starting"; cue?: number | string; scene: string; show: string; image?: string; elapsed?: number; duration?: number; next?: string; onGo?: () => void; onStop?: () => void; onEndShow?: () => void; onExpand?: () => void; onCollapse?: () => void }
export interface PerformanceControlProps { state?: "offline" | "ready" | "starting" | "live" | "fault"; scene?: string; time?: string; onPrimary?: () => void; onEmergencyStop?: () => void }
export interface MediaTransportProps { state?: "idle" | "playing" | "paused" | "loading" | "ended" | "unavailable" | "error"; status?: string; onPrimary?: () => void; onStop?: () => void }
export interface MediaPositionProps { state?: "default" | "readonly" | "unavailable"; value?: number; defaultValue?: number; duration?: number; onSeek?: (s: number) => void; label?: string }
export interface MediaVolumeProps { label?: string; defaultValue?: number; muted?: boolean; state?: "default" | "unavailable" }
export interface AudioRowProps { layout?: "compact" | "wide"; state?: MediaTransportProps["state"]; title?: string; meta?: string; duration?: number; position?: number }
export interface AudioTrackRowProps { state?: "idle" | "playing" | "paused" | "loading" | "unavailable" | "error"; title?: string; meta?: string; position?: string; duration?: string }
export interface PreviewSurfaceProps { state?: MediaTransportProps["state"]; title?: string; meta?: string; layout?: "compact" | "wide" }
export interface NextCueProps { state?: "ready" | "pending" | "blocked"; layout?: "compact" | "wide"; title?: string; meta?: string; onTrigger?: () => void; onRemove?: () => void }
export interface MiniPlayerProps { layout?: "compact" | "wide"; state?: MediaTransportProps["state"]; title?: string; position?: string; duration?: string }
export interface MutationRailProps { level?: 0 | 1 | 2 | 3 | 4; width?: number; label?: string }
export interface MutationRailRowProps { level?: 0 | 1 | 2 | 3 | 4; status?: string }
export interface MutationLevelProps { level?: 0 | 1 | 2 | 3 | 4; label?: string }
export interface MaestroSlashProps { variant?: "micro" | "section" | "hero" | "motion"; width?: number }
export interface BoneSyncProps { type?: "micro" | "status" | "audio" | "performance" | "hero"; values?: number[]; width?: number; label?: string }
export interface SpecimenLabelProps { variant?: "micro" | "inline" | "card" | "panel" | "editorial"; index?: string; k?: string; value?: string; format?: string; classification?: string }
export type AndroidButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { appearance?: "filled" | "outlined" | "text"; icon?: string };
export interface AndroidFilterChipProps { label: string; selected?: boolean; disabled?: boolean; onClick?: () => void }
export interface AndroidSearchProps { mode?: "bar" | "expanded"; placeholder?: string; query?: string; children?: React.ReactNode }
export interface AndroidListItemProps { title: string; overline?: string; supporting?: string; icon?: string; trailing?: React.ReactNode; selected?: boolean; disabled?: boolean }
export interface AndroidDialogProps { intent?: "confirmation" | "destructive"; title: string; description: React.ReactNode; confirmLabel?: string; cancelLabel?: string }
export interface AndroidAppBarProps { title?: string; scrolled?: boolean }
export interface AndroidBottomSheetProps { title?: string; modal?: boolean; children?: React.ReactNode }
export interface CollectionBrowserProps { title?: string; noun?: string; records?: ListRowProps[]; filters?: string[]; defaultFilter?: number; state?: "results" | "empty" | "no-results" | "loading" | "error"; summary?: string; createLabel?: string; searchLabel?: string }
export interface CollectionDetailProps { state?: "selected" | "none" | "unavailable"; title?: string; meta?: string; summary?: string; body?: string; action?: string; onAction?: () => void; children?: React.ReactNode }
export interface WorkspaceListDetailProps { layout?: "expanded" | "compact-list" | "compact-detail"; list?: React.ReactNode; detail?: React.ReactNode; backLabel?: string }
export interface FilesAcquisitionProps { presentation?: "native" | "web"; state?: "empty" | "review" | "working" | "partial" | "complete" | "cancelled"; title?: string; rules?: string; accept?: string; chooseLabel?: string; children?: React.ReactNode }
export interface ContentMediaDetailProps { title?: string; summary?: string; image?: string; imageAlt?: string; caption?: string; mediaState?: "ready" | "loading" | "unavailable" | "error"; body?: string[]; action?: string }
export type LibraryCollectionProps = CollectionBrowserProps & { layout?: "compact" | "wide" };
export interface LibraryInspectorProps { state?: "selected" | "none" | "unavailable"; title?: string; meta?: string; body?: string; action?: string }
export interface AudioImportProps { state?: "empty" | "validating" | "ready" | "partial" | "rejected" | "unavailable" | "duplicate" | "importing" | "failed" | "partial-import" | "complete" | "cancelling" | "cancelled"; layout?: "compact" | "wide"; files?: ReadinessRowProps[] }
export interface WebAcquisitionProps { state?: "default" | "drag" | "focused" | "rejected"; label?: string; children?: React.ReactNode }

export declare const Button: React.FC<ButtonProps>;
export declare const IconButton: React.FC<IconButtonProps>;
export declare const TextInput: React.FC<TextInputProps>;
export declare const Checkbox: React.FC<CheckboxProps>;
export declare const Radio: React.FC<RadioProps>;
export declare const Switch: React.FC<SwitchProps>;
export declare const Tag: React.FC<TagProps>;
export declare const StatusBadge: React.FC<StatusBadgeProps>;
export declare const Icon: React.FC<IconProps>;
export declare const iconNames: IconName[];
export declare const Glyph: React.FC<GlyphProps>;
export declare const TextArea: React.FC<TextAreaProps>;
export declare const PickerField: React.FC<PickerFieldProps>;
export declare const DateTimeHost: React.FC<DateTimeHostProps>;
export declare const Slider: React.FC<SliderProps>;
export declare const FormMessage: React.FC<FormMessageProps>;
export declare const FormSubmitActions: React.FC<FormSubmitActionsProps>;
export declare const FormSection: React.FC<FormSectionProps>;
export declare const SelectionRow: React.FC<SelectionRowProps>;
export declare const IOSTextField: React.FC<IOSTextFieldProps>;
export declare const AndroidTextField: React.FC<AndroidTextFieldProps>;
export declare const AndroidCheckbox: React.FC<AndroidCheckboxProps>;
export declare const AndroidRadio: React.FC<AndroidRadioProps>;
export declare const AndroidSwitch: React.FC<AndroidSwitchProps>;
export declare const CounterBadge: React.FC<CounterBadgeProps>;
export declare const Avatar: React.FC<AvatarProps>;
export declare const Chip: React.FC<ChipProps>;
export declare const ListRow: React.FC<ListRowProps>;
export declare const ReadinessRow: React.FC<ReadinessRowProps>;
export declare const Card: React.FC<CardProps>;
export declare const TableHeaderCell: React.FC<TableHeaderCellProps>;
export declare const TableCell: React.FC<TableCellProps>;
export declare const TableRow: React.FC<TableRowProps>;
export declare const DataTable: React.FC<DataTableProps>;
export declare const FileRow: React.FC<FileRowProps>;
export declare const SidebarItem: React.FC<SidebarItemProps>;
export declare const Sidebar: React.FC<SidebarProps>;
export declare const TopNavigation: React.FC<TopNavigationProps>;
export declare const ChoiceItem: React.FC<ChoiceItemProps>;
export declare const ChoiceGroup: React.FC<ChoiceGroupProps>;
export declare const Tabs: React.FC<TabsProps>;
export declare const SegmentedControl: React.FC<SegmentedControlProps>;
export declare const Breadcrumbs: React.FC<BreadcrumbsProps>;
export declare const Pagination: React.FC<PaginationProps>;
export declare const DestinationItem: React.FC<DestinationItemProps>;
export declare const NavigationShell: React.FC<NavigationShellProps>;
export declare const PrimaryNavigation: React.FC<PrimaryNavigationProps>;
export declare const AdaptiveDestination: React.FC<AdaptiveDestinationProps>;
export declare const AdaptiveMenu: React.FC<AdaptiveMenuProps>;
export declare const AndroidNavigation: React.FC<AndroidNavigationProps>;
export declare const IOSNavigationBar: React.FC<IOSNavigationBarProps>;
export declare const IOSBackButton: React.FC<IOSBackButtonProps>;
export declare const IOSTabBar: React.FC<IOSTabBarProps>;
export declare const IOSToolbar: React.FC<IOSToolbarProps>;
export declare const IOSSegmentedControl: React.FC<IOSSegmentedControlProps>;
export declare const IOSListItem: React.FC<IOSListItemProps>;
export declare const IOSSheet: React.FC<IOSSheetProps>;
export declare const Alert: React.FC<AlertProps>;
export declare const Toast: React.FC<ToastProps>;
export declare const InlineStatus: React.FC<InlineStatusProps>;
export declare const Snackbar: React.FC<SnackbarProps>;
export declare const ProgressBar: React.FC<ProgressBarProps>;
export declare const LoadingSpinner: React.FC<LoadingSpinnerProps>;
export declare const SkeletonLoader: React.FC<SkeletonLoaderProps>;
export declare const SpotIllustration: React.FC<SpotIllustrationProps>;
export declare const EmptyState: React.FC<EmptyStateProps>;
export declare const ConnectionStatus: React.FC<ConnectionStatusProps>;
export declare const Dialog: React.FC<DialogProps>;
export declare const Tooltip: React.FC<TooltipProps>;
export declare const Popover: React.FC<PopoverProps>;
export declare const MenuItem: React.FC<MenuItemProps>;
export declare const MenuSurface: React.FC<MenuSurfaceProps>;
export declare const DropdownMenu: React.FC<DropdownMenuProps>;
export declare const ContextMenu: React.FC<ContextMenuProps>;
export declare const BottomSheet: React.FC<BottomSheetProps>;
export declare const SheetChoice: React.FC<SheetChoiceProps>;
export declare const SceneCard: React.FC<SceneCardProps>;
export declare const ShowCard: React.FC<ShowCardProps>;
export declare const IOSDevice: React.FC<IOSDeviceProps>;
export declare const IOSList: React.FC<IOSListProps>;
export declare const IOSSceneRow: React.FC<IOSSceneRowProps>;
export declare const IOSShowRow: React.FC<IOSShowRowProps>;
export declare const IOSLiveBar: React.FC<IOSLiveBarProps>;
export declare const IOSLiveActivity: React.FC<IOSLiveActivityProps>;
export declare const IOSMenuBar: React.FC<IOSMenuBarProps>;
export declare const IOSAlert: React.FC<IOSAlertProps>;
export declare const IOSPermissionPrimer: React.FC<IOSPermissionPrimerProps>;
export declare const IOSSignal: React.FC<IOSSignalProps>;
export declare const IOSDeviceRow: React.FC<IOSDeviceRowProps>;
export declare const IOSPairingSheet: React.FC<IOSPairingSheetProps>;
export declare const IOSConnectionBanner: React.FC<IOSConnectionBannerProps>;
export declare const PerformanceControl: React.FC<PerformanceControlProps>;
export declare const MediaTransport: React.FC<MediaTransportProps>;
export declare const MediaPosition: React.FC<MediaPositionProps>;
export declare const MediaVolume: React.FC<MediaVolumeProps>;
export declare const AudioRow: React.FC<AudioRowProps>;
export declare const AudioTrackRow: React.FC<AudioTrackRowProps>;
export declare const PreviewSurface: React.FC<PreviewSurfaceProps>;
export declare const NextCue: React.FC<NextCueProps>;
export declare const MiniPlayer: React.FC<MiniPlayerProps>;
export declare const MutationRail: React.FC<MutationRailProps>;
export declare const MutationRailRow: React.FC<MutationRailRowProps>;
export declare const MutationLevel: React.FC<MutationLevelProps>;
export declare const MaestroSlash: React.FC<MaestroSlashProps>;
export declare const BoneSync: React.FC<BoneSyncProps>;
export declare const SpecimenLabel: React.FC<SpecimenLabelProps>;
export declare const AndroidButton: React.FC<AndroidButtonProps>;
export declare const AndroidFilterChip: React.FC<AndroidFilterChipProps>;
export declare const AndroidSearch: React.FC<AndroidSearchProps>;
export declare const AndroidListItem: React.FC<AndroidListItemProps>;
export declare const AndroidDialog: React.FC<AndroidDialogProps>;
export declare const AndroidAppBar: React.FC<AndroidAppBarProps>;
export declare const AndroidBottomSheet: React.FC<AndroidBottomSheetProps>;
export declare const CollectionBrowser: React.FC<CollectionBrowserProps>;
export declare const CollectionDetail: React.FC<CollectionDetailProps>;
export declare const WorkspaceListDetail: React.FC<WorkspaceListDetailProps>;
export declare const FilesAcquisition: React.FC<FilesAcquisitionProps>;
export declare const ContentMediaDetail: React.FC<ContentMediaDetailProps>;
export declare const LibraryCollection: React.FC<LibraryCollectionProps>;
export declare const LibraryInspector: React.FC<LibraryInspectorProps>;
export declare const AudioImport: React.FC<AudioImportProps>;
export declare const WebAcquisition: React.FC<WebAcquisitionProps>;
