import type { Metadata } from "next";
import AboutPage from "@/views/AboutPage";

export const metadata: Metadata = {
  title: "About Crunch Foods",
  description:
    "We sell flavour systems to operators who plan in years, not weeks. Annual ingredient tenders, stock SKUs ex-works in 5–10 business days, custom blends in 4–8 weeks and new-recipe production in ~3 months.",
};

export default function Page() {
  return <AboutPage />;
}
