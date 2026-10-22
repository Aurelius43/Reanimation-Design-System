# CollectionDetail

Detail panel for the selected record: Selected, No selection, Unavailable.

`RA.CollectionDetail` · 12 — Patterns

## Use

```jsx
<RA.CollectionDetail>…</RA.CollectionDetail>
```


## Props (CollectionDetailProps)

| prop | type | note |
| --- | --- | --- |
| `state` | `"selected" \| "none" \| "unavailable"` |  |
| `title` | `string` |  |
| `meta` | `string` |  |
| `summary` | `string` |  |
| `body` | `string` |  |
| `action` | `string` |  |
| `onAction` | `() => void` |  |
| `children` | `React.ReactNode` |  |

## Guidance

Detail panel for the selected record: Selected, No selection, Unavailable.

`state` (`selected | none | unavailable`), `title`, `meta`, `summary`, `body`, `action`, children. 24px padding on `background-surface`; non-selected states reuse EmptyState.
