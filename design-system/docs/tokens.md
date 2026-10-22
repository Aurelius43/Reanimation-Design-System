# Tokens

Every token of the system, a section per group: Palette ramps and brand — 186 tokens; Type styles, families, font files; Spacing — 13 tokens; Radius — 7 tokens; Shadow — 10 tokens; Size — 17 tokens; Stroke — 2 tokens; Duration — 5 tokens; Platform — 3 tokens.

## Color · Palette ramps and brand

### Use

```css
/* in a page’s CSS, in the dark theme: the token’s name, with its value from the same row of the table below as the fallback, so the page draws whether or not it links tokens.css */
color: var(--ra-core-color-ink-50, #f4f6f8);
/* a page in another theme: link or inline tokens.css, put data-theme="light" on the element that wraps the page, and take each fallback from the light column; where tokens.css cannot be linked, the value alone, from that theme’s column */
color: var(--ra-core-color-ink-50, #f4f6f8);
/* on a slide, in a chart’s options, or anywhere else var() cannot go, and in an SVG attribute such as fill, which not every browser reads var() in: the value alone, from the column of the theme it is in */
color: #f4f6f8;
```

### Tokens (186)

| token | dark | light | usage |
| --- | --- | --- | --- |
| `--ra-core-color-ink-50` | #f4f6f8 | #f4f6f8 | Ink 50 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-ink-100` | #e7ebef | #e7ebef | Ink 100 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-ink-200` | #c9d0d8 | #c9d0d8 | Ink 200 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-ink-300` | #a6b0bc | #a6b0bc | Ink 300 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-ink-400` | #7f8c9a | #7f8c9a | Ink 400 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-ink-500` | #5c6875 | #5c6875 | Ink 500 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-ink-600` | #444d58 | #444d58 | Ink 600 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-ink-700` | #303741 | #303741 | Ink 700 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-ink-800` | #20252d | #20252d | Ink 800 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-ink-850` | #181c22 | #181c22 | Ink 850 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-ink-900` | #12151a | #12151a | Ink 900 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-ink-950` | #0b0d10 | #0b0d10 | Ink 950 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-bone-50` | #f7f3ea | #f7f3ea | Bone 50 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-bone-100` | #ede5d7 | #ede5d7 | Bone 100 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-bone-200` | #ddd2c0 | #ddd2c0 | Bone 200 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-bone-300` | #cabaa4 | #cabaa4 | Bone 300 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-bone-400` | #b39e84 | #b39e84 | Bone 400 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-bone-500` | #978068 | #978068 | Bone 500 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-bone-600` | #78644f | #78644f | Bone 600 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-bone-700` | #5b4a3a | #5b4a3a | Bone 700 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-bone-800` | #40342a | #40342a | Bone 800 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-bone-900` | #29221c | #29221c | Bone 900 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-bone-950` | #171411 | #171411 | Bone 950 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-toxic-50` | #f8ffe8 | #f8ffe8 | Toxic 50 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-toxic-100` | #edffc5 | #edffc5 | Toxic 100 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-toxic-200` | #dcff91 | #dcff91 | Toxic 200 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-toxic-300` | #caff5d | #caff5d | Toxic 300 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-toxic-400` | #beff3d | #beff3d | Toxic 400 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-toxic-500` | #b7ff2a | #b7ff2a | Toxic 500 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-toxic-600` | #91db18 | #91db18 | Toxic 600 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-toxic-700` | #6db20f | #6db20f | Toxic 700 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-toxic-800` | #4d8610 | #4d8610 | Toxic 800 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-toxic-900` | #335c0c | #335c0c | Toxic 900 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-toxic-950` | #264508 | #264508 | Toxic 950 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-slime-50` | #f0ffec | #f0ffec | Slime 50 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-slime-100` | #d9ffd0 | #d9ffd0 | Slime 100 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-slime-200` | #b4ffa2 | #b4ffa2 | Slime 200 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-slime-300` | #91fb77 | #91fb77 | Slime 300 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-slime-400` | #7cf85a | #7cf85a | Slime 400 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-slime-500` | #70f540 | #70f540 | Slime 500 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-slime-600` | #52ce2f | #52ce2f | Slime 600 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-slime-700` | #3c9f24 | #3c9f24 | Slime 700 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-slime-800` | #2c741e | #2c741e | Slime 800 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-slime-900` | #1d4d16 | #1d4d16 | Slime 900 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-magenta-50` | #fff0f9 | #fff0f9 | Magenta 50 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-magenta-100` | #ffd6ee | #ffd6ee | Magenta 100 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-magenta-200` | #ffaddd | #ffaddd | Magenta 200 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-magenta-300` | #ff7bcb | #ff7bcb | Magenta 300 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-magenta-400` | #ff4db8 | #ff4db8 | Magenta 400 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-magenta-500` | #ff2daa | #ff2daa | Magenta 500 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-magenta-600` | #d91c8c | #d91c8c | Magenta 600 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-magenta-700` | #ad176f | #ad176f | Magenta 700 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-magenta-800` | #821354 | #821354 | Magenta 800 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-magenta-900` | #5c103c | #5c103c | Magenta 900 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-purple-50` | #f6f1ff | #f6f1ff | Purple 50 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-purple-100` | #e9ddff | #e9ddff | Purple 100 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-purple-200` | #d4bdff | #d4bdff | Purple 200 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-purple-300` | #bc99ff | #bc99ff | Purple 300 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-purple-400` | #a778ff | #a778ff | Purple 400 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-purple-500` | #8e5cff | #8e5cff | Purple 500 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-purple-600` | #7146d9 | #7146d9 | Purple 600 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-purple-700` | #5735ad | #5735ad | Purple 700 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-purple-800` | #402984 | #402984 | Purple 800 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-purple-900` | #2b1d5c | #2b1d5c | Purple 900 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-orange-50` | #fff4eb | #fff4eb | Orange 50 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-orange-100` | #ffe3cc | #ffe3cc | Orange 100 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-orange-200` | #ffc89a | #ffc89a | Orange 200 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-orange-300` | #ffaa66 | #ffaa66 | Orange 300 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-orange-400` | #ff8e3b | #ff8e3b | Orange 400 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-orange-500` | #ff7a1a | #ff7a1a | Orange 500 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-orange-600` | #d9600e | #d9600e | Orange 600 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-orange-700` | #ad490b | #ad490b | Orange 700 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-orange-800` | #82370c | #82370c | Orange 800 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-orange-900` | #59260a | #59260a | Orange 900 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-cyan-50` | #ecfdff | #ecfdff | Cyan 50 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-cyan-100` | #cff9fc | #cff9fc | Cyan 100 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-cyan-200` | #9ef1f6 | #9ef1f6 | Cyan 200 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-cyan-300` | #71e8f0 | #71e8f0 | Cyan 300 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-cyan-400` | #50e1eb | #50e1eb | Cyan 400 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-cyan-500` | #38dce8 | #38dce8 | Cyan 500 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-cyan-600` | #24b8c4 | #24b8c4 | Cyan 600 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-cyan-700` | #1d909a | #1d909a | Cyan 700 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-cyan-800` | #1a6b72 | #1a6b72 | Cyan 800 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-cyan-900` | #14484d | #14484d | Cyan 900 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-blood-50` | #fff1f1 | #fff1f1 | Blood 50 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-blood-100` | #ffdadb | #ffdadb | Blood 100 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-blood-200` | #ffb5b7 | #ffb5b7 | Blood 200 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-blood-300` | #f9898d | #f9898d | Blood 300 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-blood-400` | #ef6267 | #ef6267 | Blood 400 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-blood-500` | #e5484d | #e5484d | Blood 500 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-blood-600` | #c9373c | #c9373c | Blood 600 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-blood-700` | #a22c31 | #a22c31 | Blood 700 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-blood-800` | #792428 | #792428 | Blood 800 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-blood-900` | #531b1e | #531b1e | Blood 900 primitive. Raw palette value: bind product UI through semantic roles. |
| `--ra-core-color-neutral-050-a72` | #f7f3eab8 | #f7f3eab8 | Legacy alpha neutral (bone 50 at 72%). Compatibility only; retest over the real surface. |
| `--ra-core-color-neutral-050-a56` | #f7f3ea8f | #f7f3ea8f | Legacy alpha neutral (bone 50 at 56%). Compatibility only; retest over the real surface. |
| `--ra-core-color-neutral-050-a16` | #f7f3ea29 | #f7f3ea29 | Legacy alpha neutral (bone 50 at 16%). Compatibility only; retest over the real surface. |
| `--ra-core-color-neutral-050-a08` | #f7f3ea14 | #f7f3ea14 | Legacy alpha neutral (bone 50 at 08%). Compatibility only; retest over the real surface. |
| `--ra-semantic-color-background-canvas` | #0b0d10 | #ede5d7 | Screen canvas: the ground every surface sits on. |
| `--ra-semantic-color-background-subtle` | #12151a | #ddd2c0 | Recessed regions, read-only and disabled field fills, tooltips. |
| `--ra-semantic-color-background-surface` | #181c22 | #f7f3ea | Default content surface: cards, fields, panels on the canvas. |
| `--ra-semantic-color-background-surface-raised` | #20252d | #ddd2c0 | Elevated content: secondary buttons, hovered fields, raised cards. |
| `--ra-semantic-color-background-interactive` | #303741 | #cabaa4 | Control containers: pressed secondary and ghost states, neutral tags, hovered switch tracks. |
| `--ra-semantic-color-text-primary` | #f7f3ea | #171411 | Key content and labels on canvas, surface and surface-raised (17.57:1 on canvas in Dark, 14.67:1 in Light). |
| `--ra-semantic-color-text-secondary` | #cabaa4 | #40342a | Supporting copy, helper text and placeholders on surface (9.02:1 Dark, 10.88:1 Light). |
| `--ra-semantic-color-text-muted` | #978068 | #78644f | Lowest-emphasis text and disabled labels on surface (4.56:1 Dark, 5.08:1 Light). Never smaller than 12px. |
| `--ra-semantic-color-border-default` | #303741 | #cabaa4 | Decorative separators only. Not an essential boundary. |
| `--ra-semantic-color-border-subtle` | #20252d | #ddd2c0 | Quiet decorative dividers and disabled outlines. |
| `--ra-semantic-color-action-primary` | #b7ff2a | #335c0c | Toxic primary action fill: primary buttons, checked checkboxes, on switches. Pair with action-on-primary. |
| `--ra-semantic-color-action-on-primary` | #0b0d10 | #f7f3ea | Content on action-primary (16.08:1 Dark, 7.08:1 Light). |
| `--ra-semantic-color-focus-ring` | #38dce8 | #171411 | Keyboard focus outline, 2px, offset outside the control. Keep distinct from selection. |
| `--ra-semantic-color-status-success` | #70f540 | #2c741e | Completed outcome indicator (dot, border, icon). Always with a label. |
| `--ra-semantic-color-status-warning` | #ff7a1a | #82370c | Attention-required indicator. Always with a label. |
| `--ra-semantic-color-status-danger` | #e5484d | #a22c31 | Failure or destructive-risk indicator and error field borders. Use text-danger for copy. |
| `--ra-semantic-color-status-information` | #38dce8 | #1a6b72 | Neutral guidance indicator. |
| `--ra-semantic-color-mutation-live` | #b7ff2a | #4d8610 | Mutation Layer: active performance. Never infer readiness from green alone. |
| `--ra-semantic-color-mutation-selected` | #ff2daa | #ad176f | Mutation Layer: current selection. |
| `--ra-semantic-color-mutation-connected` | #38dce8 | #1a6b72 | Mutation Layer: device link established. |
| `--ra-semantic-color-mutation-creative` | #8e5cff | #5735ad | Mutation Layer: creation tools. |
| `--ra-semantic-color-mutation-special` | #ff7a1a | #82370c | Mutation Layer: rare signature emphasis. |
| `--ra-semantic-color-text-inverse` | #0b0d10 | #f7f3ea | Text on live/inverted fills such as feedback-live-surface. |
| `--ra-semantic-color-text-link` | #b7ff2a | #335c0c | Inline links on canvas and surface. |
| `--ra-semantic-color-border-strong` | #5c6875 | #978068 | Essential control boundaries: fields, checkboxes, radios, switch tracks, secondary buttons (3.01:1 Dark, 3.38:1 Light on surface). |
| `--ra-semantic-color-border-interactive` | #b7ff2a | #4d8610 | Selected or interactive outlines (selected icon buttons). |
| `--ra-semantic-color-action-primary-hover` | #beff3d | #264508 | Primary action hover (pointer only). |
| `--ra-semantic-color-action-primary-pressed` | #91db18 | #0b0d10 | Primary action pressed and selected fill. |
| `--ra-semantic-color-action-secondary` | #8e5cff | #5735ad | Secondary expressive action accent (purple). |
| `--ra-semantic-color-overlay-scrim` | #0b0d10 | #171411 | Dims content behind dialogs and sheets (apply with opacity over real content). |
| `--ra-semantic-color-overlay-surface` | #20252d | #f7f3ea | Foreground surface for overlays, menus and popovers. |
| `--ra-semantic-color-icon-primary` | #f7f3ea | #171411 | Icons beside primary content. |
| `--ra-semantic-color-icon-secondary` | #cabaa4 | #40342a | Supporting icons, field adornments. |
| `--ra-semantic-color-icon-muted` | #978068 | #78644f | Low-emphasis and disabled icons. |
| `--ra-semantic-color-icon-interactive` | #b7ff2a | #4d8610 | Actionable icons; keep the accessible name. |
| `--ra-semantic-color-elevation-shadow-1` | #00000024 | #0000001f | Shadow color for elevation-1. |
| `--ra-semantic-color-elevation-shadow-2` | #0000002e | #00000029 | Shadow color for elevation-2. |
| `--ra-semantic-color-elevation-shadow-3` | #00000038 | #00000033 | Shadow color for elevation-3. |
| `--ra-semantic-color-effect-graphic-shadow` | #0b0d10e6 | #0b0d10d9 | Hard comic shadow ink for stickers, badges and posters; not functional elevation. |
| `--ra-semantic-color-effect-toxic-glow-subtle` | #b7ff2a47 | #6db20f38 | Glow for meaningful Connected, Live or Active states; never replaces focus or labels. |
| `--ra-semantic-color-effect-toxic-glow-medium` | #b7ff2a70 | #6db20f52 | Emphatic glow for one high-priority state per view. |
| `--ra-semantic-color-effect-magenta-glow-subtle` | #ff2daa4c | #ad176f3d | Glow for Selected state or singular branded emphasis. |
| `--ra-semantic-color-effect-print-offset` | #ff2daac7 | #ad176fb2 | Print-registration offset for display type and decorative graphics only. |
| `--ra-semantic-color-action-destructive-default` | #a22c31 | #a22c31 | Destructive button fill; pair with content-on-dark-accent. |
| `--ra-semantic-color-content-on-dark-accent` | #f7f3ea | #f7f3ea | Invariant light content on deliberately dark accent fills (destructive, expressive, strong accents) in both themes. |
| `--ra-semantic-color-action-destructive-hover` | #c9373c | #c9373c | Destructive hover fill. |
| `--ra-semantic-color-action-destructive-pressed` | #792428 | #792428 | Destructive pressed fill. |
| `--ra-semantic-color-action-expressive-hover` | #a778ff | #5735ad | Expressive accent hover (decorative use; not a text ground). |
| `--ra-semantic-color-action-expressive-pressed` | #7146d9 | #402984 | Expressive accent pressed (decorative use). |
| `--ra-semantic-color-accent-selected-strong` | #ad176f | #ad176f | Magenta tag fill; pair with content-on-dark-accent. |
| `--ra-semantic-color-accent-creative-strong` | #5735ad | #5735ad | Purple tag fill; pair with content-on-dark-accent. |
| `--ra-semantic-color-accent-special-strong` | #82370c | #82370c | Orange tag fill; pair with content-on-dark-accent. |
| `--ra-semantic-color-accent-information-strong` | #1a6b72 | #1a6b72 | Information tag fill; pair with content-on-dark-accent. |
| `--ra-semantic-color-accent-danger-strong` | #a22c31 | #a22c31 | Danger tag fill; pair with content-on-dark-accent. |
| `--ra-semantic-color-action-expressive-default-accessible` | #5735ad | #5735ad | Brand / Expressive button fill; pair with content-on-dark-accent. |
| `--ra-semantic-color-action-expressive-hover-accessible` | #7146d9 | #5735ad | Brand / Expressive button hover fill. |
| `--ra-semantic-color-action-expressive-pressed-accessible` | #402984 | #402984 | Brand / Expressive button pressed fill. |
| `--ra-color-text-danger` | #ef6267 | #a22c31 | Readable error copy on canvas or surface. Use status-danger for indicators, not text. |
| `--ra-color-feedback-live-surface` | #b7ff2a | #335c0c | Live feedback background; pair with text-inverse. Distinct from mutation-live. |
| `--ra-semantic-color-android-state-text-primary-8` | #f7f3ea14 | #17141114 | Android state-layer overlay (text-primary at 8%). Android adapter only. |
| `--ra-semantic-color-android-state-text-primary-10` | #f7f3ea1a | #1714111a | Android state-layer overlay (text-primary at 10%). Android adapter only. |
| `--ra-semantic-color-android-state-action-on-primary-8` | #0b0d1014 | #f7f3ea14 | Android state-layer overlay (action-on-primary at 8%). Android adapter only. |
| `--ra-semantic-color-android-state-action-on-primary-10` | #0b0d101a | #f7f3ea1a | Android state-layer overlay (action-on-primary at 10%). Android adapter only. |
| `--ra-semantic-color-android-state-text-primary-12` | #f7f3ea1f | #1714111f | Android state-layer overlay (text-primary at 12%). Android adapter only. |
| `--ra-semantic-color-android-state-action-primary-8` | #b7ff2a14 | #335c0c14 | Android state-layer overlay (action-primary at 8%). Android adapter only. |
| `--ra-semantic-color-android-state-action-primary-10` | #b7ff2a1a | #335c0c1a | Android state-layer overlay (action-primary at 10%). Android adapter only. |
| `--ra-semantic-color-android-state-background-surface-10` | #181c221a | #f7f3ea1a | Android state-layer overlay (background-surface at 10%). Android adapter only. |
| `--ra-component-button-primary-background-default` | #b7ff2a | #335c0c | Component contract: button primary background default. |
| `--ra-component-button-primary-content-default` | #0b0d10 | #f7f3ea | Component contract: button primary content default. |
| `--ra-component-button-secondary-background-default` | #20252d | #ddd2c0 | Component contract: button secondary background default. |
| `--ra-component-button-secondary-content-default` | #f7f3ea | #171411 | Component contract: button secondary content default. |
| `--ra-component-button-secondary-border-default` | #303741 | #cabaa4 | Component contract: button secondary border default. |
| `--ra-component-button-focus-ring` | #38dce8 | #171411 | Component contract: button focus ring. |
| `--ra-component-field-background-default` | #181c22 | #f7f3ea | Component contract: field background default. |
| `--ra-component-field-content-default` | #f7f3ea | #171411 | Component contract: field content default. |
| `--ra-component-field-content-placeholder` | #978068 | #78644f | Component contract: field content placeholder. |
| `--ra-component-field-border-default` | #5c6875 | #978068 | Component contract: field border default. |
| `--ra-component-field-border-focus` | #38dce8 | #171411 | Component contract: field border focus. |
| `--ra-component-status-live-background` | #b7ff2a | #4d8610 | Component contract: status live background. |
| `--ra-component-status-live-content` | #0b0d10 | #f7f3ea | Component contract: status live content. |
| `--ra-component-button-content-disabled` | #978068 | #78644f | Component contract: button content disabled. |
| `--ra-component-button-secondary-background-hover` | #303741 | #cabaa4 | Component contract: button secondary background hover. |
| `--ra-component-button-ghost-background-hover` | #181c22 | #f7f3ea | Component contract: button ghost background hover. |
| `--ra-component-button-background-disabled` | #181c22 | #f7f3ea | Component contract: button background disabled. |
| `--ra-component-field-background-disabled` | #12151a | #ddd2c0 | Component contract: field background disabled. |
| `--ra-component-field-border-error` | #e5484d | #a22c31 | Component contract: field border error. |
| `--ra-component-field-content-error` | #ef6267 | #a22c31 | Component contract: field content error. |
| `--ra-icon-content` | #f7f3ea | #171411 | Monochrome icon content. Standard context shown; Primary uses action-on-primary, Accent content-on-dark-accent, Disabled text-muted. |

