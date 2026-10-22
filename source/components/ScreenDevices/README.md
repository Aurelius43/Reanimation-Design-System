Every stage device: what's in tonight's show, what's nearby, and what needs help.

## Composition
- **Navigation:** `IOSNavigationBar` large title "Devices"; Devices tab selected.
- **Lists:** "In this show" and "Other devices", as `IOSDeviceRow`. States follow the ladder: Connected ≠ Ready ≠ Armed ≠ Live.
- **Problems:** `IOSConnectionBanner` under the title.
- **Add a device:** a full-width button that opens `IOSPairingSheet`. The first time, `IOSPermissionPrimer` (Bluetooth, then local network) comes first.
- **iPad:** list in the sidebar; the selected device's status row and facts (`IOSListItem` value rows) in the detail column.

## SwiftUI
`List` of device rows; Add a device presents `.sheet { PairingView() }`. On iOS 18 and later, consider AccessorySetupKit for discovery.
