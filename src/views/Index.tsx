"use client";

import Link from "next/link";
import { ArrowRight, BadgeCheck, Truck, Boxes, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/site/PageLayout";
import Hero from "@/components/site/Hero";
import packagingImg from "@/assets/packaging.jpg";

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

const Index = () => {
  return (
    <PageLayout>
      <Hero />

      {/* Concept strip */}
      <section className="py-20 lg:py-28 bg-muted/20 border-y border-border/40">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <span className="text-eyebrow">The Crunch Foods system</span>
            <h2 className="text-display mt-4 text-3xl lg:text-5xl">
              One dry catalog. <br />
              <span className="gradient-text-ember">Every wet application.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { r: "1:3", l: "→ Wet marinade" },
              { r: "1:4", l: "→ Dipping sauce" },
              { r: "1:2", l: "→ Hot oil / honey drizzle" },
            ].map((x) => (
              <div key={x.r} className="bg-card border border-primary/40 p-6">
                <div className="text-display text-4xl gradient-text-ember">{x.r}</div>
                <div className="text-sm text-muted-foreground mt-2">{x.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product range */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <span className="text-eyebrow">Wholesale catalog</span>
              <h2 className="text-display mt-4 text-4xl lg:text-5xl">
                Six product series. <br /> Built for foodservice scale.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Every series is manufactured in HACCP-certified facilities,
              packed in branded foodservice formats, and ready for distributor
              warehouses or contract kitchens.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {series.map((s) => (
              <Link
                key={s.to}
                href={s.to}
                className="group relative bg-card border border-border p-8 hover:border-primary/60 transition-all overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-primary/0 group-hover:bg-primary/10 blur-3xl transition-all duration-700" />
                <div className="relative">
                  <span className="text-display text-5xl text-primary/20 group-hover:text-primary/50 transition-colors">
                    {s.n}
                  </span>
                  <h3 className="text-display text-2xl text-foreground mt-4">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                    View catalog <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging — enterprise teaser */}
      <section className="py-24 lg:py-32 bg-muted/20 border-y border-border/40">
        <div className="container-x grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-6 bg-gradient-ember opacity-15 blur-3xl" />
            <img
              src={packagingImg.src}
              alt="Branded Crunch Foods 12.5kg breading sacks and 2kg spice pouches stacked on a foodservice pallet"
              loading="lazy"
              width={1280}
              height={1280}
              className="relative w-full aspect-square object-cover shadow-deep"
            />
            <div className="absolute -bottom-6 -right-6 bg-background border border-primary px-6 py-4 shadow-ember hidden sm:block">
              <div className="text-eyebrow">Pallet-ready</div>
              <div className="text-display text-foreground text-xl mt-1">200 kg / pallet</div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-eyebrow">Packaging · Branding · Private label</span>
            <h2 className="text-display mt-4 text-4xl lg:text-5xl">
              Procurement-grade packaging, <br />
              <span className="gradient-text-ember">built for global brands.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Moisture-locked 12.5 kg kraft sacks. Resealable 2 kg foil pouches
              with oxygen barrier. Shrink-wrapped pallets with branded
              corner-boards and distributor receiving labels. Every unit ships
              with lot code, COA reference, allergen panel and QR traceability —
              the documentation enterprise procurement teams need to onboard a
              new supplier without friction.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Master-brand printing across the full range",
                "Private-label: your brand front, our certifications back",
                "Contract blending to your gold-standard recipe",
                "Containerised FOB or DDP shipping worldwide",
              ].map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <BadgeCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{b}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button variant="ember" size="lg" asChild>
                <Link href="/packaging">Explore Packaging & Private Label →</Link>
              </Button>
              <Button variant="outlineLight" size="lg" asChild>
                <Link href="/contact">Request Spec Sheet</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="py-20 bg-background">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {trust.map(({ icon: Icon, k, v }) => (
              <div key={k} className="bg-background p-8">
                <Icon className="h-6 w-6 text-primary" />
                <div className="text-display text-3xl text-foreground mt-4">{k}</div>
                <div className="text-sm text-muted-foreground mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-gradient-dark relative overflow-hidden border-t border-border/40">
        <div className="absolute inset-0 bg-gradient-radial-glow opacity-50 pointer-events-none" />
        <div className="container-x relative text-center max-w-3xl mx-auto">
          <span className="text-eyebrow">Ready to scale a flavor program?</span>
          <h2 className="text-display mt-4 text-4xl lg:text-6xl">
            Let's talk <span className="gradient-text-ember">wholesale.</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Distributor pricing, free samples, contract blending and private
            label — our wholesale desk responds within one business day.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Button variant="ember" size="xl" asChild>
              <Link href="/wholesale">Wholesale & Samples →</Link>
            </Button>
            <Button variant="outlineLight" size="xl" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <h1 className="sr-only">
        Crunch Foods — Wholesale Breading, Peri Peri Marinations, Nashville Hot, Honey Spice, Chip Spice & Dipping Blends for Foodservice
      </h1>
    </PageLayout>
  );
};

export default Index;
