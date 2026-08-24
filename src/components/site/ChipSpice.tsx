import chipSpiceImg from "@/assets/chip-spice.jpg";
import PackDetails, { PackSpec } from "./PackDetails";

type ChipSpice = {
  name: string;
  tagline: string;
  accent: string;
  heat: string;
} & PackSpec;

const chipSpices: ChipSpice[] = [
  {
    name: "Chipotle Chip Spice",
    tagline: "Smoky chipotle, BBQ depth, lemon lift.",
    heat: "Medium",
    accent: "from-orange-700 via-red-600 to-amber-700",
    ingredients:
      "Salt, Flavour Enhancer (E-621), Cayenne Pepper, Onion Powder, Garlic Powder, Maltodextrin, Sugar, Wheat Flour (Calcium Carbonate, Iron, Thiamin, Niacin), Paprika, Citric Acid (E-330), BBQ Flavour, Chipotle Flavour, Caramel Colour, Black Pepper, Lemon Flavour.",
    bolded: ["Wheat Flour"],
    allergens:
      "For allergens, including cereals containing gluten, see ingredients in bold. Factory also handles: Mustard, Celery, Dairy (Milk), Sulphur Dioxide.",
    method: "Sprinkle generously on hot fried chips. Works on any food you fancy.",
  },
  {
    name: "Habanero Chip Spice",
    tagline: "Bright habanero burn with mango–lemon backnote.",
    heat: "Hot",
    accent: "from-orange-500 via-red-500 to-rose-600",
    ingredients:
      "Salt, Wheat Flour (Calcium Carbonate, Iron, Thiamin, Niacin), Flavour Enhancer (E-621), Cayenne Pepper, Onion Powder, Garlic Powder, Citric Acid (E-330), Habanero Flavour, Sugar, Black Pepper, Lemon Flavour, Mango Flavour.",
    bolded: ["Wheat Flour"],
    allergens:
      "For allergens, including cereals containing gluten, see ingredients in bold. Factory also handles: Mustard, Celery, Dairy (Milk), Sulphur Dioxide.",
    method: "Sprinkle generously on hot fried chips. Works on any food you fancy.",
  },
  {
    name: "Jalapeño Chip Spice",
    tagline: "Green-pepper kick with smoky BBQ tail.",
    heat: "Mild–Medium",
    accent: "from-lime-500 via-emerald-500 to-green-700",
    ingredients:
      "Salt, Maltodextrin, Flavour Enhancer (E-621), Onion Powder, Garlic Powder, Cayenne Pepper, Sugar, Citric Acid (E-330), Wheat Flour (Calcium Carbonate, Iron, Thiamin, Niacin), Paprika, Black Pepper, Jalapeño Flavour, Caramel Colour, BBQ Flavour.",
    bolded: ["Wheat Flour"],
    allergens:
      "For allergens, including cereals containing gluten, see ingredients in bold. Factory also handles: Mustard, Celery, Dairy (Milk), Sulphur Dioxide.",
    method: "Sprinkle generously on hot fried chips. Works on any food you fancy.",
  },
  {
    name: "Cheesy Heat Dust",
    tagline: "Extra mature cheddar, bold and creamy with a cayenne kiss.",
    heat: "Mild",
    accent: "from-yellow-300 via-amber-500 to-orange-600",
    ingredients:
      "Skimmed Milk, Salt, Vegetable Oils and Fats (Palm), Vegetable Oil, Spice (Paprika Powder, Cayenne Pepper Flakes, White Pepper, Black Pepper), Sugar, Onion Powder, Garlic Powder, Herb (Parsley), Natural Flavouring (Including Natural Cheddar Flavour Milk, Natural Flavour), Colloidal Silicon Dioxide.",
    bolded: ["Milk"],
    allergens:
      "For allergens, including cereals containing gluten, see ingredients in bold. Factory also handles: Wheat (Gluten), Mustard, Celery, Sulphur Dioxide.",
    method: "Sprinkle as per required flavour over hot chips, popcorn or fried snacks.",
  },
  {
    name: "Snacktastic Chip Spice",
    tagline: "Tangy tomato-meat umami — the all-rounder snack dust.",
    heat: "Mild",
    accent: "from-red-500 via-orange-600 to-amber-700",
    ingredients:
      "Wheat Flour (Contains: Calcium Carbonate, Iron, Niacin, Thiamine), Sweet & Sour Mix, Tomato Powder, Flavouring Salt (Salt, Flavour enhancer (E-621)), Vegetable Oil, Natural Flavouring (Including Meat Flavouring, Flavouring Salt, Salt, Flavour Enhancer E-621, Dextrose, Modified Starch E-1422, Flavour Enhancer E-631, Flavour Enhancer E-627, Colloidal Silicon Dioxide, Wheat Flour Contains: Calcium Carbonate, Iron, Niacin, Thiamine), Spice (Cayenne Pepper Powder), Onion Powder, Colour (E-160C Wheat Flour Contains: Calcium Carbonate, Iron, Niacin, Thiamine).",
    bolded: ["Wheat Flour", "Wheat"],
    allergens:
      "For allergens, including cereals containing gluten, see ingredients in bold. Factory also handles: Mustard, Celery, Dairy (Milk), Sulphur Dioxide.",
    method: "Sprinkle generously on hot fried chips. Works on any food you fancy.",
  },
];

