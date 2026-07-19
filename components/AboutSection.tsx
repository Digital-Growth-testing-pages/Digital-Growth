"use client";

import { useLanguage } from "./LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
          Digital Growth KH
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          About The Agency
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <article className="rounded-3xl border border-cyan-300/20 bg-white/10 p-7 shadow-2xl backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-cyan-500/20">
          <h3 className="text-xl font-semibold text-cyan-200">{t("about_mission")}</h3>
          <p className="mt-4 text-sm leading-7 text-slate-100">{t("about_mission_text")}</p>
        </article>

        <article className="rounded-3xl border border-fuchsia-300/20 bg-white/10 p-7 shadow-2xl backdrop-blur-md transition hover:-translate-y-1 hover:border-fuchsia-300/50 hover:shadow-fuchsia-500/20">
          <h3 className="text-xl font-semibold text-fuchsia-200">{t("about_vision")}</h3>
          <p className="mt-4 text-sm leading-7 text-slate-100">{t("about_vision_text")}</p>
        </article>

        <article className="rounded-3xl border border-emerald-300/20 bg-white/10 p-7 shadow-2xl backdrop-blur-md transition hover:-translate-y-1 hover:border-emerald-300/50 hover:shadow-emerald-500/20 lg:self-start">
          <h3 className="text-xl font-semibold text-emerald-200">{t("about_location")}</h3>
          <p className="mt-4 text-sm leading-7 text-slate-100">{t("about_location_text")}</p>
        </article>
      </div>
    </section>
  );
}