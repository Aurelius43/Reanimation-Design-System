# AndroidDialog

Native Material basic dialog: Confirmation or Destructive intent.

`RA.AndroidDialog` · 25 — Android Core

## Use

```jsx
<RA.AndroidDialog title="…" description={…} />
```


## Props (AndroidDialogProps)

| prop | type | note |
| --- | --- | --- |
| `intent` | `"confirmation" \| "destructive"` |  |
| `title` * | `string` |  |
| `description` * | `React.ReactNode` |  |
| `confirmLabel` | `string` |  |
| `cancelLabel` | `string` |  |

## Guidance

Native Material basic dialog: Confirmation or Destructive intent.

`intent`, `title`, `description`, `confirmLabel`, `cancelLabel`. 312dp, 28dp radius, `surface-raised`, `elevation-3`; text-button actions (destructive confirm in `text-danger`). Use Compose `AlertDialog`.
