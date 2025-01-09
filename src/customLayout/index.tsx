"use client";
import { ThemeProvider } from "@emotion/react";
import theme from "../theme";

export default function CustomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ThemeProvider>
  );
}
