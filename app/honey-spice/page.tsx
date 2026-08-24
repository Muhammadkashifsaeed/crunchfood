import type { Metadata } from "next";
import HoneySpicePage from "@/views/HoneySpicePage";

export const metadata: Metadata = {
  title: "Honey Spice Series — Hot Honey, Engineered as Dry Blends",
  description:
    "North America's fastest-growing flavor profile, supplied as free-flowing dry seasonings in 2 kg foodservice pouches. Convert into the viral hot-honey drizzle with one simple blend ratio.",
};

export default function Page() {
  return <HoneySpicePage />;
}
