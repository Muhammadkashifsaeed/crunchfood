"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, Truck, Boxes, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/site/PageLayout";
import Hero from "@/components/site/Hero";
import packagingImg from "@/assets/packaging.jpg";
import { motion } from "framer-motion";

const series = [
  { to: "/breading", n: "01", title: "Breading & Marinades", desc: "Five fryer-tested coatings in 12.5 kg foodservice bags." },
  { to: "/peri-peri", n: "02", title: "Peri Peri Series", desc: "Eight dry blends — wet marinade, basting & table sauce in one." },
  { to: "/nashville", n: "03", title: "Nashville Hot Dustings", desc: "Five calibrated heat tiers, finishing dust or hot oil." },
  { to: "/dippings", n: "04", title: "Dipping Spice Blends", desc: "Six dry blends — convert into creamy dips, glazes or marinades." },
  { to: "/honey-spice", n: "05", title: "Honey Spice Series", desc: "Hot-honey, engineered as three free-flowing dry blends." },
  { to: "/chip-spice", n: "06", title: "Chip Spice Series", desc: "Five finishing dusts for fries, popcorn & snack programs." },
];

const trust = [
  { icon: Boxes, k: "200 kg", v: "per pallet · 2 kg pouches" },
  { icon: Truck, k: "FOB / DDP", v: "Containers across US, Canada & 12+ markets" },
  { icon: BadgeCheck, k: "FDA + SFCR", v: "FSSC 22000 · lot, COA & allergen panel" },
  { icon: Globe2, k: "5–10 days", v: "Stock SKU lead time ex-works" },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
};

