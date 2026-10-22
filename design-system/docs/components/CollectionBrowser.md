# CollectionBrowser

Controlled collection composition: search, filter chips, results summary, record rows and feedback — Results, Empty, No results, Loading, Error.

`RA.CollectionBrowser` · 12 — Patterns

## Use

```jsx
<RA.CollectionBrowser />
```


## Props (CollectionBrowserProps)

| prop | type | note |
| --- | --- | --- |
| `title` | `string` |  |
| `noun` | `string` |  |
| `records` | `ListRowProps[]` |  |
| `filters` | `string[]` |  |
| `defaultFilter` | `number` |  |
| `state` | `"results" \| "empty" \| "no-results" \| "loading" \| "error"` |  |
| `summary` | `string` |  |
| `createLabel` | `string` |  |
| `searchLabel` | `string` |  |

## Guidance

Controlled collection composition: search, filter chips, results summary, record rows and feedback — Results, Empty, No results, Loading, Error.

`title`, `noun`, `records` (ListRow props), `filters`, `state`, `summary`, `createLabel`. State selects the visual body only; it is not a data store. Empty means zero records with no filters; No results means filters or search excluded everything — offer Clear filters.
