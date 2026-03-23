import Image from 'next/image';
import img1 from '@/styles/assets/roofer-gallary-1.webp';
import img2 from '@/styles/assets/roofer-gallary-2.webp';
import img3 from '@/styles/assets/roofer-gallary-3.webp';
import img4 from '@/styles/assets/roofer-gallary-4.webp';
import img5 from '@/styles/assets/roofer-gallary-5.webp';
import { SectionHeader } from '@/components/ui';

const IMAGES = [
    { src: img1, alt: 'Full roof replacement — TOP 1 Expert Home Improvement', label: 'Full Roof Replacement', featured: true },
    { src: img2, alt: 'Roof repair project — TOP 1 Expert Home Improvement', label: 'Roof Repair' },
    { src: img3, alt: 'Roofing project — TOP 1 Expert Home Improvement', label: 'Tear-off & Reroof' },
    { src: img4, alt: 'Completed roofing work — TOP 1 Expert Home Improvement', label: 'Shingle Install' },
    { src: img5, alt: 'Roofing crew at work — TOP 1 Expert Home Improvement', label: 'Expert Crew' },
];

const Gallery = ({
    eyebrow = 'Our Work',
    title = 'See the Difference Quality Makes',
    subtitle = 'Real projects from real homes in your neighborhood.',
}) => {
    return (
        <section id="gallery" className="py-[var(--spacing-section)] bg-surface">
            <div className="mx-auto max-w-6xl px-4">
                <SectionHeader
                    eyebrow={eyebrow}
                    title={title}
                    subtitle={subtitle}
                    className="mb-12"
                />

                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
                    {IMAGES.map(({ src, alt, label, featured }) => (
                        <div
                            key={label}
                            className={`relative rounded-[var(--radius-lg)] overflow-hidden flex items-end p-4 group${featured ? ' col-span-2 row-span-2' : ''}`}
                        >
                            <Image
                                src={src}
                                alt={alt}
                                fill
                                quality={75}
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" aria-hidden="true" />
                            <span className="relative z-10 text-xs font-medium text-white/90">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>

                <p className="text-center text-sm text-muted mt-6">
                    Photos from completed projects — updated regularly.
                </p>
            </div>
        </section>
    );
};

export default Gallery;
