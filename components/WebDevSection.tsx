"use client";

import { useLanguage } from "./LanguageContext";

export default function WebDevSection() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t("webdev_title")}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-cyan-500/20">
          <div className="mb-4 flex items-start justify-between gap-3">
            <h3 className="text-2xl font-bold text-white">{t("web1_title")}</h3>
            <span className="rounded-full border border-cyan-300/40 bg-cyan-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-200">
              {t("web1_badge")}
            </span>
          </div>
          <p className="mb-6 text-3xl font-extrabold text-cyan-300">{t("web1_price")}</p>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-100">
            <li>• {t("web1_feat1")}</li>
            <li>• {t("web1_feat2")}</li>
            <li>• {t("web1_feat3")}</li>
            <li>• {t("web1_feat4")}</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md transition hover:-translate-y-1 hover:border-fuchsia-300/50 hover:shadow-fuchsia-500/20">
          <div className="mb-4 flex items-start justify-between gap-3">
            <h3 className="text-2xl font-bold text-white">{t("web2_title")}</h3>
            <span className="rounded-full border border-fuchsia-300/40 bg-fuchsia-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-fuchsia-200">
              {t("web2_badge")}
            </span>
          </div>
          <p className="mb-6 text-3xl font-extrabold text-fuchsia-300">{t("web2_price")}</p>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-100">
            <li>• {t("web2_feat1")}</li>
            <li>• {t("web2_feat2")}</li>
            <li>• {t("web2_feat3")}</li>
            <li>• {t("web2_feat4")}</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md transition hover:-translate-y-1 hover:border-lime-300/50 hover:shadow-lime-500/20 md:col-span-2 xl:col-span-1">
          <div className="mb-4 flex items-start justify-between gap-3">
            <h3 className="text-2xl font-bold text-white">{t("web3_title")}</h3>
            <span className="rounded-full border border-lime-300/40 bg-lime-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-lime-200">
              {t("web3_badge")}
            </span>
          </div>
          <p className="mb-6 text-3xl font-extrabold text-lime-300">{t("web3_price")}</p>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-100">
            <li>• {t("web3_feat1")}</li>
            <li>• {t("web3_feat2")}</li>
            <li>• {t("web3_feat3")}</li>
            <li>• {t("web3_feat4")}</li>
          </ul>
          <p className="mt-6 rounded-xl border border-lime-300/30 bg-lime-400/10 px-4 py-3 text-sm font-medium text-lime-100">
            {t("web3_incentive")}
          </p>
        </article>
      </div>

      <p className="mt-6 text-center text-sm text-slate-300">{t("web_note")}</p>

      <div className="mb-8 mt-14 text-center">
        <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {t("classic_title")}
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article className="rounded-2xl border border-white/20 bg-white/5 p-6 shadow-xl backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-300/40">
          <h4 className="text-xl font-bold text-white">{t("classic1_title")}</h4>
          <p className="mb-5 mt-2 text-2xl font-extrabold text-cyan-300">{t("classic1_price")}</p>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-100">
            <li>• {t("classic1_feat1")}</li>
            <li>• {t("classic1_feat2")}</li>
            <li>• {t("classic1_feat3")}</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-white/20 bg-white/5 p-6 shadow-xl backdrop-blur-md transition hover:-translate-y-1 hover:border-fuchsia-300/40">
          <h4 className="text-xl font-bold text-white">{t("classic2_title")}</h4>
          <p className="mb-5 mt-2 text-2xl font-extrabold text-fuchsia-300">{t("classic2_price")}</p>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-100">
            <li>• {t("classic2_feat1")}</li>
            <li>• {t("classic2_feat2")}</li>
            <li>• {t("classic2_feat3")}</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-white/20 bg-white/5 p-6 shadow-xl backdrop-blur-md transition hover:-translate-y-1 hover:border-lime-300/40 md:col-span-2 xl:col-span-1">
          <h4 className="text-xl font-bold text-white">{t("classic3_title")}</h4>
          <p className="mb-5 mt-2 text-2xl font-extrabold text-lime-300">{t("classic3_price")}</p>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-100">
            <li>• {t("classic3_feat1")}</li>
            <li>• {t("classic3_feat2")}</li>
            <li>• {t("classic3_feat3")}</li>
          </ul>
          <p className="mt-6 rounded-xl border border-lime-300/30 bg-lime-400/10 px-4 py-3 text-sm font-medium text-lime-100">
            {t("classic3_incentive")}
          </p>
        </article>
      </div>
    </section>
  );
}
