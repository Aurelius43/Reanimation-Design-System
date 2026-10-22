# AndroidListItem

Material 3 list item: the whole row is one 48dp+ target; selection independent of press, focus and disabled.

`RA.AndroidListItem` · 25 — Android Core

## Use

```jsx
<RA.AndroidListItem title="…" />
```


## Props (AndroidListItemProps)

| prop | type | note |
| --- | --- | --- |
| `title` * | `string` |  |
| `overline` | `string` |  |
| `supporting` | `string` |  |
| `icon` | `string` |  |
| `trailing` | `React.ReactNode` |  |
| `selected` | `boolean` |  |
| `disabled` | `boolean` |  |

## Guidance

Material 3 list item: the whole row is one 48dp+ target; selection independent of press, focus and disabled.

`title`, `overline`, `supporting`, `icon`, `trailing`, `selected`, `disabled`. Selected rows fill `background-interactive` with a 16dp radius and expose selected state semantically. Long text wraps.
