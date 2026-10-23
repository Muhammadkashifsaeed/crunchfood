import type { Metadata } from "next";
import AboutPage from "@/views/AboutPage";

const title = "About Crunch Foods";
const description =
  "We sell flavour systems to operators who plan in years, not weeks. Annual ingredient tenders, stock SKUs ex-works in 5–10 business days, custom blends in 4–8 weeks and new-recipe production in ~3 months.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function Page() {
  return <AboutPage />;
}
