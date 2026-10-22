# IOSBackButton

iOS back behavior reference: Standard (chevron + previous title) or Compact (chevron only, previous title as accessible name).

`RA.IOSBackButton` · 11d — Navigation

## Use

```jsx
<RA.IOSBackButton label="…" />
```


## Props (IOSBackButtonProps)

| prop | type | note |
| --- | --- | --- |
| `label` * | `string` |  |
| `compact` | `boolean` |  |
| `onClick` | `() => void` |  |

## Guidance

iOS back behavior reference: Standard (chevron + previous title) or Compact (chevron only, previous title as accessible name).

`label`, `compact`, `onClick`. Chevron `icon-interactive`, title `text-link` at `ios-body-m`. Keep the system back gesture.
