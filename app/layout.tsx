import type { Metadata, Viewport } from "next";
import "./globals.css";
import SiteProvider from "@/components/SiteProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const title = "NEDLSALAH — Digital Marketing Specialist, Web Developer & Designer";
const description = "NEDLSALAH — Digital Marketing Specialist, WordPress Web Developer & Graphic Designer. 7+ years of experience in the UAE.";

export const metadata: Metadata = {
  title, description,
  authors: [{ name: "NEDLSALAH" }],
  alternates: { canonical: "https://nedlsalah.github.io/Web/" },
  openGraph: {
    type: "website", url: "https://nedlsalah.github.io/Web/", siteName: "NEDLSALAH", title, description,
    images: ["https://nedlsalah.github.io/Web/img/og-cover.png"],
  },
  twitter: { card: "summary_large_image" },
};
export const viewport: Viewport = { themeColor: "#0d0d0f", colorScheme: "dark light" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <SiteProvider>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </SiteProvider>
      </body>
    </html>
  );
}
