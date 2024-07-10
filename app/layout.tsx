"use client";
import "./globals.css";
import Navbar from "@/components/ui/custom/navbar";
import WhatsappButton from "@/components/ui/custom/whatsapp-button";
import Footer from "@/components/ui/custom/footer";
import { ThemeProvider } from "@/components/ui/theme-provider";
import QueryProvider from "@/components/ui/custom/query-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Inkmind Tattoos</title>
      <body>
        <div dir="rtl">
          <QueryProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Navbar />
              <WhatsappButton href="https://wa.me/+972528114746" />
              {children}
              <Footer />
            </ThemeProvider>
          </QueryProvider>
        </div>
        <script src="/nagishli_beta.js" defer></script>
      </body>
    </html>
  );
}
