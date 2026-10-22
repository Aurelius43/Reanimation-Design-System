# ConnectionStatus

Connection indicator: Live (mutation-live, optional PULSE) or Connected (mutation-connected, static).

`RA.ConnectionStatus` · 11e — Feedback + Overlays

## Use

```jsx
<RA.ConnectionStatus />
```


## Props (ConnectionStatusProps)

| prop | type | note |
| --- | --- | --- |
| `state` | `"live" \| "connected"` |  |
| `pulse` | `boolean` |  |
| `label` | `string` |  |

## Guidance

Connection indicator: Live (`mutation-live`, optional PULSE) or Connected (`mutation-connected`, static).

`state` (`live | connected`), `pulse`, `label`. 24px mark (ring 10%, halo 18%, 8px dot) + exact label. Connected is a transport fact; Live is consequential output — never swap one for the other. PULSE stops under reduced motion; the label stays.
