import Link from 'next/link';

export default function UtilityDock() {
  return (
    <div className="fixed bottom-4 left-1/2 z-[50] flex w-max -translate-x-1/2 items-center gap-4 rounded-full border border-neonCyan/30 bg-[#0a0c0f]/80 px-4 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(0,240,255,0.1)] backdrop-blur-md md:bottom-8">
      <Link
        href="/contact"
        className="rounded-full border border-neonCyan px-5 py-2 text-sm font-bold uppercase text-neonCyan transition-all duration-300 hover:bg-neonCyan hover:text-black hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]"
      >
        Get a Quote
      </Link>

      <div className="h-6 w-[1px] bg-white/10" />

      <div className="flex items-center gap-3">
        <a
          href="https://t.me/"
          target="_blank"
          rel="noreferrer"
          aria-label="Telegram"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-neonMagenta"
        >
          TG
        </a>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:text-neonMagenta"
        >
          WA
        </a>
      </div>
    </div>
  );
}