const ChipSpice = () => {
  return (
    <section
      id="chip-spice"
      className="relative py-24 lg:py-32 bg-background overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-primary/5 pointer-events-none" />
      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-ember opacity-20 blur-3xl" />
            <img
              src={chipSpiceImg.src}
              alt="Crispy fried potato chips dusted with vibrant red Crunch Foods chip seasoning"
              loading="lazy"
              width={1280}
              height={1280}
              className="relative w-full aspect-square object-cover shadow-deep"
            />
            <div className="absolute -bottom-6 -left-6 bg-background border border-primary px-6 py-4 shadow-ember">
              <div className="text-eyebrow">Chip Spice Series</div>
              <div className="text-display text-foreground text-xl mt-1">
                {chipSpices.length} dust blends
              </div>
            </div>
          </div>

          <div>
            <span className="text-eyebrow">06 · Chip Spice Series — Wholesale</span>
            <h2 className="text-display mt-4 text-4xl lg:text-6xl">
              Bulk chip-shop dusts. <br />
              <span className="gradient-text-ember">Five flavour-bombs.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Free-flowing finishing dusts engineered for fried potato chips,
              hot fries, popcorn and snack programs. Sprinkle straight onto hot
              oil-glossy chips for instant menu differentiation — no glaze, no
              dwell time. Supplied in 2 kg foodservice pouches for QSRs, chip
              shops, ghost kitchens, distributors and private-label brands.
            </p>

            <div className="mt-6 inline-flex flex-wrap items-center gap-x-6 gap-y-2 bg-card border border-primary/40 px-5 py-3">
              <span className="text-eyebrow text-primary">Application</span>
              <span className="text-sm text-foreground">
                <span className="text-display gradient-text-ember">1:0</span> sprinkle direct on hot chips
              </span>
              <span className="text-sm text-foreground">
                <span className="text-display gradient-text-ember">2 kg</span> pouch · 200 kg / pallet
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chipSpices.map((c, i) => (
            <article
              key={c.name}
              itemScope
              itemType="https://schema.org/Product"
              className="group relative bg-card border border-border p-6 lg:p-8 hover:border-primary/50 transition-all overflow-hidden"
            >
              <meta itemProp="name" content={c.name} />
              <meta itemProp="description" content={c.tagline} />
              <div
                className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${c.accent} opacity-20 group-hover:opacity-40 blur-3xl transition-opacity duration-700`}
              />
              <div className="relative">
                <div className="flex items-baseline justify-between mb-5">
                  <span
                    className={`h-10 w-10 rounded-full bg-gradient-to-br ${c.accent} shadow-lg group-hover:scale-110 transition-transform`}
                  />
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    0{i + 1} · {c.heat}
                  </span>
                </div>
                <h3 className="text-display text-xl lg:text-2xl text-foreground">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {c.tagline}
                </p>
                <PackDetails
                  className="mt-5 pt-5 border-t border-border"
                  ingredients={c.ingredients}
                  bolded={c.bolded}
                  allergens={c.allergens}
                  method={c.method}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChipSpice;
