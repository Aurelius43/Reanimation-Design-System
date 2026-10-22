The stage command surface: Offline, Ready, Starting, Live, Fault — with a held Stop performance and a guarded emergency stop.

## Props
`state`, `scene`, `time`, `onPrimary`, `onEmergencyStop`.

## Contract
- One primary action per state: CONNECT DEVICE → TRIGGER SCENE → STARTING… (locked) → STOP PERFORMANCE → ACKNOWLEDGE FAULT.
- **Stop performance is a 0.75-second hold**, like every stop in the system (Stop scene, End show, emergency stop): the fill shows the hold, lifting early cancels, and `onPrimary` fires only when the hold completes. The other primary actions are single taps.
- Emergency stop is always separate, bordered `status-danger`, and requires a 0.75-second hold; the fill shows the hold and lifting early cancels. It is disabled only while nothing is armed.
- Readouts name device, audio and transport facts in words. Elapsed and length use Geist Mono 22/26.
- Live tints the surface toward `action-primary`, adds the glow and a Live connection status; Starting uses `status-information`; Fault uses `status-danger` and removes brand expression.
- KILL behavior: stopping is immediate (`motion-instant`); never wait on animation or haptics.
