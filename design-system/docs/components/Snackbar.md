# Snackbar

Transient bottom-surface feedback: Message, Action (one text action such as Undo) or Loading (spinner + step count, action-primary border).

`RA.Snackbar` · 11e — Feedback + Overlays

## Use

```jsx
<RA.Snackbar message={…} />
```


## Props (SnackbarProps)

| prop | type | note |
| --- | --- | --- |
| `mode` | `"message" \| "action" \| "loading"` |  |
| `tone` | `"success" \| "information"` |  |
| `message` * | `React.ReactNode` |  |
| `action` | `string` |  |
| `onAction` | `() => void` |  |
| `progress` | `string` |  |

## Guidance

Transient bottom-surface feedback: Message, Action (one text action such as Undo) or Loading (spinner + step count, `action-primary` border).

`mode`, `tone` (`success | information`), `message`, `action` + `onAction`, `progress`. `surface-raised`, `radius-md`, `elevation-2`. Never put the only path to a destructive undo in a snackbar that times out.
