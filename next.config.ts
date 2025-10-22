import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: `${process.env.WORDPRESS_HOSTNAME}`,
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: `blog.gohighimpact.co`,
				port: "",
				pathname: "/**",
			},
		],
	},
	async redirects() {
		return [
			{
				source: "/admin",
				destination: `${process.env.WORDPRESS_URL}/wp-admin`,
				permanent: true,
			},
			// Old WordPress post URLs to new Next.js structure
			{
				source: "/gohighlevel-saas",
				destination: "/posts/gohighlevel-saas",
				permanent: true,
			},
			{
				source: "/gohighlevel-trial",
				destination: "/posts/gohighlevel-trial",
				permanent: true,
			},
			{
				source: "/gohighlevel-prospecting",
				destination: "/posts/gohighlevel-prospecting",
				permanent: true,
			},
			{
				source: "/gohighlevel-certifications",
				destination: "/posts/gohighlevel-certifications",
				permanent: true,
			},
			{
				source: "/gohighlevel-vs-systeme-io",
				destination: "/posts/gohighlevel-vs-systeme-io",
				permanent: true,
			},
			{
				source: "/a2p-registration-for-gohighlevel",
				destination: "/posts/a2p-registration-for-gohighlevel",
				permanent: true,
			},
			{
				source: "/gohighlevel-vs-flowtrack",
				destination: "/posts/gohighlevel-vs-flowtrack",
				permanent: true,
			},
			{
				source: "/branded-client-portal-in-gohighlevel",
				destination: "/posts/branded-client-portal-in-gohighlevel",
				permanent: true,
			},
			{
				source: "/gohighlevel-pro-plan",
				destination: "/posts/gohighlevel-pro-plan",
				permanent: true,
			},
			{
				source: "/gohighlevel-pricing",
				destination: "/posts/gohighlevel-pricing",
				permanent: true,
			},
			{
				source: "/gohighlevel-vs-clickfunnels",
				destination: "/posts/gohighlevel-vs-clickfunnels",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-real-estate-agents",
				destination: "/posts/best-crm-software-for-real-estate-agents",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-dentists",
				destination: "/posts/best-crm-software-for-dentists",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-restaurants",
				destination: "/posts/best-crm-software-for-restaurants",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-consultants",
				destination: "/posts/best-crm-software-for-consultants",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-plumbers",
				destination: "/posts/best-crm-software-for-plumbers",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-hvac-companies",
				destination: "/posts/best-crm-software-for-hvac-companies",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-chiropractors",
				destination: "/posts/best-crm-software-for-chiropractors",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-insurance-agents",
				destination: "/posts/best-crm-software-for-insurance-agents",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-law-firms",
				destination: "/posts/best-crm-software-for-law-firms",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-business-coaches",
				destination: "/posts/best-crm-software-for-business-coaches",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-gym-owners",
				destination: "/posts/best-crm-software-for-gym-owners",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-event-planners",
				destination: "/posts/best-crm-software-for-event-planners",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-marketing-agencies",
				destination: "/posts/best-crm-software-for-marketing-agencies",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-photographers",
				destination: "/posts/best-crm-software-for-photographers",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-interior-designers",
				destination: "/posts/best-crm-software-for-interior-designers",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-electricians",
				destination: "/posts/best-crm-software-for-electricians",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-cleaning-companies",
				destination: "/posts/best-crm-software-for-cleaning-companies",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-landscapers",
				destination: "/posts/best-crm-software-for-landscapers",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-tutors",
				destination: "/posts/best-crm-software-for-tutors",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-travel-agents",
				destination: "/posts/best-crm-software-for-travel-agents",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-financial-advisors",
				destination: "/posts/best-crm-software-for-financial-advisors",
				permanent: true,
			},
			{
				source: "/best-crm-for-wedding-planners",
				destination: "/posts/best-crm-for-wedding-planners",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-financial-planners",
				destination: "/posts/best-crm-software-for-financial-planners",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-affiliate-marketers",
				destination: "/posts/best-crm-software-for-affiliate-marketers",
				permanent: true,
			},
			{
				source: "/best-crm-software-for-political-campaigns",
				destination: "/posts/best-crm-software-for-political-campaigns",
				permanent: true,
			},
			{
				source: "/gohighlevel-vs-hubspot",
				destination: "/posts/gohighlevel-vs-hubspot",
				permanent: true,
			},
			{
				source: "/gohighlevel-vs-keap-crm-comparison",
				destination: "/posts/gohighlevel-vs-keap-crm-comparison",
				permanent: true,
			},
			{
				source: "/gohighlevel-vs-pipedrive",
				destination: "/posts/gohighlevel-vs-pipedrive",
				permanent: true,
			},
			{
				source: "/gohighlevel-vs-kartra",
				destination: "/posts/gohighlevel-vs-kartra",
				permanent: true,
			},
			{
				source: "/gohighlevel-vs-salesforce",
				destination: "/posts/gohighlevel-vs-salesforce",
				permanent: true,
			},
			{
				source: "/gohighlevel-pricing-explained",
				destination: "/posts/gohighlevel-pricing-explained",
				permanent: true,
			},
			{
				source: "/gohighlevel-free-trial-how-to-get-it",
				destination: "/posts/gohighlevel-free-trial-how-to-get-it",
				permanent: true,
			},
			{
				source: "/how-to-get-a-discount-on-gohighlevel-subscription",
				destination: "/posts/how-to-get-a-discount-on-gohighlevel-subscription",
				permanent: true,
			},
			{
				source: "/how-to-set-up-your-first-funnel-in-gohighlevel",
				destination: "/posts/how-to-set-up-your-first-funnel-in-gohighlevel",
				permanent: true,
			},
			{
				source: "/step-by-step-guide-automated-workflows-gohighlevel",
				destination:
					"/posts/step-by-step-guide-automated-workflows-gohighlevel",
				permanent: true,
			},
			{
				source: "/using-gohighlevels-crm-to-manage-leads-effectively",
				destination:
					"/posts/using-gohighlevels-crm-to-manage-leads-effectively",
				permanent: true,
			},
			{
				source: "/creative-ways-to-use-gohighlevel-crm-triggers-for-automation",
				destination:
					"/posts/creative-ways-to-use-gohighlevel-crm-triggers-for-automation",
				permanent: true,
			},
			{
				source: "/setting-up-client-tracking-systems-in-coaching-business-crm",
				destination:
					"/posts/setting-up-client-tracking-systems-in-coaching-business-crm",
				permanent: true,
			},
			{
				source: "/boost-gym-retention-with-crm-strategies",
				destination: "/posts/boost-gym-retention-with-crm-strategies",
				permanent: true,
			},
			{
				source: "/solve-gohighlevel-login-issues-quickly",
				destination: "/posts/solve-gohighlevel-login-issues-quickly",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
