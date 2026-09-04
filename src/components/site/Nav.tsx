"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Brandmark from "./Brandmark";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const links = [
  { to: "/breading", label: "Breading" },
  { to: "/peri-peri", label: "Peri Peri" },
  { to: "/nashville", label: "Nashville" },
  { to: "/dippings", label: "Dippings" },
  { to: "/honey-spice", label: "Honey Spice" },
  { to: "/chip-spice", label: "Chip Spice" },
  { to: "/packaging", label: "Packaging" },
  { to: "/wholesale", label: "Wholesale" },
  { to: "/about", label: "About" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)] transition-all duration-300">
      <div className="container-x flex items-center justify-between py-2.5">
        <Link href="/" className="group" aria-label="Crunch Foods home">
          <Brandmark withLogo size="text-lg" />
        </Link>

        <nav className="hidden xl:flex items-center gap-4 text-[13px] tracking-tight text-muted-foreground whitespace-nowrap">
          {links.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className={`transition-all duration-300 font-medium ${
                pathname === l.to 
                  ? "text-primary drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]" 
                  : "hover:text-primary hover:drop-shadow-[0_0_8px_rgba(251,146,60,0.3)]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:flex items-center gap-3 whitespace-nowrap shrink-0">
          <Button variant="ember" size="default" asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="xl:hidden h-10 w-10 inline-flex items-center justify-center text-foreground"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-white/10 bg-background">
          <div className="container-x py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                href={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-foreground border-b border-white/10"
              >
                {l.label}
              </Link>
            ))}
            <Button variant="ember" size="lg" className="mt-3" asChild>
              <Link href="/contact" onClick={() => setOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
