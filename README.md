# jaguarclaw-website

Official website subproject for JaguarClaw (enterprise homepage + docs + blog + feedback).

## Commands

- `npm run dev` - start local dev server with Contentlayer
- `npm run build` - generate content and static export (`out/`)
- `npm run start` - run production server
- `npm run type-check` - run TypeScript checks
- `npm run lint` - run Next.js lint
- `npm test` - run unit tests

## Project Structure

- `app/` Next.js App Router pages
- `content/docs` docs MDX content
- `content/blog` blog MDX content
- `components/` shared website components
- `lib/` content/query helpers

## GitHub Pages Deployment

This repo is configured for GitHub Pages static deployment:

- Next.js static export is enabled in `next.config.mjs`.
- GitHub Actions workflow: `.github/workflows/deploy-pages.yml`.
- Deployment output directory: `out/`.

After pushing to `main`, enable **Settings -> Pages -> Build and deployment -> GitHub Actions**.

## Feedback Flow

Feedback form generates a pre-filled GitHub Issue URL and opens it for final submission.

## Migration to standalone repo

When this website is ready to split out:

1. Move `jaguarclaw-website` to outer directory.
2. Initialize a new git repository.
3. Keep content and route structure unchanged.
4. Add CI for `type-check`, `lint`, and `build`.
