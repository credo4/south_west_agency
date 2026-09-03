import { ArrowUpRight } from "lucide-react";
import insight01_600 from "@/assets/insight-01-600.webp";
import insight01_900 from "@/assets/insight-01-900.webp";
import insight02_600 from "@/assets/insight-02-600.webp";
import insight02_900 from "@/assets/insight-02-900.webp";
import insight03_600 from "@/assets/insight-03-600.webp";
import insight03_900 from "@/assets/insight-03-900.webp";
import insight04_600 from "@/assets/insight-04-600.webp";
import insight04_900 from "@/assets/insight-04-900.webp";
import insight05_600 from "@/assets/insight-05-600.webp";
import insight05_900 from "@/assets/insight-05-900.webp";
import { Reveal } from "@/components/Reveal";

/** Premiers articles de la ligne éditoriale. */
const ARTICLES = [
  {
    numero: "01",
    categorie: "Point de vue",
    titre: "Pourquoi un bon projet territorial peut échouer à cause d'un mauvais récit.",
    image: insight01_900,
    srcSet: `${insight01_600} 600w, ${insight01_900} 900w`,
    alt: "Un intervenant prend la parole au micro derrière un pupitre.",
  },
  {
    numero: "02",
    categorie: "Décryptage",
    titre: "Le territoire comme plateforme de relation, pas seulement comme localisation.",
    image: insight02_900,
    srcSet: `${insight02_600} 600w, ${insight02_900} 900w`,
    alt: "Une main annote un post-it au-dessus d'une carte de territoire, lors d'un atelier.",
  },
  {
    numero: "03",
    categorie: "Décryptage",
    titre: "Communication institutionnelle : informer ne suffit plus.",
    image: insight03_900,
    srcSet: `${insight03_600} 600w, ${insight03_900} 900w`,
    alt: "Deux hommes marchent devant un bâtiment institutionnel vitré.",
  },
  {
    numero: "04",
    categorie: "Grand format",
    titre: "Le dirigeant comme porte-parole de son ancrage territorial.",
    image: insight04_900,
    srcSet: `${insight04_600} 600w, ${insight04_900} 900w`,
    alt: "Portrait d'une professionnelle casquée sur un site en activité, bras croisés.",
  },
  {
    numero: "05",
    categorie: "Outil",
    titre: "Comment préparer la communication d'un projet sensible avant l'annonce.",
    image: insight05_900,
    srcSet: `${insight05_600} 600w, ${insight05_900} 900w`,
    alt: "Plusieurs mains pointent des graphiques sur un document, en réunion.",
  },
];

export function Insights() {
  return (
    <section
      id="insights"
      aria-labelledby="insights-title"
      className="bg-background py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="swa-kicker">07 — Insights</p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            id="insights-title"
            className="mt-7 max-w-[24ch] font-display text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.05] font-bold text-ink"
          >
            Une agence premium doit publier ses idées, pas seulement ses travaux.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {ARTICLES.map((item, i) => (
            <Reveal key={item.titre} delay={i * 70} className="group flex flex-col">
              <div className="relative aspect-3/4 overflow-hidden bg-ink">
                <img
                  src={item.image}
                  srcSet={item.srcSet}
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw"
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-coral px-2 py-1 font-display text-[0.7rem] font-bold text-coral-foreground">
                  {item.numero}
                </span>
              </div>

              <p className="swa-kicker mt-4">{item.categorie}</p>
              <h3 className="mt-2 font-display text-sm leading-snug font-bold text-ink md:text-base">
                {item.titre}
              </h3>

              <span
                aria-hidden="true"
                className="mt-4 grid h-8 w-8 place-items-center rounded-full border border-border text-ink transition-colors duration-300 group-hover:border-coral group-hover:bg-coral group-hover:text-coral-foreground"
              >
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
