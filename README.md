# PortfolioV5

Website portfolio pribadi **Noval Rizky Nugraha**, Web Developer & AI Engineer dari Bandung, Indonesia.

Dibangun dengan **Astro 5**, **Tailwind CSS 4**, **React 19**, dan **Motion**.

## Menjalankan

Butuh Node.js 20.3+ (atau 22+).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # hasil statis di folder dist/
npm run preview   # cek hasil build
```

## Halaman

| URL | File |
|---|---|
| `/` | `src/pages/index.astro` |
| `/about` | `src/pages/about.astro` |
| `/portfolio`, `/portfolio/[slug]` | `src/pages/portfolio/` |
| `/contact` | `src/pages/contact.astro` |
| 404 | `src/pages/404.astro` |

## Mengganti konten

- **Teks umum, menu, layanan, testimoni, FAQ, pengalaman, awards, email, sosial media** → `src/data/site.ts`
- **Proyek portfolio** → `src/content/projects/*.md`. Galeri: satu gambar per baris = gambar lebar, dua gambar dalam satu baris = dua gambar persegi berdampingan.
- **Navbar** → `src/components/layout/Header.astro`
- **Gambar** → `src/assets/` (otomatis dioptimasi ke WebP saat build)
- **Warna & font** → blok `@theme` di `src/styles/global.css`

## Form kontak

Salin `.env.example` menjadi `.env`, lalu isi `PUBLIC_FORM_ENDPOINT` (misalnya URL form dari [Formspree](https://formspree.io)).
Kalau dibiarkan kosong, tombol Submit akan membuka aplikasi email pengunjung dengan isi form.

## Animasi & interaksi

| Fitur | Lokasi |
|---|---|
| Navbar: logo memantul saat hover, efek text roll pada menu | `src/components/layout/Header.astro` |
| Reveal saat scroll, counter angka, warna kata mengikuti scroll, kartu proyek bertumpuk, kursor "View case" | `src/scripts/animations.ts` |
| Accordion layanan, slider testimoni, FAQ, form kontak | `src/components/react/*.tsx` |
| Marquee logo & teks "TESTIMONIALS" | CSS `.marquee-track` di `src/styles/global.css` |

Semua animasi menghormati setting `prefers-reduced-motion`.

## Deploy

Hasil `npm run build` berupa file statis, jadi bisa di-deploy ke Vercel, Netlify, Cloudflare Pages, atau GitHub Pages.
Ganti `site` di `astro.config.mjs` dengan domain kamu (dipakai untuk sitemap & meta tag).

## Kredit

Desain dasar diadaptasi dari template Portox karya [Pentaclay](https://pentaclay.com).
