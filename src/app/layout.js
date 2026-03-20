import { DM_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';
import Analytics from '@/components/Analytics';
import { SITE_NAME, BASE_URL } from '@/utils/constants';

const dmSans = DM_Sans({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});

const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-heading',
    weight: ['600', '700'],
    display: 'swap',
});

export const metadata = {
    title: `${SITE_NAME} — Local Roofing You Can Trust`,
    description:
        'Family-owned roofing contractor serving New York and the greater metropolitan area. Roofing, skylights, chimney repair, gutters, and free inspections.',
    keywords: [
        'roofing contractor New York',
        'roof replacement NYC',
        'roof repair Brooklyn',
        'skylight installation New York',
        'chimney repair NYC',
        'gutter installation New York',
        'free roof inspection',
    ],
    icons: {
        icon: '/favicon.png',
    },
    metadataBase: new URL(BASE_URL),
    openGraph: {
        title: `${SITE_NAME} — Local Roofing You Can Trust`,
        description:
            'Family-owned roofing contractor serving New York and the greater metropolitan area. Roofing, skylights, chimney repair, gutters, and free inspections.',
        url: BASE_URL,
        siteName: SITE_NAME,
        images: [
            {
                url: '/preview.png',
                width: 1200,
                height: 630,
                alt: `${SITE_NAME} Preview`,
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: `${SITE_NAME} — Local Roofing You Can Trust`,
        description:
            'Family-owned roofing contractor serving New York and the greater metropolitan area. Roofing, skylights, chimney repair, gutters, and free inspections.',
        images: ['/preview.png'],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${dmSans.variable} ${playfairDisplay.variable}`}>
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
