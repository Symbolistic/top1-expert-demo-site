import Image from "next/image";
import { SectionHeader, Button } from "@/components/ui";
import { FiCheck } from "react-icons/fi";

const STATS = [
  { value: "98-100", label: "PageSpeed Score" },
  { value: "< 1s", label: "Load Time" },
  { value: "100%", label: "Custom Coded" },
];

const POINTS = [
  "Page builders like WordPress and Wix are bloated. Google knows it and ranks them lower.",
  "Every second of load time you lose more visitors. Fast sites keep people on the page.",
  "Google Core Vitals made mobile performance a direct ranking factor. We build for that.",
  "Our sites score 98-100 out of the box. Your competition almost certainly does not.",
];

const Performance = ({
  eyebrow = "Performance",
  title = "We Build Better Websites That Perform",
  subtitle = "Test your current site on Google PageSpeed Insights. Then look at ours.",
  screenshotSrc = null,
  screenshotAlt = "Google PageSpeed Insights score of 100",
}) => {
  return (
    <section
      id="performance"
      className="py-[var(--spacing-section)] bg-surface"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — copy */}
          <div className="flex flex-col gap-8">
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              subtitle={subtitle}
              align="left"
            />

            {/* Stats row */}
            <div className="flex flex-wrap gap-8">
              {STATS.map(({ value, label }) => (
                <div key={label} className="flex flex-col gap-1">
                  <span className="font-heading text-3xl font-bold text-primary">
                    {value}
                  </span>
                  <span className="text-xs text-muted tracking-wide">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Bullet points */}
            <ul className="flex flex-col gap-3">
              {POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-sm text-muted leading-relaxed"
                >
                  <FiCheck className="shrink-0 mt-0.5 text-primary" />
                  {point}
                </li>
              ))}
            </ul>

            <Button href="#contact" className="self-start">
              Get a Free Quote
            </Button>
          </div>

          {/* Right — PageSpeed screenshot */}
          <div className="flex justify-center lg:justify-end">
            {screenshotSrc ? (
              <div className="w-full max-w-lg rounded-[var(--radius-lg)] overflow-hidden border border-border shadow-[var(--shadow-card)]">
                <Image
                  src={screenshotSrc}
                  alt={screenshotAlt}
                  width={640}
                  height={400}
                  quality={75}
                  className="w-full h-auto"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                />
              </div>
            ) : (
              <div className="w-full max-w-lg aspect-video rounded-[var(--radius-lg)] border border-dashed border-border bg-surface-2 flex flex-col items-center justify-center gap-3">
                <span className="font-heading text-6xl font-bold text-primary">
                  100
                </span>
                <span className="text-muted text-sm">
                  PageSpeed screenshot coming soon
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
