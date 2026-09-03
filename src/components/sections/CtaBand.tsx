import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function CtaBand() {
  return (
    <section aria-label="Appel à l'action" className="bg-coral py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <p className="max-w-[20ch] font-display text-[clamp(1.8rem,4.2vw,3.2rem)] leading-[1.05] font-bold text-coral-foreground">
            Chaque territoire a quelque chose à dire.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 self-start bg-ink px-8 py-5 font-display text-[0.78rem] font-bold tracking-[0.08em] text-ink-foreground uppercase transition-all duration-300 hover:-translate-y-0.5"
          >
            Parler de mon enjeu
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
