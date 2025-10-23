import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - GoHigh Impact",
  description:
    "Learn how GoHigh Impact collects, uses, and protects your personal information when you access our GoHighLevel CRM resources.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const sections = [
  {
    heading: "1. Information We Collect",
    body: `We collect information you voluntarily provide, including your name, email address, and business details when you download resources, book a consultation, or join our newsletter. We also gather usage data through analytics tools to understand how visitors interact with our content.`,
  },
  {
    heading: "2. How We Use Your Information",
    body: `Your information helps us deliver GoHighLevel CRM insights, respond to inquiries, and share relevant updates. We may send educational content, platform updates, and service offers. You can opt out of non-essential communications at any time.`,
  },
  {
    heading: "3. Sharing & Disclosure",
    body: `We do not sell your personal information. We share limited data with trusted service providers (such as email marketing platforms and analytics tools) strictly to operate our business. These partners must protect your data and may not use it for their own marketing.`,
  },
  {
    heading: "4. Cookies & Tracking",
    body: `We use cookies and similar technologies to remember preferences, measure performance, and improve user experience. You can disable cookies in your browser settings; however, some site functionality may be limited.`,
  },
  {
    heading: "5. Data Retention",
    body: `We retain personal information for as long as necessary to provide services, comply with legal obligations, and resolve disputes. When information is no longer needed, we securely delete or anonymize it.`,
  },
  {
    heading: "6. Your Rights",
    body: `Depending on your location, you may request access to, correction of, or deletion of your personal data. To exercise these rights, contact us at support@wealthysales.com with the subject line “Privacy Request.”`,
  },
  {
    heading: "7. Data Security",
    body: `We implement reasonable administrative, technical, and physical safeguards to protect your data. While no method of transmission is 100% secure, we continuously monitor and improve our practices.`,
  },
  {
    heading: "8. Children’s Privacy",
    body: `Our resources are intended for professionals and agency owners. We do not knowingly collect personal information from individuals under the age of 16. If you believe we have collected such data, please contact us so we can delete it.`,
  },
  {
    heading: "9. Updates to This Policy",
    body: `We may update this Privacy Policy to reflect new regulations or changes in our practices. We will revise the “Last updated” date and encourage you to review this page regularly.`,
  },
  {
    heading: "10. Contact",
    body: `Have questions about this policy or your data? Email support@wealthysales.com or reach us on Instagram at @gohighimpact.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-widest text-brand-blue">Legal</p>
        <h1 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-gray-600 sm:text-base">
          Last updated: October 23, 2025
        </p>
        <p className="mt-6 text-sm text-gray-600 sm:text-base">
          GoHigh Impact ("we", "us", or "our") respects your privacy. This policy explains how we collect, use, and protect personal information across our GoHighLevel CRM resources, newsletters, and client services.
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">{section.heading}</h2>
              <p className="mt-3 text-sm text-gray-600 sm:text-base">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-brand-blue/20 bg-brand-blue/5 p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">Need to reach us?</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 sm:text-base">
            <li>
              Email: <Link href="mailto:support@wealthysales.com" className="text-brand-blue hover:underline">support@wealthysales.com</Link>
            </li>
            <li>
              Instagram: <Link href="https://instagram.com/gohighimpact" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">@gohighimpact</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
