import nodemailer from "nodemailer";
import type { ContactFormValues } from "@/lib/contact-schema";

/**
 * Envoi d'e-mail — code SERVEUR UNIQUEMENT (cf. src/server/db.ts).
 * SMTP générique : fonctionne avec la boîte mail fournie par l'hébergement
 * Hostinger, ou tout autre fournisseur SMTP.
 *
 * Identifiants attendus dans .env (voir .env.example) :
 *   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_FROM, CONTACT_NOTIFY_EMAIL
 */

function getTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) return undefined;

  const port = SMTP_PORT ? Number(SMTP_PORT) : 587;
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // 465 = SSL implicite, 587/25 = STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });
}

function buildNotificationText(values: ContactFormValues): string {
  return [
    `Nom — ${values.nom}`,
    `E-mail — ${values.email}`,
    values.telephone ? `Téléphone — ${values.telephone}` : null,
    `Organisation — ${values.organisation}`,
    values.fonction ? `Fonction — ${values.fonction}` : null,
    `Type de besoin — ${values.besoin}`,
    values.delai ? `Délai souhaité — ${values.delai}` : null,
    "",
    "Message :",
    values.message,
  ]
    .filter((line) => line !== null)
    .join("\n");
}

/**
 * Notifie l'agence + envoie un accusé de réception à l'expéditeur.
 * N'échoue jamais bruyamment : si le SMTP n'est pas configuré ou qu'un envoi
 * échoue, on logue et on continue (la soumission est déjà enregistrée en
 * base à ce stade — cf. src/server/contact.ts).
 */
export async function sendContactEmails(values: ContactFormValues): Promise<void> {
  const transport = getTransport();
  if (!transport) {
    console.warn("[mailer] SMTP non configuré (.env) — e-mail non envoyé, soumission conservée.");
    return;
  }

  const from = process.env["SMTP_FROM"] || process.env["SMTP_USER"]!;
  const notifyTo = process.env["CONTACT_NOTIFY_EMAIL"] || process.env["SMTP_USER"]!;

  await transport.sendMail({
    from,
    to: notifyTo,
    replyTo: values.email,
    subject: `Nouveau message — ${values.nom} (${values.organisation})`,
    text: buildNotificationText(values),
  });

  await transport.sendMail({
    from,
    to: values.email,
    subject: "South West Agency — nous avons bien reçu votre message",
    text: `Bonjour ${values.nom.split(" ")[0]},\n\nMerci pour votre message, nous revenons vers vous sous 48 heures ouvrées.\n\nL'équipe South West Agency`,
  });
}
