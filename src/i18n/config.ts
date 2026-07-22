export const LOCALE_COOKIE_NAME = "1fx_locale";
export const DEFAULT_LOCALE = "en";
export const PHASE_ONE_DIRECTION = "ltr" as const;

export const localeDefinitions = [
  {
    code: "en",
    name: "International English",
    nativeName: "English",
    shortName: "English",
    flagCode: "us",
    direction: "ltr",
    phase: 1,
  },
  {
    code: "fr-CA",
    name: "Canadian French",
    nativeName: "Français (Canada)",
    shortName: "Français",
    flagCode: "ca",
    direction: "ltr",
    phase: 1,
  },
  {
    code: "es-419",
    name: "Latin American Spanish",
    nativeName: "Español (Latinoamérica)",
    shortName: "Español",
    flagCode: "mx",
    direction: "ltr",
    phase: 1,
  },
  {
    code: "pt-BR",
    name: "Brazilian Portuguese",
    nativeName: "Português (Brasil)",
    shortName: "Português",
    flagCode: "br",
    direction: "ltr",
    phase: 1,
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    shortName: "Deutsch",
    flagCode: "de",
    direction: "ltr",
    phase: 1,
  },
  {
    code: "tr",
    name: "Turkish",
    nativeName: "Türkçe",
    shortName: "Türkçe",
    flagCode: "tr",
    direction: "ltr",
    phase: 1,
  },
  {
    code: "id",
    name: "Indonesian",
    nativeName: "Bahasa Indonesia",
    shortName: "Indonesia",
    flagCode: "id",
    direction: "ltr",
    phase: 1,
  },
  {
    code: "vi",
    name: "Vietnamese",
    nativeName: "Tiếng Việt",
    shortName: "Tiếng Việt",
    flagCode: "vn",
    direction: "ltr",
    phase: 1,
  },
  {
    code: "hi",
    name: "Hindi",
    nativeName: "हिन्दी",
    shortName: "हिन्दी",
    flagCode: "in",
    direction: "ltr",
    phase: 1,
  },
] as const;

export type AppLocale = (typeof localeDefinitions)[number]["code"];
export type TextDirection = "ltr" | "rtl";

const localeCodes = new Set<string>(localeDefinitions.map(({ code }) => code));
const DEFAULT_ENABLED_LOCALES = localeDefinitions
  .map(({ code }) => code)
  .join(",");

export const matchLocale = (value?: string | null): AppLocale | null => {
  const candidate = value?.trim().replaceAll("_", "-");
  if (!candidate) return null;

  const exact = localeDefinitions.find(
    ({ code }) => code.toLowerCase() === candidate.toLowerCase(),
  );
  if (exact) return exact.code;

  const aliases: Record<string, AppLocale> = {
    en: "en",
    es: "es-419",
    pt: "pt-BR",
    fr: "fr-CA",
    de: "de",
    id: "id",
    in: "id",
    tr: "tr",
    vi: "vi",
    hi: "hi",
  };

  return aliases[candidate.split("-", 1)[0].toLowerCase()] ?? null;
};

export const normalizeLocale = (
  value?: string | null,
  fallback: AppLocale = DEFAULT_LOCALE,
): AppLocale => matchLocale(value) ?? fallback;

const configuredLocales = (
  process.env.NEXT_PUBLIC_ENABLED_LOCALES ?? DEFAULT_ENABLED_LOCALES
)
  .split(",")
  .map((locale) => matchLocale(locale))
  .filter((locale): locale is AppLocale => Boolean(locale))
  .filter(
    (locale, index, locales) =>
      localeCodes.has(locale) && locales.indexOf(locale) === index,
  );

export const enabledLocales: AppLocale[] = configuredLocales.length
  ? configuredLocales
  : [DEFAULT_LOCALE];

export const isEnabledLocale = (locale: string): locale is AppLocale =>
  enabledLocales.includes(locale as AppLocale);

export const getLocaleDirection = (locale: string): TextDirection => {
  void locale;
  return PHASE_ONE_DIRECTION;
};

export const resolveLocale = (
  cookieLocale?: string | null,
  acceptLanguage?: string | null,
): AppLocale => {
  const normalizedCookie = matchLocale(cookieLocale);
  if (normalizedCookie && isEnabledLocale(normalizedCookie)) {
    return normalizedCookie;
  }

  const requestedLocales = (acceptLanguage ?? "")
    .split(",")
    .map((part) => {
      const [locale, ...parameters] = part.trim().split(";");
      const qualityParameter = parameters.find((parameter) =>
        parameter.trim().startsWith("q="),
      );
      const quality = qualityParameter
        ? Number(qualityParameter.split("=")[1])
        : 1;
      return { locale, quality: Number.isFinite(quality) ? quality : 0 };
    })
    .filter(({ locale }) => Boolean(locale) && locale !== "*")
    .sort((a, b) => b.quality - a.quality);

  for (const { locale } of requestedLocales) {
    const normalized = matchLocale(locale);
    if (!normalized) continue;
    if (isEnabledLocale(normalized)) return normalized;
  }

  return DEFAULT_LOCALE;
};
