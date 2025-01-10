"use client";
import { ThemeProvider } from "@emotion/react";
import theme from "../theme";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function CustomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
