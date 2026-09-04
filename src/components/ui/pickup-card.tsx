"use client";

import { useState } from "react";
import { Store, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function PickupCard({ className }: { className?: string }) {
  const [selected, setSelected] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div 
        onClick={() => setSelected(!selected)}
        className={cn(
          "relative cursor-pointer w-full rounded-2xl p-6 transition-all duration-500 ease-out border-2 overflow-hidden",
          selected 
            ? "border-primary bg-primary/10 shadow-[0_8px_30px_rgba(251,146,60,0.25)] scale-[1.02]" 
            : "border-white/10 bg-background/50 hover:border-white/20 hover:bg-background/80 hover:shadow-lg",
          className
        )}
      >
      <div className="relative z-10 flex items-start justify-between">
        <div className={cn(
          "p-3 rounded-xl transition-all duration-500",
          selected ? "bg-primary text-white shadow-lg shadow-primary/40 scale-110" : "bg-white/5 text-muted-foreground"
        )}>
          <Store className="w-6 h-6" />
        </div>
        
        <div className={cn(
          "transition-all duration-500 transform-gpu",
          selected ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-50 -rotate-45"
        )}>
          <CheckCircle2 className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(251,146,60,0.5)]" />
        </div>
      </div>

      <div className="relative z-10 mt-6">
        <h3 className={cn(
          "text-xl font-semibold tracking-tight transition-colors duration-300",
          selected ? "text-foreground" : "text-muted-foreground"
        )}>
          Store Pickup
        </h3>
        <p className={cn(
          "mt-2 text-sm leading-relaxed transition-colors duration-300",
          selected ? "text-foreground/80" : "text-muted-foreground"
        )}>
          Pick up your order directly from our location. Save on shipping costs and get your products instantly.
        </p>
      </div>

      {/* Background glow effects for active state */}
      <div className={cn(
        "absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/15 via-transparent to-transparent pointer-events-none transition-opacity duration-500",
        selected ? "opacity-100" : "opacity-0"
      )} />
      
      {/* Premium top border highlight */}
      <div className={cn(
        "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-opacity duration-500",
        selected ? "opacity-100" : "opacity-0"
      )} />
      </div>

      <div 
        className={cn(
          "transition-all duration-500 overflow-hidden",
          selected ? "max-h-24 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
        )}
      >
        <Button variant="ember" size="xl" className="w-full rounded-xl" asChild>
          <a href="/contact">Continue to Order &rarr;</a>
        </Button>
      </div>
    </div>
  );
}
