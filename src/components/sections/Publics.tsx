import { Reveal } from "@/components/Reveal";

const PUBLICS = [
  { titre: "Collectivité", texte: "Rendre un projet lisible et fédérateur." },
  { titre: "Entreprise", texte: "Mieux s'ancrer et dialoguer avec l'écosystème." },
  { titre: "Leader", texte: "Porter une vision et une parole plus fortes." },
  { titre: "Prescripteur / partenaire", texte: "Évaluer le niveau de conseil et les preuves." },
];

export function Publics() {
  return (
    <section aria-labelledby="publics-title" className="bg-background py-12 md:py-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="swa-kicker">Pour qui</p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            id="publics-title"
            className="mt-7 max-w-[20ch] font-display text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.05] font-bold text-ink"
          >
            Quatre visiteurs. Quatre questions. Une même destination.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PUBLICS.map((p, i) => (
            <Reveal
              key={p.titre}
              delay={i * 80}
              className="group rounded-lg border border-border bg-background p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ink hover:bg-ink hover:shadow-lg md:p-10"
            >
              <span className="font-display text-xs font-bold tracking-[0.16em] text-coral-strong">
                0{i + 1}
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-ink transition-colors duration-500 group-hover:text-ink-foreground md:text-2xl">
                {p.titre}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-500 group-hover:text-ink-foreground/70">
                {p.texte}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
