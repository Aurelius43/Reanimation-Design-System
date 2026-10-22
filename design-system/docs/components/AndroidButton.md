# AndroidButton

Material 3 button in Filled, Outlined and Text appearances with a 48dp target envelope.

`RA.AndroidButton` · 25 — Android Core

## Use

```jsx
<RA.AndroidButton />
```


## Props (AndroidButtonProps)

| prop | type | note |
| --- | --- | --- |
| `appearance` | `"filled" \| "outlined" \| "text"` |  |
| `icon` | `string` |  |

_Also accepts: React.ButtonHTMLAttributes<HTMLButtonElement>._

## Guidance

Material 3 button in Filled, Outlined and Text appearances with a 48dp target envelope.

`appearance`, `icon`, `disabled`, native button props. 40dp pill; Filled uses `action-primary`/`action-on-primary` with `-hover`/`-pressed`; Outlined uses a `border-strong` outline and `text-link`; state layers use the `android-state-action-primary-*` overlays. Implement with Compose `Button`, `OutlinedButton`, `TextButton`.
