// ReanimationTokens.swift
// Generated from tokens.json by the Reanimation Design System — do not edit.
// Theme: Bone Maestro. Source of truth: Claude Design. Regenerate instead of changing values here.

import SwiftUI
#if canImport(UIKit)
import UIKit
#endif

// MARK: - Color helpers

extension Color {
    /// A color that follows the system appearance: `dark` in Dark Mode, `light` in Light Mode.
    /// Reanimation is dark-first; most apps set `.preferredColorScheme(.dark)` at the root.
    static func raDynamic(dark: UInt32, darkAlpha: Double = 1, light: UInt32, lightAlpha: Double = 1) -> Color {
        #if canImport(UIKit)
        return Color(uiColor: UIColor { traits in
            traits.userInterfaceStyle == .light
                ? UIColor(raHex: light, alpha: lightAlpha)
                : UIColor(raHex: dark, alpha: darkAlpha)
        })
        #else
        return Color(raHex: dark, alpha: darkAlpha)
        #endif
    }

    init(raHex hex: UInt32, alpha: Double = 1) {
        self.init(.sRGB,
                  red: Double((hex >> 16) & 0xFF) / 255,
                  green: Double((hex >> 8) & 0xFF) / 255,
                  blue: Double(hex & 0xFF) / 255,
                  opacity: alpha)
    }
}

#if canImport(UIKit)
extension UIColor {
    convenience init(raHex hex: UInt32, alpha: Double = 1) {
        self.init(red: CGFloat((hex >> 16) & 0xFF) / 255,
                  green: CGFloat((hex >> 8) & 0xFF) / 255,
                  blue: CGFloat(hex & 0xFF) / 255,
                  alpha: CGFloat(alpha))
    }
}
#endif

// MARK: - Color

