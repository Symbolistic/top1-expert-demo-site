import { Button } from '@/components/ui';
import { PHONE_NUMBER, PHONE_HREF } from '@/utils/constants';

const CTABanner = ({
    title = 'Ready for a Roof That Lasts?',
    subtitle = 'Free inspections. Honest pricing. Work you can count on.',
}) => {
    return (
        <section className="bg-navy py-16 px-4">
            <div className="mx-auto max-w-3xl text-center flex flex-col items-center gap-5">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight">
                    {title}
                </h2>
                <p className="text-white/70 text-lg">{subtitle}</p>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
                    <Button href="/#contact" size="lg">
                        Schedule Free Inspection
                    </Button>
                    <Button
                        href={PHONE_HREF}
                        variant="outline"
                        size="lg"
                        className="border-white/30 text-white hover:border-white hover:text-white hover:bg-white/10"
                    >
                        Call {PHONE_NUMBER}
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTABanner;
