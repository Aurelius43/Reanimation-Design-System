A banner for transport problems, shown under the navigation bar while the rest of the app keeps working. It never covers the live bar, and it never blocks GO or Stop.

## Props
`state` (`offline` · `reconnecting` · `unstable` · `restored`), `title`, `detail`, `actionLabel`, `action` (false hides the button), `onAction`.

## States
| State | Example | Behavior |
| --- | --- | --- |
| Offline | "Maestro MR-8 is offline — Output stopped on this device. Check its power and cable." | Red edge, stays until fixed or dismissed; Retry |
| Reconnecting | "Reconnecting to Maestro MR-8… — Output continues on the other devices." | Spinner, no action |
| Unstable | "Maestro MR-8 is unstable — Packets are dropping; output continues. Check the stage-left cable." | Orange edge; Details |
| Restored | "Maestro MR-8 is back — Connected and ready." | Hides itself after a few seconds |

Copy names the subject, the state, the impact and the next action, following the system's state-copy rule.

## Accessibility
Offline is announced once (`role="alert"`); the others are polite status updates. Never rely on the edge color: every state has its own icon and words.

## SwiftUI
Pin it with `.safeAreaInset(edge: .top)` on the content (under the navigation bar). Announce changes with `AccessibilityNotification.Announcement("Maestro MR-8 is offline").post()`. Animate in with `RAMotion.wake`, and skip the animation when Reduce Motion is on.
