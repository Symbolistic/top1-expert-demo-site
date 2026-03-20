import { SectionHeader } from '@/components/ui';

const REVIEWS = [
    {
        name: 'Mike R.',
        location: 'Brooklyn, NY',
        initials: 'MR',
        text: 'They showed up on time, gave us a fair price, and the crew was incredibly respectful of our property. Our new roof looks amazing and we could not be happier.',
    },
    {
        name: 'Sarah L.',
        location: 'Queens, NY',
        initials: 'SL',
        text: 'After a storm damaged our roof, they came out quickly for an inspection. No pressure, just honest advice. They handled everything with the insurance adjuster too. Could not have asked for a better experience.',
    },
    {
        name: 'James T.',
        location: 'Long Island, NY',
        initials: 'JT',
        text: 'Best roofing experience we have ever had. They explained everything clearly, finished ahead of schedule, and left our yard spotless. Highly recommend to anyone in the area.',
    },
];

const Stars = () => (
    <div role="img" aria-label="5 out of 5 stars" className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-amber-400 text-base" aria-hidden="true">★</span>
        ))}
    </div>
);

const Reviews = ({
    eyebrow = 'Reviews',
    title = 'What Your Neighbors Say',
    subtitle = "Don't take our word for it — here's what homeowners in your area say about working with us.",
}) => {
    return (
        <section id="reviews" className="py-[var(--spacing-section)] bg-bg">
            <div className="mx-auto max-w-6xl px-4">
                <SectionHeader
                    eyebrow={eyebrow}
                    title={title}
                    subtitle={subtitle}
                    className="mb-12"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {REVIEWS.map(({ name, location, initials, text }) => (
                        <div
                            key={name}
                            className="bg-surface border border-border rounded-[var(--radius-lg)] p-7 flex flex-col gap-4 shadow-[var(--shadow-card)] relative"
                        >
                            {/* Large quote mark */}
                            <span
                                className="absolute top-4 right-5 font-heading text-5xl text-primary/15 leading-none select-none"
                                aria-hidden="true"
                            >
                                &ldquo;
                            </span>

                            <Stars />

                            <p className="text-text/80 text-sm leading-relaxed italic flex-1">
                                &ldquo;{text}&rdquo;
                            </p>

                            <div className="flex items-center gap-3 pt-1 border-t border-border">
                                <div className="w-9 h-9 rounded-full bg-navy flex items-center justify-center shrink-0">
                                    <span className="text-white text-xs font-semibold">{initials}</span>
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-navy">{name}</p>
                                    <p className="text-xs text-muted">{location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
