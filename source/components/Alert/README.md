Page-level message on a solid tone fill: Information, Success, Warning, Danger, Live.

`tone`, `title`, `description`, `action` + `onAction`, `onDismiss` + `dismissLabel`. 16px padding, `radius-md`, 12px gap; the fill is the `status-*` role (Live uses `action-primary`, which holds 4.5:1 under `text-inverse` in both themes) with `text-inverse` copy and a ringed tone glyph. Title `web-label-m`, description `web-body-s`; actions wrap on narrow layouts. Warning and Danger announce as alerts. Always name the state in the title — never rely on the fill.
