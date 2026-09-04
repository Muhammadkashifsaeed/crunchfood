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
    <span className={cn("inline-flex items-center mr-20 lg:mr-28", className)}>
      <img
        src="/images/CRUNCH FOOD LOGO 3-03.png"
        alt="Crunch Foods logo"
        className="h-10 w-auto object-contain shrink-0 scale-[2.5] origin-left transform-gpu"
      />
    </span>
  );
};

export default Brandmark;