## Type

Set text in one of the styles below: write its values from the Styles and Families tables, or, on a page that links or inlines tokens.css, prefer its variable, where the Styles table’s CSS column gives one.

### Use

```css
/* any surface: a style’s values from the Styles and Families tables */
font: 700 72px/72px "Geist", system-ui, sans-serif;
/* a page that links or inlines tokens.css: prefer the variables, so that a change to tokens.css reaches the page */
font: var(--text-web-display-xl);
font-family: var(--font-sans);   /* the family alone */
```

### Styles

| style | CSS | size / line, italic, letter spacing | weight | family | usage |
| --- | --- | --- | --- | --- | --- |
| `web-display-xl` | `.web-display-xl`, `--text-web-display-xl` | 72px / 72px | 700 | `sans` | Primary hero statements; use sparingly. |
| `web-display-l` | `.web-display-l`, `--text-web-display-l` | 56px / 58px | 700 | `sans` | Secondary heroes and campaign headings. |
| `web-heading-xl` | `.web-heading-xl`, `--text-web-heading-xl` | 40px / 44px | 600 | `sans` | Top-level page headings and major sections. |
| `web-heading-l` | `.web-heading-l`, `--text-web-heading-l` | 32px / 38px | 600 | `sans` | Primary section headings and panel titles. |
| `web-heading-m` | `.web-heading-m`, `--text-web-heading-m` | 24px / 30px | 600 | `sans` | Subsections, feature titles and modals. |
| `web-heading-s` | `.web-heading-s`, `--text-web-heading-s` | 20px / 26px | 600 | `sans` | Cards, compact sections and dense UI. |
| `web-body-l` | `.web-body-l`, `--text-web-body-l` | 18px / 28px | 400 | `sans` | Lead paragraphs and spacious long-form content. |
| `web-body-m` | `.web-body-m`, `--text-web-body-m` | 16px / 24px | 400 | `sans` | Default interface and content body copy; field values. |
| `web-body-s` | `.web-body-s`, `--text-web-body-s` | 14px / 20px | 400 | `sans` | Secondary copy, helper text and metadata. |
| `web-label-l` | `.web-label-l`, `--text-web-label-l` | 16px / 20px | 500 | `sans` | Large controls, navigation and prominent labels. |
| `web-label-m` | `.web-label-m`, `--text-web-label-m` | 14px / 18px | 500 | `sans` | Default controls, tabs, fields and buttons. |
| `web-label-s` | `.web-label-s`, `--text-web-label-s` | 12px / 16px | 600 | `sans` | Badges, tags, overlines and small-button labels. |
| `web-mono` | `.web-mono`, `--text-web-mono` | 13px / 18px | 400 | `mono` | Timing data, device IDs, logs and code. |
| `expressive-display` | `.expressive-display`, `--text-expressive-display` | 96px / 82px, letter-spacing -0.02em | 900 | `display` | Poster language for branded moments: 1–4 uppercase words. Never navigation, controls, body or data. |
| `expressive-kicker` | `.expressive-kicker`, `--text-expressive-kicker` | 18px / 18px, letter-spacing 0.06em | 700 | `display` | Uppercase poster kicker and short utility lines. |
| `ios-display-xl` | `.ios-display-xl`, `--text-ios-display-xl` | 34px / 41px | 400 | `ios` | .largeTitle. Reference size only; ship Dynamic Type. |
| `ios-heading-xl` | `.ios-heading-xl`, `--text-ios-heading-xl` | 28px / 34px | 400 | `ios` | .title1. |
| `ios-heading-l` | `.ios-heading-l`, `--text-ios-heading-l` | 22px / 28px | 400 | `ios` | .title2. |
| `ios-heading-m` | `.ios-heading-m`, `--text-ios-heading-m` | 20px / 25px | 400 | `ios` | .title3. |
| `ios-label-strong` | `.ios-label-strong`, `--text-ios-label-strong` | 17px / 22px | 600 | `ios` | .headline. |
| `ios-body-m` | `.ios-body-m`, `--text-ios-body-m` | 17px / 22px | 400 | `ios` | .body. |
| `ios-body-s` | `.ios-body-s`, `--text-ios-body-s` | 16px / 21px | 400 | `ios` | .callout. |
| `ios-label-m` | `.ios-label-m`, `--text-ios-label-m` | 15px / 20px | 400 | `ios` | .subheadline. |
| `ios-meta-m` | `.ios-meta-m`, `--text-ios-meta-m` | 13px / 18px | 400 | `ios` | .footnote. |
| `ios-caption-m` | `.ios-caption-m`, `--text-ios-caption-m` | 12px / 16px | 400 | `ios` | .caption1. |
| `ios-caption-s` | `.ios-caption-s`, `--text-ios-caption-s` | 11px / 13px | 400 | `ios` | .caption2. |
| `android-heading-m` | `.android-heading-m`, `--text-android-heading-m` | 24px / 32px | 400 | `android` | Android adapter headings. |
| `android-body-m` | `.android-body-m`, `--text-android-body-m` | 16px / 24px | 400 | `android` | Android body copy. |
| `android-body-s` | `.android-body-s`, `--text-android-body-s` | 14px / 20px | 400 | `android` | Android secondary copy. |
| `android-label-m` | `.android-label-m`, `--text-android-label-m` | 14px / 20px | 500 | `android` | Android controls and labels. |
| `adaptive-nav-ltr` | `.adaptive-nav-ltr`, `--text-adaptive-nav-ltr` | 16px / 1.45 | 400 | `sans` | Navigation labels, LTR, default text size. |
| `adaptive-nav-ltr-enlarged` | `.adaptive-nav-ltr-enlarged`, `--text-adaptive-nav-ltr-enlarged` | 32px / 1.45 | 400 | `sans` | 2× layout stress specimen; runtime uses platform text scaling. |
| `adaptive-nav-rtl` | `.adaptive-nav-rtl`, `--text-adaptive-nav-rtl` | 16px / 1.45 | 400 | `arabic` | Navigation labels, RTL. Arabic copy needs localization review. |
| `adaptive-nav-rtl-enlarged` | `.adaptive-nav-rtl-enlarged`, `--text-adaptive-nav-rtl-enlarged` | 32px / 1.45 | 400 | `arabic` | 2× RTL stress specimen. |

