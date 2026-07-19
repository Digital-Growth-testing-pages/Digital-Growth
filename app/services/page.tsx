import type { Metadata } from 'next';
import ServicesSection from '../../components/ServicesSection';
import WebDevSection from '../../components/WebDevSection';

export const metadata: Metadata = {
  title: 'Digital Marketing, Web Dev & SEO Services | Digital Growth KH',
  description:
    'Explore Growth Packages, Web Development, and Classic one-time SEO/AEO/GEO services from Digital Growth KH.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Digital Growth KH Service Catalog',
    url: 'https://digitalgrowthkh.com/services',
    provider: {
      '@type': 'Organization',
      name: 'Digital Growth KH',
      url: 'https://digitalgrowthkh.com/',
    },
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Growth Package',
        itemListElement: [
          { '@type': 'Offer', name: 'Growth Lite', price: '109', priceCurrency: 'USD' },
          { '@type': 'Offer', name: 'Growth Pro', price: '199', priceCurrency: 'USD' },
          { '@type': 'Offer', name: 'Growth Enterprise', price: '399', priceCurrency: 'USD' },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Web Development',
        itemListElement: [
          { '@type': 'Offer', name: 'Starter Website', price: '80', priceCurrency: 'USD' },
          { '@type': 'Offer', name: 'Business Website', price: '199', priceCurrency: 'USD' },
          { '@type': 'Offer', name: 'Premium Website', price: '299', priceCurrency: 'USD' },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Classic Packages',
        itemListElement: [
          { '@type': 'Offer', name: 'Classic Starter', price: '450', priceCurrency: 'USD' },
          { '@type': 'Offer', name: 'Classic Business', price: '900', priceCurrency: 'USD' },
          { '@type': 'Offer', name: 'Classic Premium', price: '1500', priceCurrency: 'USD' },
        ],
      },
    ],
  };

  return (
    <main className="wrapper">
      <ServicesSection />
      <WebDevSection />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </main>
  );
}
