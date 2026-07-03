export interface LegalSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface LegalDocument {
  title: string;
  sections: LegalSection[];
}

export const acceptableUsePolicy: LegalDocument = {
  title: "Acceptable Use Policy",
  sections: [
    {
      title: "Purpose",
      paragraphs: [
        "This Acceptable Use Policy governs the use of the company's website, educational platform, membership services, analytical tools, and subscription-based services.",
        "By accessing or using the platform, users agree to comply with this policy and all applicable laws and regulations.",
      ],
    },
    {
      title: "Permitted Use",
      paragraphs: [
        "Users may access the platform solely for lawful educational and analytical purposes related to:",
      ],
      bullets: [
        "forex market education,",
        "market analysis,",
        "analytical trade signal access,",
        "and personal self-directed trading education.",
      ],
    },
    {
      title: "Prohibited Activities",
      paragraphs: ["Users may not use the platform to:"],
      bullets: [
        "engage in unlawful activity,",
        "commit fraud or misrepresentation,",
        "impersonate another individual or entity,",
        "distribute malicious software,",
        "attempt unauthorized access to systems or accounts,",
        "interfere with platform security,",
        "scrape or reproduce proprietary content without authorization,",
        "resell or redistribute analytical signals or educational materials,",
        "exploit the platform for abusive or harmful conduct,",
        "or violate applicable financial, banking, sanctions, or regulatory laws.",
      ],
    },
    {
      title: "Restricted Use",
      paragraphs: ["Users may not use the company's services in connection with:"],
      bullets: [
        "money laundering,",
        "terrorist financing,",
        "sanctions violations,",
        "market manipulation,",
        "illegal financial activity,",
        "or any prohibited jurisdiction or restricted activity under applicable law.",
      ],
    },
    {
      title: "Intellectual Property & Content Protection",
      paragraphs: [
        "All educational materials, analytical content, trading signals, branding, videos, written content, and proprietary methodologies remain the intellectual property of the company.",
        "Users may not copy, reproduce, distribute, publish, sublicense, or commercially exploit company materials without prior written authorization.",
        "Unauthorized redistribution of subscription content or analytical signals may result in immediate account termination and potential legal action.",
      ],
    },
    {
      title: "Account Suspension & Termination",
      paragraphs: [
        "The company reserves the right to suspend, restrict, or terminate user access at its sole discretion where the company reasonably believes a user has:",
      ],
      bullets: [
        "violated this policy,",
        "engaged in abusive conduct,",
        "compromised platform security,",
        "violated applicable laws,",
        "or misused company services.",
      ],
    },
    {
      title: "Compliance Restrictions",
      paragraphs: [
        "The company may also restrict access where necessary to comply with legal, regulatory, banking, or payment processing obligations.",
      ],
    },
    {
      title: "Self-Directed Trading Responsibility",
      paragraphs: ["Users acknowledge that:"],
      bullets: [
        "all trading decisions remain entirely their own,",
        "the company provides educational and analytical services only,",
        "and the company does not provide financial advice or investment management services.",
      ],
    },
    {
      title: "Jurisdictional Compliance",
      paragraphs: [
        "Users remain solely responsible for compliance with laws and regulations applicable within their jurisdiction.",
      ],
    },
    {
      title: "Monitoring & Compliance",
      paragraphs: [
        "The company reserves the right to monitor platform activity, investigate suspected misuse, and cooperate with lawful requests from regulatory authorities, financial institutions, payment processors, or law enforcement agencies where required by applicable law.",
      ],
    },
    {
      title: "Modifications",
      paragraphs: [
        "The company reserves the right to update or modify this Acceptable Use Policy at any time.",
        "Continued use of the platform following updates constitutes acceptance of the revised policy.",
      ],
    },
    {
      title: "Contact Information",
      paragraphs: [
        "Questions regarding this Acceptable Use Policy may be submitted through the company's official contact or support channels listed on the website.",
      ],
    },
  ],
};

