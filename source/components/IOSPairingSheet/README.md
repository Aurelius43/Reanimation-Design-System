The sheet for adding a stage device: find it, connect, validate output, done. It follows the state ladder, so a device isn't called Ready until its output is checked.

## Props
`state` (`searching` · `found` · `pairing` · `paired` · `failed`), `devices` (`[{ name, detail, signal }]`), `error` (failure copy), `onPrimary`, `sizeClass` (`regular` shows it as a form sheet on iPad).

## Steps
1. **Searching**: a spinner and what to do ("Power on the device and keep it within a few meters").
2. **Found**: nearby devices as `IOSDeviceRow` in the `found` state, each with Connect.
3. **Connecting**: three steps (Connect, Check output, Ready); the current one spins.
4. **Ready**: all steps checked, the device tile turns toxic, and Done closes the sheet.
5. **Failed**: says what failed and the next step ("Move closer, restart the device, then try again"), with Try again.

Bluetooth permission comes first: show `IOSPermissionPrimer` if it hasn't been granted.

## SwiftUI
Present with `.sheet` and `.presentationDetents([.medium, .large])` on iPhone; on iPad it's a form sheet by default. On iOS 18 and later, consider AccessorySetupKit (`ASAccessorySession`): the system picker replaces the Searching and Found steps, and this sheet starts at Connecting.
