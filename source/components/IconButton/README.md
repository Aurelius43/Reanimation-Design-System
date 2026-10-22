Icon-only command in Primary, Secondary, Ghost and Destructive styles, with a 44×44 interaction target around a 32, 44 or 48px visual.

## Props
- `icon`: an `Icon` name. `label` (required): the accessible name and tooltip text — name the action ("Add scene"), not the glyph.
- `variant`: `primary | secondary | ghost | destructive` (default `secondary`).
- `size`: `sm` (32px visual) · `md` (44px) · `lg` (48px). The hit target never drops below `ra-core-size-interaction-min`.
- `selected`: makes it a toggle (`aria-pressed`). Selected adds a 2px `border-interactive` (Secondary, Ghost), `action-on-primary` (Primary) or `content-on-dark-accent` (Destructive) inner stroke.
- `disabled`.

## Rules
- Enlarge the interaction region, never the icon, to meet target size.
- A tooltip supplements the name; it is never the only label.
- Focus: 1px `focus-ring` outline 3px outside the 44px target.
