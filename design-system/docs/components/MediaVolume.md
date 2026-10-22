# MediaVolume

Preview volume with Mute that remembers the previous value: Default, Focused, Muted, Unavailable.

`RA.MediaVolume` · 11f — Performance

## Use

```jsx
<RA.MediaVolume />
```


## Props (MediaVolumeProps)

| prop | type | note |
| --- | --- | --- |
| `label` | `string` |  |
| `defaultValue` | `number` |  |
| `muted` | `boolean` |  |
| `state` | `"default" \| "unavailable"` |  |

## Guidance

Preview volume with Mute that remembers the previous value: Default, Focused, Muted, Unavailable.

`label` (must name the scope), `defaultValue`, `muted`, `state`. Never implies stage output or device system volume. Arrow keys and tap-to-set accompany dragging.
