Single choice within a group, with a 20px ring inside a 44×44 target.

## Props
`label`, `name` (required for grouping), `value`, `checked` / `defaultChecked`, `onChange`, `error`, `disabled`.

## Look
Unselected: `background-surface` with 1px `border-strong`. Selected: 2px `action-primary` ring with a 10px `action-primary` dot. Error: 2px `status-danger`. Focus: 1px `focus-ring` pill around the target.

Wrap groups in a `fieldset` with a `legend`. Keep at least two options; for one binary setting use Checkbox or Switch.
