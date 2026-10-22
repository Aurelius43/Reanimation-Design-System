# AndroidBottomSheet

Material 3 bottom sheet content: Standard or Modal.

`RA.AndroidBottomSheet` · 25 — Android Core

## Use

```jsx
<RA.AndroidBottomSheet>…</RA.AndroidBottomSheet>
```


## Props (AndroidBottomSheetProps)

| prop | type | note |
| --- | --- | --- |
| `title` | `string` |  |
| `modal` | `boolean` |  |
| `children` | `React.ReactNode` |  |

## Guidance

Material 3 bottom sheet content: Standard or Modal.

`modal`, `title`, children. 28dp top radius, drag handle, `surface-raised`. The modal scrim is composed at viewport level, not inside the sheet. The runtime owns anchors, drag, nested scroll, keyboard insets and Back; restore focus on close.
