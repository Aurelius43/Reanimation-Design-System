# SidebarItem

Sidebar destination in Expanded or Collapsed display: Default, Hover, Active, Focus, Disabled.

`RA.SidebarItem` · 11d — Navigation

## Use

```jsx
<RA.SidebarItem label="…" />
```


## Props (SidebarItemProps)

| prop | type | note |
| --- | --- | --- |
| `label` * | `string` |  |
| `icon` | `string` |  |
| `active` | `boolean` |  |
| `count` | `number` |  |
| `collapsed` | `boolean` |  |
| `disabled` | `boolean` |  |
| `href` | `string` |  |
| `onClick` | `() => void` |  |

## Guidance

Sidebar destination in Expanded or Collapsed display: Default, Hover, Active, Focus, Disabled.

`label`, `icon` (glyph name; default diamond marker), `active`, `count`, `collapsed` (icon-only, label moves to the accessible name and tooltip), `disabled`, `href`, `onClick`. 44px rows, 12px side padding, 10px gap, `web-label-m`. Hover `background-interactive`; Active `background-subtle` with a 3×24 `action-primary` indicator and `aria-current="page"`; focus a 2px `focus-ring` inset outline; Disabled 40%.
