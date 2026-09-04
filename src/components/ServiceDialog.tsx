import { createContext, useContext, useState, type ReactNode } from "react";
import service01_600 from "@/assets/service-01-600.webp";
import service01_900 from "@/assets/service-01-900.webp";
import service02_600 from "@/assets/service-02-600.webp";
import service02_900 from "@/assets/service-02-900.webp";
import service03_600 from "@/assets/service-03-600.webp";
import service03_900 from "@/assets/service-03-900.webp";
import service04_600 from "@/assets/service-04-600.webp";
import service04_900 from "@/assets/service-04-900.webp";
import service05_600 from "@/assets/service-05-600.webp";
import service05_900 from "@/assets/service-05-900.webp";
import { useContactDialog } from "@/components/ContactDialog";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

export type Service = {
  num: string;
  titre: string;
  promesse: string;
  intro: string;
  items: string[];
  image?: string;
  srcSet?: string;
  imageAlt?: string;
};

export const SERVICES: Service[] = [
  {
    num: "01",
    titre: "Stratégie territoriale",
    promesse: "Comprendre les territoires pour y agir avec justesse.",
    intro:
      "Un projet territorial ne se construit jamais dans le vide. Il s'inscrit dans un environnement composé d'acteurs publics, économiques, associatifs, médiatiques et citoyens. Notre travail commence par cette lecture, avant toute production de message.",
    items: [
      "Diagnostic territorial et analyse des enjeux",
      "Cartographie des parties prenantes et acteurs clés",
      "Lecture des écosystèmes institutionnels et locaux",
      "Stratégie d'ancrage territorial",
      "Accompagnement à l'intégration d'une nouvelle implantation",
      "Parcours d'acculturation territoriale pour dirigeants",
    ],
    image: service01_900,
    srcSet: `${service01_600} 600w, ${service01_900} 900w`,
    imageAlt:
      "Un cercle de mains jointes vu du dessous, symbole de coopération entre acteurs d'un territoire.",
  },
  {
    num: "02",
    titre: "Affaires publiques & relations institutionnelles",
    promesse: "Mettre les bons sujets devant les bons interlocuteurs.",
    intro:
      "Une stratégie d'influence commence par une lecture précise du débat public. Nous aidons nos clients à structurer leur positionnement, leurs arguments et leur dialogue avec les parties prenantes concernées.",
    items: [
      "Conseil en affaires publiques",
      "Veille et analyse de l'environnement institutionnel",
      "Notes de position, argumentaires et éléments de langage",
      "Préparation de rencontres institutionnelles",
      "Dispositifs de dialogue avec les parties prenantes",
      "Communication institutionnelle autour de projets d'intérêt général",
    ],
    image: service02_900,
    srcSet: `${service02_600} 600w, ${service02_900} 900w`,
    imageAlt: "Une professionnelle souriante entourée d'un groupe de collègues, vue de dessus.",
  },
  {
    num: "03",
    titre: "Marque, récit & prise de parole",
    promesse: "Trouver les mots qui rendent une identité visible.",
    intro:
      "Avant d'être un logo, une marque est une perception. Avant d'être une campagne, une communication est un point de vue. Nous construisons la parole qui rend une organisation reconnaissable et crédible.",
    items: [
      "Positionnement et plateforme de marque",
      "Architecture de messages et territoire éditorial",
      "Conception-rédaction, discours et manifestes",
      "Marque territoriale",
      "Personal branding",
      "Media training et accompagnement des porte-parole",
      "Création de contenus éditoriaux",
    ],
    image: service03_900,
    srcSet: `${service03_600} 600w, ${service03_900} 900w`,
    imageAlt: "Portrait souriant d'une professionnelle en blazer, tablette à la main.",
  },
  {
    num: "04",
    titre: "Communication & écosystèmes digitaux",
    promesse: "Prolonger le récit là où les publics vivent, cherchent et dialoguent.",
    intro:
      "Le digital n'est pas une couche supplémentaire. Il prolonge naturellement le positionnement de l'organisation, ou il l'affaiblit.",
    items: [
      "Stratégie : architecture éditoriale, parcours, objectifs, gouvernance",
      "Expérience : UX, design d'interface, responsive, accessibilité",
      "Contenu : SEO, réseaux sociaux, newsletters, photo, vidéo, motion",
      "Mesure : analytics, tableaux de bord, KPI et optimisation",
    ],
    image: service04_900,
    srcSet: `${service04_600} 600w, ${service04_900} 900w`,
    imageAlt:
      "Un ordinateur portable affichant des tableaux de bord et des graphiques, en réunion.",
  },
  {
    num: "05",
    titre: "Temps forts & situations sensibles",
    promesse: "Préparer les moments qui construisent une réputation.",
    intro:
      "Certains moments décident de la perception d'une organisation pour des années. Ils se préparent — ils ne s'improvisent pas.",
    items: [
      "Événements institutionnels et rendez-vous de marque",
      "Conférences, colloques, inaugurations et dispositifs éditoriaux associés",
      "Préparation à la communication de crise et scénarios d'entraînement",
      "Simulation et préparation des porte-parole",
      "Accompagnement pendant et après la situation",
    ],
    image: service05_900,
    srcSet: `${service05_600} 600w, ${service05_900} 900w`,
    imageAlt: "Deux intervenants assis sur des tabourets face à de grands écrans de données.",
  },
];

