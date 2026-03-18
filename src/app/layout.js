import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Analytics from '@/components/Analytics';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    variable: '--font-heading',
    display: 'swap',
});

export const metadata = {
    title: 'Vantage Web Designs – Premium Websites for Local Businesses',
    description:
        'We build fast, responsive, and highly optimized websites for small businesses. 95-100 Google PageSpeed scores guaranteed.',
    keywords: [
        'web design',
        'web development',
        'small business websites',
        'PageSpeed optimization',
        'responsive design',
        'Next.js',
        'Vantage Web Designs',
    ],
    icons: {
        icon: '/favicon.png',
    },
    metadataBase: new URL('https://vantagewebdesigns.com'),
    openGraph: {
        title: 'Vantage Web Designs – Premium Websites for Local Businesses',
        description:
            'We build fast, responsive, and highly optimized websites for small businesses. 95-100 Google PageSpeed scores guaranteed.',
        url: 'https://vantagewebdesigns.com',
        siteName: 'Vantage Web Designs',
        images: [
            {
                url: '/preview.png',
                width: 1200,
                height: 630,
                alt: 'Vantage Web Designs Preview',
            },
        ],
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Vantage Web Designs – Premium Websites for Local Businesses',
        description:
            'We build fast, responsive, and highly optimized websites for small businesses. 95-100 Google PageSpeed scores guaranteed.',
        images: ['/preview.png'],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
