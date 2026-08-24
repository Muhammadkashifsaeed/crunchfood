import scotchBottle from "@/assets/spice-scotch-pouch.jpg";
import scotchDrizzle from "@/assets/spice-scotch-chicken.jpg";
import cayenneBottle from "@/assets/spice-cayenne-pouch.jpg";
import cayenneDrizzle from "@/assets/spice-cayenne-chicken.jpg";
import habaneroBottle from "@/assets/spice-habanero-pouch.jpg";
import habaneroDrizzle from "@/assets/spice-habanero-chicken.jpg";
import PackDetails, { PackSpec } from "./PackDetails";

type Honey = {
  name: string;
  heat: string;
  scoville: string;
  note: string;
  bottle: string;
  drizzle: string;
  accent: string;
} & PackSpec;

const honeys: Honey[] = [
  {
    name: "Scotch Bonnet Honey Spice",
    heat: "Fiery",
    scoville: "100k–350k SHU",
    note: "Tropical, fruit-forward burn balanced by sweet honey notes — in a dry rub format. Spicy, sweet and sticky, benchmarked against All-Star Hot Honey.",
    bottle: scotchBottle.src,
    drizzle: scotchDrizzle.src,
    accent: "from-amber-400 via-orange-500 to-red-600",
    ingredients:
      "Sweet & Sour Mix, Modified Starch (E-1422), Salt, Natural Flavouring (Including Habanero Flavouring, Wheat Flour Contains: Calcium Carbonate, Iron, Niacin, Thiamine, Natural Flavour), Thickening Agent (E-415), Colour (E-160C Wheat Flour Contains: Calcium Carbonate, Iron, Niacin, Thiamine, E-100 Wheat Flour Contains: Calcium Carbonate, Iron, Niacin, Thiamine), Sodium Saccharine.",
    bolded: ["Wheat Flour"],
    allergens:
      "For allergens, including cereals containing gluten, see ingredients in bold. Factory also handles: Mustard, Celery, Dairy (Milk), Sulphur Dioxide.",
    method:
      "Mix 250 g Powder + 375 g Hot Water using a high-speed hand blender until the consistency you want is achieved. Allow to cool to room temperature before serving.",
  },
  {
    name: "Cayenne Honey Spice",
    heat: "Medium",
    scoville: "30k–50k SHU",
    note: "Classic American heat with smooth, slow-building warmth and a sweet honey backbone. Spicy, sweet and sticky, benchmarked against All-Star Hot Honey.",
    bottle: cayenneBottle.src,
    drizzle: cayenneDrizzle.src,
    accent: "from-yellow-400 via-amber-500 to-orange-600",
    ingredients:
      "Sweet & Sour Mix, Modified Starch (E-1422), Salt, Spice (Cayenne Pepper Flakes), Thickening Agent (E-415), Natural Flavouring (Including Wheat Flour Contains: Calcium Carbonate, Iron, Niacin, Thiamine, Natural Flavour), Sodium Saccharine, Colour (E-160C Wheat Flour Contains: Calcium Carbonate, Iron, Niacin, Thiamine).",
    bolded: ["Wheat Flour"],
    allergens:
      "For allergens, including cereals containing gluten, see ingredients in bold. Factory also handles: Mustard, Celery, Dairy (Milk), Sulphur Dioxide.",
    method:
      "Mix 250 g Powder + 250 g Hot Water using a high-speed hand blender until the consistency you want is achieved. Allow to cool to room temperature before serving.",
  },
  {
    name: "Habanero Honey Spice",
    heat: "Extra Hot",
    scoville: "100k–350k SHU",
    note: "Bright citrus-pepper bite with a sweet floral honey finish — all in a free-flowing dry blend. Spicy, sweet and sticky, benchmarked against All-Star Hot Honey.",
    bottle: habaneroBottle.src,
    drizzle: habaneroDrizzle.src,
    accent: "from-orange-400 via-red-500 to-rose-700",
    ingredients:
      "Sweet & Sour Mix, Modified Starch (E-1422), Salt, Spice (Cayenne Pepper Flakes), Natural Flavouring (Including Habanero Flavouring, Natural Mango Flavouring, Wheat Flour Contains: Calcium Carbonate, Iron, Niacin, Thiamine, Natural Flavour), Thickening Agent (E-415), Sodium Saccharine, Colour (E-160C Wheat Flour Contains: Calcium Carbonate, Iron, Niacin, Thiamine).",
    bolded: ["Wheat Flour"],
    allergens:
      "For allergens, including cereals containing gluten, see ingredients in bold. Factory also handles: Mustard, Celery, Dairy (Milk), Sulphur Dioxide.",
    method:
      "Mix 250 g Powder + 250 g Hot Water using a high-speed hand blender until the consistency you want is achieved. Allow to cool to room temperature before serving.",
  },
];

