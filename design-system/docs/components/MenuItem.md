# MenuItem

Composable command row: Checked, Focused, Interaction and Tone are independent.

`RA.MenuItem` · 11e — Feedback + Overlays

## Use

```jsx
<RA.MenuItem label={…} />
```


## Props (MenuItemProps)

| prop | type | note |
| --- | --- | --- |
| `label` * | `React.ReactNode` |  |
| `icon` | `string` |  |
| `shortcut` | `string` |  |
| `checkable` | `boolean` |  |
| `checked` | `boolean` |  |
| `submenu` | `boolean` |  |
| `tone` | `"normal" \| "destructive"` |  |
| `disabled` | `boolean` |  |
| `onClick` | `() => void` |  |

## Guidance

Composable command row: Checked, Focused, Interaction and Tone are independent.

`label`, `icon`, `shortcut`, `checkable` + `checked`, `submenu`, `tone` (`normal | destructive`), `disabled`, `onClick`. 44px, 12px padding, `radius-md`, `web-body-s`; check in `action-primary`, icon `icon-secondary`, shortcut Geist Mono `text-muted`. Hover `background-interactive`; destructive uses `text-danger`. Disabled rows keep their check and never activate.
