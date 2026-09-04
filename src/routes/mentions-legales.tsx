import { createFileRoute } from "@tanstack/react-router";
import { ContactDialogProvider } from "@/components/ContactDialog";
import { Header } from "@/components/sections/Header";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales — South West Agency" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: MentionsLegalesPage,
});

function MentionsLegalesPage() {
  return (
    <ContactDialogProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <div className="mx-auto max-w-[68ch] px-5 pt-36 pb-24 md:px-10 md:pt-44 md:pb-32">
            <div className="mb-10 rounded-md border border-coral-strong/30 bg-coral-strong/10 px-5 py-4 text-sm text-ink">
              Contenu juridique à valider avant mise en ligne.
            </div>

            <h1 className="font-display text-3xl font-bold text-ink md:text-4xl">
              Mentions légales
            </h1>

            <div className="mt-10 space-y-10">
              <section>
                <h2 className="font-display text-lg font-bold text-ink">Éditeur du site</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Raison sociale, forme juridique, capital social, siège social, RCS, TVA
                  intracommunautaire — à renseigner avant publication.
                </p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-ink">
                  Directeur de la publication
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Nom et qualité du directeur de la publication — à renseigner avant publication.
                </p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-ink">Hébergement</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Raison sociale, adresse et contact de l'hébergeur — à renseigner avant
                  publication.
                </p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-ink">
                  Propriété intellectuelle
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  L'ensemble des contenus (textes, images, logos) présents sur ce site est protégé
                  au titre du droit d'auteur — clause à valider avant publication.
                </p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-ink">Contact</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Pour toute question relative aux présentes mentions légales, contactez-nous à
                  l'adresse indiquée en pied de page.
                </p>
              </section>
            </div>
          </div>

          <CtaBand />
        </main>
        <Footer />
      </div>
    </ContactDialogProvider>
  );
}
