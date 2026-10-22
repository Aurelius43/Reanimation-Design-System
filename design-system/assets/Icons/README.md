# Assets · Icons

Files live in `design-system/assets/Icons/`. Copy them as-is; never redraw or approximate.

These are the glyphs `RA.Icon` and every `icon=` prop render — mount the component wherever the bundle runs; the files are for surfaces without it (a deck). Names: `api/icons.md`.

## Use

```html
<img src="design-system/assets/Icons/add.svg" alt="…">
```

## Usage notes

Product glyphs from the design file (Icon / Bone Maestro, Glyph / Bone Maestro, Icon / Navigation, Media / Pulse Puck glyphs), outlined as filled paths.

- Ink as exported: Bone 50 (`ra-core-color-bone-50`) for add, arrow-right, close, folder-lock, radio, stop and the navigation set; Bone 300 for expand; Toxic 500 for play and pause; Cyan 500 for loading. As `<img>` they cannot inherit color — use `RA.Icon` (currentColor) in product UI.
- Navigation destinations come in pairs: `connect`, `control`, `library`, `scenes` × `-outline` (rest) / `-filled` (selected).
- Sizes: add, arrow-right, folder-lock and radio are drawn on a 20px box; the rest on 24px.
- This set covers the system's own glyphs only. Everything else resolves to Lucide-compatible geometry on web and SF Symbols on iOS.

## Files

- `design-system/assets/Icons/add.svg`
- `design-system/assets/Icons/arrow-right.svg`
- `design-system/assets/Icons/close.svg`
- `design-system/assets/Icons/connect-filled.svg`
- `design-system/assets/Icons/connect-outline.svg`
- `design-system/assets/Icons/control-filled.svg`
- `design-system/assets/Icons/control-outline.svg`
- `design-system/assets/Icons/expand.svg`
- `design-system/assets/Icons/folder-lock.svg`
- `design-system/assets/Icons/library-filled.svg`
- `design-system/assets/Icons/library-outline.svg`
- `design-system/assets/Icons/loading.svg`
- `design-system/assets/Icons/pause.svg`
- `design-system/assets/Icons/play.svg`
- `design-system/assets/Icons/radio.svg`
- `design-system/assets/Icons/scenes-filled.svg`
- `design-system/assets/Icons/scenes-outline.svg`
- `design-system/assets/Icons/stop.svg`