/// Semantic color roles. Bind UI to these (or `RAColor.Component`), never to `RAColor.Core` primitives.
public enum RAColor {
    /// Screen canvas: the ground every surface sits on.
    public static let backgroundCanvas = Color.raDynamic(dark: 0x0B0D10, light: 0xEDE5D7)
    /// Recessed regions, read-only and disabled field fills, tooltips.
    public static let backgroundSubtle = Color.raDynamic(dark: 0x12151A, light: 0xDDD2C0)
    /// Default content surface: cards, fields, panels on the canvas.
    public static let backgroundSurface = Color.raDynamic(dark: 0x181C22, light: 0xF7F3EA)
    /// Elevated content: secondary buttons, hovered fields, raised cards.
    public static let backgroundSurfaceRaised = Color.raDynamic(dark: 0x20252D, light: 0xDDD2C0)
    /// Control containers: pressed secondary and ghost states, neutral tags, hovered switch tracks.
    public static let backgroundInteractive = Color.raDynamic(dark: 0x303741, light: 0xCABAA4)
    /// Key content and labels on canvas, surface and surface-raised (17.57:1 on canvas in Dark, 14.67:1 in Light).
    public static let textPrimary = Color.raDynamic(dark: 0xF7F3EA, light: 0x171411)
    /// Supporting copy, helper text and placeholders on surface (9.02:1 Dark, 10.88:1 Light).
    public static let textSecondary = Color.raDynamic(dark: 0xCABAA4, light: 0x40342A)
    /// Lowest-emphasis text and disabled labels on surface (4.56:1 Dark, 5.08:1 Light). Never smaller than 12px.
    public static let textMuted = Color.raDynamic(dark: 0x978068, light: 0x78644F)
    /// Decorative separators only. Not an essential boundary.
    public static let borderDefault = Color.raDynamic(dark: 0x303741, light: 0xCABAA4)
    /// Quiet decorative dividers and disabled outlines.
    public static let borderSubtle = Color.raDynamic(dark: 0x20252D, light: 0xDDD2C0)
    /// Toxic primary action fill: primary buttons, checked checkboxes, on switches. Pair with action-on-primary.
    public static let actionPrimary = Color.raDynamic(dark: 0xB7FF2A, light: 0x335C0C)
    /// Content on action-primary (16.08:1 Dark, 7.08:1 Light).
    public static let actionOnPrimary = Color.raDynamic(dark: 0x0B0D10, light: 0xF7F3EA)
    /// Keyboard focus outline, 2px, offset outside the control. Keep distinct from selection.
    public static let focusRing = Color.raDynamic(dark: 0x38DCE8, light: 0x171411)
    /// Completed outcome indicator (dot, border, icon). Always with a label.
    public static let statusSuccess = Color.raDynamic(dark: 0x70F540, light: 0x2C741E)
    /// Attention-required indicator. Always with a label.
    public static let statusWarning = Color.raDynamic(dark: 0xFF7A1A, light: 0x82370C)
    /// Failure or destructive-risk indicator and error field borders. Use text-danger for copy.
    public static let statusDanger = Color.raDynamic(dark: 0xE5484D, light: 0xA22C31)
    /// Neutral guidance indicator.
    public static let statusInformation = Color.raDynamic(dark: 0x38DCE8, light: 0x1A6B72)
    /// Mutation Layer: active performance. Never infer readiness from green alone.
    public static let mutationLive = Color.raDynamic(dark: 0xB7FF2A, light: 0x4D8610)
    /// Mutation Layer: current selection.
    public static let mutationSelected = Color.raDynamic(dark: 0xFF2DAA, light: 0xAD176F)
    /// Mutation Layer: device link established.
    public static let mutationConnected = Color.raDynamic(dark: 0x38DCE8, light: 0x1A6B72)
    /// Mutation Layer: creation tools.
    public static let mutationCreative = Color.raDynamic(dark: 0x8E5CFF, light: 0x5735AD)
    /// Mutation Layer: rare signature emphasis.
    public static let mutationSpecial = Color.raDynamic(dark: 0xFF7A1A, light: 0x82370C)
    /// Text on live/inverted fills such as feedback-live-surface.
    public static let textInverse = Color.raDynamic(dark: 0x0B0D10, light: 0xF7F3EA)
    /// Inline links on canvas and surface.
    public static let textLink = Color.raDynamic(dark: 0xB7FF2A, light: 0x335C0C)
    /// Essential control boundaries: fields, checkboxes, radios, switch tracks, secondary buttons (3.01:1 Dark, 3.38:1 Light on surface).
    public static let borderStrong = Color.raDynamic(dark: 0x5C6875, light: 0x978068)
    /// Selected or interactive outlines (selected icon buttons).
    public static let borderInteractive = Color.raDynamic(dark: 0xB7FF2A, light: 0x4D8610)
    /// Primary action hover (pointer only).
    public static let actionPrimaryHover = Color.raDynamic(dark: 0xBEFF3D, light: 0x264508)
    /// Primary action pressed and selected fill.
    public static let actionPrimaryPressed = Color.raDynamic(dark: 0x91DB18, light: 0x0B0D10)
    /// Secondary expressive action accent (purple).
    public static let actionSecondary = Color.raDynamic(dark: 0x8E5CFF, light: 0x5735AD)
    /// Dims content behind dialogs and sheets (apply with opacity over real content).
    public static let overlayScrim = Color.raDynamic(dark: 0x0B0D10, light: 0x171411)
    /// Foreground surface for overlays, menus and popovers.
    public static let overlaySurface = Color.raDynamic(dark: 0x20252D, light: 0xF7F3EA)
    /// Icons beside primary content.
    public static let iconPrimary = Color.raDynamic(dark: 0xF7F3EA, light: 0x171411)
    /// Supporting icons, field adornments.
    public static let iconSecondary = Color.raDynamic(dark: 0xCABAA4, light: 0x40342A)
    /// Low-emphasis and disabled icons.
    public static let iconMuted = Color.raDynamic(dark: 0x978068, light: 0x78644F)
    /// Actionable icons; keep the accessible name.
    public static let iconInteractive = Color.raDynamic(dark: 0xB7FF2A, light: 0x4D8610)
    /// Shadow color for elevation-1.
    public static let elevationShadow1 = Color.raDynamic(dark: 0x000000, darkAlpha: 0.141, light: 0x000000, lightAlpha: 0.122)
    /// Shadow color for elevation-2.
    public static let elevationShadow2 = Color.raDynamic(dark: 0x000000, darkAlpha: 0.18, light: 0x000000, lightAlpha: 0.161)
    /// Shadow color for elevation-3.
    public static let elevationShadow3 = Color.raDynamic(dark: 0x000000, darkAlpha: 0.22, light: 0x000000, lightAlpha: 0.2)
    /// Hard comic shadow ink for stickers, badges and posters; not functional elevation.
    public static let effectGraphicShadow = Color.raDynamic(dark: 0x0B0D10, darkAlpha: 0.902, light: 0x0B0D10, lightAlpha: 0.851)
    /// Glow for meaningful Connected, Live or Active states; never replaces focus or labels.
    public static let effectToxicGlowSubtle = Color.raDynamic(dark: 0xB7FF2A, darkAlpha: 0.278, light: 0x6DB20F, lightAlpha: 0.22)
    /// Emphatic glow for one high-priority state per view.
    public static let effectToxicGlowMedium = Color.raDynamic(dark: 0xB7FF2A, darkAlpha: 0.439, light: 0x6DB20F, lightAlpha: 0.322)
    /// Glow for Selected state or singular branded emphasis.
    public static let effectMagentaGlowSubtle = Color.raDynamic(dark: 0xFF2DAA, darkAlpha: 0.298, light: 0xAD176F, lightAlpha: 0.239)
    /// Print-registration offset for display type and decorative graphics only.
    public static let effectPrintOffset = Color.raDynamic(dark: 0xFF2DAA, darkAlpha: 0.78, light: 0xAD176F, lightAlpha: 0.698)
    /// Destructive button fill; pair with content-on-dark-accent.
    public static let actionDestructiveDefault = Color(raHex: 0xA22C31)
    /// Invariant light content on deliberately dark accent fills (destructive, expressive, strong accents) in both themes.
    public static let contentOnDarkAccent = Color(raHex: 0xF7F3EA)
    /// Destructive hover fill.
    public static let actionDestructiveHover = Color(raHex: 0xC9373C)
    /// Destructive pressed fill.
    public static let actionDestructivePressed = Color(raHex: 0x792428)
    /// Expressive accent hover (decorative use; not a text ground).
    public static let actionExpressiveHover = Color.raDynamic(dark: 0xA778FF, light: 0x5735AD)
    /// Expressive accent pressed (decorative use).
    public static let actionExpressivePressed = Color.raDynamic(dark: 0x7146D9, light: 0x402984)
    /// Magenta tag fill; pair with content-on-dark-accent.
    public static let accentSelectedStrong = Color(raHex: 0xAD176F)
    /// Purple tag fill; pair with content-on-dark-accent.
    public static let accentCreativeStrong = Color(raHex: 0x5735AD)
    /// Orange tag fill; pair with content-on-dark-accent.
    public static let accentSpecialStrong = Color(raHex: 0x82370C)
    /// Information tag fill; pair with content-on-dark-accent.
    public static let accentInformationStrong = Color(raHex: 0x1A6B72)
    /// Danger tag fill; pair with content-on-dark-accent.
    public static let accentDangerStrong = Color(raHex: 0xA22C31)
    /// Brand / Expressive button fill; pair with content-on-dark-accent.
    public static let actionExpressiveDefaultAccessible = Color(raHex: 0x5735AD)
    /// Brand / Expressive button hover fill.
    public static let actionExpressiveHoverAccessible = Color.raDynamic(dark: 0x7146D9, light: 0x5735AD)
    /// Brand / Expressive button pressed fill.
    public static let actionExpressivePressedAccessible = Color(raHex: 0x402984)
    /// Android state-layer overlay (text-primary at 8%). Android adapter only.
    public static let androidStateTextPrimary8 = Color.raDynamic(dark: 0xF7F3EA, darkAlpha: 0.078, light: 0x171411, lightAlpha: 0.078)
    /// Android state-layer overlay (text-primary at 10%). Android adapter only.
    public static let androidStateTextPrimary10 = Color.raDynamic(dark: 0xF7F3EA, darkAlpha: 0.102, light: 0x171411, lightAlpha: 0.102)
    /// Android state-layer overlay (action-on-primary at 8%). Android adapter only.
    public static let androidStateActionOnPrimary8 = Color.raDynamic(dark: 0x0B0D10, darkAlpha: 0.078, light: 0xF7F3EA, lightAlpha: 0.078)
    /// Android state-layer overlay (action-on-primary at 10%). Android adapter only.
    public static let androidStateActionOnPrimary10 = Color.raDynamic(dark: 0x0B0D10, darkAlpha: 0.102, light: 0xF7F3EA, lightAlpha: 0.102)
    /// Android state-layer overlay (text-primary at 12%). Android adapter only.
    public static let androidStateTextPrimary12 = Color.raDynamic(dark: 0xF7F3EA, darkAlpha: 0.122, light: 0x171411, lightAlpha: 0.122)
    /// Android state-layer overlay (action-primary at 8%). Android adapter only.
    public static let androidStateActionPrimary8 = Color.raDynamic(dark: 0xB7FF2A, darkAlpha: 0.078, light: 0x335C0C, lightAlpha: 0.078)
    /// Android state-layer overlay (action-primary at 10%). Android adapter only.
    public static let androidStateActionPrimary10 = Color.raDynamic(dark: 0xB7FF2A, darkAlpha: 0.102, light: 0x335C0C, lightAlpha: 0.102)
    /// Android state-layer overlay (background-surface at 10%). Android adapter only.
    public static let androidStateBackgroundSurface10 = Color.raDynamic(dark: 0x181C22, darkAlpha: 0.102, light: 0xF7F3EA, lightAlpha: 0.102)
    /// Readable error copy on canvas or surface. Use status-danger for indicators, not text.
    public static let colorTextDanger = Color.raDynamic(dark: 0xEF6267, light: 0xA22C31)
    /// Live feedback background; pair with text-inverse. Distinct from mutation-live.
    public static let colorFeedbackLiveSurface = Color.raDynamic(dark: 0xB7FF2A, light: 0x335C0C)
    /// Monochrome icon content. Standard context shown; Primary uses action-on-primary, Accent content-on-dark-accent, Disabled text-muted.
    public static let iconContent = Color.raDynamic(dark: 0xF7F3EA, light: 0x171411)

