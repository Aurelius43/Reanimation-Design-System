# IOSListItem

iOS list navigation row: Disclosure, Value or None accessory.

`RA.IOSListItem` · 11d — Navigation

## Use

```jsx
<RA.IOSListItem title="…" />
```


## Props (IOSListItemProps)

| prop | type | note |
| --- | --- | --- |
| `title` * | `string` |  |
| `icon` | `string` |  |
| `accessory` | `"disclosure" \| "value" \| "none"` |  |
| `value` | `string` |  |

## Guidance

iOS list navigation row: Disclosure, Value or None accessory. On iPad rows fill their column at 52pt.

`title`, `icon`, `accessory` (`disclosure | value | none`), `value`, `sizeClass`. 56pt row, `ios-body-m`, leading glyph `icon-secondary`, chevron `icon-muted`, `border-subtle` separator. Grows with Dynamic Type.
