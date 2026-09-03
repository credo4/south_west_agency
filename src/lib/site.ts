/**
 * Domaine de production du site — sert à construire les URLs absolues
 * requises par les meta canonical/og:url/og:image.
 * TODO : remplacer par le domaine réel avant mise en ligne.
 */
export const SITE_URL = "https://www.southwestagency.fr";

export const SITE_NAME = "South West Agency";

/** Construit une URL absolue à partir d'un chemin relatif au site. */
export function absoluteUrl(path: string): string {
  return new URL(path, SITE_URL).toString();
}
