import type { Metadata } from "next";
import ContactPage from "@/views/ContactPage";

export const metadata: Metadata = {
  title: "Talk to Wholesale",
  description:
    "Distributor inquiries, contract blending, private label, samples and pallet pricing — our wholesale desk responds within one business day.",
};

export default function Page() {
  return <ContactPage />;
}
