import "./globals.css";
import Navbar from "@/components/ui/custom/navbar";
import WhatsappButton from "@/components/ui/custom/whatsapp-button";
import Footer from "@/components/ui/custom/footer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import QueryProvider from "@/components/ui/custom/query-provider";

import { ENABLE_CDN_URL } from "@/lib/enable";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://inkmindtattoos.com"),
  alternates: {
    canonical: "https://inkmindtattoos.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Inkmind Tattoos</title>
        <Script async src={ENABLE_CDN_URL} strategy="afterInteractive"></Script>
      </head>
      <body>
        <div dir="rtl">
          <QueryProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Navbar />
              <WhatsappButton href="https://wa.me/+972553063884" />
              {children}
              <Footer />
            </ThemeProvider>
          </QueryProvider>
        </div>
      </body>
    </html>
  );
}
