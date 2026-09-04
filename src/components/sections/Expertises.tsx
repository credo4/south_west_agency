import { ArrowUpRight } from "lucide-react";
import { useServiceDialog } from "@/components/ServiceDialog";
import { Reveal } from "@/components/Reveal";

export const EXPERTISES = [
  {
    num: "01",
    titre: "Stratégie territoriale",
    promesse: "Comprendre les territoires pour y agir avec justesse.",
    verbe: "Comprendre",
  },
  {
    num: "02",
    titre: "Affaires publiques & relations institutionnelles",
    promesse: "Mettre les bons sujets devant les bons interlocuteurs.",
    verbe: "Positionner",
  },
  {
    num: "03",
    titre: "Marque, récit & prise de parole",
    promesse: "Trouver les mots qui rendent une identité visible.",
    verbe: "Exprimer",
  },
  {
    num: "04",
    titre: "Communication & écosystèmes digitaux",
    promesse: "Prolonger le récit là où les publics vivent, cherchent et dialoguent.",
    verbe: "Activer",
  },
  {
    num: "05",
    titre: "Temps forts & situations sensibles",
    promesse: "Préparer les moments qui construisent une réputation.",
    verbe: "Protéger",
  },
];

export function Expertises() {
  const { openService } = useServiceDialog();

  return (
    <section
      id="expertises"
      aria-labelledby="expertises-title"
      className="bg-background py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Reveal>
              <p className="swa-kicker">Nos Services</p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                id="expertises-title"
                className="mt-7 max-w-[28ch] font-display text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.05] font-bold text-ink"
              >
                Cinq pôles. Une seule logique&nbsp;: rendre le récit actionnable.
              </h2>
            </Reveal>
          </div>
          {/* <Reveal delay={140}>
            <p className="font-display text-sm tracking-[0.12em] text-muted-foreground uppercase lg:text-right">
              Comprendre · Positionner · Exprimer · Activer · Protéger
            </p>
          </Reveal> */}
        </div>

        <ul className="mt-16 border-t border-border">
          {EXPERTISES.map((e, i) => (
            <Reveal key={e.num} as="li" delay={i * 60} className="border-b border-border">
              <button
                type="button"
                onClick={() => openService(e.num)}
                className="group grid w-full grid-cols-[auto_minmax(0,1fr)] items-start gap-x-6 gap-y-3 py-8 text-left transition-all duration-500 hover:pl-4 md:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1fr)_auto] md:items-center md:py-10"
              >
                <span className="font-display text-sm font-bold text-coral-strong md:text-base">
                  {e.num}
                </span>
                <h3 className="font-display text-xl leading-tight font-bold text-ink transition-colors duration-300 group-hover:text-coral md:text-[1.75rem]">
                  {e.titre}
                </h3>
                <p className="col-span-2 text-sm leading-relaxed text-muted-foreground md:col-span-1 md:text-base">
                  {e.promesse}
                </p>
                <span className="col-span-2 inline-flex items-center gap-2 font-display text-[0.72rem] font-bold tracking-[0.1em] text-ink uppercase md:col-span-1">
                  Comprendre notre approche
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
