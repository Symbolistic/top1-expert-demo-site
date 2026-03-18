export const metadata = { title: 'Terms of Service' };

const APP = process.env.NEXT_PUBLIC_SITE_NAME || 'Your App';
const COMPANY = process.env.NEXT_PUBLIC_COMPANY_NAME || 'Your Company';
const CONTACT = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'support@example.com';

export default function TermsPage() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-16 prose">
            <h1>Terms of Service</h1>

            <p>
                These Terms of Service ("Terms") govern your access to and use of {APP}
                (the "Service") provided by {COMPANY} ("we", "us"). By using the Service, you
                agree to these Terms.
            </p>

            <h2>1. Eligibility</h2>
            <p>You must be at least 18 years old to use the Service.</p>

            <h2>2. Accounts</h2>
            <p>
                You are responsible for maintaining the confidentiality of your account and for all
                activities under it. Provide accurate information and update it as needed.
            </p>

            <h2>3. Acceptable Use</h2>
            <p>Do not violate laws, infringe rights, disrupt the Service, or attempt unauthorized access.</p>

            <h2>4. Subscriptions and Payments</h2>
            <p>
                Paid features may be offered on a subscription basis. Prices and features may change
                with notice. Taxes may apply. You authorize us and our payment processor to charge your
                payment method. Failed payments may result in suspension.
            </p>

            <h2>5. Cancellations and Refunds</h2>
            <p>
                You can cancel at any time; access continues until the end of the billing period.
                Refunds are provided where required by law and otherwise at our discretion.
            </p>

            <h2>6. Intellectual Property</h2>
            <p>
                We retain all rights in the Service. You may not copy, modify, or create derivative
                works except as permitted by these Terms.
            </p>

            <h2>7. User Content</h2>
            <p>
                You retain ownership of content you submit. You grant us a worldwide, non-exclusive
                license to host, process, and display it to provide the Service.
            </p>

            <h2>8. Privacy</h2>
            <p>Your use of the Service is subject to our Privacy Policy.</p>

            <h2>9. Disclaimers</h2>
            <p>
                THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL
                IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                NON-INFRINGEMENT.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, {COMPANY} WILL NOT BE LIABLE FOR INDIRECT,
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS,
                REVENUE, DATA, OR USE.
            </p>

            <h2>11. Indemnification</h2>
            <p>You agree to indemnify and hold {COMPANY} harmless from claims arising from your use of the Service.</p>

            <h2>12. Modifications</h2>
            <p>We may modify these Terms by posting an updated version. Continued use constitutes acceptance.</p>

            <h2>13. Governing Law</h2>
            <p>These Terms are governed by the laws of your primary place of business unless otherwise required.</p>

            <h2>14. Contact</h2>
            <p>Questions? Contact us at {CONTACT}.</p>
        </div>
    );
}