export const refundPolicy: LegalDocument = {
  title: "Refund Policy",
  sections: [
    {
      title: "General Policy",
      paragraphs: [
        "The company is committed to maintaining transparent and fair subscription practices for all users and members accessing its educational and analytical services platform.",
        "Because the company provides immediate access to digital content, analytical services, educational materials, and subscription-based market analysis tools, all purchases are generally considered final once access to the services has been granted.",
      ],
    },
    {
      title: "Subscription Services",
      paragraphs: ["Subscription-based services may include:"],
      bullets: [
        "analytical trade signal access,",
        "market analytics,",
        "premium analytical content,",
        "membership services,",
        "and enhanced educational resources.",
      ],
    },
    {
      title: "Digital Service Access",
      paragraphs: [
        "By purchasing a subscription, users acknowledge that they are purchasing access to digital services and analytical content delivered electronically through the platform.",
      ],
    },
    {
      title: "Refund Eligibility",
      paragraphs: [
        "Refund requests may be reviewed on a case-by-case basis under limited circumstances including:",
      ],
      bullets: [
        "duplicate billing,",
        "technical access failures caused directly by the platform,",
        "or unauthorized transactions verified by the company.",
      ],
    },
    {
      title: "Non-Refundable Circumstances",
      paragraphs: ["Refund requests related to:"],
      bullets: [
        "trading losses,",
        "dissatisfaction with market performance,",
        "market volatility,",
        "or expected financial outcomes will not qualify for refunds.",
      ],
    },
    {
      title: "No Performance Guarantee",
      paragraphs: [
        "The company does not guarantee profitability, trading performance, or financial outcomes associated with the use of its educational or analytical services.",
      ],
    },
    {
      title: "Cancellation Policy",
      paragraphs: [
        "Users may cancel recurring subscriptions at any time prior to the next billing cycle.",
        "Subscription cancellations will stop future recurring charges; however, previously processed subscription payments are generally non-refundable unless otherwise required by applicable law.",
        "Users may continue accessing subscription services until the end of the active billing period already paid for.",
      ],
    },
    {
      title: "Chargebacks & Disputes",
      paragraphs: [
        "Users agree to contact the company directly regarding billing concerns before initiating chargebacks or payment disputes through financial institutions or payment processors.",
        "Fraudulent chargebacks, abusive refund behavior, or misuse of payment systems may result in:",
      ],
      bullets: [
        "account suspension,",
        "permanent service termination,",
        "and restriction from future platform access.",
      ],
    },
    {
      title: "Technical Interruptions",
      paragraphs: [
        "While the company strives to maintain uninterrupted platform availability, temporary interruptions may occasionally occur due to:",
      ],
      bullets: [
        "maintenance,",
        "software updates,",
        "third-party service outages,",
        "hosting disruptions,",
        "or unforeseen technical events.",
      ],
    },
    {
      title: "Refunds During Interruptions",
      paragraphs: [
        "Temporary interruptions alone do not automatically qualify for refunds.",
      ],
    },
    {
      title: "Modifications",
      paragraphs: [
        "The company reserves the right to modify or update this Refund Policy at any time as operational, legal, or regulatory requirements evolve.",
        "Continued use of the company's services following updates constitutes acceptance of the revised policy.",
      ],
    },
    {
      title: "Contact Information",
      paragraphs: [
        "Refund requests and billing inquiries may be submitted through the company's official support or contact channels provided on the website.",
      ],
    },
  ],
};

