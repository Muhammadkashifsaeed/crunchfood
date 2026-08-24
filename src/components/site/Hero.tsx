import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-chicken.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-dark grain">
      {/* Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg.src}
          alt="Premium golden crispy fried chicken with steaming hot breading"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Glow */}
      <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl animate-ember-pulse" />

      <div className="relative container-x pt-40 pb-24 lg:pt-48 lg:pb-32 min-h-screen flex flex-col justify-center">
        <div className="max-w-3xl animate-float-up">
          <span className="text-eyebrow inline-flex items-center gap-2">
            <span className="h-px w-8 bg-primary" />
            Wholesale B2B Breading & Spice Supplier · USA & Canada
          </span>
          <h1 className="text-display mt-6 text-5xl sm:text-6xl lg:text-8xl text-foreground">
            Bulk breading & <br />
            spice blends for <br />
            foodservice.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Wholesale fried-chicken breading, peri peri dry marinations,
            Nashville hot dustings and honey spice blends — manufactured for
            ghost kitchens, QSR chains, foodservice distributors and private-label
            brands across the US & Canada. Bulk MOQs. Contract blending. Pallet-ready.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="ember" size="xl" asChild>
              <a href="/contact">Request Wholesale Quote →</a>
            </Button>
            <Button variant="outlineLight" size="xl" asChild>
              <a href="/breading">View Product Range</a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
            {[
              { k: "12.5kg", v: "Breading bags" },
              { k: "2kg", v: "Spice packs" },
              { k: "B2B", v: "Bulk pricing" },
            ].map((s) => (
              <div key={s.k} className="border-l border-primary/40 pl-4">
                <div className="text-display text-2xl gradient-text-ember">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-y border-border/50 bg-background/60 backdrop-blur-sm py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap text-display text-2xl text-foreground/80">
          {Array(2).fill(0).map((_, i) => (
            <div key={i} className="flex items-center gap-12 pr-12">
              <span>PREMIUM BREADING</span><span className="text-primary">✦</span>
              <span>NASHVILLE HOT</span><span className="text-primary">✦</span>
              <span>PERI PERI</span><span className="text-primary">✦</span>
              <span>CRISPY WINGS</span><span className="text-primary">✦</span>
              <span>HOT DOUBLE</span><span className="text-primary">✦</span>
              <span>CHEF-CRAFTED</span><span className="text-primary">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
