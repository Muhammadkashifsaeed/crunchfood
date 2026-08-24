import type { Metadata } from "next";
import BreadingPage from "@/views/BreadingPage";

export const metadata: Metadata = {
  title: "Wholesale Breading & Marinade Formulas",
  description:
    "Five commercial-grade breading and wet-marinade formulas, milled and pressure-tested in industrial fryers, packed in 12.5 kg moisture-locked foodservice bags for distributors and contract kitchens.",
};

export default function Page() {
  return <BreadingPage />;
}
