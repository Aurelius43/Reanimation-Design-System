# PreviewSurface

Isolated audio preview surface: eyebrow, AudioRow, MediaVolume and the scope note.

`RA.PreviewSurface` · 11f — Performance

## Use

```jsx
<RA.PreviewSurface />
```


## Props (PreviewSurfaceProps)

| prop | type | note |
| --- | --- | --- |
| `state` | `"idle" \| "playing" \| "paused" \| "loading" \| "ended" \| "unavailable" \| "error"` |  |
| `title` | `string` |  |
| `meta` | `string` |  |
| `layout` | `"compact" \| "wide"` |  |

## Guidance

Isolated audio preview surface: eyebrow, AudioRow, MediaVolume and the scope note.

`state`, `title`, `meta`, `layout`. States plainly that preview sends no stage commands and keeps Stop preview available while audition continues.
