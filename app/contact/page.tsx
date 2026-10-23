import type { Metadata } from "next";
import ContactPage from "@/views/ContactPage";

const title = "Talk to Wholesale";
const description =
  "Distributor inquiries, contract blending, private label, samples and pallet pricing — our wholesale desk responds within one business day.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function Page() {
  return <ContactPage />;
}
