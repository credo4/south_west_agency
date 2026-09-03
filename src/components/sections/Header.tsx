import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

export const NAV_ITEMS = [
  { href: "#agence", label: "Agence" },
  { href: "#expertises", label: "Expertises" },
  { href: "#methode", label: "Méthode" },
  { href: "#realisations", label: "Réalisations" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Renvoie le focus sur le bouton hamburger à chaque fermeture du menu
  // mobile (Échap, clic sur un lien, clic sur le CTA) : sans ça le focus
  // reste sur un élément devenu invisible.
  useEffect(() => {
    if (!open && wasOpen.current) {
      triggerRef.current?.focus();
    }
    wasOpen.current = open;
  }, [open]);

  // Échap ferme le menu ; tant qu'il est ouvert, Tab/Shift+Tab reste piégé
  // dans le header (logo, bouton fermer, nav mobile, CTA — soit tout ce qui
  // reste visible/interactif à l'écran).
  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      const header = headerRef.current;
      if (!header) return;
      const focusables = Array.from(
        header.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ).filter((el) => el.offsetParent !== null);
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!first || !last) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50">
      {/*
        Fond/bordure/ombre vivent ICI (sur la ligne de nav, pas sur <header>) :
        <header> ne fait qu'établir le stacking context fixed z-50. Si le fond
        blanc était sur <header>, il peindrait AVANT tous ses enfants positionnés
        (donc sous l'overlay mobile navy, quel que soit son z-index) — le
        wordmark navy deviendrait invisible sur navy une fois le menu ouvert.
      */}
      <div
        className={cn(
          "relative z-50 border-b bg-background transition-shadow duration-300",
          "border-[color-mix(in_oklch,var(--color-ink)_10%,transparent)]",
          scrolled &&
            "shadow-[0_1px_24px_-4px_color-mix(in_oklch,var(--color-ink)_18%,transparent)]",
        )}
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-10 lg:grid-cols-[auto_1fr_auto]">
          <a href="#top" className="min-w-0" aria-label="South West Agency — retour en haut">
            <Logo tone="dark" />
          </a>

          <nav aria-label="Navigation principale" className="hidden justify-center lg:flex">
            <ul className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="swa-nav-underline font-sans text-[0.8125rem] font-medium tracking-[0.08em] text-ink uppercase transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-end gap-5">
            <a
              href="#contact"
              className="hidden rounded-lg bg-coral-strong px-6 py-3 font-sans text-[0.75rem] font-bold tracking-[0.1em] text-coral-foreground uppercase transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 md:inline-flex"
            >
              Parlons de votre territoire
            </a>
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-border text-ink transition-colors hover:bg-neutral-surface lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile plein écran */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navigation"
        className={cn(
          "fixed inset-0 top-0 z-40 flex flex-col bg-ink px-6 pt-28 pb-10 transition-all duration-400 lg:hidden",
          open ? "visible opacity-100" : "pointer-events-none invisible opacity-0",
        )}
      >
        <nav aria-label="Navigation mobile" className="flex-1 overflow-y-auto">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item, i) => (
              <li key={item.href} className="border-b border-hairline">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-5 font-display text-3xl font-bold tracking-tight text-ink-foreground"
                >
                  <span className="mr-4 font-sans text-xs font-semibold text-coral-on-ink">
                    0{i + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="sticky bottom-0 mt-8 block rounded-lg bg-coral-strong px-6 py-5 text-center font-sans text-sm font-bold tracking-[0.1em] text-coral-foreground uppercase"
        >
          Parlons de votre territoire
        </a>
      </div>
    </header>
  );
}
