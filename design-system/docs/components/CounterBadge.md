# CounterBadge

Static count attached to a named item, in the seven Tag tones.

`RA.CounterBadge` · 11c — Labels + Data

## Use

```jsx
<RA.CounterBadge />
```


## Props (CounterBadgeProps)

| prop | type | note |
| --- | --- | --- |
| `tone` | `"neutral" \| "toxic" \| "magenta" \| "purple" \| "orange" \| "information" \| "danger"` |  |
| `value` | `React.ReactNode` |  |

## Guidance

Static count attached to a named item, in the seven Tag tones.

`tone` (`neutral | toxic | magenta | purple | orange | information | danger`), `value`. 24px tall, minimum 24px wide, 7px side padding, `radius-pill`, `web-label-s`. Fills match Tag (Neutral `background-interactive`, Toxic `action-primary` with `action-on-primary`, accents with `content-on-dark-accent`).

The value is display text: the caller formats locale, zero visibility and caps ("99+"), and keeps the exact count in the parent's accessible name.