    /// Component contracts (buttons, fields, status). Alias the semantic roles.
    public enum Component {
        /// Component contract: button primary background default.
        public static let buttonPrimaryBackgroundDefault = Color.raDynamic(dark: 0xB7FF2A, light: 0x335C0C)
        /// Component contract: button primary content default.
        public static let buttonPrimaryContentDefault = Color.raDynamic(dark: 0x0B0D10, light: 0xF7F3EA)
        /// Component contract: button secondary background default.
        public static let buttonSecondaryBackgroundDefault = Color.raDynamic(dark: 0x20252D, light: 0xDDD2C0)
        /// Component contract: button secondary content default.
        public static let buttonSecondaryContentDefault = Color.raDynamic(dark: 0xF7F3EA, light: 0x171411)
        /// Component contract: button secondary border default.
        public static let buttonSecondaryBorderDefault = Color.raDynamic(dark: 0x303741, light: 0xCABAA4)
        /// Component contract: button focus ring.
        public static let buttonFocusRing = Color.raDynamic(dark: 0x38DCE8, light: 0x171411)
        /// Component contract: field background default.
        public static let fieldBackgroundDefault = Color.raDynamic(dark: 0x181C22, light: 0xF7F3EA)
        /// Component contract: field content default.
        public static let fieldContentDefault = Color.raDynamic(dark: 0xF7F3EA, light: 0x171411)
        /// Component contract: field content placeholder.
        public static let fieldContentPlaceholder = Color.raDynamic(dark: 0x978068, light: 0x78644F)
        /// Component contract: field border default.
        public static let fieldBorderDefault = Color.raDynamic(dark: 0x5C6875, light: 0x978068)
        /// Component contract: field border focus.
        public static let fieldBorderFocus = Color.raDynamic(dark: 0x38DCE8, light: 0x171411)
        /// Component contract: status live background.
        public static let statusLiveBackground = Color.raDynamic(dark: 0xB7FF2A, light: 0x4D8610)
        /// Component contract: status live content.
        public static let statusLiveContent = Color.raDynamic(dark: 0x0B0D10, light: 0xF7F3EA)
        /// Component contract: button content disabled.
        public static let buttonContentDisabled = Color.raDynamic(dark: 0x978068, light: 0x78644F)
        /// Component contract: button secondary background hover.
        public static let buttonSecondaryBackgroundHover = Color.raDynamic(dark: 0x303741, light: 0xCABAA4)
        /// Component contract: button ghost background hover.
        public static let buttonGhostBackgroundHover = Color.raDynamic(dark: 0x181C22, light: 0xF7F3EA)
        /// Component contract: button background disabled.
        public static let buttonBackgroundDisabled = Color.raDynamic(dark: 0x181C22, light: 0xF7F3EA)
        /// Component contract: field background disabled.
        public static let fieldBackgroundDisabled = Color.raDynamic(dark: 0x12151A, light: 0xDDD2C0)
        /// Component contract: field border error.
        public static let fieldBorderError = Color.raDynamic(dark: 0xE5484D, light: 0xA22C31)
        /// Component contract: field content error.
        public static let fieldContentError = Color.raDynamic(dark: 0xEF6267, light: 0xA22C31)
    }

