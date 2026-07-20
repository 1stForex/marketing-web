import { NextRequest, NextResponse } from "next/server";
import {
  isEnabledLocale,
  LOCALE_COOKIE_NAME,
  matchLocale,
} from "@/src/i18n/config";

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => null)) as {
    locale?: string;
  } | null;
  const locale = matchLocale(body?.locale);

  if (!locale || !isEnabledLocale(locale)) {
    return NextResponse.json(
      { code: "unsupported_locale", message: "This language is not available." },
      { status: 400 }
    );
  }

  const response = NextResponse.json({ locale });
  response.cookies.set(LOCALE_COOKIE_NAME, locale, {
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
  return response;
}
