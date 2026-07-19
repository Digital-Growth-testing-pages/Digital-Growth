import type { Metadata } from 'next';
import HomePageContent from '../components/HomePageContent';

export const metadata: Metadata = {
  title: 'SEO Agency Cambodia & AI Digital Marketing | Digital Growth KH',
  description:
    'Digital Growth KH provides SEO, AEO, GEO, and AI-first digital marketing services in Phnom Penh, Cambodia.',
  alternates: {
    canonical: '/',
  },
};

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': ['MarketingAgency', 'LocalBusiness'],
  '@id': 'https://digitalgrowthkh.com/#organization-home',
  name: 'Digital Growth KH',
  legalName: 'Digital Growth KH',
  url: 'https://digitalgrowthkh.com/',
  image: 'https://digitalgrowthkh.com/images/DG_logo.png',
  email: 'quoteinfo@digitalgrowthkh.com',
  telephone: '+855 86 216 037',
  priceRange: '$109 - $1500+',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'BKK1',
    addressLocality: 'Phnom Penh',
    addressCountry: 'KH',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 11.5564,
    longitude: 104.9282,
  },
  areaServed: [
    { '@type': 'City', name: 'Phnom Penh' },
    { '@type': 'Country', name: 'Cambodia' },
    { '@type': 'Country', name: 'South Africa' },
  ],
  sameAs: [
    'https://t.me/That_Latin_Guy',
    'https://wa.me/85586216037',
    'https://www.facebook.com/profile.php?id=61588268477197',
  ],
  description:
    "Digital Growth KH is Phnom Penh's AI-first marketing agency specializing in SEO, AEO, GEO, and Entity-Based optimization.",
};

export default function HomePage() {
  return (
    <main className="wrapper">
      <div id="home-page" className="page init-reveal">
        <HomePageContent />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
    </main>
  );
}
