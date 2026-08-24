import type { Metadata } from "next";
import NashvillePage from "@/views/NashvillePage";

export const metadata: Metadata = {
  title: "Nashville Hot Dusting Series",
  description:
    "Five calibrated heat tiers of cayenne-forward, free-flowing dusting blends. Use as a finishing dust or convert into the iconic Nashville hot oil with a simple spice-to-oil ratio.",
};

export default function Page() {
  return <NashvillePage />;
}
