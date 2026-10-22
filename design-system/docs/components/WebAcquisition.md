# WebAcquisition

Web-only drop target around the Audio Import flow: Default, Drag active, Focused, Rejected.

`RA.WebAcquisition` · 31 — Audio Import + Validation

## Use

```jsx
<RA.WebAcquisition>…</RA.WebAcquisition>
```


## Props (WebAcquisitionProps)

| prop | type | note |
| --- | --- | --- |
| `state` | `"default" \| "drag" \| "focused" \| "rejected"` |  |
| `label` | `string` |  |
| `children` | `React.ReactNode` |  |

## Guidance

Web-only drop target around the Audio Import flow: Default, Drag active, Focused, Rejected.

`state`, `label`, children. A real labeled `input type="file"` stays available in every state; drag and drop feeds the same validation path. Drag active does not imply validation success. Rejected explains the supported types.
