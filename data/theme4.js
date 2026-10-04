// data/theme4.js — Thème 4 : Les autres usagers
CM.theme({
  id: 4,
  nom: "Les autres usagers",
  regles: [
    {
      id: "T4-R01",
      titre: "Angles morts des poids lourds et bus",
      texte: "Les poids lourds et les bus ont des angles morts très étendus : juste devant la cabine, juste derrière, et le long des flancs. Règle simple : si vous ne voyez pas les rétroviseurs du camion, son conducteur ne peut pas vous voir. On ne stationne jamais dans ces zones et on dépasse franchement, sans s'attarder à la hauteur du véhicule.",
      source: "securite-routiere.gouv.fr — Angles morts",
      questions: [
        {
          q: "Vous ne voyez pas les rétroviseurs du camion qui vous précède. Cela signifie que :",
          choix: ["son conducteur ne peut pas vous voir", "vous êtes à bonne distance", "il va bientôt tourner"],
          bonnes: [0],
          exp: "Pas de rétroviseur visible = vous êtes dans l'angle mort du poids lourd."
        },
        {
          q: "Pour dépasser un poids lourd, vous :",
          choix: ["restez un moment à sa hauteur pour vérifier sa trajectoire", "le dépassez franchement, sans vous attarder le long de son flanc", "le dépassez par la droite si la voie est libre"],
          bonnes: [1],
          exp: "Les flancs d'un poids lourd sont des angles morts : on y passe le moins de temps possible."
        },
        {
          q: "Où se situent les angles morts d'un poids lourd ?",
          choix: ["juste derrière lui", "le long de ses flancs", "à 100 m devant lui"],
          bonnes: [0, 1],
          exp: "L'arrière immédiat et les flancs sont invisibles du conducteur ; juste devant la cabine aussi."
        },
        {
          q: "À un feu rouge derrière un bus, vous vous arrêtez :",
          choix: ["collé à son pare-chocs pour gagner de la place", "en retrait, de façon à voir ses rétroviseurs", "à sa hauteur, le long de son flanc droit"],
          bonnes: [1],
          exp: "En retrait et visible dans ses rétroviseurs, vous éviterez d'être oublié au démarrage ou lors d'une manœuvre."
        }
      ]
    },
    {
      id: "T4-R02",
      titre: "Priorité aux piétons",
      texte: "Le conducteur doit céder le passage au piéton engagé sur la chaussée ou qui manifeste clairement l'intention de traverser. Le refus de priorité à un piéton est sanctionné de 135 € et d'un retrait de 6 points. On ne dépasse jamais un véhicule arrêté devant un passage piéton : il masque probablement quelqu'un.",
      source: "securite-routiere.gouv.fr — Piétons",
      questions: [
        {
          q: "Un piéton attend au bord d'un passage piéton et s'apprête visiblement à traverser. Vous :",
          choix: ["passez : il n'est pas encore engagé", "lui cédez le passage", "accélérez pour passer avant lui"],
          bonnes: [1],
          exp: "La priorité est due dès que le piéton manifeste l'intention de traverser, pas seulement quand il est engagé."
        },
        {
          q: "Le refus de priorité à un piéton est sanctionné par :",
          choix: ["135 € et un retrait de 6 points", "35 € sans retrait de point", "68 € et 1 point"],
          bonnes: [0],
          exp: "C'est une des sanctions les plus lourdes du Code : amende de 4e classe et 6 points."
        },
        {
          q: "Une voiture est arrêtée juste avant un passage piéton, sans raison apparente. Vous :",
          choix: ["la dépassez prudemment", "vous arrêtez aussi : elle laisse probablement traverser un piéton masqué", "klaxonnez pour la faire avancer"],
          bonnes: [1],
          exp: "Dépasser un véhicule arrêté devant un passage piéton, c'est risquer de percuter le piéton qu'il laisse passer."
        }
      ]
    },
    {
      id: "T4-R03",
      titre: "Cyclistes : écart latéral et sas vélo",
      texte: "Pour dépasser un cycliste, l'écart latéral minimal est de 1 m en agglomération et de 1,50 m hors agglomération. Les cyclistes peuvent faire des écarts (vent, obstacle, caniveau) : on anticipe. Le sas vélo aux feux leur est réservé : la moto s'arrête avant la première ligne, jamais dans le sas.",
      source: "securite-routiere.gouv.fr — Cyclistes",
      questions: [
        {
          q: "Hors agglomération, l'écart latéral minimal pour dépasser un cycliste est de :",
          choix: ["1 mètre", "1,50 mètre", "2 mètres"],
          bonnes: [1],
          exp: "1,50 m hors agglomération, 1 m en agglomération : c'est une obligation du Code de la route."
        },
        {
          q: "En agglomération, vous dépassez un cycliste en laissant au minimum :",
          choix: ["0,50 m", "1 m", "1,50 m"],
          bonnes: [1],
          exp: "En ville, l'écart latéral minimal est de 1 m ; davantage si le cycliste semble hésitant."
        },
        {
          q: "À un feu rouge équipé d'un sas vélo, vous vous arrêtez :",
          choix: ["dans le sas, devant les voitures", "avant la première ligne, en dehors du sas", "au niveau du feu"],
          bonnes: [1],
          exp: "Le sas est réservé aux cyclistes ; s'y arrêter en moto est sanctionnable (135 €)."
        }
      ]
    },
    {
      id: "T4-R04",
      titre: "Trottinettes et EDPM",
      texte: "Les engins de déplacement personnel motorisés (trottinettes électriques, etc.) sont bridés à 25 km/h et interdits sur les trottoirs sauf exception locale. Leurs conducteurs sont parfois imprévisibles et peu visibles : on garde ses distances et on anticipe leurs écarts.",
      source: "service-public.fr — Engins de déplacement personnel motorisés",
      questions: [
        {
          q: "La vitesse maximale par construction d'une trottinette électrique est de :",
          choix: ["25 km/h", "45 km/h", "35 km/h"],
          bonnes: [0],
          exp: "Les EDPM sont bridés à 25 km/h par la réglementation."
        },
        {
          q: "Vous suivez une trottinette électrique en ville. Vous :",
          choix: ["la dépassez au plus près pour la prévenir", "gardez vos distances et anticipez un écart possible", "klaxonnez pour qu'elle se range"],
          bonnes: [1],
          exp: "Les EDPM changent facilement de trajectoire : distance et anticipation, comme pour un cycliste."
        },
        {
          q: "Par défaut, les trottinettes électriques sont autorisées à circuler sur les trottoirs.",
          choix: ["vrai", "faux"],
          bonnes: [1],
          exp: "Sauf autorisation locale spécifique, le trottoir leur est interdit : elles circulent sur pistes cyclables ou chaussée."
        }
      ]
    },
    {
      id: "T4-R05",
      titre: "Usagers vulnérables",
      texte: "Enfants, personnes âgées et personnes à mobilité réduite ont des comportements moins prévisibles : traversées soudaines, temps de traversée allongé, mauvaise évaluation des vitesses. À leur approche, on ralentit et on se tient prêt à s'arrêter.",
      source: "securite-routiere.gouv.fr — Usagers vulnérables",
      questions: [
        {
          q: "Un enfant marche seul au bord de la chaussée. Vous :",
          choix: ["maintenez votre vitesse en vous écartant", "ralentissez et vous tenez prêt à vous arrêter", "klaxonnez pour le prévenir"],
          bonnes: [1],
          exp: "Un enfant peut s'élancer sans regarder : on réduit l'allure et on augmente la marge de sécurité."
        },
        {
          q: "Une personne âgée traverse lentement alors que le feu passe au vert pour vous. Vous :",
          choix: ["la laissez terminer sa traversée", "passez derrière elle au plus près", "klaxonnez pour l'inciter à accélérer"],
          bonnes: [0],
          exp: "Le piéton engagé reste prioritaire, quel que soit l'état du feu : on attend qu'il ait terminé."
        },
        {
          q: "Parmi ces usagers, lesquels sont considérés comme vulnérables ?",
          choix: ["les piétons", "les cyclistes", "les automobilistes"],
          bonnes: [0, 1],
          exp: "Sans carrosserie, piétons et cyclistes (comme les motards) paient le prix fort en cas de choc."
        }
      ]
    },
    {
      id: "T4-R06",
      titre: "Véhicules d'urgence et corridor de sécurité",
      texte: "À l'approche d'un véhicule d'intérêt général prioritaire (sirène et gyrophare en action), on lui facilite immédiatement le passage en se rangeant. Le corridor de sécurité impose, au passage d'un véhicule d'intervention ou en détresse arrêté sur la bande d'arrêt d'urgence, de s'écarter d'une voie ou, à défaut, de ralentir fortement.",
      source: "securite-routiere.gouv.fr — Corridor de sécurité",
      questions: [
        {
          q: "Une ambulance arrive derrière vous, sirène et gyrophare en action. Vous :",
          choix: ["accélérez pour ne pas la gêner", "lui facilitez le passage en vous rangeant dès que possible", "maintenez votre trajectoire : vous êtes prioritaire"],
          bonnes: [1],
          exp: "Les véhicules d'intérêt général prioritaires en intervention ont priorité absolue : on dégage le passage sans créer de danger."
        },
        {
          q: "Sur autoroute, une dépanneuse est arrêtée sur la bande d'arrêt d'urgence, feux allumés. Vous :",
          choix: ["changez de voie si possible, sinon ralentissez fortement", "maintenez voie et allure", "vous arrêtez à sa hauteur pour proposer de l'aide"],
          bonnes: [0],
          exp: "C'est la règle du corridor de sécurité : s'écarter d'une voie ou, à défaut, ralentir nettement."
        },
        {
          q: "Le corridor de sécurité protège :",
          choix: ["les personnes qui interviennent sur un véhicule arrêté au bord de la route", "uniquement les forces de l'ordre", "les véhicules en circulation rapide"],
          bonnes: [0],
          exp: "Dépanneurs, patrouilleurs, secours et conducteurs en panne sont très exposés : le corridor leur donne une zone tampon."
        }
      ]
    },
    {
      id: "T4-R07",
      titre: "Bus quittant son arrêt",
      texte: "En agglomération, on doit faciliter la réinsertion d'un bus qui manifeste, clignotant allumé, son intention de quitter son arrêt. Hors agglomération, cette priorité de réinsertion ne s'applique pas de la même façon, mais la prudence reste de mise.",
      source: "Code de la route — Facilités de passage aux transports en commun",
      questions: [
        {
          q: "En agglomération, un bus à l'arrêt met son clignotant pour repartir. Vous :",
          choix: ["accélérez pour le dépasser avant qu'il ne démarre", "ralentissez et le laissez se réinsérer", "klaxonnez pour signaler votre présence"],
          bonnes: [1],
          exp: "En ville, on doit faciliter le départ des bus qui signalent leur intention de quitter l'arrêt."
        },
        {
          q: "Cette facilité de réinsertion du bus s'applique de plein droit partout, même hors agglomération.",
          choix: ["vrai", "faux"],
          bonnes: [1],
          exp: "L'obligation de céder le passage au bus quittant son arrêt vaut en agglomération."
        },
        {
          q: "En laissant repartir le bus, vous restez attentif :",
          choix: ["aux piétons qui pourraient surgir devant ou derrière le bus", "uniquement au clignotant du bus", "aux véhicules qui vous suivent seulement"],
          bonnes: [0],
          exp: "Un bus à l'arrêt masque les piétons : le danger est double au moment de son départ."
        }
      ]
    },
    {
      id: "T4-R08",
      titre: "L'automobiliste qui tourne à gauche",
      texte: "Le refus de priorité d'un véhicule qui tourne à gauche en coupant la trajectoire de la moto est la première cause d'accident moto en intersection : la silhouette étroite de la moto rend sa détection et l'estimation de sa vitesse difficiles. On anticipe le refus de priorité, on ralentit et on cherche le contact visuel avec le conducteur.",
      source: "securite-routiere.gouv.fr — Accidentalité des deux-roues motorisés",
      questions: [
        {
          q: "La première cause d'accident de moto en intersection est :",
          choix: ["l'excès de vitesse du motard", "le véhicule qui tourne à gauche en coupant la route de la moto", "le non-port du casque"],
          bonnes: [1],
          exp: "Le tourne-à-gauche d'un véhicule qui n'a pas vu la moto est le scénario d'accident le plus fréquent en intersection."
        },
        {
          q: "Une voiture en face de vous met son clignotant à gauche alors que vous allez tout droit. Vous :",
          choix: ["passez à vitesse constante : vous avez la priorité", "ralentissez et vous tenez prêt à freiner, même si vous avez la priorité", "accélérez pour passer avant elle"],
          bonnes: [1],
          exp: "Avoir la priorité ne protège pas d'un conducteur qui ne vous a pas vu : on anticipe le refus de priorité."
        },
        {
          q: "Pour réduire le risque à l'approche d'une intersection, vous :",
          choix: ["cherchez le contact visuel avec les conducteurs en attente", "supposez que vous avez été vu", "fixez uniquement le feu tricolore"],
          bonnes: [0],
          exp: "Tant que le contact visuel n'est pas établi, on considère qu'on n'a pas été vu."
        },
        {
          q: "La silhouette étroite d'une moto rend difficile pour les autres l'estimation de sa vitesse et de sa distance.",
          choix: ["vrai", "faux"],
          bonnes: [0],
          exp: "C'est précisément pour cela que les automobilistes s'engagent en pensant avoir le temps : le motard doit l'anticiper."
        }
      ]
    },
    {
      id: "T4-R09",
      titre: "Être vu",
      texte: "À moto, le feu de croisement allumé de jour est obligatoire. On se place dans le champ des rétroviseurs des autres véhicules et on évite de circuler dans leurs angles morts. Un équipement clair ou rétro-réfléchissant améliore nettement la détection.",
      source: "securite-routiere.gouv.fr — Être vu à moto",
      questions: [
        {
          q: "De jour, le feu de croisement d'une moto doit être :",
          choix: ["éteint pour économiser l'ampoule", "allumé en permanence", "allumé uniquement par mauvais temps"],
          bonnes: [1],
          exp: "L'allumage du feu de croisement de jour est obligatoire pour les deux-roues motorisés."
        },
        {
          q: "Pour rester visible d'un automobiliste, vous vous placez :",
          choix: ["dans le champ de ses rétroviseurs", "juste derrière son aile arrière", "au plus près de son pare-chocs"],
          bonnes: [0],
          exp: "L'aile arrière d'une voiture correspond à son angle mort : on s'y attarde le moins possible."
        },
        {
          q: "Qu'est-ce qui améliore votre visibilité à moto ?",
          choix: ["un équipement rétro-réfléchissant ou clair", "se placer dans le champ de vision des autres", "circuler dans les angles morts"],
          bonnes: [0, 1],
          exp: "Équipement visible et placement judicieux compensent la silhouette étroite de la moto."
        }
      ]
    },
    {
      id: "T4-R10",
      titre: "Portières : le risque de dooring",
      texte: "Le long d'une file de véhicules en stationnement, une portière peut s'ouvrir à tout moment. On garde environ un mètre de marge latérale et on repère les indices : véhicule qui vient de se garer, conducteur visible à bord, feux qui s'éteignent.",
      source: "securite-routiere.gouv.fr — Conduite en agglomération",
      questions: [
        {
          q: "En longeant une file de voitures en stationnement, vous conservez :",
          choix: ["environ un mètre de marge latérale", "le minimum pour rester dans votre voie", "une distance variable selon votre vitesse uniquement"],
          bonnes: [0],
          exp: "Un mètre de marge permet d'absorber l'ouverture soudaine d'une portière."
        },
        {
          q: "Quel indice annonce un risque d'ouverture de portière ?",
          choix: ["un conducteur visible à bord d'un véhicule qui vient de se garer", "un véhicule aux vitres embuées depuis des heures", "une voiture sans plaque"],
          bonnes: [0],
          exp: "Véhicule fraîchement garé + occupant à bord = portière qui peut s'ouvrir d'une seconde à l'autre."
        },
        {
          q: "Le choc contre une portière qui s'ouvre est bénin pour un motard.",
          choix: ["vrai", "faux"],
          bonnes: [1],
          exp: "Le dooring projette le motard sur la chaussée, parfois sous un autre véhicule : c'est un accident grave."
        }
      ]
    },
    {
      id: "T4-R11",
      titre: "Véhicules lents et convois exceptionnels",
      texte: "Engins agricoles et convois exceptionnels sont lents, larges et peuvent manœuvrer de façon inattendue. On patiente en retrait, hors des projections, et on ne dépasse qu'avec une visibilité et un espace suffisants. On ne s'insère jamais entre les véhicules d'un convoi.",
      source: "securite-routiere.gouv.fr — Partage de la route",
      questions: [
        {
          q: "Vous souhaitez dépasser un engin agricole. Vous le faites :",
          choix: ["dès qu'il se serre à droite", "uniquement avec une visibilité et un espace suffisants", "en klaxonnant pour annoncer votre manœuvre"],
          bonnes: [1],
          exp: "Large et lent, un engin agricole peut aussi tourner brusquement : le dépassement exige une zone parfaitement dégagée."
        },
        {
          q: "Face à un convoi exceptionnel escorté, vous :",
          choix: ["vous insérez entre les véhicules du convoi pour gagner du temps", "ne coupez jamais le convoi et suivez les consignes de l'escorte", "doublez l'ensemble en une seule fois quelles que soient les conditions"],
          bonnes: [1],
          exp: "Un convoi forme un ensemble indivisible : on ne s'y insère pas et on obéit aux véhicules d'accompagnement."
        },
        {
          q: "Derrière un véhicule lent, en attendant de pouvoir dépasser, vous restez :",
          choix: ["collé à lui pour raccourcir le dépassement", "en retrait, avec une bonne visibilité sur la voie opposée", "à sa hauteur, sur la voie de gauche"],
          bonnes: [1],
          exp: "En retrait, on voit plus loin, on évite les projections et on garde une marge de sécurité."
        }
      ]
    },
    {
      id: "T4-R12",
      titre: "Rouler entre motards",
      texte: "L'esprit de groupe ne dispense d'aucune règle du Code. En groupe, on roule en quinconce pour conserver les distances de sécurité tout en restant compact. La nuit ou par visibilité insuffisante, le Code impose la circulation en file simple.",
      source: "Code de la route — Circulation en groupe",
      questions: [
        {
          q: "En groupe de motards, la formation recommandée de jour est :",
          choix: ["côte à côte sur la même voie", "en quinconce", "en file indienne collée"],
          bonnes: [1],
          exp: "Le quinconce garde le groupe compact tout en préservant les distances de sécurité de chacun."
        },
        {
          q: "La nuit, un groupe de motards doit circuler :",
          choix: ["en quinconce serré", "en file simple", "sur deux colonnes"],
          bonnes: [1],
          exp: "Dès que la visibilité est insuffisante, le Code impose la file simple aux conducteurs en groupe."
        },
        {
          q: "Rouler en groupe autorise des distances de sécurité réduites entre motos.",
          choix: ["vrai", "faux"],
          bonnes: [1],
          exp: "Chaque motard reste soumis aux règles d'interdistance : le groupe n'est pas une exception au Code."
        }
      ]
    }
  ]
});