    /// Raw palette primitives. Don't bind product UI to these.
    public enum Core {
        /// Ink 50 primitive. Raw palette value: bind product UI through semantic roles.
        public static let ink50 = Color(raHex: 0xF4F6F8)
        /// Ink 100 primitive. Raw palette value: bind product UI through semantic roles.
        public static let ink100 = Color(raHex: 0xE7EBEF)
        /// Ink 200 primitive. Raw palette value: bind product UI through semantic roles.
        public static let ink200 = Color(raHex: 0xC9D0D8)
        /// Ink 300 primitive. Raw palette value: bind product UI through semantic roles.
        public static let ink300 = Color(raHex: 0xA6B0BC)
        /// Ink 400 primitive. Raw palette value: bind product UI through semantic roles.
        public static let ink400 = Color(raHex: 0x7F8C9A)
        /// Ink 500 primitive. Raw palette value: bind product UI through semantic roles.
        public static let ink500 = Color(raHex: 0x5C6875)
        /// Ink 600 primitive. Raw palette value: bind product UI through semantic roles.
        public static let ink600 = Color(raHex: 0x444D58)
        /// Ink 700 primitive. Raw palette value: bind product UI through semantic roles.
        public static let ink700 = Color(raHex: 0x303741)
        /// Ink 800 primitive. Raw palette value: bind product UI through semantic roles.
        public static let ink800 = Color(raHex: 0x20252D)
        /// Ink 850 primitive. Raw palette value: bind product UI through semantic roles.
        public static let ink850 = Color(raHex: 0x181C22)
        /// Ink 900 primitive. Raw palette value: bind product UI through semantic roles.
        public static let ink900 = Color(raHex: 0x12151A)
        /// Ink 950 primitive. Raw palette value: bind product UI through semantic roles.
        public static let ink950 = Color(raHex: 0x0B0D10)
        /// Bone 50 primitive. Raw palette value: bind product UI through semantic roles.
        public static let bone50 = Color(raHex: 0xF7F3EA)
        /// Bone 100 primitive. Raw palette value: bind product UI through semantic roles.
        public static let bone100 = Color(raHex: 0xEDE5D7)
        /// Bone 200 primitive. Raw palette value: bind product UI through semantic roles.
        public static let bone200 = Color(raHex: 0xDDD2C0)
        /// Bone 300 primitive. Raw palette value: bind product UI through semantic roles.
        public static let bone300 = Color(raHex: 0xCABAA4)
        /// Bone 400 primitive. Raw palette value: bind product UI through semantic roles.
        public static let bone400 = Color(raHex: 0xB39E84)
        /// Bone 500 primitive. Raw palette value: bind product UI through semantic roles.
        public static let bone500 = Color(raHex: 0x978068)
        /// Bone 600 primitive. Raw palette value: bind product UI through semantic roles.
        public static let bone600 = Color(raHex: 0x78644F)
        /// Bone 700 primitive. Raw palette value: bind product UI through semantic roles.
        public static let bone700 = Color(raHex: 0x5B4A3A)
        /// Bone 800 primitive. Raw palette value: bind product UI through semantic roles.
        public static let bone800 = Color(raHex: 0x40342A)
        /// Bone 900 primitive. Raw palette value: bind product UI through semantic roles.
        public static let bone900 = Color(raHex: 0x29221C)
        /// Bone 950 primitive. Raw palette value: bind product UI through semantic roles.
        public static let bone950 = Color(raHex: 0x171411)
        /// Toxic 50 primitive. Raw palette value: bind product UI through semantic roles.
        public static let toxic50 = Color(raHex: 0xF8FFE8)
        /// Toxic 100 primitive. Raw palette value: bind product UI through semantic roles.
        public static let toxic100 = Color(raHex: 0xEDFFC5)
        /// Toxic 200 primitive. Raw palette value: bind product UI through semantic roles.
        public static let toxic200 = Color(raHex: 0xDCFF91)
        /// Toxic 300 primitive. Raw palette value: bind product UI through semantic roles.
        public static let toxic300 = Color(raHex: 0xCAFF5D)
        /// Toxic 400 primitive. Raw palette value: bind product UI through semantic roles.
        public static let toxic400 = Color(raHex: 0xBEFF3D)
        /// Toxic 500 primitive. Raw palette value: bind product UI through semantic roles.
        public static let toxic500 = Color(raHex: 0xB7FF2A)
        /// Toxic 600 primitive. Raw palette value: bind product UI through semantic roles.
        public static let toxic600 = Color(raHex: 0x91DB18)
        /// Toxic 700 primitive. Raw palette value: bind product UI through semantic roles.
        public static let toxic700 = Color(raHex: 0x6DB20F)
        /// Toxic 800 primitive. Raw palette value: bind product UI through semantic roles.
        public static let toxic800 = Color(raHex: 0x4D8610)
        /// Toxic 900 primitive. Raw palette value: bind product UI through semantic roles.
        public static let toxic900 = Color(raHex: 0x335C0C)
        /// Toxic 950 primitive. Raw palette value: bind product UI through semantic roles.
        public static let toxic950 = Color(raHex: 0x264508)
        /// Slime 50 primitive. Raw palette value: bind product UI through semantic roles.
        public static let slime50 = Color(raHex: 0xF0FFEC)
        /// Slime 100 primitive. Raw palette value: bind product UI through semantic roles.
        public static let slime100 = Color(raHex: 0xD9FFD0)
        /// Slime 200 primitive. Raw palette value: bind product UI through semantic roles.
        public static let slime200 = Color(raHex: 0xB4FFA2)
        /// Slime 300 primitive. Raw palette value: bind product UI through semantic roles.
        public static let slime300 = Color(raHex: 0x91FB77)
        /// Slime 400 primitive. Raw palette value: bind product UI through semantic roles.
        public static let slime400 = Color(raHex: 0x7CF85A)
        /// Slime 500 primitive. Raw palette value: bind product UI through semantic roles.
        public static let slime500 = Color(raHex: 0x70F540)
        /// Slime 600 primitive. Raw palette value: bind product UI through semantic roles.
        public static let slime600 = Color(raHex: 0x52CE2F)
        /// Slime 700 primitive. Raw palette value: bind product UI through semantic roles.
        public static let slime700 = Color(raHex: 0x3C9F24)
        /// Slime 800 primitive. Raw palette value: bind product UI through semantic roles.
        public static let slime800 = Color(raHex: 0x2C741E)
        /// Slime 900 primitive. Raw palette value: bind product UI through semantic roles.
        public static let slime900 = Color(raHex: 0x1D4D16)
        /// Magenta 50 primitive. Raw palette value: bind product UI through semantic roles.
        public static let magenta50 = Color(raHex: 0xFFF0F9)
        /// Magenta 100 primitive. Raw palette value: bind product UI through semantic roles.
        public static let magenta100 = Color(raHex: 0xFFD6EE)
        /// Magenta 200 primitive. Raw palette value: bind product UI through semantic roles.
        public static let magenta200 = Color(raHex: 0xFFADDD)
        /// Magenta 300 primitive. Raw palette value: bind product UI through semantic roles.
        public static let magenta300 = Color(raHex: 0xFF7BCB)
        /// Magenta 400 primitive. Raw palette value: bind product UI through semantic roles.
        public static let magenta400 = Color(raHex: 0xFF4DB8)
        /// Magenta 500 primitive. Raw palette value: bind product UI through semantic roles.
        public static let magenta500 = Color(raHex: 0xFF2DAA)
        /// Magenta 600 primitive. Raw palette value: bind product UI through semantic roles.
        public static let magenta600 = Color(raHex: 0xD91C8C)
        /// Magenta 700 primitive. Raw palette value: bind product UI through semantic roles.
        public static let magenta700 = Color(raHex: 0xAD176F)
        /// Magenta 800 primitive. Raw palette value: bind product UI through semantic roles.
        public static let magenta800 = Color(raHex: 0x821354)
        /// Magenta 900 primitive. Raw palette value: bind product UI through semantic roles.
        public static let magenta900 = Color(raHex: 0x5C103C)
        /// Purple 50 primitive. Raw palette value: bind product UI through semantic roles.
        public static let purple50 = Color(raHex: 0xF6F1FF)
        /// Purple 100 primitive. Raw palette value: bind product UI through semantic roles.
        public static let purple100 = Color(raHex: 0xE9DDFF)
        /// Purple 200 primitive. Raw palette value: bind product UI through semantic roles.
        public static let purple200 = Color(raHex: 0xD4BDFF)
        /// Purple 300 primitive. Raw palette value: bind product UI through semantic roles.
        public static let purple300 = Color(raHex: 0xBC99FF)
        /// Purple 400 primitive. Raw palette value: bind product UI through semantic roles.
        public static let purple400 = Color(raHex: 0xA778FF)
        /// Purple 500 primitive. Raw palette value: bind product UI through semantic roles.
        public static let purple500 = Color(raHex: 0x8E5CFF)
        /// Purple 600 primitive. Raw palette value: bind product UI through semantic roles.
        public static let purple600 = Color(raHex: 0x7146D9)
        /// Purple 700 primitive. Raw palette value: bind product UI through semantic roles.
        public static let purple700 = Color(raHex: 0x5735AD)
        /// Purple 800 primitive. Raw palette value: bind product UI through semantic roles.
        public static let purple800 = Color(raHex: 0x402984)
        /// Purple 900 primitive. Raw palette value: bind product UI through semantic roles.
        public static let purple900 = Color(raHex: 0x2B1D5C)
        /// Orange 50 primitive. Raw palette value: bind product UI through semantic roles.
        public static let orange50 = Color(raHex: 0xFFF4EB)
        /// Orange 100 primitive. Raw palette value: bind product UI through semantic roles.
        public static let orange100 = Color(raHex: 0xFFE3CC)
        /// Orange 200 primitive. Raw palette value: bind product UI through semantic roles.
        public static let orange200 = Color(raHex: 0xFFC89A)
        /// Orange 300 primitive. Raw palette value: bind product UI through semantic roles.
        public static let orange300 = Color(raHex: 0xFFAA66)
        /// Orange 400 primitive. Raw palette value: bind product UI through semantic roles.
        public static let orange400 = Color(raHex: 0xFF8E3B)
        /// Orange 500 primitive. Raw palette value: bind product UI through semantic roles.
        public static let orange500 = Color(raHex: 0xFF7A1A)
        /// Orange 600 primitive. Raw palette value: bind product UI through semantic roles.
        public static let orange600 = Color(raHex: 0xD9600E)
        /// Orange 700 primitive. Raw palette value: bind product UI through semantic roles.
        public static let orange700 = Color(raHex: 0xAD490B)
        /// Orange 800 primitive. Raw palette value: bind product UI through semantic roles.
        public static let orange800 = Color(raHex: 0x82370C)
        /// Orange 900 primitive. Raw palette value: bind product UI through semantic roles.
        public static let orange900 = Color(raHex: 0x59260A)
        /// Cyan 50 primitive. Raw palette value: bind product UI through semantic roles.
        public static let cyan50 = Color(raHex: 0xECFDFF)
        /// Cyan 100 primitive. Raw palette value: bind product UI through semantic roles.
        public static let cyan100 = Color(raHex: 0xCFF9FC)
        /// Cyan 200 primitive. Raw palette value: bind product UI through semantic roles.
        public static let cyan200 = Color(raHex: 0x9EF1F6)
        /// Cyan 300 primitive. Raw palette value: bind product UI through semantic roles.
        public static let cyan300 = Color(raHex: 0x71E8F0)
        /// Cyan 400 primitive. Raw palette value: bind product UI through semantic roles.
        public static let cyan400 = Color(raHex: 0x50E1EB)
        /// Cyan 500 primitive. Raw palette value: bind product UI through semantic roles.
        public static let cyan500 = Color(raHex: 0x38DCE8)
        /// Cyan 600 primitive. Raw palette value: bind product UI through semantic roles.
        public static let cyan600 = Color(raHex: 0x24B8C4)
        /// Cyan 700 primitive. Raw palette value: bind product UI through semantic roles.
        public static let cyan700 = Color(raHex: 0x1D909A)
        /// Cyan 800 primitive. Raw palette value: bind product UI through semantic roles.
        public static let cyan800 = Color(raHex: 0x1A6B72)
        /// Cyan 900 primitive. Raw palette value: bind product UI through semantic roles.
        public static let cyan900 = Color(raHex: 0x14484D)
        /// Blood 50 primitive. Raw palette value: bind product UI through semantic roles.
        public static let blood50 = Color(raHex: 0xFFF1F1)
        /// Blood 100 primitive. Raw palette value: bind product UI through semantic roles.
        public static let blood100 = Color(raHex: 0xFFDADB)
        /// Blood 200 primitive. Raw palette value: bind product UI through semantic roles.
        public static let blood200 = Color(raHex: 0xFFB5B7)
        /// Blood 300 primitive. Raw palette value: bind product UI through semantic roles.
        public static let blood300 = Color(raHex: 0xF9898D)
        /// Blood 400 primitive. Raw palette value: bind product UI through semantic roles.
        public static let blood400 = Color(raHex: 0xEF6267)
        /// Blood 500 primitive. Raw palette value: bind product UI through semantic roles.
        public static let blood500 = Color(raHex: 0xE5484D)
        /// Blood 600 primitive. Raw palette value: bind product UI through semantic roles.
        public static let blood600 = Color(raHex: 0xC9373C)
        /// Blood 700 primitive. Raw palette value: bind product UI through semantic roles.
        public static let blood700 = Color(raHex: 0xA22C31)
        /// Blood 800 primitive. Raw palette value: bind product UI through semantic roles.
        public static let blood800 = Color(raHex: 0x792428)
        /// Blood 900 primitive. Raw palette value: bind product UI through semantic roles.
        public static let blood900 = Color(raHex: 0x531B1E)
        /// Legacy alpha neutral (bone 50 at 72%). Compatibility only; retest over the real surface.
        public static let neutral050A72 = Color(raHex: 0xF7F3EA, alpha: 0.722)
        /// Legacy alpha neutral (bone 50 at 56%). Compatibility only; retest over the real surface.
        public static let neutral050A56 = Color(raHex: 0xF7F3EA, alpha: 0.561)
        /// Legacy alpha neutral (bone 50 at 16%). Compatibility only; retest over the real surface.
        public static let neutral050A16 = Color(raHex: 0xF7F3EA, alpha: 0.161)
        /// Legacy alpha neutral (bone 50 at 08%). Compatibility only; retest over the real surface.
        public static let neutral050A08 = Color(raHex: 0xF7F3EA, alpha: 0.078)
    }
}

