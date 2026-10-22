# SelectionRow

Whole-row choice with a persistent label and optional description, for Web, iOS and Android.

`RA.SelectionRow` · 11b — Inputs + Selection

## Use

```jsx
<RA.SelectionRow label={…} />
```


## Props (SelectionRowProps)

| prop | type | note |
| --- | --- | --- |
| `label` * | `React.ReactNode` |  |
| `indeterminate` | `boolean` |  |
| `error` | `boolean` |  |
| `control` | `"checkbox" \| "radio" \| "switch"` |  |
| `description` | `React.ReactNode` |  |
| `platform` | `"web" \| "ios" \| "android"` |  |

_Also accepts: Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">._

## Guidance

Whole-row choice with a persistent label and optional description, for Web, iOS and Android.

`control` (`checkbox | radio | switch`), `label`, `description`, `platform`, plus the control's props (`checked`, `name`, `onChange`, `disabled`). The whole row is the target; the nested control owns value and transient state. Use 44px targets on web and iOS, 48dp on Android.
