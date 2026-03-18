export const metadata = { title: 'Privacy Policy' };

const APP = process.env.NEXT_PUBLIC_SITE_NAME || 'Your App';
const COMPANY = process.env.NEXT_PUBLIC_COMPANY_NAME || 'Your Company';
const CONTACT = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'support@example.com';

export default function PrivacyPage() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-16 prose">
            <h1>Privacy Policy</h1>

            <p>
                This Privacy Policy explains how {COMPANY} ("we", "us") collects, uses, and shares
                information when you use {APP} (the "Service").
            </p>

            <h2>1. Information We Collect</h2>
            <ul>
                <li>Account information (name, email, authentication data)</li>
                <li>Payment information processed by our payment provider (we don’t store card numbers)</li>
                <li>Usage data and device information (logs, IP, browser)</li>
                <li>Cookies and similar technologies for essential functionality and analytics</li>
            </ul>

            <h2>2. How We Use Information</h2>
            <ul>
                <li>Provide, maintain, and improve the Service</li>
                <li>Process payments and manage subscriptions</li>
                <li>Communicate with you about product updates and support</li>
                <li>Detect, prevent, and address security or abuse issues</li>
                <li>Comply with legal obligations</li>
            </ul>

            <h2>3. Sharing</h2>
            <p>
                We share data with service providers who help us run the Service (e.g., hosting, email,
                analytics, payments). We require them to protect your data and use it only on our behalf.
            </p>

            <h2>4. Data Retention</h2>
            <p>We keep data only as long as necessary for the purposes above or as required by law.</p>

            <h2>5. Security</h2>
            <p>We use industry-standard safeguards to protect information. No method is 100% secure.</p>

            <h2>6. Your Choices</h2>
            <ul>
                <li>You can access, update, or delete your account data from within the app or by contacting us.</li>
                <li>You can control cookies via your browser settings.</li>
                <li>You can opt out of non-essential emails via unsubscribe links.</li>
            </ul>

            <h2>7. International Transfers</h2>
            <p>Your data may be processed in countries other than your own, which may have different laws.</p>

            <h2>8. Children</h2>
            <p>The Service is not intended for children under 13, and we don’t knowingly collect their data.</p>

            <h2>9. Changes</h2>
            <p>We may update this Policy. We’ll post the updated version and update the “Last updated” date.</p>

            <h2>10. Contact</h2>
            <p>Questions or requests? Contact us at {CONTACT}.</p>
        </div>
    );
}


