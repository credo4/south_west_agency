import insight01_600 from "@/assets/insight-01-600.webp";
import insight01_900 from "@/assets/insight-01-900.webp";
import insight02_600 from "@/assets/insight-02-600.webp";
import insight02_900 from "@/assets/insight-02-900.webp";
import insight03_600 from "@/assets/insight-03-600.webp";
import insight03_900 from "@/assets/insight-03-900.webp";
import insight04_600 from "@/assets/insight-04-600.webp";
import insight04_900 from "@/assets/insight-04-900.webp";
import insight05_600 from "@/assets/insight-05-600.webp";
import insight05_900 from "@/assets/insight-05-900.webp";

export type ArticleSection = {
  titre: string;
  paragraphes: string[];
};

export type Article = {
  slug: string;
  numero: string;
  categorie: string;
  titre: string;
  chapo: string;
  datePublication: string; // ISO (YYYY-MM-DD)
  tempsLecture: string;
  image: string;
  srcSet: string;
  alt: string;
  sections: ArticleSection[];
};

/**
 * Source unique des articles Insights — consommée par la carte d'accueil
 * (Insights.tsx), la liste complète (/insights) et la page article
 * (/insights/$slug). Ne pas dupliquer ce contenu ailleurs.
 */
export const ARTICLES: Article[] = [
  {
    slug: "projet-territorial-mauvais-recit",
    numero: "01",
    categorie: "Point de vue",
    titre: "Pourquoi un bon projet territorial peut échouer à cause d'un mauvais récit.",
    chapo:
      "La qualité technique d'un projet ne suffit jamais à garantir son acceptation. Sans récit construit, même le dossier le mieux ficelé peut se heurter à l'incompréhension — voire à l'opposition — de ceux qu'il est censé servir.",
    datePublication: "2026-06-02",
    tempsLecture: "5 min",
    image: insight01_900,
    srcSet: `${insight01_600} 600w, ${insight01_900} 900w`,
    alt: "Un intervenant prend la parole au micro derrière un pupitre.",
    sections: [
      {
        titre: "Le paradoxe du projet solide mal compris",
        paragraphes: [
          "Un projet territorial peut réunir toutes les conditions de la réussite sur le papier — un diagnostic rigoureux, un montage financier solide, des porteurs légitimes, un calendrier réaliste — et pourtant se heurter à une opposition qui semble disproportionnée au regard de sa qualité intrinsèque. Ce paradoxe revient si souvent qu'il mérite d'être pris au sérieux comme un phénomène en soi, plutôt que comme un accident de parcours.",
          "La tentation, face à ce blocage, est de chercher la cause du côté du fond : le projet serait mal calibré, les études insuffisantes, les compensations mal négociées. Mais dans un nombre significatif de cas, le problème ne se situe pas dans ce que le projet fait — il se situe dans ce qu'on en a compris, ou plutôt dans ce qu'on n'en a pas compris.",
        ],
      },
      {
        titre: "Ce que le public entend quand on lui explique un projet",
        paragraphes: [
          "Un porteur de projet raisonne en étapes techniques : diagnostic, faisabilité, financement, réalisation. Un public raisonne en questions simples : qu'est-ce que ça change pour moi, qui décide, qui en profite, qu'est-ce que je risque de perdre. Ces deux grammaires ne se recouvrent pas spontanément, et c'est précisément l'écart entre elles qui produit l'incompréhension.",
          "Quand une présentation s'adresse à la première grammaire sans traduire vers la seconde, elle informe sans convaincre. Le public retient alors ce qu'il peut retenir : une impression, une inquiétude, une phrase sortie de son contexte technique. Le récit se construit de toute façon — la seule question est de savoir qui le construit, et avec quelle intention.",
        ],
      },
      {
        titre: "Les trois ruptures de récit les plus fréquentes",
        paragraphes: [
          "La première rupture est le jargon. Un vocabulaire technique, réglementaire ou financier, précis pour les experts, devient opaque pour tous les autres — et l'opacité se lit souvent comme de la dissimulation, même quand elle n'est que de la précision mal traduite.",
          "La deuxième rupture est l'absence de bénéficiaire nommé. Un projet présenté en termes d'intérêt général abstrait — « la collectivité », « le territoire », « les usagers » — laisse chacun se demander où il se situe personnellement dans cette généralité. Nommer concrètement qui bénéficie de quoi, et comment, change la nature de l'écoute.",
          "La troisième rupture est le temps long non raconté. Un projet se déroule sur plusieurs années, avec des phases, des ajustements, des irritants temporaires. Quand seul le résultat final est présenté, chaque contretemps du chantier devient une preuve d'échec aux yeux d'un public qui n'avait pas été prévenu qu'il ferait partie du parcours.",
        ],
      },
      {
        titre: "Ce que change un récit construit en amont",
        paragraphes: [
          "Un récit construit en amont ne consiste pas à habiller un projet de communication après coup. Il consiste à penser, dès la phase de diagnostic, comment ce projet sera compris par ceux qui n'ont pas participé à sa conception — et à ajuster le projet lui-même, pas seulement son vocabulaire.",
          "Cette anticipation change la nature du dialogue avec les parties prenantes. Au lieu de découvrir les objections au moment de l'annonce, l'organisation les identifie pendant l'instruction, quand elles peuvent encore nourrir des ajustements. Le récit devient alors un outil de pilotage du projet, pas seulement un outil de sa présentation finale.",
        ],
      },
      {
        titre: "Une méthode : comprendre avant de parler",
        paragraphes: [
          "La méthode la plus fiable commence par une lecture du territoire avant toute prise de parole : qui sont les acteurs concernés, quelles sont leurs préoccupations réelles, quel vocabulaire leur est familier, quelles expériences passées colorent leur perception d'un projet de cette nature.",
          "Ce travail de compréhension préalable ne retarde pas le projet — il en sécurise l'acceptation. Un récit qui part de ce que le public sait déjà, redoute déjà, ou espère déjà, a plus de chances d'être entendu qu'un récit qui part uniquement de ce que l'organisation veut dire.",
        ],
      },
    ],
  },
  {
    slug: "territoire-plateforme-de-relation",
    numero: "02",
    categorie: "Décryptage",
    titre: "Le territoire comme plateforme de relation, pas seulement comme localisation.",
    chapo:
      "Un territoire n'est pas une adresse sur une carte : c'est un réseau vivant d'acteurs, d'histoires et d'attentes. S'y implanter sans le comprendre, c'est s'exposer à des résistances qu'aucune étude de sol ne permet d'anticiper.",
    datePublication: "2026-06-16",
    tempsLecture: "5 min",
    image: insight02_900,
    srcSet: `${insight02_600} 600w, ${insight02_900} 900w`,
    alt: "Une main annote un post-it au-dessus d'une carte de territoire, lors d'un atelier.",
    sections: [
      {
        titre: "De la carte au réseau",
        paragraphes: [
          "Dans la plupart des dossiers d'implantation, le territoire apparaît d'abord comme une donnée géographique : une parcelle, un zonage, une desserte, une distance aux infrastructures. Cette lecture cartographique est nécessaire, mais elle est partielle — elle décrit un espace, pas un milieu.",
          "Un territoire est aussi, et peut-être surtout, un réseau de relations : des élus qui se connaissent depuis longtemps, des associations qui portent une mémoire locale, des entreprises qui s'observent, des habitants qui ont un avis sur ce qui se construit près de chez eux. Ignorer ce réseau, c'est arriver dans une pièce déjà pleine de conversations sans en avoir écouté aucune.",
        ],
      },
      {
        titre: "Ce qu'implique s'implanter quelque part",
        paragraphes: [
          "S'implanter, ce n'est pas seulement poser un bâtiment sur un terrain. C'est entrer dans un système d'équilibres déjà établis — entre acteurs économiques, entre priorités politiques, entre attentes citoyennes — et modifier, ne serait-ce que légèrement, cet équilibre.",
          "Cette entrée dans le système est toujours observée, même quand elle n'est pas commentée publiquement. Les acteurs locaux se forment un jugement avant même la première réunion officielle, à partir de signaux indirects : qui a été consulté, qui ne l'a pas été, quel ton a été employé dans les premiers échanges.",
        ],
      },
      {
        titre: "Les parties prenantes qu'on oublie systématiquement",
        paragraphes: [
          "Les grands acteurs institutionnels — la mairie, l'intercommunalité, la préfecture — sont rarement oubliés dans une cartographie d'implantation. Ce sont les acteurs intermédiaires qui échappent le plus souvent à l'attention : les associations de riverains, les chambres consulaires locales, les collectifs professionnels, la presse territoriale.",
          "Ces acteurs intermédiaires ont un poids d'influence souvent supérieur à leur visibilité institutionnelle, précisément parce qu'ils sont en contact direct et permanent avec la population. Une cartographie qui s'arrête aux décideurs officiels laisse un angle mort exactement là où se forme l'opinion locale.",
        ],
      },
      {
        titre: "La relation comme actif de long terme",
        paragraphes: [
          "Une relation construite avec les acteurs d'un territoire ne se mesure pas seulement à l'aune d'un projet ponctuel. Elle constitue un actif qui se reporte sur les projets suivants : la confiance accumulée facilite les prochaines discussions, tandis que la défiance accumulée les alourdit durablement.",
          "Traiter la relation territoriale comme un actif change l'horizon de décision. Certains arbitrages qui semblent coûteux à court terme — plus de temps de concertation, plus de transparence sur les choix faits — se révèlent rentables dès qu'on les regarde à l'échelle des années suivantes.",
        ],
      },
      {
        titre: "Ce que ça change pour une entreprise qui arrive",
        paragraphes: [
          "Pour une entreprise ou une organisation qui arrive sur un territoire, cette lecture en réseau plutôt qu'en carte change concrètement la méthode : elle implique une phase d'écoute avant toute annonce, une identification nominative des interlocuteurs à rencontrer, et une attention portée aux usages et codes locaux, pas seulement aux normes réglementaires.",
          "Elle implique aussi d'accepter que l'implantation ne se termine pas à l'inauguration. Le territoire continue d'observer, de comparer, de se souvenir. La qualité de la relation nouée dès les premiers mois dessine la manière dont l'organisation sera perçue pendant toute la durée de sa présence.",
        ],
      },
    ],
  },
  {
    slug: "communication-institutionnelle-informer-ne-suffit-plus",
    numero: "03",
    categorie: "Décryptage",
    titre: "Communication institutionnelle\u00a0: informer ne suffit plus.",
    chapo:
      "La transparence documentaire ne produit pas automatiquement la compréhension. Une institution qui publie tout peut malgré tout être mal comprise, si elle n'a pas construit le chemin qui mène de l'information à l'adhésion.",
    datePublication: "2026-06-30",
    tempsLecture: "5 min",
    image: insight03_900,
    srcSet: `${insight03_600} 600w, ${insight03_900} 900w`,
    alt: "Deux hommes marchent devant un bâtiment institutionnel vitré.",
    sections: [
      {
        titre: "L'illusion de l'information disponible",
        paragraphes: [
          "Beaucoup d'institutions considèrent avoir rempli leur devoir de communication dès lors que l'information est disponible quelque part : un rapport publié, une délibération en ligne, un communiqué diffusé. Cette disponibilité formelle est souvent confondue avec une communication réussie.",
          "Or la disponibilité d'une information ne garantit ni sa lecture, ni sa compréhension, ni son acceptation. Un document technique de plusieurs dizaines de pages, aussi complet soit-il, ne remplace pas un effort de mise en récit adressé à ceux qui n'ont ni le temps ni les codes pour le décrypter eux-mêmes.",
        ],
      },
      {
        titre: "Informer, expliquer, faire comprendre : trois exercices différents",
        paragraphes: [
          "Informer consiste à mettre à disposition un fait. Expliquer consiste à relier ce fait à un contexte, une cause, une conséquence. Faire comprendre consiste à s'assurer que ce lien a effectivement été reçu et intégré par l'interlocuteur, dans ses propres termes.",
          "Une institution peut informer sans expliquer, et expliquer sans faire comprendre. Chacun de ces trois niveaux demande un effort spécifique, et c'est souvent le troisième — le plus exigeant, celui qui suppose de se mettre à la place du public — qui est le plus négligé dans les pratiques courantes.",
        ],
      },
      {
        titre: "Le coût du silence stratégique",
        paragraphes: [
          "Le silence, choisi par prudence ou par manque de ressources, a un coût qui n'apparaît pas immédiatement. Un sujet sur lequel l'institution ne prend pas la parole ne reste pas vide de récit : il se remplit d'interprétations, de rumeurs, ou de récits portés par d'autres acteurs, parfois hostiles.",
          "Reprendre la parole après une période de silence est toujours plus coûteux que de l'avoir maintenue en continu. L'institution doit alors non seulement transmettre son message, mais aussi défaire les interprétations qui se sont installées pendant son absence.",
        ],
      },
      {
        titre: "Construire une parole qui engage sans surpromettre",
        paragraphes: [
          "Une parole institutionnelle efficace engage sur ce qu'elle peut réellement tenir. La tentation de rassurer immédiatement, en annonçant des résultats ou des délais optimistes, produit un bénéfice de court terme et un coût de crédibilité à moyen terme dès que la réalité s'écarte de l'annonce.",
          "L'exercice consiste à trouver le point d'équilibre entre une parole suffisamment engageante pour être utile, et suffisamment prudente pour rester tenable dans la durée — y compris quand le calendrier ou le contexte évoluent, ce qui est presque toujours le cas.",
        ],
      },
      {
        titre: "Ce que les publics attendent réellement d'une institution",
        paragraphes: [
          "Les publics n'attendent pas d'une institution qu'elle ait toujours raison ou qu'elle avance sans jamais rencontrer de difficulté. Ils attendent d'être traités comme des interlocuteurs informés, capables d'entendre une explication complète plutôt qu'une version simplifiée à l'excès.",
          "Cette attente se traduit concrètement par une préférence pour la constance et la clarté sur la durée, plutôt que pour la perfection ponctuelle d'une annonce. Une institution qui explique ses choix, y compris ses limites, construit une crédibilité plus durable qu'une institution qui ne communique que sur ses réussites.",
        ],
      },
    ],
  },
  {
    slug: "dirigeant-porte-parole-ancrage-territorial",
    numero: "04",
    categorie: "Grand format",
    titre: "Le dirigeant comme porte-parole de son ancrage territorial.",
    chapo:
      "La parole institutionnelle ne suffit plus à elle seule : c'est de plus en plus au dirigeant lui-même qu'il revient d'incarner l'ancrage d'une organisation dans son territoire, à condition de savoir dans quel registre s'exprimer.",
    datePublication: "2026-07-14",
    tempsLecture: "6 min",
    image: insight04_900,
    srcSet: `${insight04_600} 600w, ${insight04_900} 900w`,
    alt: "Portrait d'une professionnelle casquée sur un site en activité, bras croisés.",
    sections: [
      {
        titre: "Pourquoi la parole institutionnelle ne suffit plus",
        paragraphes: [
          "Un communiqué signé par une organisation, aussi bien rédigé soit-il, s'adresse à un public de plus en plus habitué à chercher un visage et une voix derrière les positions institutionnelles. La personne qui parle devient, dans l'esprit du public, presque aussi importante que ce qui est dit.",
          "Cette évolution n'annule pas la parole institutionnelle classique — communiqués, rapports, prises de position collectives — mais elle la complète nécessairement. Un territoire, un partenaire, un client cherche de plus en plus à savoir qui incarne l'engagement annoncé, et pas seulement quelle structure le porte.",
        ],
      },
      {
        titre: "Ce qu'un dirigeant peut dire que son organisation ne peut pas",
        paragraphes: [
          "Une organisation parle au nom d'un collectif et engage nécessairement une parole prudente, validée, consensuelle. Un dirigeant peut, dans certaines limites, exprimer une conviction personnelle, raconter un choix, assumer une part de doute — des registres que la parole institutionnelle pure s'interdit le plus souvent.",
          "C'est cette marge de subjectivité assumée qui rend la parole du dirigeant crédible aux yeux d'un public devenu méfiant envers les discours trop lisses. Elle humanise une position sans l'affaiblir, à condition qu'elle reste alignée avec les actes de l'organisation qu'il représente.",
        ],
      },
      {
        titre: "Les registres : la vision, l'engagement, la responsabilité",
        paragraphes: [
          "La vision est le registre dans lequel un dirigeant explique où va son organisation et pourquoi, au-delà des résultats immédiats — un exercice de projection qui donne du sens aux décisions présentes.",
          "L'engagement est le registre dans lequel il exprime ce que l'organisation choisit de faire pour son territoire, ses équipes ou ses partenaires — un registre concret, vérifiable, qui ne tolère pas l'approximation.",
          "La responsabilité est le registre le plus exigeant : celui où le dirigeant assume, en son nom, une décision difficile ou une conséquence imprévue. C'est souvent dans ce registre que se joue la crédibilité durable d'une parole de dirigeant, bien plus que dans les annonces favorables.",
        ],
      },
      {
        titre: "Les pièges à éviter",
        paragraphes: [
          "Le premier piège est la sur-personnalisation : faire reposer sur le seul dirigeant une parole qui devrait rester partagée par l'organisation, au risque de fragiliser le discours institutionnel dès que ce dirigeant change ou s'absente.",
          "Le deuxième est la parole hors-sol : un discours de vision déconnecté des réalités concrètes vécues par les équipes ou le territoire, qui produit un effet inverse de celui recherché — de la défiance plutôt que de l'adhésion.",
          "Le troisième est l'absence de continuité : une prise de parole ponctuelle et forte, non suivie d'autres prises de parole cohérentes dans le temps, qui s'efface aussi vite qu'elle a marqué les esprits.",
        ],
      },
      {
        titre: "Préparer un dirigeant : media training et cohérence",
        paragraphes: [
          "Préparer un dirigeant à ce rôle ne consiste pas à lui apprendre des formules, mais à clarifier avec lui les messages qu'il souhaite porter durablement, et à s'assurer qu'il peut les décliner naturellement, dans des formats différents, sans perdre en authenticité.",
          "Le media training, bien conduit, ne cherche pas à lisser une personnalité mais à sécuriser une prise de parole spontanée : anticiper les questions difficiles, structurer une réponse claire sous pression, garder une cohérence de fond même quand la forme s'adapte à l'interlocuteur ou au format.",
        ],
      },
      {
        titre: "La parole comme discipline, pas comme performance",
        paragraphes: [
          "La parole d'un dirigeant qui fonctionne dans la durée n'est pas celle qui produit le meilleur effet ponctuel, mais celle qui reste cohérente avec elle-même d'une prise de parole à l'autre, et avec les décisions effectivement prises par l'organisation.",
          "Considérer cette parole comme une discipline plutôt que comme une performance change la manière de la préparer : moins d'effet de manche recherché pour un moment donné, plus d'attention portée à la constance d'un positionnement qui s'installe, prise de parole après prise de parole, dans la mémoire d'un territoire.",
        ],
      },
    ],
  },
  {
    slug: "preparer-communication-projet-sensible",
    numero: "05",
    categorie: "Outil",
    titre: "Comment préparer la communication d'un projet sensible avant l'annonce.",
    chapo:
      "Avant toute annonce sensible, six questions méritent d'être tranchées, les oppositions probables cartographiées et les porte-parole préparés : la check-list opérationnelle de South West Agency.",
    datePublication: "2026-07-28",
    tempsLecture: "4 min",
    image: insight05_900,
    srcSet: `${insight05_600} 600w, ${insight05_900} 900w`,
    alt: "Plusieurs mains pointent des graphiques sur un document, en réunion.",
    sections: [
      {
        titre: "Les 6 questions à trancher avant toute annonce",
        paragraphes: [
          "Avant de préparer le moindre message, six questions doivent être tranchées en interne. Elles ne se posent pas dans n'importe quel ordre, et laisser l'une d'elles sans réponse claire fragilise tout ce qui suivra.",
          "1. Qui doit l'apprendre en premier, et dans quel ordre — équipes internes, partenaires, autorités, médias, grand public ?",
          "2. Quel est le message central, en une phrase, que l'on veut voir reprise partout ?",
          "3. Quelles concessions ou limites du projet sont assumées publiquement, et lesquelles ne le sont pas ?",
          "4. Qui, dans l'organisation, a le mandat de répondre aux questions difficiles ?",
          "5. Quel est le scénario du pire, et l'organisation peut-elle y répondre sans improviser ?",
          "6. Quel calendrier minimum sépare l'annonce interne de l'annonce publique ?",
        ],
      },
      {
        titre: "Cartographier les oppositions probables",
        paragraphes: [
          "Toute annonce sensible rencontre des oppositions, qu'elles soient organisées ou diffuses. Les identifier avant l'annonce, plutôt que les découvrir après, permet de préparer des réponses au lieu d'improviser des réactions.",
          "Cette cartographie distingue les oppositions de principe (hostiles au projet lui-même), les oppositions de méthode (favorables au fond mais critiques sur la manière), et les oppositions de circonstance (qui saisissent l'annonce pour porter un autre sujet). Chacune appelle une réponse différente.",
        ],
      },
      {
        titre: "Construire les éléments de langage et leurs limites",
        paragraphes: [
          "Les éléments de langage ne sont utiles que s'ils sont doublés d'une règle claire sur leurs limites : jusqu'où l'organisation peut aller dans la précision, et à partir de quel moment une question doit être renvoyée vers un futur point d'étape plutôt que traitée dans l'urgence.",
          "☐ Un message central tenable dans la durée.",
          "☐ Trois arguments de soutien vérifiables.",
          "☐ Une réponse préparée aux deux ou trois objections les plus prévisibles.",
          "☐ Une formule assumée pour ce qui n'est pas encore tranché.",
        ],
      },
      {
        titre: "Choisir la séquence et les canaux",
        paragraphes: [
          "La séquence d'annonce détermine en grande partie sa réception. Une annonce qui atteint un public par voie détournée — avant l'organisation elle-même — perd immédiatement en maîtrise et en crédibilité, quel que soit le soin apporté au message.",
          "Le choix des canaux — rencontre directe, communiqué, réseaux sociaux, presse — dépend moins des habitudes de communication de l'organisation que des habitudes de réception du public concerné. Un public de proximité attend souvent un contact direct avant toute diffusion publique.",
        ],
      },
      {
        titre: "Préparer les porte-parole",
        paragraphes: [
          "Le ou les porte-parole désignés doivent être formés spécifiquement sur ce sujet, au-delà de leur media training général : connaître précisément les limites de ce qui peut être dit, et savoir reconnaître les questions à renvoyer plutôt qu'à improviser.",
          "☐ Un porte-parole principal identifié et disponible.",
          "☐ Une liste des questions difficiles anticipées, avec réponse validée.",
          "☐ Une consigne claire sur ce qui reste hors périmètre de la prise de parole.",
        ],
      },
      {
        titre: "Prévoir l'après-annonce",
        paragraphes: [
          "L'annonce n'est pas un point final : elle ouvre une période où les réactions doivent être suivies et, si nécessaire, adressées. Ne rien prévoir pour cette phase revient à préparer une sortie sans préparer l'atterrissage.",
          "☐ Un dispositif de suivi des réactions dans les jours suivants.",
          "☐ Un point d'étape prévu pour compléter les informations non communiquées à l'annonce.",
          "☐ Une évaluation, à froid, de ce qui a fonctionné et de ce qui devra être ajusté la prochaine fois.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

/** Jusqu'à `limit` articles liés, en excluant l'article courant. */
export function getRelatedArticles(slug: string, limit = 2): Article[] {
  return ARTICLES.filter((a) => a.slug !== slug).slice(0, limit);
}
