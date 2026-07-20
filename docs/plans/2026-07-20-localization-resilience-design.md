# Localization Resilience Design

## Scope

Improve translated marketing and dashboard experiences without changing the supported locale list or backend course records.

## Marketing Header

- Collapse the full desktop navigation into the compact language and menu controls before translated labels can wrap.
- Remove the fixed action-area width and prevent the grouped navigation labels from wrapping.
- Preserve the existing full navigation on sufficiently wide desktop screens.

## Academy Content

- Replace hard-coded Academy feature-card copy with stable translation keys.
- Translate all five feature cards in every shipped locale.

## Dashboard Courses

- Add translated catalog titles alongside the existing translated descriptions.
- Use translated titles on course cards and course detail headings.
- Continue using the backend English title as the stable catalog and artwork lookup key.

## Browser Translation

- Mark both applications as not translatable by browser translation services.
- Keep the selected application locale in the `lang` attribute and retain the native language selector as the single source of truth.

## Validation

- Validate message-key parity across all shipped locales.
- Run lint, TypeScript, and production builds in both applications.
- Test the marketing header at desktop zoom-equivalent widths and mobile widths in long-label locales.
- Verify Academy cards and course titles change with the selected locale.
