import type { Metadata } from 'next';
import ContactPageContent from '../../components/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact Digital Growth KH | AI Marketing Phnom Penh',
  description:
    "Contact Digital Growth KH for SEO, AEO, and AI marketing strategy in Phnom Penh. Request a quote via Telegram.",
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Digital Growth KH',
    url: 'https://digitalgrowthkh.com/contact',
    mainEntity: {
      '@type': 'Organization',
      '@id': 'https://digitalgrowthkh.com/#organization',
      name: 'Digital Growth KH',
      telephone: ['+855 011588128', '+855 86216037'],
      email: 'quoteinfo@digitalgrowthkh.com',
      sameAs: [
        'https://t.me/That_Latin_Guy',
        'https://wa.me/85586216037',
        'https://www.facebook.com/profile.php?id=61588268477197',
      ],
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          telephone: '+855 011588128',
          areaServed: 'KH',
          availableLanguage: ['en', 'km', 'zh'],
        },
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          telephone: '+855 86216037',
          areaServed: 'KH',
          availableLanguage: ['en', 'km', 'zh'],
        },
      ],
    },
  };

  return (
    <main className="wrapper">
      <div id="contact-page" className="page init-reveal">
        <ContactPageContent />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
    </main>
  );
}
