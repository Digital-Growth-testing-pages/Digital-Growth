'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useLanguage } from './LanguageContext';

type PackageOption = {
  key: 'growth1_title' | 'growth2_title' | 'growth3_title';
  price: string;
  roi: string;
};

const packageOptions: PackageOption[] = [
  { key: 'growth1_title', price: '$109', roi: 'Estimated reach increase: 15-25%' },
  { key: 'growth2_title', price: '$199', roi: 'Estimated reach increase: 40-60%' },
  { key: 'growth3_title', price: '$399', roi: 'Estimated reach increase: 80%+' },
];

export default function ServicesPageContent() {
  const { t } = useLanguage();
  const [selectedPackage, setSelectedPackage] = useState<PackageOption>(packageOptions[0]);

  const ctaHref = useMemo(() => {
    const packageName = t(selectedPackage.key);
    return `https://t.me/That_Latin_Guy?text=${encodeURIComponent(`Hi, I'm interested in the ${packageName} package`)}`;
  }, [selectedPackage, t]);

  return (
    <>
      <h2>{t('services_title')}</h2>

      <div className="packages-section" id="growth-package">
        <h3>{t('growth_title')}</h3>
        <div className="packages-grid">
          <div className="package-card">
            <h4>{t('growth1_title')}</h4>
            <div className="price">{t('growth1_price')}</div>
            <span className="badge">{t('growth1_badge')}</span>
            <ul>
              <li>{t('growth1_feat1')}</li>
              <li>{t('growth1_feat2')}</li>
              <li>{t('growth1_feat3')}</li>
              <li>{t('growth1_feat4')}</li>
            </ul>
          </div>
          <div className="package-card">
            <h4>{t('growth2_title')}</h4>
            <div className="price">{t('growth2_price')}</div>
            <span className="badge">{t('growth2_badge')}</span>
            <ul>
              <li>{t('growth2_feat1')}</li>
              <li>{t('growth2_feat2')}</li>
              <li>{t('growth2_feat3')}</li>
              <li>{t('growth2_feat4')}</li>
            </ul>
          </div>
          <div className="package-card">
            <h4>{t('growth3_title')}</h4>
            <div className="price">{t('growth3_price')}</div>
            <span className="badge">{t('growth3_badge')}</span>
            <ul>
              <li>{t('growth3_feat1')}</li>
              <li>{t('growth3_feat2')}</li>
              <li>{t('growth3_feat3')}</li>
              <li>{t('growth3_feat4')}</li>
            </ul>
            <div className="incentive">{t('growth3_incentive')}</div>
          </div>
        </div>

        <div className="glass-card calculator-card">
          <h3 style={{ marginTop: 0, color: 'var(--neon-cyan)', fontSize: '2rem' }}>{t('calc_title')}</h3>
          <p style={{ color: '#a0b0c0', marginBottom: '2rem', fontSize: '1.1rem' }}>{t('calc_subtitle')}</p>

          <div className="calc-toggles">
            {packageOptions.map((option) => (
              <button
                key={option.key}
                className={`calc-btn ${selectedPackage.key === option.key ? 'active' : ''}`}
                type="button"
                onClick={() => setSelectedPackage(option)}
              >
                {t(option.key)}
              </button>
            ))}
          </div>

          <div className="calc-price-display" id="calcPrice">
            {selectedPackage.price}
          </div>
          <div className="calc-price-sub">{t('calc_per_month')}</div>
          <div className="calc-roi-estimate" id="calcROI">
            {selectedPackage.roi}
          </div>

          <a href={ctaHref} target="_blank" rel="noreferrer" className="calc-cta" id="calcCTA">
            {t('calc_cta')}
          </a>
          <Link href="/contact" className="calc-secondary-action">
            Send this quote to my Email/Telegram
          </Link>
        </div>
      </div>

      <div className="packages-section" id="web-dev">
        <h3>{t('webdev_title')}</h3>
        <div className="packages-grid">
          <div className="package-card">
            <h4>{t('web1_title')}</h4>
            <div className="price">{t('web1_price')}</div>
            <span className="badge">{t('web1_badge')}</span>
            <ul>
              <li>{t('web1_feat1')}</li>
              <li>{t('web1_feat2')}</li>
              <li>{t('web1_feat3')}</li>
              <li>{t('web1_feat4')}</li>
            </ul>
          </div>
          <div className="package-card">
            <h4>{t('web2_title')}</h4>
            <div className="price">{t('web2_price')}</div>
            <span className="badge">{t('web2_badge')}</span>
            <ul>
              <li>{t('web2_feat1')}</li>
              <li>{t('web2_feat2')}</li>
              <li>{t('web2_feat3')}</li>
              <li>{t('web2_feat4')}</li>
            </ul>
          </div>
          <div className="package-card">
            <h4>{t('web3_title')}</h4>
            <div className="price">{t('web3_price')}</div>
            <span className="badge">{t('web3_badge')}</span>
            <ul>
              <li>{t('web3_feat1')}</li>
              <li>{t('web3_feat2')}</li>
              <li>{t('web3_feat3')}</li>
              <li>{t('web3_feat4')}</li>
            </ul>
            <div className="incentive">{t('web3_incentive')}</div>
          </div>
        </div>
        <p style={{ marginTop: '1rem', textAlign: 'center', color: 'var(--neon-cyan)' }}>{t('web_note')}</p>
      </div>

      <div className="packages-section" id="classic">
        <h3>{t('classic_title')}</h3>
        <div className="packages-grid">
          <div className="package-card">
            <h4>{t('classic1_title')}</h4>
            <div className="price">{t('classic1_price')}</div>
            <ul>
              <li>{t('classic1_feat1')}</li>
              <li>{t('classic1_feat2')}</li>
              <li>{t('classic1_feat3')}</li>
            </ul>
          </div>
          <div className="package-card">
            <h4>{t('classic2_title')}</h4>
            <div className="price">{t('classic2_price')}</div>
            <ul>
              <li>{t('classic2_feat1')}</li>
              <li>{t('classic2_feat2')}</li>
              <li>{t('classic2_feat3')}</li>
            </ul>
          </div>
          <div className="package-card">
            <h4>{t('classic3_title')}</h4>
            <div className="price">{t('classic3_price')}</div>
            <ul>
              <li>{t('classic3_feat1')}</li>
              <li>{t('classic3_feat2')}</li>
              <li>{t('classic3_feat3')}</li>
            </ul>
            <div className="incentive">{t('classic3_incentive')}</div>
          </div>
        </div>
      </div>
    </>
  );
}
