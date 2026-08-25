# HAULa — Gateway X Pitch Package

A small Next.js site presenting HAULa's Gateway X Fall 2026 Fellowship pitch package,
one section per question, in the order Gateway X asks them:
https://perfect-pitch.gateway.xyz/

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploying

This is a stock Next.js app (App Router) with no environment variables or backend —
it deploys to [Vercel](https://vercel.com) by importing this repo, no configuration
needed. `npm run build && npm run start` works anywhere else that runs Node.

## Content

All copy lives in `app/page.js`. Source material and provenance for every claim is
tracked outside this repo, in the parent HAULa project's `context/` and `models/`
folders — see those before editing content here.
