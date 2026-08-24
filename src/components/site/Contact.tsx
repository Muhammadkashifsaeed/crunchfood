import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";

const PHONE_DISPLAY = "+1 (905) 208-9990";
const PHONE = "+19052089990";
const WHATSAPP = "19052089990";
const EMAIL = "sales@crunchfood.ca";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const mountedAt = useRef<number>(Date.now());

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    // Honeypot: real users can't see this field
    if (String(data.get("website") || "").length > 0) {
      setLoading(false);
      form.reset();
      toast.success("Inquiry received", {
        description: "Our sales team will reply within 24 hours.",
      });
      return;
    }

    // Min time-to-submit: bots tend to fire instantly
    if (Date.now() - mountedAt.current < 2500) {
      setLoading(false);
      toast.error("Please take a moment and try again.");
      return;
    }

    const payload = {
      kind: "contact" as const,
      name: String(data.get("name") || "").trim().slice(0, 120),
      company: String(data.get("company") || "").trim().slice(0, 160) || null,
      email: String(data.get("email") || "").trim().slice(0, 255),
      phone: String(data.get("phone") || "").trim().slice(0, 60) || null,
      message: String(data.get("products") || "").trim().slice(0, 2000) || null,
      sourcePath: typeof window !== "undefined" ? window.location.pathname : null,
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 500) : null,
    };

    const resp = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (!resp.ok) {
      const body = await resp.json().catch(() => ({}));
      const msg = body.error?.includes("Too many")
        ? "You've sent several inquiries recently — please try again in an hour."
        : "Please try again or email sales@crunchfood.ca directly.";
      toast.error("Couldn't send your inquiry", { description: msg });
      return;
    }

    form.reset();
    toast.success("Inquiry received", {
      description: "Our sales team will reply within 24 hours.",
    });
  };


  const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "Hi Crunch Foods — I'd like a wholesale quote."
  )}`;

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-gradient-dark overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[800px] bg-primary/15 blur-3xl" />
      <div className="container-x relative">
        <div className="max-w-5xl mx-auto bg-card border border-border p-6 md:p-12 shadow-deep">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <span className="text-eyebrow">Fast Inquiry</span>
              <h2 className="text-display mt-4 text-4xl lg:text-5xl">
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
                  className="flex items-center gap-4 p-4 border border-border bg-background hover:border-primary/60 transition-colors group"
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
                  className="flex items-center gap-4 p-4 border border-border bg-background hover:border-primary/60 transition-colors"
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
                  className="flex items-center gap-4 p-4 border border-border bg-background hover:border-primary/60 transition-colors"
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

            <form onSubmit={onSubmit} className="space-y-3">
              {/* Honeypot — hidden from real users */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ position: "absolute", left: "-10000px", width: 1, height: 1, opacity: 0 }}
              />
              <Input name="name" required placeholder="Your name" className="h-12 bg-background border-border" />
              <Input name="company" required placeholder="Company / brand" className="h-12 bg-background border-border" />
              <Input name="email" required type="email" placeholder="Work email" className="h-12 bg-background border-border" />
              <Input name="phone" placeholder="Phone (optional)" className="h-12 bg-background border-border" />
              <Textarea
                name="products"
                placeholder="Which products are you interested in? (Breading, Peri Peri marinades, Nashville oils, Dippings...)"
                className="min-h-[120px] bg-background border-border"
              />
              <Button type="submit" variant="ember" size="xl" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Inquiry →"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Submits directly to our sales team. We reply within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
