"use client";

import { useLanguage } from "./LanguageContext";

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t("services_title")}
        </h2>
        <p className="mt-3 text-xl font-semibold text-cyan-300">{t("growth_title")}</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-cyan-500/20">
          <div className="mb-4 flex items-start justify-between gap-3">
            <h3 className="text-2xl font-bold text-white">{t("growth1_title")}</h3>
            <span className="rounded-full border border-cyan-300/40 bg-cyan-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-200">
              {t("growth1_badge")}
            </span>
          </div>
          <p className="mb-6 text-3xl font-extrabold text-cyan-300">{t("growth1_price")}</p>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-100">
            <li>• {t("growth1_feat1")}</li>
            <li>• {t("growth1_feat2")}</li>
            <li>• {t("growth1_feat3")}</li>
            <li>• {t("growth1_feat4")}</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md transition hover:-translate-y-1 hover:border-fuchsia-300/50 hover:shadow-fuchsia-500/20">
          <div className="mb-4 flex items-start justify-between gap-3">
            <h3 className="text-2xl font-bold text-white">{t("growth2_title")}</h3>
            <span className="rounded-full border border-fuchsia-300/40 bg-fuchsia-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-fuchsia-200">
              {t("growth2_badge")}
            </span>
          </div>
          <p className="mb-6 text-3xl font-extrabold text-fuchsia-300">{t("growth2_price")}</p>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-100">
            <li>• {t("growth2_feat1")}</li>
            <li>• {t("growth2_feat2")}</li>
            <li>• {t("growth2_feat3")}</li>
            <li>• {t("growth2_feat4")}</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md transition hover:-translate-y-1 hover:border-lime-300/50 hover:shadow-lime-500/20 md:col-span-2 xl:col-span-1">
          <div className="mb-4 flex items-start justify-between gap-3">
            <h3 className="text-2xl font-bold text-white">{t("growth3_title")}</h3>
            <span className="rounded-full border border-lime-300/40 bg-lime-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-lime-200">
              {t("growth3_badge")}
            </span>
          </div>
          <p className="mb-6 text-3xl font-extrabold text-lime-300">{t("growth3_price")}</p>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-100">
            <li>• {t("growth3_feat1")}</li>
            <li>• {t("growth3_feat2")}</li>
            <li>• {t("growth3_feat3")}</li>
            <li>• {t("growth3_feat4")}</li>
          </ul>
          <p className="mt-6 rounded-xl border border-lime-300/30 bg-lime-400/10 px-4 py-3 text-sm font-medium text-lime-100">
            {t("growth3_incentive")}
          </p>
        </article>
      </div>
    </section>
  );
}
