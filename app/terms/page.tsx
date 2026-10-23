import { Metadata } from "next";
import PageLayout from "@/components/site/PageLayout";

const title = "Terms of Service";
const description = "Terms of Service for Crunch Foods.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function TermsOfService() {
  return (
    <PageLayout>
      <div className="container-x py-24 lg:py-32">
      <div className="max-w-3xl mx-auto glass-card p-8 md:p-12 mt-12 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Terms of Service</h1>
        
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing this website and engaging in wholesale business with Crunch Foods, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services or purchase our products.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Wholesale Accounts & Orders</h2>
            <p className="mb-4">
              Our products are intended for B2B (Business-to-Business) wholesale customers, including restaurants, ghost kitchens, distributors, and private label partners.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>All orders are subject to acceptance and availability.</li>
              <li>We reserve the right to refuse service, terminate accounts, or cancel orders at our sole discretion.</li>
              <li>Sample requests are subject to verification of your business operations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. Pricing & Payment</h2>
            <p>
              All prices provided via quotes or on our platform are subject to change without notice due to market fluctuations in raw materials. Payment terms will be established during the onboarding process and must be adhered to. Late payments may incur additional fees.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Shipping & Logistics</h2>
            <p>
              Shipping and delivery times are estimates and cannot be guaranteed. We are not liable for any delays caused by freight carriers, customs, or unforeseen logistical issues. Risk of loss passes to the buyer upon delivery to the carrier unless otherwise specified in writing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Product Liability & Usage</h2>
            <p>
              Our breading, marinades, and spices are manufactured under strict quality controls. It is the responsibility of the buyer to properly store the products and prepare them according to food safety standards. We are not liable for any misuse, improper storage, or mishandling of our products after delivery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">6. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at: <br />
              <a href="mailto:sales@crunchfood.ca" className="text-primary hover:underline mt-2 inline-block">sales@crunchfood.ca</a>
            </p>
          </section>

          <div className="pt-8 border-t border-white/10 text-sm">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
