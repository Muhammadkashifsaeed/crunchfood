import type { Metadata } from "next";
import DippingsPage from "@/views/DippingsPage";

export const metadata: Metadata = {
  title: "Signature Dipping Spice Blends",
  description:
    "Six wholesale dry seasoning blends — supplied in 2 kg pouches. Each converts into a creamy dipping sauce, glaze or wet marinade with one simple ratio.",
};

export default function Page() {
  return <DippingsPage />;
}
