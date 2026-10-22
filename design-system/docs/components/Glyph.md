# Glyph

Lucide-compatible utility glyphs (2px stroke, round caps and joins, currentColor) for the web resolver, alongside the authored product glyphs in Icon.

`RA.Glyph` · 09 — Iconography

## Use

```jsx
<RA.Glyph name="…" />
```


## Props (GlyphProps)

| prop | type | note |
| --- | --- | --- |
| `name` * | `string` |  |
| `size` | `number` |  |
| `stroke` | `number` |  |

## Guidance

Lucide-compatible utility glyphs (2px stroke, round caps and joins, `currentColor`) for the web resolver, alongside the authored product glyphs in Icon.

`name`, `size` (16 / 20 / 24), `stroke`. Always `aria-hidden`; name the control that contains it. Components accept these names anywhere an icon is expected. On iOS resolve the same intent to SF Symbols.
