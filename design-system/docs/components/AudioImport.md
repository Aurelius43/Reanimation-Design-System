# AudioImport

User-confirmed audio import with separate validation and durable-save outcomes: Empty, Validating, Ready, Partial, Rejected, Unavailable, Duplicate, Importing,…

`RA.AudioImport` · 31 — Audio Import + Validation

## Use

```jsx
<RA.AudioImport />
```


## Props (AudioImportProps)

| prop | type | note |
| --- | --- | --- |
| `state` | `"empty" \| "validating" \| "ready" \| "partial" \| "rejected" \| "unavailable" \| "duplicate" \| "importing" \| "failed" \| "partial-import" \| "complete" \| "cancelling" \| "cancelled"` |  |
| `layout` | `"compact" \| "wide"` |  |
| `files` | `ReadinessRowProps[]` |  |

## Guidance

User-confirmed audio import with separate validation and durable-save outcomes: Empty, Validating, Ready, Partial, Rejected, Unavailable, Duplicate, Importing, Failed, Partial import, Complete, Cancelling, Cancelled — Compact or Wide.

`state`, `layout`, `files` (ReadinessRow props). Validation results and save results are different messages; each state names what happened and the next action. Failed keeps the selection; Cancelling keeps files already saved. Importing never starts playback.
