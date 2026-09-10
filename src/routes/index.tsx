import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero-section.webp";
import { absoluteUrl } from "@/lib/site";
import { ContactDialogProvider } from "@/components/ContactDialog";
import { ServiceDialogProvider } from "@/components/ServiceDialog";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Conviction } from "@/components/sections/Conviction";
import { Agence } from "@/components/sections/Agence";
import { Publics } from "@/components/sections/Publics";
import { Expertises } from "@/components/sections/Expertises";
import { Methode } from "@/components/sections/Methode";
import { Realisations } from "@/components/sections/Realisations";
import { Reassurance } from "@/components/sections/Reassurance";
import { Insights } from "@/components/sections/Insights";
import { CtaBand } from "@/components/sections/CtaBand";
import { Footer } from "@/components/sections/Footer";

const TITLE = "South West Agency — Le récit qui fait rayonner les territoires";
const DESCRIPTION =
  "Agence de communication et de relations publiques dédiée aux collectivités, aux entreprises et aux leaders qui font vivre et rayonner les territoires.";
const OG_IMAGE = absoluteUrl("/og-image.jpg");
const OG_IMAGE_ALT =
  "Vue aérienne d'un territoire du Sud-Ouest au lever du jour — South West Agency";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/") },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:alt", content: OG_IMAGE_ALT },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: absoluteUrl("/") },
      {
        rel: "preload",
        as: "image",
        href: heroImage,
        type: "image/webp",
        fetchPriority: "high",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ContactDialogProvider>
      <ServiceDialogProvider>
        <div className="min-h-screen bg-background">
          <Header />
          <main>
            <Hero />
            <Conviction />
            <Agence />
            <Publics />
            <Expertises />
            <Reassurance />
            <Methode />
            <Realisations />
            <Insights />
            <CtaBand />
          </main>
          <Footer />
        </div>
      </ServiceDialogProvider>
    </ContactDialogProvider>
  );
}
