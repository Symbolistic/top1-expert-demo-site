import { SITE_NAME, CONTACT_EMAIL } from '@/utils/constants';

export const metadata = { title: `Privacy Policy – ${SITE_NAME}` };

export default function PrivacyPage() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-16 text-text/80 leading-relaxed space-y-8 [&_h1]:font-heading [&_h1]:text-4xl [&_h1]:font-bold [&_h1]:text-text [&_h1]:mb-2 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-text [&_h2]:mt-8 [&_a]:text-primary [&_a]:underline [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1">
            <h1>Privacy Policy</h1>
            <p className="text-muted text-sm">Last updated: March 2026</p>

            <p>
                {SITE_NAME} ("we", "us") is committed to protecting your privacy. This policy explains
                what information we collect when you visit our website or contact us, and how we use it.
            </p>

            <h2>1. Information We Collect</h2>
            <ul>
                <li>Contact form submissions (name, email, business name, message)</li>
                <li>Basic analytics data (pages visited, time on site, general location) via Google Analytics</li>
                <li>Standard server logs (IP address, browser type) collected automatically by our hosting provider</li>
            </ul>
            <p>We do not collect payment information directly. No accounts or passwords are created on this site.</p>

            <h2>2. How We Use It</h2>
            <ul>
                <li>To respond to your inquiry and communicate about potential projects</li>
                <li>To understand how visitors use our site and improve it over time</li>
                <li>To fulfill our contractual obligations to clients</li>
            </ul>

            <h2>3. Sharing</h2>
            <p>
                We do not sell your information. We use a small number of trusted third-party services
                to operate our business, including Google Analytics for site analytics and Resend for
                email delivery. These providers are bound by their own privacy policies and may only
                use your data to provide services to us.
            </p>

            <h2>4. Cookies</h2>
            <p>
                This site uses cookies for analytics purposes only (Google Analytics). You can disable
                cookies in your browser settings at any time without affecting your ability to use the site.
            </p>

            <h2>5. Data Retention</h2>
            <p>
                Contact form submissions are retained only as long as necessary to respond and manage
                the business relationship. Analytics data is retained per Google Analytics default settings.
            </p>

            <h2>6. Your Rights</h2>
            <p>
                You may request access to, correction of, or deletion of any personal information we
                hold about you by contacting us directly. We will respond within 30 days.
            </p>

            <h2>7. Changes</h2>
            <p>
                We may update this policy periodically. The "Last updated" date at the top reflects
                the most recent version.
            </p>

            <h2>8. Contact</h2>
            <p>
                Questions? Reach us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
        </div>
    );
}
