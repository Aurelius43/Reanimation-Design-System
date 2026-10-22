# Sidebar

Compatibility sidebar preset: Expanded (280) or Collapsed (76) × Normal, Live or Performance mode.

`RA.Sidebar` · 11d — Navigation

## Use

```jsx
<RA.Sidebar items={…} />
```


## Props (SidebarProps)

| prop | type | note |
| --- | --- | --- |
| `items` * | `SidebarItemProps[]` |  |
| `footer` | `SidebarItemProps[]` |  |
| `collapsed` | `boolean` |  |
| `mode` | `"normal" \| "live" \| "performance"` |  |
| `brand` | `string` |  |
| `label` | `string` |  |

## Guidance

Compatibility sidebar preset: Expanded (280) or Collapsed (76) × Normal, Live or Performance mode.

`items` and `footer` (SidebarItem props), `collapsed`, `mode` (`normal | live | performance`), `brand`, `label`. 20/16 padding, 8px gap, `radius-md`, `background-surface` with a `border-subtle` edge. Live shows the toxic LIVE badge and a `mutation-live` edge; Performance the orange PERFORMANCE badge. For new arbitrary-route apps prefer NavigationShell.
