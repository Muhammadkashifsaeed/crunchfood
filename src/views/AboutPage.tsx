"use client";

import PageLayout from "@/components/site/PageLayout";
import About from "@/components/site/About";
import Logistics from "@/components/site/Logistics";
import Certifications from "@/components/site/Certifications";

const AboutPage = () => (
  <PageLayout
    eyebrow="About Crunch Foods"
    title="Predictable supply. Annual tenders. Long-term partnerships."
    intro="We sell flavour systems to operators who plan in years, not weeks. Annual ingredient tenders, stock SKUs ex-works in 5–10 business days, custom blends in 4–8 weeks and new-recipe production in ~3 months — backed by 18-month actual shelf life with 12 months guaranteed on arrival, and pallet configurations engineered for international freight."
  >
    <About />
    <Logistics />
    <Certifications />
  </PageLayout>
);

export default AboutPage;