'use client';

import { useLanguage } from './LanguageContext';

export default function AboutPageContent() {
  const { t } = useLanguage();

  return (
    <>
      <h2 id="mission" style={{ scrollMarginTop: '120px' }}>
        {t('about_mission')}
      </h2>
      <div className="about-card glass-card">
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>{t('about_mission_text')}</p>
      </div>

      <h2 id="vision" style={{ scrollMarginTop: '120px' }}>
        {t('about_vision')}
      </h2>
      <div className="about-card glass-card">
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>{t('about_vision_text')}</p>
      </div>

      <h2 id="location" style={{ scrollMarginTop: '120px' }}>
        {t('about_location')}
      </h2>
      <div className="about-card glass-card">
        <p>{t('about_location_text')}</p>
      </div>

      <h2 id="leadership" style={{ scrollMarginTop: '120px' }}>
        {t('about_leadership')}
      </h2>
      <div className="team-grid">
        <div className="about-card glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
          <img
            src="/images/william-swanepoel-digital-growth-kh.webp"
            alt="William Christoff Swanepoel - Strategy Lead and SEO Specialist Cambodia"
            width={100}
            height={100}
            loading="lazy"
            decoding="async"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '1rem',
              border: '2px solid var(--neon-cyan)',
            }}
          />
          <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-light)', fontSize: '1.5rem' }}>
            William Christoff Swanepoel
          </h3>
          <p
            style={{
              color: 'var(--neon-cyan)',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.9rem',
              marginBottom: '1rem',
            }}
          >
            Co-founder &amp; Strategy lead
          </p>
          <p style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Mr. William Swanepoel leads strategy with deep international and digital market insight. His problem-solving approach and expertise in full-stack AI integrations are a key element of the company.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <span style={{ fontSize: '0.8rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.3rem 0.8rem', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>NLP</span>
            <span style={{ fontSize: '0.8rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.3rem 0.8rem', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>Full-Stack Integration</span>
            <span style={{ fontSize: '0.8rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.3rem 0.8rem', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>Entity Mapping</span>
          </div>
          <a
            href="https://www.linkedin.com/in/william-swanepoel-469baa219/"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--neon-cyan)', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', marginTop: '1rem' }}
          >
            Connect on LinkedIn →
          </a>
        </div>

        <div className="about-card glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
          <img
            src="/images/eddy-hernandez-digital-growth-kh.webp"
            alt="Eddy Hernandez - Lead Developer and AEO Expert Phnom Penh"
            width={100}
            height={100}
            loading="lazy"
            decoding="async"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              objectFit: 'cover',
              marginBottom: '1rem',
              border: '2px solid var(--neon-magenta)',
            }}
          />
          <h3 style={{ margin: '0 0 0.5rem 0', color: 'var(--text-light)', fontSize: '1.5rem' }}>Eddy Hernandez</h3>
          <p
            style={{
              color: 'var(--neon-magenta)',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.9rem',
              marginBottom: '1rem',
            }}
          >
            Co-Founder &amp; Lead Developer
          </p>
          <p style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Mr. Hernandez develops strategies across Entity-Based SEO and AEO for the Southeast Asian market. His local connection helps bridge traditional Khmer business practices with next-generation global AI algorithms.
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <span style={{ fontSize: '0.8rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.3rem 0.8rem', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>AEO</span>
            <span style={{ fontSize: '0.8rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.3rem 0.8rem', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>GEO Strategy</span>
            <span style={{ fontSize: '0.8rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.3rem 0.8rem', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>Khmer Market Analysis</span>
          </div>
          <a
            href="https://www.linkedin.com/in/eddy-hernandez-40a0613a9/"
            target="_blank"
            rel="noreferrer"
            style={{ color: 'var(--neon-magenta)', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block', marginTop: '1rem' }}
          >
            Connect on LinkedIn →
          </a>
        </div>
      </div>
    </>
  );
}
