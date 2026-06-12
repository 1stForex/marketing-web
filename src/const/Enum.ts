export const RedirectUrls = {
  LOGIN_URL: process.env.NEXT_PUBLIC_APP_LOGIN_URL ?? "/auth/login",
  REGISTER_URL: process.env.NEXT_PUBLIC_APP_REGISTER_URL ?? "/auth/register",
} as const;

export enum RoutesUrls {
  ABOUT_US = "/about-us",
  ACCEPTABLE_USE_POLICY = "/acceptable-use-policy",
  ACADEMY = "/academy",
  AI_SIGNAL = "/ai-signal",
  COMMUNITY = "/community",
  CONTACT_US = "/contact-us",
  FAQ = "/faq",
  HISTORICAL_PERFORMANCE = "/historical-performance",
  HOME = "/home",
  PRICING = "/pricing",
  PRIVACY_POLICY = "/privacy-policy",
  REFUND_POLICY = "/refund-policy",
  RISK_DISCLAIMER_TERMS_AND_CONDITIONS = "/risk-disclaimer-terms-and-conditions",
  TERMS_AND_CONDITIONS = "/terms-and-conditions",
}
