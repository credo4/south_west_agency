import { createFileRoute } from "@tanstack/react-router";
import { ContactDialogProvider } from "@/components/ContactDialog";
import { Header } from "@/components/sections/Header";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/politique-de-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — South West Agency" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: PolitiqueConfidentialitePage,
});

function PolitiqueConfidentialitePage() {
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
              Politique de confidentialité
            </h1>

            <div className="mt-10 space-y-10">
              <section>
                <h2 className="font-display text-lg font-bold text-ink">Données collectées</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Nature des données collectées via les formulaires du site (identité, coordonnées,
                  message) — détail à valider avant publication.
                </p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-ink">Finalité du traitement</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Traitement des demandes adressées via le site (formulaire de contact) — clause à
                  valider avant publication.
                </p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-ink">Durée de conservation</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Durée de conservation des données — à renseigner avant publication.
                </p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-ink">
                  Droits des personnes concernées
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Droit d'accès, de rectification, d'effacement et d'opposition, conformément au
                  RGPD — modalités d'exercice à renseigner avant publication.
                </p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-ink">Cookies</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Politique en matière de cookies et traceurs — à renseigner avant publication.
                </p>
              </section>

              <section>
                <h2 className="font-display text-lg font-bold text-ink">Contact</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  Pour exercer vos droits ou pour toute question, contactez-nous à l'adresse
                  indiquée en pied de page.
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
