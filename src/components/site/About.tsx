import { Handshake, CalendarRange, ShieldCheck, Ship } from "lucide-react";

const pillars = [
  {
    icon: CalendarRange,
    title: "Annual tender sourcing",
    body:
      "We arrange ingredients on annual tenders to keep both pricing and quality under control. Partners share an indicative annual forecast at onboarding plus quarterly rolling updates; in return we lock raw-material costs for the contract year and insulate them from spot-market spikes. No mid-year ingredient swaps without written notice and a re-issued COA.",
  },
  {
    icon: Ship,
    title: "Honest about international freight",
    body:
      "Production typically runs ~3 months from confirmed PO to dispatch, with weekly status updates through container loading. Stock SKUs ship in 5–10 business days ex-works. We invite an upfront discussion on late-delivery penalty clauses so port congestion or vessel re-routing doesn't jeopardise a multi-year partnership.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed shelf life",
    body:
      "Actual shelf life is 18 months from production date — verified by accelerated stability testing on every blend. Minimum 12 months remaining is guaranteed on arrival at the customer's warehouse, regardless of inland-leg duration. Each pack ships with lot code, COA reference and a full allergen panel.",
  },
  {
    icon: Handshake,
    title: "Built for long-term partners",
    body:
      "MOQ is 1 pallet per stock SKU, 500 kg per recipe for custom blends, and 5,000 units per SKU for private-label retail. Breading ships at 12.5 kg × 80 bags per pallet (1,000 kg); marinades, dippings and chip spice at 2 kg pouches × 200 kg per pallet — GMA (48×40 in) and EUR (1200×800 mm) configurations on request.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-glow opacity-40 pointer-events-none" />
      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="text-eyebrow">About Crunch Foods</span>
            <h2 className="text-display mt-4 text-4xl lg:text-6xl">
              A wholesale partner built on <span className="gradient-text-ember">predictable supply.</span>
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground text-lg leading-relaxed">
            We supply foodservice operators, QSR chains, ghost kitchens, contract
            caterers and broadline distributors across the United States and
            Canada — plus 12+ export markets including the UK, EU and GCC — with
            a single, consistent dry catalog and a transparent supply model
            engineered for multi-year procurement programs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group bg-card border border-border p-7 lg:p-9 hover:border-primary/50 transition-all"
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-gradient-ember group-hover:text-primary-foreground transition-all">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-display text-2xl text-foreground">{title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {[
            { k: "5–10 days", v: "Stock SKU lead time" },
            { k: "18 months", v: "Actual shelf life" },
            { k: "12 months", v: "Min guaranteed on arrival" },
            { k: "1 pallet", v: "MOQ per stock SKU" },
          ].map((s) => (
            <div key={s.k} className="bg-background p-7">
              <div className="text-display text-2xl lg:text-3xl gradient-text-ember">
                {s.k}
              </div>
              <div className="text-sm text-muted-foreground mt-2">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
