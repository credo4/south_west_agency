import logoSouthWest from "@/assets/logo-south-west.webp";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Variante d'affichage : sur fond clair ou sur fond bleu profond. */
  tone?: "dark" | "light";
};

/**
 * Logotype officiel de la charte (South West Agency).
 * Le fichier a un fond blanc opaque (pas de canal alpha) : sur fond clair
 * (`tone="dark"`, ex. le header) on l'affiche tel quel ; sur fond navy
 * (`tone="light"`, ex. le footer) on le pose sur une plaque blanche pour
 * éviter un rectangle blanc brut au rendu.
 */
export function Logo({ className, tone = "dark" }: LogoProps) {
  const img = (
    <img
      src={logoSouthWest}
      alt="South West Agency"
      width={202}
      height={50}
      decoding="async"
      className="h-8 w-auto md:h-9"
    />
  );

  if (tone === "light") {
    return (
      <span className={cn("inline-flex items-center rounded-md bg-background p-2", className)}>
        {img}
      </span>
    );
  }

  return <span className={cn("inline-flex items-center", className)}>{img}</span>;
}
