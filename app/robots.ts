import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/downloads/', '/admin/', '/api/'],
    },
    sitemap: 'https://movieroom-portal.vercel.app/sitemap.xml',
  }
}
