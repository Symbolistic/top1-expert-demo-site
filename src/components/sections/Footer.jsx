import Link from 'next/link';
import { SITE_NAME, CONTACT_EMAIL, PHONE_NUMBER, PHONE_HREF, LICENSE_NUMBER } from '@/utils/constants';

const SERVICE_LINKS = [
    { label: 'All Services', href: '/services' },
    { label: 'Roofing', href: '/services/roofing' },
    { label: 'Skylights', href: '/services/skylights' },
    { label: 'Chimney', href: '/services/chimney' },
    { label: 'Gutters', href: '/services/gutters' },
];

const COMPANY_LINKS = [
    { label: 'About', href: '/about' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Reviews', href: '/#reviews' },
    { label: 'Service Areas', href: '/#areas' },
    { label: 'Privacy Policy', href: '/privacy' },
];

const Footer = () => {
    return (
        <footer className="bg-navy">
            <div className="mx-auto max-w-6xl px-6 pt-14 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">

                    {/* Brand */}
                    <div className="flex flex-col gap-4 lg:col-span-1">
                        <Link href="/" className="font-heading font-bold text-xl text-white">
                            {SITE_NAME}
                        </Link>
                        <p className="text-white/55 text-sm leading-relaxed max-w-xs">
                            Family-owned roofing contractor serving New York and the greater metropolitan area with quality workmanship and honest service.
                        </p>
                        {LICENSE_NUMBER && <p className="text-white/55 text-xs">{LICENSE_NUMBER}</p>}
                    </div>

                    {/* Services */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold text-white tracking-wide">Services</h3>
                        <ul className="flex flex-col gap-2">
                            {SERVICE_LINKS.map(({ label, href }) => (
                                <li key={label}>
                                    <Link href={href} className="text-sm text-white/55 hover:text-white transition-colors duration-200">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold text-white tracking-wide">Company</h3>
                        <ul className="flex flex-col gap-2">
                            {COMPANY_LINKS.map(({ label, href }) => (
                                <li key={label}>
                                    <Link href={href} className="text-sm text-white/55 hover:text-white transition-colors duration-200">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-sm font-semibold text-white tracking-wide">Contact</h3>
                        <ul className="flex flex-col gap-2">
                            <li>
                                <a href={PHONE_HREF} className="text-sm text-white/55 hover:text-white transition-colors duration-200">
                                    {PHONE_NUMBER}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm text-white/55 hover:text-white transition-colors duration-200">
                                    {CONTACT_EMAIL}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <p className="text-white/55 text-xs">
                        &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
                    </p>
                    <p className="text-white/55 text-xs">
                        Designed &amp; Developed by Vantage Web Designs
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
