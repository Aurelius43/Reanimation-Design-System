# LoadingSpinner

Indeterminate loading indicator: Small 16, Medium 24, Large 32, with or without a label.

`RA.LoadingSpinner` · 11e — Feedback + Overlays

## Use

```jsx
<RA.LoadingSpinner />
```


## Props (LoadingSpinnerProps)

| prop | type | note |
| --- | --- | --- |
| `size` | `"small" \| "medium" \| "large"` |  |
| `label` | `string` |  |

## Guidance

Indeterminate loading indicator: Small 16, Medium 24, Large 32, with or without a label.

`size`, `label`. `border-default` track with an `action-primary` arc. Pair it with text for anything longer than a moment; the animation stops under reduced motion and the label carries the meaning.
