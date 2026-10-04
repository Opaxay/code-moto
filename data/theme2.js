// data/theme2.js — Thème 2 : Le conducteur
CM.theme({
  id: 2,
  nom: "Le conducteur",
  regles: [
    {
      id: "T2-R01",
      titre: "Alcool : taux et sanctions",
      texte: "La limite légale est de 0,5 g/L de sang (0,25 mg/L d'air expiré) ; pour le permis probatoire, 0,2 g/L, soit zéro verre en pratique. De 0,5 à 0,8 g/L : 135 € et retrait de 6 points. À partir de 0,8 g/L : délit (jusqu'à 4 500 € d'amende, 6 points, suspension). À moto, l'alcool dégrade aussi l'équilibre : le sur-risque mortel est majeur.",
      source: "securite-routiere.gouv.fr — Alcool et conduite",
      questions: [
        {
          q: "Taux d'alcool maximal autorisé pour un conducteur en permis probatoire :",
          choix: ["0,2 g/L de sang", "0,5 g/L de sang", "0,8 g/L de sang"],
          bonnes: [0],
          exp: "Le probatoire est limité à 0,2 g/L, ce qui équivaut à zéro verre."
        },
        {
          q: "Le taux légal pour un conducteur confirmé est de :",
          choix: ["0,8 g/L de sang", "0,5 g/L de sang (0,25 mg/L d'air expiré)", "0,2 g/L de sang"],
          bonnes: [1],
          exp: "0,5 g/L de sang, soit 0,25 mg/L d'air expiré à l'éthylotest."
        },
        {
          q: "Conduire avec un taux entre 0,5 et 0,8 g/L expose à :",
          choix: ["un délit jugé au tribunal", "135 € et retrait de 6 points", "68 € et 1 point"],
          bonnes: [1],
          exp: "C'est une contravention : amende forfaitaire de 135 € et 6 points."
        },
        {
          q: "À partir de 0,8 g/L de sang, la conduite devient :",
          choix: ["une contravention majorée", "un délit (jusqu'à 4 500 €, 6 points, suspension)"],
          bonnes: [1],
          exp: "Au-delà de 0,8 g/L, on passe du tribunal de police au délit : sanctions beaucoup plus lourdes."
        }
      ]
    },
    {
      id: "T2-R02",
      titre: "Effets de l'alcool",
      texte: "L'alcool rétrécit le champ visuel, allonge le temps de réaction, provoque euphorie et surconfiance, et dégrade l'équilibre — critique à moto. L'organisme élimine environ 0,10 à 0,15 g/L par heure : ni le café, ni la douche froide n'accélèrent l'élimination.",
      source: "securite-routiere.gouv.fr — Alcool et conduite",
      questions: [
        {
          q: "L'alcool provoque :",
          choix: ["un rétrécissement du champ visuel", "un allongement du temps de réaction", "une meilleure concentration"],
          bonnes: [0, 1],
          exp: "Vision en tunnel et réactions ralenties : deux effets majeurs dès les premiers verres."
        },
        {
          q: "Café serré, douche froide : accélèrent-ils l'élimination de l'alcool ?",
          choix: ["oui, sensiblement", "non, seul le temps agit"],
          bonnes: [1],
          exp: "Aucun remède n'accélère l'élimination : environ 0,10 à 0,15 g/L par heure, c'est tout."
        },
        {
          q: "L'organisme élimine environ :",
          choix: ["0,5 g/L par heure", "0,10 à 0,15 g/L par heure", "1 g/L par heure"],
          bonnes: [1],
          exp: "Après une soirée, on peut encore être positif le lendemain matin."
        },
        {
          q: "À moto, l'alcool est particulièrement dangereux car :",
          choix: ["il dégrade aussi l'équilibre", "la moto étant légère, le risque est moindre"],
          bonnes: [0],
          exp: "Un deux-roues exige un équilibre permanent que l'alcool compromet directement."
        }
      ]
    },
    {
      id: "T2-R03",
      titre: "Stupéfiants",
      texte: "La conduite après usage de stupéfiants est un délit : tolérance zéro, dépistage salivaire possible. Sanctions : jusqu'à 4 500 € d'amende, 6 points, suspension jusqu'à 3 ans. Le cannabis multiplie par 2 le risque d'accident mortel ; l'association alcool + cannabis par 29.",
      source: "securite-routiere.gouv.fr — Stupéfiants et conduite",
      questions: [
        {
          q: "La conduite après usage de stupéfiants est :",
          choix: ["tolérée sous un seuil légal", "un délit : tolérance zéro", "une simple contravention"],
          bonnes: [1],
          exp: "Aucun seuil : toute trace détectée au dépistage salivaire constitue un délit."
        },
        {
          q: "Sanctions encourues pour conduite après usage de stupéfiants :",
          choix: ["68 € d'amende forfaitaire", "jusqu'à 4 500 €, 6 points et suspension du permis", "135 € sans retrait de point"],
          bonnes: [1],
          exp: "C'est un délit : amende lourde, 6 points, suspension possible de 3 ans."
        },
        {
          q: "L'association alcool + cannabis multiplie le risque d'accident mortel par environ :",
          choix: ["29", "2", "5"],
          bonnes: [0],
          exp: "Les effets se potentialisent : le risque est multiplié par 29 selon la Sécurité routière."
        }
      ]
    },
    {
      id: "T2-R04",
      titre: "La fatigue",
      texte: "Une pause s'impose toutes les 2 heures. Signes : paupières lourdes, raideurs de nuque, regard qui se fige. Le seul remède à la somnolence est de s'arrêter et dormir 15 à 20 minutes. À moto, la fatigue arrive plus vite qu'en voiture : froid, bruit, vibrations et concentration permanente.",
      source: "securite-routiere.gouv.fr — Fatigue et conduite",
      questions: [
        {
          q: "La pause recommandée sur un long trajet, c'est :",
          choix: ["toutes les 2 heures", "toutes les 5 heures", "inutile à moto, l'air tient éveillé"],
          bonnes: [0],
          exp: "2 heures maximum entre deux pauses, et moins à moto si les conditions sont dures."
        },
        {
          q: "Quels sont des signes de fatigue au guidon ?",
          choix: ["paupières lourdes", "raideurs de nuque", "vigilance accrue"],
          bonnes: [0, 1],
          exp: "Paupières lourdes et nuque raide annoncent la somnolence : il faut s'arrêter."
        },
        {
          q: "Le seul remède efficace contre la somnolence :",
          choix: ["ouvrir sa visière", "boire un café et continuer", "s'arrêter et dormir 15 à 20 minutes"],
          bonnes: [2],
          exp: "Seul un court sommeil restaure la vigilance ; le reste ne fait que masquer les signes."
        },
        {
          q: "À moto, la fatigue survient :",
          choix: ["plus vite qu'en voiture (froid, bruit, vibrations, concentration)", "moins vite qu'en voiture"],
          bonnes: [0],
          exp: "L'exposition aux éléments et la concentration permanente épuisent plus rapidement."
        }
      ]
    },
    {
      id: "T2-R05",
      titre: "Médicaments et conduite",
      texte: "Les médicaments à risque portent un pictogramme : niveau 1 jaune (prudence), niveau 2 orange (avis d'un professionnel de santé requis), niveau 3 rouge (conduite interdite). Des médicaments vendus sans ordonnance peuvent en porter un.",
      source: "securite-routiere.gouv.fr — Médicaments et conduite",
      questions: [
        {
          q: "Le pictogramme de niveau 3 (rouge) sur une boîte de médicament signifie :",
          choix: ["prudence simple", "conduite interdite pendant le traitement", "aucun effet sur la conduite"],
          bonnes: [1],
          exp: "Niveau 3 : ne pas conduire pendant toute la durée du traitement."
        },
        {
          q: "Le pictogramme de niveau 2 (orange) impose :",
          choix: ["de demander l'avis d'un professionnel de santé avant de conduire", "rien de particulier", "d'arrêter définitivement la moto"],
          bonnes: [0],
          exp: "Niveau 2 : ne pas conduire sans l'avis d'un médecin ou pharmacien."
        },
        {
          q: "Un médicament acheté sans ordonnance peut porter un pictogramme de conduite.",
          choix: ["VRAI", "FAUX"],
          bonnes: [0],
          exp: "Antihistaminiques, sirops codéinés… l'automédication aussi peut altérer la conduite."
        }
      ]
    },
    {
      id: "T2-R06",
      titre: "Téléphone et dispositifs audio",
      texte: "Le téléphone tenu en main en conduisant : 135 € et 3 points. Le port à l'oreille de tout dispositif audio (écouteurs, oreillette, casque audio) est interdit en conduisant, même sanction. L'intercom intégré au casque moto reste autorisé.",
      source: "Code de la route — art. R412-6-1 et R412-6-2",
      questions: [
        {
          q: "Téléphone tenu en main en conduisant :",
          choix: ["68 € sans retrait", "interdit seulement en agglomération", "135 € et 3 points"],
          bonnes: [2],
          exp: "L'usage du téléphone en main coûte 135 € et 3 points, partout."
        },
        {
          q: "Porter des écouteurs ou une oreillette en conduisant une moto :",
          choix: ["interdit", "autorisé pour le GPS", "autorisé sous le casque"],
          bonnes: [0],
          exp: "Tout dispositif audio porté à l'oreille est interdit en conduisant, même sous le casque."
        },
        {
          q: "L'intercom Bluetooth intégré au casque (haut-parleurs dans la coque) :",
          choix: ["est autorisé", "est interdit comme les écouteurs"],
          bonnes: [0],
          exp: "Le dispositif intégré au casque n'est pas « porté à l'oreille » : il reste légal."
        },
        {
          q: "Sont interdits en conduisant :",
          choix: ["le téléphone tenu en main", "les écouteurs dans les oreilles", "l'intercom intégré au casque"],
          bonnes: [0, 1],
          exp: "Main et oreilles doivent rester libres ; seul l'équipement intégré au casque est admis."
        }
      ]
    },
    {
      id: "T2-R07",
      titre: "Le regard et les contrôles",
      texte: "À moto, la trajectoire suit le regard : il faut regarder loin, dans la direction voulue. Avant tout changement de direction ou de file : contrôle des rétroviseurs ET contrôle direct de l'angle mort par rotation de la tête.",
      source: "securite-routiere.gouv.fr — Conduite des deux-roues motorisés",
      questions: [
        {
          q: "À moto, la trajectoire suit avant tout :",
          choix: ["le regard", "le poids du passager", "la position des repose-pieds"],
          bonnes: [0],
          exp: "On va là où l'on regarde : le regard pilote la trajectoire."
        },
        {
          q: "Avant de changer de file, vous effectuez :",
          choix: ["un simple coup de clignotant", "rétroviseurs + contrôle direct de l'angle mort", "un contrôle des rétroviseurs uniquement"],
          bonnes: [1],
          exp: "Les rétros ne couvrent pas tout : la rotation de tête vers l'angle mort est indispensable."
        },
        {
          q: "Fixer l'obstacle que vous voulez éviter :",
          choix: ["aide à l'éviter", "augmente le risque de le percuter"],
          bonnes: [1],
          exp: "La moto va où va le regard : on regarde la solution, pas l'obstacle."
        }
      ]
    },
    {
      id: "T2-R08",
      titre: "Le temps de réaction",
      texte: "Le temps de réaction moyen est d'environ 1 seconde en bonne forme. Distance parcourue pendant ce temps : environ 3 fois le chiffre des dizaines de la vitesse, en mètres (50 km/h → 15 m). Alcool, fatigue et distracteurs l'allongent nettement.",
      source: "securite-routiere.gouv.fr — Vitesse et distance d'arrêt",
      questions: [
        {
          q: "Le temps de réaction moyen d'un conducteur en forme est d'environ :",
          choix: ["3 secondes", "1 seconde", "0,2 seconde"],
          bonnes: [1],
          exp: "Environ 1 seconde entre la perception du danger et le début du freinage."
        },
        {
          q: "À 50 km/h, la distance parcourue pendant le temps de réaction est d'environ :",
          choix: ["5 m", "50 m", "15 m"],
          bonnes: [2],
          exp: "3 × le chiffre des dizaines : 3 × 5 = 15 mètres parcourus avant même de freiner."
        },
        {
          q: "Allongent le temps de réaction :",
          choix: ["l'alcool", "la fatigue", "l'expérience de conduite"],
          bonnes: [0, 1],
          exp: "Alcool et fatigue ralentissent la perception et la décision ; l'expérience, elle, aide."
        }
      ]
    },
    {
      id: "T2-R09",
      titre: "La distance d'arrêt",
      texte: "Distance d'arrêt = distance de réaction + distance de freinage. Ordre de grandeur sur sol sec : le chiffre des dizaines de la vitesse multiplié par lui-même (50 km/h → 25 m ; 90 → 81 m ; 130 → 169 m). Sur sol mouillé, la distance de freinage augmente de moitié, voire double.",
      source: "securite-routiere.gouv.fr — Vitesse et distance d'arrêt",
      questions: [
        {
          q: "La distance d'arrêt est égale à :",
          choix: ["la distance de freinage seule", "distance de réaction + distance de freinage", "la distance de réaction seule"],
          bonnes: [1],
          exp: "On ajoute le trajet parcouru pendant la réaction à celui du freinage proprement dit."
        },
        {
          q: "Ordre de grandeur de la distance d'arrêt à 90 km/h sur sol sec :",
          choix: ["environ 81 m (9 × 9)", "environ 45 m", "environ 130 m"],
          bonnes: [0],
          exp: "L'astuce : le chiffre des dizaines au carré, soit 9 × 9 = 81 mètres."
        },
        {
          q: "Sur sol mouillé, la distance de freinage :",
          choix: ["diminue, l'eau lubrifie le freinage", "reste identique", "augmente de moitié, voire double"],
          bonnes: [2],
          exp: "L'adhérence chute sous la pluie : il faut anticiper beaucoup plus tôt."
        },
        {
          q: "À 130 km/h sur sol sec, la distance d'arrêt est d'environ :",
          choix: ["169 m", "90 m", "250 m"],
          bonnes: [0],
          exp: "13 × 13 = 169 mètres : presque deux terrains de football."
        }
      ]
    },
    {
      id: "T2-R10",
      titre: "Le freinage à moto",
      texte: "Le frein avant fournit la majorité de la puissance de freinage (environ 70 %). Le bon freinage combine toujours les deux freins, progressivement, moto redressée. Freiner fort en plein virage expose à la chute : on transfère le freinage avant l'entrée en courbe.",
      source: "securite-routiere.gouv.fr — Conduite des deux-roues motorisés",
      questions: [
        {
          q: "Le frein le plus puissant sur une moto est :",
          choix: ["le frein arrière", "le frein avant (environ 70 % de la puissance)", "les deux à égalité"],
          bonnes: [1],
          exp: "Le transfert de charge sur la roue avant rend le frein avant prépondérant."
        },
        {
          q: "Freiner fort en plein virage :",
          choix: ["expose à la chute : on freine avant le virage", "est sans danger avec l'ABS", "est la technique recommandée"],
          bonnes: [0],
          exp: "L'adhérence déjà consommée par l'angle ne suffit plus pour un freinage appuyé."
        },
        {
          q: "Le freinage efficace à moto :",
          choix: ["arrière seul, pour ne pas passer par-dessus le guidon", "avant seul, l'arrière ne sert à rien", "progressif, moto redressée, les deux freins combinés"],
          bonnes: [2],
          exp: "Deux freins, dosés progressivement, la moto la plus droite possible."
        },
        {
          q: "Pour un freinage d'urgence maîtrisé :",
          choix: ["utiliser les deux freins", "garder la moto la plus droite possible", "freiner uniquement de l'arrière"],
          bonnes: [0, 1],
          exp: "Freinage combiné et moto redressée : les deux clés d'un arrêt d'urgence sans chute."
        }
      ]
    },
    {
      id: "T2-R11",
      titre: "Placement sur la chaussée",
      texte: "Le motard se place pour voir et être vu : généralement sur le tiers gauche de sa voie, jamais durablement dans les angles morts des autres véhicules. Le placement s'adapte en permanence aux circonstances (croisement, obstacle, visibilité).",
      source: "securite-routiere.gouv.fr — Conduite des deux-roues motorisés",
      questions: [
        {
          q: "La position généralement recommandée à moto sur sa voie :",
          choix: ["collé au bord droit", "le tiers gauche de la voie, pour voir et être vu", "exactement au centre, sur les traces d'hydrocarbures"],
          bonnes: [1],
          exp: "Le tiers gauche place le motard dans le champ de vision des autres conducteurs."
        },
        {
          q: "Rouler durablement dans l'angle mort d'une voiture :",
          choix: ["est sans importance à moto", "est à éviter : accélérer ou se décaler pour en sortir", "est recommandé pour se protéger du vent"],
          bonnes: [1],
          exp: "Invisible pour l'automobiliste, le motard en angle mort subit tout changement de file."
        },
        {
          q: "Le placement sur la voie doit :",
          choix: ["rester fixe quoi qu'il arrive", "s'adapter en permanence aux circonstances"],
          bonnes: [1],
          exp: "Croisements, obstacles, visibilité : le bon placement change sans cesse."
        }
      ]
    },
    {
      id: "T2-R12",
      titre: "Trajectoire de sécurité en virage",
      texte: "La trajectoire de sécurité privilégie la visibilité : entrée large côté extérieur, regard porté vers le point de sortie, rapprochement de l'intérieur après le point de corde, puis réaccélération progressive en sortie. L'allure s'ajuste AVANT l'entrée en courbe.",
      source: "securite-routiere.gouv.fr — Conduite des deux-roues motorisés",
      questions: [
        {
          q: "La trajectoire de sécurité en virage consiste à :",
          choix: ["prendre la corde immédiatement", "entrer large (extérieur), corde tardive, sortie progressive", "freiner au point de corde"],
          bonnes: [1],
          exp: "L'entrée extérieure maximise la visibilité sur la sortie du virage."
        },
        {
          q: "Dans le virage, le regard se porte :",
          choix: ["sur la roue avant", "sur le bas-côté", "vers le point de sortie"],
          bonnes: [2],
          exp: "Regarder la sortie dirige naturellement la moto sur la bonne trajectoire."
        },
        {
          q: "La trajectoire de sécurité privilégie :",
          choix: ["la visibilité et la marge de sécurité", "la vitesse de passage maximale"],
          bonnes: [0],
          exp: "Ce n'est pas une trajectoire de circuit : elle vise à voir plus tôt et pouvoir réagir."
        }
      ]
    },
    {
      id: "T2-R13",
      titre: "État émotionnel",
      texte: "Colère, stress ou euphorie dégradent le jugement et multiplient les prises de risque. Après une émotion forte, mieux vaut différer le départ. L'agressivité au guidon est un facteur d'accident au même titre que l'alcool ou la fatigue.",
      source: "securite-routiere.gouv.fr — Les comportements au volant",
      questions: [
        {
          q: "Vous venez de vivre une violente dispute. Avant de prendre la moto :",
          choix: ["partir vite pour décompresser", "différer le départ le temps de retrouver son calme"],
          bonnes: [1],
          exp: "Sous le coup de l'émotion, le jugement est altéré : on attend avant de rouler."
        },
        {
          q: "Le stress et l'euphorie :",
          choix: ["améliorent les réflexes", "dégradent le jugement et la prise de décision"],
          bonnes: [1],
          exp: "Toute émotion forte, même positive, détourne l'attention et fausse l'évaluation du risque."
        },
        {
          q: "L'état émotionnel n'a pas d'influence sur la conduite.",
          choix: ["VRAI", "FAUX"],
          bonnes: [1],
          exp: "C'est un facteur d'accident reconnu, au même titre que la fatigue."
        }
      ]
    },
    {
      id: "T2-R14",
      titre: "Accidentalité des motards",
      texte: "Les deux-roues motorisés représentent environ 2 % du trafic mais environ 22 % des tués sur la route. Le risque d'être tué par kilomètre parcouru est environ 20 fois supérieur à celui d'un automobiliste. Le sur-risque est maximal les premiers mois de conduite et chez les 18-24 ans.",
      source: "ONISR / securite-routiere.gouv.fr — Bilan de l'accidentalité",
      questions: [
        {
          q: "Les 2RM représentent ~2 % du trafic et environ quelle part des tués sur la route ?",
          choix: ["5 %", "50 %", "22 %"],
          bonnes: [2],
          exp: "Près d'un quart des tués pour une part infime du trafic : la vulnérabilité du motard est majeure."
        },
        {
          q: "À distance parcourue égale, le risque d'être tué à moto par rapport à la voiture est environ :",
          choix: ["20 fois supérieur", "2 fois supérieur", "équivalent"],
          bonnes: [0],
          exp: "Environ 20 fois plus de risque mortel par kilomètre parcouru."
        },
        {
          q: "Le sur-risque d'accident est maximal :",
          choix: ["après 10 ans de pratique", "les premiers mois après l'obtention du permis", "uniquement l'hiver"],
          bonnes: [1],
          exp: "L'inexpérience des premiers mois concentre les accidents, surtout chez les 18-24 ans."
        }
      ]
    },
    {
      id: "T2-R15",
      titre: "Conduite de nuit",
      texte: "De nuit, la vision est réduite et la fatigue accrue, avec un creux de vigilance entre 2 h et 5 h. Pour éviter l'éblouissement, ne pas fixer les phares mais regarder le bord droit de la chaussée. S'assurer d'être vu : feux propres, équipement rétro-réfléchissant.",
      source: "securite-routiere.gouv.fr — Conduire de nuit",
      questions: [
        {
          q: "Pour limiter l'éblouissement face à un véhicule en feux de route :",
          choix: ["fixer les phares pour garder le cap", "regarder le bord droit de la chaussée", "fermer un œil"],
          bonnes: [1],
          exp: "Le bord droit sert de repère sans exposer la rétine à la source lumineuse."
        },
        {
          q: "La vigilance est physiologiquement au plus bas :",
          choix: ["entre 14 h et 16 h", "entre 2 h et 5 h du matin", "à midi"],
          bonnes: [1],
          exp: "Le creux circadien de la nuit (2 h - 5 h) multiplie le risque d'endormissement."
        },
        {
          q: "De nuit :",
          choix: ["la vision est réduite", "la fatigue s'installe plus vite", "on perçoit mieux les distances"],
          bonnes: [0, 1],
          exp: "Champ visuel restreint et fatigue accrue : on augmente les marges de sécurité."
        }
      ]
    }
  ]
});
