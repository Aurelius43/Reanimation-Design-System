# AndroidNavigation

Material 3 navigation bar (compact) or rail (expanded) with the four stable destinations and paired outline / filled icons.

`RA.AndroidNavigation` · 11d — Navigation

## Use

```jsx
<RA.AndroidNavigation />
```


## Props (AndroidNavigationProps)

| prop | type | note |
| --- | --- | --- |
| `placement` | `"bar" \| "rail"` |  |
| `selected` | `string` |  |
| `destinations` | `string[]` |  |

## Guidance

Material 3 navigation bar (compact) or rail (expanded) with the four stable destinations and paired outline / filled icons.

`placement` (`bar | rail`), `selected`, `destinations`. 80dp bar; the selected 64×32 indicator pill fills `action-primary`. Implement with Compose `NavigationBar` / `NavigationRail` themed by Bone Maestro.
