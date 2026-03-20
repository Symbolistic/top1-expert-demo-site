import Link from 'next/link';
import PageBanner from '@/components/sections/PageBanner';
import CTABanner from '@/components/sections/CTABanner';
import { SITE_NAME } from '@/utils/constants';

export const metadata = {
    title: `Our Work | ${SITE_NAME}`,
    description: 'Browse completed roofing, skylight, chimney, and gutter projects across New York City and the greater metro area.',
};

const PROJECTS = [
    { id: 1, label: 'Roof Replacement', location: 'Brooklyn, NY', featured: true },
    { id: 2, label: 'Skylight Installation', location: 'Queens, NY' },
    { id: 3, label: 'Full Reroof', location: 'The Bronx, NY' },
    { id: 4, label: 'Gutter Install', location: 'Staten Island, NY' },
    { id: 5, label: 'Chimney Repair', location: 'Long Island, NY' },
    { id: 6, label: 'Tear-off & Replacement', location: 'Westchester, NY' },
    { id: 7, label: 'Ridge & Flashing', location: 'Brooklyn, NY' },
    { id: 8, label: 'Skylight Replacement', location: 'Queens, NY' },
    { id: 9, label: 'Chimney Tuckpointing', location: 'Manhattan, NY' },
];

const GalleryPage = () => {
    return (
        <>
            <PageBanner
                eyebrow="Our Work"
                title="See the Difference Quality Makes"
                subtitle="Real projects from real homes across New York City and the greater metro area."
                breadcrumb={[{ label: 'Gallery' }]}
            />

            <section className="py-[var(--spacing-section)] bg-bg">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[220px] gap-4">
                        {PROJECTS.map(({ id, label, location, featured }) => (
                            <div
                                key={id}
                                className={`relative rounded-[var(--radius-lg)] bg-surface-2 border border-border overflow-hidden flex flex-col justify-end p-4 group hover:border-primary/40 transition-colors duration-300${featured ? ' col-span-2 row-span-2' : ''}`}
                            >
                                <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                                    <svg
                                        width={featured ? '72' : '44'}
                                        height={featured ? '72' : '44'}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-muted/20"
                                    >
                                        <rect x="3" y="3" width="18" height="18" rx="2" />
                                        <circle cx="8.5" cy="8.5" r="1.5" />
                                        <polyline points="21 15 16 10 5 21" />
                                    </svg>
                                </div>
                                <div className="relative z-10">
                                    <p className="text-sm font-semibold text-text group-hover:text-navy transition-colors duration-200">{label}</p>
                                    <p className="text-xs text-muted mt-0.5">{location}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-sm text-muted mt-8">
                        Photos updated regularly as projects are completed.{' '}
                        <Link href="/#contact" className="text-primary font-medium hover:underline">
                            Request a free inspection
                        </Link>
                    </p>
                </div>
            </section>

            <CTABanner />
        </>
    );
};

export default GalleryPage;
