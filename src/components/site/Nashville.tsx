import nashvilleImg from "@/assets/nashville-hot.jpg";
import PackDetails, { PackSpec } from "./PackDetails";
import { motion, type Variants } from "framer-motion";


type Dusting = {
  name: string;
  desc: string;
  level: string;
} & Partial<PackSpec>;

const dustings: Dusting[] = [
  { name: "Extra Mild Dusting", desc: "Gentle warmth, smoky paprika lead.", level: "🔥" },
  { name: "Hot Mild Dusting", desc: "Approachable kick — the everyday tier.", level: "🔥🔥" },
  { name: "Hot Dusting", desc: "Classic Nashville heat with cayenne depth.", level: "🔥🔥🔥" },
  {
    name: "Hot-Hot Dusting",
    desc: "Aggressive, lingering burn for spice fans. Nashville Hot concept with a hot flavour to be sprinkled over the fried burger after using dipping oil.",
    level: "🔥🔥🔥🔥",
    ingredients:
      "Flavouring Salt (Salt, Flavour enhancer (E-621), Dextrose), Sugar, Spice (Paprika Powder, Cayenne Pepper Powder, Black Pepper), Vegetable Oil, Garlic Powder, Onion Powder, Natural Flavouring (Including Natural Smoke Flavouring, Wheat Flour Contains: Calcium Carbonate, Iron, Niacin, Thiamine), Herb (Parsley), Colour (E-160C Wheat Flour Contains: Calcium Carbonate, Iron, Niacin, Thiamine).",
    bolded: ["Wheat Flour"],
    allergens:
      "For allergens, including cereals containing gluten, see ingredients in bold. Factory also handles: Milk (Dairy), Mustard, Celery, Sulphur Dioxide.",
    method: "Sprinkle as per required flavour.",
  },
  { name: "Insane Hot Dusting", desc: "Reaper-grade. For the bravest menus only.", level: "🔥🔥🔥🔥🔥" },
];

const Nashville = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  return (
    <section id="nashville" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial-glow" />
      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="lg:order-2 relative">
            <img
              src={nashvilleImg.src}
              alt="Nashville hot fried chicken coated in deep red cayenne dry spice rub"
              loading="lazy"
              width={1280}
              height={1280}
              className="w-full aspect-square object-cover shadow-deep"
            />
          </div>

          <div className="lg:order-1">
            <span className="text-eyebrow text-secondary">03 · Nashville Dusting Series — Wholesale</span>
            <h2 className="text-display mt-4 text-5xl lg:text-7xl drop-shadow-sm">
              Bulk Nashville hot <br />
              <span className="gradient-text-ember">dusting blends.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Wholesale Nashville-style dry blends for foodservice operators —
              deep red, cayenne-forward, free-flowing. Use as a finishing dust,
              or convert into the iconic Nashville hot oil with a simple
              spice-to-oil ratio. Five calibrated heat tiers, 2 kg pouches,
              200 kg per pallet — distributor and contract-kitchen ready.
            </p>

            <div className="mt-6 inline-flex flex-wrap items-center gap-x-6 gap-y-2 bg-card border border-secondary/40 px-5 py-3">
              <span className="text-eyebrow text-secondary">Dry → Liquid</span>
              <span className="text-sm text-foreground"><span className="text-display gradient-text-ember">1:2</span> spice : hot frying oil → Nashville hot oil</span>
              <span className="text-sm text-foreground"><span className="text-display gradient-text-ember">1:0</span> dust straight on hot chicken</span>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4"
            >
              {dustings.map((n) => (
                <motion.div
                  variants={itemVariants}
                  key={n.name}
                  className="group bg-card border border-secondary/40 p-5 hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/20 hover:border-secondary/80 hover:bg-white/5 transition-all duration-300 cursor-default"
                >
                  <div className="text-xl group-hover:scale-110 transition-transform origin-left">{n.level}</div>
                  <div className="text-display text-base lg:text-lg mt-3 text-foreground leading-tight group-hover:text-secondary transition-colors duration-300">{n.name}</div>
                  <div className="text-xs lg:text-sm text-muted-foreground mt-2">{n.desc}</div>
                  {n.ingredients && (
                    <PackDetails
                      className="mt-4 pt-4 border-t border-secondary/40"
                      ingredients={n.ingredients}
                      bolded={n.bolded}
                      allergens={n.allergens}
                      method={n.method}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nashville;