### Families

| family | CSS variable | stack |
| --- | --- | --- |
| `sans` | `--font-sans` | `"Geist", system-ui, sans-serif` |
| `mono` | `--font-mono` | `"Geist Mono", ui-monospace, monospace` |
| `display` | `--font-display` | `"Barlow Condensed", "Arial Narrow", sans-serif` |
| `ios` | `--font-ios` | `-apple-system, "SF Pro Text", "SF Pro", system-ui, sans-serif` |
| `android` | `--font-android` | `"Roboto", system-ui, sans-serif` |
| `arabic` | `--font-arabic` | `"Noto Sans Arabic", "Geist", sans-serif` |

## Spacing

4pt primitive, 8pt rhythm. Named steps only.

### Use

```css
/* any surface: a token’s value from the table below */
padding: 0px;
/* a page that links or inlines tokens.css: prefer the token’s name, so that a change to tokens.css reaches the page */
padding: var(--ra-core-space-0);
```

### Tokens (13)

| token | value | usage |
| --- | --- | --- |
| `--ra-core-space-0` | 0px | No gap. 4pt grid; never use in-between values. |
| `--ra-core-space-1` | 4px | Micro detail (4). 4pt grid; never use in-between values. |
| `--ra-core-space-2` | 8px | Compact content gaps; button icon-label gap; control vertical padding. 4pt grid; never use in-between values. |
| `--ra-core-space-3` | 12px | Small-button horizontal padding; field icon gap. 4pt grid; never use in-between values. |
| `--ra-core-space-4` | 16px | Component internal padding; medium-button horizontal padding. 4pt grid; never use in-between values. |
| `--ra-core-space-5` | 20px | Large-button horizontal padding. 4pt grid; never use in-between values. |
| `--ra-core-space-6` | 24px | Section padding inside panels. 4pt grid; never use in-between values. |
| `--ra-core-space-8` | 32px | Major group separation. 4pt grid; never use in-between values. |
| `--ra-core-space-10` | 40px | Large group separation. 4pt grid; never use in-between values. |
| `--ra-core-space-12` | 48px | Page-level spacing starts here. 4pt grid; never use in-between values. |
| `--ra-core-space-16` | 64px | Page rhythm. 4pt grid; never use in-between values. |
| `--ra-core-space-20` | 80px | Hero and page rhythm. 4pt grid; never use in-between values. |
| `--ra-core-space-24` | 96px | Largest page rhythm step. 4pt grid; never use in-between values. |

