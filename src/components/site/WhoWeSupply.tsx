import { ChefHat, Drumstick, UtensilsCrossed, Truck, Tag, Building2 } from "lucide-react";

const segments = [
  {
    icon: ChefHat,
    title: "Ghost Kitchens",
    desc: "Multi-brand operators running delivery-only concepts. Consistent, scalable breading that ships to every node.",
    cta: "Get a delivery-kitchen quote",
    href: "#contact",
  },
  {
    icon: Drumstick,
    title: "Fried Chicken Brands",
    desc: "QSRs and fast-casual chicken concepts that need a signature crunch and bulk supply across every location.",
    cta: "Request brand sample pack",
    href: "#contact",
  },
  {
    icon: UtensilsCrossed,
    title: "Catering Companies",
    desc: "High-volume event and corporate caterers needing reliable lead times and predictable batch quality.",
    cta: "Talk to catering sales",
    href: "#contact",
  },
  {
    icon: Truck,
    title: "Foodservice Distributors",
    desc: "Wholesalers and broadline distributors looking for stable SKUs, batch tracking and trade pricing.",
    cta: "Open a distributor account",
    href: "#contact",
  },
  {
    icon: Tag,
    title: "Private Label Partners",
    desc: "Build your own breading or spice line — bespoke recipe development, branded packaging, ongoing batch control.",
    cta: "Start a private-label brief",
    href: "#contact",
  },
  {
    icon: Building2,
    title: "Hotels & Chains",
    desc: "Multi-property groups and franchise networks standardizing flavor across kitchens in the US & Canada.",
    cta: "Request multi-site pricing",
    href: "#contact",
  },
];

const WhoWeSupply = () => {
  return (
    <section id="who-we-supply" className="relative py-24 lg:py-32 bg-muted/30">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="text-eyebrow">Who We Supply</span>
          <h2 className="text-display mt-4 text-4xl lg:text-6xl">
            Built for the operators <br />
            <span className="gradient-text-ember">who never stop frying.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Whether you need one pallet or one tonne, we supply the kitchens,
            brands and distributors driving the next era of fried chicken across
            the US & Canada.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {segments.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group relative bg-card border border-border p-7 lg:p-8 flex flex-col hover:border-primary/50 transition-all duration-300"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-gradient-ember group-hover:text-primary-foreground transition-all">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-display text-2xl text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  {s.desc}
                </p>
                <a
                  href={s.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  {s.cta} <span aria-hidden>→</span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeSupply;
