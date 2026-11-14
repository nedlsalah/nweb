# nedlsalah-next

1. `npm install && npm run dev`
2. Copy your existing `img/` folder (me.jpg, work/*.webp, ill-design.svg) into `public/img/`.
3. Paste your exact brand colours and fonts: `app/globals.css` (tokens) and `tailwind.config.ts` (fontFamily).
4. Videos: put compressed .mp4 files in `public/videos/` and set `videoSrc` on any item in `lib/content.ts`
   (see the commented placeholder on the Video Portfolio item). Items with `videoSrc` autoplay on scroll
   and open the lightbox; items without it behave exactly like your current site (link out).
5. GitHub Pages: `EXPORT=1 NEXT_PUBLIC_BASE_PATH=/Web npm run build` (output in `out/`).
