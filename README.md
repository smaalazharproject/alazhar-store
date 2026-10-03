# Toko Online — Firebase Login + GitHub Pages

Struktur: `index.html` (toko), `login.html`, `dashboard.html`, `css/`, `js/`, `data/` (produk & pengaturan, format JSON), `images/` (foto produk & logo).

## 1. Firebase (hanya untuk login)
1. Buka console.firebase.google.com → Add project.
2. Project settings → Your apps → Web (`</>`) → salin `firebaseConfig` ke `js/config.js`.
3. Authentication → Sign-in method → aktifkan **Email/Password**.
4. Authentication → Users → **Add user** (email & kata sandi admin).
5. Authentication → Settings → User actions → matikan **Enable create (sign-up)** agar orang lain tidak bisa mendaftar.
6. Authentication → Settings → Authorized domains → tambahkan `USERNAME.github.io`.

## 2. GitHub (hosting + database foto)
1. Buat repository **public**, unggah seluruh isi folder ini.
2. Isi `github.owner` dan `github.repo` di `js/config.js`.
3. Settings → Pages → Deploy from branch → `main` / root. Situs aktif di `https://USERNAME.github.io/NAMA_REPO/`.
4. Buat token: Settings (akun) → Developer settings → Fine-grained tokens → pilih hanya repo ini → Repository permissions → **Contents: Read and write**.
5. Masuk ke dashboard → Pengaturan → tempel token → Simpan.

## Catatan
- Perubahan di dashboard di-commit ke repo. Toko membaca data lewat raw.githubusercontent.com, jadi biasanya tampil dalam ±5 menit tanpa menunggu build Pages.
- Token hanya disimpan di browser admin. Jangan menaruh token di file mana pun di repo.
- Login Firebase melindungi halaman dashboard; yang melindungi penulisan data adalah token GitHub.
