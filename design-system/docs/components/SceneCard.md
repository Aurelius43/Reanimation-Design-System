# SceneCard

Scene tile in five variants — Compact, Standard, Featured, Live, Stacked — and six states: Default, Hover, Selected, Playing Live, Disabled, Unavailable.

`RA.SceneCard` · 11f — Performance

## Use

```jsx
<RA.SceneCard title="…" />
```


## Props (SceneCardProps)

| prop | type | note |
| --- | --- | --- |
| `variant` | `"compact" \| "standard" \| "featured" \| "live" \| "stacked"` |  |
| `state` | `"default" \| "selected" \| "live" \| "disabled" \| "unavailable"` |  |
| `title` * | `string` |  |
| `status` | `string` |  |
| `image` | `string` |  |
| `description` | `string` |  |
| `duration` | `string` |  |
| `sampleRate` | `string` |  |
| `devices` | `string` |  |
| `actionLabel` | `string` |  |
| `onTrigger` | `() => void` |  |

## Guidance

Scene tile for a set list. Four variants (Compact, Standard, Featured, Stacked) and eight states: Default (Ready), Armed, Selected, Starting, Live, Fault, Disabled, Unavailable.

### Props
`variant` (`compact | standard | featured | stacked`), `state` (`default | armed | selected | starting | live | fault | disabled | unavailable`), `cue` (set-list number, shown as `SC 04`), `next` (marks the next cue), `title`, `status` (Ready label override), `image`, `description`, `duration` (seconds or text), `elapsed` (seconds, Live), `progress` (0–1, overrides elapsed ÷ duration), `sampleRate`, `devices` (number → "2 devices", or a device name), `reason` (why it is Starting, Fault or Unavailable), `actionLabel`, `onSelect` (makes the title the card's select action), `onTrigger`, `onStop`, `onAcknowledge`.

### Anatomy
12px padding (16 Featured), 14px radius, `background-surface` with a `border-default` edge. Artwork 96px square (Compact) or full width 112 / 218px. Cue line (`SC 04` in Geist Mono, optional "› Next") above the full scene name, then status and telemetry (clock, sample rate, devices) in `web-label-s`. Live adds a mono elapsed / remaining clock and a 4px progress bar. Compact is the set-list row: stack Compact cards in cue order, one per row with an 8px gap, inside a `role="list"`; it stacks the action and the More menu on the right. Featured, Standard and Stacked are tiles for grids and hero spots.

### Responsive
The card is a size container and lays itself out from its own width, so it holds up in any column. At 400px and below, Compact shrinks the artwork to 64px and moves the actions under a divider as a full-width row (primary action stretches, More stays beside it). At 260px and below, actions never overflow: the primary action shrinks to fit. At 180px and below, the artwork hides and the actions stack. Telemetry items and cue labels never break mid-item; long titles wrap.

### States
- **Ready** is neutral. **Armed** draws a toxic edge and a glowing toxic Armed tag.
- **Selected** is magenta (`mutation-selected`) with the subtle magenta glow — selection never uses toxic.
- **Starting** shows a spinner on the action and "Waiting for the device to confirm."
- **Live** adds the 4px toxic rail, 2px toxic border, toxic glow, live clock and progress. Stop is guarded: press and hold for 0.75 seconds (touch, pointer, or Space / Enter on the focused button); the fill shows the hold.
- **Fault** and **Unavailable** use `status-danger` and always say why and what to do next (`reason`). Fault offers Acknowledge.
- Hover and keyboard focus tint toward `status-information`.

### Accessibility
The card itself is not a tab stop. With `onSelect`, the title is a button that covers the card for pointer users; Trigger, Stop and More remain separate controls above it. Live progress is a `progressbar` with a spoken "mm:ss of mm:ss" value; status changes for Starting, Live and Fault announce through `role="status"`. The More button names its scene ("More for Bone Club").

### On iOS and iPadOS
Native apps use **IOSSceneRow** in a list with **IOSLiveBar** for stopping. On touch screens the web card is safe too: hover tints only apply to devices that can hover, and the hold-to-stop button keeps the hold when a finger drifts, and suppresses text selection and the long-press menu.
