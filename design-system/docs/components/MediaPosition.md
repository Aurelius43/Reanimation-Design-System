# MediaPosition

Position readout with optional seek: Default, Hover, Focused, Dragging, Read only, Unavailable.

`RA.MediaPosition` · 11f — Performance

## Use

```jsx
<RA.MediaPosition />
```


## Props (MediaPositionProps)

| prop | type | note |
| --- | --- | --- |
| `state` | `"default" \| "readonly" \| "unavailable"` |  |
| `value` | `number` |  |
| `defaultValue` | `number` |  |
| `duration` | `number` |  |
| `onSeek` | `(s: number) => void` |  |
| `label` | `string` |  |

## Guidance

Position readout with optional seek: Default, Hover, Focused, Dragging, Read only, Unavailable.

`state`, `value` / `defaultValue` (seconds), `duration`, `onSeek`, `label`. Times in Geist Mono; track `border-strong` with an `action-primary` extent. Read only has no thumb and no interaction; Unavailable shows `--:--`. Seek only when the player supports it — never seek stage choreography.
