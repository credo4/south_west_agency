import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, TwitterX } from "react-bootstrap-icons";
import { Logo } from "@/components/Logo";
import { NAV_ITEMS } from "@/components/sections/Header";

// TODO : coordonnées à valider et renseigner avant publication.
const CONTACT = {
  email: "contact@southwestagency.fr",
  telephone: "+33 (0)5 00 00 00 00",
  adresse: "Adresse à renseigner avant publication",
};

// TODO : remplacer par les vraies URLs des comptes South West Agency avant publication.
const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/south-west-agency", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/southwestagency", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/southwestagency", icon: Facebook },
  { label: "X", href: "https://x.com/southwestagency", icon: TwitterX },
];

export function Footer() {
  return (
    <footer className="bg-ink pt-20 pb-10 text-ink-foreground">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-x-8 gap-y-12 md:grid-cols-[1.2fr_1fr_1fr_1fr] md:items-start">
          <div>
            <Logo tone="light" size="lg" />
          </div>

          <div>
            <p className="font-display text-xs font-bold tracking-[0.16em] text-ink-foreground/50 uppercase">
              Contact
            </p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="swa-link text-sm text-ink-foreground/75 transition-colors hover:text-ink-foreground"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.telephone.replace(/[^+\d]/g, "")}`}
                  className="swa-link text-sm text-ink-foreground/75 transition-colors hover:text-ink-foreground"
                >
                  {CONTACT.telephone}
                </a>
              </li>
              <li className="text-sm text-ink-foreground/50 italic">{CONTACT.adresse}</li>
            </ul>
          </div>

          <nav aria-label="Navigation">
            <p className="font-display text-xs font-bold tracking-[0.16em] text-ink-foreground/50 uppercase">
              Navigation
            </p>
            <ul className="mt-5 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="swa-link text-sm text-ink-foreground/75 transition-colors hover:text-ink-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-display text-xs font-bold tracking-[0.16em] text-ink-foreground/50 uppercase">
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
          <p className="flex items-center gap-2">
            <Link to="/mentions-legales" className="swa-link hover:text-ink-foreground">
              Mentions légales
            </Link>
            <span aria-hidden="true">—</span>
            <Link to="/politique-de-confidentialite" className="swa-link hover:text-ink-foreground">
              Politique de confidentialité
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
