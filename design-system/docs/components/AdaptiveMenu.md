# AdaptiveMenu

Content-fit destination menu, companion to primary navigation for narrow or large-text layouts.

`RA.AdaptiveMenu` · 11d — Navigation

## Use

```jsx
<RA.AdaptiveMenu />
```


## Props (AdaptiveMenuProps)

| prop | type | note |
| --- | --- | --- |
| `selected` | `string` |  |
| `dir` | `"ltr" \| "rtl"` |  |
| `enlarged` | `boolean` |  |
| `labels` | `Record<string, string>` |  |
| `label` | `string` |  |

## Guidance

Content-fit destination menu, companion to primary navigation for narrow or large-text layouts.

`selected`, `dir`, `enlarged`, `labels` (localized names). 320 wide, 16px padding, 12px gap. On web expose it behind a named navigation disclosure; use modal treatment only when the platform requires it.
