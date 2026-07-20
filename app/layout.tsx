import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomLayout from "@/src/customLayout";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { getLocaleDirection } from "@/src/i18n/config";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Metadata");
  return {
    title: t("title"),
    applicationName: t("applicationName"),
    description: t("description"),
    other: {
      google: "notranslate",
    },
  };
}

export const dynamic = "force-dynamic";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={getLocaleDirection(locale)}
      className="notranslate"
      translate="no"
      suppressHydrationWarning
    >
      <body className="notranslate">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppRouterCacheProvider>
            <CustomLayout>{children}</CustomLayout>
          </AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
