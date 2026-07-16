import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOCALE_COOKIE_NAME, resolveLocale } from "@/src/i18n/config";

export function middleware(request: NextRequest) {
  const existingLocale = request.cookies.get(LOCALE_COOKIE_NAME)?.value;
  const locale = resolveLocale(
    existingLocale,
    request.headers.get("accept-language")
  );
  const response =
    request.nextUrl.pathname === "/"
      ? NextResponse.redirect(new URL("/home", request.url))
      : NextResponse.next();

  if (!existingLocale) {
    response.cookies.set(LOCALE_COOKIE_NAME, locale, {
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
