# IOSSheet

iOS sheet with navigation bar: Medium or Large detent.

`RA.IOSSheet` · 11d — Navigation

## Use

```jsx
<RA.IOSSheet title="…">…</RA.IOSSheet>
```


## Props (IOSSheetProps)

| prop | type | note |
| --- | --- | --- |
| `title` * | `string` |  |
| `cancel` | `string` |  |
| `confirm` | `string` |  |
| `heading` | `string` |  |
| `detent` | `"medium" \| "large"` |  |
| `children` | `React.ReactNode` |  |

## Guidance

iOS sheet with navigation bar: Medium or Large detent. On iPad (`sizeClass="regular"`) it is a centred 540pt form sheet (704pt for Large) — `.presentationSizing(.form)`.

`title`, `cancel`, `confirm`, `heading`, `detent` (`medium | large`), `sizeClass`, children. `surface-raised` with 18pt top radius, `elevation-3`, a 36×5 `border-strong` grabber, Cancel / title / confirm bar (`text-link`, confirm SemiBold). Keep system dismissal and swipe-down; confirm is the only bold action.
