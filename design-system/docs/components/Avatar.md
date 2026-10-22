# Avatar

Static identity visual: Small 32, Medium 40, Large 64 · Initials, Image or Fallback.

`RA.Avatar` · 11c — Labels + Data

## Use

```jsx
<RA.Avatar />
```


## Props (AvatarProps)

| prop | type | note |
| --- | --- | --- |
| `size` | `"sm" \| "md" \| "lg"` |  |
| `initials` | `string` |  |
| `src` | `string` |  |
| `label` | `string` |  |

## Guidance

Static identity visual: Small 32, Medium 40, Large 64 · Initials, Image or Fallback.

`size` (`sm | md | lg`), `initials`, `src` (image clipped to the circle), `label` (accessible name; omit when the name is printed beside it). No content renders the "?" fallback.

`background-interactive` with a 1px `border-strong` ring; initials in SemiBold at `web-label-s` / `web-label-m` / `web-heading-m` sizes. Use approved Bone Maestro artwork or real photos only.
