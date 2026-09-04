import { z } from "zod";

/**
 * Schéma partagé du formulaire de contact — utilisé côté client (validation
 * dans ContactDialog.tsx) ET côté serveur (validator de la server function)
 * pour ne jamais avoir deux définitions qui dérivent l'une de l'autre.
 *
 * `telephone` porte ici l'indicatif déjà concaténé (ex. "+33 06 12 34 56 78") :
 * le split indicatif/numéro est un détail de formulaire propre à
 * ContactDialog.tsx (cf. son schéma local), pas une préoccupation du serveur
 * ni de la base de données.
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
  telephone: z
    .string()
    .trim()
    .min(6, "Indiquez un numéro de téléphone valide.")
    .max(30, "Indiquez un numéro de téléphone valide."),
  organisation: z.string().trim().min(2, "Indiquez votre organisation.").max(120),
  fonction: z.string().trim().min(2, "Indiquez votre fonction.").max(120),
  besoin: z.enum(BESOINS, { required_error: "Sélectionnez un type de besoin." }),
  message: z
    .string()
    .trim()
    .min(20, "Décrivez votre enjeu en quelques lignes (20 caractères minimum).")
    .max(1500, "1500 caractères maximum."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
