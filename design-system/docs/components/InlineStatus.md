# InlineStatus

Compact local status: a filled tone label (dot + word) followed by a sentence-readable detail.

`RA.InlineStatus` · 11e — Feedback + Overlays

## Use

```jsx
<RA.InlineStatus label="…" />
```


## Props (InlineStatusProps)

| prop | type | note |
| --- | --- | --- |
| `tone` | `"information" \| "success" \| "warning" \| "danger" \| "live"` |  |
| `label` * | `string` |  |
| `detail` | `React.ReactNode` |  |

## Guidance

Compact local status: a filled tone label (dot + word) followed by a sentence-readable detail.

`tone`, `label`, `detail`. Label pill uses the tone fill with `text-inverse` at `web-label-s`; detail `web-body-s`. Stay local, explicit about impact and next action.
