import { Client } from '@notionhq/client';
import { BASE_URL } from '@/utils/constants';

/**
 * Dynamic sitemap for Next.js App Router
 * Lists core routes and Notion-backed blog posts.
 */

/** @type {import('next').MetadataRoute.Sitemap} */
export default async function sitemap() {

    const staticRoutes = ['', '/blog'].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
    }));

    let postRoutes = [];
    try {
        const notion = new Client({ auth: process.env.NOTION_API_KEY });
        const response = await notion.databases.query({
            database_id: process.env.NOTION_DATABASE_ID,
            filter: { property: 'Published', checkbox: { equals: true } },
            sorts: [{ property: 'Date', direction: 'descending' }],
        });

        postRoutes = response.results
            .map((page) => page.properties?.Slug?.rich_text?.[0]?.plain_text)
            .filter(Boolean)
            .map((slug) => ({
                url: `${BASE_URL}/blog/${slug}`,
                lastModified: new Date(),
            }));
    } catch (err) {
        // If Notion is unavailable, still return static routes
        console.error('Sitemap Notion fetch failed:', err);
    }

    return [...staticRoutes, ...postRoutes];
}