## Radius

Six named radii, no in-between values. 12–16px for most UI.

### Use

```css
/* any surface: a token’s value from the table below (--ra-core-radius-none: 0px) */
/* a page that links or inlines tokens.css: prefer var(--ra-core-radius-none), so that a change to tokens.css reaches the page */
```

### Tokens (7)

| token | value | usage |
| --- | --- | --- |
| `--ra-core-radius-none` | 0px | Square edges. |
| `--ra-core-radius-xs` | 4px | Compact technical details, checkboxes. |
| `--ra-core-radius-sm` | 8px | Tooltips, compact chips, focus outline on checkboxes. |
| `--ra-core-radius-md` | 12px | Default: buttons, fields, cards, controls. |
| `--ra-core-radius-lg` | 16px | Large cards and containers; focus outline around md controls. |
| `--ra-core-radius-xl` | 24px | Deliberate accent shapes. |
| `--ra-core-radius-pill` | 999px | Tags, badges, switch tracks. |

## Shadow

Elevation explains hierarchy; expressive effects create a moment. Pair depth with a surface or border change.

### Use

```css
/* any surface: a token’s value from the table below (--ra-elevation-0: none) */
/* a page that links or inlines tokens.css: prefer var(--ra-elevation-0), so that a change to tokens.css reaches the page */
```