const HoneySauces = () => {
  return (
    <section id="honey-sauces" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-primary/5 pointer-events-none" />
      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-eyebrow">05 · Honey Spice Series — Wholesale</span>
            <h2 className="text-display mt-4 text-4xl lg:text-6xl">
              Bulk hot-honey, <br />
              <span className="gradient-text-ember">three dry spice blends.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-muted-foreground">
              North America's fastest-growing flavor profile — engineered as
              free-flowing dry seasonings in 2 kg foodservice pouches. Convert
              into the viral hot-honey drizzle with one simple blend ratio.
              No bottling, no shelf-life headaches.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 bg-card border border-primary/40 px-4 py-3">
              <span className="text-eyebrow text-primary">Dry → Liquid</span>
              <span className="text-sm text-foreground"><span className="text-display gradient-text-ember">1:2</span> spice : warm honey → hot-honey drizzle</span>
              <span className="text-sm text-foreground"><span className="text-display gradient-text-ember">1:0</span> finishing dust</span>
            </div>
          </div>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {honeys.map((h, idx) => (
            <article
              key={h.name}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
            >
              {/* Pouch close-up */}
              <div
                className={`lg:col-span-4 relative group overflow-hidden ${
                  idx % 2 === 1 ? "lg:order-3" : ""
                }`}
              >
                <div
                  className={`absolute -inset-4 bg-gradient-to-br ${h.accent} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-500`}
                />
                <img
                  src={h.bottle}
                  alt={`Crunch Foods branded ${h.name} 2kg foodservice dry spice pouch`}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="relative w-full h-[480px] object-cover shadow-deep group-hover:scale-[1.02] transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-background/90 backdrop-blur border border-primary/60 px-3 py-1.5 text-[10px] uppercase tracking-widest text-foreground">
                  Crunch Foods · Branded Pack
                </div>
              </div>

              {/* Copy block */}
              <div className="lg:col-span-4 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`h-3 w-3 rounded-full bg-gradient-to-br ${h.accent} shadow-lg`}
                  />
                  <span className="text-eyebrow">0{idx + 1} · {h.heat}</span>
                </div>
                <h3 className="text-display text-3xl lg:text-5xl text-foreground">
                  {h.name}
                </h3>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  {h.note}
                </p>
                <dl className="mt-8 grid grid-cols-3 gap-4 text-sm">
                  <div className="border-l border-border pl-4">
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                      Heat
                    </dt>
                    <dd className="text-foreground font-medium mt-1">{h.heat}</dd>
                  </div>
                  <div className="border-l border-border pl-4">
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                      Scoville
                    </dt>
                    <dd className="text-foreground font-medium mt-1">{h.scoville}</dd>
                  </div>
                  <div className="border-l border-border pl-4">
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                      Pack
                    </dt>
                    <dd className="text-foreground font-medium mt-1">2kg</dd>
                  </div>
                </dl>
                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                >
                  Request a sample pouch <span aria-hidden>→</span>
                </a>
                {h.ingredients && (
                  <PackDetails
                    className="mt-8 pt-6 border-t border-border"
                    ingredients={h.ingredients}
                    bolded={h.bolded}
                    allergens={h.allergens}
                    method={h.method}
                  />
                )}
              </div>

              {/* Seasoned chicken shot */}
              <div
                className={`lg:col-span-4 relative group overflow-hidden ${
                  idx % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <img
                  src={h.drizzle}
                  alt={`Crispy fried chicken seasoned with ${h.name} dry rub`}
                  loading="lazy"
                  width={1280}
                  height={1024}
                  className="w-full h-[480px] object-cover shadow-deep group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoneySauces;
