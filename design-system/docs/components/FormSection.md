# FormSection

Semantic form section with fields, feedback and actions slots.

`RA.FormSection` · 11b — Inputs + Selection

## Use

```jsx
<RA.FormSection title="…">…</RA.FormSection>
```


## Props (FormSectionProps)

| prop | type | note |
| --- | --- | --- |
| `title` * | `string` |  |
| `description` | `string` |  |
| `children` | `React.ReactNode` |  |
| `feedback` | `React.ReactNode` |  |
| `actions` | `React.ReactNode` |  |

## Guidance

Semantic form section with fields, feedback and actions slots.

`title`, `description`, children (fields), `feedback` (a FormMessage), `actions` (FormSubmitActions). 16px vertical rhythm, max 480px. Put the summary FormMessage above the actions after a failed submit.
