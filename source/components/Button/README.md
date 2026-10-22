Labeled command button in five style families — Primary, Secondary, Tertiary, Destructive and Brand / Expressive — at three sizes.

## Use
- **Primary** (`variant="primary"`): the one main action in a view. Toxic fill `ra-semantic-color-action-primary` with `ra-semantic-color-action-on-primary` text.
- **Secondary**: supporting actions. Raised surface with a 2px `border-strong` outline.
- **Tertiary**: low-emphasis actions in dense UI; no container until hover.
- **Destructive**: deletes and stops. `action-destructive-*` fills with `content-on-dark-accent`. Confirm proportionately.
- **Brand / Expressive** (`variant="expressive"`): rare signature moments only. Accessible purple fill with the 4px graphic-shadow offset. Never more than one per view.

## Props
- `variant`: `primary | secondary | tertiary | destructive | expressive` (default `primary`).
- `size`: `sm` (32px, `web-label-s`) · `md` (44px, `web-label-m`, default) · `lg` (48px).
- `leadingIcon`, `trailingIcon`: an `Icon` name (`arrow-right`, `add`…). 20px glyphs.
- `loading`: swaps the leading slot for the 20px loading indicator and sets `aria-busy`. Keep the label.
- `disabled`, plus any native `<button>` attribute.
- `children`: the label. Verb first, sentence case ("Start calibration").

## States
Hover is pointer-only (`action-primary-hover` etc.); pressed uses the `-pressed` roles. Focus draws a 2px `focus-ring` outline 2px outside the button. Disabled uses `button-background-disabled` + `button-content-disabled` at 72% opacity.

## Don't
- Don't place two Primary buttons side by side; demote one to Secondary.
- Don't use Brand / Expressive for routine form submits.
- Don't recolor with raw primitives; bind the component tokens.
