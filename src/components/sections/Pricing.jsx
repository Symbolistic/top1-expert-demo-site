import { SectionHeader, Button } from "@/components/ui";
import { FiCheck, FiX } from "react-icons/fi";

const SUBSCRIPTION_FEATURES = [
  { label: "Custom website design", included: true },
  { label: "Hosting included", included: true },
  { label: "Unlimited edits", included: true },
  { label: "24/7 direct support", included: true },
  { label: "Monthly updates", included: true },
  { label: "Google Analytics setup", included: true },
  { label: "Google Business Profile help", included: true },
  { label: "Site ownership after 12 months", included: true },
];

const LUMP_SUM_FEATURES = [
  { label: "Custom website design", included: true },
  { label: "Full ownership of your site", included: true },
  { label: "$25/mo hosting after launch", included: true },
  { label: "Edits at $50/hr", included: true },
  { label: "Unlimited edits included", included: false },
  { label: "Hosting included", included: false },
  { label: "24/7 direct support", included: false },
  { label: "Google Business Profile help", included: false },
];

const FeatureItem = ({ label, included }) => (
  <li className="flex items-center gap-3 text-sm">
    {included ? (
      <FiCheck className="shrink-0 text-primary" />
    ) : (
      <FiX className="shrink-0 text-muted" />
    )}
    <span className={included ? "text-text" : "text-muted line-through"}>
      {label}
    </span>
  </li>
);

const Pricing = ({
  eyebrow = "Pricing",
  title = "Two Ways to Work With Us",
  subtitle = "Some businesses want zero upfront cost and someone to handle everything. Others want to pay once and own it. We do both.",
}) => {
  return (
    <section id="pricing" className="py-[var(--spacing-section)] bg-surface">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Subscription — featured */}
          <div className="relative rounded-[var(--radius-xl)] p-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent shadow-[var(--shadow-glow)]">
            <div className="relative rounded-[calc(var(--radius-xl)-1px)] bg-surface-2 flex flex-col h-full p-8">
              <div className="absolute -top-3 left-8">
                <span className="bg-primary text-bg text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase">
                  Most Popular
                </span>
              </div>

              <p className="text-muted text-xs font-semibold tracking-widest uppercase mb-3 mt-2">
                Monthly Subscription
              </p>
              <h3 className="font-heading text-3xl font-bold text-text mb-1">
                $0 Down
              </h3>
              <p className="text-muted text-sm mb-8">
                We build it, host it, and handle everything. 6-month minimum,
                then month-to-month.
              </p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {SUBSCRIPTION_FEATURES.map((f) => (
                  <FeatureItem key={f.label} {...f} />
                ))}
              </ul>

              <div className="border-t border-border pt-6 mb-6">
                <span className="font-heading text-5xl font-bold text-primary">
                  $150
                </span>
                <span className="text-muted text-sm ml-2">/ month</span>
              </div>

              <Button href="#contact" className="w-full">
                Get Started
              </Button>
            </div>
          </div>

          {/* Lump sum */}
          <div className="rounded-[var(--radius-xl)] border border-border bg-surface-2 flex flex-col p-8">
            <p className="text-muted text-xs font-semibold tracking-widest uppercase mb-3">
              Lump Sum
            </p>
            <h3 className="font-heading text-3xl font-bold text-text mb-1">
              Own It Outright
            </h3>
            <p className="text-muted text-sm mb-8">
              Pay once, own the site. Best for businesses ready to invest
              upfront.
            </p>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {LUMP_SUM_FEATURES.map((f) => (
                <FeatureItem key={f.label} {...f} />
              ))}
            </ul>

            <div className="border-t border-border pt-6 mb-6">
              <span className="font-heading text-5xl font-bold text-text">
                $1,200
              </span>
              <span className="text-muted text-sm ml-2">one-time</span>
              <p className="text-muted text-xs mt-1">+ $25/mo hosting</p>
            </div>

                        <Button href="#contact" variant="outline" className="w-full border-text/30 hover:border-primary">
                            Get Started
                        </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