const Index = () => {
  return (
    <PageLayout>
      <Hero />

      {/* Concept strip */}
      <section className="py-24 lg:py-32 bg-card relative overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50 pointer-events-none" />
        <div className="container-x relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <span className="text-eyebrow">The Crunch Foods system</span>
            <h2 className="text-display mt-5 text-4xl lg:text-6xl drop-shadow-sm drop-shadow-sm">
              One dry catalog. <br />
              <span className="gradient-text-ember">Every wet application.</span>
            </h2>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5"
          >
            {[
              { r: "1:3", l: "→ Wet marinade" },
              { r: "1:4", l: "→ Dipping sauce" },
              { r: "1:2", l: "→ Hot oil / honey drizzle" },
            ].map((x) => (
              <motion.div variants={fadeUpItem} key={x.r} className="glass-card p-8 rounded-2xl group hover:-translate-y-2 hover:border-primary/40 hover:bg-white/5 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-default">
                <div className="text-display text-5xl gradient-text-ember group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(251,146,60,0.5)] transition-all duration-500 origin-left">{x.r}</div>
                <div className="text-sm text-muted-foreground mt-4 font-medium tracking-wide uppercase group-hover:text-primary transition-colors duration-300">{x.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product range */}
      <section className="py-24 lg:py-36 bg-background relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="container-x relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16"
          >
            <div className="max-w-2xl">
              <span className="text-eyebrow">Wholesale catalog</span>
              <h2 className="text-display mt-5 text-4xl lg:text-6xl drop-shadow-sm">
                Six product series. <br /> Built for foodservice scale.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground text-lg">
              Every series is manufactured in HACCP-certified facilities,
              packed in branded foodservice formats, and ready for distributor
              warehouses or contract kitchens.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {series.map((s) => (
              <motion.div variants={fadeUpItem} key={s.to}>
                <Link
                  href={s.to}
                  className="group relative block glass-card p-10 h-full overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/50 hover:bg-white/5 transition-all duration-500"
                >
                  <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/0 group-hover:bg-primary/20 group-hover:scale-150 blur-[50px] transition-all duration-700 ease-out" />
                  <div className="relative z-10 flex flex-col h-full">
                    <span className="text-display text-6xl text-primary/10 group-hover:text-primary/40 group-hover:scale-110 group-hover:-translate-y-2 origin-top-left transition-all duration-500 ease-out">
                      {s.n}
                    </span>
                    <h3 className="text-display text-3xl text-foreground mt-6 group-hover:text-primary transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-base text-muted-foreground leading-relaxed flex-1">
                      {s.desc}
                    </p>
                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300">
                      View catalog <ArrowRight className="h-5 w-5 group-hover:translate-x-3 transition-transform duration-500" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Packaging — enterprise teaser */}
      <section className="py-24 lg:py-36 bg-card relative border-y border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 to-transparent pointer-events-none" />
        <div className="container-x relative grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -inset-10 bg-gradient-ember opacity-10 blur-[80px]" />
            <div className="premium-image-wrap group">
              <img
                src={packagingImg.src}
                alt="Branded Crunch Foods 12.5kg breading sacks and 2kg spice pouches stacked on a foodservice pallet"
                loading="lazy"
                width={1280}
                height={1280}
                className="relative w-full aspect-[4/5] sm:aspect-square object-cover"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-8 -right-8 glass p-6 shadow-ember-sm hidden sm:block rounded-2xl"
            >
              <div className="text-eyebrow">Pallet-ready</div>
              <div className="text-display text-foreground text-2xl mt-2">200 kg / pallet</div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <span className="text-eyebrow">Packaging · Branding · Private label</span>
            <h2 className="text-display mt-5 text-4xl lg:text-6xl drop-shadow-sm">
              Procurement-grade packaging, <br />
              <span className="gradient-text-ember">built for global brands.</span>
            </h2>
            <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
              Moisture-locked 12.5 kg kraft sacks. Resealable 2 kg foil pouches
              with oxygen barrier. Shrink-wrapped pallets with branded
              corner-boards and distributor receiving labels. Every unit ships
              with lot code, COA reference, allergen panel and QR traceability —
              the documentation enterprise procurement teams need to onboard a
              new supplier without friction.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Master-brand printing across the full range",
                "Private-label: your brand front, our certifications back",
                "Contract blending to your gold-standard recipe",
                "Containerised FOB or DDP shipping worldwide",
              ].map((b) => (
                <div key={b} className="flex items-start gap-4">
                  <BadgeCheck className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-base text-foreground/90">{b}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col w-full sm:w-[380px] gap-4">
              <Button variant="ember" size="xl" className="w-full" asChild>
                <Link href="/packaging">Explore Packaging & Private Label →</Link>
              </Button>
              <Button variant="outlineLight" size="xl" className="w-full" asChild>
                <Link href="/contact">Request Spec Sheet</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-24 bg-background">
        <div className="container-x">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {trust.map(({ icon: Icon, k, v }) => (
              <motion.div variants={fadeUpItem} key={k} className="glass-card p-8 lg:p-10 rounded-2xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/40 hover:bg-white/5 transition-all duration-500 group cursor-default">
                <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-gradient-ember transition-all duration-500 shadow-lg shadow-transparent group-hover:shadow-primary/30">
                  <Icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                </div>
                <div className="text-display text-3xl lg:text-4xl text-foreground group-hover:text-primary transition-colors duration-300">{k}</div>
                <div className="text-sm text-muted-foreground mt-3 leading-relaxed uppercase tracking-wide">{v}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 lg:py-48 bg-gradient-dark relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-radial-glow opacity-60 pointer-events-none mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="container-x relative text-center max-w-4xl mx-auto"
        >
          <span className="text-eyebrow">Ready to scale a flavor program?</span>
          <h2 className="text-display mt-6 text-5xl lg:text-7xl drop-shadow-sm drop-shadow-md">
            Let's talk <span className="gradient-text-ember">wholesale.</span>
          </h2>
          <p className="mt-8 text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto">
            Distributor pricing, free samples, contract blending and private
            label — our wholesale desk responds within one business day.
          </p>
          <div className="mt-12 flex flex-wrap gap-5 justify-center">
            <Button variant="ember" size="xl" asChild className="whitespace-nowrap">
              <Link href="/wholesale">Wholesale & Samples →</Link>
            </Button>
            <Button variant="outlineLight" size="xl" asChild className="whitespace-nowrap">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      <h1 className="sr-only">
        Crunch Foods — Wholesale Breading, Peri Peri Marinations, Nashville Hot, Honey Spice, Chip Spice & Dipping Blends for Foodservice
      </h1>
    </PageLayout>
  );
};

export default Index;
