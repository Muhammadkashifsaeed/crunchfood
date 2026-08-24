import dippingsImg from "@/assets/dippings.jpg";
import PackDetails, { PackSpec } from "./PackDetails";

type Sauce = {
  name: string;
  color: string;
  note: string;
} & Partial<PackSpec>;

const sauces: Sauce[] = [
  {
    name: "Chilli Mint Spice",
    color: "from-emerald-500 to-lime-400",
    note: "Cool herbal lift, gentle chili tail — powdered recipe to make a delicious chilli mint sauce to accompany an assorted variety of food.",
    ingredients:
      "Sweet & Sour Mix, Tomato Powder, Modified Starch (E-1422), Spice (Cayenne Pepper), Salt, Onion Powder, Herb (Mint), Colour (E-160C), Thickening Agent (E-415), Preservative (E-202, E-211), Garlic Powder, Natural Flavouring (Including Celery).",
    bolded: ["Celery"],
    allergens:
      "For allergens, including cereals containing gluten, see ingredients in bold. Factory also handles: Mustard, Dairy (Milk), Sulphur Dioxide.",
    method: "Vinegar 120 g + Water 250 g + Powder 180 g.",
  },
  {
    name: "Algerian Spice",
    color: "from-amber-500 to-red-500",
    note: "Smoky, garlicky, North African heat — powdered burger sauce to be diluted with mayonnaise.",
    ingredients:
      "Sugar, Onion Flakes, Salt, Vegetable Oil, Tomato Powder, Spice (Cayenne Pepper Powder), Preservative (E-202, E-211), Colour (E-160C), Natural Flavouring (Including Wheat).",
    bolded: ["Wheat"],
    allergens:
      "For allergens, including cereals containing gluten, see ingredients in bold. Factory also handles: Mustard, Celery, Dairy (Milk), Sulphur Dioxide.",
    method:
      "Mix 250 g of this powder with 250 mL of water and then disperse the resulting paste into 500 g of mayonnaise.",
  },
  { name: "Garlic Mayo Spice", color: "from-stone-100 to-stone-300", note: "Creamy garlic profile in a free-flowing dry seasoning." },
  { name: "Burger Spice", color: "from-orange-400 to-red-500", note: "Tangy, savory dry rub — made for stacks." },
  { name: "Poutine Spice", color: "from-amber-800 to-yellow-700", note: "Rich gravy-style dry blend for fries & curds." },
  { name: "Peri Peri Spice", color: "from-red-500 to-orange-500", note: "African bird's eye, citrus, garlic — dry rub." },
];

const Dippings = () => {
  return (
    <section id="dippings" className="relative py-24 lg:py-32 bg-muted/30">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-eyebrow">04 · Signature Dipping Spice Blends — Wholesale</span>
            <h2 className="text-display mt-4 text-4xl lg:text-6xl">
              Six wholesale dry blends. <br />Six menu upsells.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-muted-foreground">
              Foodservice-ready dry seasoning blends — from cooling chilli mint
              to fiery peri-peri — supplied in 2 kg bulk pouches. Each blend
              converts into a creamy dipping sauce, glaze or wet marinade
              with one simple ratio.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 bg-card border border-primary/40 px-4 py-3">
              <span className="text-eyebrow text-primary">Dry → Liquid</span>
              <span className="text-sm text-foreground"><span className="text-display gradient-text-ember">1:4</span> + mayo/yogurt = dip</span>
              <span className="text-sm text-foreground"><span className="text-display gradient-text-ember">1:3</span> + oil/water = marinade</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:row-span-2 relative overflow-hidden">
            <img
              src={dippingsImg.src}
              alt="Six premium dry spice blends arranged on a slate board"
              loading="lazy"
              width={1280}
              height={1280}
              className="w-full h-full object-cover min-h-[400px] shadow-deep"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-eyebrow">2kg pouches</div>
              <div className="text-display text-foreground text-2xl mt-2">Ready for your line.</div>
            </div>
          </div>

          {sauces.map((s, i) => (
            <article
              key={s.name}
              itemScope
              itemType="https://schema.org/Product"
              className="group bg-card border border-border p-6 hover:border-primary/40 transition-all"
            >
              <meta itemProp="name" content={s.name} />
              <meta itemProp="description" content={s.note} />
              <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${s.color} shadow-lg mb-5 group-hover:scale-110 transition-transform`} />
              <div className="flex items-baseline justify-between">
                <h3 className="text-display text-xl text-foreground">{s.name}</h3>
                <span className="text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.note}</p>
              {s.ingredients && (
                <PackDetails
                  className="mt-5 pt-5 border-t border-border"
                  ingredients={s.ingredients}
                  bolded={s.bolded}
                  allergens={s.allergens}
                  method={s.method}
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dippings;
