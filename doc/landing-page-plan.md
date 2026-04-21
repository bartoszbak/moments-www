# Moments Landing Page Plan

## Goal

Build a responsive Next.js marketing site inspired by the Figma page at `node-id=14:416`, using `npm` and Tailwind. The site will include:

- `/` home page
- `/privacy` privacy policy page
- `/terms` terms of use page

## Constraints

- Keep the site inside the `Moments` repo so it ships with the product context.
- Use the App Router.
- Use fluid, responsive typography rather than fixed heading sizes.
- Recreate the Figma composition and tone without depending on exact Figma-exported assets.
- Reuse Moments branding assets and product copy where available.

## Execution Plan

1. Create a new Next.js app in `Moments/web` with Tailwind and a minimal app-router structure.
2. Set up global styling, font loading, metadata, and shared layout primitives.
3. Build the home page based on the Figma layout:
   - left-aligned editorial copy on desktop
   - centered stacked layout on mobile
   - Moments icon / branding
   - large fluid headline
   - primary iOS download CTA
   - phone mockup / app preview treatment
   - privacy and terms footer links
4. Write the copy for the privacy and terms pages using the Moments README, privacy draft, and current premium / AI / subscription behavior as source material.
5. Add the legal content pages and route structure for `/privacy` and `/terms` using that copy.
6. Validate the site with install, lint, and build commands if the environment allows dependency install.

## Working Notes

- Figma `get_design_context` did not return a node payload for this file, so the implementation will use the screenshot plus node metadata as the reference source.
- Existing reusable assets are available in `Moments/Moments/Assets.xcassets`, including the primary app icon.

## Status

- Completed: plan file, Next.js scaffold, responsive home page, privacy page, terms page, asset reuse, lint, and production build validation.
- Remaining follow-up after handoff: replace the placeholder site URL and generic App Store URL with the final production values when those are available.