// MARK: - Space, radius, size, stroke (points)

/// 4pt grid with an 8pt rhythm. Named steps only — never in-between values.
public enum RASpace {
    /// 0pt — No gap
    public static let s0: CGFloat = 0
    /// 4pt — Micro detail (4)
    public static let s1: CGFloat = 4
    /// 8pt — Compact content gaps; button icon-label gap; control vertical padding
    public static let s2: CGFloat = 8
    /// 12pt — Small-button horizontal padding; field icon gap
    public static let s3: CGFloat = 12
    /// 16pt — Component internal padding; medium-button horizontal padding
    public static let s4: CGFloat = 16
    /// 20pt — Large-button horizontal padding
    public static let s5: CGFloat = 20
    /// 24pt — Section padding inside panels
    public static let s6: CGFloat = 24
    /// 32pt — Major group separation
    public static let s8: CGFloat = 32
    /// 40pt — Large group separation
    public static let s10: CGFloat = 40
    /// 48pt — Page-level spacing starts here
    public static let s12: CGFloat = 48
    /// 64pt — Page rhythm
    public static let s16: CGFloat = 64
    /// 80pt — Hero and page rhythm
    public static let s20: CGFloat = 80
    /// 96pt — Largest page rhythm step
    public static let s24: CGFloat = 96
}

