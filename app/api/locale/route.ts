import { NextRequest, NextResponse } from "next/server";
import {
  isEnabledLocale,
  LOCALE_COOKIE_NAME,
  matchLocale,
} from "@/src/i18n/config";

const applyLocaleCookie = (response: NextResponse, locale: string) => {
  response.cookies.set(LOCALE_COOKIE_NAME, locale, {
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
  return response;
};

export async function GET(request: NextRequest) {
  const locale = matchLocale(request.nextUrl.searchParams.get("locale"));

  if (!locale || !isEnabledLocale(locale)) {
    return new NextResponse(null, {
      status: 307,
      headers: { Location: "/" },
    });
  }

  const requestedReturnTo =
    request.nextUrl.searchParams.get("returnTo") || "/";
  const returnPath =
    requestedReturnTo.startsWith("/") && !requestedReturnTo.startsWith("//")
      ? requestedReturnTo
      : "/";

  return applyLocaleCookie(
    new NextResponse(null, {
      status: 307,
      headers: { Location: returnPath },
    }),
    locale,
  );
}

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

  return applyLocaleCookie(NextResponse.json({ locale }), locale);
}
