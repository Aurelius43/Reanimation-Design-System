# Switch

Immediate on/off setting, in the Web (44×24) and iOS (51×31) geometries, with a 44px interaction target.

`RA.Switch` · 11b — Inputs + Selection

## Use

```jsx
<RA.Switch />
```


## Props (SwitchProps)

| prop | type | note |
| --- | --- | --- |
| `label` | `React.ReactNode` |  |
| `platform` | `"web" \| "ios"` |  |

_Also accepts: Omit<React.InputHTMLAttributes<HTMLInputElement>, "type">._

## Guidance

Immediate on/off setting, in the Web (44×24) and iOS (51×31) geometries, with a 44px interaction target.

### Props
`label`, `checked` / `defaultChecked`, `onChange`, `platform` (`web` default | `ios`), `disabled`. Renders `role="switch"`.

### Look
Off: `background-surface-raised` track, 1px `border-strong`, `content-on-dark-accent` thumb. On: `action-primary` track with an `action-on-primary` thumb. Hover lifts the off track to `background-interactive`; pressed-on uses `action-primary-pressed`. Thumb travel uses `ra-core-motion-fast`; reduced motion removes it.

A switch applies its change immediately. If the change needs a Save, use a Checkbox.
