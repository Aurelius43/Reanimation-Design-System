# TextInput

Single-line text field with label, optional helper, error and success messaging — Standard, Password, Search and Numeric kinds.

`RA.TextInput` · 11b — Inputs + Selection

## Use

```jsx
<RA.TextInput label="…" />
```


## Props (TextInputProps)

| prop | type | note |
| --- | --- | --- |
| `label` * | `string` |  |
| `kind` | `"standard" \| "password" \| "search" \| "numeric"` |  |
| `helper` | `React.ReactNode` |  |
| `error` | `React.ReactNode` |  |
| `success` | `React.ReactNode` |  |
| `optional` | `boolean` |  |
| `onClear` | `() => void` |  |
| `leadingIcon` | `IconName \| false` |  |

_Also accepts: Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">._

## Guidance

Single-line text field with label, optional helper, error and success messaging — Standard, Password, Search and Numeric kinds.

### Props
- `label` (required) and optional `optional` flag (shows "Optional" in `text-secondary`).
- `kind`: `standard | password | search | numeric` (numeric sets `inputMode="decimal"`).
- `placeholder`, `value`/`defaultValue`, `onChange` and any native input attribute.
- `helper`: guidance under the field. `error`: replaces the helper, turns the border `field-border-error` 2px and the text `field-content-error`, adds the status glyph and `aria-invalid`. `success`: 2px `status-success` border and message.
- `onClear`: shows the 20px clear action.
- `leadingIcon`: an `Icon` name, or `false` to drop the default spark adornment.
- `disabled`, `readOnly`.

### Anatomy
Label `web-label-m` · 8px gap · 44px surface (`field-background-default`, 1px `field-border-default`, `field-radius` 12px, 8/16 padding, 12px gap) · 8px gap · message `web-body-s`. Value text is `web-body-m`; placeholder uses `text-secondary`.

### States
Hover raises to `surface-raised`. Focus: 2px `action-primary` border plus the `ra-focus-glow` halo. Read-only: `background-subtle`. Disabled: `field-background-disabled` at 72%.

### Rules
Identify the field, explain the problem, give recovery guidance, and keep the user's input. Messages are associated with `aria-describedby`.
