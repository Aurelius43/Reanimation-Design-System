# WorkspaceListDetail

List–detail workspace: Expanded (list and detail side by side), Compact list, or Compact detail with back navigation.

`RA.WorkspaceListDetail` · 12 — Patterns

## Use

```jsx
<RA.WorkspaceListDetail />
```


## Props (WorkspaceListDetailProps)

| prop | type | note |
| --- | --- | --- |
| `layout` | `"expanded" \| "compact-list" \| "compact-detail"` |  |
| `list` | `React.ReactNode` |  |
| `detail` | `React.ReactNode` |  |
| `backLabel` | `string` |  |

## Guidance

List–detail workspace: Expanded (list and detail side by side), Compact list, or Compact detail with back navigation.

`layout` (`expanded | compact-list | compact-detail`), `list`, `detail`, `backLabel`. Choose by available width, not device; selection persists across layout changes.
