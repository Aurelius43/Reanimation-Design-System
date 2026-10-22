# Dialog

Modal task or confirmation: Compact (420) or Large (620), optional illustration, Default or Destructive tone.

`RA.Dialog` · 11e — Feedback + Overlays

## Use

```jsx
<RA.Dialog title="…">…</RA.Dialog>
```


## Props (DialogProps)

| prop | type | note |
| --- | --- | --- |
| `title` * | `string` |  |
| `description` | `React.ReactNode` |  |
| `children` | `React.ReactNode` |  |
| `size` | `"compact" \| "large"` |  |
| `image` | `string` |  |
| `tone` | `"default" \| "destructive"` |  |
| `confirmLabel` | `string` |  |
| `cancelLabel` | `string` |  |
| `onConfirm` | `() => void` |  |
| `onCancel` | `() => void` |  |
| `onClose` | `(() => void) \| false` |  |

## Guidance

Modal task or confirmation: Compact (420) or Large (620), optional illustration, Default or Destructive tone.

`title`, `description`, children (body), `size`, `image`, `tone`, `confirmLabel`, `cancelLabel`, `onConfirm`, `onCancel`, `onClose` (`false` hides close). `overlay-surface`, 1px `border-strong`, `radius-lg`, `elevation-3`, 24px padding. Set initial focus, trap focus, close on Escape and restore focus. Destructive dialogs use `role="alertdialog"` and name the consequence.
