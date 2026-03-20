import Image from 'next/image';
import WorkerImage from '@/styles/assets/worker1.jpg';
import { FiCheck } from 'react-icons/fi';
import { Button } from '@/components/ui';

const CHECKS = [
    'Family owned and operated',
    'Decades of experience in the New York metro area',
    'Fully licensed, bonded, and insured',
    'No hidden fees or surprise charges',
    'We clean up after every job',
    'Committed to the highest level of service and craftsmanship',
];

const About = ({
    eyebrow = 'Our Story',
    title = 'A Family Business Built on Quality.',
    body = 'TOP 1 Expert Home Improvement is a family-owned and operated business proudly serving the greater New York and metropolitan area. With decades of experience delivering top-quality roofing services, our skilled team is committed to offering the highest level of service and craftsmanship in the region.',
}) => {
    return (
        <section id="about" className="py-[var(--spacing-section)] bg-surface">
            <div className="mx-auto max-w-6xl px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <div className="relative">
                        <div className="aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden">
                            <Image
                                src={WorkerImage}
                                alt="TOP 1 Expert Home Improvement crew member on the job"
                                fill
                                quality={75}
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-b-[var(--radius-lg)]" aria-hidden="true" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
                                {eyebrow}
                            </span>
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy leading-tight">
                                {title}
                            </h2>
                            <p className="text-muted text-base leading-relaxed mt-2">
                                {body}
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

                        <Button href="/about" className="self-start mt-2">
                            Meet Our Team
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
