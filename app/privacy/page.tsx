import { Metadata } from "next";
import PageLayout from "@/components/site/PageLayout";

const title = "Privacy Policy";
const description = "Privacy Policy for Crunch Foods.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description },
  twitter: { card: "summary_large_image", title, description },
};

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <div className="container-x py-24 lg:py-32">
      <div className="max-w-3xl mx-auto glass-card p-8 md:p-12 mt-12 shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
        
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p>
              At Crunch Foods, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage in wholesale business with us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <p className="mb-4">We may collect personal and business information that you voluntarily provide to us, including but not limited to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Name and Job Title</li>
              <li>Company Name and Business Type</li>
              <li>Contact Data (Email address, Phone number)</li>
              <li>Shipping and Billing Addresses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">The information we collect is used in the following ways:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>To fulfill and manage wholesale orders and sample requests.</li>
              <li>To communicate with you regarding quotes, orders, and inquiries.</li>
              <li>To improve our products, services, and website functionality.</li>
              <li>To send marketing and promotional communications (if opted-in).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">4. Sharing Your Information</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal or business information to outside parties except to trusted third parties who assist us in operating our website, conducting our business, or servicing you (e.g., shipping carriers, payment processors), so long as those parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-4">5. Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at: <br />
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
