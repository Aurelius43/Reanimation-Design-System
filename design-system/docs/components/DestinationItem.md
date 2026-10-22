# DestinationItem

Building block for primary destinations in Tab, Row or Rail presentation.

`RA.DestinationItem` · 11d — Navigation

## Use

```jsx
<RA.DestinationItem />
```


## Props (DestinationItemProps)

| prop | type | note |
| --- | --- | --- |
| `destination` | `"connect" \| "control" \| "library" \| "scenes" \| string` |  |
| `label` | `string` |  |
| `presentation` | `"tab" \| "row" \| "rail"` |  |
| `selected` | `boolean` |  |
| `href` | `string` |  |
| `onClick` | `() => void` |  |

## Guidance

Building block for primary destinations in Tab, Row or Rail presentation.

`destination` (`connect | control | library | scenes`, or any glyph name with `label`), `label`, `presentation`, `selected`, `href`. Labels are always visible. Selected fills `background-interactive` and swaps to the filled icon; focus is independent of selection. 44px minimum on Apple/web, 48dp on Android.
