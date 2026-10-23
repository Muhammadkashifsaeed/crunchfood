import type { Metadata } from "next";
import PackagingPage from "@/views/PackagingPage";

const title = "Packaging, Branding & Private Label for Global Foodservice";
const description =
  "From 12.5 kg breading sacks to 2 kg spice pouches and pallet-shipped contract production — every unit ships with the Crunch Foods master brand, full traceability, and the documentation enterprise procurement teams need to onboard a new supplier without friction.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function Page() {
  return <PackagingPage />;
}
