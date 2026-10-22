# Tooltip

Non-interactive description that opens on hover and keyboard focus and never receives focus.

`RA.Tooltip` · 11e — Feedback + Overlays

## Use

```jsx
<RA.Tooltip label="…">…</RA.Tooltip>
```


## Props (TooltipProps)

| prop | type | note |
| --- | --- | --- |
| `label` * | `string` |  |
| `shortcut` | `string` |  |
| `id` | `string` |  |
| `children` | `React.ReactNode` |  |

## Guidance

Non-interactive description that opens on hover and keyboard focus and never receives focus.

`label`, `shortcut` (Geist Mono, `text-muted`), children (the trigger; omit to render the bubble alone). `overlay-surface`, 1px `border-strong`, `radius-md`, `web-label-s`. Tooltips supplement accessible names — never the only label.
