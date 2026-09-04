import { createContext, useContext, useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Check, ChevronsUpDown } from "lucide-react";
import { BESOINS, contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { COUNTRY_CODES, DEFAULT_COUNTRY_CODE } from "@/lib/country-codes";
import { submitContactForm } from "@/lib/contact-server-fn";
import { cn } from "@/lib/utils";
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/**
 * Schéma du FORMULAIRE (client uniquement) : dérivé du schéma partagé, avec
 * `telephone` éclaté en indicatif + numéro pour l'UX du sélecteur pays. À la
 * soumission, les deux sont recomposés dans le `telephone` unique attendu par
 * contactSchema (cf. onSubmit) — le serveur ne voit jamais `indicatifPays`.
 */
const dialogFormSchema = contactSchema.omit({ telephone: true }).extend({
  indicatifPays: z.string().trim().min(1),
  telephone: z
    .string()
    .trim()
    .regex(/^[0-9\s.-]+$/, "Indiquez un numéro de téléphone valide.")
    .min(6, "Indiquez un numéro de téléphone valide.")
    .max(20, "Indiquez un numéro de téléphone valide."),
});

type DialogFormValues = z.infer<typeof dialogFormSchema>;

type ContactDialogContextValue = {
  openContactDialog: () => void;
};

const ContactDialogContext = createContext<ContactDialogContextValue | null>(null);

/** À appeler depuis n'importe quel bouton/lien pour ouvrir la modale de contact. */
export function useContactDialog(): ContactDialogContextValue {
  const ctx = useContext(ContactDialogContext);
  if (!ctx) {
    throw new Error("useContactDialog doit être utilisé sous <ContactDialogProvider>.");
  }
  return ctx;
}

/**
 * Enveloppe la page une seule fois (src/routes/index.tsx) et rend LA modale
 * une seule fois, en fin d'arbre — pas une instance par déclencheur. Radix
 * gère lui-même le focus trap, Échap, le verrouillage du scroll et le retour
 * du focus sur l'élément qui a appelé openContactDialog().
 */
export function ContactDialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <ContactDialogContext.Provider value={{ openContactDialog: () => setOpen(true) }}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-[calc(100vw-2rem)] max-w-3xl rounded-lg bg-background p-7 md:p-10">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-bold text-ink md:text-3xl">
              Parlons de votre territoire.
            </DialogTitle>
            <DialogDescription>
              Une mission commence rarement par une demande de support. Elle commence souvent par
              une question.
            </DialogDescription>
          </DialogHeader>
          <div className="max-h-[calc(90vh-8rem)] overflow-y-auto pt-2">
            <ContactForm onDone={() => setOpen(false)} />
          </div>
        </DialogContent>
      </Dialog>
    </ContactDialogContext.Provider>
  );
}

