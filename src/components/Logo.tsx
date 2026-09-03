import logoSouthWest from "@/assets/logo-south-west.webp";
import logoSouthWestFooter from "@/assets/logo-south-west-footer.webp";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Variante d'affichage : sur fond clair ou sur fond bleu profond. */
  tone?: "dark" | "light";
};

/**
 * Logotype officiel de la charte (South West Agency).
 * - `tone="dark"` (ex. le header, fond clair) : version standard, fond blanc opaque.
 * - `tone="light"` (ex. le footer, fond navy) : version blanche à fond
 *   transparent dédiée, posée directement sur le navy sans plaque.
 */
export function Logo({ className, tone = "dark" }: LogoProps) {
  const img =
    tone === "light" ? (
      <img
        src={logoSouthWestFooter}
        alt="South West Agency"
        width={4096}
        height={1014}
        decoding="async"
        className="h-8 w-auto md:h-9"
      />
    ) : (
      <img
        src={logoSouthWest}
        alt="South West Agency"
        width={202}
        height={50}
        decoding="async"
        className="h-8 w-auto md:h-9"
      />
    );

  return <span className={cn("inline-flex items-center", className)}>{img}</span>;
}
