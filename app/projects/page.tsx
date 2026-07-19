import type { Metadata } from 'next';
import ProjectsPageContent from '../../components/ProjectsPageContent';

export const metadata: Metadata = {
  title: 'Our SEO & AEO Projects in Cambodia | Digital Growth KH',
  description:
    'Explore SEO, AEO, and GEO case studies from Digital Growth KH: Pancake House, Coffee & Talk, The Garden Guy, and The Gate Guy.',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsPage() {
  const projectsSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Digital Growth KH Projects',
    url: 'https://digitalgrowthkh.com/projects',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'CreativeWork',
            name: 'Pancake House',
            url: 'https://digitalgrowthkh.github.io/nuggets_for_a_cause/#restaurant',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'CreativeWork',
            name: 'Coffee & Talk',
            url: 'https://coffeeandtalk.github.io/Coffee-Talk/',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'CreativeWork',
            name: 'The Garden Guy',
            url: 'https://digital-growth-testing-pages.github.io/The-Garden-Guy/',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'CreativeWork',
            name: 'The Gate Guy',
            url: 'https://digital-growth-testing-pages.github.io/The-Gate-Guy/',
          },
        },
      ],
    },
  };

  return (
    <main className="wrapper">
      <div id="projects-page" className="page init-reveal">
        <ProjectsPageContent />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsSchema) }}
      />
    </main>
  );
}
