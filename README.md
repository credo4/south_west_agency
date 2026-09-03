# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Formulaire de contact — base de données & e-mail

Le formulaire de contact (`src/components/sections/Contact.tsx`) enregistre
chaque soumission dans MySQL et envoie un e-mail (notification à l'agence +
accusé de réception à l'expéditeur). Sans configuration, il échoue proprement
(toast d'erreur côté utilisateur, message clair dans les logs serveur) — il
ne prétend jamais avoir réussi si rien n'a été enregistré.

**1. Copier `.env.example` en `.env`** (jamais commité, voir `.gitignore`) et
renseigner les vraies valeurs — voir les commentaires du fichier pour la
marche à suivre exacte dans hPanel (Hostinger).

**2. Déploiement Hostinger** : l'app doit tourner sur un plan Node.js
(Business/Cloud hosting, ou VPS) — MySQL en TCP direct n'est pas exécutable
sur Cloudflare Workers.

```sh
npm run build   # génère .output/server (preset nitro "node-server")
npm start       # équivaut à : node .output/server/index.mjs
```

Dans le panel Hostinger, pointer le fichier de démarrage vers
`.output/server/index.mjs` et définir les variables d'environnement du
`.env` directement dans l'interface (ou déposer le fichier `.env` sur le
serveur — jamais dans le dépôt Git).

La table `contact_submissions` se crée automatiquement au premier message
reçu (pas de migration manuelle à lancer) — schéma dans
`src/server/db.ts`.
