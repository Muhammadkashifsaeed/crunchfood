"use client";

import PageLayout from "@/components/site/PageLayout";
import Packaging from "@/components/site/Packaging";
import RetailLine from "@/components/site/RetailLine";
import Logistics from "@/components/site/Logistics";
import Certifications from "@/components/site/Certifications";

const PackagingPage = () => (
  <PageLayout
    eyebrow="Built for enterprise procurement"
    title="Packaging, Branding & Private Label for Global Foodservice."
    intro="From 12.5 kg breading sacks to 2 kg spice pouches and pallet-shipped contract production — every unit ships with the Crunch Foods master brand, full traceability, and the documentation enterprise procurement teams need to onboard a new supplier without friction."
  >
    <Packaging />
    <RetailLine />
    <Logistics />
    <Certifications />
  </PageLayout>
);

export default PackagingPage;