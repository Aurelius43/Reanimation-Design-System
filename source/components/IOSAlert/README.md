Native alerts and confirmation dialogs. Use an **alert** for a short, important message that needs a decision now. Use a **confirmation dialog** to confirm a destructive or consequential choice the person just started. On iPhone it's an action sheet; on iPad, a popover anchored to the button that opened it.

## Props
`variant` (`alert` default | `confirmation`), `title`, `message`, `actions` — `[{ label, role: "cancel" | "destructive" | "default", preferred, onClick }]`, `sizeClass` (`compact` iPhone · `regular` iPad), `overlay` (draws the dimmed scrim and positions the dialog; for previews and web prototypes).

## When to use which
- **Alert**: something happened or needs a decision ("Maestro MR-8 disconnected"), or the accessible confirmation of a hold-to-confirm control. Two actions sit side by side; three or more stack.
- **Confirmation dialog**: confirming a choice the person just made ("Remove Signal Bloom from Main set?"). Put the destructive action first, keep Cancel separate. On iPad it has no Cancel; tapping outside dismisses it.
- **Neither** for routine actions (no "Are you sure?" on Save), for information that can wait (use the connection banner or an inline status) or for Stop and End show by sighted users (they already hold for 0.75 s).

## Writing
Title asks the question or names what happened, with the subject ("Stop Moon Tower?", not "Are you sure?"). Message says the impact and what stays safe. Buttons are verbs that repeat the action ("Stop scene", "End show", "Remove from show"), never "Yes" / "OK" for destructive choices. One preferred action at most.

## Color
The preferred non-destructive action fills with `action-primary`. A preferred destructive action fills with `action-destructive-default` and `content-on-dark-accent`; a non-preferred one is a red label (`text-danger`). Cancel stays neutral.

## Accessibility
The alert is the confirmation path for VoiceOver and Switch Control users on hold-to-confirm controls: the live bar exposes `.accessibilityAction(named: "Stop scene")`, which presents this alert instead of a timed hold. Focus moves into the dialog and returns to the button that opened it.

## SwiftUI
```swift
.alert("Stop Moon Tower?", isPresented: $confirmStop) {
    Button("Stop scene", role: .destructive) { stopScene() }
    Button("Cancel", role: .cancel) { }
} message: {
    Text("Output stops on 2 devices. Signal Bloom stays in Standby.")
}

.confirmationDialog("Remove Signal Bloom from Main set?", isPresented: $confirmRemove, titleVisibility: .visible) {
    Button("Remove from show", role: .destructive) { remove() }
    Button("Move to Encore") { move() }
} message: {
    Text("The scene stays in your Library.")
}
```
Use the system presentations; this card documents their content and roles. SwiftUI positions the dialog (action sheet or popover) for you.
