import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import methodeImage from "@/assets/methode-1400.webp";
import { Reveal } from "@/components/Reveal";
import { SearchIcon, BubbleIcon, WavesIcon } from "@/components/icons";

const ETAPES = [
  {
    num: "01",
    titre: "Comprendre",
    texte:
      "Partir du contexte, des acteurs et des enjeux réels avant de produire le moindre message.",
    icon: SearchIcon,
  },
  {
    num: "02",
    titre: "Révéler",
    texte:
      "Faire émerger le récit juste : ce qui rend l'ambition lisible, singulière et défendable.",
    icon: BubbleIcon,
  },
  {
    num: "03",
    titre: "Faire rayonner",
    texte: "Porter cette parole devant les bons publics, au bon moment, avec les bons formats.",
    icon: WavesIcon,
  },
];

export function Methode() {
  return (
    <section id="methode" aria-labelledby="methode-title" className="bg-background">
      <Reveal>
        {/* Pleine largeur (pas de max-w-[1400px]) : le texte s'aligne sur le
            gutter standard du site, l'image bleed jusqu'au bord de l'écran —
            même logique de "container-breakout" que le Hero. */}
        <div className="grid lg:grid-cols-[2.5fr_1.5fr] lg:items-stretch">
          {/* Contenu */}
          <div className="flex flex-col justify-center px-5 py-16 md:px-10 md:py-24 lg:py-28 lg:pr-16 lg:pl-[max(2.5rem,calc((100vw-1400px)/2+2.5rem))]">
            <p className="swa-kicker text-coral-strong">Notre méthode</p>
            <h2
              id="methode-title"
              className="mt-6 font-display text-[clamp(1.9rem,3.6vw,2.75rem)] leading-[1.12] font-bold text-ink"
            >
              Comprendre avant de parler.
              <br />
              Révéler avant de diffuser.
            </h2>

            <div className="mt-8 border-t border-border" />

            <div className="mt-10 flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:gap-4 sm:text-left">
              {ETAPES.map((etape, i) => (
                <Fragment key={etape.num}>
                  <div className="min-w-0 flex-1">
                    <etape.icon className="mx-auto sm:mx-0" />
                    <span className="mt-4 block font-display text-xs font-bold tracking-[0.1em] text-coral-strong">
                      {etape.num}
                    </span>
                    <h3 className="mt-1 font-display text-sm font-bold tracking-[0.08em] text-ink uppercase">
                      {etape.titre}
                    </h3>
                    <p className="mx-auto mt-2 max-w-[24ch] text-sm leading-relaxed text-muted-foreground sm:mx-0 sm:max-w-[20ch]">
                      {etape.texte}
                    </p>
                  </div>
                  {i < ETAPES.length - 1 && (
                    <ArrowRight
                      aria-hidden="true"
                      className="hidden h-4 w-4 shrink-0 self-center text-coral-strong sm:block"
                    />
                  )}
                </Fragment>
              ))}
            </div>
          </div>

          {/* Photo, plan incliné (motif du logotype) : une seule diagonale
              continue du haut vers le bas, pas de coude vertical. */}
          <div className="relative hidden min-h-[26rem] lg:block">
            <div
              className="absolute inset-0"
              style={{ clipPath: "polygon(45% 0px, 100% 0px, 100% 150%, 0% 50%)" }}
            >
              <img
                src={methodeImage}
                alt="Équipe en réunion de travail autour de tableaux de bord et graphiques budgétaires"
                width={1400}
                height={933}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
