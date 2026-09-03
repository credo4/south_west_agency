import agenceImage from "@/assets/agence-methode.jpg";
import { Reveal } from "@/components/Reveal";

export function Agence() {
  return (
    <section id="agence" aria-labelledby="agence-title" className="bg-background py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="swa-kicker">01 — L'agence</p>
            </Reveal>
            <Reveal delay={80}>
              <p
                id="agence-title"
                className="mt-7 font-display text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.05] font-bold text-ink"
              >
                Ce que nous croyons avant ce que nous vendons.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 font-display text-xl leading-snug font-medium text-coral md:text-2xl">
                « Chaque territoire a quelque chose à dire. »
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-[56ch] leading-relaxed text-muted-foreground">
                Un territoire ne se résume jamais à une carte. Il a une histoire, des visages, des
                voix, des convictions, des projets et des femmes et des hommes qui décident, créent,
                transmettent et transforment.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <Reveal delay={80}>
                <p className="font-display text-sm font-bold tracking-[0.12em] text-ink uppercase">
                  Notre mission
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Aider celles et ceux qui font les territoires à mieux faire comprendre ce qu'ils
                  construisent.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <p className="font-display text-sm font-bold tracking-[0.12em] text-ink uppercase">
                  Notre différence
                </p>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Nous ne partons pas d'un catalogue d'outils. Nous partons du contexte, des
                  acteurs, des enjeux et de ce qui rend chaque organisation réellement singulière.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:pt-16">
            <Reveal delay={120} className="h-full min-h-80">
              <div className="swa-slant-soft h-full overflow-hidden">
                <img
                  src={agenceImage}
                  alt="Équipe de South West Agency en séance de travail autour de cartes et de documents de territoire"
                  width={1408}
                  height={1008}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.03]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
