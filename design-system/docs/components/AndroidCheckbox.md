# AndroidCheckbox

Material checkbox with a whole-row label target and a 48dp minimum (ra-platform-target-minimum on Android).

`RA.AndroidCheckbox` · 11b — Inputs + Selection

## Use

```jsx
<RA.AndroidCheckbox />
```


## Props (AndroidCheckboxProps)

| prop | type | note |
| --- | --- | --- |
| `label` | `React.ReactNode` |  |
| `indeterminate` | `boolean` |  |
| `error` | `boolean` |  |

_Also accepts: Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">._

## Guidance

Material checkbox with a whole-row label target and a 48dp minimum (`ra-platform-target-minimum` on Android).

`label`, `checked`, `indeterminate`, `error`, `disabled`, `onChange`. 18dp box, 2dp `text-secondary` outline; selected fills `action-primary` with an `action-on-primary` mark. State layers use the `android-state-*` overlays.
