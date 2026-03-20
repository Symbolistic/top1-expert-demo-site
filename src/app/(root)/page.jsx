import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import CTABanner from '@/components/sections/CTABanner';
import Process from '@/components/sections/Process';
import Gallery from '@/components/sections/Gallery';
import Reviews from '@/components/sections/Reviews';
import ServiceAreas from '@/components/sections/ServiceAreas';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

const Home = () => {
    return (
        <main>
            <Hero />
            <TrustBar />
            <Services />
            <About />
            <CTABanner />
            <Process />
            <Gallery />
            <Reviews />
            <ServiceAreas />
            <FAQ />
            <CTA />
        </main>
    );
};

export default Home;
