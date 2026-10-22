# SkeletonLoader

Placeholder structure that mirrors final content: Row, Card or Table.

`RA.SkeletonLoader` · 11e — Feedback + Overlays

## Use

```jsx
<RA.SkeletonLoader />
```


## Props (SkeletonLoaderProps)

| prop | type | note |
| --- | --- | --- |
| `pattern` | `"row" \| "card" \| "table"` |  |
| `label` | `string` |  |

## Guidance

Placeholder structure that mirrors final content: Row, Card or Table.

`pattern`, `label`. Blocks in `surface-raised` with `radius-xs` lines and `radius-md` media; the soft shimmer is removed under reduced motion. Marked `aria-busy`.
