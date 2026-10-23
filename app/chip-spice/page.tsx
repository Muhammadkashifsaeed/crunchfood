import type { Metadata } from "next";
import ChipSpicePage from "@/views/ChipSpicePage";

const title = "Chip Spice Series — Finishing Dusts for Fries & Snacks";
const description =
  "Five free-flowing finishing dusts engineered for fried potato chips, hot fries, popcorn and snack programs. Sprinkle straight onto hot oil-glossy chips for instant menu differentiation.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function Page() {
  return <ChipSpicePage />;
}
