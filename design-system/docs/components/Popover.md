# Popover

Non-modal anchored surface with title, description, content, close control and optional action; dismisses on click outside.

`RA.Popover` · 11e — Feedback + Overlays

## Use

```jsx
<RA.Popover title="…">…</RA.Popover>
```


## Props (PopoverProps)

| prop | type | note |
| --- | --- | --- |
| `title` * | `string` |  |
| `description` | `React.ReactNode` |  |
| `children` | `React.ReactNode` |  |
| `action` | `string` |  |
| `onAction` | `() => void` |  |
| `onClose` | `() => void` |  |

## Guidance

Non-modal anchored surface with title, description, content, close control and optional action; dismisses on click outside.

`title`, `description`, children, `action`, `onAction`, `onClose`. 360 wide, 20px padding, `radius-lg`, `overlay-surface`, `border-strong`, `elevation-2`.
