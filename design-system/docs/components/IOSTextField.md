# IOSTextField

Apple text-entry adapter: SF Pro 17pt label, 52pt borderless background-surface field (radius-md), helper and error below.

`RA.IOSTextField` · 11b — Inputs + Selection

## Use

```jsx
<RA.IOSTextField label="…" />
```


## Props (IOSTextFieldProps)

| prop | type | note |
| --- | --- | --- |
| `label` * | `string` |  |
| `helper` | `React.ReactNode` |  |
| `error` | `React.ReactNode` |  |

_Also accepts: React.InputHTMLAttributes<HTMLInputElement>._

## Guidance

Apple text-entry adapter: SF Pro 17pt label, 52pt borderless `background-surface` field (`radius-md`), helper and error below.

`label`, `placeholder`, `value`, `helper`, `error`, `disabled`, `readOnly`. Focus and error draw a 2px inset ring (`focus-ring`, `field-border-error`). In SwiftUI use `TextField` with Dynamic Type; this is a design reference for that adapter.
