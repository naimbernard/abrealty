import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Inter } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsapp } from "@/components/layout/floating-whatsapp";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { JsonLd, realEstateAgentJsonLd } from "@/components/seo/json-ld";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://abrealty.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AB Realty | Luxury Villas & Investment Property in Goa",
    template: "%s | AB Realty",
  },
  description:
    "AB Realty is Goa's trusted boutique real estate advisory for luxury villas, apartments, plots and investment property — serving buyers and NRIs across India, the UAE and the UK.",
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "en-AE": "/",
      "en-GB": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "AB Realty | Luxury Villas & Investment Property in Goa",
    description:
      "Boutique real estate advisory for villas, apartments, land and investment opportunities across Goa.",
    url: SITE_URL,
    siteName: "AB Realty",
    images: ["/assets/landing-wide.png"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AB Realty | Luxury Villas & Investment Property in Goa",
    description:
      "Boutique real estate advisory for villas, apartments, land and investment opportunities across Goa.",
    images: ["/assets/landing-wide.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ivory text-ink">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-GMBD398YXT" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GMBD398YXT');
          `}
        </Script>
        <JsonLd data={realEstateAgentJsonLd()} />
        <SmoothScroll>
          <Header />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </SmoothScroll>
        <FloatingWhatsapp />
        <Toaster />
      </body>
    </html>
  );
}
