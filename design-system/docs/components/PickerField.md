# PickerField

Field that opens a native picker or menu and shows the chosen value.

`RA.PickerField` · 11b — Inputs + Selection

## Use

```jsx
<RA.PickerField label="…" />
```


## Props (PickerFieldProps)

| prop | type | note |
| --- | --- | --- |
| `label` * | `string` |  |
| `requirement` | `string` |  |
| `placeholder` | `string` |  |
| `value` | `string` |  |
| `icon` | `string` |  |
| `helper` | `React.ReactNode` |  |
| `error` | `React.ReactNode` |  |
| `disabled` | `boolean` |  |
| `readOnly` | `boolean` |  |
| `native` | `boolean` |  |
| `onClick` | `() => void` |  |

## Guidance

Field that opens a native picker or menu and shows the chosen value.

`label`, `requirement`, `placeholder`, `value`, `icon`, `helper`, `error`, `disabled`, `readOnly`, `onClick`, `native` (drops `aria-haspopup` when the platform picker owns the UI). 50px target, 12px padding, `radius-md`, chevron-down disclosure. States match TextArea. Use the platform's own date, time and list pickers wherever they exist.
