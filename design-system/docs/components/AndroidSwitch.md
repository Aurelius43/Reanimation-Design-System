# AndroidSwitch

Material 3 switch: 52×32dp track, 16dp thumb growing to 24dp when on, whole-row label target.

`RA.AndroidSwitch` · 11b — Inputs + Selection

## Use

```jsx
<RA.AndroidSwitch />
```


## Props (AndroidSwitchProps)

| prop | type | note |
| --- | --- | --- |
| `label` | `React.ReactNode` |  |
| `platform` | `"web" \| "ios"` |  |

_Also accepts: Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">._

## Guidance

Material 3 switch: 52×32dp track, 16dp thumb growing to 24dp when on, whole-row label target.

`label`, `checked`, `disabled`, `onChange`. Off: `surface-raised` track with a 2dp `border-strong` outline; On: `action-primary` track with an `action-on-primary` thumb. Switches apply immediately.
