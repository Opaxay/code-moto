// data/theme7.js — Thème 7 : Éléments mécaniques liés à la sécurité
CM.theme({
  id: 7,
  nom: "Éléments mécaniques liés à la sécurité",
  regles: [
    {
      id: "T7-R01",
      titre: "Pression des pneus",
      texte: "La pression des pneus se vérifie à froid, environ une fois par mois et avant chaque long trajet, aux valeurs indiquées par le constructeur. Un sous-gonflage provoque échauffement, usure anormale, guidonnage et risque d'éclatement. La pression doit être ajustée quand on roule en duo ou chargé.",
      source: "securite-routiere.gouv.fr — Entretien du deux-roues",
      questions: [
        {
          q: "Quand faut-il vérifier la pression des pneus de votre moto ?",
          choix: ["Après un long trajet, pneus chauds", "À froid, environ une fois par mois", "Uniquement au contrôle technique"],
          bonnes: [1],
          exp: "La pression se mesure à froid : à chaud, elle est faussée par la dilatation de l'air."
        },
        {
          q: "Un pneu sous-gonflé peut provoquer :",
          choix: ["un échauffement excessif", "une meilleure adhérence sur le mouillé", "un risque d'éclatement", "une usure plus lente"],
          bonnes: [0, 2],
          exp: "Le sous-gonflage fait travailler anormalement la carcasse : échauffement, usure irrégulière et risque d'éclatement."
        },
        {
          q: "Vous partez en week-end avec un passager et des bagages. Concernant les pneus :",
          choix: ["vous gardez la pression habituelle", "vous augmentez la pression selon les préconisations du constructeur", "vous baissez la pression pour plus de confort"],
          bonnes: [1],
          exp: "En charge, le constructeur préconise une pression plus élevée, souvent surtout à l'arrière."
        }
      ]
    },
    {
      id: "T7-R02",
      titre: "Usure des pneus",
      texte: "Des témoins d'usure sont moulés dans les sculptures des pneus. La profondeur minimale légale des sculptures est de 1 mm pour les motos. Une usure irrégulière doit alerter : elle peut signaler un défaut de pression, de parallélisme ou d'amortisseur.",
      source: "securite-routiere.gouv.fr — Entretien du deux-roues",
      questions: [
        {
          q: "Quelle est la profondeur minimale légale des sculptures d'un pneu moto ?",
          choix: ["1,6 mm", "1 mm", "2 mm", "0,5 mm"],
          bonnes: [1],
          exp: "Pour les motos, la profondeur minimale est de 1 mm (1,6 mm concerne les voitures)."
        },
        {
          q: "Comment savoir si un pneu est arrivé à sa limite d'usure ?",
          choix: ["Grâce aux témoins d'usure moulés dans les sculptures", "La gomme change de couleur", "Le pneu se dégonfle plus souvent"],
          bonnes: [0],
          exp: "Quand la bande de roulement atteint le niveau des témoins d'usure, le pneu doit être remplacé."
        },
        {
          q: "Une usure irrégulière d'un pneu peut révéler :",
          choix: ["un défaut de pression", "un amortisseur défaillant", "une conduite trop souple"],
          bonnes: [0, 1],
          exp: "Pression incorrecte, parallélisme ou suspension usée provoquent des usures anormales : faire contrôler la moto."
        }
      ]
    },
    {
      id: "T7-R03",
      titre: "Pneus neufs : rodage",
      texte: "Un pneu neuf est recouvert d'une fine pellicule de démoulage glissante. Il faut rouler environ 100 km en douceur, sans prise d'angle marquée ni freinage appuyé, avant de solliciter pleinement l'adhérence.",
      source: "securite-routiere.gouv.fr — Entretien du deux-roues",
      questions: [
        {
          q: "Vous venez de faire monter des pneus neufs. Que devez-vous faire ?",
          choix: ["Rouler normalement, ils adhèrent au maximum dès le départ", "Rouler environ 100 km en douceur", "Les dégonfler légèrement pour les roder"],
          bonnes: [1],
          exp: "La pellicule de démoulage rend le pneu neuf glissant : environ 100 km de rodage en douceur sont nécessaires."
        },
        {
          q: "Pourquoi un pneu neuf est-il glissant ?",
          choix: ["À cause d'une pellicule de démoulage en surface", "Parce qu'il est trop gonflé", "Parce que la gomme est trop froide en sortie d'usine"],
          bonnes: [0],
          exp: "Le produit de démoulage laisse un film gras qui disparaît avec les premiers kilomètres."
        },
        {
          q: "Pendant le rodage de pneus neufs, il faut éviter :",
          choix: ["les fortes prises d'angle", "les freinages appuyés", "de rouler sous la pluie fine"],
          bonnes: [0, 1],
          exp: "Angle et freinage fort sollicitent une adhérence que le pneu neuf n'offre pas encore."
        }
      ]
    },
    {
      id: "T7-R04",
      titre: "Freins : plaquettes, disques, liquide",
      texte: "Il faut contrôler régulièrement l'usure des plaquettes et l'état des disques, ainsi que le niveau du liquide de frein dans le maître-cylindre. Le liquide de frein est hygroscopique (il absorbe l'humidité) et doit être remplacé environ tous les 2 ans. Un levier spongieux signale la présence d'air dans le circuit : une purge est nécessaire.",
      source: "securite-routiere.gouv.fr — Entretien du deux-roues",
      questions: [
        {
          q: "Pourquoi le liquide de frein doit-il être remplacé environ tous les 2 ans ?",
          choix: ["Il s'évapore avec le temps", "Il absorbe l'humidité et perd en efficacité", "Il encrasse les plaquettes"],
          bonnes: [1],
          exp: "Hygroscopique, il se charge en eau : le point d'ébullition baisse et le freinage peut devenir inefficace."
        },
        {
          q: "Votre levier de frein devient spongieux. Qu'est-ce que cela peut signifier ?",
          choix: ["De l'air est présent dans le circuit de freinage", "Les pneus sont sous-gonflés", "C'est normal par temps froid"],
          bonnes: [0],
          exp: "Un levier mou trahit de l'air ou de l'humidité dans le circuit : purge nécessaire, sécurité en jeu."
        },
        {
          q: "Avant de prendre la route, concernant les freins, vous contrôlez :",
          choix: ["l'usure des plaquettes", "le niveau de liquide de frein", "la couleur des étriers"],
          bonnes: [0, 1],
          exp: "Plaquettes et niveau de liquide font partie des contrôles réguliers indispensables sur une moto."
        }
      ]
    },
    {
      id: "T7-R05",
      titre: "Kit chaîne : tension et graissage",
      texte: "La chaîne doit présenter une tension correcte (flèche d'environ 2 à 3 cm selon le modèle) et être graissée régulièrement, environ tous les 500 km et après la pluie. Une chaîne détendue ou usée risque de dérailler et de bloquer la roue arrière. On contrôle aussi l'usure de la couronne et du pignon.",
      source: "securite-routiere.gouv.fr — Entretien du deux-roues",
      questions: [
        {
          q: "Quel est le principal danger d'une chaîne trop détendue ?",
          choix: ["Une consommation de carburant accrue", "Un déraillement pouvant bloquer la roue arrière", "Une usure prématurée des pneus"],
          bonnes: [1],
          exp: "Une chaîne qui déraille peut bloquer la roue arrière : c'est la chute assurée."
        },
        {
          q: "À quelle fréquence est-il conseillé de graisser sa chaîne ?",
          choix: ["Environ tous les 500 km et après la pluie", "Une fois par an", "Uniquement lors des révisions"],
          bonnes: [0],
          exp: "Graissage régulier ≈ tous les 500 km, et après la pluie qui lessive le lubrifiant."
        },
        {
          q: "La tension correcte d'une chaîne correspond généralement à une flèche de :",
          choix: ["0 cm : elle doit être parfaitement tendue", "2 à 3 cm", "7 à 8 cm"],
          bonnes: [1],
          exp: "Une flèche d'environ 2 à 3 cm (selon notice) : ni trop tendue (usure), ni trop détendue (déraillement)."
        }
      ]
    },
    {
      id: "T7-R06",
      titre: "Niveaux : huile et refroidissement",
      texte: "Le niveau d'huile moteur se vérifie moto verticale, à froid ou selon la notice, par le hublot ou la jauge. Le niveau de liquide de refroidissement se contrôle à froid dans le vase d'expansion. Un manque d'huile peut entraîner la casse du moteur, parfois avec blocage de la roue arrière.",
      source: "securite-routiere.gouv.fr — Entretien du deux-roues",
      questions: [
        {
          q: "Comment vérifier correctement le niveau d'huile de votre moto ?",
          choix: ["Moto sur la béquille latérale, moteur chaud", "Moto verticale, selon les indications de la notice", "En roulant, grâce au voyant d'huile uniquement"],
          bonnes: [1],
          exp: "Moto verticale (ou sur béquille centrale), sinon la mesure au hublot ou à la jauge est faussée."
        },
        {
          q: "Que risque un moteur qui manque d'huile ?",
          choix: ["Une simple surconsommation", "La casse moteur, pouvant aller jusqu'au blocage de la roue arrière", "Rien si l'on roule doucement"],
          bonnes: [1],
          exp: "Sans lubrification, le moteur serre : sur une moto, un moteur qui bloque peut bloquer la roue arrière."
        },
        {
          q: "Le niveau de liquide de refroidissement se contrôle :",
          choix: ["moteur chaud, juste après avoir roulé", "à froid, dans le vase d'expansion", "en ouvrant le radiateur moteur tournant"],
          bonnes: [1],
          exp: "À froid et dans le vase d'expansion : ouvrir le circuit chaud expose à des brûlures graves."
        }
      ]
    },
    {
      id: "T7-R07",
      titre: "Éclairage : contrôle avant départ",
      texte: "Avant de partir, il faut vérifier le bon fonctionnement de tous les feux : croisement (allumé en permanence à moto), route, position, stop, clignotants et éclairage de plaque. Une ampoule défaillante réduit la visibilité du motard, déjà moins détectable que les autres véhicules.",
      source: "securite-routiere.gouv.fr — Entretien du deux-roues",
      questions: [
        {
          q: "À moto, le feu de croisement doit être allumé :",
          choix: ["uniquement la nuit", "en permanence, même en plein jour", "uniquement par mauvais temps"],
          bonnes: [1],
          exp: "L'allumage des feux de jour est obligatoire à moto : il améliore nettement la détection du motard."
        },
        {
          q: "Avant de prendre la route, vous contrôlez le fonctionnement :",
          choix: ["des feux stop", "des clignotants", "du feu de croisement", "uniquement du phare avant"],
          bonnes: [0, 1],
          exp: "Tous les feux se contrôlent avant de partir : stop, clignotants, croisement, position et plaque."
        },
        {
          q: "Rouler avec un feu stop défaillant :",
          choix: ["est sans conséquence si les clignotants fonctionnent", "augmente le risque d'être percuté par l'arrière", "est autorisé de jour"],
          bonnes: [1],
          exp: "Sans feu stop, les véhicules qui suivent détectent vos freinages trop tard — danger majeur à moto."
        }
      ]
    }
    ,
    {
      id: "T7-R08",
      titre: "ABS : rôle et limites",
      texte: "L'ABS est obligatoire sur les motos neuves de plus de 125 cm³ vendues dans l'Union européenne depuis 2016. Il empêche le blocage des roues lors d'un freinage d'urgence, ce qui permet de conserver la stabilité et la direction. Il ne réduit pas la distance d'arrêt sur tous les revêtements et ne dispense jamais d'anticiper.",
      source: "securite-routiere.gouv.fr — Équipements des véhicules",
      questions: [
        {
          q: "Quel est le rôle de l'ABS ?",
          choix: ["Réduire la consommation de carburant", "Empêcher le blocage des roues au freinage", "Augmenter la puissance de freinage maximale"],
          bonnes: [1],
          exp: "L'ABS évite le blocage des roues : la moto reste stable et dirigeable pendant un freinage appuyé."
        },
        {
          q: "L'ABS garantit une distance de freinage plus courte sur toutes les surfaces.",
          choix: ["Vrai", "Faux"],
          bonnes: [1],
          exp: "Faux : sur gravillons ou neige par exemple, la distance peut même être allongée. L'ABS ne remplace pas l'anticipation."
        },
        {
          q: "Depuis 2016, l'ABS est obligatoire sur les motos neuves :",
          choix: ["de plus de 50 cm³", "de plus de 125 cm³", "de toutes cylindrées"],
          bonnes: [1],
          exp: "L'Union européenne impose l'ABS sur les motos neuves de plus de 125 cm³ depuis 2016."
        }
      ]
    },
    {
      id: "T7-R09",
      titre: "Commandes : câbles et poignée de gaz",
      texte: "Les câbles d'embrayage et de gaz ne doivent présenter aucun point dur ni effilochage. La poignée de gaz doit revenir seule en position fermée quand on la relâche. Les leviers se règlent à la portée de la main pour un contrôle précis.",
      source: "securite-routiere.gouv.fr — Entretien du deux-roues",
      questions: [
        {
          q: "La poignée de gaz de votre moto ne revient pas seule en position fermée. Vous :",
          choix: ["partez quand même en la ramenant à la main", "ne prenez pas la route avant réparation", "l'actionnez plusieurs fois pour l'assouplir en roulant"],
          bonnes: [1],
          exp: "Une poignée de gaz qui reste ouverte est extrêmement dangereuse : la moto continue d'accélérer seule."
        },
        {
          q: "Que contrôle-t-on sur les câbles de commande ?",
          choix: ["L'absence de points durs", "L'absence d'effilochage", "Leur couleur"],
          bonnes: [0, 1],
          exp: "Un câble qui accroche ou s'effiloche peut casser ou se bloquer : contrôle et lubrification réguliers."
        },
        {
          q: "Les leviers de frein et d'embrayage doivent être :",
          choix: ["réglés à la portée de la main", "le plus loin possible pour plus de levier", "serrés au maximum vers le guidon"],
          bonnes: [0],
          exp: "Des leviers bien réglés permettent un dosage précis, essentiel au freinage et à basse vitesse."
        }
      ]
    },
    {
      id: "T7-R10",
      titre: "Suspensions : fourche et amortisseur",
      texte: "La fourche ne doit présenter aucune fuite d'huile et l'amortisseur doit rester efficace : une suspension fatiguée dégrade la tenue de route et le freinage. La précharge de l'amortisseur doit être ajustée quand on charge la moto ou que l'on prend un passager.",
      source: "securite-routiere.gouv.fr — Entretien du deux-roues",
      questions: [
        {
          q: "Une fuite d'huile sur un tube de fourche :",
          choix: ["est sans gravité tant que la moto freine", "doit être réparée : la tenue de route et le freinage se dégradent", "se résorbe d'elle-même"],
          bonnes: [1],
          exp: "L'huile qui fuit peut atteindre le frein avant et la fourche perd son amortissement : réparation indispensable."
        },
        {
          q: "Avant de partir en duo chargé, vous ajustez :",
          choix: ["la précharge de l'amortisseur", "la hauteur du guidon", "le jeu aux soupapes"],
          bonnes: [0],
          exp: "La précharge compense le poids supplémentaire et conserve l'assiette et la tenue de route."
        },
        {
          q: "Des suspensions usées provoquent :",
          choix: ["une moto qui rebondit et une roue qui touche moins bien le sol", "un meilleur confort", "une usure plus lente des pneus"],
          bonnes: [0],
          exp: "Une suspension fatiguée ne maintient plus le contact pneu-route : adhérence et freinage dégradés."
        }
      ]
    },
    {
      id: "T7-R11",
      titre: "Rétroviseurs",
      texte: "Les rétroviseurs doivent être propres et réglés avant de partir : on doit voir la voie et le plus loin possible derrière soi, en limitant les angles morts. À moto, les rétroviseurs ne couvrent qu'une partie de l'arrière : le contrôle direct par rotation de la tête reste indispensable.",
      source: "securite-routiere.gouv.fr — Entretien du deux-roues",
      questions: [
        {
          q: "Quand règle-t-on ses rétroviseurs ?",
          choix: ["Avant de partir, à l'arrêt", "En roulant, dès les premiers mètres", "Ce n'est nécessaire qu'après un démontage"],
          bonnes: [0],
          exp: "Le réglage se fait à l'arrêt, en position de conduite, avant de prendre la route."
        },
        {
          q: "Des rétroviseurs bien réglés dispensent du contrôle de l'angle mort.",
          choix: ["Vrai", "Faux"],
          bonnes: [1],
          exp: "Faux : il reste toujours des angles morts. Le contrôle direct par rotation de la tête est indispensable avant de déboîter."
        },
        {
          q: "Vos rétroviseurs doivent permettre de voir :",
          choix: ["vos épaules uniquement", "la voie et le plus loin possible derrière vous", "le ciel et la route en parts égales"],
          bonnes: [1],
          exp: "On règle les rétroviseurs pour maximiser la vision vers l'arrière, pas pour se voir soi-même."
        }
      ]
    },
    {
      id: "T7-R12",
      titre: "Batterie et coupe-circuit",
      texte: "Le coupe-circuit, situé au commodo droit, permet d'arrêter le moteur en urgence : il faut connaître son emplacement et son fonctionnement. La batterie doit être maintenue chargée et propre, particulièrement après un hivernage prolongé.",
      source: "securite-routiere.gouv.fr — Entretien du deux-roues",
      questions: [
        {
          q: "À quoi sert le coupe-circuit d'une moto ?",
          choix: ["À couper les feux à l'arrêt", "À arrêter le moteur en urgence", "À verrouiller la direction"],
          bonnes: [1],
          exp: "Le coupe-circuit (commodo droit) arrête immédiatement le moteur, par exemple après une chute."
        },
        {
          q: "Après plusieurs mois sans rouler, quel élément risque surtout de vous immobiliser ?",
          choix: ["La batterie déchargée", "Les pneus dégonflés définitivement", "Le compteur kilométrique"],
          bonnes: [0],
          exp: "Une batterie non entretenue se décharge pendant l'hivernage : charge d'entretien recommandée."
        },
        {
          q: "Votre moteur ne démarre pas, tout semble éteint. Vous vérifiez d'abord :",
          choix: ["la position du coupe-circuit", "la tension de chaîne", "le niveau d'huile"],
          bonnes: [0],
          exp: "Un coupe-circuit resté sur OFF est la cause la plus fréquente d'un démarrage impossible — réflexe à connaître."
        }
      ]
    },
    {
      id: "T7-R13",
      titre: "Les contrôles avant départ",
      texte: "Avant chaque départ, un contrôle visuel rapide s'impose : pneus (pression, état), freins, chaîne, niveaux, éclairage et rétroviseurs. Cette « minute moto » systématique permet de détecter une anomalie avant qu'elle ne devienne un danger en circulation.",
      source: "securite-routiere.gouv.fr — Entretien du deux-roues",
      questions: [
        {
          q: "Les contrôles avant de prendre la route concernent :",
          choix: ["les pneus et les freins", "l'éclairage", "uniquement le niveau de carburant"],
          bonnes: [0, 1],
          exp: "Pneus, freins, chaîne, niveaux, éclairage, rétroviseurs : un tour visuel rapide avant chaque départ."
        },
        {
          q: "À quelle fréquence faut-il faire le contrôle visuel de sa moto ?",
          choix: ["Avant chaque départ", "Une fois par semaine", "Uniquement avant les longs trajets"],
          bonnes: [0],
          exp: "Le contrôle rapide est systématique : une anomalie peut survenir à tout moment, même sur un trajet court."
        },
        {
          q: "Ce contrôle avant départ prend généralement :",
          choix: ["une trentaine de minutes avec outillage", "une à deux minutes, à l'œil et à la main", "une demi-journée en concession"],
          bonnes: [1],
          exp: "C'est un contrôle visuel et tactile rapide — la « minute moto » — pas une révision complète."
        }
      ]
    },
    {
      id: "T7-R14",
      titre: "Entretien périodique",
      texte: "Le carnet d'entretien du constructeur fixe les échéances de révisions et de vidanges : les respecter conditionne la fiabilité et la sécurité. Une moto mal entretenue est un danger pour son conducteur et s'expose à une contre-visite au contrôle technique.",
      source: "securite-routiere.gouv.fr — Entretien du deux-roues",
      questions: [
        {
          q: "Qui fixe les échéances d'entretien de votre moto ?",
          choix: ["Le constructeur, via le carnet d'entretien", "L'assureur", "Le centre de contrôle technique"],
          bonnes: [0],
          exp: "Le carnet d'entretien du constructeur définit les révisions et vidanges à respecter."
        },
        {
          q: "Négliger l'entretien de sa moto peut entraîner :",
          choix: ["une panne ou une défaillance dangereuse en circulation", "une contre-visite au contrôle technique", "une réduction de la prime d'assurance"],
          bonnes: [0, 1],
          exp: "Freins, pneus ou transmission négligés = danger direct, et défaillances sanctionnées au contrôle technique."
        },
        {
          q: "Une moto récente sous garantie n'a pas besoin de contrôles entre les révisions.",
          choix: ["Vrai", "Faux"],
          bonnes: [1],
          exp: "Faux : pression, chaîne, freins et niveaux se surveillent en permanence, quel que soit l'âge de la moto."
        }
      ]
    }
  ]
});
