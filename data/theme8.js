// data/theme8.js — Thème 8 : Équipement du motard et sécurité du véhicule
CM.theme({
  id: 8,
  nom: "Équipement du motard et sécurité du véhicule",
  regles: [
    {
      id: "T8-R01",
      titre: "Casque homologué et attaché",
      texte: "Le port d'un casque homologué (norme ECE 22-05 ou 22-06), correctement attaché et à la bonne taille, est obligatoire pour le conducteur et le passager. Le non-port ou un casque non attaché est sanctionné de 135 € d'amende et d'un retrait de 3 points. Un casque non attaché ne protège pas : il est éjecté dès le premier impact.",
      source: "securite-routiere.gouv.fr — Équipements obligatoires à moto",
      questions: [
        {
          q: "Quelle sanction encourt un motard circulant avec un casque non attaché ?",
          choix: ["Un simple avertissement", "68 € d'amende", "135 € d'amende et un retrait de 3 points"],
          bonnes: [2],
          exp: "Casque absent ou non attaché : 135 € et 3 points — un casque détaché est éjecté au premier choc."
        },
        {
          q: "Quelles normes d'homologation un casque moto doit-il respecter en Europe ?",
          choix: ["ECE 22-05 ou 22-06", "ISO 9001", "NF EN 1078"],
          bonnes: [0],
          exp: "La norme ECE 22-05, remplacée progressivement par la 22-06, est l'homologation des casques moto."
        },
        {
          q: "Le port du casque est obligatoire :",
          choix: ["pour le conducteur uniquement", "pour le conducteur et le passager", "sauf pour les trajets courts en agglomération"],
          bonnes: [1],
          exp: "Conducteur ET passager, sur tout trajet, même de quelques centaines de mètres."
        },
        {
          q: "Un casque trop grand mais bien attaché protège correctement.",
          choix: ["Vrai", "Faux"],
          bonnes: [1],
          exp: "Faux : un casque à la mauvaise taille bouge et peut se déchausser lors d'un choc — la taille fait partie de la protection."
        }
      ]
    },
    {
      id: "T8-R02",
      titre: "Stickers rétro-réfléchissants du casque",
      texte: "En France, le casque doit porter 4 autocollants rétro-réfléchissants : à l'avant, à l'arrière et sur chaque côté. Ils améliorent la visibilité du motard la nuit. Un casque qui en est dépourvu n'est pas conforme à la réglementation française.",
      source: "securite-routiere.gouv.fr — Équipements obligatoires à moto",
      questions: [
        {
          q: "Combien d'autocollants rétro-réfléchissants un casque doit-il porter en France ?",
          choix: ["2", "4", "6", "Aucun, c'est facultatif"],
          bonnes: [1],
          exp: "4 stickers obligatoires : avant, arrière et sur les deux côtés du casque."
        },
        {
          q: "À quoi servent les autocollants rétro-réfléchissants du casque ?",
          choix: ["À prouver l'homologation du casque", "À rendre le motard plus visible la nuit", "À identifier le propriétaire"],
          bonnes: [1],
          exp: "Ils renvoient la lumière des phares et rendent la tête du motard visible de nuit sous tous les angles."
        },
        {
          q: "Rouler en France avec un casque homologué mais sans stickers réfléchissants :",
          choix: ["est parfaitement conforme", "n'est pas conforme à la réglementation française", "est toléré hors agglomération"],
          bonnes: [1],
          exp: "La réglementation française impose les 4 éléments rétro-réfléchissants, même sur un casque homologué ECE."
        }
      ]
    },
    {
      id: "T8-R03",
      titre: "Remplacement du casque",
      texte: "Un casque doit être remplacé après tout choc, même sans dégât visible : les matériaux absorbants peuvent être endommagés en profondeur. Il se remplace aussi environ tous les 5 ans en raison du vieillissement des matériaux. Acheter un casque d'occasion est déconseillé : on ignore son historique.",
      source: "securite-routiere.gouv.fr — Équipements obligatoires à moto",
      questions: [
        {
          q: "Votre casque est tombé de la selle sur le trottoir, sans marque visible. Que faites-vous ?",
          choix: ["Vous le gardez : il n'a rien", "Vous le remplacez : ses capacités d'absorption peuvent être altérées", "Vous le faites recoller"],
          bonnes: [1],
          exp: "Après tout choc, même anodin en apparence, les matériaux internes peuvent être endommagés : on remplace."
        },
        {
          q: "Au bout de combien de temps est-il conseillé de remplacer un casque, même sans choc ?",
          choix: ["Environ 2 ans", "Environ 5 ans", "Jamais s'il n'a pas subi de choc"],
          bonnes: [1],
          exp: "Les matériaux vieillissent (colles, polystyrène) : remplacement conseillé environ tous les 5 ans."
        },
        {
          q: "Pourquoi l'achat d'un casque d'occasion est-il déconseillé ?",
          choix: ["Son historique de chocs est inconnu", "Les casques d'occasion sont interdits à la vente", "Il est forcément démodé"],
          bonnes: [0],
          exp: "Impossible de savoir s'il a subi un choc : ses capacités de protection sont incertaines."
        }
      ]
    },
    {
      id: "T8-R04",
      titre: "Gants certifiés CE",
      texte: "Depuis le 20 novembre 2016, le port de gants certifiés CE (norme moto) est obligatoire pour le conducteur et le passager de tout deux-roues motorisé. Pour le conducteur, le défaut de gants est sanctionné de 68 € d'amende et d'un retrait d'1 point. Les gants doivent être adaptés à la saison pour conserver dextérité et protection.",
      source: "securite-routiere.gouv.fr — Équipements obligatoires à moto",
      questions: [
        {
          q: "Quelle est la sanction pour un conducteur de moto circulant sans gants certifiés ?",
          choix: ["135 € et 3 points", "68 € et 1 point", "35 € sans retrait de point"],
          bonnes: [1],
          exp: "Défaut de gants certifiés : amende de 68 € et retrait d'1 point pour le conducteur."
        },
        {
          q: "Des gants de ski épais peuvent remplacer des gants moto en hiver.",
          choix: ["Vrai", "Faux"],
          bonnes: [1],
          exp: "Faux : seuls des gants certifiés CE pour la pratique de la moto sont conformes et protègent à l'abrasion."
        },
        {
          q: "Le port de gants certifiés concerne :",
          choix: ["le conducteur", "le passager", "uniquement les conducteurs novices"],
          bonnes: [0, 1],
          exp: "Conducteur ET passager doivent porter des gants certifiés CE depuis novembre 2016."
        },
        {
          q: "En cas de chute, les gants protègent principalement contre :",
          choix: ["l'abrasion et les fractures des mains", "le froid uniquement", "les coupures de guidon"],
          bonnes: [0],
          exp: "Dans la quasi-totalité des chutes, les mains touchent le sol en premier : abrasion et fractures sont en jeu."
        }
      ]
    },
    {
      id: "T8-R05",
      titre: "Gilet haute visibilité",
      texte: "Tout conducteur de moto doit détenir un gilet haute visibilité, sur lui ou dans un rangement du véhicule, et le porter en cas d'arrêt d'urgence sur la chaussée. Le non-port en situation d'urgence est sanctionné de 135 € ; la non-détention relève d'une amende de première classe (11 €).",
      source: "securite-routiere.gouv.fr — Équipements obligatoires à moto",
      questions: [
        {
          q: "Que devez-vous faire du gilet haute visibilité quand vous roulez ?",
          choix: ["Le porter en permanence", "L'avoir sur soi ou dans un rangement de la moto", "Le laisser à la maison s'il fait jour"],
          bonnes: [1],
          exp: "L'obligation est de le DÉTENIR à portée de main ; le PORT ne devient obligatoire qu'en cas d'arrêt d'urgence."
        },
        {
          q: "En panne de nuit sur le bas-côté, vous ne portez pas votre gilet haute visibilité. Vous risquez :",
          choix: ["11 € d'amende", "135 € d'amende", "aucune sanction la nuit"],
          bonnes: [1],
          exp: "Ne pas porter le gilet lors d'un arrêt d'urgence est sanctionné de 135 € — c'est là qu'il sauve des vies."
        },
        {
          q: "Ne pas avoir de gilet haute visibilité avec soi à moto est sanctionné :",
          choix: ["d'une amende de première classe (11 €)", "de 135 € et 3 points", "d'une immobilisation du véhicule"],
          bonnes: [0],
          exp: "La simple non-détention relève d'une contravention de 1re classe ; le non-port en urgence coûte 135 €."
        }
      ]
    },
    {
      id: "T8-R06",
      titre: "Blouson, pantalon et protections",
      texte: "Blouson et pantalon adaptés sont fortement recommandés, avec protections certifiées CE (norme EN 1621) aux coudes, épaules et genoux, et dorsale conseillée. Un jean et un tee-shirt n'offrent aucune protection : à 50 km/h, une glissade détruit le tissu en quelques mètres et attaque la peau.",
      source: "securite-routiere.gouv.fr — Guide « Je m'équipe »",
      questions: [
        {
          q: "Quelle norme certifie les protections (coudes, épaules, dorsale) des vêtements moto ?",
          choix: ["EN 1621", "ECE 22-06", "ISO 14001"],
          bonnes: [0],
          exp: "La norme EN 1621 certifie les coques de protection contre les impacts des équipements moto."
        },
        {
          q: "En été, par forte chaleur, pour un court trajet urbain :",
          choix: ["le tee-shirt est acceptable à faible vitesse", "un équipement adapté (blouson ventilé, protections) reste indispensable", "seuls casque et gants comptent vraiment"],
          bonnes: [1],
          exp: "La gravité d'une glissade ne dépend pas de la longueur du trajet : il existe des équipements ventilés pour l'été."
        },
        {
          q: "Parmi ces protections, lesquelles sont recommandées par la Sécurité routière ?",
          choix: ["La dorsale", "Les protections coudes et épaules certifiées", "Les genouillères de chantier"],
          bonnes: [0, 1],
          exp: "Dorsale et protections CE aux articulations : c'est l'équipement recommandé, en plus du casque et des gants obligatoires."
        }
      ]
    },
    {
      id: "T8-R07",
      titre: "Chaussures adaptées",
      texte: "Des chaussures montantes, maintenant la cheville et le bas du tibia, avec semelle rigide, sont fortement recommandées. Les baskets basses laissent exposés les malléoles et le pied, zones très touchées dans les chutes et les chocs latéraux.",
      source: "securite-routiere.gouv.fr — Guide « Je m'équipe »",
      questions: [
        {
          q: "Quelles chaussures sont recommandées pour conduire une moto ?",
          choix: ["Des chaussures montantes maintenant la cheville", "Des baskets légères pour mieux sentir le sélecteur", "Des tongs en été"],
          bonnes: [0],
          exp: "Montantes, semelle rigide, maintien de la cheville : les pieds et malléoles sont très exposés en cas de chute."
        },
        {
          q: "Quelles zones les chaussures moto protègent-elles en priorité ?",
          choix: ["Les malléoles et la cheville", "Le bas du tibia", "Les orteils uniquement"],
          bonnes: [0, 1],
          exp: "Malléoles, cheville et bas du tibia : les zones écrasées ou frottées quand la moto se couche."
        },
        {
          q: "Conduire une moto en tongs est interdit par le Code de la route.",
          choix: ["Vrai", "Faux"],
          bonnes: [1],
          exp: "Faux : aucune obligation légale de chaussures, mais c'est fortement déconseillé — seuls casque, gants et gilet (détention) sont imposés."
        }
      ]
    }
    ,
    {
      id: "T8-R08",
      titre: "Airbag moto",
      texte: "Le gilet ou blouson airbag, à déclenchement filaire ou électronique, protège le thorax, l'abdomen et la colonne vertébrale en cas de choc ou de chute. Il n'est pas obligatoire mais il est recommandé par la Sécurité routière : il réduit significativement la gravité des blessures au tronc.",
      source: "securite-routiere.gouv.fr — Guide « Je m'équipe »",
      questions: [
        {
          q: "L'airbag moto est :",
          choix: ["obligatoire depuis 2024", "recommandé mais non obligatoire", "réservé à la compétition"],
          bonnes: [1],
          exp: "Il n'est pas imposé par la loi, mais la Sécurité routière le recommande fortement."
        },
        {
          q: "Quelles zones l'airbag moto protège-t-il principalement ?",
          choix: ["Le thorax et l'abdomen", "La colonne vertébrale", "Les bras et les jambes"],
          bonnes: [0, 1],
          exp: "L'airbag se gonfle autour du tronc : thorax, abdomen et colonne — les organes vitaux."
        },
        {
          q: "Quels types de déclenchement existent pour les airbags moto ?",
          choix: ["Filaire ou électronique", "Uniquement manuel, par une poignée", "Par choc sur le casque"],
          bonnes: [0],
          exp: "Deux familles : le système filaire relié à la moto, et l'électronique à capteurs qui détecte la chute."
        }
      ]
    },
    {
      id: "T8-R09",
      titre: "Visière et vision",
      texte: "L'écran du casque doit rester propre et non rayé, avec un traitement ou un film antibuée (type pinlock) pour l'hiver. Un écran teinté ou fumé est interdit la nuit, tout comme la conduite nocturne avec des lunettes de soleil : la perception des obstacles serait dangereusement réduite.",
      source: "securite-routiere.gouv.fr — Guide « Je m'équipe »",
      questions: [
        {
          q: "Rouler de nuit avec un écran fumé :",
          choix: ["est autorisé en agglomération éclairée", "est interdit", "est conseillé contre l'éblouissement"],
          bonnes: [1],
          exp: "L'écran teinté réduit la vision de nuit : il est interdit après la tombée du jour."
        },
        {
          q: "Que permet un dispositif type pinlock ?",
          choix: ["D'éviter la formation de buée sur l'écran", "De teinter l'écran automatiquement", "De chauffer la visière en hiver"],
          bonnes: [0],
          exp: "Le pinlock est un double écran antibuée : vision nette par temps froid ou humide."
        },
        {
          q: "Un écran rayé :",
          choix: ["diffuse la lumière et éblouit, surtout la nuit : il faut le remplacer", "n'a aucun effet sur la sécurité", "se polit avec un chiffon sec"],
          bonnes: [0],
          exp: "Les rayures diffractent la lumière des phares la nuit : écran à remplacer dès qu'il est abîmé."
        }
      ]
    },
    {
      id: "T8-R10",
      titre: "Être vu : vêtements et feux",
      texte: "Le motard est détecté plus tard qu'une voiture : silhouette étroite, souvent confondue avec l'arrière-plan. Un équipement clair ou doté d'éléments rétro-réfléchissants et le feu de croisement allumé de jour (obligatoire) améliorent nettement sa détection par les autres usagers.",
      source: "securite-routiere.gouv.fr — Guide « Je m'équipe »",
      questions: [
        {
          q: "Pourquoi un motard est-il détecté plus tard qu'une voiture ?",
          choix: ["Sa silhouette est étroite et se confond avec l'arrière-plan", "Il roule toujours plus vite", "Les automobilistes ne regardent jamais leurs rétroviseurs"],
          bonnes: [0],
          exp: "Le gabarit étroit de la moto la rend moins visible et plus difficile à repérer dans le trafic."
        },
        {
          q: "Pour être mieux vu à moto, vous pouvez :",
          choix: ["porter un équipement clair ou rétro-réfléchissant", "rouler feu de croisement allumé le jour", "rouler le plus près possible des véhicules"],
          bonnes: [0, 1],
          exp: "Équipement visible + feu de croisement de jour (obligatoire) = détection nettement améliorée."
        },
        {
          q: "Un équipement tout noir la nuit :",
          choix: ["n'a pas d'incidence grâce aux feux de la moto", "retarde fortement votre détection par les autres usagers", "est recommandé pour éviter d'éblouir"],
          bonnes: [1],
          exp: "De nuit, un motard sombre est quasi invisible hors du faisceau des phares : le rétro-réfléchissant fait la différence."
        }
      ]
    },
    {
      id: "T8-R11",
      titre: "Équipement et consignes du passager",
      texte: "Le passager a strictement les mêmes obligations que le conducteur : casque homologué attaché et gants certifiés CE. Avant de partir, le conducteur lui donne les consignes : tenir le conducteur ou les poignées, accompagner les mouvements de la moto sans contrarier les inclinaisons, et garder les pieds sur les repose-pieds.",
      source: "securite-routiere.gouv.fr — Équipements obligatoires à moto",
      questions: [
        {
          q: "Quels équipements sont obligatoires pour votre passager ?",
          choix: ["Casque homologué attaché", "Gants certifiés CE", "Blouson airbag"],
          bonnes: [0, 1],
          exp: "Le passager a les mêmes obligations : casque attaché et gants certifiés. L'airbag reste recommandé."
        },
        {
          q: "Quelle consigne donner à un passager novice ?",
          choix: ["Rester droit dans les virages pour équilibrer", "Accompagner les mouvements de la moto sans les contrarier", "Poser les pieds au sol à chaque arrêt"],
          bonnes: [1],
          exp: "Le passager suit le mouvement de la moto ; se redresser dans un virage dégrade la trajectoire."
        },
        {
          q: "Pendant le trajet, les pieds du passager :",
          choix: ["restent sur les repose-pieds, même à l'arrêt", "pendent librement à basse vitesse", "se posent au sol aux feux rouges"],
          bonnes: [0],
          exp: "Les pieds restent en permanence sur les repose-pieds : c'est une condition de stabilité et de sécurité."
        }
      ]
    },
    {
      id: "T8-R12",
      titre: "Chargement et bagages",
      texte: "Top-case et sacoches doivent être homologués, arrimés et chargés dans la limite indiquée par le constructeur. Modifier la répartition des masses change le comportement de la moto : il faut adapter la pression des pneus et la précharge de l'amortisseur. Rien ne doit être instable ni dépasser dangereusement.",
      source: "securite-routiere.gouv.fr — Conseils aux motards",
      questions: [
        {
          q: "Un top-case chargé modifie :",
          choix: ["le comportement de la moto, surtout à haute vitesse", "uniquement la consommation", "rien de perceptible"],
          bonnes: [0],
          exp: "La masse haute et reculée peut provoquer des flottements : respecter la charge maximale indiquée."
        },
        {
          q: "Avant un long trajet chargé, vous devez adapter :",
          choix: ["la pression des pneus", "la précharge de l'amortisseur", "la hauteur de selle"],
          bonnes: [0, 1],
          exp: "Pression et précharge se règlent en fonction de la charge pour conserver tenue de route et garde au sol."
        },
        {
          q: "Un sac souple simplement posé sur la selle passager et tenu par deux tendeurs usés :",
          choix: ["convient pour un court trajet", "est dangereux : le chargement doit être stable et bien arrimé", "est acceptable sous 50 km/h"],
          bonnes: [1],
          exp: "Un bagage qui se détache peut bloquer la roue ou surprendre les usagers qui suivent : arrimage sérieux obligatoire."
        }
      ]
    },
    {
      id: "T8-R13",
      titre: "Antivol",
      texte: "Un antivol homologué (SRA ou NF) est recommandé contre le vol, fléau des deux-roues. Attention à l'antivol de disque oublié au démarrage : il provoque une chute immédiate. Un témoin de rappel (câble reliant l'antivol au guidon) permet d'éviter l'oubli.",
      source: "securite-routiere.gouv.fr — Conseils aux motards",
      questions: [
        {
          q: "Quelles homologations garantissent la qualité d'un antivol moto ?",
          choix: ["SRA ou NF", "CE uniquement", "ECE 22-06"],
          bonnes: [0],
          exp: "Les certifications SRA et NF sont les références ; certaines assurances exigent un antivol SRA."
        },
        {
          q: "Que risque-t-on en démarrant avec un antivol de disque en place ?",
          choix: ["Une chute immédiate", "Une simple rayure sur la jante", "Rien, la moto ne démarre pas"],
          bonnes: [0],
          exp: "L'antivol bloque la roue dès les premiers centimètres : la chute est quasi inévitable."
        },
        {
          q: "Comment éviter d'oublier son antivol de disque ?",
          choix: ["Utiliser un câble de rappel relié au guidon", "Le poser toujours sur la roue arrière", "S'en remettre à sa mémoire"],
          bonnes: [0],
          exp: "Le câble de rappel, bien visible sur le guidon, évite le démarrage antivol en place."
        }
      ]
    },
    {
      id: "T8-R14",
      titre: "Catadioptre, plaque et avertisseur",
      texte: "La moto doit être équipée d'un catadioptre arrière rouge, d'une plaque d'immatriculation éclairée et lisible, et d'un avertisseur sonore conforme et audible. Ces équipements d'origine homologués doivent rester en l'état : leur absence ou leur modification est sanctionnable.",
      source: "legifrance.gouv.fr — Code de la route (équipements des véhicules)",
      questions: [
        {
          q: "Quel dispositif réfléchissant est obligatoire à l'arrière d'une moto ?",
          choix: ["Un catadioptre rouge", "Une bande blanche", "Un triangle orange"],
          bonnes: [0],
          exp: "Le catadioptre arrière rouge rend la moto visible la nuit, même feux éteints."
        },
        {
          q: "La nuit, votre plaque d'immatriculation doit être :",
          choix: ["éclairée et lisible", "simplement propre", "repliée pour éviter les projections"],
          bonnes: [0],
          exp: "L'éclairage de plaque fait partie des équipements obligatoires contrôlés."
        },
        {
          q: "Remplacer son avertisseur sonore par un klaxon de camion plus puissant :",
          choix: ["améliore la sécurité, donc c'est autorisé", "est interdit : l'avertisseur doit rester conforme", "est autorisé hors agglomération"],
          bonnes: [1],
          exp: "L'avertisseur doit être du type homologué pour le véhicule : ni affaibli, ni remplacé par un dispositif non conforme."
        }
      ]
    }
  ]
});
