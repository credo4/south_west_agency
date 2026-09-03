import { Facebook, Instagram, Linkedin, TwitterX } from "react-bootstrap-icons";
import { Logo } from "@/components/Logo";

/**
 * Colonnes de navigation du footer (3 maximum). Regroupe les 6 ancres du
 * site (mêmes cibles que NAV_ITEMS du Header) sous 3 intitulés thématiques,
 * plutôt que de lister des pages qui n'existent pas encore (Équipe,
 * Carrières, Actualités…) — ce site est en une seule page.
 */
const FOOTER_COLUMNS = [
  {
    title: "Agence",
    links: [
      { href: "#agence", label: "Qui sommes-nous" },
      { href: "#methode", label: "Notre méthode" },
    ],
  },
  {
    title: "Expertises",
    links: [
      { href: "#expertises", label: "Nos expertises" },
      { href: "#realisations", label: "Réalisations" },
      { href: "#insights", label: "Insights" },
    ],
  },
  {
    title: "Contact",
    links: [{ href: "#contact", label: "Parlons de votre territoire" }],
  },
];

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
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-[1.3fr_1fr_1fr_1fr_auto] lg:items-start lg:gap-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Logo tone="light" />
            <p className="mt-6 max-w-[30ch] text-sm leading-relaxed text-ink-foreground/65">
              Le récit qui fait rayonner les territoires.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="font-display text-xs font-bold tracking-[0.16em] text-ink-foreground/50 uppercase">
                {col.title}
              </p>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="swa-link text-sm text-ink-foreground/75 transition-colors hover:text-ink-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
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
          <p>Mentions légales et politique de confidentialité — à publier avant mise en ligne.</p>
        </div>
      </div>
    </footer>
  );
}
