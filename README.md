# Ketabkhan

A mobile-first UI prototype for a personal reading and publishing app: collect scans and PDFs into folders, then compile them into finished ebooks.

> **Status:** front-end prototype with sample data. The scanning, upload and export screens are designed and navigable, but no backend processing is connected yet.

## Screens

- **Library:** search, collections ("Physics Notes", "Math Notes") and finalized ebooks.
- **Folder detail:** the sources inside a collection and their status.
- **Scanner:** three input paths: scan with the camera, upload images, or import a PDF (up to 100 MB).
- **Bottom navigation** and a glass-style dark theme designed for one-handed phone use.

## Tech stack

- React 18, React Router 6 (SPA mode), TypeScript, Vite
- Tailwind CSS 3, Radix UI, Lucide icons
- Express server integrated with the Vite dev server, deployable as a Netlify function
- Zod for shared request/response types, Vitest for tests

## Getting started

```bash
git clone https://github.com/alisfand99/Ketabkhan.git
cd Ketabkhan
pnpm install
pnpm dev          # http://localhost:8080
pnpm test
pnpm build
```

## Project structure

```
client/    React SPA (pages, components, hooks)
server/    Express API routes
shared/    Types shared by client and server
netlify/   Serverless function entry
```
