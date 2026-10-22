# Signature layer

The Mutation Layer and its signature components turn operational state into a recognizable Bone Maestro voice — without letting expression outrank meaning.

## State is semantic before it is expressive
- Color, icon, label, border or pattern, rail geometry and behavior must agree, and the state must still read with color, motion and sound removed. Never ship a status as a color swap; verify in grayscale and high contrast.
- **Operational state** answers "what is happening?"; **mutation level** answers "how expressive may this context be?". M3 Live does not require M3 decorative expression.

## Mutation levels (M0–M4)
| Level | Meaning | Rail |
| --- | --- | --- |
| M0 — Dormant / Clean | Transport fact only (e.g. Connected): cyan information semantics, static cue | M0 |
| M1 — Ready / Signal | Validated capability: stable node, explicit READY | M1 |
| M2 — Armed / Active | Committed intent: strong junction, one-shot feedback | M2 |
| M3 — Live / Performance | Consequential output: energized route, localized glow, optional slow pulse | M3 |
| M4 — Critical | Geometry and precedence override inside Failure and Emergency only — never a user-facing state | M4 |

## Operational states
Eighteen named states across five families: connection (Idle · Searching · Discovering · Pairing · Connecting · Connected · Offline), readiness (Ready · Armed · Queued), performance (Live, Paused, Playing, Stopping), degradation (Unstable · Warning · Failure) and Emergency.
- **Connected ≠ Ready ≠ Armed ≠ Live.** CONNECTED confirms a transport link; READY confirms validation and command acceptance; ARMED is committed to the next trigger; LIVE is consequential output now.
- Warning preserves operation; Failure blocks the affected path and **replaces brand expression** with danger structure.
- Emergency preempts every family, locks to M4, uses danger semantics, suppresses nonessential glow, announces once and persists until acknowledged.
- Present the most consequential truth: `presented = override ?? condition ?? base`. Keep base state, layered condition and override separate in data rather than flattening them into one enum.

## Signature components
- **Mutation Rail** — the edge rail that signals a surface is active, live or selected, in five intensities (M0–M4).
- **Mutation Level indicator** — shows how expressive the current context may be.
- **Bone Sync** — makes energy legible as segments, joints, gaps and amplitude: expressive under pressure, exact at rest. It can be scrubbed or focused but never hides standard transport, volume or direct-action fallbacks.
- **Specimen Labels** — production equipment markings for scene, device, signal, cue and live metadata in `KEY // VALUE` syntax (Micro, Inline, Card, Panel, Editorial). They are not a global type style or a substitute for plain language.
- **Maestro Slash** — a controlled delimiter (Micro, Section, Hero, Motion), never decoration.

Spend the expressive budget on one focal surface; keep the surrounding controls standard.
