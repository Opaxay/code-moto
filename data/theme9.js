// data/theme9.js — Thème 9 : Environnement
CM.theme({
  id: 9,
  nom: "Environnement",
  regles: [
    {
      id: "T9-R01",
      titre: "Conduite souple et anticipation",
      texte: "Une conduite souple — accélérations progressives, usage du frein moteur, regard porté loin pour éviter les freinages inutiles — réduit la consommation de carburant, l'usure de la moto et la pollution. L'anticipation est le premier levier de l'éco-conduite.",
      source: "securite-routiere.gouv.fr — Éco-conduite",
      questions: [
        {
          q: "Quel comportement réduit à la fois la consommation et la pollution ?",
          choix: ["Accélérer fort puis freiner tard", "Anticiper pour accélérer et freiner progressivement", "Rouler en sous-régime permanent"],
          bonnes: [1],
          exp: "L'anticipation évite les accélérations et freinages inutiles : moins de carburant, moins d'usure, moins d'émissions."
        },
        {
          q: "Le frein moteur :",
          choix: ["use inutilement le moteur", "participe à une conduite souple et économe", "est interdit en agglomération"],
          bonnes: [1],
          exp: "Décélérer au frein moteur économise les freins et le carburant (injection coupée en décélération)."
        },
        {
          q: "L'éco-conduite consiste notamment à :",
          choix: ["regarder loin pour anticiper", "accélérer progressivement", "rouler le plus lentement possible partout"],
          bonnes: [0, 1],
          exp: "Anticipation et souplesse — pas la lenteur excessive, qui peut même gêner et créer du danger."
        }
      ]
    },
    {
      id: "T9-R02",
      titre: "Régime moteur",
      texte: "Passer les rapports sans attendre le haut du compte-tours, éviter les surrégimes et les coups de gaz à l'arrêt limite le bruit, la consommation et la pollution. Les coups d'accélérateur au point mort ne servent à rien mécaniquement sur un moteur moderne.",
      source: "securite-routiere.gouv.fr — Éco-conduite",
      questions: [
        {
          q: "Pour consommer moins, il faut passer les rapports :",
          choix: ["le plus tard possible, en haut du compte-tours", "sans attendre le haut du compte-tours", "uniquement au-delà de 8 000 tr/min"],
          bonnes: [1],
          exp: "Monter les rapports tôt maintient le moteur dans les régimes économiques."
        },
        {
          q: "Les coups de gaz à l'arrêt, au feu rouge :",
          choix: ["réchauffent utilement le moteur", "génèrent du bruit et de la pollution inutiles", "préviennent les autres usagers de votre présence"],
          bonnes: [1],
          exp: "Aucune utilité mécanique sur un moteur moderne : uniquement du bruit et des émissions."
        },
        {
          q: "Rouler en surrégime permanent provoque :",
          choix: ["une surconsommation", "un bruit accru", "une meilleure lubrification du moteur"],
          bonnes: [0, 1],
          exp: "Le surrégime consomme, pollue et use le moteur — sans aucun gain en conduite normale."
        }
      ]
    },
    {
      id: "T9-R03",
      titre: "Entretien et pollution",
      texte: "Un filtre à air propre, une injection ou carburation bien réglée, des pneus à la bonne pression et une chaîne propre réduisent la consommation et les émissions. Une moto mal entretenue pollue davantage et consomme plus.",
      source: "securite-routiere.gouv.fr — Éco-conduite",
      questions: [
        {
          q: "Quels éléments d'entretien influencent la consommation ?",
          choix: ["La pression des pneus", "Le filtre à air", "La couleur du carénage"],
          bonnes: [0, 1],
          exp: "Pneus sous-gonflés et filtre encrassé augmentent la résistance et la consommation."
        },
        {
          q: "Une moto mal entretenue :",
          choix: ["pollue davantage", "pollue autant qu'une moto entretenue", "pollue moins car elle roule moins vite"],
          bonnes: [0],
          exp: "Mauvais réglages et encrassement dégradent la combustion : émissions et consommation en hausse."
        },
        {
          q: "Des pneus sous-gonflés ont pour effet :",
          choix: ["une consommation accrue", "une meilleure adhérence par tous temps", "aucune incidence sur l'environnement"],
          bonnes: [0],
          exp: "La résistance au roulement augmente : le moteur travaille plus, donc consomme et émet plus."
        }
      ]
    },
    {
      id: "T9-R04",
      titre: "Bruit et échappement",
      texte: "Un échappement non homologué ou débridé est interdit : amende et immobilisation possible du véhicule. Le bruit excessif est la première cause de rejet des motards par les riverains et motive des restrictions de circulation locales.",
      source: "legifrance.gouv.fr — Code de la route (nuisances sonores)",
      questions: [
        {
          q: "Monter un échappement non homologué « plus sportif » :",
          choix: ["est autorisé si le bruit reste raisonnable", "est interdit et expose à une amende et à l'immobilisation", "est autorisé hors agglomération"],
          bonnes: [1],
          exp: "Seul un échappement homologué pour le modèle est autorisé ; le non-conforme est sanctionnable et immobilisable."
        },
        {
          q: "Le bruit excessif des motos :",
          choix: ["est la première cause de rejet des motards par les riverains", "est un gage de sécurité (être entendu)", "n'est sanctionné que la nuit"],
          bonnes: [0],
          exp: "Le bruit nourrit l'hostilité envers les motards et entraîne des restrictions locales ; « être entendu » n'est pas un argument reconnu."
        },
        {
          q: "Retirer la chicane (db-killer) de son échappement homologué :",
          choix: ["rend l'échappement non conforme", "est toléré lors des trajets courts", "améliore les performances sans conséquence légale"],
          bonnes: [0],
          exp: "Sans sa chicane, l'échappement ne respecte plus son homologation sonore : c'est une non-conformité sanctionnable."
        }
      ]
    },
    {
      id: "T9-R05",
      titre: "Crit'Air et ZFE",
      texte: "La vignette Crit'Air est obligatoire pour circuler dans les zones à faibles émissions (ZFE). Les deux-roues motorisés sont classés selon leur norme Euro et leur date d'immatriculation. Avant d'entrer dans une ZFE, il faut vérifier les règles locales : certaines classes peuvent y être interdites à certaines heures.",
      source: "service-public.fr — Vignette Crit'Air",
      questions: [
        {
          q: "Pour circuler dans une ZFE, votre moto doit :",
          choix: ["afficher une vignette Crit'Air", "être équipée d'un GPS", "avoir moins de 5 ans"],
          bonnes: [0],
          exp: "La vignette Crit'Air, apposée de façon visible, est obligatoire dans les zones à faibles émissions."
        },
        {
          q: "Le classement Crit'Air d'un deux-roues dépend :",
          choix: ["de sa norme Euro et de sa date d'immatriculation", "de sa cylindrée", "de sa couleur et de son niveau sonore"],
          bonnes: [0],
          exp: "La classe Crit'Air découle de la norme antipollution (Euro), liée à la date de première immatriculation."
        },
        {
          q: "Les règles de circulation dans une ZFE :",
          choix: ["sont identiques dans toute la France", "varient selon la ville : il faut se renseigner avant", "ne concernent pas les deux-roues"],
          bonnes: [1],
          exp: "Chaque ZFE fixe ses classes autorisées et ses horaires : les 2RM sont concernés comme les autres véhicules."
        }
      ]
    },
    {
      id: "T9-R06",
      titre: "Arrêt prolongé : couper le moteur",
      texte: "Lors d'un arrêt prolongé — attente, livraison, passage à niveau fermé — il faut couper le moteur. Laisser tourner un moteur à l'arrêt est une pollution évitable, et peut être sanctionné dans certaines communes.",
      source: "securite-routiere.gouv.fr — Éco-conduite",
      questions: [
        {
          q: "Devant un passage à niveau fermé pour plusieurs minutes, vous :",
          choix: ["laissez tourner le moteur au ralenti", "coupez le moteur", "donnez des petits coups de gaz pour éviter de caler"],
          bonnes: [1],
          exp: "À l'arrêt prolongé, couper le moteur : zéro consommation, zéro émission, zéro bruit."
        },
        {
          q: "Laisser chauffer longuement son moteur à l'arrêt le matin :",
          choix: ["est indispensable pour les moteurs modernes", "est une pollution inutile : le moteur chauffe mieux en roulant doucement", "est obligatoire en hiver"],
          bonnes: [1],
          exp: "Les moteurs à injection modernes se conduisent doucement dès le départ : chauffe à l'arrêt inutile et polluante."
        },
        {
          q: "Couper le moteur à l'arrêt permet :",
          choix: ["d'économiser du carburant", "de réduire le bruit pour les riverains", "de recharger la batterie plus vite"],
          bonnes: [0, 1],
          exp: "Moteur coupé = ni consommation, ni bruit. La batterie ne se recharge pas moteur éteint, mais ce n'est pas l'enjeu d'un arrêt bref."
        }
      ]
    },
    {
      id: "T9-R07",
      titre: "Déchets d'entretien",
      texte: "Huiles usagées, batteries, pneus et liquides d'entretien sont des déchets polluants : ils se déposent en déchetterie ou sont repris par le garage, jamais dans la nature, l'évier ou les ordures ménagères. Un litre d'huile peut polluer durablement des milliers de litres d'eau.",
      source: "service-public.fr — Élimination des déchets",
      questions: [
        {
          q: "Où éliminer l'huile de vidange de votre moto ?",
          choix: ["Dans les ordures ménagères, en bidon fermé", "En déchetterie ou auprès d'un garage", "Dans les égouts, diluée à l'eau"],
          bonnes: [1],
          exp: "Les huiles usagées sont collectées en déchetterie ou reprises par les professionnels : jamais dans la nature ni l'évier."
        },
        {
          q: "Une batterie usagée se jette :",
          choix: ["avec le verre", "dans un point de collecte adapté (déchetterie, revendeur)", "dans la poubelle jaune"],
          bonnes: [1],
          exp: "Plomb et acide sont très polluants : la filière de recyclage dédiée est obligatoire."
        },
        {
          q: "Un litre d'huile moteur déversé dans la nature :",
          choix: ["se dégrade en quelques jours", "peut polluer durablement des milliers de litres d'eau", "n'est nocif que pour les plantes"],
          bonnes: [1],
          exp: "L'huile forme un film imperméable et toxique : la pollution d'une très grande quantité d'eau est durable."
        }
      ]
    },
    {
      id: "T9-R08",
      titre: "Choix et usage du véhicule",
      texte: "Adapter la cylindrée à son besoin réel et envisager l'électrique pour un usage urbain réduit l'empreinte environnementale. L'éco-conduite permet de réduire la consommation de 10 à 20 %, quel que soit le véhicule.",
      source: "securite-routiere.gouv.fr — Éco-conduite",
      questions: [
        {
          q: "L'éco-conduite permet de réduire la consommation d'environ :",
          choix: ["1 à 2 %", "10 à 20 %", "50 %"],
          bonnes: [1],
          exp: "Une conduite souple et anticipée fait économiser 10 à 20 % de carburant."
        },
        {
          q: "Pour un usage exclusivement urbain, quel choix limite le plus les émissions ?",
          choix: ["Un deux-roues électrique", "Une grosse cylindrée récente", "Un scooter thermique débridé"],
          bonnes: [0],
          exp: "En ville, l'électrique supprime les émissions à l'usage et le bruit."
        },
        {
          q: "Choisir sa moto en fonction de son besoin réel, c'est :",
          choix: ["un non-sens : plus c'est puissant, mieux c'est", "un geste économique et environnemental", "uniquement une question de budget d'achat"],
          bonnes: [1],
          exp: "Une cylindrée adaptée consomme moins, coûte moins cher à l'usage et émet moins."
        }
      ]
    }
  ]
});
