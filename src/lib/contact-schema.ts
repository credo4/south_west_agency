import { z } from "zod";

/**
 * Schéma partagé du formulaire de contact — utilisé côté client (validation
 * du formulaire dans Contact.tsx) ET côté serveur (validator de la server
 * function) pour ne jamais avoir deux définitions qui dérivent l'une de
 * l'autre.
 */

export const BESOINS = [
  "Stratégie territoriale",
  "Affaires publiques",
  "Marque & prise de parole",
  "Communication & digital",
  "Temps fort",
  "Situation sensible",
] as const;

export const contactSchema = z.object({
  nom: z.string().trim().min(2, "Indiquez votre nom et prénom.").max(100),
  email: z
    .string()
    .trim()
    .min(1, "Indiquez votre e-mail professionnel.")
    .email("Adresse e-mail invalide.")
    .max(255),
  telephone: z.string().trim().max(30).optional().or(z.literal("")),
  organisation: z.string().trim().min(2, "Indiquez votre organisation.").max(120),
  fonction: z.string().trim().max(120).optional().or(z.literal("")),
  besoin: z.enum(BESOINS, { required_error: "Sélectionnez un type de besoin." }),
  message: z
    .string()
    .trim()
    .min(20, "Décrivez votre enjeu en quelques lignes (20 caractères minimum).")
    .max(1500, "1500 caractères maximum."),
  delai: z.string().trim().max(120).optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
