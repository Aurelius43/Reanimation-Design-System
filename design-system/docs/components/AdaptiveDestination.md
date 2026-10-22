# AdaptiveDestination

Responsive list destination: LTR or RTL × default or enlarged text × selected × focus.

`RA.AdaptiveDestination` · 11d — Navigation

## Use

```jsx
<RA.AdaptiveDestination />
```


## Props (AdaptiveDestinationProps)

| prop | type | note |
| --- | --- | --- |
| `destination` | `string` |  |
| `label` | `string` |  |
| `selected` | `boolean` |  |
| `enlarged` | `boolean` |  |
| `dir` | `"ltr" \| "rtl"` |  |
| `href` | `string` |  |

## Guidance

Responsive list destination: LTR or RTL × default or enlarged text × selected × focus.

`destination`, `label`, `selected`, `enlarged` (2× specimen for stress testing — real apps use platform text scaling), `dir`. 48px minimum, 12/16 padding, `radius-lg`. Labels wrap and the row grows; the icon mirrors with direction.