/// Six radii and nothing between. Use `Capsule()` for pill shapes.
public enum RARadius {
    public static let none: CGFloat = 0
    public static let xs: CGFloat = 4
    public static let sm: CGFloat = 8
    public static let md: CGFloat = 12
    public static let lg: CGFloat = 16
    public static let xl: CGFloat = 24
    /// Pill: prefer `Capsule()` or `.clipShape(.capsule)` over this value.
    public static let pill: CGFloat = 999
}

public enum RASize {
    public static let controlSm: CGFloat = 32
    public static let controlMd: CGFloat = 44
    public static let interactionMin: CGFloat = 44
    public static let controlLg: CGFloat = 48
    public static let iconSm: CGFloat = 16
    public static let iconMd: CGFloat = 20
    public static let iconLg: CGFloat = 24
    public static let componentButtonRadius: CGFloat = 12
    public static let componentButtonHeightWebMd: CGFloat = 44
    public static let componentButtonHeightWebLg: CGFloat = 48
    public static let componentButtonHeightIosMd: CGFloat = 44
    public static let componentButtonHeightIosLg: CGFloat = 48
    public static let componentFieldRadius: CGFloat = 12
    public static let componentStatusRadius: CGFloat = 999
    public static let controlXs: CGFloat = 28
    public static let controlXl: CGFloat = 56
    public static let componentTextareaMinHeight: CGFloat = 128
}

