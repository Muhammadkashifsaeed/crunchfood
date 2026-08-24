import type { Metadata } from "next";
import ChipSpicePage from "@/views/ChipSpicePage";

export const metadata: Metadata = {
  title: "Chip Spice Series — Finishing Dusts for Fries & Snacks",
  description:
    "Five free-flowing finishing dusts engineered for fried potato chips, hot fries, popcorn and snack programs. Sprinkle straight onto hot oil-glossy chips for instant menu differentiation.",
};

export default function Page() {
  return <ChipSpicePage />;
}
