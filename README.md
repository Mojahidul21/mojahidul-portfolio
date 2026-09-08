# Mojahidul Alam Portfolio

A responsive portfolio for Mojahidul Alam, an aspiring game developer and CS student.

## Run on your computer

Requirements: Node.js 18 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Verify a production build locally

```bash
npm run typecheck
npm run build
npm run preview
```

## Deploy on Vercel

1. Upload this folder to a GitHub repository.
2. In Vercel, choose **Add New Project** and import that repository.
3. Keep the detected Vite settings, or use:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**.

The included `vercel.json` already contains these settings.
