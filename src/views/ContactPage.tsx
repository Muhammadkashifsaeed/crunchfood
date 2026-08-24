"use client";

import PageLayout from "@/components/site/PageLayout";
import Contact from "@/components/site/Contact";

const ContactPage = () => (
  <PageLayout
    eyebrow="Get in touch"
    title="Talk to Wholesale."
    intro="Distributor inquiries, contract blending, private label, samples and pallet pricing — our wholesale desk responds within one business day."
  >
    <Contact />
  </PageLayout>
);

export default ContactPage;