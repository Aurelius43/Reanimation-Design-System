# Chip

Composable Input and Filter chip; Selected is independent of hover, pressed, focus and disabled.

`RA.Chip` · 11c — Labels + Data

## Use

```jsx
<RA.Chip label={…} />
```


## Props (ChipProps)

| prop | type | note |
| --- | --- | --- |
| `kind` | `"filter" \| "input"` |  |
| `label` * | `React.ReactNode` |  |
| `selected` | `boolean` |  |
| `disabled` | `boolean` |  |
| `onClick` | `() => void` |  |
| `onDismiss` | `() => void` |  |
| `leading` | `React.ReactNode` |  |

## Guidance

Composable Input and Filter chip; Selected is independent of hover, pressed, focus and disabled. Replaces the Input Chip / Core and Filter Chip / Core specimen families.

### Props
`kind` (`filter` default | `input`), `label`, `selected`, `disabled`, `onClick`, `onDismiss` (input only: adds a 44px dismiss target), `leading` (custom leading content).

### Look
44px tall pill: `background-surface`, 1px `border-default`, 12px side padding, 8px gap, `web-label-s`. Hover `surface-raised`; pressed `background-interactive`. Selected **Filter** fills `action-primary` with a check and `action-on-primary` text (hover `-hover`, pressed `-pressed`); selected **Input** fills `background-interactive` with a 2px border. Disabled keeps its selection and check at 72%.

Filter chips toggle with `aria-pressed`; input chips name their dismiss action ("Remove Scene tag").
