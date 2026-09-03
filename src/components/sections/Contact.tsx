import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { BESOINS, contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { submitContactForm } from "@/lib/contact-server-fn";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Contact() {
  const [envoye, setEnvoye] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      nom: "",
      email: "",
      telephone: "",
      organisation: "",
      fonction: "",
      message: "",
      delai: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      await submitContactForm({ data: values });
      setEnvoye(true);
      toast.success("Message envoyé", {
        description: `Merci ${values.nom.split(" ")[0]}, nous revenons vers vous rapidement.`,
      });
      form.reset();
    } catch (error) {
      console.error("[contact] échec de l'envoi :", error);
      toast.error("Une erreur est survenue", {
        description: "Merci de réessayer, ou de nous écrire directement par e-mail.",
      });
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-neutral-surface py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="swa-kicker">08 — Contact</p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                id="contact-title"
                className="mt-7 font-display text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.05] font-bold text-ink"
              >
                Parlons de votre territoire.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 max-w-[46ch] leading-relaxed text-muted-foreground">
                La conversion finale doit être aussi simple qu'une conversation.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-10 max-w-[42ch] font-display text-lg leading-snug font-medium text-ink md:text-xl">
                « Une mission commence rarement par une demande de support. Elle commence souvent
                par une question. »
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-12 border-t border-border pt-8">
                <p className="swa-kicker">Coordonnées</p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  <li>E-mail — à renseigner avant publication</li>
                  <li>Téléphone — à renseigner avant publication</li>
                  <li>Adresse — à confirmer</li>
                  <li>LinkedIn — à renseigner avant publication</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="bg-background p-7 md:p-12">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  noValidate
                  className="grid gap-6 sm:grid-cols-2"
                >
                  <FormField
                    control={form.control}
                    name="nom"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom et prénom</FormLabel>
                        <FormControl>
                          <Input placeholder="Camille Duran" autoComplete="name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail professionnel</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="camille@organisation.fr"
                            autoComplete="email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="telephone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Téléphone <span className="text-muted-foreground">(optionnel)</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="06 12 34 56 78"
                            autoComplete="tel"
                            inputMode="tel"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="organisation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organisation</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Collectivité, entreprise, institution"
                            autoComplete="organization"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="fonction"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Fonction <span className="text-muted-foreground">(optionnel)</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Directrice de la communication" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="besoin"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2">
                        <FormLabel>Type de besoin</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez un besoin" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {BESOINS.map((b) => (
                              <SelectItem key={b} value={b}>
                                {b}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2">
                        <FormLabel>Votre enjeu en quelques lignes</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Contexte, ambition, échéance…"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="delai"
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2">
                        <FormLabel>
                          Délai souhaité <span className="text-muted-foreground">(optionnel)</span>
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Ex. premier trimestre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="sm:col-span-2">
                    <Button
                      type="submit"
                      disabled={form.formState.isSubmitting}
                      className="w-full bg-coral-strong font-display text-[0.78rem] font-bold tracking-[0.08em] text-coral-foreground uppercase transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-ink-foreground disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
                      size="lg"
                    >
                      {form.formState.isSubmitting ? "Envoi…" : "Parlons de votre territoire"}
                    </Button>
                    <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
                      {envoye
                        ? "Merci, votre message a bien été pris en compte."
                        : "Réponse sous 48 heures ouvrées."}
                    </p>
                  </div>
                </form>
              </Form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
