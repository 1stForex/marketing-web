const envUrl = (value?: string) => value?.trim() || undefined;
const appBaseFromPath = (value?: string) =>
  envUrl(value)
    ?.replace(/\/(?:auth\/(?:login|register)|historical-results|subscription)\/?$/, "")
    .replace(/\/$/, "");

const APP_BASE_URL = (
  envUrl(process.env.NEXT_PUBLIC_APP_URL) ??
  appBaseFromPath(process.env.NEXT_PUBLIC_APP_LOGIN_URL) ??
  appBaseFromPath(process.env.NEXT_PUBLIC_APP_REGISTER_URL) ??
  "https://staging.d1bhofzjxuviaa.amplifyapp.com"
).replace(/\/$/, "");

export const RedirectUrls = {
  LOGIN_URL:
    envUrl(process.env.NEXT_PUBLIC_APP_LOGIN_URL) ??
    `${APP_BASE_URL}/auth/login`,
  REGISTER_URL:
    envUrl(process.env.NEXT_PUBLIC_APP_REGISTER_URL) ??
    `${APP_BASE_URL}/auth/register`,
  SUBSCRIPTION_URL:
    envUrl(process.env.NEXT_PUBLIC_APP_SUBSCRIPTION_URL) ??
    `${APP_BASE_URL}/subscription`,
  HISTORICAL_RESULTS_URL:
    envUrl(process.env.NEXT_PUBLIC_APP_HISTORICAL_RESULTS_URL) ??
    `${APP_BASE_URL}/historical-results`,
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
