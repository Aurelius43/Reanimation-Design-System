# StatusBadge

Outcome status shown as a dot plus a label in a bordered pill: Neutral, Success, Warning, Information, Danger.

`RA.StatusBadge` · 11c — Labels + Data

## Use

```jsx
<RA.StatusBadge />
```


## Props (StatusBadgeProps)

| prop | type | note |
| --- | --- | --- |
| `status` | `"neutral" \| "success" \| "warning" \| "information" \| "danger"` |  |

_Also accepts: React.HTMLAttributes<HTMLSpanElement>._

## Guidance

Outcome status shown as a dot plus a label in a bordered pill: Neutral, Success, Warning, Information, Danger.

### Props
`status`: `neutral | success | warning | information | danger`. `children`: the explicit status word ("Synced", "Failed").

### Rules
Color never carries the meaning alone: the label always names the state. Fill is `background-surface`; the 1px border and 6px dot take the `status-*` role (`border-strong` for Neutral). Toxic green is reserved for readiness, armed and live signals — Success uses `status-success` (slime), not `action-primary`.
