'use client';

import { FormEvent } from 'react';
import { useLanguage } from './LanguageContext';

export default function ContactPageContent() {
  const { t } = useLanguage();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') || '';
    const email = formData.get('email') || '';
    const service = formData.get('service') || '';
    const business = formData.get('business') || '';
    const message = formData.get('message') || '';

    const payload = `
📝 New Quote Request

👤 Name: ${name}
📧 Email: ${email}
🏢 Business: ${business}
💼 Service: ${service}
💬 Message: ${message}
    `.trim();

    const encodedMessage = encodeURIComponent(payload);
    const telegramUrl = `https://t.me/That_Latin_Guy?text=${encodedMessage}`;

    window.open(telegramUrl, '_blank');
    form.reset();
    window.alert('Thank you for your request! We will contact you shortly through Telegram.');
  };

  return (
    <>
      <h2 id="phone" style={{ scrollMarginTop: '120px' }}>
        {t('contact_phone_title')}
      </h2>
      <div className="glass-card contact-line">📱 +855 011588128 / +855 86216037</div>

      <h2 id="email" style={{ scrollMarginTop: '120px' }}>
        {t('contact_email_title')}
      </h2>
      <div className="glass-card">quoteinfo@digitalgrowthkh.com</div>

      <h2 id="social" style={{ scrollMarginTop: '120px' }}>
        {t('contact_social_title')}
      </h2>
      <div className="glass-card">
        <p style={{ marginBottom: '0.5rem' }}>
          Telegram:{' '}
          <a href="https://t.me/That_Latin_Guy" target="_blank" rel="noreferrer" style={{ color: 'var(--neon-cyan)', textDecoration: 'none' }}>
            T.me/That_Latin_Guy
          </a>
        </p>
        <p style={{ marginBottom: '0.5rem' }}>
          WhatsApp:{' '}
          <a href="https://wa.me/85586216037" target="_blank" rel="noreferrer" style={{ color: 'var(--neon-lime)', textDecoration: 'none' }}>
            wa.me/85586216037
          </a>
        </p>
        <p>
          Facebook:{' '}
          <a
            href="https://www.facebook.com/profile.php?id=61588268477197"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#1877F2', textDecoration: 'none' }}
          >
            Digital Growth KH
          </a>
        </p>
      </div>

      <h2 style={{ marginTop: '3rem' }}>{t('quote_title')}</h2>
      <div className="quote-section">
        <form id="quote-form" onSubmit={handleSubmit}>
          <div className="quote-form-grid">
            <input type="text" name="name" placeholder={t('quote_name')} autoComplete="name" />

            <input type="email" name="email" placeholder={t('quote_email')} autoComplete="email" />

            <select name="service" defaultValue={t('quote_option1')}>
              <option>{t('quote_option1')}</option>
              <option>{t('quote_option2')}</option>
              <option>{t('quote_option3')}</option>
              <option>{t('quote_option4')}</option>
            </select>

            <input type="text" name="business" placeholder={t('quote_business')} autoComplete="organization" />

            <textarea name="message" placeholder={t('quote_message')}></textarea>

            <button type="submit" className="submit-btn">
              {t('quote_submit')}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
