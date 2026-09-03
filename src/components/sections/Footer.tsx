import { Logo } from "@/components/Logo";
import { NAV_ITEMS } from "@/components/sections/Header";

export function Footer() {
  return (
    <footer className="bg-ink pt-20 pb-10 text-ink-foreground">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-[36ch] text-sm leading-relaxed text-ink-foreground/65">
              Le récit qui fait rayonner les territoires, les leaders et les organisations qui
              changent le monde.
            </p>
          </div>

          <nav aria-label="Navigation secondaire">
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
              Contact
            </p>
            <ul className="mt-5 space-y-3 text-sm text-ink-foreground/65">
              <li>E-mail — à renseigner</li>
              <li>Téléphone — à renseigner</li>
              <li>Adresse — à confirmer</li>
            </ul>
            <a
              href="#contact"
              className="mt-7 inline-flex bg-coral-strong px-6 py-3 font-display text-[0.72rem] font-bold tracking-[0.08em] text-coral-foreground uppercase transition-transform duration-300 hover:-translate-y-0.5"
            >
              Échanger avec l'agence
            </a>
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
