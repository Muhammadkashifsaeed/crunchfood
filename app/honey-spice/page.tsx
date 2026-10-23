import type { Metadata } from "next";
import HoneySpicePage from "@/views/HoneySpicePage";

const title = "Honey Spice Series — Hot Honey, Engineered as Dry Blends";
const description =
  "North America's fastest-growing flavor profile, supplied as free-flowing dry seasonings in 2 kg foodservice pouches. Convert into the viral hot-honey drizzle with one simple blend ratio.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function Page() {
  return <HoneySpicePage />;
}
