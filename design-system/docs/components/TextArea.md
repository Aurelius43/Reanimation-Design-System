# TextArea

Multi-line text entry with label, requirement, helper, error and success — one anatomy for the Web, iOS and Android adapters.

`RA.TextArea` · 11b — Inputs + Selection

## Use

```jsx
<RA.TextArea label="…" />
```


## Props (TextAreaProps)

| prop | type | note |
| --- | --- | --- |
| `label` * | `string` |  |
| `requirement` | `string` |  |
| `helper` | `React.ReactNode` |  |
| `error` | `React.ReactNode` |  |
| `success` | `React.ReactNode` |  |
| `platform` | `"web" \| "ios" \| "android"` |  |

_Also accepts: React.TextareaHTMLAttributes<HTMLTextAreaElement>._

## Guidance

Multi-line text entry with label, requirement, helper, error and success — one anatomy for the Web, iOS and Android adapters.

### Props
`label`, `requirement` ("Optional" / "Required"), `placeholder`, `value` / `defaultValue`, `helper`, `error`, `success`, `disabled`, `readOnly`, `platform` (`web | ios | android`), plus native textarea attributes.

### Look
16px padding, `radius-md`, `background-surface`, 1px `border-default`, minimum height `ra-component-textarea-min-height` (128). Label 16/24 Medium, value `web-body-m`, placeholder `text-muted`. Hover `border-strong`; focus 2px `focus-ring` border; error 2px `field-border-error`; success 2px `status-success`. Label, helper and error grow with content — never clip.
