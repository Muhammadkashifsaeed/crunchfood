import type { Metadata } from "next";
import Index from "@/views/Index";

export const metadata: Metadata = {
  title: {
    absolute: "Wholesale Breading & Spice Supplier — USA & Canada",
  },
  description:
    "Bulk fried chicken breading, peri peri marinations, Nashville hot dustings & honey spice blends. Wholesale to ghost kitchens, QSR, distributors & private label across USA & Canada.",
};

export default function Page() {
  return <Index />;
}
