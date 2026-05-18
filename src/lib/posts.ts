export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; title: string; text: string }
  | { type: "quote"; text: string; author?: string };

export type Post = {
  slug: string;
  title: string;
  seoTitle: string;
  image: string;
  excerpt: string;
  seoDescription: string;
  keywords: string[];
  category: string;
  readingTime: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  intro: string;
  blocks: Block[];
};

export const SITE_URL = "https://harenos-clone.vercel.app";
export const SITE_NAME = "Harenos";
export const DEFAULT_AUTHOR = "L'équipe Harenos";

export const POSTS: Post[] = [
  {
    slug: "renovation-salon",
    title: "Tout savoir sur la rénovation d'un salon",
    seoTitle: "Rénovation salon : guide complet, prix et conseils 2026",
    image:
      "https://cdn.prod.website-files.com/66b5915d0cf82dc2bc8a5f3b/670d97c70334f3320bd08dbc_renovation-salon.webp",
    excerpt:
      "Optimiser l'espace, choisir les bons matériaux et créer une atmosphère qui vous ressemble : nos clés pour réussir la rénovation de votre salon.",
    seoDescription:
      "Réussir la rénovation de votre salon : usage, circulation, sols, lumière, palette, budget. Le guide d'une entreprise IDF avec prix et conseils pratiques.",
    keywords: [
      "rénovation salon",
      "rénover son salon",
      "aménagement salon",
      "travaux salon",
      "prix rénovation salon",
      "entreprise rénovation Île-de-France",
    ],
    category: "Pièces de vie",
    readingTime: "8 min de lecture",
    publishedAt: "2026-04-12",
    updatedAt: "2026-05-10",
    author: DEFAULT_AUTHOR,
    intro:
      "Le salon est la pièce la plus vécue de la maison. C'est là qu'on reçoit, qu'on lit, qu'on regarde un film, qu'on travaille parfois. Le rénover, c'est bien plus que repeindre les murs : c'est repenser un espace pour qu'il colle à votre quotidien sur les dix prochaines années. Voici un guide complet pour aborder ces travaux sereinement.",
    blocks: [
      { type: "h2", text: "Définir l'usage avant le style" },
      {
        type: "p",
        text: "Avant de feuilleter des nuanciers ou de comparer des canapés, prenez le temps d'observer comment vous vivez votre salon. Combien de personnes l'occupent en moyenne ? Y mangez-vous régulièrement ? Faut-il y intégrer un coin bureau, un espace lecture, un coin jeux pour les enfants ? Un salon de 25 m² conçu pour deux adultes ne sera pas aménagé comme le même volume partagé par une famille de cinq.",
      },
      {
        type: "p",
        text: "Cette analyse fonctionnelle conditionne tout le reste : circulation, points lumineux, prises électriques, choix du sol et des matériaux. Une rénovation réussie commence toujours par un usage clairement identifié, jamais par une inspiration Pinterest.",
      },
      { type: "h2", text: "Repenser la circulation et les volumes" },
      {
        type: "p",
        text: "Beaucoup de salons souffrent d'une circulation mal pensée : un canapé qui coupe une zone de passage, une porte qui bloque un mur, un radiateur posé là où on aurait voulu une bibliothèque. La rénovation est le bon moment pour corriger ces erreurs structurelles.",
      },
      {
        type: "p",
        text: "Si vous le pouvez, envisagez l'ouverture sur la cuisine ou la suppression d'une cloison non porteuse. Le gain en luminosité et en sensation d'espace est immédiat. Attention toutefois : toute modification structurelle doit faire l'objet d'une étude par un bureau d'études ou un architecte, surtout si vous habitez en copropriété.",
      },
      {
        type: "callout",
        title: "Le bon repère",
        text: "Comptez au minimum 80 cm de passage libre devant un canapé et 90 cm entre deux meubles principaux. En dessous, l'espace devient inconfortable au quotidien.",
      },
      { type: "h2", text: "Choisir un sol qui dure" },
      {
        type: "p",
        text: "Le sol est un poste majeur d'une rénovation de salon, à la fois en budget et en impact visuel. Trois familles dominent : le parquet (massif ou contrecollé), le carrelage grand format et les revêtements stratifiés ou vinyles.",
      },
      {
        type: "ul",
        items: [
          "Le parquet apporte chaleur et noblesse, mais demande de l'entretien et un sous-sol parfaitement plan.",
          "Le carrelage grand format (60×60 ou 90×90 cm) donne une impression de continuité et résiste à tout, mais il est froid sans plancher chauffant.",
          "Le stratifié et le vinyle imitent très bien les matières nobles à un prix maîtrisé, et se posent rapidement sur l'existant.",
        ],
      },
      {
        type: "p",
        text: "Notre conseil : si vous gardez votre salon plus de dix ans, investissez dans un matériau qui vieillit bien. Un parquet huilé prend une patine recherchée, un beau carrelage reste neuf des décennies. Les revêtements bas de gamme, eux, vieillissent visiblement en cinq à sept ans.",
      },
      { type: "h2", text: "Maîtriser la lumière, naturelle et artificielle" },
      {
        type: "p",
        text: "Un salon réussi joue sur plusieurs sources de lumière. Une seule suspension centrale, c'est l'erreur classique : la pièce paraît plate, sans relief. Multipliez les points : suspension décorative, appliques murales, lampadaire dans un angle, lampe à poser sur une console.",
      },
      {
        type: "p",
        text: "Pour la lumière naturelle, examinez vos ouvertures. Une fenêtre peut parfois être agrandie côté jardin, une baie remplacée par un vitrage plus performant. Sur les façades très exposées, pensez aux stores intégrés ou aux brise-soleil. Un excès de lumière en été est aussi pénible qu'un manque en hiver.",
      },
      { type: "h3", text: "La règle des trois couches" },
      {
        type: "p",
        text: "Les architectes d'intérieur travaillent en trois couches : la lumière ambiante (générale, douce), la lumière fonctionnelle (lecture, travail, cuisine), et la lumière d'accent (qui met en valeur un tableau, une plante, une niche). Reproduisez ce schéma chez vous et le résultat sera tout autre.",
      },
      { type: "h2", text: "Murs et palette : oser sans se tromper" },
      {
        type: "p",
        text: "Les tendances chromatiques évoluent vite, mais quelques règles restent. Les teintes sourdes, légèrement grisées (greige, terracotta poussiéreux, vert sauge) vieillissent mieux que les couleurs très saturées. Un mur d'accent peut suffire à donner du caractère sans alourdir la pièce.",
      },
      {
        type: "p",
        text: "Si vous hésitez, peignez un échantillon de 80×80 cm sur le mur concerné et vivez avec pendant trois jours. La même teinte change d'aspect du matin au soir, et notre œil s'y adapte. C'est le seul vrai test fiable.",
      },
      { type: "h2", text: "Le budget : à quoi s'attendre" },
      {
        type: "p",
        text: "Pour un salon de 25 m² rénové de manière complète (sol, murs, plafond, électricité partielle, peinture haut de gamme), comptez entre 350 et 600 € du m² en région parisienne, hors mobilier. Une rénovation lourde avec ouverture de cloison, dépose de chape, climatisation et menuiseries neuves peut monter à 900-1 200 € du m².",
      },
      {
        type: "p",
        text: "Ces écarts s'expliquent par trois facteurs : la qualité des matériaux, le niveau de finition (lissé, ratissé, simple raccord) et la complexité technique (passage de gaines, encastrements, lumières indirectes). Demandez toujours un devis détaillé poste par poste, jamais un forfait global.",
      },
      {
        type: "callout",
        title: "Astuce devis",
        text: "Exigez le détail des fournitures et de la main-d'œuvre séparément. C'est le seul moyen de comparer objectivement deux propositions et d'éviter les mauvaises surprises en cours de chantier.",
      },
      { type: "h2", text: "Phasing du chantier : éviter le chaos" },
      {
        type: "p",
        text: "Un salon en rénovation reste rarement utilisable. Si vous restez sur place, isolez la zone avec des bâches anti-poussière, protégez les sols voisins et concentrez les travaux bruyants sur quelques jours bien identifiés. Pour les chantiers lourds, prévoyez deux à quatre semaines de retrait.",
      },
      {
        type: "p",
        text: "L'ordre canonique est : dépose, gros œuvre et électricité, plâtrerie, sol, peinture, menuiseries et finitions. Inverser cet ordre coûte cher : un parquet posé avant la peinture, c'est un parquet à protéger en permanence ou à reprendre.",
      },
      { type: "h2", text: "Le mot de la fin" },
      {
        type: "p",
        text: "Rénover un salon, c'est trouver l'équilibre entre vos usages réels et vos envies esthétiques. Prenez le temps du diagnostic, choisissez des matériaux qui dureront, et travaillez la lumière comme on compose une partition. Le résultat ? Une pièce qui vous donne envie d'y passer du temps, pendant longtemps.",
      },
    ],
  },
  {
    slug: "renover-salle-a-manger",
    title: "Quels sont les avantages de rénover une salle à manger ?",
    seoTitle: "Rénover sa salle à manger : avantages, idées et budget",
    image:
      "https://cdn.prod.website-files.com/66b5915d0cf82dc2bc8a5f3b/670d98280364f94e4deda57b_renovation-salle-a-manger.webp",
    excerpt:
      "La salle à manger est la pièce sociale par excellence. La rénover transforme votre quotidien et la valeur de votre bien.",
    seoDescription:
      "Pourquoi rénover sa salle à manger ? Ouverture sur cuisine, rangements intégrés, éclairage, acoustique, valorisation du bien. Conseils et budgets détaillés.",
    keywords: [
      "rénover salle à manger",
      "rénovation salle à manger",
      "ouverture cuisine salle à manger",
      "aménagement salle à manger",
      "travaux salle à manger",
      "espace repas",
    ],
    category: "Pièces de vie",
    readingTime: "7 min de lecture",
    publishedAt: "2026-04-18",
    updatedAt: "2026-05-12",
    author: DEFAULT_AUTHOR,
    intro:
      "Trop souvent reléguée au second plan derrière la cuisine et le salon, la salle à manger est pourtant le théâtre de moments essentiels : repas de famille, dîners entre amis, anniversaires, fêtes de fin d'année. La rénover, c'est lui rendre sa place et profiter de bénéfices concrets, tant sur le plan du confort que sur celui de la valeur immobilière.",
    blocks: [
      { type: "h2", text: "Retrouver une vraie pièce dédiée" },
      {
        type: "p",
        text: "Beaucoup de logements anciens disposent d'une salle à manger sous-exploitée : trop petite, trop sombre, mal connectée à la cuisine. La rénovation permet de redonner du sens à cet espace, parfois en l'agrandissant via une ouverture, parfois en le restructurant complètement.",
      },
      {
        type: "p",
        text: "Le premier avantage est donc fonctionnel : on retrouve une table où dix personnes peuvent s'asseoir confortablement, un dressoir pour la vaisselle, un éclairage adapté. Le quotidien change immédiatement.",
      },
      { type: "h2", text: "Ouvrir sur la cuisine : le grand classique" },
      {
        type: "p",
        text: "Près de sept Français sur dix qui rénovent une salle à manger choisissent de l'ouvrir sur la cuisine. La frontière entre les deux pièces tombe au profit d'un espace unique, plus lumineux, plus convivial. Celui ou celle qui cuisine reste dans la conversation.",
      },
      {
        type: "p",
        text: "Cette ouverture, qui implique souvent une casse de cloison, peut nécessiter une étude structurelle (mur porteur) et un IPN. Comptez 3 000 à 8 000 € pour ce poste seul, hors finitions. Le gain en qualité de vie est cependant rarement contesté par ceux qui ont franchi le pas.",
      },
      {
        type: "callout",
        title: "Vigilance copropriété",
        text: "En appartement, toute modification de mur doit être autorisée par le règlement de copropriété et déclarée à l'assemblée générale. Anticipez ces démarches plusieurs mois à l'avance.",
      },
      { type: "h2", text: "Optimiser le rangement intégré" },
      {
        type: "p",
        text: "La rénovation est l'occasion d'intégrer du rangement sur mesure. Un bahut bas avec plan en pierre, une bibliothèque toute hauteur sur un pan de mur, une niche pour la cave à vin : ces équipements transforment l'usage de la pièce et libèrent visuellement l'espace.",
      },
      {
        type: "p",
        text: "Le rangement sur mesure coûte 30 à 50 % de plus que des meubles du commerce, mais s'inscrit parfaitement dans l'architecture et résiste mieux dans le temps. Sur un bien revendu, c'est aussi un argument fort.",
      },
      { type: "h2", text: "Le bon éclairage transforme tout" },
      {
        type: "p",
        text: "Une suspension placée à 75-85 cm au-dessus de la table, dotée d'une ampoule chaude (2 700 K) et d'un variateur, change radicalement l'ambiance des repas. Ajoutez des appliques murales basses pour les soirées prolongées, et un éclairage indirect pour la mise en valeur d'un mur ou d'un buffet.",
      },
      {
        type: "p",
        text: "L'erreur fréquente est de surcharger la pièce de spots encastrés. Un plafond constellé de halogènes crée une lumière clinique, peu compatible avec la chaleur d'un repas. Préférez deux ou trois sources fortes et bien placées.",
      },
      { type: "h2", text: "Valoriser son bien à la revente" },
      {
        type: "p",
        text: "Selon les notaires, un espace repas rénové, ouvert ou semi-ouvert, ajoute en moyenne 3 à 6 % à la valeur d'un appartement en zone urbaine dense. Le retour sur investissement n'est pas immédiat, mais il est mesurable, surtout si la rénovation s'accompagne d'une remise à niveau électrique et d'un sol neuf.",
      },
      { type: "h3", text: "Les postes les plus valorisants" },
      {
        type: "ul",
        items: [
          "Sol homogène avec le salon (parquet, pierre, grand carrelage)",
          "Rangements intégrés (bahut, niches, bibliothèque)",
          "Éclairage scénographique sur variateur",
          "Menuiseries performantes (double ou triple vitrage)",
        ],
      },
      { type: "h2", text: "Améliorer le confort acoustique" },
      {
        type: "p",
        text: "Une salle à manger pleine vide résonne. Sols durs, table en bois massif, vaisselle qui s'entrechoque : le brouhaha peut vite gâcher l'ambiance. La rénovation est le bon moment pour intégrer des solutions acoustiques discrètes : panneaux muraux en textile, rideaux épais, tapis sous la table, faux plafond absorbant.",
      },
      {
        type: "p",
        text: "Un tapis sous la table, mesurant 60 cm de plus que la table de chaque côté pour que les chaises restent dessus, peut diviser par deux la réverbération perçue. C'est l'astuce la plus simple et la moins coûteuse.",
      },
      { type: "h2", text: "Budget : à quoi s'attendre" },
      {
        type: "p",
        text: "Une rénovation simple (peinture, sol, éclairage, prises) d'une salle à manger de 20 m² se chiffre entre 5 000 et 12 000 €. Avec ouverture sur cuisine, rangements intégrés et menuiseries, le budget monte à 18 000 - 30 000 €. Ajoutez les meubles et l'art de la table, et l'enveloppe peut dépasser 40 000 € pour un projet haut de gamme.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Rénover une salle à manger, c'est faire le pari du temps long : du temps passé à table avec ceux qu'on aime, du temps gagné en confort, et du temps valorisé sur le bien lui-même. C'est l'une des rénovations au meilleur ratio plaisir/investissement.",
      },
    ],
  },
  {
    slug: "domotique-renovation",
    title: "Comment intégrer la domotique à vos projets de rénovation ?",
    seoTitle: "Domotique en rénovation : guide d'intégration 2026",
    image:
      "https://cdn.prod.website-files.com/66b5915d0cf82dc2bc8a5f3b/670d98b30334f3320bd15ae7_renovation-domotique.webp",
    excerpt:
      "Volets, chauffage, éclairage, sécurité : la maison connectée n'est plus un gadget. Comment l'intégrer intelligemment lors d'une rénovation ?",
    seoDescription:
      "Intégrer la domotique à votre rénovation : KNX, Zigbee, Wi-Fi, scénarios, sécurité, vie privée. Comparatif des solutions, usages vraiment utiles et budgets.",
    keywords: [
      "domotique rénovation",
      "maison connectée",
      "KNX rénovation",
      "Zigbee maison",
      "domotique appartement",
      "smart home France",
      "automatisation maison",
    ],
    category: "Technologie",
    readingTime: "9 min de lecture",
    publishedAt: "2026-03-28",
    updatedAt: "2026-05-05",
    author: DEFAULT_AUTHOR,
    intro:
      "La domotique a quitté l'univers des early adopters pour devenir un standard de la rénovation moderne. Pilotage de l'éclairage, des volets, du chauffage, de la sécurité, des scénarios… Bien intégrée, elle simplifie réellement le quotidien et réduit la consommation. Mal intégrée, elle devient une couche d'agacement supplémentaire. Voici comment l'aborder.",
    blocks: [
      { type: "h2", text: "Comprendre les trois approches" },
      {
        type: "p",
        text: "Avant de choisir un système, il faut comprendre les grandes familles techniques. Elles ne se valent pas et n'ont ni le même coût, ni la même durabilité.",
      },
      { type: "h3", text: "Le filaire (KNX, bus propriétaire)" },
      {
        type: "p",
        text: "Les solutions filaires comme KNX restent la référence haut de gamme. Tout le système communique via un bus dédié, indépendant du Wi-Fi. La fiabilité est totale, la longévité dépasse 25 ans, mais il faut prévoir le câblage en amont. Réservé donc aux rénovations lourdes ou à la construction neuve.",
      },
      { type: "h3", text: "Le sans-fil propriétaire (Zigbee, Z-Wave)" },
      {
        type: "p",
        text: "Plus souples, ces protocoles passent par une box centrale. L'intégration sur de l'existant est simple, les modules s'ajoutent au fil du temps. Compromis idéal pour une rénovation moyenne : robustesse correcte, écosystèmes ouverts, coûts maîtrisés.",
      },
      { type: "h3", text: "Le Wi-Fi pur" },
      {
        type: "p",
        text: "Le plus économique mais le moins fiable à grande échelle. Quinze ampoules connectées sur un même Wi-Fi peuvent saturer le réseau. À réserver aux installations légères ou en complément d'un système plus structuré.",
      },
      { type: "h2", text: "Les usages qui valent vraiment le coup" },
      {
        type: "p",
        text: "Tout n'est pas utile en domotique. Certains usages transforment vraiment le quotidien, d'autres restent gadgets. Notre classement issu de cinq ans de retours clients :",
      },
      { type: "h3", text: "Pilotage du chauffage par pièce" },
      {
        type: "p",
        text: "C'est l'investissement le plus rentable. Une régulation pièce par pièce, sur scénarios horaires, fait économiser 15 à 25 % sur la facture de chauffage. Le retour sur investissement se fait en deux à quatre ans selon le climat et l'énergie utilisée.",
      },
      { type: "h3", text: "Volets et brise-soleil automatisés" },
      {
        type: "p",
        text: "Sur une façade sud, des volets pilotés en fonction de la météo (fermeture l'été en pleine chaleur, ouverture matinale en hiver pour le gain solaire) améliorent le confort sans climatisation excessive. Un must dans les régions chaudes.",
      },
      { type: "h3", text: "Scénarios d'éclairage" },
      {
        type: "p",
        text: "Un seul interrupteur qui éteint tout en partant, un scénario soirée qui tamise plusieurs sources, une mise en route progressive le matin : ces fonctions s'utilisent tous les jours et ne fatiguent jamais.",
      },
      {
        type: "callout",
        title: "Le bon réflexe",
        text: "Ne domotisez que ce que vous utilisez plus d'une fois par jour. Un volet de salle de bain piloté à la voix n'apporte rien si vous l'ouvrez le matin et le fermez le soir manuellement.",
      },
      { type: "h2", text: "Penser le câblage en amont" },
      {
        type: "p",
        text: "Même avec du sans-fil, certains câbles font la différence : neutres aux interrupteurs (impératif pour beaucoup de modules), gaines vides entre les étages pour passer du câble plus tard, prises RJ45 dans chaque pièce principale pour les futurs équipements.",
      },
      {
        type: "p",
        text: "Investir 2 000 à 3 000 € de câblage supplémentaire pendant la rénovation peut éviter 15 000 € de retouches dix ans plus tard. C'est l'un des arbitrages les plus rentables d'une rénovation.",
      },
      { type: "h2", text: "Ne pas tomber dans le piège du tout-propriétaire" },
      {
        type: "p",
        text: "Méfiez-vous des systèmes 100 % fermés. Si la marque disparaît ou cesse le support cloud, votre installation peut devenir un mur d'objets inutilisables. Privilégiez les standards ouverts (Matter, KNX, Zigbee 3.0) et les box capables de fonctionner en local, sans cloud obligatoire.",
      },
      { type: "h2", text: "Sécurité et vie privée" },
      {
        type: "p",
        text: "Une maison connectée est une maison potentiellement piratable. Les bonnes pratiques sont simples mais souvent ignorées : réseau Wi-Fi dédié pour les objets connectés, mots de passe uniques, mises à jour automatiques, et caméras avec stockage local plutôt que cloud étranger.",
      },
      { type: "h2", text: "Budget et installation" },
      {
        type: "p",
        text: "Pour un appartement de 80 m², comptez 3 000 à 6 000 € pour une domotique sans-fil bien intégrée (éclairage, chauffage, volets, sécurité de base). Une installation KNX complète sur une maison de 150 m² démarre à 18 000 € et peut dépasser 40 000 € en version haut de gamme avec audio multipièces.",
      },
      {
        type: "p",
        text: "L'installation par un intégrateur certifié coûte plus cher qu'une box achetée en grande surface, mais le service après-vente et la cohérence du système valent la différence. Sur ce type de chantier, l'amateurisme se paie cher.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "La domotique réussie est celle qu'on oublie : elle agit en arrière-plan, anticipe les usages et libère du temps. Choisissez bien votre architecture, anticipez le câblage, restez sur des standards ouverts, et vous obtiendrez une maison qui vous facilitera la vie pendant des années.",
      },
    ],
  },
  {
    slug: "eclairage-economie-energie",
    title: "Éclairage : jusqu'à 60% d'économie d'énergie",
    seoTitle: "Éclairage LED rénovation : -60% sur la facture d'énergie",
    image:
      "https://cdn.prod.website-files.com/66b5915d0cf82dc2bc8a5f3b/670d996acc478abd1d716422_renovation-eclairage.webp",
    excerpt:
      "Repenser l'éclairage d'un logement, c'est diviser sa consommation par deux ou trois sans rien sacrifier au confort. Voici comment.",
    seoDescription:
      "Diviser la consommation d'éclairage par 3 sans perdre en confort : LED de qualité, détecteurs, variateurs, lumière naturelle. Méthode et budgets concrets.",
    keywords: [
      "éclairage LED",
      "économie énergie éclairage",
      "rénovation éclairage",
      "ampoule LED qualité",
      "variateur LED",
      "détecteur présence",
      "éclairage maison",
    ],
    category: "Économies d'énergie",
    readingTime: "8 min de lecture",
    publishedAt: "2026-04-02",
    updatedAt: "2026-05-08",
    author: DEFAULT_AUTHOR,
    intro:
      "L'éclairage représente entre 10 et 15 % de la consommation électrique d'un logement français. Avec les bons choix techniques et les bons gestes, on divise facilement ce poste par trois — sans perdre en confort, et souvent en gagnant en qualité d'ambiance. La rénovation est le moment idéal pour faire ce travail en profondeur.",
    blocks: [
      { type: "h2", text: "Pourquoi l'éclairage pèse autant" },
      {
        type: "p",
        text: "Un foyer français consomme en moyenne 350 kWh par an pour l'éclairage. Cela paraît peu, mais à l'échelle de 25 ans (la durée moyenne entre deux rénovations lourdes), c'est plus de 8 000 kWh dépensés, parfois pour des sources de qualité médiocre, mal placées, mal réglées.",
      },
      {
        type: "p",
        text: "L'enjeu n'est pas que financier. Un mauvais éclairage fatigue la vue, dérègle les rythmes biologiques et abîme la perception des couleurs. La rénovation est l'occasion de remettre tout à plat.",
      },
      { type: "h2", text: "Passer au LED, vraiment partout" },
      {
        type: "p",
        text: "Les LED de qualité consomment 6 à 10 fois moins qu'une ampoule halogène pour le même flux lumineux. Leur durée de vie atteint 25 000 à 50 000 heures, soit 20 à 30 ans d'usage domestique. Le gain est massif, mais à condition de choisir des LED correctes.",
      },
      { type: "h3", text: "Les critères qui comptent" },
      {
        type: "ul",
        items: [
          "Indice de rendu des couleurs (IRC) ≥ 90 pour les pièces de vie, ≥ 80 ailleurs.",
          "Température de couleur : 2 700 K (chaud) pour le confort, 3 000 K en cuisine, 4 000 K pour le travail.",
          "Compatibilité variateur si vous prévoyez des gradateurs.",
          "Garantie constructeur d'au moins 5 ans : c'est le marqueur d'une vraie qualité.",
        ],
      },
      {
        type: "callout",
        title: "Attention au low-cost",
        text: "Une LED à 1,50 € en grande surface peut perdre 30 % de son flux en deux ans et avoir un IRC catastrophique. Le surcoût d'une LED de marque (4-8 €) est largement compensé par sa longévité.",
      },
      { type: "h2", text: "Adapter le flux aux besoins réels" },
      {
        type: "p",
        text: "Un éclairage surdimensionné coûte cher pour rien. Voici les ordres de grandeur recommandés par les normes :",
      },
      {
        type: "ul",
        items: [
          "Salon : 100-200 lux en ambiance, 300 lux pour la lecture",
          "Cuisine : 300 lux en général, 500 lux sur le plan de travail",
          "Salle de bain : 200 lux en général, 500 lux sur le miroir",
          "Chambre : 100-150 lux, plus 300 lux ciblés sur la table de nuit",
          "Bureau : 500 lux à hauteur de plan de travail",
        ],
      },
      {
        type: "p",
        text: "Multiplier les sources de moyenne puissance, plutôt qu'une seule source surdimensionnée, donne un meilleur rendu et permet de n'allumer que ce qui sert.",
      },
      { type: "h2", text: "Détecteurs et gradateurs : les multiplicateurs" },
      {
        type: "p",
        text: "Un détecteur de présence dans un couloir, une cage d'escalier ou une buanderie élimine 100 % des oublis. Un variateur, lui, divise la consommation de moitié quand on ne pousse jamais l'intensité au maximum. Combinés, ces deux dispositifs apportent 20 à 30 % d'économies sur le poste éclairage, en plus du passage au LED.",
      },
      {
        type: "p",
        text: "Le coût d'un détecteur est de 25 à 80 €, celui d'un variateur de 30 à 120 € selon le niveau de qualité. L'amortissement est rapide, surtout pour les pièces de passage.",
      },
      { type: "h2", text: "Maximiser la lumière naturelle" },
      {
        type: "p",
        text: "La meilleure énergie est celle qu'on ne consomme pas. Profiter de la lumière naturelle suppose parfois d'agrandir une fenêtre, de remplacer un vitrage par un modèle plus performant, ou d'installer un puits de lumière dans une cage d'escalier. Sur la durée, ces investissements se rentabilisent doublement : économie d'énergie et gain de confort.",
      },
      {
        type: "p",
        text: "Côté décoration : des murs clairs (RAL 9010 ou équivalent), des miroirs bien placés et des textures peu absorbantes augmentent la lumière utile sans aucun watt supplémentaire. C'est gratuit et durablement efficace.",
      },
      { type: "h2", text: "Penser les commandes au bon endroit" },
      {
        type: "p",
        text: "Un interrupteur mal placé, et c'est une ampoule qui reste allumée la moitié du temps inutilement. À la rénovation, prévoyez systématiquement des doubles commandes pour les couloirs, les chambres et le salon, et un interrupteur dit « zéro » à l'entrée du logement qui coupe tout sauf le frigo.",
      },
      { type: "h2", text: "Une vraie économie chiffrée" },
      {
        type: "p",
        text: "Sur un logement de 90 m² qui passe d'un éclairage halogène standard à une installation LED bien pensée, avec quelques détecteurs et variateurs, la consommation d'éclairage chute typiquement de 350 kWh à 130 kWh par an. À 22 cts/kWh, c'est 48 € d'économie annuelle, soit 1 440 € sur 30 ans, à comparer à un investissement initial de 600 à 1 200 €. Le rendement net est confortable.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Diviser sa facture d'éclairage par trois est aujourd'hui à la portée de toutes les rénovations. Le LED de qualité, des détecteurs et variateurs bien placés, des sources multiples plutôt qu'une seule, et l'optimisation de la lumière naturelle : voilà le quatuor gagnant. Et au passage, vous y gagnerez aussi en confort visuel.",
      },
    ],
  },
  {
    slug: "renovation-chambre",
    title: "Rénovation de chambre : nos conseils",
    seoTitle: "Rénover une chambre : nos conseils pratiques 2026",
    image:
      "https://cdn.prod.website-files.com/66b5915d0cf82dc2bc8a5f3b/670d951291d457002c2f1906_renovation-chambre.webp",
    excerpt:
      "Acoustique, lumière, rangement, qualité de l'air : la chambre est la pièce où le détail fait la différence. Tour d'horizon des bons réflexes.",
    seoDescription:
      "Acoustique, lumière, qualité de l'air, rangement : les bons réflexes pour rénover une chambre. Budgets et matériaux recommandés par des professionnels.",
    keywords: [
      "rénovation chambre",
      "rénover sa chambre",
      "aménagement chambre",
      "isolation phonique chambre",
      "dressing intégré chambre",
      "chambre parentale",
      "qualité air chambre",
    ],
    category: "Pièces privées",
    readingTime: "7 min de lecture",
    publishedAt: "2026-03-15",
    updatedAt: "2026-04-28",
    author: DEFAULT_AUTHOR,
    intro:
      "On y passe un tiers de notre vie. Pourtant la chambre est souvent rénovée à la va-vite, comme une pièce secondaire. C'est une erreur : la qualité du sommeil dépend très directement de l'aménagement, de l'acoustique, de l'air et de la lumière. Voici les points sur lesquels ne pas se tromper.",
    blocks: [
      { type: "h2", text: "L'acoustique d'abord" },
      {
        type: "p",
        text: "Un bruit de fond supérieur à 35 décibels la nuit altère mesurablement la qualité du sommeil. Or, dans un logement urbain non traité, le niveau dépasse souvent 45 dB. La rénovation est le moment idéal pour corriger ce point, qui change tout au quotidien.",
      },
      {
        type: "p",
        text: "Trois leviers principaux : remplacer les menuiseries (un double vitrage acoustique réduit de 35 dB le bruit extérieur), désolidariser les cloisons mitoyennes (doublage sur ossature avec isolant minéral), et traiter les ponts phoniques au niveau des prises et des volets.",
      },
      {
        type: "callout",
        title: "Test simple",
        text: "Posez un téléphone qui joue de la musique dans la pièce voisine, et écoutez depuis la chambre fermée. Si vous distinguez les paroles, l'isolation est défaillante. Si vous percevez seulement un bruit sourd, elle est correcte.",
      },
      { type: "h2", text: "Maîtriser la lumière, surtout pour dormir" },
      {
        type: "p",
        text: "Une chambre bien rénovée propose deux ambiances opposées : très lumineuse le matin, totalement obscure la nuit. Des volets occultants ou des stores enrouleurs avec coffre intégré dans la cloison (pour ne pas casser le linéaire de plafond) répondent à ce double besoin.",
      },
      {
        type: "p",
        text: "Côté éclairage artificiel : exit les plafonniers uniques. Privilégiez une lumière indirecte douce, plus deux liseuses de lit pilotables indépendamment. Une température de 2 200 à 2 700 K favorise l'endormissement ; au-dessus, c'est la mauvaise direction.",
      },
      { type: "h2", text: "L'air, l'invisible essentiel" },
      {
        type: "p",
        text: "On respire 7 à 9 m³ d'air pendant une nuit de sommeil. Si cet air est confiné, chargé en CO₂ ou en composés organiques volatils, le réveil sera lourd. Pourtant la qualité de l'air intérieur reste largement ignorée dans les rénovations classiques.",
      },
      { type: "h3", text: "Les bons réflexes" },
      {
        type: "ul",
        items: [
          "Conserver ou installer une grille de ventilation haute et basse, ou raccorder la pièce à la VMC.",
          "Choisir des peintures, colles et vernis A+ (étiquette obligatoire en France).",
          "Éviter les meubles MDF bruts qui dégazent du formaldéhyde pendant des mois.",
          "Préférer un parquet huilé naturel ou un sol minéral aux moquettes synthétiques.",
        ],
      },
      { type: "h2", text: "Le rangement intelligent" },
      {
        type: "p",
        text: "Une chambre n'a pas besoin d'être grande, elle a besoin d'être bien rangée. Un dressing intégré sur un pan de mur (60 à 80 cm de profondeur, du sol au plafond) libère le reste de la pièce et offre 4 à 6 fois plus de capacité qu'une armoire. C'est presque toujours le bon arbitrage.",
      },
      {
        type: "p",
        text: "Si vous manquez de m², pensez aux solutions sous-lit (60 cm de hauteur sous sommier), aux têtes de lit creuses avec rangement intégré, ou aux niches murales aménagées. La cubature compte plus que la surface.",
      },
      { type: "h2", text: "Le sol et les murs : douceur et chaleur" },
      {
        type: "p",
        text: "Au sol, le parquet (massif ou contrecollé) reste le standard de qualité : il est chaud, agréable pieds nus, et atténue les bruits d'impact. Une moquette épaisse de qualité (et entretenue) peut convenir aux chambres d'enfants. Évitez les carrelages froids hors plancher chauffant.",
      },
      {
        type: "p",
        text: "Aux murs, des teintes sourdes et apaisantes (bleus poudrés, verts profonds, beiges doux) favorisent l'endormissement. Évitez les couleurs très saturées et les motifs hauts contrastes, plus stimulants qu'apaisants.",
      },
      { type: "h2", text: "Anticiper les usages annexes" },
      {
        type: "p",
        text: "Une chambre moderne est rarement réservée au sommeil. Bureau d'appoint, coin lecture, miroir habillage, parfois petite salle d'eau attenante… Anticipez ces fonctions dans le plan électrique : prises USB intégrées des deux côtés du lit, prise dédiée bureau, point d'eau si une suite parentale est envisagée plus tard.",
      },
      { type: "h2", text: "Budget" },
      {
        type: "p",
        text: "Une rénovation simple (peinture A+, sol, électricité légère, occultations) d'une chambre de 14 m² se situe entre 3 500 et 8 000 €. Avec dressing intégré, menuiseries acoustiques et reprise complète des doublages : 12 000 à 22 000 €. Un investissement modeste pour une pièce où l'on passe 30 % de sa vie.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Une bonne chambre, c'est une chambre où l'on s'endort plus vite et où l'on se réveille mieux. Acoustique, air, lumière, rangement, sol : chacun de ces postes mérite une attention rigoureuse. Et le bénéfice se mesure très vite, dès la première semaine après le chantier.",
      },
    ],
  },
  {
    slug: "renovation-complete-guide",
    title: "Rénovation complète : guide à l'usage des particuliers",
    seoTitle: "Rénovation complète : guide étape par étape 2026",
    image:
      "https://cdn.prod.website-files.com/66b5915d0cf82dc2bc8a5f3b/670d946254eb594420fcc81e_renovation-complete.webp",
    excerpt:
      "Du diagnostic à la livraison, le déroulé d'un chantier de rénovation totale, étape par étape, avec ses budgets et ses pièges.",
    seoDescription:
      "Étapes, devis, autorisations, planning, budgets, aides MaPrimeRénov : tout ce qu'il faut savoir pour réussir la rénovation totale d'un appartement ou d'une maison.",
    keywords: [
      "rénovation complète",
      "rénovation appartement Paris",
      "rénovation maison",
      "budget rénovation",
      "étapes rénovation",
      "MaPrimeRénov",
      "permis construire rénovation",
      "architecte rénovation",
    ],
    category: "Méthodologie",
    readingTime: "11 min de lecture",
    publishedAt: "2026-02-20",
    updatedAt: "2026-05-02",
    author: DEFAULT_AUTHOR,
    intro:
      "Rénover totalement un logement est l'un des projets les plus engageants qu'un particulier puisse mener. C'est aussi l'un des plus rentables, à condition de bien le structurer. Voici le déroulé complet, étape par étape, des décisions à prendre, des budgets à prévoir et des erreurs à éviter.",
    blocks: [
      { type: "h2", text: "Étape 1 : le diagnostic technique" },
      {
        type: "p",
        text: "Tout chantier sérieux commence par un état des lieux objectif. Faire venir un architecte ou un maître d'œuvre pour une visite technique de 1 à 2 heures (200 à 500 €) est l'investissement le plus rentable de tout le projet. Il identifie les murs porteurs, l'état des réseaux, les éventuels désordres structurels (fissures, humidité), et donne un ordre de grandeur de budget réaliste.",
      },
      {
        type: "p",
        text: "À ce stade, vous récupérez aussi les diagnostics obligatoires (amiante avant 1997, plomb avant 1949, DPE) et les plans actuels si vous ne les avez pas. Sans ces éléments, impossible de bâtir un projet solide.",
      },
      { type: "h2", text: "Étape 2 : définir le programme" },
      {
        type: "p",
        text: "Le programme, c'est la traduction de vos besoins en données concrètes : nombre de chambres, présence d'un bureau, type de cuisine, ouverte ou fermée, etc. Évitez de tomber dans le piège du « on verra plus tard » : chaque décision repoussée se paie en surcoûts pendant les travaux.",
      },
      {
        type: "callout",
        title: "Le bon réflexe",
        text: "Rédigez votre programme sur une seule page A4. Si vous n'y arrivez pas, c'est qu'il n'est pas mûr. Continuez à travailler avant d'engager des dépenses.",
      },
      { type: "h2", text: "Étape 3 : l'avant-projet et le chiffrage" },
      {
        type: "p",
        text: "Sur la base du diagnostic et du programme, l'architecte (ou maître d'œuvre) propose un avant-projet sommaire (APS), puis détaillé (APD). Ces documents permettent de consulter les entreprises et d'obtenir des devis fiables. Sans APD, les devis ne valent rien et le chantier explose toujours.",
      },
      {
        type: "p",
        text: "Comptez 8 à 12 % du montant des travaux pour des honoraires d'architecte complets (conception + suivi). En auto-pilotage avec maître d'œuvre, 5 à 8 %. En auto-gestion totale, vous économisez ces honoraires mais portez seul la coordination, ce qui est très lourd.",
      },
      { type: "h2", text: "Étape 4 : autorisations administratives" },
      {
        type: "p",
        text: "Selon l'ampleur des travaux, vous devrez peut-être déposer une déclaration préalable (DP) en mairie, voire un permis de construire. Délais : 1 à 3 mois selon la commune. En copropriété, une assemblée générale est souvent nécessaire pour toute modification visible ou structurelle.",
      },
      {
        type: "p",
        text: "Anticipez ces délais : un projet calé pour démarrer en juin et bloqué par une AG d'octobre, c'est six mois de perdus et parfois un permis qui n'aboutit pas.",
      },
      { type: "h2", text: "Étape 5 : choix des entreprises" },
      {
        type: "p",
        text: "Trois grands modèles s'offrent à vous :",
      },
      { type: "h3", text: "L'entreprise générale (TCE)" },
      {
        type: "p",
        text: "Une seule signature, un seul interlocuteur, un seul devis. La tranquillité, mais un coût de coordination intégré au prix. À privilégier si vous n'avez ni le temps ni l'énergie de piloter.",
      },
      { type: "h3", text: "Le lot par lot" },
      {
        type: "p",
        text: "Plomberie, électricité, plâtrerie, sol, peinture : chaque corps d'état est traité séparément. Économies possibles de 10 à 20 %, mais c'est vous (ou votre maître d'œuvre) qui assemblez et coordonnez. Pour particulier exigeant et disponible.",
      },
      { type: "h3", text: "L'architecte d'intérieur clé en main" },
      {
        type: "p",
        text: "Conception + sélection des artisans + suivi. Plus cher, mais le résultat est en général plus abouti côté esthétique et finitions. Recommandé sur les biens haut de gamme.",
      },
      { type: "h2", text: "Étape 6 : le chantier" },
      {
        type: "p",
        text: "Un chantier de rénovation totale suit un ordre quasi immuable : dépose et démolition, gros œuvre éventuel, fluides (plomberie, électricité, ventilation), plâtrerie, chapes et sols, peintures, menuiseries intérieures, mobilier, finitions. Chacune de ces phases s'enchaîne en cascade, et un retard sur une étape se répercute sur toutes les suivantes.",
      },
      {
        type: "p",
        text: "Comptez 4 à 8 mois pour un appartement de 70-100 m², 8 à 14 mois pour une maison, hors imprévus. Les imprévus, justement, doivent être budgétés : provisionnez 10 à 15 % du devis initial pour absorber les surprises. Aucun chantier ne s'en passe.",
      },
      {
        type: "callout",
        title: "Réunion de chantier",
        text: "Imposez une réunion de chantier hebdomadaire avec compte-rendu écrit. C'est le seul moyen de garder le cap, d'arbitrer les imprévus et d'éviter les dérives de planning.",
      },
      { type: "h2", text: "Étape 7 : réception et levées de réserves" },
      {
        type: "p",
        text: "La réception est l'acte juridique qui clôt le chantier. Elle se fait avec un procès-verbal. Toutes les imperfections que vous identifiez doivent être consignées comme « réserves ». Tant qu'elles ne sont pas levées, vous retenez la dernière tranche de paiement (5 à 10 % généralement).",
      },
      {
        type: "p",
        text: "Prenez votre temps : un état des lieux bâclé, et vous payez sans recours. Inspectez sol, murs, plafonds, électricité, plomberie, menuiseries, et toutes les fonctionnalités annoncées au devis.",
      },
      { type: "h2", text: "Budgets de référence" },
      {
        type: "p",
        text: "Pour donner des ordres de grandeur réalistes en région parisienne en 2026 :",
      },
      {
        type: "ul",
        items: [
          "Rafraîchissement (peinture, petits travaux) : 250 à 500 €/m²",
          "Rénovation moyenne (sols, peinture, électricité, sanitaires) : 800 à 1 400 €/m²",
          "Rénovation complète (tout repris, cuisine et SDB neuves) : 1 500 à 2 500 €/m²",
          "Rénovation haut de gamme avec architecte : 2 800 à 5 000 €/m² et plus",
        ],
      },
      { type: "h2", text: "Aides financières" },
      {
        type: "p",
        text: "MaPrimeRénov', CEE, éco-prêt à taux zéro, TVA à 5,5 % sur les travaux de performance énergétique : plusieurs dispositifs réduisent réellement la facture, surtout sur l'isolation, le chauffage et les menuiseries. Consultez un conseiller France Rénov' avant de signer : il est gratuit et neutre.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Une rénovation totale réussie repose sur la méthode, pas sur la chance. Diagnostic rigoureux, programme clair, devis détaillés, suivi hebdomadaire, marge pour imprévus : ces fondamentaux font la différence entre un projet maîtrisé et un projet qui dérape. Investissez sur la conception en amont, vous gagnerez sur la réalisation et sur le résultat.",
      },
    ],
  },
  {
    slug: "rafraichissement-appartement",
    title: "Travaux de rafraîchissement pour redonner vie à votre appartement",
    seoTitle: "Rafraîchir un appartement : conseils et budget 2026",
    image:
      "https://cdn.prod.website-files.com/66b5915d0cf82dc2bc8a5f3b/670d9b3fbe44e20a364054ef_travaux-de-rafraichissement.webp",
    excerpt:
      "Sans tout casser, un appartement peut être métamorphosé en deux à trois semaines. Voici les leviers les plus efficaces.",
    seoDescription:
      "Métamorphoser un appartement sans gros œuvre : peinture, sols, éclairage, électricité apparente. Les leviers à fort impact et les budgets réels.",
    keywords: [
      "rafraîchissement appartement",
      "petits travaux appartement",
      "peinture appartement",
      "rénovation rapide",
      "remise à neuf appartement",
      "rénovation légère",
      "déco appartement",
    ],
    category: "Petits travaux",
    readingTime: "6 min de lecture",
    publishedAt: "2026-04-30",
    updatedAt: "2026-05-14",
    author: DEFAULT_AUTHOR,
    intro:
      "Tout le monde n'a pas le budget ou l'envie d'une rénovation totale. Le rafraîchissement — un chantier court, sans modification structurelle — permet de transformer un appartement avec un budget contenu. La condition : choisir les bons leviers et ne pas se disperser.",
    blocks: [
      { type: "h2", text: "Définir précisément le périmètre" },
      {
        type: "p",
        text: "Le rafraîchissement, par définition, exclut la démolition et la modification des réseaux. On reste sur les surfaces : peintures, sols, plinthes, prises et interrupteurs apparents, éclairage, parfois les portes intérieures. C'est largement suffisant pour donner un coup de jeune complet.",
      },
      {
        type: "p",
        text: "Avant d'entamer quoi que ce soit, listez les pièces concernées et hiérarchisez. Un appartement entier rafraîchi à 80 % a meilleur effet qu'une seule pièce parfaite et le reste laissé en l'état. La cohérence prime.",
      },
      { type: "h2", text: "La peinture : le levier numéro un" },
      {
        type: "p",
        text: "Refaire toutes les peintures d'un appartement en blanc cassé chaud (RAL 9010 ou équivalent) change tout. La lumière rebondit mieux, l'espace paraît plus grand, les meubles sont remis en valeur. C'est le levier au meilleur rapport coût / impact visuel.",
      },
      {
        type: "p",
        text: "Préférez une peinture acrylique mate de bonne qualité (Tollens, Argile, Farrow & Ball selon votre budget). Trois couches sur un mur préparé tiennent 10 à 15 ans. Les peintures bas de gamme, en deux couches sur un mur insuffisamment poncé, vieillissent en deux à trois ans.",
      },
      {
        type: "callout",
        title: "Le prix juste",
        text: "Comptez 25 à 45 €/m² de mur pour une peinture appliquée par un professionnel, finition lisse de qualité. En dessous de 18 €/m², la préparation est forcément bâclée.",
      },
      { type: "h2", text: "Le sol : remplacer ou rénover ?" },
      {
        type: "p",
        text: "Un parquet ancien peut souvent être poncé et vitrifié plutôt que remplacé. Comptez 30 à 60 €/m² selon l'état initial, contre 80 à 200 €/m² pour un parquet neuf posé. Le rendu d'un parquet rénové est souvent plus authentique que celui d'un neuf.",
      },
      {
        type: "p",
        text: "Pour un sol abîmé au-delà du sauvable, le stratifié haut de gamme ou le LVT (vinyle rigide) offrent des rendus très convaincants pour 35 à 70 €/m² posé. Pose rapide, pas de séchage, accessible aux non-professionnels.",
      },
      { type: "h2", text: "L'électricité apparente : une petite touche qui change tout" },
      {
        type: "p",
        text: "Remplacer les interrupteurs et prises beigées par des modèles modernes (noir mat, laiton brossé, ou simplement du blanc neuf) coûte 5 à 25 € pièce et transforme l'aspect d'une pièce. C'est une intervention rapide qui ne nécessite pas de modifier les circuits, à condition que le tableau soit aux normes.",
      },
      {
        type: "p",
        text: "Profitez-en pour vérifier la présence de la terre dans toutes les prises et l'absence de modules halogènes encore présents. Si votre tableau a plus de 30 ans, un diagnostic complet par un électricien est recommandé.",
      },
      { type: "h2", text: "L'éclairage : grosse transformation, petit budget" },
      {
        type: "p",
        text: "Remplacer une suspension fatiguée par un modèle bien choisi (Hay, Muuto, ou un fabricant français moins coûteux comme Maison Sarah Lavoine) métamorphose une pièce pour 150 à 600 €. Ajoutez un ou deux lampadaires, et le salon est entièrement requalifié sans aucun travaux.",
      },
      { type: "h2", text: "Portes intérieures et menuiseries" },
      {
        type: "p",
        text: "Des portes anciennes blanches peuvent être repeintes (de préférence dans une teinte forte qui structure le couloir), ou changées pour des modèles à âme pleine plus contemporains. Comptez 250 à 600 € par porte fournie posée. Sur un T3 avec 6 portes, c'est un budget mais l'effet est notable.",
      },
      { type: "h2", text: "Délais et budgets de référence" },
      {
        type: "p",
        text: "Pour un T3 de 65 m² rafraîchi (peintures complètes, sol salon et chambre, électricité apparente, éclairage neuf), comptez 8 000 à 14 000 € et deux à trois semaines de chantier. Pour un T4 de 90 m² incluant cuisine et SDB rafraîchies : 15 000 à 28 000 € et trois à cinq semaines.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Le rafraîchissement n'est pas une rénovation au rabais : c'est une autre stratégie, qui mise sur les leviers les plus visibles pour un budget contenu. Bien mené, il prolonge la vie d'un appartement d'une décennie et augmente nettement son agrément au quotidien. Avant de tout casser, demandez-vous toujours ce qu'un bon rafraîchissement peut faire.",
      },
    ],
  },
  {
    slug: "choisir-materiaux",
    title: "Choisir ses matériaux : durabilité et budget",
    seoTitle: "Choisir ses matériaux de rénovation : durabilité vs budget",
    image:
      "https://cdn.prod.website-files.com/66b5915d0cf82dc2bc8a5f3b/66b5b2cacb6220f316a820c1_project-image-9.png",
    excerpt:
      "Le choix des matériaux représente souvent 40 % du budget d'une rénovation. Comment arbitrer entre coût, durabilité et impact environnemental ?",
    seoDescription:
      "Sol, peinture, bois, carrelage, isolation : comment arbitrer entre prix, durabilité et impact environnemental ? Le vrai coût annualisé des matériaux.",
    keywords: [
      "matériaux rénovation",
      "choix matériaux travaux",
      "matériau durable",
      "parquet ou stratifié",
      "FDES matériaux",
      "matériaux écologiques",
      "coût annualisé matériaux",
    ],
    category: "Matériaux",
    readingTime: "8 min de lecture",
    publishedAt: "2026-04-22",
    updatedAt: "2026-05-09",
    author: DEFAULT_AUTHOR,
    intro:
      "Un matériau bon marché peut s'avérer ruineux à dix ans, et un matériau cher peut être un excellent placement. Le choix ne se résume jamais au prix au m² affiché en magasin : il intègre la durée de vie, l'entretien, l'impact environnemental et la cohérence avec l'existant. Voici comment arbitrer sans se tromper.",
    blocks: [
      { type: "h2", text: "Raisonner en coût global, pas en prix d'achat" },
      {
        type: "p",
        text: "Le bon réflexe est de calculer le coût annualisé : prix d'achat divisé par la durée de vie estimée. Un parquet massif à 120 €/m² qui tient 60 ans coûte 2 €/m²/an. Un stratifié à 25 €/m² qui tient 8 ans coûte 3,1 €/m²/an. Le « bas de gamme » est donc objectivement plus cher.",
      },
      {
        type: "p",
        text: "À cela s'ajoute le coût de remplacement (pose, déménagement des meubles, jours d'occupation perdus) qui pèse au moins autant que le prix du matériau. Faire deux fois la même chose, c'est doubler tout, pas seulement les fournitures.",
      },
      { type: "h2", text: "Les sols : la hiérarchie réelle" },
      {
        type: "p",
        text: "Du plus durable au moins durable, en valeur d'usage :",
      },
      {
        type: "ol",
        items: [
          "Pierre naturelle (calcaire, granit) : 80 à 150 ans, presque sans entretien.",
          "Carrelage grès cérame de qualité : 40 à 80 ans selon usage.",
          "Parquet massif huilé : 60 à 100 ans avec ponçage tous les 15-20 ans.",
          "Parquet contrecollé épais (4 mm de bois noble) : 30 à 50 ans.",
          "LVT / vinyle rigide haut de gamme : 15 à 25 ans.",
          "Stratifié milieu de gamme : 8 à 15 ans.",
          "Moquette : 7 à 12 ans pour une bonne qualité.",
        ],
      },
      {
        type: "callout",
        title: "À éviter",
        text: "Les sols PVC bas de gamme se rétractent, se déforment et jaunissent. Le surcoût d'un LVT correct (40-60 €/m²) est largement justifié sur la durée.",
      },
      { type: "h2", text: "Les peintures : qualité chimique et physique" },
      {
        type: "p",
        text: "Une peinture de qualité combine pouvoir couvrant (moins de couches nécessaires), résistance au lessivage, faible émission de COV, et tenue dans le temps. Les marques de référence (Tollens, Sikkens, Argile, Farrow & Ball, Little Greene) coûtent 50 à 150 % plus cher que les premiers prix, pour une durée de vie 2 à 4 fois supérieure.",
      },
      {
        type: "p",
        text: "Privilégiez systématiquement le label A+ (émissions très faibles) et, si possible, des peintures à base d'eau plutôt qu'à base de solvants. Les peintures bio-sourcées (argile, lait, chaux) ont d'excellentes performances environnementales mais demandent un savoir-faire de pose spécifique.",
      },
      { type: "h2", text: "Bois : massif ou panneau ?" },
      {
        type: "p",
        text: "Pour les meubles intégrés et les portes, le choix entre bois massif, panneau plaqué (MDF ou contreplaqué + placage bois noble) et stratifié change radicalement la durée de vie. Le massif vieillit, se patine, se répare. Le MDF gonfle dès qu'il prend l'eau et ne se répare pas.",
      },
      {
        type: "p",
        text: "Le compromis raisonnable, pour un dressing par exemple : caisson en contreplaqué de qualité (multiplis bouleau, plus stable que le mélaminé), façades en placage chêne ou peinture laquée. Durabilité 25-30 ans, prix maîtrisé.",
      },
      { type: "h2", text: "Carrelage et faïence : grade et calibre" },
      {
        type: "p",
        text: "Pour le sol, exigez un carrelage classé PEI 4 ou 5 (résistance à l'abrasion). En dessous, il s'use rapidement dans les zones de passage. Pour la salle de bain, regardez la classe de glissance (R10 ou R11 selon usage).",
      },
      {
        type: "p",
        text: "Les grands formats (60×60, 80×80, 60×120) sont plus exigeants à poser (planéité du support, ouverture des joints) mais donnent un rendu plus contemporain et durable. Comptez 80 à 200 €/m² pour un grès cérame de qualité, hors pose.",
      },
      { type: "h2", text: "L'isolation : ne pas se tromper de couche" },
      {
        type: "p",
        text: "Les performances thermiques annoncées ne sont valables que si la pose est rigoureuse. Une laine de verre mal appliquée perd 30 % de son efficacité. Préférez parfois un produit légèrement moins performant sur le papier, mais plus simple à mettre en œuvre et avec un meilleur retour d'expérience.",
      },
      {
        type: "p",
        text: "Pour les isolants bio-sourcés (laine de bois, fibre de chanvre, ouate de cellulose), comptez un surcoût de 20 à 40 % mais des gains réels en confort d'été (déphasage thermique) et en qualité de l'air intérieur. Un investissement souvent pertinent en rénovation lourde.",
      },
      { type: "h2", text: "Robinetterie et sanitaires : la qualité paie" },
      {
        type: "p",
        text: "Une robinetterie premier prix (30-60 €) finit par fuir et perdre son aspect en 3-5 ans. Une robinetterie de marque (Hansgrohe, Grohe, Jacob Delafon, 200-450 €) tient 20-30 ans sans souci. Étant donné le coût de remplacement (intervention plombier), la différence se justifie complètement.",
      },
      { type: "h2", text: "Critères environnementaux" },
      {
        type: "p",
        text: "Au-delà du coût et de la durabilité, le bilan carbone d'un matériau compte de plus en plus. Quelques repères : le bois local capte du CO₂, la pierre naturelle a un faible bilan, l'aluminium et le ciment sont parmi les plus émissifs. Les FDES (fiches déclarations environnementales) renseignent précisément, demandez-les à votre fournisseur.",
      },
      { type: "h2", text: "Conclusion" },
      {
        type: "p",
        text: "Bien choisir ses matériaux, c'est arbitrer entre quatre dimensions : coût immédiat, durée de vie, entretien et impact environnemental. La règle d'or : ne jamais comparer deux prix d'achat sans comparer aussi les durées de vie. Un matériau bien choisi coûte moins cher au final, vous offre plus de confort, et vous évite la pire des dépenses : celle qu'il faudra refaire dans dix ans.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}
