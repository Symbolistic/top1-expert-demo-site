import Image from "next/image";
import HeroImage from "@/styles/assets/hero-img.webp";
import { Button, Badge } from "@/components/ui";

const STATS = [
  { value: "98-100", label: "PageSpeed Score" },
  { value: "< 1s", label: "Load Time" },
  { value: "100%", label: "Mobile Optimized" },
];

const Hero = ({
  eyebrow = "Web Design Agency",
  headline = "Websites That Win Customers",
  subheadline = "Custom coded. No page builders. No bloat. Just fast, beautiful websites that rank on Google and turn visitors into customers.",
  primaryCta = { label: "Get a Free Quote", href: "#contact" },
  secondaryCta = { label: "See How It Works", href: "#process" },
  image = HeroImage,
  imageAlt = "City skyline at sunset — Vantage Web Designs",
}) => {
  return (
    <section className="relative min-h-screen flex flex-col pt-16 overflow-hidden">
      {/* Background image — priority for LCP */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          quality={60}
          className="object-cover object-center"
          sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
        />
        {/* Layered overlays for readability */}
        <div className="absolute inset-0 bg-bg/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-bg" />
      </div>

      {/* Content — flex-1 fills remaining space and centers vertically */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center gap-6 max-w-3xl mx-auto px-4 py-24">
        <Badge variant="accent">{eyebrow}</Badge>

        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-tight">
          {headline}
        </h1>

        <p className="text-text/70 text-lg md:text-xl leading-relaxed max-w-xl">
          {subheadline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button href={primaryCta.href} size="lg">
            {primaryCta.label}
          </Button>
          <Button
            href={secondaryCta.href}
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:border-primary hover:text-primary"
          >
            {secondaryCta.label}
          </Button>
        </div>
      </div>

      {/* Stats bar — anchored to bottom */}
      <div className="relative z-10 w-full border-t border-border bg-bg/60 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-6 flex flex-wrap justify-center gap-12">
          {STATS.map(({ value, label }) => (
            <div key={label} className="flex flex-col gap-1 items-center">
              <span className="font-heading text-2xl font-bold text-primary">
                {value}
              </span>
              <span className="text-xs text-muted tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
