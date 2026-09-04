"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Brandmark from "./Brandmark";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
  };

  return (
    <footer className="relative bg-gradient-to-b from-background via-background/95 to-primary/5 pt-24 pb-12 border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-primary/10 rounded-[100%] blur-[130px] pointer-events-none" />

      <div className="container-x relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-8 pb-16 border-b border-white/10"
        >
          {/* Brand & Contact */}
          <motion.div variants={itemVariants} className="col-span-2 md:col-span-4 lg:col-span-4 pr-4">
            <Link href="/" className="inline-block group" aria-label="Crunch Foods home">
              <Brandmark withLogo size="text-2xl" />
            </Link>
            <p className="mt-6 text-muted-foreground leading-relaxed text-sm max-w-sm">
              Wholesale B2B manufacturer and supplier of premium fried chicken breading, peri peri marinations, and bespoke spice blends across the USA & Canada.
            </p>
          </motion.div>

          {/* Products */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-3 lg:col-start-6">
            <h3 className="text-foreground font-semibold uppercase tracking-wider text-xs mb-6 flex items-center gap-2">
              <span className="h-px w-4 bg-primary" /> Products
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Breading & Marinades", to: "/breading" },
                { label: "Peri Peri Series", to: "/peri-peri" },
                { label: "Nashville Hot", to: "/nashville" },
                { label: "Dipping Spices", to: "/dippings" },
                { label: "Honey Spice", to: "/honey-spice" },
                { label: "Chip Spice", to: "/chip-spice" },
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    href={link.to} 
                    className="text-muted-foreground text-sm hover:text-primary hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.4)] hover:translate-x-1 inline-flex items-center transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-2">
            <h3 className="text-foreground font-semibold uppercase tracking-wider text-xs mb-6 flex items-center gap-2">
              <span className="h-px w-4 bg-primary" /> Company
            </h3>
            <ul className="space-y-4">
              {[
                { label: "About Us", to: "/about" },
                { label: "Packaging & Private Label", to: "/packaging" },
                { label: "Wholesale & Samples", to: "/wholesale" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link 
                    href={link.to} 
                    className="text-muted-foreground text-sm hover:text-primary hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.4)] hover:translate-x-1 inline-flex items-center transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Socials & Newsletter */}
          <motion.div variants={itemVariants} className="col-span-2 md:col-span-4 lg:col-span-2 mt-4 lg:mt-0">
            <h3 className="text-foreground font-semibold uppercase tracking-wider text-xs mb-6 flex items-center gap-2">
              <span className="h-px w-4 bg-primary" /> Connect
            </h3>
            <Link 
              href="/wholesale" 
              className="group inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary hover:drop-shadow-[0_0_10px_rgba(251,146,60,0.6)] transition-all duration-300"
            >
              Partner with us 
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Crunch Foods. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors duration-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors duration-300">Terms of Service</Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