public enum RAStroke {
    public static let s1: CGFloat = 1
    public static let s2: CGFloat = 2
}

// MARK: - Typography

/// iOS text roles map to Dynamic Type. Always ship these (never fixed point sizes) so text scales.
public enum RAFont {
    /// largeTitle (34pt at default size). .
    public static let displayXl: Font = .largeTitle
    /// title (28pt at default size). .
    public static let headingXl: Font = .title
    /// title2 (22pt at default size). .
    public static let headingL: Font = .title2
    /// title3 (20pt at default size). .
    public static let headingM: Font = .title3
    /// headline (17pt at default size). .
    public static let labelStrong: Font = .headline
    /// body (17pt at default size). .
    public static let bodyM: Font = .body
    /// callout (16pt at default size). .
    public static let bodyS: Font = .callout
    /// subheadline (15pt at default size). .
    public static let labelM: Font = .subheadline
    /// footnote (13pt at default size). .
    public static let metaM: Font = .footnote
    /// caption (12pt at default size). .
    public static let captionM: Font = .caption
    /// caption2 (11pt at default size). .
    public static let captionS: Font = .caption2

    /// Timing data, device IDs and logs: SF Mono via the monospaced design. Pair numbers with `.monospacedDigit()`.
    public static let mono: Font = .system(.footnote, design: .monospaced)
    /// Large clocks (elapsed / remaining).
    public static let monoClock: Font = .system(.title2, design: .monospaced).weight(.medium)

