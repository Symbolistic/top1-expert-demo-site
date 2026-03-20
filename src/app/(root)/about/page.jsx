import { FiCheck, FiAward, FiUsers, FiThumbsUp } from 'react-icons/fi';
import PageBanner from '@/components/sections/PageBanner';
import CTABanner from '@/components/sections/CTABanner';
import { SITE_NAME } from '@/utils/constants';

export const metadata = {
    title: `About Us | ${SITE_NAME}`,
    description: 'Family-owned roofing contractor serving the New York metropolitan area. Learn about our team, our values, and why homeowners across NYC trust us.',
};

const VALUES = [
    {
        icon: FiAward,
        title: 'Quality First',
        description: 'We use premium materials and take the time to do the job right. Cutting corners costs homeowners more in the long run, and we refuse to do it.',
    },
    {
        icon: FiUsers,
        title: 'Family Owned',
        description: 'We are not a franchise or a big corporation. We are your neighbors. That means you get a direct line to the people doing the work, every time.',
    },
    {
        icon: FiThumbsUp,
        title: 'Honest Always',
        description: 'If your roof needs a repair instead of a replacement, we will tell you that. Our business is built on referrals, and referrals are built on trust.',
    },
];

const CHECKS = [
    'Family owned and operated',
    'Fully licensed, bonded, and insured in New York',
    'Decades of experience in the metro area',
    'Lifetime workmanship warranty on all installs',
    'We work directly with insurance adjusters',
    'Roofing, skylights, chimney, and gutters',
    'Serving all five boroughs and surrounding areas',
];

const TEAM = [
    { name: 'Owner Name', role: 'Owner & Lead Installer', initials: 'ON' },
    { name: 'Team Member', role: 'Project Manager', initials: 'TM' },
    { name: 'Team Member', role: 'Lead Crew', initials: 'TM' },
];

const AboutPage = () => {
    return (
        <>
            <PageBanner
                eyebrow="About Us"
                title="Your Neighbors in the Roofing Business"
                subtitle="Family-owned and operated. Built on honesty, quality work, and showing up when it counts."
                breadcrumb={[{ label: 'About' }]}
            />

            {/* Story section */}
            <section className="py-[var(--spacing-section)] bg-bg">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
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

                        <div className="flex flex-col gap-6">
                            <div>
                                <span className="text-primary text-sm font-semibold tracking-widest uppercase">Our Story</span>
                                <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy leading-tight mt-2">
                                    Built on Reputation. Proven by Results.
                                </h2>
                                <p className="text-muted text-base leading-relaxed mt-4">
                                    TOP 1 Expert Home Improvement is a family-owned and operated business proudly serving the greater New York and metropolitan area. With decades of experience delivering top-quality roofing services, our skilled team is committed to offering the highest level of service and craftsmanship in the region.
                                </p>
                                <p className="text-muted text-base leading-relaxed mt-3">
                                    We have seen a lot of contractors come through this area, take a big payment, do mediocre work, and disappear. We built our business to be the opposite of that. When you call us, you reach us. When we give you a price, that is the price.
                                </p>
                            </div>

                            <ul className="flex flex-col gap-3">
                                {CHECKS.map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-text">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                            <FiCheck className="text-primary" size={13} aria-hidden="true" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-[var(--spacing-section)] bg-surface">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center mb-12">
                        <span className="text-primary text-sm font-semibold tracking-widest uppercase">What We Stand For</span>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy leading-tight mt-2">Our Values</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {VALUES.map(({ icon: Icon, title, description }) => (
                            <div key={title} className="flex flex-col gap-4 p-8 bg-bg border border-border rounded-[var(--radius-lg)]">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Icon className="text-primary" size={22} aria-hidden="true" />
                                </div>
                                <h3 className="font-heading text-xl font-semibold text-navy">{title}</h3>
                                <p className="text-muted text-sm leading-relaxed">{description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-[var(--spacing-section)] bg-bg">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center mb-12">
                        <span className="text-primary text-sm font-semibold tracking-widest uppercase">The Team</span>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy leading-tight mt-2">
                            The People Behind the Work
                        </h2>
                        <p className="text-muted text-lg mt-3 max-w-xl mx-auto">
                            A small, experienced crew that takes pride in every job.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                        {TEAM.map(({ name, role, initials }) => (
                            <div key={name} className="bg-surface border border-border rounded-[var(--radius-lg)] p-6 flex flex-col items-center gap-3 text-center shadow-[var(--shadow-card)]">
                                <div className="w-20 h-20 rounded-full bg-surface-2 border border-border flex items-center justify-center">
                                    <span className="font-heading text-xl font-bold text-navy">{initials}</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-text">{name}</p>
                                    <p className="text-xs text-muted mt-0.5">{role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner />
        </>
    );
};

export default AboutPage;
