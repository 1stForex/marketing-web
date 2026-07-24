import type { Metadata } from "next";
import { Montserrat, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomLayout from "@/src/customLayout";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { getLocaleDirection } from "@/src/i18n/config";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-arabic",
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
      className={`notranslate ${montserrat.variable} ${notoSansArabic.variable}`}
      translate="no"
      suppressHydrationWarning
    >
      <body className="notranslate">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CustomLayout>{children}</CustomLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
