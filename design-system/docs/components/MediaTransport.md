# MediaTransport

Preview-only Play / Pause / Stop with explicit status copy: Idle, Playing, Paused, Loading, Ended, Unavailable, Error.

`RA.MediaTransport` · 11f — Performance

## Use

```jsx
<RA.MediaTransport />
```


## Props (MediaTransportProps)

| prop | type | note |
| --- | --- | --- |
| `state` | `"idle" \| "playing" \| "paused" \| "loading" \| "ended" \| "unavailable" \| "error"` |  |
| `status` | `string` |  |
| `onPrimary` | `() => void` |  |
| `onStop` | `() => void` |  |

## Guidance

Preview-only Play / Pause / Stop with explicit status copy: Idle, Playing, Paused, Loading, Ended, Unavailable, Error.

`state`, `status`, `onPrimary`, `onStop`. Play starts audition; Pause keeps position; Stop ends and resets. Loading suppresses duplicate Play; Retry is explicit. Completion never auto-starts a stage cue — the status line always says "No stage commands".
