import { RoutesUrls } from "./Enum";

export const linksList = [
  {
    key: "product",
    links: [
      {
        key: "tradingSignals",
        href: RoutesUrls.AI_SIGNAL,
      },
      {
        key: "academy",
        href: RoutesUrls.ACADEMY,
      },
      {
        key: "performanceHistory",
        href: RoutesUrls.HISTORICAL_PERFORMANCE,
      },
    ],
  },
  {
    key: "company",
    links: [
      {
        key: "pricing",
        href: RoutesUrls.PRICING,
      },
      {
        key: "community",
        href: RoutesUrls.COMMUNITY,
      },
      {
        key: "about",
        href: RoutesUrls.ABOUT_US,
      },
      {
        key: "contact",
        href: RoutesUrls.CONTACT_US,
      },
    ],
  },
  {
    key: "other",
    links: [
      {
        key: "terms",
        href: RoutesUrls.TERMS_AND_CONDITIONS,
      },
      {
        key: "riskDisclaimer",
        href: RoutesUrls.RISK_DISCLAIMER_TERMS_AND_CONDITIONS,
      },
      {
        key: "acceptableUse",
        href: RoutesUrls.ACCEPTABLE_USE_POLICY,
      },
      {
        key: "refundPolicy",
        href: RoutesUrls.REFUND_POLICY,
      },
      {
        key: "privacyPolicy",
        href: RoutesUrls.PRIVACY_POLICY,
      },
      {
        key: "faqs",
        href: RoutesUrls.FAQ,
      },
      // {
      //   label: "Blog",
      //   href: "#",
      // },
      // {
      //   label: "Features",
      //   href: "#",
      // },
    ],
  },
] as const;
