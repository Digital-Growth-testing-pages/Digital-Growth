import type { MetadataRoute } from 'next';
import { blogPosts } from './blog/posts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.digitalgrowthkh.com';
  const lastModified = new Date();

  const staticRoutes = ['', '/services', '/projects', '/contact'];
  const blogSlugs = Object.keys(blogPosts).map((slug) => `/blog/${slug}`);

  const allRoutes = [...staticRoutes, ...blogSlugs];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : route === '/services' ? 0.9 : 0.8,
  }));
}
