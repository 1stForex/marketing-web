# Homepage Testimonials Design

## Goal

Add five customer testimonials near the bottom of the marketing homepage to provide credible social proof before the final conversion banner.

## Placement

The section appears after the homepage FAQ and before the final welcome banner. This keeps the page's existing narrative intact: product explanation, answers to objections, customer proof, then the final call to action.

## Content Rules

- Preserve every testimonial in its supplied language.
- Do not place testimonial copy in the site translation dictionaries.
- Show a small `English` or `Español` label so mixed-language content is intentional.
- Do not fabricate customer photos, locations, roles, ratings, or performance claims.
- Use initials as neutral customer identifiers.

## Layout

Use an editorial testimonial wall rather than a carousel:

- A prominent lead testimonial spans the wider first column.
- Four supporting testimonials fill a balanced secondary grid.
- Desktop uses a two-column composition with deliberate variation in card scale.
- Tablet uses two balanced columns.
- Mobile uses one continuous vertical stack with no horizontal scrolling.

The visual treatment follows the existing 1stForex design system: white and soft-gray surfaces, charcoal typography, restrained orange-red accents, thin borders, and subtle elevation. Cards use no decorative gradients or customer imagery.

## Accessibility and Interaction

- Render testimonials as semantic blockquotes with cited customer names.
- Maintain readable contrast and comfortable line height.
- Keep the entire quote visible without truncation or interaction.
- Respect the page direction while keeping the original quote language intact.

## Validation

- Verify all five names and quotes render exactly once.
- Verify changing locale does not translate or hide testimonial content.
- Run TypeScript, lint, and production build checks.
- Inspect the live homepage at desktop and mobile widths after deployment.
