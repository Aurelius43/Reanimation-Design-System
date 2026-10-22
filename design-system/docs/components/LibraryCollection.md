# LibraryCollection

Library Workspace task block: the scene collection (Compact or Wide × Results, Empty, No results, Loading, Error) built on CollectionBrowser with Ready / Draft…

`RA.LibraryCollection` · 23 — Library Workspace

## Use

```jsx
<RA.LibraryCollection />
```


## Props (LibraryCollectionProps)

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
| `layout` | `"compact" \| "wide"` |  |

## Guidance

Library Workspace task block: the scene collection (Compact or Wide × Results, Empty, No results, Loading, Error) built on CollectionBrowser with Ready / Draft / Archived filters.

Same props as CollectionBrowser plus `layout`. Selecting a scene opens the inspector; it never starts playback or a stage cue.
