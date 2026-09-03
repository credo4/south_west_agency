import cas01 from "@/assets/cas-01.jpg";
import cas02 from "@/assets/cas-02.jpg";
import cas03 from "@/assets/cas-03.jpg";
import { Reveal } from "@/components/Reveal";

/**
 * Emplacements de cas clients. Aucun client, chiffre ou résultat n'est publié
 * tant qu'il n'a pas été validé par la direction (cf. blueprint, page 17).
 * Pour publier un cas : remplacer les champs ci-dessous et retirer `aValider`.
 */
const CAS = [
  {
    image: cas01,
    alt: "Façade d'architecture civique contemporaine aux lignes diagonales",
    secteur: "Collectivité",
    enjeu: "Rendre un projet de territoire lisible et fédérateur.",
    aValider: true,
  },
  {
    image: cas02,
    alt: "Prise de parole publique d'un dirigeant devant une assemblée",
    secteur: "Leader",
    enjeu: "Porter une vision et une parole qui comptent.",
    aValider: true,
  },
  {
    image: cas03,
    alt: "Vue aérienne d'un paysage agricole et industriel au crépuscule",
    secteur: "Entreprise",
    enjeu: "Mieux s'ancrer et dialoguer avec son écosystème.",
    aValider: true,
  },
];

export function Realisations() {
  return (
    <section
      id="realisations"
      aria-labelledby="realisations-title"
      className="bg-background py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="swa-kicker">05 — Réalisations</p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            id="realisations-title"
            className="mt-7 max-w-[22ch] font-display text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.05] font-bold text-ink"
          >
            La preuve avant le discours.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mt-6 max-w-[62ch] leading-relaxed text-muted-foreground">
            Chaque cas se raconte en cinq temps : contexte, problème, approche, travail, résultat
            documenté. Aucun logo, témoignage, résultat ou chiffre n'est publié avant validation.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {CAS.map((c, i) => (
            <Reveal key={c.secteur} delay={i * 100}>
              <article className="group flex h-full flex-col">
                <div className="swa-slant-soft relative overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.alt}
                    width={1200}
                    height={1500}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                  />
                  {c.aValider && (
                    <span className="absolute top-4 left-4 bg-background/95 px-3 py-2 font-display text-[0.62rem] font-bold tracking-[0.12em] text-ink uppercase">
                      Cas à valider avant publication
                    </span>
                  )}
                </div>
                <div className="mt-6 flex-1 border-t border-border pt-5">
                  <p className="swa-kicker">{c.secteur}</p>
                  <h3 className="mt-4 font-display text-xl leading-snug font-bold text-ink">
                    {c.enjeu}
                  </h3>
                  {/* <p className="mt-4 text-sm text-muted-foreground italic">
                    Résultat documenté — à compléter avec la direction.
                  </p> */}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
