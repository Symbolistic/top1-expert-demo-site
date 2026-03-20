import Link from 'next/link';
import { SITE_NAME, PHONE_NUMBER, PHONE_HREF } from '@/utils/constants';
import Button from '@/components/ui/Button';

const NAV_LINKS = [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Reviews', href: '/#reviews' },
    { label: 'Contact', href: '/#contact' },
];

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-navy border-b border-white/10">
            <div className="mx-auto max-w-6xl px-6 h-[70px] flex items-center justify-between gap-6">

                <Link href="/" className="font-heading font-bold text-xl text-white whitespace-nowrap shrink-0">
                    {SITE_NAME}
                </Link>

                {/* Desktop nav */}
                <nav className="hidden lg:flex items-center gap-7">
                    {NAV_LINKS.map(({ label, href }) => (
                        <Link
                            key={label}
                            href={href}
                            className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-4 shrink-0">
                    <a
                        href={PHONE_HREF}
                        className="text-sm text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-2"
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.11 7.74a16 16 0 006.15 6.15l1.62-1.14a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                        </svg>
                        {PHONE_NUMBER}
                    </a>
                    <Button href="/#contact" size="sm">
                        Free Estimate
                    </Button>
                </div>

                {/* Mobile menu toggle */}
                <label htmlFor="mobile-menu-toggle" className="lg:hidden cursor-pointer p-2 text-white/70 hover:text-white ml-auto">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                    <span className="sr-only">Open menu</span>
                </label>
            </div>

            {/* Mobile nav — CSS-only toggle */}
            <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />
            <nav className="hidden peer-checked:flex lg:hidden flex-col gap-1 px-6 pb-4 bg-navy border-t border-white/10">
                {NAV_LINKS.map(({ label, href }) => (
                    <Link
                        key={label}
                        href={href}
                        className="py-3 text-sm text-white/70 hover:text-white transition-colors duration-200 border-b border-white/10 last:border-0"
                    >
                        {label}
                    </Link>
                ))}
                <div className="pt-3 flex flex-col gap-2">
                    <a href={PHONE_HREF} className="text-sm text-white/80 py-2">
                        {PHONE_NUMBER}
                    </a>
                    <Button href="/#contact" size="sm" className="w-full">
                        Free Estimate
                    </Button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
