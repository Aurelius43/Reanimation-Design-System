Compact pill label for categories and metadata in seven tones.

## Props
`tone`: `neutral | toxic | magenta | purple | orange | information | danger` (default `neutral`). `children`: one or two words.

## Tokens
Neutral: `background-interactive` + `text-primary`. Toxic: `action-primary` + `action-on-primary`. The others use the strong accent fills (`accent-selected-strong`, `accent-creative-strong`, `accent-special-strong`, `accent-information-strong`, `accent-danger-strong`) with `content-on-dark-accent` text. 24px tall, `radius-pill`, 8px side padding, `web-label-s`.

Tags are not interactive and never carry status alone — use StatusBadge for outcomes.
