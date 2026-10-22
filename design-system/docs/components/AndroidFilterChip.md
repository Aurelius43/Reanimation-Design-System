# AndroidFilterChip

Material 3 filter chip: 32dp chip in a 48dp target; Selected independent of interaction.

`RA.AndroidFilterChip` · 25 — Android Core

## Use

```jsx
<RA.AndroidFilterChip label="…" />
```


## Props (AndroidFilterChipProps)

| prop | type | note |
| --- | --- | --- |
| `label` * | `string` |  |
| `selected` | `boolean` |  |
| `disabled` | `boolean` |  |
| `onClick` | `() => void` |  |

## Guidance

Material 3 filter chip: 32dp chip in a 48dp target; Selected independent of interaction.

`label`, `selected`, `disabled`, `onClick`. Unselected: `border-default` outline; selected: `background-interactive` fill with a leading check. Toggles `aria-pressed`.
