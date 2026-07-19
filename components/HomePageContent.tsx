"use client";

import { useLanguage } from "../language-context";
import StatsSection from "./StatsSection";

export default function HomePageContent() {
  const { t } = useLanguage();

  return (
    <>
      <section className="hero-section">
        <div className="hero-background" />
        <div className="hero-content">
          <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: t("hero_title") }} />
          <p className="hero-subtitle">{t("hero_subtitle")}</p>
          <button type="button" className="hero-cta">
            {t("hero_cta")}
          </button>
        </div>
      </section>

      <StatsSection />
    </>
  );
}
