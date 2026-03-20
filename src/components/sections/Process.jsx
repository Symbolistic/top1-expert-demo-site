import { SectionHeader } from '@/components/ui';

const STEPS = [
    {
        step: '01',
        title: 'Give Us a Call',
        description: 'Call or fill out our form. We\'ll schedule a visit at a time that works for you — no waiting, no runaround.',
    },
    {
        step: '02',
        title: 'Free Inspection',
        description: 'We\'ll thoroughly inspect your roof and explain exactly what we find. No jargon, no pressure.',
    },
    {
        step: '03',
        title: 'Clear Written Quote',
        description: 'You\'ll get a written estimate with no hidden costs. The price we quote is the price you pay.',
    },
    {
        step: '04',
        title: 'Quality Install',
        description: 'Our crew gets it done on time, on budget, and leaves your property spotless. Guaranteed.',
    },
];

const Process = ({
    eyebrow = 'How It Works',
    title = 'Simple From Start to Finish',
    subtitle = 'No confusion, no surprises. Here\'s exactly what to expect when you work with us.',
    steps = STEPS,
}) => {
    return (
        <section id="process" className="py-[var(--spacing-section)] bg-bg">
            <div className="mx-auto max-w-6xl px-4">
                <SectionHeader
                    eyebrow={eyebrow}
                    title={title}
                    subtitle={subtitle}
                    className="mb-16"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting line — desktop only */}
                    <div className="hidden lg:block absolute top-7 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px bg-border" aria-hidden="true" />

                    {steps.map(({ step, title: stepTitle, description }) => (
                        <div key={step} className="flex flex-col gap-4 relative">
                            <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center shrink-0">
                                <span className="font-heading text-lg font-bold text-white">{step}</span>
                            </div>
                            <h3 className="font-heading text-lg font-semibold text-text">{stepTitle}</h3>
                            <p className="text-muted text-sm leading-relaxed">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
