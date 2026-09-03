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
    <section aria-labelledby="reassurance-title" className="bg-neutral-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="swa-kicker">06 — Nos exigences</p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            id="reassurance-title"
            className="mt-7 max-w-[22ch] font-display text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.05] font-bold text-ink"
          >
            Le niveau d'exigence que nous nous appliquons.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPES.map((p, i) => (
            <Reveal key={p.titre} delay={i * 60} className="bg-background p-8 md:p-9">
              <span className="font-display text-xs font-bold tracking-[0.16em] text-coral-strong">
                0{i + 1}
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{p.titre}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.texte}</p>
            </Reveal>
          ))}
        </div>

        {/* <Reveal delay={120}>
          <div className="mt-10 border border-dashed border-input bg-background p-8 md:p-10">
            <p className="swa-kicker">Emplacement témoignage</p>
            <p className="mt-5 max-w-[62ch] font-display text-xl leading-snug font-medium text-ink md:text-2xl">
              « Citation courte + identité + contexte » — à publier uniquement après validation du
              client concerné.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Aucun témoignage n'est actuellement documenté dans les sources de marque.
            </p>
          </div>
        </Reveal> */}
      </div>
    </section>
  );
}
