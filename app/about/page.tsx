import type { Metadata } from 'next';
import AboutPageContent from '../../components/AboutPageContent';

export const metadata: Metadata = {
  title: 'About Digital Growth KH | SEO Agency Cambodia',
  description:
    'Learn about Digital Growth KH, our mission, vision, and founders driving SEO, AEO, and GEO innovation in Cambodia.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Digital Growth KH',
    url: 'https://digitalgrowthkh.com/about',
    mainEntity: {
      '@type': 'Organization',
      '@id': 'https://digitalgrowthkh.com/#organization',
      name: 'Digital Growth KH',
      url: 'https://digitalgrowthkh.com/',
      logo: 'https://digitalgrowthkh.com/images/DG_logo.png',
      description:
        'Digital Growth KH is a Phnom Penh-based SEO and AI marketing agency specializing in Entity-Based SEO, AEO, and GEO.',
      founder: [
        {
          '@type': 'Person',
          '@id': 'https://digitalgrowthkh.com/#founder-william',
          name: 'William Christoff Swanepoel',
          jobTitle: 'Co-founder & Strategy lead',
          sameAs: ['https://www.linkedin.com/in/william-swanepoel-469baa219/'],
          worksFor: { '@id': 'https://digitalgrowthkh.com/#organization' },
        },
        {
          '@type': 'Person',
          '@id': 'https://digitalgrowthkh.com/#founder-eddy',
          name: 'Eddy Hernandez',
          jobTitle: 'Co-Founder & Lead Developer',
          sameAs: ['https://www.linkedin.com/in/eddy-hernandez-40a0613a9/'],
          worksFor: { '@id': 'https://digitalgrowthkh.com/#organization' },
        },
      ],
    },
  };

  return (
    <main className="wrapper">
      <div id="about-page" className="page init-reveal">
        <AboutPageContent />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
    </main>
  );
}
