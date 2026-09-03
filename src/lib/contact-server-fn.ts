import { createServerFn } from "@tanstack/react-start";
import { contactSchema } from "@/lib/contact-schema";
import { insertContactSubmission } from "@/server/db";
import { sendContactEmails } from "@/server/mailer";

/**
 * Server function : reçoit les données du formulaire de contact déjà
 * validées côté client, les revalide (le validator tourne aussi côté
 * serveur — ne jamais faire confiance au seul client), les enregistre en
 * base, puis tente l'envoi des e-mails (best-effort : un échec d'e-mail ne
 * doit pas faire perdre la soumission déjà enregistrée).
 *
 * Ce fichier vit volontairement HORS de src/server/ : le plugin
 * import-protection de TanStack Start (configuré par le wrapper Lovable)
 * refuse tout import client vers un chemin contenant un dossier `server/`.
 * `.handler()` est compilé en RPC — son corps (et donc les imports
 * db.ts/mailer.ts, tous les deux server-only) ne part jamais dans le bundle
 * client.
 */
export const submitContactForm = createServerFn({ method: "POST" })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    try {
      await insertContactSubmission(data);
    } catch (error) {
      console.error("[contact] échec de l'enregistrement en base :", error);
      throw error;
    }

    try {
      await sendContactEmails(data);
    } catch (error) {
      console.error("[contact] envoi d'e-mail en échec (soumission conservée) :", error);
    }

    return { ok: true as const };
  });
