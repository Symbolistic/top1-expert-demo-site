import Image from 'next/image';
import HeroImage from '@/styles/assets/hero-img.webp';
import { Button, Badge } from '@/components/ui';
import { PHONE_NUMBER, PHONE_HREF } from '@/utils/constants';

const Hero = ({
    eyebrow = 'Serving New York & the Metro Area',
    headline = 'Trusted Roofing for New York Homeowners',
    subheadline = 'Family-owned and operated with decades of experience. Quality craftsmanship, fair pricing, and work we stand behind — every time.',
    primaryCta = { label: 'Get Your Free Estimate', href: '#contact' },
    image = HeroImage,
    imageAlt = 'Roofing crew on a residential roof — TOP 1 Expert Home Improvement',
}) => {
    return (
        <section className="relative min-h-[600px] flex items-center pt-[70px] overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src={image}
                    alt={imageAlt}
                    fill
                    priority
                    fetchPriority="high"
                    quality={50}
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
                />
                <div className="absolute inset-0 bg-navy/80" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/60 via-navy/30 to-transparent" />
            </div>

            {/* Content — px-6 matches the header's logo indent */}
            <div className="relative z-10 mx-auto max-w-6xl w-full px-6 py-24">
                <div className="max-w-xl flex flex-col gap-6">
                    <Badge variant="accent" className="self-start border-primary/40 bg-primary/20 text-white">
                        {eyebrow}
                    </Badge>

                    <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        {headline}
                    </h1>

                    <p className="text-white/80 text-lg leading-relaxed">
                        {subheadline}
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                        <Button href={primaryCta.href} size="lg">
                            {primaryCta.label}
                        </Button>
                        <Button
                            href={PHONE_HREF}
                            variant="outline"
                            size="lg"
                            className="border-white/30 text-white hover:border-white hover:text-white hover:bg-white/10"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.11 7.74a16 16 0 006.15 6.15l1.62-1.14a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                            </svg>
                            {PHONE_NUMBER}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
