# EmptyState

Empty, no-results, offline or completed state: spot + title + description + actions.

`RA.EmptyState` · 11e — Feedback + Overlays

## Use

```jsx
<RA.EmptyState title={…} />
```


## Props (EmptyStateProps)

| prop | type | note |
| --- | --- | --- |
| `spot` | `"no-data" \| "no-results" \| "offline" \| "completed" \| null` |  |
| `image` | `string` |  |
| `loading` | `boolean` |  |
| `title` * | `React.ReactNode` |  |
| `body` | `React.ReactNode` |  |
| `action` | `string` |  |
| `actionIcon` | `string` |  |
| `onAction` | `() => void` |  |
| `secondaryAction` | `string` |  |
| `onSecondary` | `() => void` |  |

## Guidance

Empty, no-results, offline or completed state: spot + title + description + actions.

`spot` (`no-data | no-results | offline | completed`, or `null`), `image` (authored illustration instead of the spot), `loading`, `title`, `body`, `action`, `secondaryAction`. 32px padding on `background-subtle` with a `border-subtle` edge, `radius-md`, centered; title `web-heading-s`, body `web-body-s`. Say what happened and the next step.
