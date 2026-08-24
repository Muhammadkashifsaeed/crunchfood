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
    <section id="breading" className="relative py-24 lg:py-32 bg-background">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <img
            src={breadingImg.src}
            alt="Premium breading flour being dredged onto raw chicken pieces"
            loading="lazy"
            width={1280}
            height={1280}
            className="w-full aspect-square object-cover shadow-deep order-2 lg:order-1"
          />
        <div className="order-1 lg:order-2">
          <span className="text-eyebrow">01 · Wholesale Breading & Marinades</span>
          <h2 className="text-display mt-4 text-4xl lg:text-6xl">
            Five wholesale formulas. <br />
            <span className="gradient-text-ember">Built for foodservice scale.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Each blend is milled, seasoned and pressure-tested in commercial
            fryers, then packed in moisture-locked foodservice bags — ready
            for distributor and direct-to-kitchen freight.
          </p>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {breadings.map((b, i) => (
            <article
              key={b.name}
              itemScope
              itemType="https://schema.org/Product"
              className="group relative bg-card border border-border p-8 lg:p-10 hover:border-primary/50 transition-all duration-500 overflow-hidden"
            >
              <meta itemProp="name" content={b.name} />
              <meta itemProp="description" content={b.desc} />
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/0 group-hover:bg-primary/10 blur-3xl transition-all duration-700" />
              <div className="relative">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="text-display text-6xl text-primary/20 group-hover:text-primary/40 transition-colors">
                    0{i + 1}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {b.pack ?? "12.5 KG"}
                  </span>
                </div>
                <h3 className="text-display text-2xl lg:text-3xl text-foreground">{b.name}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{b.desc}</p>

                {b.ingredients && (
                  <PackDetails
                    className="mt-6 pt-6 border-t border-border"
                    ingredients={b.ingredients}
                    bolded={b.bolded}
                    allergens={b.allergens}
                    method={b.method}
                  />
                )}

                <div className="mt-6 pt-6 border-t border-border flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Best for</span>
                  <span className="text-sm text-foreground font-medium">{b.use}</span>
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
