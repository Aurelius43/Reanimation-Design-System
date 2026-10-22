# NavigationShell

Generic navigation host — Bottom bar, Sidebar, Rail or Top bar — independent of route names and count.

`RA.NavigationShell` · 11d — Navigation

## Use

```jsx
<RA.NavigationShell />
```


## Props (NavigationShellProps)

| prop | type | note |
| --- | --- | --- |
| `presentation` | `"bottom" \| "sidebar" \| "rail" \| "top"` |  |
| `destinations` | `(string \| DestinationItemProps)[]` |  |
| `selected` | `string` |  |
| `brand` | `string` |  |
| `label` | `string` |  |

## Guidance

Generic navigation host — Bottom bar, Sidebar, Rail or Top bar — independent of route names and count.

`presentation` (`bottom | sidebar | rail | top`), `destinations` (names or `{ destination, label, href }`), `selected`, `brand`, `label`. 12px padding on `background-surface`. Choose the presentation from available space, not device names.
