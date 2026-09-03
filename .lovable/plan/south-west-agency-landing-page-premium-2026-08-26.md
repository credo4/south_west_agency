# South West Agency — Landing page premium

Site vitrine one-page (français), fidèle au blueprint fourni : positionnement « territoire / récit / rayonnement », 5 pôles d'expertise, méthode en 3 temps, conversion « Parlons de votre territoire ».

## Identité visuelle

Palette imposée (charte + palette 4) :
- Bleu profond `#1E2347` — autorité, fonds pleins, texte
- Corail `#EA5153` — accent unique, CTA, plans inclinés
- Neutre `#F5F4F4` — respiration, surfaces éditoriales
- Blanc pur pour les zones de contraste

Typo : titres grotesque géométrique expressif (Space Grotesk, substitut moderne de Rocket Sans), corps en Montserrat. Grands titres bas-de-casse/capitales très contrastés, grille éditoriale large, beaucoup de blanc.

Langage de formes issu du logotype : plans inclinés (quadrilatère penché) comme motif de transition entre sections, « fenêtres » visuelles au lieu de cadres lourds, corail utilisé avec parcimonie.

Animations : apparitions au scroll (fade + translate discret), révélation ligne par ligne des grands titres, hover sur cartes (élévation légère + glissement de l'accent corail), transitions douces. Respect de `prefers-reduced-motion`.

## Sections de la page

1. **Header** — logo SWA (marque textuelle + forme inclinée corail), nav Agence / Expertises / Méthode / Réalisations / Insights / Contact, bouton « Parlons de votre territoire », menu mobile plein écran avec CTA fixe.
2. **Hero** — « Le récit qui fait rayonner les territoires. », kicker « Communication • Relations publiques • Territoires • Influence », paragraphe d'accroche du document, CTA primaire + secondaire, composition visuelle plein cadre avec masque incliné.
3. **Conviction** — « La valeur d'un territoire commence par son récit. » en grande citation éditoriale.
4. **L'agence** — « Ce que nous croyons avant ce que nous vendons » : chaque territoire a quelque chose à dire, mission, notre différence, ton de marque.
5. **Publics** — 4 profils (Collectivité, Entreprise, Leader, Prescripteur) et leur question.
6. **Expertises** — 5 cartes numérotées (Stratégie territoriale, Affaires publiques, Marque récit & prise de parole, Communication & écosystèmes digitaux, Temps forts & situations sensibles) avec promesse et lien « Comprendre notre approche ».
7. **Méthode** — 01 Comprendre → 02 Révéler → 03 Faire rayonner, en frise éditoriale.
8. **Réalisations** — grille visuelle de 3 emplacements clairement marqués « Cas à valider avant publication » (structure : secteur / enjeu / résultat documenté). Aucun client, chiffre ou logo inventé.
9. **Réassurance** — principes documentés (Work first, Point of view first, Case studies deep, Distinctive voice, Proof without inflation, Conversion discreet) + emplacement témoignage explicitement à compléter.
10. **Insights** — 3 emplacements d'articles à alimenter, marqués comme tels.
11. **Contact** — formulaire : nom, e-mail professionnel, organisation, fonction, type de besoin (select : territoire / affaires publiques / marque / digital / temps fort / situation sensible), message, délai optionnel. Validation Zod + messages d'erreur et de confirmation (toast). Coordonnées affichées comme champs à renseigner avant publication.
12. **CTA band** — fond bleu profond, un seul bouton.
13. **Footer** — navigation secondaire, coordonnées (placeholders identifiés), mentions légales. Réseaux sociaux non ajoutés faute d'information fournie.

## Contenu manquant

Le document indique explicitement que références clients, chiffres, témoignages, équipe et coordonnées ne sont pas validés. Ces zones seront des emplacements visuellement propres et étiquetés « à compléter », pas du contenu inventé.

## Détails techniques

- Route `/` réécrite dans `src/routes/index.tsx`, sections en composants réutilisables sous `src/components/sections/`.
- Tokens de couleur, rayons et ombres définis en oklch dans `src/styles.css` (`@theme inline`) — aucune couleur en dur dans les composants.
- Polices chargées via `<link>` dans `src/routes/__root.tsx`, familles déclarées en tokens `--font-*`.
- Formulaire : `react-hook-form` + `zod`, composants shadcn existants, `sonner` pour la confirmation (Toaster monté dans `__root.tsx`).
- Animations en CSS/IntersectionObserver via un petit hook `useReveal` — pas de librairie lourde.
- Visuels : images générées (paysages/territoires, portraits de travail) optimisées et importées en assets, avec `alt` descriptifs et lazy loading.
- SEO : `head()` sur `/` avec title, meta description, og/twitter, JSON-LD Organization sur `__root`, un seul H1, H2 par section.
- Le formulaire n'envoie pas encore d'e-mail (pas de backend activé) : il valide et confirme côté client. Branchement d'un envoi réel possible dans un second temps.
