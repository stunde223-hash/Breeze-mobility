# Breeze Mobility

Responsive, static website built with HTML, CSS, and a small progressive enhancement script. No production JavaScript dependencies or build step.

## Develop

Use the existing checkout at `/workspace/Breeze-mobility`. Do not create a worktree for ordinary cloud tasks.

Run `npm run dev` (Python 3 required) to serve the site on port 3000. Run `npm test` for link, metadata, asset, and structured-data checks. The site can be served by any static web host. The Python server is for development.

## Content

Content and photographs were sourced from https://www.breezemobility.bike/ (home, services, about, and contact pages). Images are optimized local WebP files; Oswald Bold is self-hosted under the SIL Open Font License. Body text uses system fonts. No invented statistics, testimonials, contact details, or software dashboard demos are included.

The contact action points to the business's existing Instagram account. There is no form backend, tracking, cookie storage, or account system. Privacy and terms pages describe this initial implementation and need business review before publication. Confirm the address, service details, legal wording, final domain, and contact channel before launch. Canonicals and sitemap currently use the existing public domain.

## Validation

- Node tests verify section targets, local linked resources, metadata, structured data, and image attributes.
- Chromium checked 390px, 768px, and 1440px layouts, image loading, menu interactions, FAQ interaction, horizontal overflow, and JavaScript errors.
- Lighthouse results are local lab measurements, not production Core Web Vitals. Production caching, compression, HTTPS, and real-user performance must be verified after hosting.

## Design

Photo-led opening, condensed headings, warm ivory, deep forest green, and muted gold accents. Square edges, no gradients, no shadows, no icon library, and no hover animations. Reduced motion is respected. Main content, images, FAQ, and contact links work without JavaScript. Menu enhancements run only on small screens.

## Reference refinement

The fleet invitation uses the two-bicycle photograph from Breeze’s About page, optimized as local responsive WebP. Its photo overlay, gold typography, outlined lettering, and operation labels draw on the Royal Green reference. The footer uses a fine traced treatment within the oversized wordmark. FAQPage structured data matches the visible questions and answers. Local search metadata uses the existing published business address; Google Business Profile ownership, live indexing, and AI answer inclusion have not been verified.