### Tokens (10)

| token | value | usage |
| --- | --- | --- |
| `--ra-elevation-0` | none | Flush surfaces: canvas-level content and inset regions. |
| `--ra-elevation-1` | 0 1px 3px -1px #00000024 · light: 0 1px 3px -1px #0000001f | Raised cards and resting floating controls. Pair with a surface or border change. |
| `--ra-elevation-2` | 0 4px 10px -3px #0000002e · light: 0 4px 10px -3px #00000029 | Menus, popovers, sheets and active floating controls. |
| `--ra-elevation-3` | 0 8px 18px -6px #00000038 · light: 0 8px 18px -6px #00000033 | Dialogs and critical overlays. |
| `--ra-effect-graphic-shadow` | 6px 6px 0 0 #0b0d10e5 · light: 6px 6px 0 0 #0b0d10d9 | Sticker and poster framing on graphics; the Brand / Expressive button uses a 4px offset of this ink. |
| `--ra-effect-toxic-glow-subtle` | 0 0 8px 0 #b7ff2a47 · light: 0 0 8px 0 #6db20f38 | Limited Live, Connected or Active accent; never the only cue. |
| `--ra-effect-toxic-glow-medium` | 0 0 16px 2px #b7ff2a70 · light: 0 0 16px 2px #6db20f52 | One high-priority Live indicator or hero action per view. |
| `--ra-effect-magenta-glow-subtle` | 0 0 10px 0 #ff2daa4d · light: 0 0 10px 0 #ad176f3d | Selected state or singular branded emphasis, with a non-color cue. |
| `--ra-effect-print-offset` | 3px 3px 0 0 #ff2daac7 · light: 3px 3px 0 0 #ad176fb3 | Display type, labels, stamps and posters. Never body copy or controls. |
| `--ra-focus-glow` | 0 0 0 3px #b7ff2a · light: 0 0 0 3px #335c0c | Field focus halo: 3px spread drawn with the 2px action-primary border; the Light value follows action-primary. |

