import breadingImg from "@/assets/breading.jpg";
import PackDetails, { PackSpec } from "./PackDetails";

type Breading = {
  name: string;
  desc: string;
  use: string;
  pack?: string;
} & Partial<PackSpec>;

const breadings: Breading[] = [
  {
    name: "Philadelphia Original Breading",
    desc: "An original wholesale breading for making fried chicken from 8- or 9-piece chicken. Balanced seasoning, exceptional adhesion, signature shatter — the bulk crust QSRs and ghost kitchens scale on.",
    use: "All-purpose fried chicken",
    ingredients:
      "Wheat Flour (Contains: Calcium Carbonate, Iron, Niacin, Thiamine), Maize Starch, Flavouring Salt (Salt, Flavour Enhancer (E-621)), Spice (Salt, Natural Flavouring, Celery, Black Pepper), Garlic Powder, Whey (Milk), Colour (E-100, E-160C).",
    bolded: ["Wheat Flour", "Celery", "Whey", "Milk"],
    allergens:
      "For allergens, including cereals containing gluten, see ingredients in bold. Factory also handles: Mustard, Sulphur Dioxide.",
    method:
      "Dredge moist chicken into the breading and mix well to coat thoroughly. Shake off excess breading and fry according to your deep fat fryer's recommended procedure.",
  },
  {
    name: "Crispy Wing Breading",
    desc: "Wholesale wing breading engineered for high-volume fryers. Lighter coating, maximum craggy texture, lasting crunch under heat lamps and delivery times. Designed to be paired with Crispy Spicy Marinade.",
    use: "Wings & tenders",
    ingredients:
      "Wheat Flour (Contains: Calcium Carbonate, Iron, Niacin, Thiamine), Wheat (Contains: Calcium Carbonate, Iron, Niacin, Thiamine), Raising Agents: Sodium Acid Pyrophosphate E450 (A), Sodium Bicarbonate E500 (B), Salt, Whey (Milk), Garlic Powder, Spice (Black Pepper), Colour (E-160C).",
    bolded: ["Wheat Flour", "Wheat", "Whey", "Milk"],
    allergens:
      "For allergens, including cereals containing gluten, see ingredients in bold. Factory also handles: Mustard, Celery, Sulphur Dioxide.",
    method:
      "Coat raw marinated chicken (with Crispy Wing Marinade) pieces with breading. Place the breaded chicken pieces in a long handle colander and dip in cold water. Dredge the moist chicken into the breading and mix well to cover the moist chicken thoroughly. Shake off excess breading and fry according to your deep fat fryer's recommended procedure.",
  },
  {
    name: "Hot Double Breading",
    desc: "A spice-forward double-coat formula for thicker, fiery, restaurant-grade crusts. Built for hot chicken sandwich programs, crispy hot wings, strips and burger patties.",
    use: "Hot chicken sandwiches",
    ingredients:
      "Wheat Flour (Calcium Carbonate, Iron, Niacin, Thiamin), Salt, Flavour Enhancer (E-621), Cayenne Pepper, Black Pepper, Garlic Powder, Paprika.",
    bolded: ["Wheat Flour"],
    allergens:
      "For allergens, including cereals containing gluten, see ingredients in bold. Factory also handles: Mustard, Celery, Dairy (Milk), Sulphur Dioxide.",
    method:
      "Coat raw chicken pieces with breading. Place the breaded chicken pieces in a long handle colander and dip in cold water. Dredge the moist chicken in to breading and mix well with breading to cover the moist chicken pieces thoroughly. Shake off excess breading and fry according to your deep fat fryer's recommended procedure.",
  },
  {
    name: "Original Breading",
    desc: "An original wholesale breading for making fried chicken from 8- or 9-piece chicken. Clean, savory, peppery — the reliable foodservice backbone for any fried chicken menu or contract kitchen.",
    use: "Classic fried chicken",
    ingredients:
      "Wheat Flour (Contains: Calcium Carbonate, Iron, Niacin, Thiamine), Flavouring Salt (Salt, Flavour enhancer (E-621)), Garlic Powder, Onion Powder, Spice (Black Pepper), Natural Flavouring (Including Wheat Flour Contains: Calcium Carbonate, Iron, Niacin, Thiamine, Celery).",
    bolded: ["Wheat Flour", "Celery"],
    allergens:
      "For allergens, including cereals containing gluten, see ingredients in bold. Factory also handles: Mustard, Fish, Eggs, Dairy (Milk), Sulphur Dioxide.",
    method:
      "Dredge the moist chicken in to breading and mix well with breading to cover the moist chicken pieces thoroughly. Shake off excess breading and fry according to your deep fat fryer's recommended procedure.",
  },
  {
    name: "Crispy Spicy Marinade",
    desc: "Wet wing marinade powder built to layer under Crispy Wing Breading for genuine hot-wing heat and flavour penetration. Hydrate, coat, hold, then bread and fry.",
    use: "Hot wing marinade",
    pack: "2 KG",
    ingredients:
      "Flavouring Salt (Salt, Flavour enhancer (E-621)), Spice (Cayenne Pepper Powder), Modified Starch (E-1422), Garlic Powder, Acid (E-330), Colour (E-160C Wheat Flour Contains: Calcium Carbonate, Iron, Niacin, Thiamine), Natural Flavouring (Including Wheat Flour Contains: Calcium Carbonate, Iron, Niacin, Thiamine).",
    bolded: ["Wheat Flour"],
    allergens:
      "For allergens, including cereals containing gluten, see ingredients in bold. Factory also handles: Mustard, Celery, Dairy (Milk), Sulphur Dioxide.",
    method:
      "1 kg chicken = 20 g marinade (add an extra 10 g for more heat and flavour). Mix raw damp chicken well with the marinade powder + 60 g of water and leave for 12–24 hours in the fridge prior to cooking.",
  },
];

