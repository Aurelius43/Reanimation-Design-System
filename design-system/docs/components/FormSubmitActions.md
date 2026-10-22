# FormSubmitActions

Cancel + submit pair for forms: Default, Saving, Failed, Saved.

`RA.FormSubmitActions` · 11b — Inputs + Selection

## Use

```jsx
<RA.FormSubmitActions />
```


## Props (FormSubmitActionsProps)

| prop | type | note |
| --- | --- | --- |
| `state` | `"default" \| "saving" \| "failed" \| "saved"` |  |
| `submitLabel` | `string` |  |
| `cancelLabel` | `string` |  |
| `onSubmit` | `() => void` |  |
| `onCancel` | `() => void` |  |

## Guidance

Cancel + submit pair for forms: Default, Saving, Failed, Saved.

`state`, `submitLabel`, `cancelLabel`, `onSubmit`, `onCancel`. Saving shows the loading primary and blocks duplicate commits (no fake cancellation); Failed keeps entered values and retries the same submit; Saved confirms with a success note.
