import Link from 'next/link';
import { SITE_NAME } from '@/utils/constants';
import Button from '@/components/ui/Button';

const NAV_LINKS = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
];

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
            <div className="mx-auto max-w-6xl px-4 h-16 grid grid-cols-3 items-center">

                <Link href="/" className="font-heading font-bold text-base md:text-xl text-text hover:text-primary transition-colors duration-200 whitespace-nowrap">
                    {SITE_NAME}
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center justify-center gap-6">
                    {NAV_LINKS.map(({ label, href }) => (
                        <Link
                            key={label}
                            href={href}
                            className="text-sm text-muted hover:text-text transition-colors duration-200"
                        >
                            {label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center justify-end gap-3">
                    <Button href="#contact" size="sm">
                        Get a Free Quote
                    </Button>
                </div>

                {/* Mobile menu toggle */}
                <label htmlFor="mobile-menu-toggle" className="md:hidden cursor-pointer p-2 text-muted hover:text-text justify-self-end col-start-3">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </label>
            </div>

            {/* Mobile nav — CSS-only toggle */}
            <input type="checkbox" id="mobile-menu-toggle" className="peer hidden" />
            <nav className="hidden peer-checked:flex md:hidden flex-col gap-1 px-4 pb-4 bg-bg border-b border-border">
                {NAV_LINKS.map(({ label, href }) => (
                    <Link
                        key={label}
                        href={href}
                        className="py-3 text-sm text-muted hover:text-text transition-colors duration-200 border-b border-border last:border-0"
                    >
                        {label}
                    </Link>
                ))}
                <div className="pt-3">
                    <Button href="#contact" size="sm" className="w-full">
                        Get a Free Quote
                    </Button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
