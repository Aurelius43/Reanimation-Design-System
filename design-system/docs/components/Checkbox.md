# Checkbox

Binary or mixed selection with a 20px box inside a 44×44 target, plus a body-size label.

`RA.Checkbox` · 11b — Inputs + Selection

## Use

```jsx
<RA.Checkbox />
```


## Props (CheckboxProps)

| prop | type | note |
| --- | --- | --- |
| `label` | `React.ReactNode` |  |
| `indeterminate` | `boolean` |  |
| `error` | `boolean` |  |

_Also accepts: Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">._

## Guidance

Binary or mixed selection with a 20px box inside a 44×44 target, plus a body-size label.

### Props
`label`, `checked` / `defaultChecked`, `onChange`, `indeterminate` (Mixed), `error`, `disabled`, `name`, `value`.

### Look
Unchecked: `background-surface` with 1px `border-strong`, `radius-xs`. Checked or Mixed: `action-primary` fill with an `action-on-primary` checkmark or 10×2 dash. Error: 2px `status-danger` border — pair it with a text message. Focus: 1px `focus-ring` outline around the 44px target (`radius-sm`). Label `web-body-m`; disabled labels use `text-muted`.

Use a Checkbox for independent options; use a Switch for an immediate on/off setting.
