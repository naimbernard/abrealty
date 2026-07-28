# AB Realty — Final Clean Vercel Build

This version is intentionally built as a bulletproof static site to stop Vercel 404 errors.

## Vercel settings

Framework Preset: Other
Install Command: npm install
Build Command: npm run build
Output Directory: dist
Root Directory: .

## Critical GitHub upload rule

Upload the CONTENTS of this folder to the GitHub repo root. Your repo must show:

- index.html
- package.json
- vercel.json
- assets/
- README.md

Do not upload a folder that contains these files inside it.

## Admin

Open `/admin`. Password: abrealty2026

Admin updates are stored in browser localStorage. This is designed for a simple front-end admin test. For multi-device live updates, connect Supabase/Firebase later.
