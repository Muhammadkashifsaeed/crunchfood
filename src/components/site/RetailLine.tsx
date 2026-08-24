import periLemon from "@/assets/bottles/peri-lemon-herb-bottle.jpg";
import periMedium from "@/assets/bottles/peri-medium-bottle.jpg";
import periHot from "@/assets/bottles/peri-hot-bottle.jpg";
import dipChilliMint from "@/assets/bottles/dip-chilli-mint-jar.jpg";
import dipAlgerian from "@/assets/bottles/dip-algerian-jar.jpg";
import dipGarlicMayo from "@/assets/bottles/dip-garlic-mayo-jar.jpg";
import dipBurger from "@/assets/bottles/dip-burger-jar.jpg";
import dipPoutine from "@/assets/bottles/dip-poutine-jar.jpg";
import dipPeriPeri from "@/assets/bottles/dip-peri-peri-jar.jpg";
import { Button } from "@/components/ui/button";

const bottles = [
  { name: "Peri Peri Lemon & Herb", size: "250ml", note: "Bright, citrus-forward — the crowd-pleaser.", img: periLemon.src, accent: "from-yellow-400 to-amber-500" },
  { name: "Peri Peri Medium", size: "250ml", note: "Warm peri-peri kick, balanced spice.", img: periMedium.src, accent: "from-orange-400 to-red-500" },
  { name: "Peri Peri Hot", size: "250ml", note: "Serious heat for spice-lovers.", img: periHot.src, accent: "from-red-500 to-rose-700" },
];

const dips = [
  { name: "Chilli Mint", img: dipChilliMint.src, accent: "from-emerald-500 to-lime-400" },
  { name: "Algerian", img: dipAlgerian.src, accent: "from-amber-500 to-red-500" },
  { name: "Garlic Mayo", img: dipGarlicMayo.src, accent: "from-stone-100 to-stone-300" },
  { name: "Burger", img: dipBurger.src, accent: "from-orange-400 to-red-500" },
  { name: "Poutine", img: dipPoutine.src, accent: "from-amber-800 to-yellow-700" },
  { name: "Peri Peri", img: dipPeriPeri.src, accent: "from-red-500 to-orange-500" },
];

const RetailLine = () => {
  return (
    <section id="retail" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-eyebrow">07 · Retail Line — Direct-to-Consumer</span>
            <h2 className="text-display mt-4 text-4xl lg:text-6xl">
              Bottled & jarred. <br /><span className="gradient-text-ember">Built for the shelf.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-muted-foreground">
              The same foodservice flavors — now in retail-ready glass for
              e-commerce and specialty grocery. 250ml peri peri sauce bottles
              and 240ml dipping sauce jars in our signature matte-black and
              gold-foil livery.
            </p>
          </div>
        </div>

        {/* Peri Peri bottles */}
        <div className="mb-20">
          <div className="flex items-baseline justify-between mb-8">
            <h3 className="text-display text-2xl lg:text-3xl">Peri Peri Sauce — 250ml</h3>
            <span className="text-eyebrow">3 SKUs</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bottles.map((b, i) => (
              <article key={b.name} className="group bg-card border border-border hover:border-primary/40 transition-all overflow-hidden">
                <div className="relative aspect-square overflow-hidden bg-muted/20">
                  <div className={`absolute inset-0 bg-gradient-to-br ${b.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`} />
                  <img
                    src={b.img}
                    alt={`Crunch Foods ${b.name} 250ml retail bottle`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-display text-xl text-foreground">{b.name}</h4>
                    <span className="text-xs text-muted-foreground">0{i + 1}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{b.note}</p>
                  <div className="mt-4 text-eyebrow text-primary">{b.size} · Glass bottle</div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dipping jars */}
        <div>
          <div className="flex items-baseline justify-between mb-8">
            <h3 className="text-display text-2xl lg:text-3xl">Dipping Sauces — 240ml</h3>
            <span className="text-eyebrow">6 SKUs</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {dips.map((d) => (
              <article key={d.name} className="group bg-card border border-border hover:border-primary/40 transition-all overflow-hidden">
                <div className="relative aspect-square overflow-hidden bg-muted/20">
                  <div className={`absolute inset-0 bg-gradient-to-br ${d.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`} />
                  <img
                    src={d.img}
                    alt={`Crunch Foods ${d.name} 240ml dipping sauce jar`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-display text-base text-foreground leading-tight">{d.name}</h4>
                  <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">240ml jar</div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-card border border-primary/40 p-6">
          <div className="flex-1">
            <div className="text-eyebrow text-primary">Launch-ready packaging</div>
            <p className="text-sm text-foreground mt-2">
              All 9 retail SKUs share one cohesive design system — matte black labels,
              gold-foil typography and color-coded heat indicators. Ready for e-commerce
              photography, Amazon listings & specialty grocery shelves.
            </p>
          </div>
          <Button variant="ember" size="lg" asChild>
            <a href="/contact">Request retail samples →</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RetailLine;
