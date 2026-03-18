import { SectionHeader } from '@/components/ui';

const STEPS = [
    {
        step: '01',
        title: 'We Talk',
        description: 'You tell us about your business. We look at what you have now, figure out what you need, and put together a plan. No tech jargon, just a real conversation.',
    },
    {
        step: '02',
        title: 'We Build',
        description: 'We design your site, send you a preview to review and approve, then code it from scratch. Most sites are live within 1 to 2 weeks from when we start.',
    },
    {
        step: '03',
        title: 'We Stay',
        description: 'Your site goes live scoring 98-100 on PageSpeed. We stick around to handle edits, updates, and anything else that comes up. You have our number, call anytime.',
    },
];

const Process = ({
    eyebrow = 'How It Works',
    title = 'Simple From Start to Finish',
    subtitle = 'Three steps from first call to a live website that is already working for your business.',
    steps = STEPS,
}) => {
    return (
        <section id="process" className="py-[var(--spacing-section)]">
            <div className="mx-auto max-w-6xl px-4">
                <SectionHeader
                    eyebrow={eyebrow}
                    title={title}
                    subtitle={subtitle}
                    className="mb-16"
                />

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-px bg-border" aria-hidden="true" />

                    {steps.map(({ step, title: stepTitle, description }) => (
                        <div key={step} className="flex flex-col gap-4 relative">
                            <div className="w-16 h-16 rounded-[var(--radius-md)] bg-surface-2 border border-border flex items-center justify-center shrink-0">
                                <span className="font-heading text-xl font-bold text-primary">{step}</span>
                            </div>
                            <h3 className="font-heading text-xl font-semibold text-text">{stepTitle}</h3>
                            <p className="text-muted text-sm leading-relaxed">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