    /// Expressive poster type: Barlow Condensed Black, uppercase, 1–4 words, branded moments only.
    /// Bundle the font file with the app (see README). Scales with Dynamic Type relative to .largeTitle.
    public static func expressiveDisplay(size: CGFloat = 96) -> Font { .custom("BarlowCondensed-Black", size: size, relativeTo: .largeTitle) }
    /// Uppercase poster kicker: Barlow Condensed Bold.
    public static func expressiveKicker(size: CGFloat = 18) -> Font { .custom("BarlowCondensed-Bold", size: size, relativeTo: .headline) }
}

// MARK: - Motion and holds

public enum RAMotion {
    /// 80 ms
    public static let instant: Double = 0.08
    /// 120 ms
    public static let fast: Double = 0.12
    /// 180 ms
    public static let standard: Double = 0.18
    /// 240 ms
    public static let expressive: Double = 0.24
    /// 360 ms
    public static let hero: Double = 0.36

    // Signature behaviors (see motion.md). The spring specs are spring(stiffness, damping).
    /// CUE — selection and trigger: fast directional snap.
    public static let cue: Animation = .interpolatingSpring(stiffness: 70, damping: 12)
    /// WAKE — signal online, device available.
    public static let wake: Animation = .timingCurve(0.4, 0, 0.2, 1, duration: standard)
    /// LOCK — connection or sync confirmed: short mechanical latch.
    public static let lock: Animation = .interpolatingSpring(stiffness: 80, damping: 10)
    /// PULSE — live-state breathing. Never the only cue; remove with Reduce Motion.
    public static let pulse: Animation = .easeInOut(duration: standard).repeatForever(autoreverses: true)
    /// MUTATE — normal UI into the expressive active state.
    public static let mutate: Animation = .timingCurve(0.2, 1, 0.2, 1, duration: expressive)
    /// KILL — stop and emergency: no animation. Apply the state change immediately.
    public static let kill: Animation? = nil
    /// POSSESS — rare Live / Performance transformation.
    public static let possess: Animation = .interpolatingSpring(stiffness: 60, damping: 18)

    /// Returns `animation`, or nil when Reduce Motion is on (swap straight to the final state).
    public static func respecting(_ reduceMotion: Bool, _ animation: Animation?) -> Animation? { reduceMotion ? nil : animation }
}

/// Every stop control (Stop scene, End show, Stop performance, emergency stop) is a press-and-hold.
public enum RAHold {
    /// 0.75 s — long enough to stop a stray touch, short enough for an emergency.
    public static let duration: Double = 0.75
}

// MARK: - Elevation and effects

/// A drop shadow. SwiftUI's `radius` is roughly half the CSS blur, which is how these values were converted.
public struct RAShadow {
    public let color: Color
    public let radius: CGFloat
    public let x: CGFloat
    public let y: CGFloat
}

public enum RAEffect {
    public static let elevation1 = RAShadow(color: .raDynamic(dark: 0x000000, darkAlpha: 0.141, light: 0x000000, lightAlpha: 0.122), radius: 1.5, x: 0, y: 1)
    public static let elevation2 = RAShadow(color: .raDynamic(dark: 0x000000, darkAlpha: 0.18, light: 0x000000, lightAlpha: 0.161), radius: 5, x: 0, y: 4)
    public static let elevation3 = RAShadow(color: .raDynamic(dark: 0x000000, darkAlpha: 0.22, light: 0x000000, lightAlpha: 0.2), radius: 9, x: 0, y: 8)
    public static let graphicShadow = RAShadow(color: .raDynamic(dark: 0x0B0D10, darkAlpha: 0.898, light: 0x0B0D10, lightAlpha: 0.851), radius: 0, x: 6, y: 6)
    public static let toxicGlowSubtle = RAShadow(color: .raDynamic(dark: 0xB7FF2A, darkAlpha: 0.278, light: 0x6DB20F, lightAlpha: 0.22), radius: 4, x: 0, y: 0)
    public static let toxicGlowMedium = RAShadow(color: .raDynamic(dark: 0xB7FF2A, darkAlpha: 0.439, light: 0x6DB20F, lightAlpha: 0.322), radius: 8, x: 0, y: 0)
    public static let magentaGlowSubtle = RAShadow(color: .raDynamic(dark: 0xFF2DAA, darkAlpha: 0.302, light: 0xAD176F, lightAlpha: 0.239), radius: 5, x: 0, y: 0)
    public static let printOffset = RAShadow(color: .raDynamic(dark: 0xFF2DAA, darkAlpha: 0.78, light: 0xAD176F, lightAlpha: 0.702), radius: 0, x: 3, y: 3)
}

public extension View {
    /// Applies a Reanimation shadow or glow. Glows never replace focus, labels or status text.
    func raShadow(_ s: RAShadow) -> some View { shadow(color: s.color, radius: s.radius, x: s.x, y: s.y) }

    /// Grows the hit area to the 44pt minimum without changing the painted size.
    func raHitTarget() -> some View {
        frame(minWidth: RASize.interactionMin, minHeight: RASize.interactionMin).contentShape(Rectangle())
    }
}

