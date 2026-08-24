import type { Metadata } from "next";
import PeriPeriPage from "@/views/PeriPeriPage";

export const metadata: Metadata = {
  title: "Peri Peri Marination & Sauce — Wholesale",
  description:
    "Peri-peri-style dry marination and sauce blends supplied in 2 kg foodservice pouches. One ratio converts every blend into a wet marinade, basting liquid, table sauce or gravy.",
};

export default function Page() {
  return <PeriPeriPage />;
}
