import type { Metadata } from "next";
import PeriPeriPage from "@/views/PeriPeriPage";

const title = "Peri Peri Marination & Sauce — Wholesale";
const description =
  "Peri-peri-style dry marination and sauce blends supplied in 2 kg foodservice pouches. One ratio converts every blend into a wet marinade, basting liquid, table sauce or gravy.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function Page() {
  return <PeriPeriPage />;
}
