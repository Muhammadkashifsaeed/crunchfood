"use client";

import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-chicken.jpg";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }
};

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-dark grain">
      {/* Image */}
      <motion.div 
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroImg.src}
          alt="Premium golden crispy fried chicken with steaming hot breading"
          width={1920}
          height={1080}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </motion.div>

      {/* Glow */}
      <div className="absolute top-1/4 right-0 h-[600px] w-[600px] rounded-full bg-primary/15 blur-[100px] animate-ember-pulse pointer-events-none" />

      <div className="relative container-x pt-40 pb-24 lg:pt-48 lg:pb-32 min-h-screen flex flex-col justify-center">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={{
            animate: { transition: { staggerChildren: 0.15 } }
          }}
          className="max-w-3xl"
        >
          <motion.span variants={fadeUp} className="text-eyebrow inline-flex items-center gap-3">
            <span className="h-px w-10 bg-primary/80" />
            Wholesale B2B Breading & Spice Supplier · USA & Canada
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-display mt-6 text-5xl sm:text-6xl lg:text-8xl text-foreground drop-shadow-lg">
            Bulk breading & <br />
            spice blends for <br />
            foodservice.
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Wholesale fried-chicken breading, peri peri dry marinations,
            Nashville hot dustings and honey spice blends — manufactured for
            ghost kitchens, QSR chains, foodservice distributors and private-label
            brands across the US & Canada. Bulk MOQs. Contract blending. Pallet-ready.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-5">
            <Button variant="ember" size="xl" asChild className="whitespace-nowrap">
              <a href="/contact">Request Wholesale Quote →</a>
            </Button>
            <Button variant="outlineLight" size="xl" asChild>
              <a href="/breading">View Product Range</a>
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-20 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { k: "12.5kg", v: "Breading bags" },
              { k: "2kg", v: "Spice packs" },
              { k: "B2B", v: "Bulk pricing" },
            ].map((s) => (
              <div key={s.k} className="border-l-2 border-primary/30 pl-5">
                <div className="text-display text-3xl gradient-text-ember">{s.k}</div>
                <div className="text-[11px] text-muted-foreground mt-2 uppercase tracking-widest font-medium">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-0 left-0 right-0 border-y border-white/5 bg-background/50 backdrop-blur-xl py-5 overflow-hidden"
      >
        <div className="flex animate-marquee whitespace-nowrap text-display text-2xl text-foreground/70">
          {Array(2).fill(0).map((_, i) => (
            <div key={i} className="flex items-center gap-16 pr-16">
              <span>PREMIUM BREADING</span><span className="text-primary/60">✦</span>
              <span>NASHVILLE HOT</span><span className="text-primary/60">✦</span>
              <span>PERI PERI</span><span className="text-primary/60">✦</span>
              <span>CRISPY WINGS</span><span className="text-primary/60">✦</span>
              <span>HOT DOUBLE</span><span className="text-primary/60">✦</span>
              <span>CHEF-CRAFTED</span><span className="text-primary/60">✦</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
