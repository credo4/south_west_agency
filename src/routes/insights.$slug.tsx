import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import hero768Webp from "@/assets/hero-territoire-768.webp";
import hero1280Webp from "@/assets/hero-territoire-1280.webp";
import hero1920Webp from "@/assets/hero-territoire-1920.webp";
import hero768Jpg from "@/assets/hero-territoire-768.jpg";
import hero1280Jpg from "@/assets/hero-territoire-1280.jpg";
import hero1920Jpg from "@/assets/hero-territoire-1920.jpg";
import { ContactDialogProvider } from "@/components/ContactDialog";
import { Header } from "@/components/sections/Header";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/sections/Footer";
import { Reveal } from "@/components/Reveal";
import { getArticleBySlug, getRelatedArticles, type Article } from "@/content/insights";
import { absoluteUrl, SITE_NAME } from "@/lib/site";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = getArticleBySlug(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => {
    const article = loaderData as Article | undefined;
    if (!article) return {};

    const url = absoluteUrl(`/insights/${article.slug}`);
    const title = `${article.titre} — ${SITE_NAME}`;

    return {
      meta: [
        { title },
        { name: "description", content: article.chapo },
        { property: "og:title", content: article.titre },
        { property: "og:description", content: article.chapo },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: article.image },
        { property: "og:image:alt", content: article.alt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: article.titre },
        { name: "twitter:description", content: article.chapo },
        { name: "twitter:image", content: article.image },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.titre,
            description: article.chapo,
            image: article.image,
            datePublished: article.datePublication,
            dateModified: article.datePublication,
            mainEntityOfPage: url,
            author: { "@type": "Organization", name: SITE_NAME },
            publisher: { "@type": "Organization", name: SITE_NAME },
          }),
        },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: ArticleNotFound,
});

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ArticlePage() {
  const article = Route.useLoaderData();
  const related = getRelatedArticles(article.slug);

  return (
    <ContactDialogProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Section hero — plein bord, collée au menu (comme le Hero de la
              home : le header fixed flotte par-dessus, l'image démarre à
              y=0), avant le chapô et le corps. Pas de bouton. Hauteur plafonnée
              à 1444px. Visuel de territoire partagé par toutes les sous-pages
              (même image que le Hero de la home), pour une identité cohérente
              d'une page à l'autre plutôt qu'une vignette par article. */}
          <Reveal>
            <div className="relative isolate aspect-4/3 max-h-[1444px] w-full overflow-hidden bg-ink md:aspect-21/9">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${hero768Webp} 768w, ${hero1280Webp} 1280w, ${hero1920Webp} 1920w`}
                  sizes="100vw"
                />
                <img
                  src={hero1280Jpg}
                  srcSet={`${hero768Jpg} 768w, ${hero1280Jpg} 1280w, ${hero1920Jpg} 1920w`}
                  sizes="100vw"
                  alt=""
                  aria-hidden="true"
                  loading="eager"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>
            </div>
          </Reveal>

          <article className="pb-24 md:pb-32">
            <div className="mx-auto max-w-[1400px] px-5 md:px-10">
              <header className="mx-auto mt-12 max-w-[68ch] md:mt-16">
                <Reveal>
                  <p className="swa-kicker">{article.categorie}</p>
                </Reveal>
                <Reveal delay={80}>
                  <h1 className="mt-6 font-display text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] font-bold text-ink">
                    {article.titre}
                  </h1>
                </Reveal>
                <Reveal delay={140}>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    {article.chapo}
                  </p>
                </Reveal>
                <Reveal delay={180}>
                  <p className="mt-6 font-sans text-sm text-muted-foreground">
                    <time dateTime={article.datePublication}>
                      {formatDate(article.datePublication)}
                    </time>
                    {" · "}
                    {article.tempsLecture} de lecture
                  </p>
                </Reveal>
              </header>

              <div className="mx-auto mt-12 max-w-[68ch] md:mt-16">
                {article.sections.map((section, i) => (
                  <Reveal key={section.titre} delay={i * 40} className="mt-12 first:mt-0">
                    <h2 className="font-display text-2xl font-bold text-ink md:text-[1.75rem]">
                      {section.titre}
                    </h2>
                    <div className="mt-5 space-y-5">
                      {section.paragraphes.map((p, j) => (
                        <p
                          key={j}
                          className="text-base leading-relaxed text-foreground/85 md:text-lg"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </article>

          {related.length > 0 && (
            <section
              aria-labelledby="related-title"
              className="border-t border-border py-20 md:py-28"
            >
              <div className="mx-auto max-w-[1400px] px-5 md:px-10">
                <p className="swa-kicker">À lire aussi</p>
                <h2
                  id="related-title"
                  className="mt-4 font-display text-xl font-bold text-ink md:text-2xl"
                >
                  Poursuivre la lecture
                </h2>
                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                  {related.map((item) => (
                    <Link
                      key={item.slug}
                      to="/insights/$slug"
                      params={{ slug: item.slug }}
                      className="group flex flex-col"
                    >
                      <div className="relative aspect-16/10 overflow-hidden bg-ink">
                        <img
                          src={item.image}
                          srcSet={item.srcSet}
                          sizes="(min-width: 640px) 45vw, 90vw"
                          alt={item.alt}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <p className="swa-kicker mt-5">{item.categorie}</p>
                      <h3 className="mt-2 font-display text-lg leading-snug font-bold text-ink transition-colors duration-300 group-hover:text-coral">
                        {item.titre}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          <CtaBand />
        </main>
        <Footer />
      </div>
    </ContactDialogProvider>
  );
}

function ArticleNotFound() {
  return (
    <ContactDialogProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="flex min-h-[60vh] flex-col items-center justify-center px-5 pt-32 text-center">
          <h1 className="font-display text-3xl font-bold text-ink">Article introuvable</h1>
          <p className="mt-4 max-w-[42ch] text-muted-foreground">
            Cet article n'existe pas ou plus. Retrouvez l'ensemble de nos publications.
          </p>
          <Link
            to="/insights"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-coral-strong px-8 py-4 font-sans text-xs font-bold tracking-[0.1em] text-coral-foreground uppercase transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
          >
            Voir tous les articles
          </Link>
        </main>
        <Footer />
      </div>
    </ContactDialogProvider>
  );
}
