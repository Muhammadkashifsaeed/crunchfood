import { ShieldCheck, Award, Leaf, Sparkles, BadgeCheck, FlaskConical, CheckCircle2, Globe } from "lucide-react";

const certs = [
  { icon: ShieldCheck, name: "HACCP", desc: "Hazard Analysis & Critical Control Points — process-level food safety on every batch." },
  { icon: Award, name: "FSSC 22000", desc: "GFSI-recognised food safety management system — manufacturing audited annually." },
  { icon: FlaskConical, name: "FDA Registered", desc: "Active Food Facility Registration under 21 CFR 1.230. Prior Notice filed for every US shipment." },
  { icon: BadgeCheck, name: "FSMA / FSVP", desc: "Foreign Supplier Verification Program dossier and PCQI hazard analysis on file for US importers." },
  { icon: Globe, name: "SFCR / CFIA", desc: "Safe Food for Canadians Regulations — Preventive Control Plan and bilingual EN/FR labeling." },
  { icon: CheckCircle2, name: "Halal & Kosher", desc: "Halal and Kosher supervision letters available on request for qualifying SKUs." },
  { icon: Leaf, name: "Non-GMO", desc: "Ingredients sourced from verified non-GMO supply streams. BSE/TSE-free declaration on file." },
  { icon: Sparkles, name: "Allergen Control", desc: "FALCPA + FASTER Act (sesame) and Health Canada priority allergen disclosures on every pack." },
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-24 lg:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-eyebrow">08 · Certifications</span>
            <h2 className="text-display mt-4 text-4xl lg:text-6xl">
              Audited, certified, <br />
              <span className="gradient-text-ember">trusted at scale.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Every batch is produced under internationally recognized food safety
            and quality certifications — the same standards demanded by global
            QSRs and supermarket chains.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {certs.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.name}
                className="group relative bg-card border border-border p-6 lg:p-7 hover:border-primary/50 transition-all"
              >
                <div className="h-11 w-11 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-gradient-ember group-hover:text-primary-foreground transition-all">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-display text-lg lg:text-xl text-foreground">
                  {c.name}
                </h3>
                <p className="text-xs lg:text-sm text-muted-foreground mt-2 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-sm text-muted-foreground text-center max-w-2xl mx-auto">
          Full certification documents and audit reports are available on
          request — just ask via the inquiry form.
        </p>
      </div>
    </section>
  );
};

export default Certifications;
