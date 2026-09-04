import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, TwitterX } from "react-bootstrap-icons";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

// TODO : coordonnées à valider avant publication.
const CONTACT = {
  email: "contact@southwestagency.fr",
  telephone: "+33 (0)5 00 00 00 00",
};

const NAVIGATION_LINKS = [
  { href: "/#agence", label: "L'Agence" },
  { href: "/#expertises", label: "Nos Services" },
  { href: "/#realisations", label: "Réalisations" },
];

// TODO : remplacer par les vraies URLs des comptes South West Agency avant publication.
const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/south-west-agency", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/southwestagency", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/southwestagency", icon: Facebook },
  { label: "X", href: "https://x.com/southwestagency", icon: TwitterX },
];

const linkClass = "text-sm text-ink-foreground/75 transition-colors hover:text-ink-foreground";

export function Footer() {
  return (
    <footer className="bg-ink pt-20 pb-10 text-ink-foreground">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-[1.2fr_1fr_1fr_1fr] md:items-start">
          <div>
            <Logo tone="light" size="lg" />
            <div className="mt-6 space-y-2">
              <a href={`mailto:${CONTACT.email}`} className={cn("block", linkClass)}>
                {CONTACT.email}
              </a>
              <a
                href={`tel:${CONTACT.telephone.replace(/[^+\d]/g, "")}`}
                className={cn("block", linkClass)}
              >
                {CONTACT.telephone}
              </a>
            </div>
          </div>

          <nav aria-label="Navigation">
            <p className="font-display text-xs font-bold tracking-[0.16em] text-ink-foreground uppercase">
              Navigation
            </p>
            <ul className="mt-5 space-y-3">
              {NAVIGATION_LINKS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Liens utiles">
            <p className="font-display text-xs font-bold tracking-[0.16em] text-ink-foreground uppercase">
              Liens utiles
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <a href="/#methode" className={linkClass}>
                  Méthode
                </a>
              </li>
              <li>
                <a href="/#insights" className={linkClass}>
                  Insights
                </a>
              </li>
              <li>
                <Link to="/politique-de-confidentialite" className={linkClass}>
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="font-display text-xs font-bold tracking-[0.16em] text-ink-foreground uppercase">
              Suivez-nous
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-ink-foreground/30 text-ink-foreground transition-colors hover:border-ink-foreground hover:bg-ink-foreground hover:text-ink"
                >
                  <social.icon aria-hidden="true" size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ink-foreground/15 pt-8 text-xs text-ink-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} South West Agency. Tous droits réservés.</p>
          <Link to="/mentions-legales" className="hover:text-ink-foreground">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
