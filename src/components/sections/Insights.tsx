import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ARTICLES } from "@/content/insights";

// La home n'affiche que les 4 premiers articles (le 5ᵉ reste consultable
// depuis /insights, la liste complète).
const HOME_ARTICLES = ARTICLES.slice(0, 4);

export function Insights() {
  return (
    <section
      id="insights"
      aria-labelledby="insights-title"
      className="bg-background pt-12 pb-24 md:pt-20 md:pb-36"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="swa-kicker">Insights</p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            id="insights-title"
            className="mt-7 max-w-[24ch] font-display text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.05] font-bold text-ink"
          >
            Nos points de vue sur les territoires, leur récit et leur influence.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {HOME_ARTICLES.map((item, i) => (
            <Reveal key={item.slug} delay={i * 70} className="group flex flex-col">
              <Link
                to="/insights/$slug"
                params={{ slug: item.slug }}
                className="flex flex-1 flex-col"
              >
                <div className="relative aspect-3/4 overflow-hidden bg-ink">
                  <img
                    src={item.image}
                    srcSet={item.srcSet}
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
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
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
