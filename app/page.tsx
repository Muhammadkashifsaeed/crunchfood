import type { Metadata } from "next";
import Index from "@/views/Index";

const title = "Wholesale Breading & Spice Supplier — USA & Canada";
const description =
  "Bulk fried chicken breading, peri peri marinations, Nashville hot dustings & honey spice blends. Wholesale to ghost kitchens, QSR, distributors & private label across USA & Canada.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: { title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function Page() {
  return <Index />;
}
