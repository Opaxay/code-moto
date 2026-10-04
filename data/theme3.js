// data/theme3.js — Thème 3 : La route
CM.theme({
  id: 3,
  nom: "La route",
  regles: [
    {
      id: "T3-R01",
      titre: "Adhérence réduite : les pièges de la chaussée",
      texte: "La pluie réduit l'adhérence, surtout dans les premières minutes : l'eau fait remonter les hydrocarbures déposés sur la chaussée. Le gasoil (traces irisées), les gravillons, les feuilles mortes et la boue sont autant de pièges. À moto, une perte d'adhérence se traduit généralement par une chute : il faut repérer ces zones et adapter l'allure avant de les atteindre.",
      source: "securite-routiere.gouv.fr — Conduite d'un deux-roues motorisé",
      questions: [
        {
          q: "Le risque de glissade lié à la pluie est le plus élevé :",
          choix: ["après plusieurs heures de pluie continue", "dans les premières minutes de pluie", "uniquement en hiver"],
          bonnes: [1],
          exp: "Les premières minutes de pluie font remonter les hydrocarbures en surface : c'est le moment le plus glissant."
        },
        {
          q: "Dans un rond-point, vous apercevez une trace irisée sur la chaussée. Il s'agit probablement :",
          choix: ["d'eau de pluie sans danger", "d'un marquage au sol", "de gasoil : vous évitez de rouler dessus"],
          bonnes: [2],
          exp: "Les traces irisées trahissent du carburant répandu, très glissant pour un deux-roues. Les ronds-points en sont des zones typiques."
        },
        {
          q: "Quels éléments réduisent fortement l'adhérence d'une moto ?",
          choix: ["les gravillons", "les feuilles mortes", "une chaussée sèche et propre", "un marquage rugueux neuf"],
          bonnes: [0, 1],
          exp: "Gravillons et feuilles mortes agissent comme un tapis glissant sous les pneus d'un deux-roues."
        },
        {
          q: "À moto, une perte d'adhérence a généralement des conséquences plus graves qu'en voiture.",
          choix: ["vrai", "faux"],
          bonnes: [0],
          exp: "Un deux-roues en perte d'adhérence chute : il n'y a ni carrosserie ni correcteur de trajectoire pour rattraper l'erreur."
        }
      ]
    },
    {
      id: "T3-R02",
      titre: "Surfaces glissantes par temps humide",
      texte: "Mouillés, les marquages au sol (passages piétons, bandes blanches, flèches), les plaques d'égout, les pavés et les rails deviennent très glissants. Il faut les franchir moto la plus droite possible, sans freiner ni accélérer, et anticiper son freinage pour ne pas le faire sur ces surfaces.",
      source: "securite-routiere.gouv.fr — Conduite par temps de pluie",
      questions: [
        {
          q: "Par temps de pluie, les passages piétons et les bandes blanches :",
          choix: ["offrent plus d'adhérence que l'asphalte", "deviennent glissants", "ne changent pas de comportement"],
          bonnes: [1],
          exp: "La peinture des marquages mouillée est très glissante pour les pneus d'un deux-roues."
        },
        {
          q: "Comment franchir une plaque d'égout mouillée inévitable ?",
          choix: ["en freinant dessus pour ralentir", "moto droite, sans freiner ni accélérer", "en accélérant pour passer plus vite"],
          bonnes: [1],
          exp: "Toute variation d'allure ou d'angle sur une surface glissante peut provoquer la glissade : on passe moto droite, allure constante."
        },
        {
          q: "Sous la pluie, il est préférable d'anticiper son freinage pour ne pas freiner sur un marquage au sol.",
          choix: ["vrai", "faux"],
          bonnes: [0],
          exp: "Freiner sur de la peinture mouillée fait perdre l'adhérence : on freine avant, sur l'asphalte."
        }
      ]
    },
    {
      id: "T3-R03",
      titre: "Rails et saignées : traverser perpendiculairement",
      texte: "Les rails de tramway et les raccords longitudinaux de chaussée peuvent guider ou faire glisser la roue avant. Il faut les traverser avec un angle le plus proche possible de la perpendiculaire, moto redressée, sans freiner.",
      source: "securite-routiere.gouv.fr — Conduite d'un deux-roues motorisé",
      questions: [
        {
          q: "Pour traverser des rails de tramway, vous les abordez :",
          choix: ["parallèlement, pour les suivre", "avec l'angle le plus proche possible de la perpendiculaire", "en freinant dessus"],
          bonnes: [1],
          exp: "Plus l'angle est droit, moins la roue risque de glisser le long du rail ou de s'y insérer."
        },
        {
          q: "Il pleut et vous devez franchir des rails de tram en virage. Vous :",
          choix: ["gardez votre angle et votre vitesse", "redressez la moto au maximum et réduisez l'allure avant les rails", "accélérez pour franchir rapidement"],
          bonnes: [1],
          exp: "Rails + pluie + angle = combinaison à haut risque : on réduit l'allure avant et on passe moto droite."
        },
        {
          q: "Traverser un rail mouillé avec un angle très fermé risque de faire glisser la roue avant.",
          choix: ["vrai", "faux"],
          bonnes: [0],
          exp: "Avec un angle rasant, le pneu peut suivre le rail au lieu de le franchir : c'est la chute assurée sur le mouillé."
        }
      ]
    },
    {
      id: "T3-R04",
      titre: "Aquaplaning",
      texte: "L'aquaplaning survient quand une pellicule d'eau sépare le pneu de la chaussée : le véhicule ne répond plus. Il est favorisé par une vitesse élevée, des pneus usés ou sous-gonflés et l'eau stagnante. La bonne réaction : décélérer en douceur, sans freiner brutalement ni braquer, jusqu'à retrouver l'adhérence.",
      source: "securite-routiere.gouv.fr — Conduite par temps de pluie",
      questions: [
        {
          q: "L'aquaplaning est favorisé par :",
          choix: ["une vitesse élevée", "des pneus usés ou sous-gonflés", "des pneus neufs correctement gonflés"],
          bonnes: [0, 1],
          exp: "Plus la vitesse est élevée et moins les sculptures évacuent l'eau, plus le pneu décolle de la route."
        },
        {
          q: "Votre moto part en aquaplaning dans une flaque. Vous :",
          choix: ["freinez fort de l'avant", "décélérez en douceur sans braquer", "accélérez pour traverser la flaque"],
          bonnes: [1],
          exp: "Tout geste brusque est fatal : on coupe progressivement les gaz et on garde le guidon droit jusqu'au retour de l'adhérence."
        },
        {
          q: "L'aquaplaning se produit lorsque :",
          choix: ["le pneu surchauffe sur route sèche", "une pellicule d'eau sépare le pneu de la chaussée", "le pneu est trop gonflé par temps froid"],
          bonnes: [1],
          exp: "Le pneu flotte sur l'eau qu'il ne parvient plus à évacuer : il n'y a plus de contact avec la route."
        },
        {
          q: "Pour limiter le risque d'aquaplaning sous forte pluie, vous pouvez :",
          choix: ["réduire votre vitesse", "éviter les traces d'eau stagnante", "gonfler vos pneus bien au-delà de la pression préconisée"],
          bonnes: [0, 1],
          exp: "Vitesse réduite et évitement des flaques laissent aux sculptures le temps d'évacuer l'eau ; le surgonflage n'est pas une solution."
        }
      ]
    },
    {
      id: "T3-R05",
      titre: "Vent latéral",
      texte: "Les rafales de vent latéral surprennent en sortie de tunnel, sur les ponts et viaducs, et lors du dépassement d'un poids lourd (effet d'écran puis rafale). Il faut anticiper en se décalant légèrement du côté d'où vient le vent et garder une poigne souple sur le guidon.",
      source: "securite-routiere.gouv.fr — Conduite d'un deux-roues motorisé",
      questions: [
        {
          q: "Les rafales de vent latéral sont particulièrement à craindre :",
          choix: ["sur les ponts et viaducs", "en sortie de tunnel", "en forêt dense"],
          bonnes: [0, 1],
          exp: "Ponts, viaducs et sorties de tunnel exposent brutalement la moto au vent, sans transition."
        },
        {
          q: "Par vent fort, vous dépassez un poids lourd. Vous vous attendez :",
          choix: ["à une rafale en arrivant à la hauteur de sa cabine", "à être abrité pendant tout le dépassement", "à un vent plus faible après le dépassement"],
          bonnes: [0],
          exp: "Le camion fait écran : en le dépassant, on retrouve brutalement le vent au niveau de l'avant du véhicule."
        },
        {
          q: "Par vent latéral soutenu, la bonne attitude est :",
          choix: ["crisper les bras pour verrouiller le guidon", "garder une poigne souple et anticiper en se décalant du côté du vent", "accélérer pour traverser la zone plus vite"],
          bonnes: [1],
          exp: "Les bras souples absorbent les rafales ; se décaler au vent donne une marge de correction."
        }
      ]
    },
    {
      id: "T3-R06",
      titre: "Brouillard",
      texte: "Par brouillard, on allume les feux de croisement, complétés éventuellement des feux de brouillard avant. Si la visibilité est inférieure à 50 m, la vitesse est limitée à 50 km/h sur tout le réseau. Le feu de brouillard arrière est interdit sous la pluie car il éblouit. Les feux de route sont déconseillés : ils se réverbèrent sur le brouillard.",
      source: "securite-routiere.gouv.fr — Conduite par mauvais temps",
      questions: [
        {
          q: "La visibilité est inférieure à 50 mètres à cause du brouillard. Votre vitesse maximale est de :",
          choix: ["50 km/h sur tout le réseau", "80 km/h hors agglomération", "110 km/h sur autoroute"],
          bonnes: [0],
          exp: "Visibilité < 50 m = 50 km/h maximum, y compris sur autoroute."
        },
        {
          q: "Sous une forte pluie, le feu de brouillard arrière est :",
          choix: ["obligatoire", "interdit car il éblouit les véhicules qui suivent", "autorisé uniquement la nuit"],
          bonnes: [1],
          exp: "Le feu de brouillard arrière est réservé au brouillard et aux fortes chutes de neige ; sous la pluie, il éblouit."
        },
        {
          q: "Dans le brouillard, les feux de route :",
          choix: ["améliorent nettement la visibilité", "sont déconseillés car ils se réverbèrent sur le brouillard", "sont obligatoires de nuit"],
          bonnes: [1],
          exp: "Le faisceau des feux de route se réfléchit sur les gouttelettes et crée un mur blanc : on reste en croisement."
        },
        {
          q: "Par brouillard, vous pouvez allumer :",
          choix: ["les feux de croisement", "les feux de brouillard avant", "uniquement les feux de position"],
          bonnes: [0, 1],
          exp: "Croisement + brouillard avant est la combinaison adaptée ; les feux de position seuls sont insuffisants."
        }
      ]
    },
    {
      id: "T3-R07",
      titre: "Pluie : vitesses et distances",
      texte: "Par temps de pluie, les limitations sont abaissées : 110 km/h sur autoroute, 100 km/h sur route à chaussées séparées, 80 km/h hors agglomération. La distance de freinage peut doubler sur chaussée mouillée et les distances de sécurité doivent être augmentées en conséquence.",
      source: "securite-routiere.gouv.fr — Vitesse et conditions météo",
      questions: [
        {
          q: "Sous la pluie, la vitesse maximale sur autoroute est de :",
          choix: ["130 km/h", "110 km/h", "100 km/h"],
          bonnes: [1],
          exp: "Par temps de pluie, l'autoroute passe de 130 à 110 km/h pour tous les conducteurs."
        },
        {
          q: "Sur chaussée mouillée, la distance de freinage peut :",
          choix: ["rester identique si les pneus sont bons", "être multipliée par deux", "diminuer grâce à l'eau qui refroidit les freins"],
          bonnes: [1],
          exp: "L'adhérence réduite allonge fortement le freinage : jusqu'au double de la distance sur sol sec."
        },
        {
          q: "Sous la pluie, votre distance de sécurité avec le véhicule qui précède doit être :",
          choix: ["doublée", "maintenue à 2 secondes", "réduite pour rester dans son sillage"],
          bonnes: [0],
          exp: "Freinage allongé et visibilité réduite imposent d'augmenter nettement l'interdistance, en pratique de la doubler."
        }
      ]
    },
    {
      id: "T3-R08",
      titre: "Neige et verglas : renoncer",
      texte: "Sur neige ou verglas, l'adhérence d'un deux-roues est quasi nulle : la seule décision raisonnable est de renoncer à rouler. Les plaques de verglas se forment en priorité sur les ponts et dans les zones ombragées, parfois même quand la température affichée est légèrement positive.",
      source: "securite-routiere.gouv.fr — Conduite en hiver",
      questions: [
        {
          q: "Du verglas est annoncé sur votre trajet. À moto, le plus sûr est de :",
          choix: ["partir plus tôt pour rouler doucement", "renoncer au trajet en deux-roues", "suivre les traces des voitures"],
          bonnes: [1],
          exp: "Sur le verglas, un deux-roues n'a pratiquement aucune adhérence : aucune technique ne compense, on ne roule pas."
        },
        {
          q: "Les plaques de verglas se forment en priorité :",
          choix: ["sur les ponts et dans les zones ombragées", "en pleine ligne droite exposée au soleil", "uniquement en montagne"],
          bonnes: [0],
          exp: "Ponts (froid par-dessous) et zones sans soleil gèlent en premier, même par température légèrement positive ailleurs."
        },
        {
          q: "Un deux-roues conserve une adhérence suffisante sur la neige tassée.",
          choix: ["vrai", "faux"],
          bonnes: [1],
          exp: "La neige tassée est une surface glissante où les pneus moto n'assurent ni freinage ni tenue en courbe."
        }
      ]
    },
    {
      id: "T3-R09",
      titre: "Lire un virage",
      texte: "Les panneaux de danger, les balises et les chevrons aident à lire un virage : les chevrons marquent l'extérieur de la courbe, et leur densité donne une idée de sa sévérité. L'allure doit être ajustée AVANT l'entrée du virage, jamais en pleine courbe.",
      source: "securite-routiere.gouv.fr — Signalisation routière",
      questions: [
        {
          q: "Les balises à chevrons implantées dans un virage indiquent :",
          choix: ["l'intérieur de la courbe", "l'extérieur de la courbe", "une route prioritaire"],
          bonnes: [1],
          exp: "Les chevrons jalonnent l'extérieur du virage pour matérialiser la direction à suivre."
        },
        {
          q: "Vous ajustez votre vitesse pour un virage :",
          choix: ["avant l'entrée du virage", "au point de corde", "en sortie de virage"],
          bonnes: [0],
          exp: "Freiner en courbe réduit l'adhérence disponible pour tourner : toute la décélération se fait avant d'incliner la moto."
        },
        {
          q: "Un panneau de virage dangereux suivi de chevrons très rapprochés annonce :",
          choix: ["une courbe large et rapide", "un virage serré imposant de ralentir nettement avant", "une simple déviation"],
          bonnes: [1],
          exp: "Plus les chevrons sont denses, plus la courbe est sévère : on réduit fortement l'allure en amont."
        }
      ]
    },
    {
      id: "T3-R10",
      titre: "Chaussée dégradée",
      texte: "Nids-de-poule, déformations, ralentisseurs et bandes de ralentissement sont des dangers spécifiques aux deux-roues : ils peuvent déséquilibrer la moto ou endommager une jante. Si l'obstacle est inévitable, on ralentit, on redresse la moto et on allège le guidon en se levant légèrement sur les repose-pieds.",
      source: "securite-routiere.gouv.fr — Conduite d'un deux-roues motorisé",
      questions: [
        {
          q: "Pour une moto, un nid-de-poule représente :",
          choix: ["une simple gêne de confort", "un vrai risque de déséquilibre ou de chute", "un danger uniquement à l'arrêt"],
          bonnes: [1],
          exp: "Une roue qui plonge dans un trou peut faire dévier le guidon ou endommager le pneu : danger réel pour un deux-roues."
        },
        {
          q: "Une déformation de chaussée est inévitable devant vous. Vous :",
          choix: ["freinez fort en la franchissant", "ralentissez avant, redressez la moto et allégez le guidon", "l'abordez avec de l'angle pour l'absorber"],
          bonnes: [1],
          exp: "On absorbe l'obstacle moto droite, allure réduite, jambes et bras souples pour laisser travailler les suspensions."
        },
        {
          q: "Quels obstacles sont particulièrement dangereux pour un deux-roues ?",
          choix: ["les bandes de ralentissement mouillées", "les nids-de-poule", "une ligne droite sèche et propre"],
          bonnes: [0, 1],
          exp: "Ces irrégularités déséquilibrent la moto, surtout sur sol humide ; une chaussée saine ne pose pas de problème."
        }
      ]
    },
    {
      id: "T3-R11",
      titre: "Rouler de nuit",
      texte: "De nuit sur route non éclairée, on utilise les feux de route dès que possible et on repasse en feux de croisement au croisement d'un autre usager. Les obstacles, piétons et animaux sont détectés beaucoup plus tard que de jour : l'allure doit permettre de s'arrêter dans la zone éclairée.",
      source: "securite-routiere.gouv.fr — Conduite de nuit",
      questions: [
        {
          q: "De nuit, sur une route non éclairée et sans autre usager, vous circulez :",
          choix: ["en feux de croisement", "en feux de route", "en feux de position"],
          bonnes: [1],
          exp: "Les feux de route éclairent à environ 100 m contre 30 m en croisement : on les utilise dès qu'on n'éblouit personne."
        },
        {
          q: "Un véhicule arrive en face alors que vous êtes en feux de route. Vous :",
          choix: ["gardez vos feux de route pour mieux voir", "repassez en feux de croisement et regardez le bord droit de la chaussée", "faites un appel de phares"],
          bonnes: [1],
          exp: "On ne doit pas éblouir l'autre conducteur ; regarder le bord droit évite d'être soi-même ébloui."
        },
        {
          q: "La nuit, un obstacle sur la chaussée est détecté plus tard que de jour.",
          choix: ["vrai", "faux"],
          bonnes: [0],
          exp: "Le champ visuel utile se limite à la zone éclairée : l'allure doit permettre de s'arrêter à l'intérieur de celle-ci."
        }
      ]
    },
    {
      id: "T3-R12",
      titre: "Routes de campagne",
      texte: "Sur les routes de campagne, le risque de collision avec un animal sauvage est maximal au lever et au coucher du soleil. Les engins agricoles sont lents, larges, et peuvent déborder de leur voie ou sortir d'un champ. La végétation masque souvent les intersections.",
      source: "securite-routiere.gouv.fr — Conduite hors agglomération",
      questions: [
        {
          q: "Le risque de collision avec un animal sauvage est maximal :",
          choix: ["en milieu de journée", "au lever et au coucher du soleil", "uniquement la nuit en hiver"],
          bonnes: [1],
          exp: "L'aube et le crépuscule correspondent aux déplacements des animaux, avec une visibilité encore réduite."
        },
        {
          q: "Un chevreuil traverse loin devant vous. Vous :",
          choix: ["maintenez votre allure, il est passé", "ralentissez fortement : d'autres animaux peuvent suivre", "klaxonnez en accélérant"],
          bonnes: [1],
          exp: "Les animaux se déplacent souvent en groupe : celui qu'on voit est rarement le seul."
        },
        {
          q: "Vous suivez un engin agricole large et lent. Vous le dépassez :",
          choix: ["dès que possible, il roule très lentement", "uniquement avec une visibilité et un espace suffisants, en vous méfiant d'un tourne-à-gauche vers un champ", "par la droite s'il se serre à gauche"],
          bonnes: [1],
          exp: "Les engins agricoles tournent parfois brusquement vers un champ sans clignotant visible : dépassement seulement en zone dégagée."
        }
      ]
    },
    {
      id: "T3-R13",
      titre: "Masques de visibilité en ville",
      texte: "En agglomération, les véhicules en stationnement, les bus à l'arrêt et le mobilier urbain créent des masques de visibilité : un piéton peut surgir à tout moment, notamment devant un bus ou entre deux voitures. Il faut réduire l'allure et se tenir prêt à freiner.",
      source: "securite-routiere.gouv.fr — Conduite en agglomération",
      questions: [
        {
          q: "Un bus est arrêté à son arrêt en agglomération. Vous redoutez surtout :",
          choix: ["qu'il redémarre lentement", "qu'un piéton surgisse devant ou derrière le bus", "qu'il ouvre ses portes"],
          bonnes: [1],
          exp: "Le bus masque totalement les piétons qui le contournent pour traverser : on ralentit à sa hauteur."
        },
        {
          q: "Les véhicules en stationnement le long de la chaussée :",
          choix: ["créent des masques de visibilité", "protègent les piétons", "n'ont aucune incidence sur la conduite"],
          bonnes: [0],
          exp: "Ils cachent piétons, enfants et portières qui s'ouvrent : vigilance et allure modérée s'imposent."
        },
        {
          q: "Un ballon roule sur la chaussée entre deux voitures en stationnement. Vous :",
          choix: ["l'évitez en gardant votre allure", "freinez immédiatement : un enfant peut suivre", "klaxonnez sans ralentir"],
          bonnes: [1],
          exp: "Un ballon annonce presque toujours un enfant lancé derrière lui : on freine avant même de le voir."
        }
      ]
    },
    {
      id: "T3-R14",
      titre: "Insertion et sortie de voie rapide",
      texte: "Pour s'insérer sur une voie rapide, on utilise toute la voie d'accélération afin d'atteindre la vitesse du flux, en cédant le passage aux véhicules déjà engagés. Pour sortir, on ne ralentit que dans la voie de décélération, pas sur la voie de circulation.",
      source: "securite-routiere.gouv.fr — Conduite sur autoroute",
      questions: [
        {
          q: "Pour vous insérer sur une voie rapide, vous :",
          choix: ["vous arrêtez en bout de voie d'accélération pour attendre un créneau", "utilisez toute la voie d'accélération pour prendre la vitesse du flux", "vous insérez immédiatement à vitesse réduite"],
          bonnes: [1],
          exp: "S'insérer à la vitesse du flux est la manœuvre la plus sûre ; s'arrêter en bout de voie est très dangereux."
        },
        {
          q: "Lors d'une insertion sur autoroute, la priorité appartient :",
          choix: ["aux véhicules circulant déjà sur l'autoroute", "au véhicule qui s'insère", "au plus rapide des deux"],
          bonnes: [0],
          exp: "Le conducteur qui s'insère cède le passage, même si les autres facilitent souvent la manœuvre."
        },
        {
          q: "Pour quitter l'autoroute, vous commencez à ralentir :",
          choix: ["sur la voie de droite, avant la sortie", "dans la voie de décélération", "dès le panneau à 2 000 m"],
          bonnes: [1],
          exp: "Ralentir sur la voie de circulation surprend les véhicules qui suivent : la décélération se fait dans la bretelle."
        }
      ]
    },
    {
      id: "T3-R15",
      titre: "Zones de travaux",
      texte: "La signalisation temporaire jaune (panneaux, marquage) prime sur la signalisation permanente blanche. Les zones de travaux concentrent des dangers pour les deux-roues : gravillons, décalages de voie, raccords de chaussée, personnel et engins. Allure réduite et distances augmentées s'imposent.",
      source: "securite-routiere.gouv.fr — Signalisation temporaire",
      questions: [
        {
          q: "En zone de travaux, un marquage jaune contredit le marquage blanc. Vous suivez :",
          choix: ["le marquage blanc permanent", "le marquage jaune temporaire", "le plus pratique des deux"],
          bonnes: [1],
          exp: "La signalisation temporaire jaune prime toujours sur la signalisation permanente."
        },
        {
          q: "À moto, à l'approche d'une zone de travaux, vous redoutez particulièrement :",
          choix: ["les gravillons et les décalages de voie", "le marquage jaune", "la réduction du nombre de voies uniquement"],
          bonnes: [0],
          exp: "Gravillons, raccords et bords de voie décalés sont glissants et déséquilibrants pour un deux-roues."
        },
        {
          q: "La signalisation temporaire prime sur la signalisation permanente.",
          choix: ["vrai", "faux"],
          bonnes: [0],
          exp: "Panneaux jaunes et marquages jaunes traduisent la situation réelle du moment : ce sont eux qui s'appliquent."
        }
      ]
    }
  ]
});
