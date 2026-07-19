'use client';

import { useLanguage } from './LanguageContext';

export default function ProjectsPageContent() {
  const { t } = useLanguage();

  const html = (key: string) => ({ __html: t(key) });

  return (
    <>
      <div className="project-category" id="food">
        <h3 className="category-title">{t('cat_food')}</h3>
        <div className="projects-grid">
          <div className="project-card" id="project-pancake">
            <a href="https://digitalgrowthkh.github.io/nuggets_for_a_cause/#restaurant" target="_blank" rel="noreferrer">
              <img
                src="/images/pancake-house-logo.jpg"
                alt="Pancake House - Pancake Restaurant SEO Case Study"
                className="project-img"
                loading="lazy"
                decoding="async"
                width={400}
                height={250}
                style={{ backgroundColor: 'white' }}
              />
            </a>
            <div className="project-name">Pancake House</div>
            <div className="project-meta">
              <span className="tech-tag">Starter Website + SEO tracking</span>
              <span className="metric-tag highlight">Increased visibility</span>
            </div>
            <div className="project-desc" dangerouslySetInnerHTML={html('project1_desc')} />
          </div>
        </div>
      </div>

      <div className="project-category" id="wellness">
        <h3 className="category-title">{t('cat_wellness')}</h3>
        <div className="projects-grid">
          <div className="project-card" id="project-coffee">
            <a href="https://coffeeandtalk.github.io/Coffee-Talk/" target="_blank" rel="noreferrer">
              <img
                src="/images/coffee-&-talk-logo.png"
                alt="Coffee & Talk - Wellness Business AEO and SEO in Phnom Penh"
                className="project-img"
                loading="lazy"
                decoding="async"
                width={400}
                height={250}
                style={{ backgroundColor: 'white' }}
              />
            </a>
            <div className="project-name">Coffee &amp; Talk</div>
            <div className="project-meta">
              <span className="tech-tag">Starter Website design + SEO and AEO Schema</span>
              <span className="metric-tag highlight">+50% more visibility</span>
            </div>
            <div className="project-desc">
              {t('project3_desc')}{' '}
              <a href="https://coffeeandtalk.github.io/Coffee-Talk/" target="_blank" rel="noreferrer" className="project-link">
                View site →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-category" id="landscape">
        <h3 className="category-title">{t('cat_landscape')}</h3>
        <div className="projects-grid">
          <div className="project-card" id="project-garden">
            <a href="https://digital-growth-testing-pages.github.io/The-Garden-Guy/" target="_blank" rel="noreferrer">
              <img
                src="/images/the-garden-guy-logo.webp"
                alt="The Garden Guy - Landscape Design GEO Optimization"
                className="project-img"
                loading="lazy"
                decoding="async"
                width={400}
                height={250}
                style={{ backgroundColor: 'white' }}
              />
            </a>
            <div className="project-name">The Garden Guy</div>
            <div className="project-meta">
              <span className="tech-tag">Business Website + SEO, GEO strategy</span>
              <span className="metric-tag highlight">Increased enquiries by up to 100%</span>
            </div>
            <div className="project-desc" dangerouslySetInnerHTML={html('project4_desc')} />
          </div>

          <div className="project-card" id="project-gate">
            <a href="https://digital-growth-testing-pages.github.io/The-Gate-Guy/" target="_blank" rel="noreferrer">
              <img
                src="/images/the-gate-guy-logo.png"
                alt="The Gate Guy - Gate Installation and Design"
                className="project-img"
                loading="lazy"
                decoding="async"
                width={400}
                height={250}
                style={{ backgroundColor: 'black' }}
              />
            </a>
            <div className="project-name">The Gate Guy</div>
            <div className="project-meta">
              <span className="tech-tag">Basic website + SEO strategy</span>
              <span className="metric-tag highlight"></span>
            </div>
            <div className="project-desc" dangerouslySetInnerHTML={html('project5_desc')} />
          </div>
        </div>
      </div>
    </>
  );
}
