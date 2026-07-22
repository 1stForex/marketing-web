# Responsive Localized Header Design

## Goal

Keep the complete marketing navigation visible for every supported language on desktop widths down to 1300px without clipping, wrapping, or switching individual locales to the mobile drawer early.

## Behavior

- Above 1799px, retain the current desktop spacing and typography.
- From 1300px through 1799px, use a condensed desktop layout with smaller fixed font sizes, tighter gaps, reduced button padding, and a smaller logo.
- Below 1300px, use the existing compact language control and navigation drawer.
- Use the short native language name in the closed desktop language selector, while keeping the full locale name in its menu.
- Apply the same breakpoints to every locale. No language-specific layout rules.

## Components

- `Header` owns the desktop/mobile breakpoint and passes a dense desktop state to its children.
- `GroupButton`, `NavLinks`, `DropDown`, `OptionMenu`, and `LanguageSwitcher` expose or consume the dense state so the header contracts as one system.
- `CustomButton` accepts an optional fixed font size for compact header actions.

## Verification

- Test every enabled locale at 1600px, 1440px, 1366px, and 1300px.
- Confirm the header remains one row, the registration action is fully visible, and the page has no horizontal overflow.
- Confirm the drawer is used below 1300px and full locale names remain available in the language menu.