function ContactForm({ onDone }: { onDone: () => void }) {
  const [countryOpen, setCountryOpen] = useState(false);

  const form = useForm<DialogFormValues>({
    resolver: zodResolver(dialogFormSchema),
    defaultValues: {
      nom: "",
      email: "",
      indicatifPays: DEFAULT_COUNTRY_CODE,
      telephone: "",
      organisation: "",
      fonction: "",
      message: "",
    },
  });

  async function onSubmit(values: DialogFormValues) {
    const { indicatifPays, telephone, ...rest } = values;
    const payload: ContactFormValues = {
      ...rest,
      telephone: `${indicatifPays} ${telephone}`.trim(),
    };

    try {
      await submitContactForm({ data: payload });
      toast.success("Message envoyé", {
        description: `Merci ${values.nom.split(" ")[0]}, nous revenons vers vous rapidement.`,
      });
      form.reset();
      onDone();
    } catch (error) {
      console.error("[contact] échec de l'envoi :", error);
      toast.error("Une erreur est survenue", {
        description: "Merci de réessayer, ou de nous écrire directement par e-mail.",
      });
    }
  }

  const selectedCountry =
    COUNTRY_CODES.find((c) => c.indicatif === form.watch("indicatifPays")) ??
    COUNTRY_CODES.find((c) => c.code === "FR");

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="grid gap-6 sm:grid-cols-2">
        <FormField
          control={form.control}
          name="nom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom et prénom</FormLabel>
              <FormControl>
                <Input placeholder="Entrez votre nom et prénom" autoComplete="name" {...field} />
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
                  placeholder="Entrez votre e-mail professionnel"
                  autoComplete="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Téléphone : groupe visuel indicatif (Popover + Command cherchable) + numéro,
            bordure commune, focus-visible sur le groupe entier plutôt que sur chaque
            contrôle — un <FormItem> classique ne convient pas ici (deux champs RHF
            distincts sous un seul label/erreur). */}
        <div>
          <label htmlFor="telephone-numero" className="text-sm font-medium text-ink">
            Téléphone
          </label>
          <div
            className={cn(
              "mt-2 flex items-stretch rounded-md border border-input bg-transparent shadow-sm",
              "has-focus-visible:outline-2 has-focus-visible:outline-coral has-focus-visible:outline-offset-2",
            )}
          >
            <FormField
              control={form.control}
              name="indicatifPays"
              render={({ field }) => (
                <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      aria-label="Indicatif pays"
                      className="flex shrink-0 items-center gap-1 rounded-l-md border-r border-input px-2.5 text-sm text-ink outline-none transition-colors hover:bg-neutral-surface focus-visible:outline-none"
                    >
                      <span aria-hidden="true">{selectedCountry?.drapeau}</span>
                      <span>{field.value}</span>
                      <ChevronsUpDown
                        aria-hidden="true"
                        className="h-3.5 w-3.5 shrink-0 text-muted-foreground"
                      />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent align="start" className="w-72 p-0">
                    <Command>
                      <CommandInput placeholder="Rechercher un pays…" />
                      <CommandList>
                        <CommandEmpty>Aucun pays trouvé.</CommandEmpty>
                        <CommandGroup>
                          {COUNTRY_CODES.map((country) => (
                            <CommandItem
                              key={country.code}
                              value={`${country.nom} ${country.indicatif}`}
                              onSelect={() => {
                                field.onChange(country.indicatif);
                                setCountryOpen(false);
                              }}
                            >
                              <span aria-hidden="true">{country.drapeau}</span>
                              <span className="flex-1">{country.nom}</span>
                              <span className="text-muted-foreground">{country.indicatif}</span>
                              <Check
                                className={cn(
                                  "h-4 w-4",
                                  field.value === country.indicatif ? "opacity-100" : "opacity-0",
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              )}
            />
            <FormField
              control={form.control}
              name="telephone"
              render={({ field }) => (
                <input
                  id="telephone-numero"
                  type="tel"
                  placeholder="Entrez votre numéro de téléphone"
                  autoComplete="tel-national"
                  inputMode="tel"
                  className="flex h-9 w-full rounded-r-md bg-transparent px-3 py-1 text-base outline-none placeholder:text-muted-foreground focus-visible:outline-none md:text-sm"
                  {...field}
                />
              )}
            />
          </div>
          {(form.formState.errors.telephone || form.formState.errors.indicatifPays) && (
            <p className="mt-2 text-sm font-medium text-destructive">
              {form.formState.errors.telephone?.message ??
                form.formState.errors.indicatifPays?.message}
            </p>
          )}
        </div>

        <FormField
          control={form.control}
          name="organisation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organisation</FormLabel>
              <FormControl>
                <Input
                  placeholder="Entrez le nom de votre organisation"
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
              <FormLabel>Fonction</FormLabel>
              <FormControl>
                <Input placeholder="Entrez votre fonction" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="besoin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type de besoin</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez votre type de besoin" />
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
                  placeholder="Décrivez votre enjeu en quelques lignes"
                  {...field}
                />
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
          <p className="mt-4 text-sm text-muted-foreground">Réponse sous 48 heures ouvrées.</p>
        </div>
      </form>
    </Form>
  );
}
