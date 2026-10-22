# Motion and haptics

Motion that feels alive, never in the way. Use the shortest duration that makes a state change legible.

## Duration scale
| Token | ms | Use |
| --- | --- | --- |
| `ra-core-motion-instant` | 80 | Immediate feedback, tiny state swaps |
| `ra-core-motion-fast` | 120 | Selections, buttons, direct manipulation |
| `ra-core-motion-standard` | 180 | Default UI transitions and state changes |
| `ra-core-motion-expressive` | 240 | Emphasized feedback with visible character |
| `ra-core-motion-hero` | 360 | Rare branded or scene-level transitions |

## Signature behaviors
Choose by intent, not decoration.

| Behavior | Intent | Duration | Easing | Reduced motion |
| --- | --- | --- | --- | --- |
| **CUE** | Selection and trigger: fast directional snap | fast | spring(70, 12) | instant state swap |
| **WAKE** | Signal online, device available | standard | cubic-bezier(0.4, 0, 0.2, 1) | static status indicator |
| **LOCK** | Connection or sync confirmed: short mechanical latch | fast | spring(80, 10) | static confirmation |
| **PULSE** | Live-state breathing; never the only cue | standard, looped | ease-in-out | static status indicator |
| **MUTATE** | Normal UI into expressive active state | expressive | cubic-bezier(0.2, 1, 0.2, 1) | simple fade |
| **KILL** | Stop and emergency: immediate removal of output | instant | linear | instant state swap |
| **POSSESS** | Rare Live / Performance or campaign transformation | hero | spring(60, 18) | simple cut or fade |

Sequences: Ready → Armed is **CUE + LOCK**; Armed → Live is **MUTATE + PULSE**; Live → Stop is **KILL**. Control availability is never delayed by animation.

With reduced motion, remove pulse, sweep, deformation, shimmer, flicker and parallax; swap immediately to the final pose and keep labels, borders and contrast. Live stays energized through geometry and label, not animation.

## Haptics (iOS)
- A haptic is earned by a meaningful, nameable state boundary: a committed selection, readiness change, consequence, completion or fault. Fire once, at the boundary, and never make control response wait for it.
- Prefer selection and light impact semantics; reserve notification error for genuine failure. One haptic per state transaction — pick the highest-consequence event.
- PULSE may repeat visually; its haptic fires on entry only. No loops, heartbeats, countdown ticks or beat-matched patterns.
- No haptics for decorative entrances, hover, focus, skeleton loading, programmatic navigation, remote updates, or rejected, unchanged or already-complete actions.
- Dispatch KILL and safety work first; the haptic is best-effort in the same run loop. Respect system settings and provide an in-app Haptics preference. Haptics supplement visible status and announcements, never replace them.
