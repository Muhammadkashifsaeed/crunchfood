import marinationImg from "@/assets/marination.jpg";
import PackDetails, { PackSpec } from "./PackDetails";
import { motion, type Variants } from "framer-motion";

type HeatItem = {
  name: string;
  heat: number;
  note: string;
} & Partial<PackSpec>;

const heatLevels: HeatItem[] = [
  {
    name: "Lemon & Herb",
    heat: 0,
    note: "Bright, citrus-forward dry rub. The crowd-pleaser. Converts into basting sauce or table sauce with a single ratio.",
    ingredients:
      "Salt, Cayenne Peppers, Citric Acid (E330), Onion, Garlic, Modified Starch, Sugar, Natural Flavouring, Xanthan Gum.",
    allergens:
      "For allergens, including cereals containing gluten, see ingredients in bold. Other production utilises: Soya, Mustard, Celery, Dairy, Sulphur Dioxide.",
    method:
      "Basting sauce — Powder 135 g + White Vinegar 200 g + Vegetable Oil 60 g + Water 530 g. Table sauce — Powder 135 g + White Vinegar 200 g + Water 665 g. Blend with a hand blender.",
  },
  { name: "Medium", heat: 2, note: "Warm peri-peri kick with balanced spice — dry blend." },
  { name: "Hot", heat: 3, note: "Classic Nashville heat. Dry rub built for spice-lovers." },
  { name: "Extra Hot", heat: 4, note: "Aggressive, layered, lingering burn — dry blend." },
  { name: "Prego (Vegan)", heat: 2, note: "Garlic-forward Portuguese prego profile. 100% plant-based dry rub." },
  {
    name: "Mishkaki Sauce",
    heat: 3,
    note: "East African skewer sauce — coconut, mustard, garlic, ginger. Built for grills.",
    ingredients:
      "Mustard, Coconut, Salt, Vegetable Oil, Citric Acid (E330), Garlic, Onion, Modified Starch, Bell Peppers, Soya Lecithin, Herbs, Paprika (E160c), Potassium Sorbate, Sodium Benzoate, Xanthan Gum.",
    bolded: ["Mustard", "Soya Lecithin"],
    allergens:
      "For allergens, including cereals with gluten, see ingredients in bold. Other production utilises: Celery, Dairy, Sulphur Dioxide, Wheat Gluten.",
    method:
      "Powder 153 g + White Vinegar 235 g + Vegetable Oil 16 g + Water 471 g + Garlic 94 g + Ginger 31 g. Blend with a hand blender.",
  },
  {
    name: "Chicken Marinade",
    heat: 2,
    note: "All-purpose peri-peri chicken marinade — cayenne, lemon, bell pepper. Wet marinade in one mix.",
    ingredients:
      "Salt, Bell Peppers, Onion, Garlic, Modified Starch, Cayenne Peppers, Citric Acid (E330), Sugar, Soya Lecithin, Potassium Sorbate, Sodium Benzoate, Xanthan Gum, Paprika (E160c), Lemon Flavour.",
    bolded: ["Soya Lecithin"],
    allergens:
      "For allergens, including cereals containing gluten, see ingredients in bold. Other production utilises: Celery, Eggs, Milk, Mustard, Wheat Gluten.",
    method:
      "Powder 99 g + White Vinegar 280 g + Vegetable Oil 56 g + Water 565 g. Blend with a hand blender.",
  },
  {
    name: "Rice Gravy",
    heat: 2,
    note: "Cayenne-spiked savoury gravy for rice bowls and sides. Pourable in one mix.",
    ingredients:
      "Salt, Onion, Garlic, Modified Starch, Cayenne Pepper, Citric Acid (E330), Sugar, Potassium Sorbate, Sodium Benzoate, Xanthan Gum.",
    allergens:
      "For allergens, including cereals containing gluten, see ingredients in bold. Other production utilises: Mustard, Celery, Dairy, Sulphur Dioxide, Wheat Gluten.",
    method:
      "Powder 144 g + White Vinegar 70 g + Vegetable Oil 80 g + Water 656 g + Garlic 50 g. Blend with a hand blender.",
  },
];

const HeatIndicator = ({ level }: { level: number }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className={`h-1.5 w-6 ${i <= level ? "bg-secondary" : "bg-border"}`}
      />
    ))}
  </div>
);

const Marination = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section id="marination" className="relative py-24 lg:py-32 bg-muted/30 overflow-hidden">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="relative lg:sticky lg:top-24">
            <div className="absolute -inset-4 bg-gradient-ember opacity-20 blur-3xl" />
            <img
              src={marinationImg.src}
              alt="Chicken pieces dry-rubbed with peri peri spice blend"
              loading="lazy"
              width={1280}
              height={1280}
              className="relative w-full aspect-square object-cover shadow-deep"
            />
            <div className="absolute -bottom-6 -right-6 bg-background border border-primary px-6 py-4 shadow-ember">
              <div className="text-eyebrow">Peri Peri Series</div>
              <div className="text-display text-foreground text-xl mt-1">{heatLevels.length} dry blends</div>
            </div>
          </div>

          <div>
            <span className="text-eyebrow">02 · Peri Peri Marination & Sauce — Wholesale</span>
            <h2 className="text-display mt-4 text-4xl lg:text-5xl drop-shadow-sm">
              Bulk peri peri dry marinations for foodservice.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Wholesale peri-peri-style dry marination and sauce blends,
              engineered to convert into a wet marinade, basting liquid,
              table sauce or rice gravy with a single ratio. Supplied in
              2 kg foodservice pouches for QSRs, ghost kitchens, distributors
              and private-label brands.
            </p>

            <div className="mt-6 inline-flex flex-wrap items-center gap-x-6 gap-y-2 bg-card border border-primary/40 px-5 py-3">
              <span className="text-eyebrow text-primary">Dry → Liquid</span>
              <span className="text-sm text-foreground"><span className="text-display gradient-text-ember">1:3</span> spice : water/oil/buttermilk → wet marinade</span>
              <span className="text-sm text-foreground"><span className="text-display gradient-text-ember">1:4</span> spice : yogurt/mayo → dipping sauce</span>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-10 space-y-4"
            >
              {heatLevels.map((m) => (
                <motion.article
                  variants={itemVariants}
                  key={m.name}
                  className="group p-5 glass-card hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40 hover:bg-white/5 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">{m.name}</div>
                      <div className="text-sm text-muted-foreground mt-0.5">{m.note}</div>
                    </div>
                    <div className="group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.5)] transition-all duration-300">
                      <HeatIndicator level={m.heat} />
                    </div>
                  </div>
                  {m.ingredients && (
                    <PackDetails
                      className="mt-4 pt-4 border-t border-white/10"
                      ingredients={m.ingredients}
                      bolded={m.bolded}
                      allergens={m.allergens}
                      method={m.method}
                    />
                  )}
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marination;

