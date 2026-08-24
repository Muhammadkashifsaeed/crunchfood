import { Truck, ShieldCheck, Package, Leaf } from "lucide-react";

const blocks = [
  {
    icon: Truck,
    label: "Lead Time",
    value: "5–10 days",
    note: "Stock SKUs ex-works in 5–10 business days. Custom blends 4–8 weeks. New-recipe production ~3 months from confirmed PO.",
  },
  {
    icon: ShieldCheck,
    label: "Shelf Life",
    value: "12 mo minimum",
    note: "12 months minimum guaranteed on arrival at the customer's warehouse. 18 months actual shelf life from production date.",
  },
  {
    icon: Package,
    label: "Breading Pallet",
    value: "80 × 12.5 kg",
    note: "1,000 kg of moisture-locked, multi-wall kraft bags per pallet. GMA (48×40 in) and EUR (1200×800 mm) configurations on request.",
  },
  {
    icon: Leaf,
    label: "Spice / Marinade Pallet",
    value: "200 kg / pallet",
    note: "2 kg resealable foil pouches with oxygen barrier. MOQ 1 pallet per stock SKU; 500 kg per recipe for custom blends.",
  },
];

const Logistics = () => {
  return (
    <section id="logistics" className="relative py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-eyebrow">07 · Logistics & Specs</span>
            <h2 className="text-display mt-4 text-4xl lg:text-6xl">
              Built for the <span className="gradient-text-ember">supply chain.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Every SKU is produced to UK foodservice standards with predictable
            lead times, certified shelf life, and pallet configurations engineered
            for international freight.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {blocks.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.label}
                className="group relative bg-card border border-border p-7 hover:border-primary/40 transition-all"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-gradient-ember group-hover:text-primary-foreground transition-all">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-eyebrow">{b.label}</div>
                <div className="text-display text-2xl lg:text-3xl text-foreground mt-2">
                  {b.value}
                </div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {b.note}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-8 lg:p-10 bg-card border border-border flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="text-eyebrow">Nutritional Specifications</div>
            <h3 className="text-display text-2xl lg:text-3xl text-foreground mt-2">
              Full nutritional & allergen sheets available on request.
            </h3>
            <p className="text-muted-foreground mt-3 max-w-2xl">
              We provide per-SKU nutritional panels, allergen declarations, and
              certifications (HACCP, ISO) for every product line — sent within
              24 hours of inquiry.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background hover:gap-3 transition-all whitespace-nowrap"
          >
            Request spec sheets <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Logistics;
