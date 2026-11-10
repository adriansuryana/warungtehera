"use client";

import { useState } from "react";
import { MENU_ITEMS } from "../../data/menuData";
import { ShoppingBag, X, MessageCircle, ArrowRight, Trash2 } from "lucide-react";

interface CartDrawerProps {
  cart: Record<string, number>;
  onClearCart: () => void;
  onUpdateQty: (id: string, delta: number) => void;
}

export default function CartDrawer({
  cart,
  onClearCart,
  onUpdateQty,
}: CartDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [customerNotes, setCustomerNotes] = useState("");

  const cartEntries = Object.entries(cart).filter(([_, qty]) => qty > 0);
  const totalItems = cartEntries.reduce((acc, [_, qty]) => acc + qty, 0);

  const totalPrice = cartEntries.reduce((acc, [id, qty]) => {
    const item = MENU_ITEMS.find((m) => m.id === id);
    return acc + (item ? item.price * qty : 0);
  }, 0);

  if (totalItems === 0) return null;

  const handleSendToWhatsApp = () => {
    const orderLines = cartEntries
      .map(([id, qty]) => {
        const item = MENU_ITEMS.find((m) => m.id === id);
        if (!item) return "";
        return `• ${qty}x ${item.name} (Rp ${(item.price * qty).toLocaleString("id-ID")})`;
      })
      .filter(Boolean)
      .join("\n");

    const text = encodeURIComponent(
      `Halo Warung Teh Hera! 🍵\nSaya mau pesan menu via website resmi nih kak:\n\n` +
      `${orderLines}\n\n` +
      `*Total Pesanan: Rp ${totalPrice.toLocaleString("id-ID")}*\n` +
      (customerNotes ? `Catatan: ${customerNotes}\n\n` : `\n`) +
      `Mohon info ketersediaan menu dan estimasi pengirimannya yaa kak, terima kasih! 😊`
    );

    window.open(`https://wa.me/6281234567890?text=${text}`, "_blank");
  };

  return (
    <>
      {/* Floating Bar di atas Bottom Nav */}
      <div className="fixed bottom-16 inset-x-0 z-30 px-4 max-w-xl mx-auto pointer-events-none">
        <button
          onClick={() => setIsOpen(true)}
          className="pointer-events-auto w-full py-3 px-4 rounded-2xl bg-[#D8E500] text-[#084C3F] border-2 border-[#084C3F] shadow-2xl flex items-center justify-between active:scale-98 transition-transform"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#084C3F] text-[#D8E500] flex items-center justify-center font-black text-xs">
              {totalItems}
            </div>
            <div className="text-left">
              <span className="text-[10px] text-[#084C3F]/75 block font-bold">
                Keranjang Pesanan
              </span>
              <span className="text-sm font-black text-[#084C3F]">
                Rp {totalPrice.toLocaleString("id-ID")}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-black bg-[#084C3F] text-[#D8E500] px-3 py-1.5 rounded-xl shadow-sm">
            <span>Lihat Order</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </button>
      </div>

      {/* Modal Drawer Sheet */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fadeIn">
          <div className="w-full max-w-lg bg-[#084C3F] text-white rounded-t-3xl sm:rounded-3xl border-t-4 sm:border-4 border-[#D8E500] max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Drawer Header */}
            <div className="p-4 bg-[#05332A] text-[#D8E500] border-b border-[#D8E500]/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#D8E500]" />
                <h3 className="font-black text-base">Pesanan Kamu</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Item List */}
            <div className="p-4 overflow-y-auto space-y-3 flex-1">
              {cartEntries.map(([id, qty]) => {
                const item = MENU_ITEMS.find((m) => m.id === id);
                if (!item) return null;
                return (
                  <div
                    key={id}
                    className="p-3 rounded-xl bg-[#0C594A] border border-[#D8E500]/30 flex items-center justify-between gap-3"
                  >
                    <div>
                      <h4 className="font-black text-xs sm:text-sm text-white">
                        {item.name}
                      </h4>
                      <span className="text-[11px] font-bold text-[#D8E500]">
                        Rp {(item.price * qty).toLocaleString("id-ID")}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 bg-[#05332A] border border-[#D8E500] text-[#D8E500] px-2 py-0.5 rounded-lg">
                      <button
                        onClick={() => onUpdateQty(id, -1)}
                        className="p-1 hover:bg-white/10 rounded"
                      >
                        -
                      </button>
                      <span className="font-mono font-bold text-xs text-white">
                        {qty}
                      </span>
                      <button
                        onClick={() => onUpdateQty(id, 1)}
                        className="p-1 hover:bg-white/10 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}

              {/* Catatan Tambahan */}
              <div className="pt-2">
                <label className="text-[11px] font-bold text-[#D8E500] block mb-1">
                  Catatan untuk Dapur (Opsional):
                </label>
                <input
                  type="text"
                  value={customerNotes}
                  onChange={(e) => setCustomerNotes(e.target.value)}
                  placeholder="Contoh: Sambal taichan dipisah, es teh sedikit gula..."
                  className="w-full px-3 py-2 rounded-xl bg-[#05332A] border border-[#D8E500]/40 text-xs font-semibold text-white placeholder-white/40 focus:outline-none focus:border-[#D8E500]"
                />
              </div>
            </div>

            {/* Footer Summary & Checkout */}
            <div className="p-4 bg-[#05332A] border-t-2 border-[#D8E500]/30 space-y-3">
              <div className="flex items-center justify-between font-black text-sm text-white">
                <span>Total Pembayaran:</span>
                <span className="text-base text-[#D8E500]">
                  Rp {totalPrice.toLocaleString("id-ID")}
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={onClearCart}
                  className="p-3 rounded-xl border border-red-400/50 text-red-400 hover:bg-red-500/10 active:scale-95 transition-all"
                  title="Kosongkan Keranjang"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

                <button
                  onClick={handleSendToWhatsApp}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#D8E500] hover:bg-[#ebf53d] text-[#084C3F] font-black text-xs sm:text-sm active:scale-95 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-[#084C3F]" />
                  <span>Kirim Pesanan ke WhatsApp</span>
                </button>
              </div>

              <p className="text-[10px] text-center text-white/60">
                Pesanan akan langsung terhubung ke WhatsApp Admin Warung Teh Hera untuk konfirmasi ongkir & alamat.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
