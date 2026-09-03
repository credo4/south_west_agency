import { Reveal } from "@/components/Reveal";

const PRINCIPES = [
  { titre: "Work first", texte: "Voir d'abord le travail et les cas." },
  { titre: "Point of view first", texte: "Défendre une conviction avant l'offre." },
  {
    titre: "Case studies deep",
    texte: "Raconter contexte, problème, approche, travail et résultat.",
  },
  { titre: "Distinctive voice", texte: "Développer une voix éditoriale propre." },
  { titre: "Proof without inflation", texte: "Ne publier que les preuves documentées." },
  { titre: "Conversion discreet", texte: "Insérer des CTA contextuels sans surcommercialiser." },
];

export function Reassurance() {
  return (
    <section aria-labelledby="reassurance-title" className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="swa-kicker text-ink-foreground/60">Nos exigences</p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            id="reassurance-title"
            className="mt-7 max-w-[22ch] font-display text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.05] font-bold text-ink-foreground"
          >
            Le niveau d'exigence que nous nous appliquons.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 divide-y divide-hairline sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
          {PRINCIPES.map((p, i) => (
            <Reveal key={p.titre} delay={i * 60} className="py-8 sm:px-8 sm:py-9">
              <span className="font-display text-xs font-bold tracking-[0.16em] text-coral-on-ink">
                0{i + 1}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink-foreground">{p.titre}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-muted">{p.texte}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
