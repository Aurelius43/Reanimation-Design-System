# SheetChoice

Selectable choice row used inside BottomSheet.

`RA.SheetChoice` · 11e — Feedback + Overlays

## Use

```jsx
<RA.SheetChoice label="…" />
```


## Props (SheetChoiceProps)

| prop | type | note |
| --- | --- | --- |
| `label` * | `string` |  |
| `icon` | `string` |  |
| `selected` | `boolean` |  |
| `onClick` | `() => void` |  |

## Guidance

Selectable choice row used inside BottomSheet.

`label`, `icon`, `selected`, `onClick`. Toggles `aria-pressed`. Selected adds the `action-primary` border, tinted icon and a check.
