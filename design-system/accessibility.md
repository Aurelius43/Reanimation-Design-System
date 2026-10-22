# Accessibility

Bone Maestro targets **WCAG 2.2 AA** as the baseline and applies AAA guidance where practical.

- **Contrast:** normal text ≥4.5:1, large text ≥3:1, essential control boundaries and state indicators ≥3:1 against adjacent colors — in Dark and Light. Measured pairs: primary text on canvas 17.57:1 Dark / 14.67:1 Light; secondary on surface 9.02 / 10.88; muted on surface 4.56 / 5.08; on-primary on action 16.08 / 7.08; `border-strong` on surface 3.01 / 3.38. Token pairs do not certify a whole screen; retest every background and state.
- **Never color alone:** pair status and mutation colors with an explicit label and an icon or shape. Avoid hue-only distinctions.
- **Targets:** at least 44×44 pt on iOS and iPadOS (48dp Android). On web the WCAG minimum is 24×24 CSS px; prefer 44×44 for primary actions and dense controls. Visible icons may be smaller inside the target.
- **Focus:** a visible focus-visible ring on every interactive element; logical DOM order matching visual order; no focus on disabled or decorative items. Dialogs set initial focus, contain keyboard interaction, support Escape/cancel and restore focus on close.
- **Names and states:** meaningful role, name, value and state; rotor-friendly headings and landmarks; concise labels; decorative art hidden from assistive tech. Tooltips supplement labels, never replace them.
- **Text:** use native text styles and Dynamic Type; support 200% web zoom and the largest accessibility sizes without clipping. Let labels and errors wrap; never hide the only action behind a fixed height.
- **Motion:** static alternatives for pulse, spin, shimmer, parallax and autoplay that keep meaning and completion feedback.
- **Errors:** identify the field, explain the problem, give recovery guidance, associate the message programmatically and preserve the user's input.
- **Async status:** announce important changes without flooding; Emergency may use assertive priority once.
- **Release check per changed family:** default, pressed, disabled, focus, loading and error states; Dark + Light; long text; touch and keyboard; VoiceOver or screen reader; one real flow. Track Pass / Fail / Not checked.
