# AndroidTextField

Material outlined text field adapted to Bone Maestro roles: 56dp field, 4dp radius, floating label, Roboto, supporting text owned by the wrapper.

`RA.AndroidTextField` · 11b — Inputs + Selection

## Use

```jsx
<RA.AndroidTextField label="…" />
```


## Props (AndroidTextFieldProps)

| prop | type | note |
| --- | --- | --- |
| `label` * | `string` |  |
| `helper` | `React.ReactNode` |  |
| `error` | `React.ReactNode` |  |
| `readOnlyHelper` | `string` |  |

_Also accepts: React.InputHTMLAttributes<HTMLInputElement>._

## Guidance

Material outlined text field adapted to Bone Maestro roles: 56dp field, 4dp radius, floating label, Roboto, supporting text owned by the wrapper.

`label`, `value`, `helper`, `error`, `readOnly` + `readOnlyHelper`, `disabled`. Outline `border-strong`; focus 2px `action-primary`; error `field-border-error` with `field-content-error` copy. Implement with Compose `OutlinedTextField` themed by the Bone Maestro color scheme.
