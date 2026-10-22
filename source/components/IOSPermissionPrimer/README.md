A full-screen explanation shown right before iOS asks for a permission, and the recovery screen after the person said no. Bone Maestro needs Bluetooth and the local network to reach stage devices, and notifications to report a dropped device mid-show.

## Props
`kind` (`bluetooth` | `network` | `notifications`), `state` (`ask` default | `denied`), `title`, `points` (override the three reasons), `onContinue`, `onLater`.

## Flow
1. Show the primer at the moment the permission is needed (the first time someone adds a device), never at launch.
2. **Continue** triggers the system prompt. Don't name the button "Allow": the real choice happens in the iOS prompt.
3. **Not now** skips without asking. Ask again only when the person tries the feature again.
4. If the permission is denied, show the `denied` state where the feature lives, with **Open Settings**. iOS won't show its prompt a second time.

## Writing
Lead with the benefit, in the operator's terms ("Find your stage devices"), then three short, concrete reasons. Promise only what's true ("Only connects to devices you choose", "Never leaves your local network").

## Color
The mark uses the connected role (cyan): a permission enables a connection, not readiness. Denied switches the mark to the warning role. The one filled button is `action-primary`.

## SwiftUI
- Bluetooth: add `NSBluetoothAlwaysUsageDescription` to Info.plist. Creating a `CBCentralManager` shows the prompt; read `CBManager.authorization` (`.notDetermined`, `.denied`, `.allowedAlways`) to pick the state.
- Local network: add `NSLocalNetworkUsageDescription` (and `NSBonjourServices` if you browse with Bonjour). iOS shows the prompt on the first local network access; there's no API to request it directly.
- Notifications: `UNUserNotificationCenter.current().requestAuthorization(options: [.alert, .sound])`.
- Open Settings: `openURL(URL(string: UIApplication.openSettingsURLString)!)`.
- On iOS 18 and later, AccessorySetupKit's system picker can pair accessories without the broad Bluetooth prompt. Check whether your device type supports it before building the Bluetooth primer.
