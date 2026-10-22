# AudioTrackRow

Compatibility single-line media row (Audio Track / Audio Row): play, title + format metadata, decorative waveform, time and state badge.

`RA.AudioTrackRow` · 11f — Performance

## Use

```jsx
<RA.AudioTrackRow />
```


## Props (AudioTrackRowProps)

| prop | type | note |
| --- | --- | --- |
| `state` | `"idle" \| "playing" \| "paused" \| "loading" \| "unavailable" \| "error"` |  |
| `title` | `string` |  |
| `meta` | `string` |  |
| `position` | `string` |  |
| `duration` | `string` |  |

## Guidance

Compatibility single-line media row (Audio Track / Audio Row): play, title + format metadata, decorative waveform, time and state badge.

`state` (`idle | playing | paused | loading | unavailable | error`), `title`, `meta`, `position`, `duration`. For new browsing and preview work use AudioRow. The waveform here is a specimen, not runtime data.
