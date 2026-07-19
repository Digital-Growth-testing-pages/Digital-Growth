"use client";

import { useLanguage } from "./LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-10 text-center sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold sm:gap-6">
        <a
          href="https://t.me/That_Latin_Guy"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-cyan-300/25 bg-cyan-400/10 px-4 py-2 text-cyan-200 transition hover:border-cyan-300/50 hover:bg-cyan-400/15 hover:text-cyan-100"
        >
          Telegram
        </a>
        <a
          href="https://wa.me/85586216037"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-lime-300/25 bg-lime-400/10 px-4 py-2 text-lime-200 transition hover:border-lime-300/50 hover:bg-lime-400/15 hover:text-lime-100"
        >
          WhatsApp
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61588268477197"
          target="_blank"
          rel="noreferrer"
          aria-label="Follow the Digital Growth Facebook page for SEO and marketing tips in Cambodia"
          className="rounded-full border border-blue-400/25 bg-blue-500/10 px-4 py-2 text-blue-200 transition hover:border-blue-300/50 hover:bg-blue-500/15 hover:text-blue-100"
        >
          Digital Growth Facebook Page
        </a>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-200">
            {t("footer_text")}
          </p>
          <p className="text-sm text-slate-400">{t("footer_copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
