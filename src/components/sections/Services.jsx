import { Card, SectionHeader } from '@/components/ui';

const SERVICES = [
    {
        icon: '⚡',
        title: '98-100 PageSpeed Scores',
        description: 'Every site is custom coded line by line. No page builders, no bloated themes. Google rewards fast sites with better rankings and so do your customers.',
    },
    {
        icon: '📱',
        title: 'Mobile First',
        description: 'Google launched Core Vitals specifically for mobile performance. We build mobile first, every time, because that is where most of your traffic is coming from.',
    },
    {
        icon: '🔍',
        title: 'Built to Rank',
        description: 'Clean code, proper structure, keyword-rich content, and a fast load time. We give your site the best possible foundation to climb the search results.',
    },
    {
        icon: '🎨',
        title: 'Custom Design',
        description: 'No templates. No recycled layouts. Your site is designed from scratch to fit your business, your market, and the customers you are trying to reach.',
    },
    {
        icon: '🔧',
        title: 'We Handle Everything',
        description: 'Hosting, edits, updates, support. You run your business. We handle the website. You have our number and can call or text anytime.',
    },
    {
        icon: '📊',
        title: 'Analytics and Google Profile',
        description: 'We set up your analytics so you can see what is working, and we help optimize your Google Business Profile to show up better in local search.',
    },
];

const Services = ({
    eyebrow = 'What We Do',
    title = 'This Is Not Your Average Website',
    subtitle = 'Most websites are slow, generic, and built on page builders that Google does not favor. Ours are not.',
    services = SERVICES,
}) => {
    return (
        <section id="services" className="py-[var(--spacing-section)] bg-surface">
            <div className="mx-auto max-w-6xl px-4">
                <SectionHeader
                    eyebrow={eyebrow}
                    title={title}
                    subtitle={subtitle}
                    className="mb-16"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map(({ icon, title: serviceTitle, description }) => (
                        <Card key={serviceTitle} className="flex flex-col gap-4 hover:border-primary/40 transition-colors duration-300">
                            <span className="text-3xl" aria-hidden="true">{icon}</span>
                            <h3 className="font-heading text-lg font-semibold text-text">{serviceTitle}</h3>
                            <p className="text-muted text-sm leading-relaxed">{description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
