import Link from 'next/link';
import { SITE_NAME } from '@/utils/constants';

const NAV_LINKS = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Blog', href: '/blog' },
];

const LEGAL_LINKS = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
];

const Footer = () => {
    return (
        <footer className="border-t border-border bg-surface">
            <div className="mx-auto max-w-6xl px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                    <div className="flex flex-col gap-4">
                        <Link href="/" className="font-heading font-bold text-xl text-text">
                            {SITE_NAME}
                        </Link>
                        <p className="text-muted text-sm leading-relaxed max-w-xs">
                            Premium websites for local businesses. Fast, beautiful, and built to grow with you.
                        </p>
                        <p className="text-muted text-xs">
                            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold text-text">Navigation</h3>
                        <ul className="flex flex-col gap-2">
                            {NAV_LINKS.map(({ label, href }) => (
                                <li key={label}>
                                    <Link href={href} className="text-sm text-muted hover:text-text transition-colors duration-200">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold text-text">Legal</h3>
                        <ul className="flex flex-col gap-2">
                            {LEGAL_LINKS.map(({ label, href }) => (
                                <li key={label}>
                                    <Link href={href} className="text-sm text-muted hover:text-text transition-colors duration-200">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
