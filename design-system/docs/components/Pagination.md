# Pagination

Page numbers on desktop, a "Page n of m" summary on mobile; Previous and Next stay as targets.

`RA.Pagination` · 11d — Navigation

## Use

```jsx
<RA.Pagination />
```


## Props (PaginationProps)

| prop | type | note |
| --- | --- | --- |
| `total` | `number` |  |
| `page` | `number` |  |
| `defaultPage` | `number` |  |
| `onChange` | `(p: number) => void` |  |
| `viewport` | `"desktop" \| "mobile"` |  |

## Guidance

Page numbers on desktop, a "Page n of m" summary on mobile; Previous and Next stay as targets.

`total`, `page` / `defaultPage`, `onChange`, `viewport`. 36px items, `radius-sm`; current page fills `action-primary`; steps carry a `border-default` ring and named labels ("Previous page").
