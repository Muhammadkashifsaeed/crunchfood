import spicesImg from "@/assets/spices-flatlay.jpg";

const markets = [
  {
    title: "Ghost Kitchens",
    desc: "Plug-and-play formulas that scale instantly across virtual brands without a chef on every line.",
  },
  {
    title: "Fried Chicken Brands",
    desc: "Signature crusts and proprietary blends — we'll co-develop a flavor profile that's exclusively yours.",
  },
  {
    title: "Catering Companies",
    desc: "Consistent results from 50 to 5,000 covers. Bulk pricing, reliable lead times, US & Canada delivery.",
  },
];

const Markets = () => {
  return (
    <section id="wholesale" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <img
              src={spicesImg.src}
              alt="Premium dry spices and breading flours arranged on slate"
              loading="lazy"
              width={1280}
              height={1280}
              className="w-full aspect-square object-cover shadow-deep"
            />
          </div>

          <div className="lg:col-span-7">
            <span className="text-eyebrow">05 · Built For Operators</span>
            <h2 className="text-display mt-4 text-4xl lg:text-5xl drop-shadow-sm">
              Wholesale partners across <span className="gradient-text-ember">USA & Canada.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              We supply the operators that power modern fried chicken — from
              30-location chains to first-day ghost kitchens.
            </p>

            <div className="mt-10 space-y-px bg-border">
              {markets.map((m, i) => (
                <div key={m.title} className="bg-background p-6 lg:p-8 hover:bg-card transition-colors group">
                  <div className="flex items-start gap-6">
                    <span className="text-display text-3xl text-primary/40 group-hover:text-primary transition-colors">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-display text-2xl text-foreground">{m.title}</h3>
                      <p className="text-muted-foreground mt-2">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Markets;
