import Link from 'next/link';
import { FiHome, FiTool, FiZap, FiDroplet } from 'react-icons/fi';
import { SectionHeader } from '@/components/ui';
import { SERVICES } from '@/utils/services';

const ICON_MAP = {
    home: FiHome,
    tool: FiTool,
    zap: FiZap,
    droplet: FiDroplet,
};

const Services = ({
    eyebrow = 'What We Do',
    title = 'Roofing Services You Can Count On',
    subtitle = 'From small repairs to full replacements, every job gets the same care and craftsmanship. No shortcuts.',
}) => {
    return (
        <section id="services" className="py-[var(--spacing-section)] bg-bg">
            <div className="mx-auto max-w-6xl px-6">
                <SectionHeader
                    eyebrow={eyebrow}
                    title={title}
                    subtitle={subtitle}
                    className="mb-16"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SERVICES.map(({ slug, iconKey, title: serviceTitle, shortDescription }) => {
                        const Icon = ICON_MAP[iconKey];
                        return (
                            <Link
                                key={slug}
                                href={`/services/${slug}`}
                                className="bg-surface border border-border rounded-[var(--radius-lg)] p-6 flex flex-col gap-4 shadow-[var(--shadow-card)] hover:-translate-y-1 transition-transform duration-300 group"
                            >
                                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <Icon className="text-primary" size={20} aria-hidden="true" />
                                </div>
                                <h3 className="font-heading text-lg font-semibold text-text">{serviceTitle}</h3>
                                <p className="text-muted text-sm leading-relaxed flex-1">{shortDescription}</p>
                                <span aria-hidden="true" className="text-sm font-semibold text-primary flex items-center gap-2 group-hover:gap-3 transition-all duration-200 self-start">
                                    Learn More
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
