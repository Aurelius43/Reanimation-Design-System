# ListRow

List row in three kinds — Browse (opens a detail), Selection (checkbox) and Setting (switch).

`RA.ListRow` · 11c — Labels + Data

## Use

```jsx
<RA.ListRow />
```


## Props (ListRowProps)

_No props of its own._

## Guidance

List row in three kinds — Browse (opens a detail), Selection (checkbox) and Setting (switch).

### Props
`kind` (`browse | selection | setting`), `title`, `secondary`, `metadata`, `status` (`{ tone, label }` renders a StatusBadge), `icon` (glyph name or `false`), `selected` (browse), `checked` / `defaultChecked` / `onChange` (selection, setting), `disabled`, `onClick`.

### Anatomy
10/12 padding, 12px gap, `radius-md`, `background-surface`, 1px `border-default`. 44px leading visual (`background-interactive`, 10px radius), content stack (`web-label-m` title, `web-body-s` secondary), 44px trailing target.

### States
Hover `surface-raised` + `border-strong`; pressed `background-interactive`; focus a 2px `focus-ring` outline. Browse **Selected** is persistent detail selection, not playback: `action-primary` border, 4px rail and filled leading visual. Disabled uses a dashed border at 72%.

Keep a row one target. Setting rows apply immediately — never use them to show device readiness.
