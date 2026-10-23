import type { Metadata } from "next";
import BreadingPage from "@/views/BreadingPage";

const title = "Wholesale Breading & Marinade Formulas";
const description =
  "Five commercial-grade breading and wet-marinade formulas, milled and pressure-tested in industrial fryers, packed in 12.5 kg moisture-locked foodservice bags for distributors and contract kitchens.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function Page() {
  return <BreadingPage />;
}
