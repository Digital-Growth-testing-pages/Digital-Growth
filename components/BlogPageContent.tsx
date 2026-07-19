'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageContext';

export default function BlogPageContent() {
  const { t } = useLanguage();

  const html = (key: string) => ({ __html: t(key) });

  return (
    <>
      <h2>{t('blog_title')}</h2>

      <article className="glass-card blog-post">
        <h3>{t('blog1_title')}</h3>
        <div className="blog-meta">{t('blog1_meta')}</div>

        <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem', borderLeft: '4px solid var(--neon-cyan)' }}>
          <h4 style={{ color: 'var(--neon-cyan)', marginTop: 0, marginBottom: '0.5rem', fontSize: '1.2rem' }}>
            Executive Summary
          </h4>
          <p style={{ marginBottom: 0, fontSize: '1rem', lineHeight: 1.6 }}>
            Answer Engine Optimization (AEO) is replacing traditional SEO in Cambodia. As consumers shift from Google searches to asking ChatGPT and Claude direct questions, businesses must structure their digital entities to become the definitive answer. Digital Growth KH engineers this transition, ensuring local SMEs dominate AI recommendations.
          </p>
        </div>

        <div className="blog-content">
          <p dangerouslySetInnerHTML={html('blog1_p1')} />
          <p dangerouslySetInnerHTML={html('blog1_p2')} />
          <p dangerouslySetInnerHTML={html('blog1_p3')} />

          <h4>{t('blog1_h2')}</h4>
          <p dangerouslySetInnerHTML={html('blog1_p4')} />
          <p dangerouslySetInnerHTML={html('blog1_p5')} />

          <h4>{t('blog1_h3')}</h4>
          <p dangerouslySetInnerHTML={html('blog1_p6')} />

          <div style={{ overflowX: 'auto', margin: '2rem 0' }}>
            <table className="glass-panel" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <th style={{ padding: '1rem', color: 'var(--neon-cyan)' }}>Feature</th>
                  <th style={{ padding: '1rem', color: '#a0b0c0' }}>Traditional SEO</th>
                  <th style={{ padding: '1rem', color: 'var(--neon-magenta)' }}>Digital Growth KH AI Strategy</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>Goal</td>
                  <td style={{ padding: '1rem' }}>Rank on Page 1 of Google</td>
                  <td style={{ padding: '1rem' }}>Become the definitive, quoted answer in AI</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>Content Focus</td>
                  <td style={{ padding: '1rem' }}>Keyword stuffing &amp; long articles</td>
                  <td style={{ padding: '1rem' }}>Direct answers &amp; Entity-Based structuring</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>Local Tech</td>
                  <td style={{ padding: '1rem' }}>Basic translation</td>
                  <td style={{ padding: '1rem' }}>Khmer Unicode Tokenization</td>
                </tr>
                <tr>
                  <td style={{ padding: '1rem', fontWeight: 600 }}>Result</td>
                  <td style={{ padding: '1rem' }}>A blue link among competitors</td>
                  <td style={{ padding: '1rem' }}>&apos;Position Zero&apos; AI recommendation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4>{t('blog1_h4')}</h4>
          <p dangerouslySetInnerHTML={html('blog1_p8')} />

          <h4 style={{ color: 'var(--neon-lime)', fontSize: '1.6rem', marginTop: '3rem' }}>{t('blog1_h5')}</h4>
          <p style={{ fontSize: '1.1rem', fontWeight: 600 }} dangerouslySetInnerHTML={html('blog1_p9')} />
          <p>
            {t('blog1_p10')}{' '}
            <Link href="/contact" style={{ color: 'var(--neon-cyan)', textDecoration: 'underline', fontWeight: 'bold' }}>
              Contact Digital Growth KH today
            </Link>
          </p>
        </div>
      </article>

      <article className="glass-card blog-post" style={{ marginTop: '3rem' }}>
        <h3>{t('blog2_title')}</h3>
        <div className="blog-meta">{t('blog2_meta')}</div>

        <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem', borderLeft: '4px solid var(--neon-magenta)' }}>
          <h4 style={{ color: 'var(--neon-magenta)', marginTop: 0, marginBottom: '0.5rem', fontSize: '1.2rem' }}>
            Executive Summary
          </h4>
          <p style={{ marginBottom: 0, fontSize: '1rem', lineHeight: 1.6 }}>
            For years, Cambodian restaurants relied solely on sponsored Facebook posts. But in 2026, AI search engines like ChatGPT and Gemini dictate where people eat. Answer Engine Optimization (AEO) ensures your food business becomes the direct, quoted recommendation when hungry diners use voice search, bypassing crowded social media feeds entirely.
          </p>
        </div>

        <div className="blog-content">
          <p>
            Walk past any cafe in BKK1 or restaurant along the Riverside, and you will hear the same complaint from owners: <em>&quot;We are spending more on Facebook ads, but getting fewer customers.&quot;</em> The reality of the Cambodian F&amp;B market in 2026 is that social media saturation has reached its peak. Users are scrolling past your food photos, and traditional digital marketing is yielding a lower ROI than ever.
          </p>

          <h4 style={{ color: 'var(--text-light)', marginTop: '2rem' }}>Enter the AI Era: The &apos;Drive-By&apos; Voice Search</h4>
          <p>
            How do diners find food today? They are not scrolling Facebook pages to find a menu. They are driving down Monivong Boulevard, tapping their steering wheel, and asking their phone: <em>&quot;Gemini, where is the best authentic Khmer food near me that has parking?&quot;</em>
          </p>
          <p>
            If your restaurant relies solely on a Facebook page, the AI cannot read your menu, confirm your parking situation, or verify your operating hours. Generative engines demand structured data. If you do not have it, the AI will recommend your competitor who does. 100% of the time.
          </p>

          <h4 style={{ color: 'var(--text-light)', marginTop: '2rem' }}>Our F&amp;B Blueprint: The Pancake House Strategy</h4>
          <p>
            At Digital Growth KH, we engineer digital entities for the food and beverage sector. Strategy Lead <strong>Eddy Hernandez</strong> maps the specific conversational queries diners use, while Lead Developer <strong>William Christoff Swanepoel</strong> builds the technical architecture, utilizing Khmer Unicode Tokenization so AI models can flawlessly read menus and local ingredients.
          </p>
          <p>
            We are currently deploying this exact framework for <strong>Pancake House</strong>. Instead of throwing budget at Facebook boosts, we are structuring Pancake House&apos;s digital footprint to be the definitive answer for delicious pancakes in Phnom Penh. This guarantees they capture high-intent diners at the exact moment they are deciding where to eat.
          </p>

          <h4 style={{ color: 'var(--neon-lime)', fontSize: '1.6rem', marginTop: '3rem' }}>Stop Paying for Impressions. Start Getting Reservations.</h4>
          <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>
            The transition from Social Media Marketing to Answer Engine Optimization is not a trend; it is a permanent shift in consumer behavior.
          </p>
          <p>
            Is your restaurant invisible to AI?{' '}
            <Link href="/contact" style={{ color: 'var(--neon-cyan)', textDecoration: 'underline', fontWeight: 'bold' }}>
              Contact Digital Growth KH today
            </Link>{' '}
            to get your free AI entity audit and start capturing the diners your competitors are missing.
          </p>
        </div>
      </article>

      <article className="glass-card blog-post" style={{ marginTop: '3rem' }}>
        <h3>{t('blog3_title')}</h3>
        <div className="blog-meta">{t('blog3_meta')}</div>

        <div className="glass-panel" style={{ padding: '1.5rem', marginBottom: '2rem', borderLeft: '4px solid var(--neon-lime)' }}>
          <h4 style={{ color: 'var(--neon-lime)', marginTop: 0, marginBottom: '0.5rem', fontSize: '1.2rem' }}>
            Executive Summary
          </h4>
          <p style={{ marginBottom: 0, fontSize: '1rem', lineHeight: 1.6 }}>
            For Cambodian hotels, relying on Online Travel Agencies (OTAs) means losing 15-20% of revenue to commissions. Answer Engine Optimization (AEO) allows boutique hotels to bypass these platforms. By structuring digital entities for AI search, hotels become the direct recommendation on ChatGPT and Gemini, driving high-margin direct bookings.
          </p>
        </div>

        <div className="blog-content">
          <p>
            The hospitality sector in Cambodia is fiercely competitive. Whether you operate a luxury resort in Siem Reap or a boutique hotel in Phnom Penh&apos;s BKK1 district, the struggle is the same: customer acquisition is dominated by massive OTAs like Booking.com and Agoda. You get the guests, but you sacrifice a massive chunk of your profit margin.
          </p>

          <h4 style={{ color: 'var(--text-light)', marginTop: '2rem' }}>The AI Travel Agent</h4>
          <p>
            Travel planning has fundamentally changed in 2026. Tourists and expats are no longer starting their journey by scrolling through hundreds of listings on an OTA. Instead, they are using generative AI as a personal travel agent. A user will ask Claude or Gemini: <em>&quot;Plan a 3-day itinerary in Phnom Penh and recommend a boutique hotel with a pool and fast Wi-Fi under $80 a night.&quot;</em>
          </p>
          <p>
            The AI does not send them to Booking.com. It gives them a direct answer. If your hotel&apos;s digital entity is not structured to provide these specific data points (amenities, price range, precise geolocation), the AI simply will not recommend you.
          </p>

          <h4 style={{ color: 'var(--text-light)', marginTop: '2rem' }}>Engineering Direct Bookings with GEO</h4>
          <p>
            At Digital Growth KH, we use Generative Engine Optimization (GEO) to reclaim your margins. We build robust Knowledge Graphs for accommodation providers. This means when an AI scans the web for &apos;best boutique hotel in Phnom Penh,&apos; it finds your structured schema, validates your authority, and outputs your direct booking link.
          </p>
          <p>
            We are currently selecting one premier accommodation partner in Cambodia to serve as our flagship AEO case study. This partner will receive a complete digital entity overhaul designed to dramatically increase direct, commission-free reservations.
          </p>

          <h4 style={{ color: 'var(--neon-cyan)', fontSize: '1.6rem', marginTop: '3rem' }}>Ready to Reclaim Your Revenue?</h4>
          <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Stop renting your customers from OTAs. Own your digital entity.</p>
          <p>
            If you manage a hotel or guesthouse in Cambodia,{' '}
            <Link href="/contact" style={{ color: 'var(--neon-magenta)', textDecoration: 'underline', fontWeight: 'bold' }}>
              contact us today
            </Link>{' '}
            to discuss our promotional partnership program and future-proof your booking strategy.
          </p>
        </div>
      </article>
    </>
  );
}
