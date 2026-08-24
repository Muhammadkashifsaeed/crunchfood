import type { Metadata } from "next";
import PackagingPage from "@/views/PackagingPage";

export const metadata: Metadata = {
  title: "Packaging, Branding & Private Label for Global Foodservice",
  description:
    "From 12.5 kg breading sacks to 2 kg spice pouches and pallet-shipped contract production — every unit ships with the Crunch Foods master brand, full traceability, and the documentation enterprise procurement teams need to onboard a new supplier without friction.",
};

export default function Page() {
  return <PackagingPage />;
}
