import { Search, MapPin, MessageCircle, Radio, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Icônes de marque — lucide-react (cohérent avec le reste du site : Header,
 * Expertises, CtaBand), navy par défaut. Réutilisées entre le bandeau
 * piliers du Hero et les étapes de la section Méthode.
 */

export function ArrowIcon({ className }: { className?: string }) {
  return <ArrowUpRight aria-hidden="true" strokeWidth={1.75} className={className} />;
}

export function SearchIcon({ className }: { className?: string }) {
  return (
    <Search
      aria-hidden="true"
      strokeWidth={1.5}
      className={cn("h-8 w-8 shrink-0 text-ink", className)}
    />
  );
}

export function PinIcon({ className }: { className?: string }) {
  return (
    <MapPin
      aria-hidden="true"
      strokeWidth={1.5}
      className={cn("h-8 w-8 shrink-0 text-ink", className)}
    />
  );
}

export function BubbleIcon({ className }: { className?: string }) {
  return (
    <MessageCircle
      aria-hidden="true"
      strokeWidth={1.5}
      className={cn("h-8 w-8 shrink-0 text-ink", className)}
    />
  );
}

export function WavesIcon({ className }: { className?: string }) {
  return (
    <Radio
      aria-hidden="true"
      strokeWidth={1.5}
      className={cn("h-8 w-8 shrink-0 text-ink", className)}
    />
  );
}
