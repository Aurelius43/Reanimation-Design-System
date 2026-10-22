# ChoiceItem

Single tab or segment for ChoiceGroup.

`RA.ChoiceItem` · 11d — Navigation

## Use

```jsx
<RA.ChoiceItem label={…} />
```


## Props (ChoiceItemProps)

| prop | type | note |
| --- | --- | --- |
| `kind` | `"tab" \| "segment"` |  |
| `label` * | `React.ReactNode` |  |
| `selected` | `boolean` |  |
| `disabled` | `boolean` |  |
| `onClick` | `() => void` |  |

## Guidance

Single tab or segment for ChoiceGroup. Selected, interaction and focus are independent; Disabled suppresses focus and activation.

`kind` (`tab | segment`), `label`, `selected`, `disabled`, `onClick`. Tab: 44px, 12px padding, `web-label-m`; unselected `text-secondary`, selected `text-primary` with a 2px `text-primary` underline. Segment: 36px, 7px radius; selected sits on `background-surface` with a `border-default` ring. Hover `background-interactive`, pressed `surface-raised`.
