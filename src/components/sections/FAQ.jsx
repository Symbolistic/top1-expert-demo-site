import { SectionHeader, Accordion } from '@/components/ui';

const FAQ_ITEMS = [
    {
        question: 'How long does a roof replacement take?',
        answer: 'Most residential replacements are completed in one to two days, depending on the size and complexity of the roof. We keep you informed every step of the way and will not leave a job unfinished.',
    },
    {
        question: 'Do you offer free inspections?',
        answer: 'Yes — always. We will come out, inspect your roof thoroughly, and give you an honest assessment of what it needs. No pressure, no obligation. If it just needs a minor repair, we will tell you that.',
    },
    {
        question: 'Will my homeowner\'s insurance cover the damage?',
        answer: 'Storm damage from hail, wind, or fallen trees is often covered. We are experienced with the insurance claim process and can help you document the damage and work directly with your adjuster to make it as painless as possible.',
    },
    {
        question: 'What roofing materials do you use?',
        answer: 'We primarily install architectural shingles from top manufacturers like GAF and Owens Corning, which carry 25 to 50 year manufacturer warranties. We can walk you through your options and recommend what makes the most sense for your home and budget.',
    },
    {
        question: 'Are you licensed and insured?',
        answer: 'Yes. We are fully licensed, bonded, and insured in New York. We carry both general liability and workers\' compensation insurance, so you are fully protected. We are happy to provide proof of insurance before any work begins.',
    },
    {
        question: 'Do you offer a workmanship warranty?',
        answer: 'Yes. Every job we complete comes with a lifetime workmanship warranty. If something we installed fails due to our work, we come back and fix it — no cost to you. That is our commitment.',
    },
];

const FAQ = ({
    eyebrow = 'FAQ',
    title = 'Common Questions',
    subtitle = 'Have something else on your mind? Give us a call — we are happy to talk it through.',
    items = FAQ_ITEMS,
}) => {
    return (
        <section id="faq" className="py-[var(--spacing-section)] bg-bg">
            <div className="mx-auto max-w-3xl px-4">
                <SectionHeader
                    eyebrow={eyebrow}
                    title={title}
                    subtitle={subtitle}
                    className="mb-12"
                />
                <Accordion items={items} />
            </div>
        </section>
    );
};

export default FAQ;
