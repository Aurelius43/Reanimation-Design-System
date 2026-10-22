# Toast

Transient confirmation on surface-raised with a 1px tone border and a filled tone glyph.

`RA.Toast` · 11e — Feedback + Overlays

## Use

```jsx
<RA.Toast title={…} />
```


## Props (ToastProps)

| prop | type | note |
| --- | --- | --- |
| `tone` | `"information" \| "success" \| "warning" \| "danger" \| "live"` |  |
| `title` * | `React.ReactNode` |  |
| `description` | `React.ReactNode` |  |
| `onDismiss` | `() => void` |  |
| `dismissLabel` | `string` |  |

## Guidance

Transient confirmation on `surface-raised` with a 1px tone border and a filled tone glyph.

`tone` (`success | information | warning | danger | live`), `title`, `description`, `onDismiss`. 520 max width, 16px padding, `radius-md`, soft 0 10 30 shadow. Keep toasts for non-blocking outcomes; failures that need action belong in an Alert or inline message. Leave them on screen long enough to read and pause on hover/focus.
