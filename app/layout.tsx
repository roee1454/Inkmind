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
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Inkmind Tattoos</title>
        <script defer src="https://cdn.enable.co.il/licenses/enable-L23490xm54kyboqr-1223-77789/init.js"></script>
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
