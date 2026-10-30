# PortfolioV5

Website portfolio pribadi **Noval Rizky Nugraha**, Fullstack Developer dari Bandung, Indonesia.
Online di **[novalrizky24.my.id](https://novalrizky24.my.id)**.

Dibangun dengan **Astro 5**, **Tailwind CSS 4**, **React 19**, **Motion**, dan **Three.js**.

## Menjalankan

Butuh Node.js 20.19+ (atau 22+).

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

| Konten | Lokasi |
|---|---|
| Judul situs, menu, layanan, pengalaman, email, sosial media, awal karier (`careerStart`) | `src/data/site.ts` |
| Proyek portfolio | `src/content/projects/*.md` (gambar di `src/assets/projects/`) |
| Sertifikat | `src/data/certificates.ts` (gambar di `src/assets/certificates/`, nama file `penerbit-judul.jpg`) |
| Logo teknologi di marquee | `src/data/tech-stack.ts` (ikon dari [Simple Icons](https://simpleicons.org)) |
| Foto halaman About | `src/assets/about/potrait/` (urut sesuai nomor file) |
| Navbar | `src/components/layout/Header.astro` |
| Warna & font | blok `@theme` di `src/styles/global.css` |

Semua gambar di `src/assets/` otomatis dioptimasi ke WebP saat build.

**Proyek.** Galeri: satu gambar per baris = gambar lebar, dua gambar dalam satu baris = dua gambar persegi berdampingan.
Tambahkan judul `"natural"` (gambar utuh) atau `"phone"` (screenshot HP) di akhir link gambar. Isi `github`, `liveSite`,
atau `video` (link YouTube) untuk menampilkan tautan dan video demo. Urutan proyek otomatis dari tanggal terbaru.

**Sertifikat.** Urutan otomatis dari tanggal terbaru. Beri `featured: true` agar ikut tampil di masonry Home
(maks. `HOME_CERTIFICATE_LIMIT`). Di halaman About, kartu sertifikat bisa diklik untuk dibuka di lightbox.

**Statistik hero** (tahun pengalaman, jumlah proyek, jumlah sertifikat) dihitung otomatis saat build.

## Form kontak

Salin `.env.example` menjadi `.env`, lalu isi `PUBLIC_FORM_ENDPOINT` (misalnya URL form dari [Formspree](https://formspree.io)).
Untuk website online, tambahkan variabel yang sama di Vercel (Settings → Environment Variables) lalu deploy ulang.
Kalau dibiarkan kosong, tombol Submit akan membuka aplikasi email pengunjung dengan isi form.

## Animasi & interaksi

| Fitur | Lokasi |
|---|---|
| Layar pembuka (sekali per sesi browser) | `src/components/layout/Preloader.astro` |
| Navbar: logo memantul saat hover, efek text roll pada menu | `src/components/layout/Header.astro` |
| Reveal saat scroll, counter angka, warna kata mengikuti scroll, kartu proyek bertumpuk, kursor "View case", tombol Load More | `src/scripts/animations.ts` |
| Keyboard 3D tech stack di halaman Portfolio (tombol tertekan saat di-hover/diketuk) | `src/components/KeyboardScene.astro` + `public/models/keyboard.glb` |
| Masonry sertifikat di Home | `src/components/home/Certificates.astro` |
| Lightbox sertifikat, slider foto (looping) | `src/pages/about.astro` |
| Accordion layanan, form kontak | `src/components/react/*.tsx` |
| Marquee logo teknologi | `src/components/LogoMarquee.astro` |

Semua animasi menghormati setting `prefers-reduced-motion`. Three.js hanya diunduh di halaman Portfolio,
saat keyboard hampir terlihat di layar.

## Deploy

Di-deploy ke **Vercel** dari branch `main` (setiap push otomatis build ulang). Hasil build berupa file statis.
`vercel.json` mengatur cache file model 3D. Domain production diatur di `site` pada `astro.config.mjs`
(dipakai untuk sitemap, canonical URL, dan gambar pratinjau link).

## Kredit

- Desain dasar diadaptasi dari template Portox karya [Pentaclay](https://pentaclay.com).
- Ikon teknologi dari [Simple Icons](https://simpleicons.org) (CC0).
