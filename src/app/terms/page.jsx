import { SITE_NAME, CONTACT_EMAIL } from '@/utils/constants';

export const metadata = { title: `Terms of Service – ${SITE_NAME}` };

export default function TermsPage() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-16 text-text/80 leading-relaxed space-y-8 [&_h1]:font-heading [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-text [&_h1]:mb-2 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-text [&_h2]:mt-8 [&_a]:text-primary [&_a]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
            <h1>Terms of Service</h1>
            <p className="text-muted text-sm">Last updated: March 2026</p>

            <p>
                These Terms of Service govern your engagement with {SITE_NAME} ("we", "us") for web design
                and development services. By submitting a contact form, signing a contract, or otherwise
                engaging our services, you agree to these terms.
            </p>

            <h2>1. Services</h2>
            <p>
                We provide custom website design, development, hosting, and maintenance services for small
                businesses. The specific scope of work, timeline, and deliverables for each project are
                outlined in the individual service agreement or contract provided to you before work begins.
            </p>

            <h2>2. Payments</h2>
            <p>
                Subscription clients are billed monthly at the agreed rate. A 6-month minimum contract
                applies, after which the agreement continues month-to-month. Lump sum clients pay the
                agreed amount upfront before work begins. Hosting fees (where applicable) are billed
                monthly and must remain current for your site to stay live.
            </p>

            <h2>3. Cancellations</h2>
            <p>
                Subscription clients may cancel after the 6-month minimum by providing 30 days written
                notice. Upon cancellation, your site remains live until the end of the final paid period.
                Lump sum clients own their site outright upon final payment. We do not offer refunds on
                completed work.
            </p>

            <h2>4. Ownership</h2>
            <p>
                Lump sum clients receive full ownership of the website code and design upon final payment.
                Subscription clients license the design for the duration of their active subscription.
                If a subscription is cancelled, the client retains their domain but not the design or code.
            </p>

            <h2>5. Client Responsibilities</h2>
            <p>You are responsible for:</p>
            <ul>
                <li>Providing accurate business information, branding assets, and content when requested</li>
                <li>Reviewing and approving design mockups within a reasonable timeframe</li>
                <li>Keeping your domain registration and any third-party accounts current</li>
                <li>Not using your website for unlawful purposes</li>
            </ul>

            <h2>6. Limitation of Liability</h2>
            <p>
                To the maximum extent permitted by law, {SITE_NAME} is not liable for indirect, incidental,
                or consequential damages arising from your use of our services or your website. Our total
                liability is limited to the fees paid by you in the three months preceding the claim.
            </p>

            <h2>7. Modifications</h2>
            <p>
                We may update these Terms from time to time. Continued use of our services after changes
                are posted constitutes acceptance of the updated Terms.
            </p>

            <h2>8. Contact</h2>
            <p>
                Questions? Reach us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
        </div>
    );
}
