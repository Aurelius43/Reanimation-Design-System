# TableHeaderCell

Sortable column header: None (↕), Ascending (↑), Descending (↓) or Not sortable.

`RA.TableHeaderCell` · 11c — Labels + Data

## Use

```jsx
<RA.TableHeaderCell label={…} />
```


## Props (TableHeaderCellProps)

| prop | type | note |
| --- | --- | --- |
| `label` * | `React.ReactNode` |  |
| `sort` | `"none" \| "ascending" \| "descending" \| false` |  |
| `onSort` | `() => void` |  |
| `align` | `"start" \| "end"` |  |
| `disabled` | `boolean` |  |

## Guidance

Sortable column header: None (↕), Ascending (↑), Descending (↓) or Not sortable.

`label`, `sort` (`none | ascending | descending | false`), `onSort`, `align`, `disabled`. 12px padding, `web-label-m`, `background-surface`; hover and pressed lift to `surface-raised`. Sets `aria-sort`; not-sortable headers never take focus.
