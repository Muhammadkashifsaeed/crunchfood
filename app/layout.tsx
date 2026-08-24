import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css";

const SITE_URL = "https://crunchfood.ca";
const TITLE = "Wholesale Breading & Spice Supplier — USA & Canada";
const DESCRIPTION =
  "Bulk fried chicken breading, peri peri marinations, Nashville hot dustings & honey spice blends. Wholesale to ghost kitchens, QSR, distributors & private label across USA & Canada.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { absolute: TITLE, template: "%s | Crunch Foods" },
  description: DESCRIPTION,
  keywords: [
    "wholesale breading supplier USA",
    "bulk fried chicken breading Canada",
    "peri peri spice wholesale",
    "Nashville hot dusting supplier",
    "hot honey spice blend bulk",
    "private label seasoning manufacturer",
    "foodservice spice distributor",
    "ghost kitchen ingredient supplier",
    "Sysco US Foods GFS spice supplier",
    "contract spice blending USA Canada",
    "pallet breading supplier",
    "restaurant spice wholesale",
  ],
  authors: [{ name: "Crunch Foods" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description:
      "Bulk breading, peri peri marinades, Nashville hot dustings & honey spice blends. Wholesale to foodservice & private label across USA & Canada.",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Bulk breading, peri peri marinades, Nashville hot dustings & honey spice blends. Wholesale to foodservice & private label across USA & Canada.",
  },
  icons: { icon: "/favicon.png" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Crunch Foods",
  url: SITE_URL,
  description:
    "B2B wholesale manufacturer and supplier of fried chicken breading, peri peri marination dry rubs, Nashville hot dustings, honey spice blends and signature dipping spice blends for foodservice operators across USA and Canada.",
  areaServed: ["United States", "Canada"],
  makesOffer: [
    { "@type": "Offer", name: "Wholesale Philadelphia Premium Breading 12.5kg" },
    { "@type": "Offer", name: "Bulk Peri Peri Dry Marination Spice 2kg" },
    { "@type": "Offer", name: "Nashville Hot Dusting Spice Blend 2kg" },
    { "@type": "Offer", name: "Honey Spice Dry Blend 2kg" },
    { "@type": "Offer", name: "Private Label Breading & Spice Manufacturing" },
  ],
};

const wholesaleStoreJsonLd = {
  "@context": "https://schema.org",
  "@type": "WholesaleStore",
  name: "Crunch Foods",
  url: SITE_URL,
  telephone: "+15551234567",
  email: "sales@crunchfood.ca",
  areaServed: ["United States", "Canada"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(wholesaleStoreJsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
