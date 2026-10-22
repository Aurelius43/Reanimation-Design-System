# NextCue

The next stage cue — Ready, Pending or Blocked — in Compact or Wide layout.

`RA.NextCue` · 11f — Performance

## Use

```jsx
<RA.NextCue />
```


## Props (NextCueProps)

| prop | type | note |
| --- | --- | --- |
| `state` | `"ready" \| "pending" \| "blocked"` |  |
| `layout` | `"compact" \| "wide"` |  |
| `title` | `string` |  |
| `meta` | `string` |  |
| `onTrigger` | `() => void` |  |
| `onRemove` | `() => void` |  |

## Guidance

The next stage cue — Ready, Pending or Blocked — in Compact or Wide layout.

`state`, `layout`, `title`, `meta`, `onTrigger`, `onRemove`. "Trigger next" explicitly starts a stage cue; selecting never performs. Remove changes the pending cue only. Do not infer show ordering, auto-advance, shuffle or repeat.
