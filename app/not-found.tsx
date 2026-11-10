import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#E58AF1] text-[#004B2C] flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-black mb-2">404</h1>
      <p className="text-sm font-bold mb-4">Halaman tidak ditemukan.</p>
      <Link
        href="/"
        className="px-4 py-2 bg-[#004B2C] text-[#E58AF1] rounded-full text-xs font-bold"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
