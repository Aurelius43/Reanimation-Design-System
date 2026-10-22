# IOSSegmentedControl

iOS segmented control reference.

`RA.IOSSegmentedControl` · 11d — Navigation

## Use

```jsx
<RA.IOSSegmentedControl />
```


## Props (IOSSegmentedControlProps)

| prop | type | note |
| --- | --- | --- |
| `items` | `string[]` |  |
| `value` | `number` |  |
| `defaultValue` | `number` |  |
| `onChange` | `(i: number) => void` |  |
| `label` | `string` |  |

## Guidance

iOS segmented control reference. On iPad it sizes to its labels (32pt) instead of filling a phone row.

`items`, `value` / `defaultValue`, `onChange`, `label`, `sizeClass`. 3pt inset track on `background-subtle` (9pt radius); selected segment on `background-surface` with a `border-default` ring; `ios-label-m`. Use `Picker(.segmented)` in SwiftUI.
