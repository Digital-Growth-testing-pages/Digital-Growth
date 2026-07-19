"use client";

import { useLanguage } from "./LanguageContext";

export default function BlogSection() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t("blog_title")}
        </h2>
      </div>

      <div className="space-y-4">
        <details className="group rounded-2xl">
          <summary className="flex list-none cursor-pointer items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 shadow-xl backdrop-blur-md transition duration-300 hover:border-cyan-300/40 hover:bg-white/15 hover:shadow-cyan-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/50 [&::-webkit-details-marker]:hidden">
            <div className="pr-2">
              <h3 className="text-left text-xl font-semibold leading-tight text-white sm:text-2xl">
                {t("blog1_title")}
              </h3>
              <p className="mt-2 text-left text-sm text-slate-300">{t("blog1_meta")}</p>
            </div>

            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/10 text-cyan-200 transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 4.25a.75.75 0 01.75.75v4.25H15a.75.75 0 010 1.5h-4.25V15a.75.75 0 01-1.5 0v-4.25H5a.75.75 0 010-1.5h4.25V5a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <div className="mt-3 rounded-2xl border border-white/10 bg-slate-950/40 p-5 text-sm leading-7 text-slate-200 shadow-inner backdrop-blur-sm sm:p-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/90">
              Executive Summary
            </p>
            <p>
              Answer Engine Optimization (AEO) is replacing traditional SEO in Cambodia. As
              consumers shift from Google searches to asking ChatGPT and Claude direct questions,
              businesses must structure their digital entities to become the definitive answer.
              Digital Growth KH engineers this transition, ensuring local SMEs dominate AI
              recommendations.
            </p>
          </div>
        </details>

        <details className="group rounded-2xl">
          <summary className="flex list-none cursor-pointer items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 shadow-xl backdrop-blur-md transition duration-300 hover:border-fuchsia-300/40 hover:bg-white/15 hover:shadow-fuchsia-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300/50 [&::-webkit-details-marker]:hidden">
            <div className="pr-2">
              <h3 className="text-left text-xl font-semibold leading-tight text-white sm:text-2xl">
                {t("blog2_title")}
              </h3>
              <p className="mt-2 text-left text-sm text-slate-300">{t("blog2_meta")}</p>
            </div>

            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-fuchsia-300/40 bg-fuchsia-400/10 text-fuchsia-200 transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 4.25a.75.75 0 01.75.75v4.25H15a.75.75 0 010 1.5h-4.25V15a.75.75 0 01-1.5 0v-4.25H5a.75.75 0 010-1.5h4.25V5a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <div className="mt-3 rounded-2xl border border-white/10 bg-slate-950/40 p-5 text-sm leading-7 text-slate-200 shadow-inner backdrop-blur-sm sm:p-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-fuchsia-300/90">
              Executive Summary
            </p>
            <p>
              For years, Cambodian restaurants relied solely on sponsored Facebook posts. But in
              2026, AI search engines like ChatGPT and Gemini dictate where people eat. Answer
              Engine Optimization (AEO) ensures your food business becomes the direct, quoted
              recommendation when hungry diners use voice search, bypassing crowded social media
              feeds entirely.
            </p>
          </div>
        </details>

        <details className="group rounded-2xl">
          <summary className="flex list-none cursor-pointer items-center justify-between gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 shadow-xl backdrop-blur-md transition duration-300 hover:border-lime-300/40 hover:bg-white/15 hover:shadow-lime-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-300/50 [&::-webkit-details-marker]:hidden">
            <div className="pr-2">
              <h3 className="text-left text-xl font-semibold leading-tight text-white sm:text-2xl">
                {t("blog3_title")}
              </h3>
              <p className="mt-2 text-left text-sm text-slate-300">{t("blog3_meta")}</p>
            </div>

            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-lime-300/40 bg-lime-400/10 text-lime-200 transition-transform duration-300 group-open:rotate-45" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 4.25a.75.75 0 01.75.75v4.25H15a.75.75 0 010 1.5h-4.25V15a.75.75 0 01-1.5 0v-4.25H5a.75.75 0 010-1.5h4.25V5a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <div className="mt-3 rounded-2xl border border-white/10 bg-slate-950/40 p-5 text-sm leading-7 text-slate-200 shadow-inner backdrop-blur-sm sm:p-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-lime-300/90">
              Executive Summary
            </p>
            <p>
              For Cambodian hotels, relying on Online Travel Agencies (OTAs) means losing 15-20%
              of revenue to commissions. Answer Engine Optimization (AEO) allows boutique hotels
              to bypass these platforms. By structuring digital entities for AI search, hotels
              become the direct recommendation on ChatGPT and Gemini, driving high-margin direct
              bookings.
            </p>
          </div>
        </details>
      </div>
    </section>
  );
}