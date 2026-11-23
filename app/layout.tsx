import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Footer, FloatingActions, Header } from "@/components/SiteChrome";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Maharshi Organics | Certified Organic Store in Rajajinagar, Bengaluru",
    template: "%s | Maharshi Organics, Bengaluru",
  },
  description: SITE.description,
  keywords: [
    "organic store Rajajinagar",
    "organic shop Bengaluru",
    "organic grocery Bangalore",
    "certified organic food Bangalore",
    "millets Bangalore",
    "cold pressed oil Rajajinagar",
    "Himalayan pink rock salt Bangalore",
    "organic jaggery Bangalore",
    "bath salts",
    "Himalayan pink salt bath",
    "Urja Revitalizing Salt",
    "Maharshi Organics",
    "Sri Maharshi Organics",
  ],
  applicationName: SITE.name,
  icons: { icon: "/logo.png", apple: "/logo.png" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE.url,
    siteName: SITE.name,
    title: "Maharshi Organics | Certified Organic Store in Bengaluru",
    description: SITE.description,
    images: [{ url: "/logo.png", width: 315, height: 465, alt: "Maharshi Organics" }],
  },
  twitter: {
    card: "summary",
    title: "Maharshi Organics | Certified Organic Store in Bengaluru",
    description: SITE.description,
    images: ["/logo.png"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#2b3826",
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "GroceryStore",
  name: SITE.name,
  alternateName: SITE.legalName,
  description: SITE.description,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  image: `${SITE.url}/logo.png`,
  telephone: SITE.phoneIntl,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.street,
    addressLocality: SITE.locality,
    addressRegion: SITE.region,
    postalCode: SITE.postalCode,
    addressCountry: "IN",
  },
  hasMap: SITE.mapsLink,
  sameAs: [SITE.instagram, SITE.facebook],
  areaServed: "Bengaluru",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,300;1,9..144,400&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