type ServiceDialogContextValue = {
  openService: (num: string) => void;
};

const ServiceDialogContext = createContext<ServiceDialogContextValue | null>(null);

/** À appeler depuis n'importe quelle carte de service pour ouvrir sa modale. */
export function useServiceDialog(): ServiceDialogContextValue {
  const ctx = useContext(ServiceDialogContext);
  if (!ctx) {
    throw new Error("useServiceDialog doit être utilisé sous <ServiceDialogProvider>.");
  }
  return ctx;
}

/**
 * Enveloppe la page une seule fois et rend LA modale une seule fois, en fin
 * d'arbre — pas une instance par carte. Même modèle que ContactDialog.
 */
export function ServiceDialogProvider({ children }: { children: ReactNode }) {
  const [activeNum, setActiveNum] = useState<string | null>(null);
  const service = SERVICES.find((s) => s.num === activeNum) ?? null;

  return (
    <ServiceDialogContext.Provider value={{ openService: (num) => setActiveNum(num) }}>
      {children}
      <Dialog open={service !== null} onOpenChange={(open) => !open && setActiveNum(null)}>
        <DialogContent className="w-[calc(100vw-2rem)] max-w-4xl overflow-hidden rounded-lg border-0 bg-background p-0">
          {service && <ServiceDialogBody service={service} onClose={() => setActiveNum(null)} />}
        </DialogContent>
      </Dialog>
    </ServiceDialogContext.Provider>
  );
}

function ServiceImage({ service }: { service: Service }) {
  if (service.image) {
    return (
      <img
        src={service.image}
        srcSet={service.srcSet}
        sizes="(min-width: 768px) 40vw, 100vw"
        alt={service.imageAlt ?? ""}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  }

  // Panneau de remplacement le temps qu'une vraie photo soit fournie.
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-ink"
    >
      <span className="font-display text-5xl font-bold text-coral-on-ink">{service.num}</span>
      <span className="font-sans text-[0.7rem] font-semibold tracking-[0.14em] text-ink-foreground/50 uppercase">
        Visuel à venir
      </span>
    </div>
  );
}

function ServiceDialogBody({ service, onClose }: { service: Service; onClose: () => void }) {
  const { openContactDialog } = useContactDialog();

  return (
    <div className="grid max-h-[90vh] md:grid-cols-[0.9fr_1.1fr]">
      <div className="relative aspect-4/5 shrink-0 md:aspect-auto md:h-full">
        <ServiceImage service={service} />
      </div>

      <div className="min-h-0 overflow-y-auto p-8 md:p-10">
        <span className="font-display text-sm font-bold tracking-[0.16em] text-coral-strong">
          {service.num}
        </span>
        <DialogTitle className="mt-3 font-display text-2xl font-bold text-ink md:text-3xl">
          {service.titre}
        </DialogTitle>
        <p className="mt-4 font-display text-lg leading-snug font-medium text-ink">
          {service.promesse}
        </p>
        <DialogDescription className="mt-4 leading-relaxed text-muted-foreground">
          {service.intro}
        </DialogDescription>

        <div className="mt-8">
          <p className="font-display text-xs font-bold tracking-[0.12em] text-ink uppercase">
            Nous intervenons sur
          </p>
          <ul className="mt-4 space-y-2.5">
            {service.items.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1 w-1 shrink-0 rounded-full bg-coral-strong"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <button
          type="button"
          onClick={() => {
            onClose();
            openContactDialog();
          }}
          className="mt-10 inline-flex items-center gap-2 rounded-lg bg-coral-strong px-8 py-4 font-sans text-xs font-bold tracking-[0.1em] text-coral-foreground uppercase transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
        >
          Parler de mon enjeu
        </button>
      </div>
    </div>
  );
}
