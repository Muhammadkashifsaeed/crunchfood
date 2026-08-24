import type { Metadata } from "next";
import WholesalePage from "@/views/WholesalePage";

export const metadata: Metadata = {
  title: "Bulk Pricing, Samples & Distributor Onboarding",
  description:
    "Pallet-ready bulk pricing, contract blending, private-label production and free-sample programs for QSR chains, ghost kitchens, contract caterers, distributors and importers across the US, Canada and beyond.",
};

export default function Page() {
  return <WholesalePage />;
}
