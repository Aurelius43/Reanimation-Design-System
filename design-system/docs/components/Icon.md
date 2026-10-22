# Icon

Bone Maestro product glyphs as single-ink inline SVG that inherits currentColor.

`RA.Icon` · 09 — Iconography

## Use

```jsx
<RA.Icon name={…} />
```


## Props (IconProps)

| prop | type | note |
| --- | --- | --- |
| `name` * | `IconName` | Glyph name. |
| `size` | `16 \| 20 \| 24 \| number` | 16, 20 or 24. Default 20. |
| `label` | `string` | Accessible name; omit for decorative icons. |

_Also accepts: React.SVGAttributes<SVGSVGElement>._

## Guidance

Bone Maestro product glyphs as single-ink inline SVG that inherits `currentColor`.

### Props
`name` (see `RA.iconNames`: add, arrow-right, close, expand, folder-lock, radio, play, pause, stop, loading, connect/control/library/scenes in `-outline` and `-filled`), `size` (16, 20 or 24), `label` (gives it `role="img"`; omit for decorative icons, which are hidden from assistive tech).

### Rules
Use the four approved sizes; never scale one master. Use `-filled` for the selected navigation destination and `-outline` otherwise. Functional icons never get bones, blood or spikes. On iOS resolve the same names to SF Symbols; on web the geometry is Lucide-compatible with round caps and joins.
