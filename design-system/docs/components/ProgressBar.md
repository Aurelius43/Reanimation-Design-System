# ProgressBar

Linear progress: Large (8px) or Small (4px) × Determinate, Complete, Indeterminate, Paused.

`RA.ProgressBar` · 11e — Feedback + Overlays

## Use

```jsx
<RA.ProgressBar />
```


## Props (ProgressBarProps)

| prop | type | note |
| --- | --- | --- |
| `label` | `string` |  |
| `value` | `number` |  |
| `state` | `"determinate" \| "complete" \| "indeterminate" \| "paused"` |  |
| `size` | `"large" \| "small"` |  |

## Guidance

Linear progress: Large (8px) or Small (4px) × Determinate, Complete, Indeterminate, Paused.

`label`, `value` (0–100), `state`, `size` (`large | small`). Track `background-interactive`, indicator `action-primary` (Paused uses `text-muted`); label row `web-label-s`. Exposes `role="progressbar"` with value text. Indeterminate becomes a static half-strength bar under reduced motion.
