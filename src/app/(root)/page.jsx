import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Performance from '@/components/sections/Performance';
import Process from '@/components/sections/Process';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import PerformanceScreenshot from '@/styles/assets/performance.webp';

const Home = () => {
    return (
        <main>
            <Hero />
            <Services />
            <Performance screenshotSrc={PerformanceScreenshot} />
            <Process />
            <Pricing />
            <FAQ />
            <CTA />
        </main>
    );
};

export default Home;
