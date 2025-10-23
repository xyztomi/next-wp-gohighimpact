import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - GoHigh Impact",
  description:
    "Review the Terms of Service governing your use of GoHigh Impact's GoHighLevel CRM resources, trainings, and services.",
  alternates: {
    canonical: "/tos",
  },
};

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: `By accessing or using GoHigh Impact resources, newsletters, or consulting services, you agree to be bound by these Terms of Service. If you do not agree, please discontinue use immediately.`,
  },
  {
    heading: "2. Services",
    body: `We provide education, resources, and advisory services related to GoHighLevel CRM. We may modify, suspend, or discontinue offerings at any time without prior notice.`,
  },
  {
    heading: "3. User Responsibilities",
    body: `You agree to provide accurate information, maintain the security of your accounts, and comply with all applicable laws. You will not use our materials for unlawful purposes or infringe on the rights of others.`,
  },
  {
    heading: "4. Intellectual Property",
    body: `All content, including frameworks, guides, and branding, is owned or licensed by GoHigh Impact. You may not reproduce, distribute, or create derivative works without written permission.`,
  },
  {
    heading: "5. Payment & Refunds",
    body: `Certain services require payment. Fees are due at the time of purchase unless otherwise stated. Due to the digital nature of our products, all sales are final unless specified in a separate agreement.`,
  },
  {
    heading: "6. Disclaimers",
    body: `Our content is for informational purposes only. We do not guarantee specific business results. You are responsible for compliance with applicable laws and regulations in your industry.`,
  },
  {
    heading: "7. Limitation of Liability",
    body: `To the fullest extent permitted by law, GoHigh Impact is not liable for indirect, incidental, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount you paid for the offering in question.`,
  },
  {
    heading: "8. Indemnification",
    body: `You agree to indemnify and hold GoHigh Impact harmless from claims arising out of your use of our content or violation of these Terms. This includes attorney fees and costs associated with such claims.`,
  },
  {
    heading: "9. Governing Law",
    body: `These Terms are governed by the laws of the State of California, without regard to conflicts of law principles. Any disputes will be resolved in the state or federal courts located in California.`,
  },
  {
    heading: "10. Changes to These Terms",
    body: `We may update these Terms periodically to reflect new offerings or legal requirements. Changes take effect when posted. Continued use signifies acceptance of any updates.`,
  },
  {
    heading: "11. Contact",
    body: `For questions about these Terms, email support@wealthysales.com or message us on Instagram at @gohighimpact.`,
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-4xl">
        <p className="text-xs uppercase tracking-widest text-brand-blue">Legal</p>
        <h1 className="mt-2 text-3xl font-semibold text-gray-900 sm:text-4xl">Terms of Service</h1>
        <p className="mt-3 text-sm text-gray-600 sm:text-base">Last updated: October 23, 2025</p>
        <p className="mt-6 text-sm text-gray-600 sm:text-base">
          These Terms of Service ("Terms") outline the rules and obligations that apply when you use GoHigh Impact's GoHighLevel CRM content, communities, and services.
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
          <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">Questions about these Terms?</h2>
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
