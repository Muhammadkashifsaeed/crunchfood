import packagingImg from "@/assets/packaging.jpg";
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const specs = [
  { k: "12.5 KG", v: "Breading bags", d: "Moisture-locked, food-grade kraft. Stackable for cold storage. Front-printed Crunch Foods master brand." },
  { k: "2 KG", v: "Spice & marinade pouches", d: "Resealable matte foil with oxygen barrier. Crunch Foods logo, SKU name & batch panel printed on every pouch." },
  { k: "Pallet", v: "Bulk-ready", d: "Shrink-wrapped pallets with branded Crunch Foods corner-boards & pallet labels for distributor receiving." },
];

const brandingPoints = [
  "Crunch Foods master logo printed on every bag, pouch & carton",
  "Consistent ember-orange brand system across all SKUs (breading, peri peri, Nashville, dippings, honey spice)",
  "Lot code, COA reference, allergen panel & QR traceability on every pack",
  "Private-label option: your brand on the front, Crunch Foods certified on the back",
];

const Packaging = () => {
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
    <section id="packaging" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-ember opacity-10 blur-3xl" />
            <img
              src={packagingImg.src}
              alt="Wholesale 12.5kg Philadelphia Premium Breading bag and 2kg Peri Peri spice pouch packaging"
              loading="lazy"
              width={1280}
              height={1280}
              className="relative w-full aspect-square object-cover shadow-deep"
            />
          </div>

          <div>
            <span className="text-eyebrow">06 · Packaging & Branding</span>
            <h2 className="text-display mt-4 text-4xl lg:text-5xl drop-shadow-sm">
              Every pack carries the <span className="gradient-text-ember">Crunch Foods</span> mark.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              From 12.5 kg breading sacks to 2 kg spice pouches and full pallets —
              every unit ships with the Crunch Foods master brand front-and-center.
              One identity across the entire range, so distributors, chefs and
              guests recognize the source of the flavor.
            </p>

            <div className="mt-8 bg-card border border-primary/40 p-5 space-y-3">
              {brandingPoints.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <BadgeCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{b}</span>
                </div>
              ))}
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="mt-8 space-y-4"
            >
              {specs.map((s) => (
                <motion.div 
                  variants={itemVariants}
                  key={s.k} 
                  className="group flex gap-5 p-5 glass-card hover:-translate-y-1 hover:border-primary/40 hover:bg-white/5 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-default"
                >
                  <div className="text-display text-2xl gradient-text-ember w-24 shrink-0 group-hover:scale-110 transition-transform origin-left">{s.k}</div>
                  <div>
                    <div className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">{s.v}</div>
                    <div className="text-sm text-muted-foreground mt-1">{s.d}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <Button variant="ember" size="lg" className="mt-8" asChild>
              <a href="/contact">Request Spec Sheet →</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packaging;
