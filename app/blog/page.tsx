import type { Metadata } from 'next';
import BlogSection from '../../components/BlogSection';

export const metadata: Metadata = {
  title: 'AI Marketing & SEO Blog Phnom Penh | Digital Growth KH',
  description:
    'Read AI marketing, AEO, GEO, and SEO insights for Phnom Penh and Cambodia from Digital Growth KH.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogIndexPage() {
  return (
    <main className="wrapper">
      <BlogSection />
    </main>
  );
}
