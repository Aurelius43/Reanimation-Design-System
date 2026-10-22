# DateTimeHost

Native-first date / time host: Date, Time or Date and time, each Empty, Filled, Error, Disabled or Read only.

`RA.DateTimeHost` · 11b — Inputs + Selection

## Use

```jsx
<RA.DateTimeHost />
```


## Props (DateTimeHostProps)

| prop | type | note |
| --- | --- | --- |
| `kind` | `"date" \| "time" \| "datetime"` |  |
| `legend` | `string` |  |
| `dateValue` | `string` |  |
| `timeValue` | `string` |  |
| `error` | `React.ReactNode` |  |
| `disabled` | `boolean` |  |
| `readOnly` | `boolean` |  |
| `context` | `string` |  |

## Guidance

Native-first date / time host: Date, Time or Date and time, each Empty, Filled, Error, Disabled or Read only.

`kind` (`date | time | datetime`), `legend`, `dateValue`, `timeValue`, `error`, `disabled`, `readOnly`, `context` (default "Format follows your locale."). Wraps Picker Fields in a fieldset with 16px gaps. Let the platform format and parse dates; never hand-roll a calendar when a native control exists.