## Size

Visual size and interaction size are bound independently. Interaction targets stay 44×44 minimum.

### Use

```css
/* any surface: a token’s value from the table below (--ra-core-size-control-sm: 32px) */
/* a page that links or inlines tokens.css: prefer var(--ra-core-size-control-sm), so that a change to tokens.css reaches the page */
```

### Tokens (17)

| token | value | usage |
| --- | --- | --- |
| `--ra-core-size-control-sm` | 32px | Dense web control or compact visual treatment. Not a standalone iOS hit target. |
| `--ra-core-size-control-md` | 44px | Default primary control size: approximately 44px on web and the minimum iOS interaction target. |
| `--ra-core-size-interaction-min` | 44px | Minimum 44×44 interaction bounds for iOS and a strong target for primary web controls. |
| `--ra-core-size-control-lg` | 48px | Comfortable cross-platform control size for touch-forward interfaces. |
| `--ra-core-size-icon-sm` | 16px | Small visual icon bounds. |
| `--ra-core-size-icon-md` | 20px | Default visual icon bounds. |
| `--ra-core-size-icon-lg` | 24px | Large visual icon bounds. |
| `--ra-component-button-radius` | 12px | Component contract: button radius. Aliases ra-core-radius-md. |
| `--ra-component-button-height-web-md` | 44px | Component contract: button height web-md. Aliases ra-core-size-control-md. |
| `--ra-component-button-height-web-lg` | 48px | Component contract: button height web-lg. Aliases ra-core-size-control-lg. |
| `--ra-component-button-height-ios-md` | 44px | Component contract: button height ios-md. Aliases ra-core-size-interaction-min. |
| `--ra-component-button-height-ios-lg` | 48px | Component contract: button height ios-lg. Aliases ra-core-size-control-lg. |
| `--ra-component-field-radius` | 12px | Component contract: field radius. Aliases ra-core-radius-md. |
| `--ra-component-status-radius` | 999px | Component contract: status radius. Aliases ra-core-radius-pill. |
| `--ra-core-size-control-xs` | 28px | Compact visual control. Pair with a larger interaction target when touch-operated. |
| `--ra-core-size-control-xl` | 56px | Prominent or touch-first control size. |
| `--ra-component-textarea-min-height` | 128px | Component contract: textarea min-height. |

