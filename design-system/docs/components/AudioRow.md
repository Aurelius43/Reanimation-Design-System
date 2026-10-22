# AudioRow

Responsive audio preview row — Compact (320+) or Wide (600+) — across Idle, Playing, Paused, Loading, Ended, Unavailable, Error.

`RA.AudioRow` · 11f — Performance

## Use

```jsx
<RA.AudioRow />
```


## Props (AudioRowProps)

| prop | type | note |
| --- | --- | --- |
| `layout` | `"compact" \| "wide"` |  |
| `state` | `"idle" \| "playing" \| "paused" \| "loading" \| "ended" \| "unavailable" \| "error"` |  |
| `title` | `string` |  |
| `meta` | `string` |  |
| `duration` | `number` |  |
| `position` | `number` |  |

## Guidance

Responsive audio preview row — Compact (320+) or Wide (600+) — across Idle, Playing, Paused, Loading, Ended, Unavailable, Error.

`layout`, `state`, `title`, `meta`, `duration`, `position`. Composes MediaTransport and a read-only MediaPosition. Opening details never starts output; selection, preview and live output stay independent. No fabricated waveforms.
