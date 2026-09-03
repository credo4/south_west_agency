import { Reveal } from "@/components/Reveal";

export function Conviction() {
  return (
    <section aria-labelledby="conviction-title" className="bg-ink pt-20 pb-24 md:pt-28 md:pb-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="swa-kicker text-ink-foreground/60">Notre conviction</p>
        </Reveal>
        <Reveal delay={80}>
          <h2
            id="conviction-title"
            className="mt-8 max-w-[22ch] font-display text-[clamp(1.9rem,5vw,4rem)] leading-[1.04] font-bold text-ink-foreground"
          >
            La valeur d'un territoire commence par son récit.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-[58ch] text-base leading-relaxed text-ink-foreground/70 md:text-lg">
            Un projet devient lisible quand son ambition, son contexte et son utilité sont compris.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
