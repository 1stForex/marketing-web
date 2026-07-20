import type { AbstractIntlMessages } from "next-intl";
import type { AppLocale } from "./config";

const isObject = (value: unknown): value is Record<string, unknown> =>
  Boolean(value) && typeof value === "object" && !Array.isArray(value);

const mergeMessages = (
  fallback: Record<string, unknown>,
  localized: Record<string, unknown>
): Record<string, unknown> => {
  const merged = { ...fallback };

  for (const [key, value] of Object.entries(localized)) {
    const fallbackValue = merged[key];
    merged[key] =
      isObject(fallbackValue) && isObject(value)
        ? mergeMessages(fallbackValue, value)
        : value;
  }

  return merged;
};

export const loadMessages = async (
  locale: AppLocale
): Promise<AbstractIntlMessages> => {
  const english = (await import("../../messages/en.json")).default;
  if (locale === "en") return english;

  const localized = (await import(`../../messages/${locale}.json`)).default;
  return mergeMessages(english, localized) as AbstractIntlMessages;
};
