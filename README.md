# 🍵 Warung Teh Hera (WTH) Web

Website resmi **Warung Teh Hera** yang dibangun menggunakan **Next.js (React)** dan **Tailwind CSS**. Saat ini dirancang sebagai halaman *Under Construction / Coming Soon* yang berkelas, interaktif, dan scalable untuk kebutuhan jangka panjang ekspansi bisnis kuliner UMKM.

---

## 🎨 Palet Warna & Vibe Brand

Palet warna dan identitas visual disesuaikan langsung dengan **`logo.svg`** Warung Teh Hera:
- **Deep Forest Green** (`#004B2C` / `#011C11`): Melambangkan kesegaran rempah alami, tradisi daun teh asli nusantara, dan kesan premium yang hangat.
- **Orchid Pink Pastel** (`#E58AF1` / `#F2B2FA`): Melambangkan sentuhan ramah, modern, manis, dan playful khas jajanan/minuman kekinian.
- **Warm Culinary Accents**: Nuansa ivory/cream lembut dan efek pencahayaan glassmorphism untuk pengalaman visual yang menggugah selera.

---

## ✨ Fitur-Fitur Utama

1. **Countdown Timer Interaktif**:
   - Menghitung mundur secara real-time: **Hari**, **Jam**, **Menit**, dan **Detik**.
   - Dilengkapi tombol switch fleksibel (1 Bulan / 30 Hari, Standar 45 Hari, atau 2 Bulan / 60 Hari) yang dapat disesuaikan sesuai target perilisan resmi.
   - Indikator bar kesiapan peluncuran dapur digital.
2. **Logo Showcase & Ambient Branding**:
   - Menampilkan logo SVG Warung Teh Hera dengan efek glow dan animasi halus.
3. **Bocoran Menu (Menu Teaser / Sneak Peek)**:
   - Pengunjung dapat melihat bocoran menu andalan: *Es Teh Racik Melati Hera, Nasi Ayam Rempah, Dimsum Kukus Chili Oil, Wedang Rempah Hangat, Nasi Goreng Kampung, dan Pisang Goreng Wijen Madu*.
   - Filter kategori (Semua, Minuman, Makanan, Camilan) dan tombol interaktif "Suka Menu".
4. **Formulir "Kabari Saya Pas Buka" + Efek Confetti**:
   - Input nomor WhatsApp atau Email untuk mendapatkan voucher promo pembukaan (Diskon 25%).
   - Memunculkan selebrasi confetti animasi saat pendaftaran berhasil.
5. **Akses Cepat WhatsApp**:
   - Tombol pesan langsung terhubung ke WhatsApp Admin dengan template chat yang ramah.
6. **Struktur Scalable (Siap Dikembangkan Lebih Jauh)**:
   - Dirancang dengan Next.js App Router yang siap ditambah fitur: Menu Ordering Online, Integrasi Payment Gateway (Midtrans/Xendit), Manajemen Meja/Reservasi, dan Layanan Katering.

---

## 🚀 Cara Menjalankan Project

### 1. Jalankan Mode Development
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat website secara langsung.

### 2. Build untuk Produksi
```bash
npm run build
npm run start
```

---

## 📁 Struktur Folder
```text
├── app/
│   ├── globals.css          # Styling global & efek glow
│   ├── layout.tsx           # SEO metadata, viewport, favicon
│   └── page.tsx             # Halaman utama Coming Soon
├── components/
│   ├── Navbar.tsx           # Navigasi atas & CTA WhatsApp
│   ├── CountdownTimer.tsx   # Komponen hitung mundur & switcher waktu
│   ├── MenuSneakPeek.tsx    # Teaser bocoran menu makanan & minuman
│   ├── NotificationSection.tsx # Form pendaftaran promo & confetti
│   ├── BrandStory.tsx       # Cerita & keunggulan UMKM Teh Hera
│   └── Footer.tsx           # Footer, jam operasional & kontak
├── public/
│   └── logo.svg             # Asset logo Warung Teh Hera
├── tailwind.config.js       # Konfigurasi palet warna kustom
└── package.json
```
