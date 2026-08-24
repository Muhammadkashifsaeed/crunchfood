import { Droplets, FlaskConical, Flame, ChefHat } from "lucide-react";

const conversions = [
  {
    icon: Droplets,
    title: "Dipping Sauce",
    ratio: "1 : 4",
    blend: "1 part dry spice + 4 parts mayo, yogurt or sour cream",
    use: "Whisk cold. Rest 10 min. Serve as a dipper, spread or aioli.",
  },
  {
    icon: FlaskConical,
    title: "Wet Marinade",
    ratio: "1 : 3",
    blend: "1 part dry spice + 3 parts water, oil or buttermilk",
    use: "Coat protein, marinate 2–24h. Full penetration, no bottled liquids.",
  },
  {
    icon: Flame,
    title: "Finishing Sauce / Glaze",
    ratio: "1 : 2",
    blend: "1 part dry spice + 2 parts hot oil, butter or honey",
    use: "Heat & whisk. Brush on wings, tenders or sandwiches at the pass.",
  },
  {
    icon: ChefHat,
    title: "Dry Dredge / Dust",
    ratio: "1 : 0",
    blend: "Use as supplied — no liquid required",
    use: "Toss hot proteins or fries straight from the fryer for maximum cling.",
  },
];

const ConceptDryToLiquid = () => {
  return (
    <section id="concept" className="relative py-24 lg:py-32 bg-gradient-dark overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[500px] w-[500px] bg-primary/15 blur-3xl" />
      <div className="container-x relative">
        <div className="max-w-3xl">
          <span className="text-eyebrow inline-flex items-center gap-2">
            <span className="h-px w-8 bg-primary" />
            One Dry Spice · Four Liquid Formats
          </span>
          <h2 className="text-display mt-6 text-4xl lg:text-6xl">
            One bag. <span className="gradient-text-ember">Four sauces.</span> <br />
            Zero bottled liquids.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Every spice, dipping blend, marination and honey-spice SKU we ship
            is engineered as a <span className="text-foreground font-medium">free-flowing dry powder</span> that
            converts on-line into a dipping sauce, wet marinade, finishing glaze or
            dry dust — with a single ratio. No bottles. No cold-chain. No 6-month
            liquid shelf-life headaches. Just one 2 kg pouch that yields up to
            10 kg of finished sauce.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {conversions.map(({ icon: Icon, title, ratio, blend, use }) => (
            <div
              key={title}
              className="group bg-card border border-border p-6 hover:border-primary/60 transition-colors flex flex-col"
            >
              <span className="h-12 w-12 rounded-full bg-primary/15 text-primary flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </span>
              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="text-display text-xl text-foreground">{title}</h3>
                <span className="text-display text-2xl gradient-text-ember">{ratio}</span>
              </div>
              <p className="mt-3 text-sm text-foreground">{blend}</p>
              <p className="mt-3 text-sm text-muted-foreground border-t border-border/60 pt-3">
                {use}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { k: "5×", v: "Yield from 1 dry kg → ~5 kg finished sauce" },
            { k: "24mo", v: "Dry shelf-life vs ~6mo for bottled sauces" },
            { k: "−70%", v: "Freight & storage volume vs liquid SKUs" },
          ].map((s) => (
            <div key={s.k} className="border-l-2 border-primary pl-5 py-2">
              <div className="text-display text-3xl gradient-text-ember">{s.k}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConceptDryToLiquid;
