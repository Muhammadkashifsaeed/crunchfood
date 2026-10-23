import type { Metadata } from "next";
import NashvillePage from "@/views/NashvillePage";

const title = "Nashville Hot Dusting Series";
const description =
  "Five calibrated heat tiers of cayenne-forward, free-flowing dusting blends. Use as a finishing dust or convert into the iconic Nashville hot oil with a simple spice-to-oil ratio.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function Page() {
  return <NashvillePage />;
}
