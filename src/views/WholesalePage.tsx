"use client";

import PageLayout from "@/components/site/PageLayout";
import LeadGen from "@/components/site/LeadGen";
import SampleRequest from "@/components/site/SampleRequest";
import WhoWeSupply from "@/components/site/WhoWeSupply";
import Markets from "@/components/site/Markets";

const WholesalePage = () => (
  <PageLayout
    eyebrow="Wholesale & Distribution"
    title="Bulk Pricing, Samples & Distributor Onboarding."
    intro="Pallet-ready bulk pricing, contract blending, private-label production and free-sample programs for QSR chains, ghost kitchens, contract caterers, distributors and importers across the US, Canada and beyond."
  >
    <LeadGen />
    <SampleRequest />
    <WhoWeSupply />
    <Markets />
  </PageLayout>
);

export default WholesalePage;