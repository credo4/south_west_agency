import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ContactDialogProvider } from "@/components/ContactDialog";
import { Header } from "@/components/sections/Header";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/sections/Footer";
import { Reveal } from "@/components/Reveal";
import { ARTICLES } from "@/content/insights";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

const TITLE = `Insights — ${SITE_NAME}`;
const DESCRIPTION =
  "Le point de vue de South West Agency sur les territoires, la communication institutionnelle et la prise de parole des dirigeants.";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/insights") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/insights") }],
  }),
  component: InsightsIndexPage,
});

function InsightsIndexPage() {
  return (
    <ContactDialogProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <div className="mx-auto max-w-[1400px] px-5 pt-36 pb-24 md:px-10 md:pt-44 md:pb-32">
            <Reveal>
              <p className="swa-kicker">Insights</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 max-w-[24ch] font-display text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] font-bold text-ink">
                Nos points de vue sur les territoires, leur récit et leur influence.
              </h1>
            </Reveal>

            <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {ARTICLES.map((article, i) => (
                <Reveal key={article.slug} delay={i * 60} className="group">
                  <Link
                    to="/insights/$slug"
                    params={{ slug: article.slug }}
                    className="flex flex-col"
                  >
                    <div className="relative aspect-4/3 overflow-hidden bg-ink">
                      <img
                        src={article.image}
                        srcSet={article.srcSet}
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                        alt={article.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <span className="absolute top-3 left-3 bg-coral px-2 py-1 font-display text-[0.7rem] font-bold text-coral-foreground">
                        {article.numero}
                      </span>
                    </div>

                    <p className="swa-kicker mt-5">{article.categorie}</p>
                    <h2 className="mt-2 font-display text-lg leading-snug font-bold text-ink transition-colors duration-300 group-hover:text-coral">
                      {article.titre}
                    </h2>
                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                      {article.chapo}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-2 font-display text-[0.72rem] font-bold tracking-[0.1em] text-ink uppercase">
                      Lire l'article
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>

          <CtaBand />
        </main>
        <Footer />
      </div>
    </ContactDialogProvider>
  );
}
