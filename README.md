# Moments WWW

Marketing site and privacy policy for the Moments iOS app.

## Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- Motion
- TypeScript

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```

## Main Routes

- `/` landing page
- `/privacy` privacy policy
- `/robots.txt`
- `/sitemap.xml`

## Project Notes

- App metadata and legal content live in `app/_lib/site-content.ts`.
- Landing page UI is split into reusable components under `app/_components`.
- Static assets live in `public/`.
- Local dependency folders like `node_modules/` are ignored and should never be committed.
