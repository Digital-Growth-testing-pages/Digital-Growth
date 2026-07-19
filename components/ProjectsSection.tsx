"use client";

import { useLanguage } from "./LanguageContext";

export default function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t("projects_title")}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <article className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-cyan-500/20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-cyan-200">{t("cat_food")}</p>
          <p
            className="text-sm leading-relaxed text-slate-100"
            dangerouslySetInnerHTML={{ __html: t("project1_desc") }}
          />
        </article>

        <article className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md transition hover:-translate-y-1 hover:border-fuchsia-300/50 hover:shadow-fuchsia-500/20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-fuchsia-200">
            {t("cat_accommodation")}
          </p>
          <p
            className="text-sm leading-relaxed text-slate-100"
            dangerouslySetInnerHTML={{ __html: t("project2_desc") }}
          />
        </article>

        <article className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md transition hover:-translate-y-1 hover:border-lime-300/50 hover:shadow-lime-500/20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-lime-200">
            {t("cat_wellness")}
          </p>
          <p
            className="text-sm leading-relaxed text-slate-100"
            dangerouslySetInnerHTML={{ __html: t("project3_desc") }}
          />
        </article>

        <article className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-md transition hover:-translate-y-1 hover:border-emerald-300/50 hover:shadow-emerald-500/20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-200">
            {t("cat_landscape")}
          </p>
          <p
            className="text-sm leading-relaxed text-slate-100"
            dangerouslySetInnerHTML={{ __html: t("project4_desc") }}
          />
        </article>
      </div>
    </section>
  );
}