export const riskDisclaimerTerms: LegalDocument = {
  title: "Risk Disclaimer & Terms and Conditions",
  sections: [
    {
      title: "Risk Disclaimer",
      paragraphs: [
        "The information, educational materials, analytical content, and market signals provided by the company are intended strictly for educational and informational purposes only.",
      ],
    },
    {
      title: "General Risk Disclosure",
      paragraphs: [
        "Foreign exchange (\"Forex\") trading and financial market trading involve substantial risk and may not be suitable for all individuals. Trading financial instruments carries the possibility of significant financial loss, and clients should carefully evaluate their financial situation, level of experience, and risk tolerance before engaging in any trading activity.",
        "Past performance, historical analysis, market observations, or analytical trade signals do not guarantee future results or future profitability.",
      ],
    },
    {
      title: "No Financial Advice",
      paragraphs: ["The company does not provide:"],
      bullets: [
        "investment advice,",
        "financial advisory services,",
        "portfolio management,",
        "securities dealing,",
        "brokerage services,",
        "or investment recommendations.",
      ],
    },
    {
      title: "Informational Use Only",
      paragraphs: [
        "All educational content, market analysis, and analytical trade signals distributed through the platform are provided strictly for informational and educational purposes only.",
        "Nothing provided by the company should be interpreted as financial advice, investment solicitation, trading guarantees, or recommendations to buy or sell financial instruments.",
        "Clients remain solely responsible for evaluating any information provided and making their own independent financial and trading decisions.",
      ],
    },
    {
      title: "Self-Directed Trading",
      paragraphs: [
        "All users and subscribers operate as self-directed traders.",
        "Clients maintain independent accounts with third-party brokerage providers and are solely responsible for:",
      ],
      bullets: [
        "trade execution,",
        "account management,",
        "risk management,",
        "and all investment decisions.",
      ],
    },
    {
      title: "No Account Management",
      paragraphs: ["The company does not:"],
      bullets: [
        "execute trades on behalf of clients,",
        "manage client funds,",
        "hold client assets,",
        "custody investment capital,",
        "or access client brokerage accounts.",
      ],
    },
    {
      title: "Client Trading Responsibility",
      paragraphs: [
        "Any trading activity conducted by a client is performed entirely at the client's own discretion and risk.",
      ],
    },
    {
      title: "Analytical Technology",
      paragraphs: [
        "The company utilizes proprietary analytical technology designed to support market analysis and trade signal generation based on structured market research methodologies.",
        "The system is intended exclusively as an analytical and educational support tool.",
        "The system does not guarantee profits, does not eliminate trading risk, and should not be interpreted as an autonomous investment management or guaranteed trading system.",
        "Market conditions may change rapidly, and analytical signals may become invalid due to volatility, liquidity conditions, geopolitical events, or other market factors.",
      ],
    },
    {
      title: "Limitation of Liability",
      paragraphs: [
        "By using the company's services, educational materials, analytical content, and subscription platforms, clients acknowledge and accept that all trading decisions are made independently, financial losses may occur, and the company shall not be held liable for trading losses, indirect damages, lost profits, or investment outcomes resulting from the use of its educational or analytical services.",
        "Users accept full responsibility for all trading activity conducted through their independently selected brokerage providers.",
      ],
    },
    {
      title: "Terms & Conditions",
      paragraphs: [
        "By accessing or using the company's website, educational platform, membership services, or analytical subscription services, users agree to comply with and be bound by these Terms & Conditions.",
        "If a user does not agree with these terms, the user should discontinue use of the platform and services immediately.",
      ],
    },
    {
      title: "Nature of Services",
      paragraphs: [
        "The company operates exclusively as an educational and analytical services provider.",
        "Services may include free educational forex training, market analysis, membership-based analytical services, market signals, and digital educational content.",
        "The company does not operate as a broker, financial advisor, investment manager, securities dealer, or custodial financial institution.",
      ],
    },
    {
      title: "Eligibility",
      paragraphs: [
        "Users must be of legal age within their jurisdiction to access subscription services or participate in trading-related educational activities.",
        "Users are responsible for ensuring that use of the company's services complies with the laws and regulations applicable within their jurisdiction.",
      ],
    },
    {
      title: "Self-Directed Trading Responsibility",
      paragraphs: [
        "Users acknowledge that all trading activity conducted by the user is performed independently and entirely at the user's own risk.",
        "The company does not guarantee trading performance, guarantee profits, or provide personalized investment recommendations.",
        "Users remain solely responsible for brokerage account selection, trade execution, risk management, and compliance with applicable laws and regulations.",
      ],
    },
    {
      title: "Subscription Services",
      paragraphs: [
        "Certain analytical services and market signal services may require paid subscriptions.",
        "Subscription pricing, billing terms, renewal terms, and cancellation policies may be updated periodically at the company's discretion.",
        "Access to subscription services may be suspended or terminated for non-payment, misuse of the platform, abusive conduct, or violations of these Terms & Conditions.",
      ],
    },
    {
      title: "Intellectual Property",
      paragraphs: [
        "All educational content, analytical materials, trading signals, branding, platform infrastructure, videos, written materials, and proprietary methodologies remain the intellectual property of the company.",
        "Users may not reproduce, redistribute, resell, or commercially exploit any company materials without prior written authorization.",
      ],
    },
    {
      title: "Service Limitation of Liability",
      paragraphs: [
        "The company shall not be liable for trading losses, financial damages, indirect damages, data interruptions, service interruptions, or losses resulting from the use of educational materials, analytical content, or subscription services.",
        "All services are provided on an \"as-is\" and \"as-available\" basis without warranties of any kind.",
      ],
    },
    {
      title: "Third-Party Services",
      paragraphs: [
        "The company may utilize third-party platforms, payment processors, software providers, and external brokerage references as part of its operations.",
        "The company is not responsible for third-party platform failures, brokerage performance, payment processing interruptions, or external service provider actions.",
      ],
    },
    {
      title: "Modifications",
      paragraphs: [
        "The company reserves the right to modify these Terms & Conditions at any time without prior notice.",
        "Continued use of the platform following updates constitutes acceptance of the revised terms.",
      ],
    },
    {
      title: "Governing Law",
      paragraphs: [
        "These Terms & Conditions shall be governed by the applicable laws and regulations governing the company's jurisdiction of incorporation and operation.",
      ],
    },
  ],
};
