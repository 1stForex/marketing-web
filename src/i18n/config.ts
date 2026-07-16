export const LOCALE_COOKIE_NAME = "1fx_locale";
export const DEFAULT_LOCALE = "en";

export const localeDefinitions = [
  { code: "en", name: "International English", nativeName: "English", direction: "ltr", phase: 1 },
  { code: "es-419", name: "Latin American Spanish", nativeName: "Español (Latinoamérica)", direction: "ltr", phase: 1 },
  { code: "pt-BR", name: "Brazilian Portuguese", nativeName: "Português (Brasil)", direction: "ltr", phase: 1 },
  { code: "ar", name: "Modern Standard Arabic", nativeName: "العربية", direction: "rtl", phase: 1 },
  { code: "fr", name: "International French", nativeName: "Français", direction: "ltr", phase: 1 },
  { code: "de", name: "German", nativeName: "Deutsch", direction: "ltr", phase: 1 },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia", direction: "ltr", phase: 1 },
  { code: "tr", name: "Turkish", nativeName: "Türkçe", direction: "ltr", phase: 1 },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt", direction: "ltr", phase: 1 },
  { code: "ja", name: "Japanese", nativeName: "日本語", direction: "ltr", phase: 1 },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी", direction: "ltr", phase: 2 },
  { code: "zh-Hans", name: "Simplified Chinese", nativeName: "简体中文", direction: "ltr", phase: 2 },
  { code: "ko", name: "Korean", nativeName: "한국어", direction: "ltr", phase: 2 },
  { code: "pl", name: "Polish", nativeName: "Polski", direction: "ltr", phase: 2 },
  { code: "th", name: "Thai", nativeName: "ไทย", direction: "ltr", phase: 2 },
] as const;

export type AppLocale = (typeof localeDefinitions)[number]["code"];
export type TextDirection = "ltr" | "rtl";

const localeCodes = new Set<string>(localeDefinitions.map(({ code }) => code));

export const normalizeLocale = (
  value?: string | null,
  fallback: AppLocale = DEFAULT_LOCALE
): AppLocale => {
  const candidate = value?.trim().replaceAll("_", "-");
  if (!candidate) return fallback;

  const exact = localeDefinitions.find(
    ({ code }) => code.toLowerCase() === candidate.toLowerCase()
  );
  if (exact) return exact.code;

  const aliases: Record<string, AppLocale> = {
    en: "en",
    es: "es-419",
    pt: "pt-BR",
    ar: "ar",
    fr: "fr",
    de: "de",
    id: "id",
    in: "id",
    tr: "tr",
    vi: "vi",
    ja: "ja",
    hi: "hi",
    zh: "zh-Hans",
    ko: "ko",
    pl: "pl",
    th: "th",
  };

  return aliases[candidate.split("-", 1)[0].toLowerCase()] ?? fallback;
};

const configuredLocales = (process.env.NEXT_PUBLIC_ENABLED_LOCALES ?? DEFAULT_LOCALE)
  .split(",")
  .map((locale) => normalizeLocale(locale))
  .filter(
    (locale, index, locales) =>
      localeCodes.has(locale) && locales.indexOf(locale) === index
  );

export const enabledLocales: AppLocale[] = configuredLocales.length
  ? configuredLocales
  : [DEFAULT_LOCALE];

export const isEnabledLocale = (locale: string): locale is AppLocale =>
  enabledLocales.includes(locale as AppLocale);

export const getLocaleDirection = (locale: string): TextDirection =>
  localeDefinitions.find(({ code }) => code === normalizeLocale(locale))
    ?.direction ?? "ltr";

export const resolveLocale = (
  cookieLocale?: string | null,
  acceptLanguage?: string | null
): AppLocale => {
  const normalizedCookie = cookieLocale ? normalizeLocale(cookieLocale) : null;
  if (normalizedCookie && isEnabledLocale(normalizedCookie)) {
    return normalizedCookie;
  }

  const requestedLocales = (acceptLanguage ?? "")
    .split(",")
    .map((part) => {
      const [locale, ...parameters] = part.trim().split(";");
      const qualityParameter = parameters.find((parameter) =>
        parameter.trim().startsWith("q=")
      );
      const quality = qualityParameter
        ? Number(qualityParameter.split("=")[1])
        : 1;
      return { locale, quality: Number.isFinite(quality) ? quality : 0 };
    })
    .filter(({ locale }) => Boolean(locale) && locale !== "*")
    .sort((a, b) => b.quality - a.quality);

  for (const { locale } of requestedLocales) {
    const normalized = normalizeLocale(locale);
    if (isEnabledLocale(normalized)) return normalized;
  }

  return DEFAULT_LOCALE;
};
