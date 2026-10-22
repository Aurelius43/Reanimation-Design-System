# FilesAcquisition

Browse-first file acquisition: Native or Web × Empty, Review, Working, Partial, Complete, Cancelled.

`RA.FilesAcquisition` · 12 — Patterns

## Use

```jsx
<RA.FilesAcquisition>…</RA.FilesAcquisition>
```


## Props (FilesAcquisitionProps)

| prop | type | note |
| --- | --- | --- |
| `presentation` | `"native" \| "web"` |  |
| `state` | `"empty" \| "review" \| "working" \| "partial" \| "complete" \| "cancelled"` |  |
| `title` | `string` |  |
| `rules` | `string` |  |
| `accept` | `string` |  |
| `chooseLabel` | `string` |  |
| `children` | `React.ReactNode` |  |

## Guidance

Browse-first file acquisition: Native or Web × Empty, Review, Working, Partial, Complete, Cancelled.

`presentation` (`native | web`), `state`, `title`, `rules`, `accept`, `chooseLabel`, children (FileRows). Choose files is always available; Web adds a drop affordance that is only a visual target — drag active never implies validation or saved success. Native uses the system file picker.
