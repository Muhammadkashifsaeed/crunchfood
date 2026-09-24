import { Button } from "@/components/ui/button";
import { CheckCircle2, Truck, Package, FlaskConical, DollarSign, Clock } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const personas = [
  {
    title: "Ghost Kitchens & Virtual Brands",
    cities: "NYC · LA · Toronto · Chicago · Miami",
    pain: "Need consistent breading & Nashville heat across multi-brand menus.",
    offer: "Free 2kg sample kit + private-label spec sheet.",
  },
  {
    title: "QSR & Fried Chicken Chains",
    cities: "USA & Canada — multi-unit operators",
    pain: "Scaling Nashville Hot, Peri Peri or Honey Spice LTOs nationwide.",
    offer: "Pallet-tier pricing & DC-direct shipping to US/Canada hubs.",
  },
  {
    title: "Foodservice Distributors",
    cities: "US Foods · Sysco · GFS · Sygma networks",
    pain: "Looking for high-margin breading & spice SKUs to add to the book.",
    offer: "Distributor pricing, EDI-ready packs, co-branded sell sheets.",
  },
  {
    title: "Private Label & Co-Manufacturing",
    cities: "DTC hot-honey, dry-rub & breading brands",
    pain: "Need a contract blender with formulation + 12.5kg / 2kg packing.",
    offer: "NDA + custom formulation in 2–3 weeks, MOQ from 1 pallet.",
  },
];

const incentives = [
  { icon: FlaskConical, k: "Free Samples", v: "2kg test packs to qualified US & Canada operators" },
  { icon: DollarSign, k: "Pallet Pricing", v: "Tiered B2B rates from 1 pallet (200kg+)" },
  { icon: Truck, k: "DC-Direct Shipping", v: "FOB & DDP options to US & Canadian distribution centers" },
  { icon: Package, k: "Private Label", v: "Custom formulation, packaging & co-manufacturing" },
  { icon: Clock, k: "24h Quote SLA", v: "Wholesale quotes returned in under 24 hours" },
  { icon: CheckCircle2, k: "Spec-Sheet Ready", v: "Full COA, allergen, nutrition & kosher/halal docs on request" },
];

const LeadGen = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="leadgen" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[400px] w-[800px] bg-primary/10 blur-3xl" />
      <div className="container-x relative">
        <div className="max-w-3xl">
          <span className="text-eyebrow inline-flex items-center gap-2">
            <span className="h-px w-8 bg-primary" />
            Wholesale Buyers · USA & Canada
          </span>
          <h2 className="text-display mt-6 text-4xl lg:text-6xl drop-shadow-sm">
            Built for US & Canadian <br />
            <span className="gradient-text-ember">foodservice buyers.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Whether you operate a 50-unit QSR chain in Texas, run virtual brands out of Toronto,
            or distribute spice SKUs across the Midwest — we ship pallet-ready breading,
            peri peri marinations, Nashville hot dustings, dipping rubs and honey spice blends
            from our facility directly to your DC.
          </p>
        </div>

        {/* Personas */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {personas.map((p) => (
            <motion.div
              variants={itemVariants}
              key={p.title}
              className="group glass-card p-7 hover:border-primary/40 hover:bg-white/5 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-default"
            >
              <div className="text-eyebrow text-primary/80 group-hover:text-primary transition-colors duration-300">{p.cities}</div>
              <h3 className="text-display mt-3 text-2xl text-foreground group-hover:text-primary transition-colors duration-300">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{p.pain}</p>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.8)] transition-all duration-300" />
                <span className="text-foreground">{p.offer}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Incentives */}
        <div className="mt-20">
          <h3 className="text-display text-2xl lg:text-3xl text-foreground">
            Why US & Canada operators source from us
          </h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {incentives.map(({ icon: Icon, k, v }) => (
              <motion.div 
                variants={itemVariants}
                key={k} 
                className="group flex items-start gap-4 p-5 border border-white/10 bg-card hover:bg-white/5 hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-default"
              >
                <span className="h-10 w-10 rounded-full bg-primary/15 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(251,146,60,0.5)] transition-all duration-500 ease-out">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-foreground font-medium group-hover:text-primary transition-colors duration-300">{k}</div>
                  <div className="text-sm text-muted-foreground mt-1">{v}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-ember p-8 lg:p-12 shadow-ember flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-display text-3xl lg:text-4xl text-primary-foreground">
              Claim your free US/Canada sample kit.
            </h3>
            <p className="mt-3 text-primary-foreground/90">
              2kg pro-pack samples shipped to qualified operators across the US & Canada.
              No commitments — taste, test, then quote.
            </p>
          </div>
          <div className="flex flex-col w-full sm:w-auto min-w-[240px] gap-3">
            <Button variant="outlineLight" size="xl" asChild className="w-full whitespace-nowrap bg-background/10 border-primary-foreground text-primary-foreground hover:bg-background hover:text-foreground">
              <a href="/wholesale#samples">Request Samples &rarr;</a>
            </Button>
            <Button variant="outlineLight" size="xl" asChild className="w-full whitespace-nowrap bg-background/10 border-primary-foreground text-primary-foreground hover:bg-background hover:text-foreground">
              <a href="/contact">Get Pallet Pricing</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadGen;
