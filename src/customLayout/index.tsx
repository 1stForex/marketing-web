"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppThemeProvider from "../components/AppThemeProvider";

export default function CustomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppThemeProvider>
      <Header />
      {children}
      <Footer />
    </AppThemeProvider>
  );
}
