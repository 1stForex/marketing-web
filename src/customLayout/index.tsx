"use client";
import { ThemeProvider } from "@emotion/react";
import createAppTheme from "../theme";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocale } from "next-intl";
import { getLocaleDirection } from "../i18n/config";
import { useMemo } from "react";

export default function CustomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = useLocale();
  const direction = getLocaleDirection(locale);
  const theme = useMemo(() => createAppTheme(direction), [direction]);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
