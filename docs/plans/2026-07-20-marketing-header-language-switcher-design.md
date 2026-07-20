# Marketing Header Language Switcher Design

## Goal

Make language selection immediately visible on the public marketing header at every viewport size, including `/home`, without crowding the logo, Register action, or menu button.

## Design

- Keep the existing full language selector in the desktop header.
- Add a compact flag-only selector between Register and the menu button below the desktop navigation breakpoint.
- Keep the full-width selector inside the drawer as a secondary access point.
- Reuse the existing locale API, cookie, translated labels, and flag assets. No new locale state or routing layer is introduced.
- Give the compact control a stable square width and accessible language label. The dropdown menu continues to show each language's flag and native name.
- Compile the Amplify build with the nine approved LTR locales so the deployed selector matches the translated catalogs already shipped.

## Verification

- Check desktop, tablet, and mobile headers for overflow and alignment.
- Confirm all nine locale options are available.
- Switch to a translated locale and confirm the page and selector update after reload.
- Run lint, TypeScript, and production build checks before deployment.
