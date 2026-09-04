import mysql from "mysql2/promise";
import type { ContactFormValues } from "@/lib/contact-schema";

/**
 * Connexion MySQL — code SERVEUR UNIQUEMENT. N'importe jamais ce fichier
 * depuis un composant client : `server/*` n'est destiné qu'aux server
 * functions (cf. src/server/contact.ts).
 *
 * Identifiants attendus dans .env (voir .env.example) :
 *   DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME
 */

let pool: mysql.Pool | undefined;
let schemaReady: Promise<void> | undefined;

function getPool(): mysql.Pool {
  if (pool) return pool;

  const { DATABASE_HOST, DATABASE_PORT, DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME } =
    process.env;

  if (!DATABASE_HOST || !DATABASE_USER || !DATABASE_NAME) {
    throw new Error(
      "Base de données non configurée : renseigne DATABASE_HOST / DATABASE_USER / " +
        "DATABASE_PASSWORD / DATABASE_NAME dans .env (voir .env.example à la racine du projet).",
    );
  }

  pool = mysql.createPool({
    host: DATABASE_HOST,
    port: DATABASE_PORT ? Number(DATABASE_PORT) : 3306,
    user: DATABASE_USER,
    password: DATABASE_PASSWORD ?? "",
    database: DATABASE_NAME,
    waitForConnections: true,
    connectionLimit: 5,
    charset: "utf8mb4",
  });

  return pool;
}

/** Crée la table au premier appel si elle n'existe pas déjà (auto-migration légère). */
async function ensureSchema(): Promise<void> {
  if (!schemaReady) {
    schemaReady = getPool()
      .query(
        `CREATE TABLE IF NOT EXISTS contact_submissions (
          id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
          nom VARCHAR(100) NOT NULL,
          email VARCHAR(255) NOT NULL,
          telephone VARCHAR(30) NOT NULL,
          organisation VARCHAR(120) NOT NULL,
          fonction VARCHAR(120) NOT NULL,
          besoin VARCHAR(60) NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
          INDEX idx_contact_submissions_created_at (created_at)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci`,
      )
      .then(() => undefined);
  }
  return schemaReady;
}

export async function insertContactSubmission(values: ContactFormValues): Promise<void> {
  await ensureSchema();
  await getPool().execute(
    `INSERT INTO contact_submissions
       (nom, email, telephone, organisation, fonction, besoin, message)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      values.nom,
      values.email,
      values.telephone,
      values.organisation,
      values.fonction,
      values.besoin,
      values.message,
    ],
  );
}
