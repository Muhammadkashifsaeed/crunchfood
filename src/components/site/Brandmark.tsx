import { cn } from "@/lib/utils";
import logo from "@/assets/crunch-logo.png";

interface BrandmarkProps {
  className?: string;
  /** Show the logo mark before the wordmark */
  withLogo?: boolean;
  /** Tailwind text-size class for the wordmark (default: text-lg) */
  size?: string;
}

/**
 * Single source of truth for the "Crunch Foods" wordmark.
 * Use this everywhere the brand name appears as a visual element
 * (nav, footer, packaging callouts, etc.) so the lockup is identical.
 */
const Brandmark = ({
  className,
  withLogo = false,
  size = "text-lg",
}: BrandmarkProps) => {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {withLogo && (
        <img
          src={logo.src}
          alt="Crunch Foods logo"
          width={36}
          height={36}
          className="h-9 w-9 object-contain shrink-0"
        />
      )}
      <span className={cn("text-display text-foreground tracking-tight", size)}>
        Crunch <span className="text-primary">Foods</span>
      </span>
    </span>
  );
};

export default Brandmark;
