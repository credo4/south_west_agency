import { createFileRoute } from "@tanstack/react-router";
import hero1280Webp from "@/assets/hero-territoire-1280.webp";
import { absoluteUrl } from "@/lib/site";
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
import { Contact } from "@/components/sections/Contact";
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
        href: hero1280Webp,
        type: "image/webp",
        fetchPriority: "high",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Conviction />
        <Agence />
        <Publics />
        <Expertises />
        <Methode />
        <Realisations />
        <Reassurance />
        <Insights />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
