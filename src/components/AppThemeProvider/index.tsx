"use client";

import { ThemeProvider } from "@mui/material/styles";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import { prefixer } from "stylis";
import { useLocale } from "next-intl";
import { useMemo } from "react";
import { getLocaleDirection } from "@/src/i18n/config";
import createAppTheme from "@/src/theme";

export default function AppThemeProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = useLocale();
  const direction = getLocaleDirection(locale);
  const theme = useMemo(() => createAppTheme(direction), [direction]);
  const cacheOptions = useMemo(
    () =>
      direction === "rtl"
        ? {
            key: "mui-rtl",
            stylisPlugins: [prefixer, rtlPlugin],
          }
        : { key: "mui" },
    [direction],
  );

  return (
    <AppRouterCacheProvider key={direction} options={cacheOptions}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
}
