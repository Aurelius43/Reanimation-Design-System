# Slider

Generic single-value slider, continuous or stepped, LTR or RTL — independent of playback or device state.

`RA.Slider` · 11b — Inputs + Selection

## Use

```jsx
<RA.Slider />
```


## Props (SliderProps)

| prop | type | note |
| --- | --- | --- |
| `label` | `string` |  |
| `value` | `number` |  |
| `defaultValue` | `number` |  |
| `min` | `number` |  |
| `max` | `number` |  |
| `step` | `number` |  |
| `minLabel` | `React.ReactNode` |  |
| `maxLabel` | `React.ReactNode` |  |
| `helper` | `string` |  |
| `format` | `(v: number) => string` |  |
| `onChange` | `(v: number) => void` |  |
| `disabled` | `boolean` |  |
| `dir` | `"ltr" \| "rtl"` |  |

## Guidance

Generic single-value slider, continuous or stepped, LTR or RTL — independent of playback or device state.

`label`, `value` / `defaultValue`, `min`, `max`, `step`, `minLabel`, `maxLabel`, `helper`, `format`, `onChange`, `disabled`, `dir`. 48px interaction target, 4px `border-strong` track with an `action-primary` value extent, 24px `text-primary` thumb (hover fills `action-primary`, pressed adds a 2px ring). Always show the current value as text.
