# ChoiceGroup

Arbitrary-count Tabs or Segments group with roving focus (Left/Right arrows).

`RA.ChoiceGroup` · 11d — Navigation

## Use

```jsx
<RA.ChoiceGroup />
```


## Props (ChoiceGroupProps)

_No props of its own._

## Guidance

Arbitrary-count Tabs or Segments group with roving focus (Left/Right arrows).

`kind` (`tabs | segments`), `items` (strings or `{ label, disabled }`), `value` / `defaultValue`, `onChange`, `label`. Tabs render `role="tablist"`; segments `role="radiogroup"`. Use native pickers where the platform provides them.
