# Card

Content container in four types: Basic, Interactive, Selected and the opt-in Poster.

`RA.Card` · 11c — Labels + Data

## Use

```jsx
<RA.Card title={…} />
```


## Props (CardProps)

| prop | type | note |
| --- | --- | --- |
| `type` | `"basic" \| "interactive" \| "selected" \| "poster"` |  |
| `title` * | `React.ReactNode` |  |
| `subtitle` | `React.ReactNode` |  |
| `badge` | `string` |  |
| `badgeStatus` | `string` |  |
| `body` | `React.ReactNode` |  |
| `tag` | `string` |  |
| `metadata` | `React.ReactNode` |  |
| `footer` | `React.ReactNode` |  |
| `action` | `string` |  |
| `menu` | `string` |  |
| `icon` | `string \| false` |  |
| `image` | `string` |  |
| `sticker` | `string` |  |
| `kicker` | `string` |  |
| `onClick` | `() => void` |  |
| `disabled` | `boolean` |  |

## Guidance

Content container in four types: Basic, Interactive, Selected and the opt-in Poster.

### Props
`type` (`basic | interactive | selected | poster`), `title`, `subtitle`, `badge` + `badgeStatus`, `body`, `tag`, `metadata`, `footer`, `action`, `menu` (adds a ghost icon button with that label), `icon` (glyph name or `false`), `onClick`, `disabled`. Poster adds `image`, `sticker`, `kicker`.

### Anatomy
24px padding, 16px gaps, `radius-lg`, `background-surface` with a 1px `border-default`. Header: 56px `background-interactive` visual (`radius-md`), 4px-gap heading stack (status badge, 20/25 SemiBold title, `web-body-s` subtitle). Footer sits under a `border-subtle` divider.

### States
Interactive hover lifts to `surface-raised` with `border-strong` and a soft 0 8 20 shadow in `effect-graphic-shadow`; pressed moves to `background-interactive` with an inset shadow; focus-visible draws a 2px `focus-ring` outline. **Selected** adds the 4px `action-primary` rail, an `action-primary` border, a 50% primary divider and an explicit "Selected" label — never color alone.

### Poster
For campaigns and editorial moments only: lime paper (#d7ff57, poster-only), 4px Ink border, 12px hard graphic shadow, illustration panel, a magenta sticker label with Ink 950 copy (5.75:1; Bone on magenta is only 3.05:1) and Barlow Condensed display type. Keep its actions standard; one poster per view.
