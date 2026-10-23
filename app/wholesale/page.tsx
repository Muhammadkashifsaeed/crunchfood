import type { Metadata } from "next";
import WholesalePage from "@/views/WholesalePage";

const title = "Bulk Pricing, Samples & Distributor Onboarding";
const description =
  "Pallet-ready bulk pricing, contract blending, private-label production and free-sample programs for QSR chains, ghost kitchens, contract caterers, distributors and importers across the US, Canada and beyond.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function Page() {
  return <WholesalePage />;
}
