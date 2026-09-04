import { FlaskConical, Package, Truck, ShieldCheck } from "lucide-react";
import Script from "next/script";

const SampleRequest = () => {
  return (
    <section
      id="samples"
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      <div className="absolute -top-32 right-0 h-[400px] w-[600px] bg-primary/10 blur-3xl" />
      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Side: pitch */}
          <aside className="lg:col-span-4">
            <span className="text-eyebrow inline-flex items-center gap-2">
              <span className="h-px w-8 bg-primary" />
              Free Samples · USA & Canada
            </span>
            <h2 className="text-display mt-6 text-4xl lg:text-5xl drop-shadow-sm">
              Request a <span className="gradient-text-ember">sample pack.</span>
            </h2>
            <p className="mt-6 text-muted-foreground">
              Tell us a little about your operation and we'll ship a 2 kg
              pro-pack of the products that match your menu — with a spec sheet,
              COA, and a wholesale quote inside 24 hours.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                {
                  icon: FlaskConical,
                  k: "2 kg pro-packs",
                  v: "Real foodservice format — fryer-test it on your line.",
                },
                {
                  icon: Package,
                  k: "Spec sheet + COA",
                  v: "Allergen, nutrition, kosher/halal docs included.",
                },
                {
                  icon: Truck,
                  k: "DC-direct freight",
                  v: "FOB or DDP to your distribution center on approval.",
                },
                {
                  icon: ShieldCheck,
                  k: "NDA on request",
                  v: "Custom formulation work covered before any sharing.",
                },
              ].map(({ icon: Icon, k, v }) => (
                <li key={k} className="flex items-start gap-4">
                  <span className="h-10 w-10 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-foreground font-medium">{k}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{v}</div>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          {/* Form Iframe */}
          <div className="lg:col-span-8 glass-card p-4 md:p-8 shadow-deep min-h-[1200px]">
            <iframe
              src="https://apps.grillados.ca/widget/form/HlOWWJt6CMdJiAFm9iqd"
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "1px", minHeight: "1200px" }}
              id="inline-HlOWWJt6CMdJiAFm9iqd"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Crunch Foods Sample Kit"
              data-height="1200"
              data-layout-iframe-id="inline-HlOWWJt6CMdJiAFm9iqd"
              data-form-id="HlOWWJt6CMdJiAFm9iqd"
              title="Crunch Foods Sample Kit"
            />
            <Script src="https://apps.grillados.ca/js/form_embed.js" strategy="lazyOnload" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleRequest;




