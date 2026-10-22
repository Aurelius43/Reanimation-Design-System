# AndroidRadio

Material radio button with a whole-row label target and 48dp minimum.

`RA.AndroidRadio` · 11b — Inputs + Selection

## Use

```jsx
<RA.AndroidRadio />
```


## Props (AndroidRadioProps)

| prop | type | note |
| --- | --- | --- |
| `label` | `React.ReactNode` |  |
| `error` | `boolean` |  |

_Also accepts: Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">._

## Guidance

Material radio button with a whole-row label target and 48dp minimum.

`label`, `name`, `checked`, `disabled`, `onChange`. 20dp ring in `text-secondary`; selected ring and 10dp dot in `action-primary`. Radio groups choose exactly one.
