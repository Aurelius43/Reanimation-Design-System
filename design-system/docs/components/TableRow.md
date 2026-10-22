# TableRow

Table row with its own selection checkbox and a cells slot.

`RA.TableRow` · 11c — Labels + Data

## Use

```jsx
<RA.TableRow>…</RA.TableRow>
```


## Props (TableRowProps)

| prop | type | note |
| --- | --- | --- |
| `selected` | `boolean` |  |
| `onSelect` | `() => void` |  |
| `selectable` | `boolean` |  |
| `disabled` | `boolean` |  |
| `label` | `string` |  |
| `children` | `React.ReactNode` |  |

## Guidance

Table row with its own selection checkbox and a cells slot.

`selected`, `onSelect`, `selectable` (default true), `disabled`, `label` (row name for the checkbox), `children` (TableCells). Rows sit on `background-surface` with a 1px `border-default` rule; hover and selected use `surface-raised`. Selected must match the checkbox value and persists independently of hover and focus.
