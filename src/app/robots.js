/**
 * Robots metadata route for Next.js App Router
 * Allows all crawling and advertises the sitemap for the production domain.
 */

import { BASE_URL } from '@/utils/constants';
/** @type {import('next').MetadataRoute.Robots} */
export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
        host: BASE_URL,
    };
}