const Breading = () => {
  return (
    <section id="breading" className="relative py-24 lg:py-36 bg-background">
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/4" />
      
      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="premium-image-wrap group order-2 lg:order-1">
            <img
              src={breadingImg.src}
              alt="Premium breading flour being dredged onto raw chicken pieces"
              loading="lazy"
              width={1280}
              height={1280}
              className="w-full aspect-[4/5] sm:aspect-square object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-eyebrow">01 · Wholesale Breading & Marinades</span>
            <h2 className="text-display mt-5 text-4xl lg:text-6xl drop-shadow-sm drop-shadow-sm">
              Five wholesale formulas. <br />
              <span className="gradient-text-ember">Built for foodservice scale.</span>
            </h2>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Each blend is milled, seasoned and pressure-tested in commercial
              fryers, then packed in moisture-locked foodservice bags — ready
              for distributor and direct-to-kitchen freight.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {breadings.map((b, i) => (
            <article
              key={b.name}
              itemScope
              itemType="https://schema.org/Product"
              className="group relative glass-card p-10 overflow-hidden hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(251,146,60,0.15)] hover:border-primary/30 transition-all duration-500 ease-out"
            >
              <meta itemProp="name" content={b.name} />
              <meta itemProp="description" content={b.desc} />
              <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-primary/0 group-hover:bg-primary/10 blur-[50px] transition-all duration-700 ease-out" />
              <div className="relative z-10">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="text-display text-6xl text-primary/10 group-hover:text-primary/30 transition-colors duration-500">
                    0{i + 1}
                  </span>
                  <span className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                    {b.pack ?? "12.5 KG"}
                  </span>
                </div>
                <h3 className="text-display text-3xl text-foreground group-hover:text-primary transition-colors duration-300">{b.name}</h3>
                <p className="mt-5 text-muted-foreground leading-relaxed text-base">{b.desc}</p>

                {b.ingredients && (
                  <PackDetails
                    className="mt-8 pt-8 border-t border-white/10"
                    ingredients={b.ingredients}
                    bolded={b.bolded}
                    allergens={b.allergens}
                    method={b.method}
                  />
                )}

                <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest text-muted-foreground font-semibold">Best for</span>
                  <span className="text-sm text-foreground font-medium tracking-wide">{b.use}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Breading;
