One stage device in a list: name, state, signal and where it is. The row keeps the system's state ladder honest: **Connected ≠ Ready ≠ Armed ≠ Live.**

## Props
`name`, `state` (`found` · `connecting` · `connected` · `ready` · `armed` · `live` · `unstable` · `offline` · `failed`), `signal` (0–1), `detail` (location and channels, or what's happening), `model`, `actionLabel`, `onAction`, `sizeClass`.

## States
| State | Means | Look |
| --- | --- | --- |
| Nearby (`found`) | Discovered, not set up | Quiet pill, Connect button |
| Connecting | Opening the link | Cyan outline pill, spinner |
| Connected | Transport link only | Cyan outline pill |
| Ready | Validated; accepts cues | Toxic pill |
| Armed | Committed to the next cue | Toxic pill with dot |
| Live | Outputting now | Toxic pill with glow, toxic icon tile |
| Unstable | Degraded; output continues | Orange-outlined pill with dot, orange signal |
| Offline | Gone; output stopped | Quiet pill, Reconnect |
| Failed | Setup or validation failed | Red outline pill, Try again |

Toxic never means "connected". Every state has a word, not just a color.

## Signal
Four bars, `IOSSignal`. One bar or none turns the bars orange. VoiceOver reads "Signal Good" (Excellent, Good, Fair, Weak, No signal).

## SwiftUI
A `List` row with `Label`/`HStack`. Signal: `Image(systemName: "cellularbars", variableValue: signal)`. Status: a capsule `Text` styled with `RAColor`. Tap the row to open the device's detail; `found`, `offline` and `failed` rows carry a trailing button instead of a chevron.
