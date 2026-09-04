import ctaBrand768Webp from "@/assets/cta-brand-768.webp";
import ctaBrand1280Webp from "@/assets/cta-brand-1280.webp";
import ctaBrand1920Webp from "@/assets/cta-brand-1920.webp";
import ctaBrand768Jpg from "@/assets/cta-brand-768.jpg";
import ctaBrand1280Jpg from "@/assets/cta-brand-1280.jpg";
import ctaBrand1920Jpg from "@/assets/cta-brand-1920.jpg";
import { Reveal } from "@/components/Reveal";
import { ArrowIcon } from "@/components/icons";
import { useContactDialog } from "@/components/ContactDialog";

export function CtaBand() {
  const { openContactDialog } = useContactDialog();

  return (
    <section
      id="cta"
      aria-label="Appel à l'action"
      className="relative isolate scroll-mt-24 overflow-hidden bg-ink py-24 md:py-32"
    >
      {/* Image de fond */}
      <picture>
        <source
          type="image/webp"
          srcSet={`${ctaBrand768Webp} 768w, ${ctaBrand1280Webp} 1280w, ${ctaBrand1920Webp} 1920w`}
          sizes="100vw"
        />
        <img
          src={ctaBrand1280Jpg}
          srcSet={`${ctaBrand768Jpg} 768w, ${ctaBrand1280Jpg} 1280w, ${ctaBrand1920Jpg} 1920w`}
          sizes="100vw"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          width={1920}
          height={1280}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
      </picture>

      {/* Voile navy pour la lisibilité du texte clair */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/80" />

      <div className="relative mx-auto max-w-[46rem] px-5 text-center md:px-10">
        <Reveal>
          <p className="mx-auto max-w-[20ch] font-display text-[clamp(1.8rem,4.2vw,3.2rem)] leading-[1.05] font-bold text-ink-foreground">
            Chaque territoire a quelque chose à dire.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-[52ch] text-base leading-relaxed text-ink-foreground/75 md:text-lg">
            Un projet, une ambition, un territoire à faire rayonner : parlons-en ensemble.
          </p>
        </Reveal>
        <Reveal delay={160} className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={openContactDialog}
            className="group inline-flex items-center gap-2 rounded-lg border border-ink-foreground/30 bg-transparent px-8 py-4 font-sans text-xs font-bold tracking-[0.1em] text-ink-foreground uppercase transition-all duration-300 hover:-translate-y-0.5 hover:border-ink-foreground hover:bg-ink-foreground hover:text-ink"
          >
            Parler de mon enjeu
            <ArrowIcon className="h-3.5 w-3.5 text-coral transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
