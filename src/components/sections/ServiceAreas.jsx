import { SectionHeader } from '@/components/ui';
import { SERVICE_AREAS } from '@/utils/constants';

const ServiceAreas = ({
    eyebrow = 'Service Areas',
    title = 'Proudly Serving New York and the Metro Area',
    subtitle = 'From Brooklyn to Long Island, the Bronx to Westchester — we come to you.',
}) => {
    return (
        <section id="areas" className="py-[var(--spacing-section)] bg-surface">
            <div className="mx-auto max-w-4xl px-4">
                <SectionHeader
                    eyebrow={eyebrow}
                    title={title}
                    subtitle={subtitle}
                    className="mb-10"
                />

                <div className="flex flex-wrap gap-3">
                    {SERVICE_AREAS.map((area) => (
                        <span
                            key={area}
                            className="bg-bg border border-border rounded-[var(--radius-md)] px-4 py-2 text-sm text-text font-medium"
                        >
                            {area}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceAreas;