## Stroke

### Use

```css
/* any surface: a token’s value from the table below (--ra-core-stroke-1: 1px) */
/* a page that links or inlines tokens.css: prefer var(--ra-core-stroke-1), so that a change to tokens.css reaches the page */
```

### Tokens (2)

| token | value | usage |
| --- | --- | --- |
| `--ra-core-stroke-1` | 1px | Default hairline for field and control outlines. |
| `--ra-core-stroke-2` | 2px | 1px: field and control outlines. 2px: focus rings, error/selected borders, secondary buttons. |

## Duration

Use the shortest duration that makes the state legible. Reduced motion swaps to static states.

### Use

```css
/* any surface: a token’s value from the table below (--ra-core-motion-instant: 80ms) */
/* a page that links or inlines tokens.css: prefer var(--ra-core-motion-instant), so that a change to tokens.css reaches the page */
```

### Tokens (5)

| token | value | usage |
| --- | --- | --- |
| `--ra-core-motion-instant` | 80ms | Immediate feedback, tiny swaps; KILL. |
| `--ra-core-motion-fast` | 120ms | Selections, buttons, direct manipulation; CUE, LOCK. |
| `--ra-core-motion-standard` | 180ms | Default transitions; WAKE, PULSE loop. |
| `--ra-core-motion-expressive` | 240ms | Emphasized feedback; MUTATE. |
| `--ra-core-motion-hero` | 360ms | Rare branded or scene-level transitions; POSSESS. |

## Platform

BM / Platform collection; values shown for Web.

### Use

```css
/* any surface: a token’s value from the table below (--ra-platform-target-minimum: 44px) */
/* a page that links or inlines tokens.css: prefer var(--ra-platform-target-minimum), so that a change to tokens.css reaches the page */
```

### Tokens (3)

| token | value | usage |
| --- | --- | --- |
| `--ra-platform-target-minimum` | 44px | Web value. iOS 44pt · iPadOS 44pt · Android 48dp. |
| `--ra-platform-content-gutter` | 24px | Web value. iOS 16pt · iPadOS 24pt · Android 16dp. |
| `--ra-platform-type-body-size` | 16px | Web value. iOS 17pt · iPadOS 17pt · Android 16dp. |
