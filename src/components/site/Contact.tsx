import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import Script from "next/script";

const PHONE_DISPLAY = "+1 (905) 208-9990";
const PHONE = "+19052089990";
const WHATSAPP = "19052089990";
const EMAIL = "sales@crunchfood.ca";

const Contact = () => {
  const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "Hi Crunch Foods — I'd like a wholesale quote."
  )}`;

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-gradient-dark overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] bg-primary/15 blur-3xl" />
      <div className="container-x relative">
        <div className="max-w-5xl mx-auto glass-card p-6 md:p-12 shadow-deep">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <span className="text-eyebrow">Fast Inquiry</span>
              <h2 className="text-display mt-4 text-4xl lg:text-5xl drop-shadow-sm">
                Get a quote in <br />
                <span className="gradient-text-ember">under 24 hours.</span>
              </h2>
              <p className="mt-6 text-muted-foreground">
                Pick the fastest channel for your team — chat us on WhatsApp,
                call sales, email directly, or drop your details below.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 border border-white/10 bg-background hover:border-primary/60 transition-colors group"
                >
                  <span className="h-10 w-10 rounded-full bg-[hsl(142_70%_45%)] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-foreground font-medium">WhatsApp Sales</div>
                    <div className="text-sm text-muted-foreground truncate">Fastest response · usually under 1 hour</div>
                  </div>
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="flex items-center gap-4 p-4 border border-white/10 bg-background hover:border-primary/60 transition-colors"
                >
                  <span className="h-10 w-10 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-foreground font-medium">{PHONE_DISPLAY}</div>
                    <div className="text-sm text-muted-foreground">Mon–Fri · 9am–6pm EST</div>
                  </div>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-4 p-4 border border-white/10 bg-background hover:border-primary/60 transition-colors"
                >
                  <span className="h-10 w-10 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-foreground font-medium truncate">{EMAIL}</div>
                    <div className="text-sm text-muted-foreground">Reply within 24h</div>
                  </div>
                </a>
              </div>

              <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5 text-primary" />
                Free samples for qualified operators · USA & Canada
              </div>
            </div>

            <div className="w-full h-full min-h-[502px]">
              <iframe
                src="https://apps.grillados.ca/widget/form/Cr8Z66PV7dwXVgAj4ZyQ"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '1px' }}
                id="inline-Cr8Z66PV7dwXVgAj4ZyQ" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form 26"
                data-height="502"
                data-layout-iframe-id="inline-Cr8Z66PV7dwXVgAj4ZyQ"
                data-form-id="Cr8Z66PV7dwXVgAj4ZyQ"
                title="Form 26"
              ></iframe>
              <Script src="https://apps.grillados.ca/js/form_embed.js" strategy="lazyOnload" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
