import type { Metadata } from "next";
import DippingsPage from "@/views/DippingsPage";

const title = "Signature Dipping Spice Blends";
const description =
  "Six wholesale dry seasoning blends — supplied in 2 kg pouches. Each converts into a creamy dipping sauce, glaze or wet marinade with one simple ratio.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function Page() {
  return <DippingsPage />;
}
