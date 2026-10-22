# MiniPlayer

Pulse Puck mini player for audio preview: Compact or Wide × Idle, Playing, Paused, Loading, Ended, Unavailable, Error.

`RA.MiniPlayer` · 11f — Performance

## Use

```jsx
<RA.MiniPlayer />
```


## Props (MiniPlayerProps)

| prop | type | note |
| --- | --- | --- |
| `layout` | `"compact" \| "wide"` |  |
| `state` | `"idle" \| "playing" \| "paused" \| "loading" \| "ended" \| "unavailable" \| "error"` |  |
| `title` | `string` |  |
| `position` | `string` |  |
| `duration` | `string` |  |

## Guidance

Pulse Puck mini player for audio preview: Compact or Wide × Idle, Playing, Paused, Loading, Ended, Unavailable, Error.

`layout`, `state`, `title`, `position`, `duration`. 72px puck with a progress ring (energized and glowing while playing, spinning while loading, `status-danger` on error), title, state line and Geist Mono time, plus expand. One shared engine across mini, expanded details and library rows; selection never starts playback; play requests enter Loading and wait for engine confirmation.
