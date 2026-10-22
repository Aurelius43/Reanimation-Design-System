# ScreenSettings

App preferences, plus where people fix permissions.

## Composition
- **Navigation:** `IOSNavigationBar` large title "Settings"; Settings tab selected (iPad: sections in the sidebar).
- **Show control:** Haptics (on by default, the in-app preference `motion.md` asks for) and Appearance. The footer states the hold rule; hold length isn't a setting.
- **Notifications:** what to be alerted about mid-show.
- **Permissions:** Bluetooth and local network status. "Off" opens the `denied` `IOSPermissionPrimer` with Open Settings.
- **About:** version, help.

## Rules
No keyboard shortcuts section for now. Don't add settings that weaken safety (no "disable hold", no "fire from Lock Screen").

## SwiftUI
`Form` with `Section(header:footer:)`, `Toggle` for switches, `LabeledContent` for value rows, `NavigationLink` for drill-ins.
