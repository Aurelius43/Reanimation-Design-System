# ReadinessRow

Static readout for one validation outcome: Complete, Checking or Needs attention.

`RA.ReadinessRow` · 11c — Labels + Data

## Use

```jsx
<RA.ReadinessRow title="…" />
```


## Props (ReadinessRowProps)

| prop | type | note |
| --- | --- | --- |
| `status` | `"complete" \| "checking" \| "attention"` |  |
| `title` * | `string` |  |
| `detail` | `React.ReactNode` |  |
| `statusLabel` | `string` |  |

## Guidance

Static readout for one validation outcome: Complete, Checking or Needs attention.

`status` (`complete | checking | attention`), `title`, `detail`, optional `statusLabel`. Status maps to `status-success`, `status-information` and `status-danger` badges with explicit words.

A row reports one check. Never imply overall READY from a single passed check; it is a non-focusable report — announce meaningful changes through a live region.
