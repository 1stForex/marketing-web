# Short Language Labels

## Goal

Prevent language names from colliding with the dropdown arrow while preserving clear, accessible locale selection in the localized marketing header.

## Design

- Keep the existing locale codes, flags, routing, cookies, and translations unchanged.
- Add a concise native display label to each locale definition.
- Use the concise label in both the selected value and the dropdown options.
- Preserve the full regional locale name as title text for additional context.
- Reserve a fixed area for the dropdown arrow and allow the text region to truncate safely if a future label is unexpectedly long.
- Keep flag-only rendering for the compact mobile trigger.

## Verification

- Type-check, lint, and build the marketing application.
- Verify every supported locale at 1600px and 1300px.
- Confirm the selected label and arrow do not overlap and the header does not overflow.
