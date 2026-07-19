import './globals.css';
import '../styles.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { LanguageProvider } from '../components/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://digitalgrowthkh.com'),
  title: 'Digital Growth KH | SEO, AEO & AI Marketing Agency Phnom Penh',
  description:
    "Digital Growth KH is Cambodia's premier AI Search Authority. We pioneer Entity-Based SEO, AEO, and GEO to make your business the definitive answer on Google, ChatGPT, and Claude.",
  icons: { icon: '/images/digital-growth-agency-logo.png' },
  keywords: [
    'SEO services Cambodia',
    'SEO agency Cambodia',
    'SEO Phnom Penh',
    'Local SEO Cambodia',
    'Digital Marketing Cambodia',
    'Website Development Phnom Penh',
    'AI search optimization Cambodia',
    'AEO Cambodia',
    'GEO Cambodia',
  ],
  openGraph: {
    type: 'website',
    url: 'https://digitalgrowthkh.com/',
    title: 'Digital Growth KH | SEO, AEO & AI Marketing Agency Phnom Penh',
    description:
      "Digital Growth KH is Cambodia's premier AI Search Authority. We pioneer Entity-Based SEO, AEO, and GEO to make your business the definitive answer on Google, ChatGPT, and Claude.",
    images: [
      {
        url: 'https://digitalgrowthkh.com/images/og-image.webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Growth KH | SEO, AEO & AI Marketing Agency Phnom Penh',
    description:
      "Digital Growth KH is Cambodia's premier AI Search Authority. We pioneer Entity-Based SEO, AEO, and GEO to make your business the definitive answer on Google, ChatGPT, and Claude.",
    images: ['https://digitalgrowthkh.com/images/og-image.webp'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['MarketingAgency', 'LocalBusiness'],
      '@id': 'https://digitalgrowthkh.com/#organization',
      name: 'Digital Growth KH',
      legalName: 'Digital Growth KH',
      image: 'https://digitalgrowthkh.com/images/DG_logo.png',
      url: 'https://digitalgrowthkh.com/',
      telephone: '+855 86 216 037',
      email: 'quoteinfo@digitalgrowthkh.com',
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
        {
          '@type': 'City',
          name: 'Phnom Penh',
        },
        {
          '@type': 'City',
          name: 'Siem Reap',
        },
        {
          '@type': 'Country',
          name: 'Cambodia',
        },
      ],
      sameAs: [
        'https://t.me/That_Latin_Guy',
        'https://www.facebook.com/profile.php?id=61588268477197',
        'https://wa.me/85586216037',
      ],
      description:
        "Digital Growth KH is Cambodia's premier AI Search Authority. We pioneer Entity-Based SEO, AEO, and GEO to make your business the definitive answer on Google, ChatGPT, and Claude.",
      knowsLanguage: ['en', 'km'],
      founder: [
        {
          '@id': 'https://digitalgrowthkh.com/#founder-william',
        },
        {
          '@id': 'https://digitalgrowthkh.com/#founder-eddy',
        },
      ],
      employee: [
        {
          '@id': 'https://digitalgrowthkh.com/#founder-william',
        },
        {
          '@id': 'https://digitalgrowthkh.com/#founder-eddy',
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital Marketing Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://digitalgrowthkh.com/#service-seo',
              name: 'SEO (Search Engine Optimization)',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://digitalgrowthkh.com/#service-aeo',
              name: 'AEO (Answer Engine Optimization)',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://digitalgrowthkh.com/#service-geo',
              name: 'GEO (Generative Engine Optimization)',
            },
          },
        ],
      },
      hasPart: [
        {
          '@id': 'https://digitalgrowthkh.com/#project-coffee',
        },
        {
          '@id': 'https://digitalgrowthkh.com/#project-garden',
        },
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://digitalgrowthkh.com/#founder-william',
      name: 'William Christoff Swanepoel',
      jobTitle: 'Co-founder, Strategy lead & SEO specialist',
      nationality: {
        '@type': 'Country',
        name: 'South Africa',
      },
      sameAs: ['https://www.linkedin.com/in/william-swanepoel-469baa219/'],
      knowsLanguage: ['en'],
      worksFor: {
        '@id': 'https://digitalgrowthkh.com/#organization',
      },
      knowsAbout: [
        {
          '@id': 'https://digitalgrowthkh.com/#service-aeo',
        },
        {
          '@id': 'https://digitalgrowthkh.com/#service-geo',
        },
        {
          '@id': 'https://digitalgrowthkh.com/#service-seo',
        },
        'Digital Transformation in Cambodia',
        'Entity-Based SEO',
        'Answer Engine Optimization',
        'Generative Engine Optimization',
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://digitalgrowthkh.com/#founder-eddy',
      name: 'Eddy Hernandez',
      jobTitle: 'Co-Founder, Lead Developer & AEO Specialist',
      nationality: {
        '@type': 'Country',
        name: 'El Salvador',
      },
      sameAs: ['https://www.linkedin.com/in/eddy-hernandez-40a0613a9/'],
      knowsLanguage: ['en', 'es', 'km'],
      worksFor: {
        '@id': 'https://digitalgrowthkh.com/#organization',
      },
      knowsAbout: [
        {
          '@id': 'https://digitalgrowthkh.com/#service-aeo',
        },
        {
          '@id': 'https://digitalgrowthkh.com/#service-geo',
        },
        {
          '@id': 'https://digitalgrowthkh.com/#service-seo',
        },
        'Digital Transformation in Cambodia',
        'Entity-Based SEO, AEO, GEO & AIO',
        'Answer Engine Optimization',
        'Generative Engine Optimization',
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://digitalgrowthkh.com/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://digitalgrowthkh.com/',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Services',
          item: 'https://digitalgrowthkh.com/#services',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Projects',
          item: 'https://digitalgrowthkh.com/#projects',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Blog',
          item: 'https://digitalgrowthkh.com/#blog',
        },
      ],
    },
    {
      '@type': 'CreativeWork',
      '@id': 'https://digitalgrowthkh.com/#project-coffee',
      name: 'Coffee & Talk',
      url: 'https://coffeeandtalk.github.io/Coffee-Talk/',
      mainEntityOfPage: 'https://coffeeandtalk.github.io/Coffee-Talk/',
      image: 'https://coffeeandtalk.github.io/Coffee-Talk/images/profile.jpg',
      description: 'AEO & SEO integration for a psychology-focused wellness space in Phnom Penh.',
      creativeWorkStatus: 'https://schema.org/Published',
      provider: {
        '@id': 'https://digitalgrowthkh.com/#organization',
      },
      about: {
        '@id': 'https://digitalgrowthkh.com/#service-aeo',
      },
      locationCreated: {
        '@type': 'Place',
        name: 'Phnom Penh, Cambodia',
      },
    },
    {
      '@type': 'CreativeWork',
      '@id': 'https://digitalgrowthkh.com/#project-garden',
      name: 'The Garden Guy',
      url: 'https://sirensnorlaxserenade.github.io/The-Garden-Guy/#home',
      mainEntityOfPage: 'https://sirensnorlaxserenade.github.io/The-Garden-Guy/#home',
      description: 'Expert landscape design in Phnom Penh. GEO optimization led to 300% more AI-driven inquiries.',
      creativeWorkStatus: 'https://schema.org/Published',
      provider: {
        '@id': 'https://digitalgrowthkh.com/#organization',
      },
      about: {
        '@id': 'https://digitalgrowthkh.com/#service-geo',
      },
      locationCreated: {
        '@type': 'Place',
        name: 'Phnom Penh, Cambodia',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://digitalgrowthkh.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is Answer Engine Optimization (AEO)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Answer Engine Optimization (AEO) is the process of structuring your digital content so AI engines like ChatGPT, Claude, and Gemini cite your business as the direct answer to user queries. It goes beyond traditional SEO by optimizing for voice search and AI recommendations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why is a website better than just a Facebook page for Cambodian businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A website is better than a Facebook page because AI engines and Google cannot effectively crawl fragmented social media posts. A dedicated website with Schema markup provides the structured data AI needs to recommend your business to ready-to-buy customers.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much do SEO and AEO services cost in Cambodia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SEO and AEO services at Digital Growth KH start at $109 per month for the Growth Lite package. We also offer one-time website development packages starting at $80, which include built-in AEO schema and mobile-friendly designs for local SMEs.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to see results from AEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "You can typically see results from AEO within 3 to 6 weeks. Because AEO focuses on providing direct answers to AI models, it establishes your brand's visibility much faster than traditional SEO, which usually takes 3 to 4 months.",
          },
        },
        {
          '@type': 'Question',
          name: 'What is Entity-Based SEO?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Entity-Based SEO is an advanced strategy that registers your brand in the Google Knowledge Graph. By using custom NLP analysis and Schema.org markup, it trains Generative Engines to recognize your business as the definitive subject matter expert in your industry.',
          },
        },
      ],
    },
  ],
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <LanguageProvider>
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
