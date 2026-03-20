import { notFound } from 'next/navigation';
import { FiHome, FiTool, FiZap, FiDroplet, FiCheck } from 'react-icons/fi';
import PageBanner from '@/components/sections/PageBanner';
import CTABanner from '@/components/sections/CTABanner';
import { Accordion } from '@/components/ui';
import { SERVICES } from '@/utils/services';
import { SITE_NAME } from '@/utils/constants';

const ICON_MAP = {
    home: FiHome,
    tool: FiTool,
    zap: FiZap,
    droplet: FiDroplet,
};

export async function generateStaticParams() {
    return SERVICES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = SERVICES.find((s) => s.slug === slug);
    if (!service) return {};
    return {
        title: `${service.title} | ${SITE_NAME}`,
        description: service.shortDescription,
    };
}

const ServiceDetailPage = async ({ params }) => {
    const { slug } = await params;
    const service = SERVICES.find((s) => s.slug === slug);
    if (!service) notFound();

    const Icon = ICON_MAP[service.iconKey];

    return (
        <>
            <PageBanner
                eyebrow="Our Services"
                title={service.title}
                subtitle={service.shortDescription}
                breadcrumb={[
                    { label: 'Services', href: '/services' },
                    { label: service.title },
                ]}
            />

            {/* Overview */}
            <section className="py-[var(--spacing-section)] bg-bg">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                        {/* Left — description + includes */}
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Icon className="text-primary" size={22} aria-hidden="true" />
                                </div>
                                <h2 className="font-heading text-3xl font-bold text-navy">What to Expect</h2>
                                <p className="text-muted text-base leading-relaxed">{service.description}</p>
                            </div>

                            <div>
                                <h3 className="font-heading text-xl font-semibold text-navy mb-4">What Is Included</h3>
                                <ul className="flex flex-col gap-3">
                                    {service.includes.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-sm text-text">
                                            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <FiCheck className="text-primary" size={13} aria-hidden="true" />
                                            </div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right — image placeholder */}
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-[var(--radius-lg)] bg-surface-2 border border-border overflow-hidden flex items-center justify-center">
                                <div className="flex flex-col items-center gap-3 text-muted">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <rect x="3" y="3" width="18" height="18" rx="2" />
                                        <circle cx="8.5" cy="8.5" r="1.5" />
                                        <polyline points="21 15 16 10 5 21" />
                                    </svg>
                                    <span className="text-sm">Photo coming soon</span>
                                </div>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-b-[var(--radius-lg)]" aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-[var(--spacing-section)] bg-surface">
                <div className="mx-auto max-w-3xl px-6">
                    <div className="text-center mb-12">
                        <span className="text-primary text-sm font-semibold tracking-widest uppercase">FAQ</span>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy leading-tight mt-2">
                            Common Questions
                        </h2>
                    </div>
                    <Accordion items={service.faq} />
                </div>
            </section>

            <CTABanner />
        </>
    );
};

export default ServiceDetailPage;
