import { SectionHeader, Accordion } from '@/components/ui';

const FAQ_ITEMS = [
    {
        question: 'How long does it take to build my website?',
        answer: 'Most sites are live within 1 to 2 weeks from when we start. The main thing that affects the timeline is how quickly you can get us your photos and any info about your business. Once we have what we need, we move fast.',
    },
    {
        question: 'Do I own the website?',
        answer: 'On the lump sum plan, yes, you own everything outright. On the subscription plan, we host and manage the site on your behalf. If you cancel, you keep your domain. The design and code stay with us, so you would need to start fresh with someone else. That is part of why we encourage the 6-month minimum. It takes 6 to 12 months for Google to properly rank a new site, and we want you around long enough to actually see the results.',
    },
    {
        question: 'What is included in the $150 a month?',
        answer: 'Everything. Hosting, unlimited edits, 24/7 support, monthly updates, Google Analytics, and help with your Google Business Profile. You also get our direct number. No phone trees, no support tickets. Just text or call and we handle it.',
    },
    {
        question: 'Why should I keep paying $150 a month after the site is built?',
        answer: 'Think about it this way. If the site brings in one new customer a month, it has already paid for itself. For most trades and service businesses, one customer is worth hundreds to thousands of dollars. The $150 is not just for the site. It is access to us. It is someone managing your web presence so you do not have to. Every hour you spend messing with a website is an hour not spent on your business.',
    },
    {
        question: 'Will my site rank on Google?',
        answer: 'We build every site to score 98-100 on Google PageSpeed, which is a direct ranking factor. We also structure the content properly and help with your Google Business Profile. Ranking takes time and depends on your market, but we give you the best possible foundation from day one.',
    },
    {
        question: 'What if I need changes after the site is live?',
        answer: 'Subscription clients get unlimited edits included, just reach out and we take care of it. Lump sum clients are billed at $50 per hour with a one hour minimum. Most simple edits take less than an hour.',
    },
];

const FAQ = ({
    eyebrow = 'FAQ',
    title = 'Common Questions',
    subtitle = "Something on your mind? Here are the ones we hear most. If yours is not here, just reach out.",
    items = FAQ_ITEMS,
}) => {
    return (
        <section id="faq" className="py-[var(--spacing-section)]">
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
