import hero768Webp from "@/assets/hero-territoire-768.webp";
import hero1280Webp from "@/assets/hero-territoire-1280.webp";
import hero1920Webp from "@/assets/hero-territoire-1920.webp";
import hero768Jpg from "@/assets/hero-territoire-768.jpg";
import hero1280Jpg from "@/assets/hero-territoire-1280.jpg";
import hero1920Jpg from "@/assets/hero-territoire-1920.jpg";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon, PinIcon, BubbleIcon, WavesIcon } from "@/components/icons";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const PILLARS = [
  {
    icon: PinIcon,
    title: "Territoire",
    text: "Comprendre les réalités locales et les parties prenantes.",
  },
  {
    icon: BubbleIcon,
    title: "Récit",
    text: "Transformer la singularité en parole claire et crédible.",
  },
  {
    icon: WavesIcon,
    title: "Rayonnement",
    text: "Déployer le récit auprès des publics qui comptent.",
  },
];

/** H1 unique de la page, révélé ligne par ligne (masque overflow + translateY). */
function HeroTitle() {
  const { ref, visible } = useReveal<HTMLHeadingElement>();

  return (
    <h1
      ref={ref}
      className="font-display text-[clamp(2.6rem,6.2vw,4.8rem)] font-bold leading-[1.02] tracking-[-0.02em] text-ink"
    >
      <span className="swa-line-mask">
        <span className={cn("swa-line", visible && "swa-line-in")}>
          Chaque territoire a quelque chose
        </span>
      </span>
      <span className="swa-line-mask">
        <span
          className={cn("swa-line text-coral", visible && "swa-line-in")}
          style={visible ? { transitionDelay: "120ms" } : undefined}
        >
          à dire.
        </span>
      </span>
    </h1>
  );
}

export function Hero() {
  return (
    <>
      <section
        id="top"
        className="relative isolate min-h-[clamp(620px,82vh,820px)] overflow-hidden bg-background"
      >
        {/* Image de couverture, plein cadre (LCP : pas de lazy-loading). WebP + repli
            JPEG, 3 largeurs (768/1280/1920) — l'image occupe 100vw à tous les paliers. */}
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
            fetchPriority="high"
            decoding="async"
            width={1920}
            height={1080}
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
          />
        </picture>

        {/* Dégradé de lisibilité (horizontal + voile bas), défini via --gradient-hero */}
        <div aria-hidden="true" className="swa-hero-overlay absolute inset-0 -z-10" />

        <div className="relative mx-auto grid max-w-[1400px] grid-cols-12 px-5 md:px-10">
          <div className="col-span-12 flex max-w-160 flex-col gap-7 pt-32 pb-20 md:pt-36 lg:col-span-6 lg:pb-28">
            <Reveal>
              <p className="font-sans text-xs font-medium tracking-[0.14em] text-ink/70 uppercase">
                Communication • Relations publiques • Territoires • Influence
              </p>
            </Reveal>

            <HeroTitle />

            <Reveal delay={160}>
              <p className="max-w-[42ch] font-sans text-[1.0625rem] leading-relaxed text-ink/80">
                Notre métier est de rendre ce récit visible, compréhensible et désirable.
              </p>
            </Reveal>

            <Reveal
              delay={240}
              className="flex flex-col gap-4 pt-2 md:flex-row md:flex-wrap md:items-center"
            >
              <a
                href="#contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-coral-strong px-8 py-4 font-sans text-xs font-bold tracking-[0.1em] text-coral-foreground uppercase transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 md:w-auto"
              >
                Parlons de votre territoire
                <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#agence"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-ink/25 bg-transparent px-8 py-4 font-sans text-xs font-bold tracking-[0.1em] text-ink uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:text-ink-foreground md:w-auto"
              >
                Découvrir l'agence
                <ArrowIcon className="h-3.5 w-3.5 text-coral transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bandeau 3 piliers, collé sous le hero */}
      <div className="relative bg-ink">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 divide-y divide-hairline px-5 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-10">
          {PILLARS.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              delay={index * 80}
              className="flex items-start gap-4 py-8 md:px-8 md:py-12 md:first:pl-0 md:last:pr-0"
            >
              <pillar.icon className="h-8 w-8 shrink-0 text-ink-foreground" />
              <div>
                <h3 className="font-sans text-[0.8125rem] font-bold tracking-[0.1em] text-ink-foreground uppercase">
                  {pillar.title}
                </h3>
                <p className="mt-2 max-w-[26ch] font-sans text-sm leading-relaxed text-navy-muted">
                  {pillar.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
