import type {MetadataRoute} from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://iduni.org';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/quienes-somos',
    '/fundador',
    '/mandamientos',
    '/bible-study',
    '/fiestas',
    '/galeria',
    '/santuarios',
    '/contacto',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}