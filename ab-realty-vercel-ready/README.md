# AB Realty Vercel Site - Supabase Ready

## Deploy settings on Vercel

Framework Preset: Other  
Install Command: `npm install`  
Build Command: `npm run build`  
Output Directory: `dist`  
Root Directory: `.`

## Supabase live admin setup

1. Create a Supabase project.
2. Open Supabase > SQL Editor.
3. Run the file: `supabase/schema.sql`.
4. Go to Authentication > Users > Add user.
5. Create Amar's admin email and password.
6. Open `index.html` and paste your Supabase Project URL and anon public key here:

```js
window.AB_SUPABASE = {
  url: "PASTE_SUPABASE_URL_HERE",
  anonKey: "PASTE_SUPABASE_ANON_KEY_HERE"
};
```

7. Push to GitHub and redeploy on Vercel.

## Admin

Go to `/admin`.

Amar logs in with the Supabase Auth email/password, adds a property, clicks Submit Property, and it appears live in Our Properties and Featured Properties.

Images: paste an image URL in the Image URL field. You can use Supabase Storage, Cloudinary, Wix Media, or a GitHub/Vercel asset path.


## Phone image/video upload

This version lets Amar upload images or videos directly from `/admin`.

Supabase setup required:
1. Run `supabase/schema.sql` again in Supabase SQL Editor.
2. The SQL creates a public Storage bucket called `property-media`.
3. Admin users can upload media when logged in.
4. Visitors can view uploaded property media.

Supported uploads: JPG, PNG, WEBP, GIF, MP4, WEBM, MOV. Current limit: 50MB per file.
