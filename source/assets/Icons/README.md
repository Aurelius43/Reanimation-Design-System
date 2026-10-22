Product glyphs from the design file (Icon / Bone Maestro, Glyph / Bone Maestro, Icon / Navigation, Media / Pulse Puck glyphs), outlined as filled paths.

- Ink as exported: Bone 50 (`ra-core-color-bone-50`) for add, arrow-right, close, folder-lock, radio, stop and the navigation set; Bone 300 for expand; Toxic 500 for play and pause; Cyan 500 for loading. As `<img>` they cannot inherit color — use `RA.Icon` (currentColor) in product UI.
- Navigation destinations come in pairs: `connect`, `control`, `library`, `scenes` × `-outline` (rest) / `-filled` (selected).
- Sizes: add, arrow-right, folder-lock and radio are drawn on a 20px box; the rest on 24px.
- This set covers the system's own glyphs only. Everything else resolves to Lucide-compatible geometry on web and SF Symbols on iOS.
