import Link from 'next/link';
import { FiHome, FiTool, FiZap, FiDroplet } from 'react-icons/fi';
import PageBanner from '@/components/sections/PageBanner';
import CTABanner from '@/components/sections/CTABanner';
import { SERVICES } from '@/utils/services';
import { SITE_NAME } from '@/utils/constants';

export const metadata = {
    title: `Roofing Services | ${SITE_NAME}`,
    description: 'Roofing, skylights, chimney repair, and gutter installation. Serving New York City and the greater metropolitan area.',
};

const ICON_MAP = {
    home: FiHome,
    tool: FiTool,
    zap: FiZap,
    droplet: FiDroplet,
};

const ServicesPage = () => {
    return (
        <>
            <PageBanner
                eyebrow="What We Do"
                title="Roofing Services You Can Count On"
                subtitle="From small repairs to full replacements, every job gets the same care and craftsmanship. No shortcuts, no surprises."
                breadcrumb={[{ label: 'Services' }]}
            />

            <section className="py-[var(--spacing-section)] bg-bg">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {SERVICES.map(({ slug, iconKey, title, shortDescription, includes }) => {
                            const Icon = ICON_MAP[iconKey];
                            return (
                                <div
                                    key={slug}
                                    className="bg-surface border border-border rounded-[var(--radius-lg)] p-8 flex flex-col gap-5 shadow-[var(--shadow-card)]"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <Icon className="text-primary" size={22} aria-hidden="true" />
                                        </div>
                                        <h2 className="font-heading text-2xl font-bold text-navy">{title}</h2>
                                    </div>

                                    <p className="text-muted text-base leading-relaxed">{shortDescription}</p>

                                    <ul className="flex flex-col gap-2">
                                        {includes.slice(0, 4).map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-sm text-text">
                                                <span className="text-primary mt-0.5 shrink-0">&#10003;</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link
                                        href={`/services/${slug}`}
                                        className="text-sm font-semibold text-primary flex items-center gap-2 hover:gap-3 transition-all duration-200 self-start mt-auto pt-2 border-t border-border w-full"
                                    >
                                        Learn More About {title}
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
};

export default ServicesPage;
