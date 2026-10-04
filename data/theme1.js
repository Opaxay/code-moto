// data/theme1.js — Thème 1 : La circulation routière
CM.theme({
  id: 1,
  nom: "La circulation routière",
  regles: [
    {
      id: "T1-R01",
      titre: "Panneaux de danger",
      texte: "Les panneaux de danger sont triangulaires, à fond blanc bordé de rouge. Hors agglomération, ils sont implantés environ 150 m avant le danger ; en agglomération, environ 50 m avant. Ils imposent de ralentir et d'adapter sa conduite au danger annoncé.",
      source: "securite-routiere.gouv.fr — Signalisation routière",
      questions: [
        {
          q: "Un panneau triangulaire à fond blanc bordé de rouge annonce :",
          choix: ["une obligation", "un danger", "une interdiction", "une indication"],
          bonnes: [1],
          exp: "Le triangle bordé de rouge est la forme réservée aux panneaux de danger."
        },
        {
          q: "Hors agglomération, un panneau de danger est implanté environ à quelle distance du danger ?",
          choix: ["50 m", "300 m", "150 m"],
          bonnes: [2],
          exp: "Hors agglomération, le panneau est placé environ 150 m avant le danger, le temps d'adapter son allure."
        },
        {
          q: "En agglomération, un panneau de danger est implanté environ :",
          choix: ["à 50 m du danger", "à 150 m du danger", "à 500 m du danger"],
          bonnes: [0],
          exp: "En ville, les vitesses étant plus faibles, le panneau est implanté environ 50 m avant le danger."
        }
      ]
    },
    {
      id: "T1-R02",
      titre: "Panneaux d'interdiction",
      texte: "Les panneaux d'interdiction sont ronds, cerclés de rouge sur fond blanc. Sauf indication contraire, une interdiction s'applique jusqu'à la prochaine intersection, ou jusqu'au panneau de fin d'interdiction (panneau barré d'une bande oblique noire).",
      source: "securite-routiere.gouv.fr — Signalisation routière",
      questions: [
        {
          q: "Un panneau rond cerclé de rouge sur fond blanc indique :",
          choix: ["un danger", "une obligation", "une interdiction"],
          bonnes: [2],
          exp: "Le rond cerclé de rouge est la forme des panneaux d'interdiction."
        },
        {
          q: "Une interdiction signalée prend fin :",
          choix: ["à la prochaine intersection, sauf indication contraire", "au panneau de fin d'interdiction (barré de noir)", "après 150 mètres"],
          bonnes: [0, 1],
          exp: "L'interdiction vaut jusqu'à la prochaine intersection, ou jusqu'au panneau de fin qui la lève avant."
        },
        {
          q: "Un panneau gris barré d'une bande oblique noire signale :",
          choix: ["le début d'une interdiction", "la fin d'une interdiction", "un danger temporaire"],
          bonnes: [1],
          exp: "La bande oblique marque la fin de l'interdiction précédemment signalée."
        }
      ]
    },
    {
      id: "T1-R03",
      titre: "Panneaux d'obligation",
      texte: "Les panneaux d'obligation sont ronds, à fond bleu. Ils imposent un comportement : direction obligatoire, voie réservée à certains usagers, etc. La fin d'obligation est signalée par le même panneau barré de rouge.",
      source: "securite-routiere.gouv.fr — Signalisation routière",
      questions: [
        {
          q: "Un panneau rond à fond bleu signale :",
          choix: ["une indication facultative", "une obligation", "une interdiction"],
          bonnes: [1],
          exp: "Le rond bleu impose un comportement obligatoire."
        },
        {
          q: "Un panneau rond bleu avec une flèche directionnelle vous impose :",
          choix: ["de suivre la direction indiquée", "une direction simplement conseillée", "de céder le passage"],
          bonnes: [0],
          exp: "Rond bleu = obligation : vous devez suivre la direction indiquée."
        },
        {
          q: "La fin d'une obligation est signalée par :",
          choix: ["un panneau carré vert", "le même panneau rond bleu barré de rouge", "rien, elle ne prend jamais fin"],
          bonnes: [1],
          exp: "Le panneau d'obligation barré de rouge lève l'obligation."
        }
      ]
    },
    {
      id: "T1-R04",
      titre: "Le panneau STOP",
      texte: "Le panneau STOP impose un arrêt complet au niveau de la ligne, même si la voie semble entièrement libre. On ne redémarre qu'après s'être assuré de pouvoir s'engager sans couper la route à personne.",
      source: "Code de la route — art. R415-6 ; securite-routiere.gouv.fr",
      questions: [
        {
          q: "Au panneau STOP, vous devez :",
          choix: ["ralentir fortement si la voie est libre", "céder le passage sans obligation d'arrêt", "marquer un arrêt complet au niveau de la ligne"],
          bonnes: [2],
          exp: "Le STOP impose l'arrêt complet au niveau de la ligne, dans tous les cas."
        },
        {
          q: "Au STOP, la voie est parfaitement dégagée. Vous pouvez franchir la ligne sans vous arrêter complètement.",
          choix: ["VRAI", "FAUX"],
          bonnes: [1],
          exp: "Même voie libre, l'arrêt complet est obligatoire : le non-respect coûte 135 € et 4 points."
        },
        {
          q: "Où devez-vous marquer l'arrêt au panneau STOP ?",
          choix: ["5 mètres avant la ligne", "au niveau de la ligne d'effet", "au centre de l'intersection"],
          bonnes: [1],
          exp: "L'arrêt se marque au niveau de la ligne, position qui offre la meilleure visibilité sans empiéter sur l'intersection."
        }
      ]
    },
    {
      id: "T1-R05",
      titre: "Le cédez-le-passage",
      texte: "Le panneau cédez-le-passage (triangle pointe en bas) impose de laisser passer les véhicules circulant sur la route abordée, en s'arrêtant si nécessaire. Contrairement au STOP, l'arrêt complet n'est pas obligatoire si la voie est libre.",
      source: "Code de la route — art. R415-7 ; securite-routiere.gouv.fr",
      questions: [
        {
          q: "Le panneau « cédez le passage » impose :",
          choix: ["un arrêt complet systématique", "de laisser passer les véhicules sur la route abordée", "de s'arrêter si nécessaire"],
          bonnes: [1, 2],
          exp: "On cède le passage, en s'arrêtant seulement si la circulation l'exige."
        },
        {
          q: "À un cédez-le-passage, la voie est libre. Vous devez tout de même marquer un arrêt complet.",
          choix: ["VRAI", "FAUX"],
          bonnes: [1],
          exp: "C'est la différence avec le STOP : si la voie est libre, on peut passer sans s'arrêter."
        },
        {
          q: "Quelle est la différence entre le STOP et le cédez-le-passage ?",
          choix: ["le STOP impose l'arrêt complet même voie libre", "aucun des deux n'impose jamais l'arrêt", "le cédez-le-passage impose toujours l'arrêt complet"],
          bonnes: [0],
          exp: "STOP = arrêt obligatoire dans tous les cas ; cédez-le-passage = arrêt seulement si nécessaire."
        }
      ]
    },
    {
      id: "T1-R06",
      titre: "La priorité à droite",
      texte: "En l'absence de toute signalisation à une intersection, la priorité à droite s'applique : on cède le passage à tout véhicule venant de sa droite. Cette règle par défaut vaut aussi bien en agglomération que hors agglomération.",
      source: "Code de la route — art. R415-5",
      questions: [
        {
          q: "À une intersection sans aucune signalisation, vous devez :",
          choix: ["passer en premier, la moto est prioritaire", "céder le passage aux véhicules venant de votre droite", "céder le passage à gauche"],
          bonnes: [1],
          exp: "Sans signalisation, la priorité à droite s'applique."
        },
        {
          q: "La priorité à droite s'applique aussi en agglomération.",
          choix: ["VRAI", "FAUX"],
          bonnes: [0],
          exp: "C'est la règle par défaut partout, en ville comme à la campagne."
        },
        {
          q: "À une intersection non signalée, une voiture arrive à votre gauche et un cycliste à votre droite. Vous cédez le passage :",
          choix: ["à la voiture", "au cycliste venant de droite", "aux deux"],
          bonnes: [1],
          exp: "La priorité à droite vaut pour tous les véhicules, y compris les vélos ; la voiture à gauche doit vous céder le passage."
        }
      ]
    },
    {
      id: "T1-R07",
      titre: "Routes et priorités ponctuelles",
      texte: "Le panneau AB6 (losange jaune) indique une route à caractère prioritaire : il vaut jusqu'au panneau de fin AB7 (losange barré). Le panneau AB2 (triangle avec flèche épaisse croisée de traits) n'accorde la priorité qu'à la prochaine intersection.",
      source: "securite-routiere.gouv.fr — Signalisation routière",
      questions: [
        {
          q: "Le panneau en losange à centre jaune indique :",
          choix: ["une route à péage", "une priorité uniquement à la prochaine intersection", "que vous circulez sur une route prioritaire"],
          bonnes: [2],
          exp: "Le losange jaune (AB6) signale un axe prioritaire, valable jusqu'au panneau de fin."
        },
        {
          q: "Le caractère prioritaire signalé par le losange jaune vaut :",
          choix: ["jusqu'au losange barré de noir (fin de route prioritaire)", "uniquement à la prochaine intersection", "sur 1 km"],
          bonnes: [0],
          exp: "L'AB6 est permanent jusqu'à l'AB7, le même losange barré."
        },
        {
          q: "Un triangle montrant une large flèche verticale croisée de petits traits vous indique :",
          choix: ["que vous êtes prioritaire jusqu'à nouvel ordre", "que vous devez céder le passage", "que vous avez la priorité à la prochaine intersection uniquement"],
          bonnes: [2],
          exp: "L'AB2 n'accorde qu'une priorité ponctuelle, valable pour la seule intersection à venir."
        }
      ]
    },
    {
      id: "T1-R08",
      titre: "Les feux tricolores",
      texte: "Feu rouge : arrêt obligatoire (franchissement : 135 € et 4 points). Feu jaune fixe : arrêt, sauf si s'arrêter est dangereux (freinage impossible sans risque). Feu jaune clignotant : prudence, les règles de priorité s'appliquent.",
      source: "Code de la route — art. R412-30 et R412-31",
      questions: [
        {
          q: "Le feu jaune fixe impose :",
          choix: ["d'accélérer pour passer avant le rouge", "l'arrêt, sauf s'il est dangereux de s'arrêter", "les mêmes règles que le feu vert"],
          bonnes: [1],
          exp: "Le jaune fixe impose l'arrêt, sauf impossibilité de s'arrêter en sécurité."
        },
        {
          q: "Le feu jaune clignotant signifie :",
          choix: ["prudence : les règles de priorité s'appliquent", "arrêt obligatoire", "priorité absolue"],
          bonnes: [0],
          exp: "Le jaune clignotant autorise le passage avec prudence, selon les règles de priorité en place."
        },
        {
          q: "Franchir un feu rouge expose à :",
          choix: ["68 € et 1 point", "135 € et retrait de 4 points", "90 € sans retrait de point"],
          bonnes: [1],
          exp: "Le feu rouge grillé est une contravention de 4e classe avec retrait de 4 points."
        },
        {
          q: "Le feu passe au jaune alors que vous êtes très proche ; freiner fort serait risqué avec le véhicule qui vous suit de près. Vous :",
          choix: ["franchissez le feu jaune", "freinez en urgence quoi qu'il arrive", "faites demi-tour"],
          bonnes: [0],
          exp: "Le franchissement du jaune est admis quand l'arrêt ne peut se faire dans des conditions de sécurité suffisantes."
        }
      ]
    },
    {
      id: "T1-R09",
      titre: "L'agent de circulation",
      texte: "Les indications d'un agent de circulation priment sur les feux et sur les panneaux. L'ordre de priorité des prescriptions est : agent, puis feux, puis panneaux, puis marquages et règles générales.",
      source: "Code de la route — art. R411-28",
      questions: [
        {
          q: "Un agent de circulation vous fait signe de passer alors que le feu est rouge. Vous :",
          choix: ["attendez le feu vert", "passez en suivant les indications de l'agent", "vous arrêtez à hauteur de l'agent"],
          bonnes: [1],
          exp: "Les ordres de l'agent priment sur la signalisation lumineuse."
        },
        {
          q: "L'ordre de priorité des prescriptions est :",
          choix: ["feux, agent, panneaux", "panneaux, feux, agent", "agent, feux, panneaux, marquages"],
          bonnes: [2],
          exp: "L'agent prime sur tout, puis viennent les feux, les panneaux et enfin les marquages."
        },
        {
          q: "Les indications d'un agent priment sur tous les panneaux et les feux.",
          choix: ["VRAI", "FAUX"],
          bonnes: [0],
          exp: "L'agent de circulation est l'autorité la plus élevée sur la route."
        }
      ]
    },
    {
      id: "T1-R10",
      titre: "Vitesses maximales par conditions normales",
      texte: "Sauf indication contraire : 50 km/h en agglomération, 80 km/h hors agglomération sur route bidirectionnelle sans séparateur central (90 km/h possible sur décision locale), 110 km/h sur route à chaussées séparées, 130 km/h sur autoroute.",
      source: "securite-routiere.gouv.fr — Vitesses maximales autorisées",
      questions: [
        {
          q: "En agglomération, sauf indication contraire, la vitesse est limitée à :",
          choix: ["30 km/h", "50 km/h", "70 km/h"],
          bonnes: [1],
          exp: "La règle générale en agglomération est 50 km/h, sauf zone 30 ou autre signalisation."
        },
        {
          q: "Hors agglomération, sur une route bidirectionnelle sans séparateur central, la vitesse maximale est :",
          choix: ["80 km/h, relevable à 90 sur décision locale", "90 km/h partout", "100 km/h"],
          bonnes: [0],
          exp: "Depuis 2018, la règle est 80 km/h ; certains départements ont relevé des axes à 90."
        },
        {
          q: "Sur autoroute, par conditions normales, un conducteur confirmé ne dépasse pas :",
          choix: ["110 km/h", "150 km/h", "130 km/h"],
          bonnes: [2],
          exp: "La vitesse maximale sur autoroute est 130 km/h par conditions normales."
        },
        {
          q: "Quelles limitations sont exactes par conditions normales, pour un conducteur confirmé ?",
          choix: ["130 km/h sur autoroute", "110 km/h sur route à chaussées séparées", "90 km/h en agglomération", "60 km/h hors agglomération"],
          bonnes: [0, 1],
          exp: "Autoroute 130, chaussées séparées 110 ; l'agglomération est à 50."
        }
      ]
    },
    {
      id: "T1-R11",
      titre: "Vitesses par temps de pluie et visibilité réduite",
      texte: "Par temps de pluie : 110 km/h sur autoroute, 100 km/h sur route à chaussées séparées, 80 km/h hors agglomération. Si la visibilité est inférieure à 50 m (brouillard dense), la vitesse est limitée à 50 km/h sur l'ensemble du réseau.",
      source: "securite-routiere.gouv.fr — Vitesses maximales autorisées",
      questions: [
        {
          q: "Il pleut. Sur autoroute, vous ne dépassez pas :",
          choix: ["130 km/h", "110 km/h", "100 km/h"],
          bonnes: [1],
          exp: "La pluie abaisse la limite autoroutière de 130 à 110 km/h."
        },
        {
          q: "Sur une route limitée à 90 km/h par décision départementale, sous la pluie, vous roulez au maximum à :",
          choix: ["80 km/h", "90 km/h", "70 km/h"],
          bonnes: [0],
          exp: "La pluie ramène les sections à 90 vers 80 km/h."
        },
        {
          q: "La visibilité est inférieure à 50 m (brouillard dense). Vitesse maximale sur tout le réseau :",
          choix: ["80 km/h", "110 km/h", "50 km/h"],
          bonnes: [2],
          exp: "Visibilité < 50 m : 50 km/h maximum, autoroute comprise."
        },
        {
          q: "Sous la pluie, quelles limites s'appliquent ?",
          choix: ["110 km/h sur autoroute", "100 km/h sur route à chaussées séparées", "130 km/h sur autoroute", "40 km/h en agglomération"],
          bonnes: [0, 1],
          exp: "Pluie : 110 sur autoroute et 100 sur voie à chaussées séparées ; en ville la limite reste 50."
        }
      ]
    },
    {
      id: "T1-R12",
      titre: "Vitesses du jeune conducteur",
      texte: "Pendant toute la durée du permis probatoire, le jeune conducteur est limité à 110 km/h sur autoroute, 100 km/h sur route à chaussées séparées et 80 km/h hors agglomération — les mêmes valeurs que par temps de pluie.",
      source: "securite-routiere.gouv.fr — Le permis probatoire",
      questions: [
        {
          q: "Jeune conducteur en permis probatoire, sur autoroute par beau temps, vous roulez au maximum à :",
          choix: ["120 km/h", "110 km/h", "130 km/h"],
          bonnes: [1],
          exp: "Le probatoire est limité à 110 km/h sur autoroute, même par beau temps."
        },
        {
          q: "Les limitations de vitesse du jeune conducteur s'appliquent :",
          choix: ["pendant toute la durée du permis probatoire", "pendant 6 mois", "uniquement la première année"],
          bonnes: [0],
          exp: "Elles valent pendant toute la période probatoire (3 ans en général)."
        },
        {
          q: "Jeune conducteur : quelles limites vous concernent par beau temps ?",
          choix: ["130 km/h sur autoroute", "110 km/h sur autoroute", "100 km/h sur route à chaussées séparées"],
          bonnes: [1, 2],
          exp: "Le probatoire applique en permanence les vitesses « pluie » : 110/100/80."
        }
      ]
    },
    {
      id: "T1-R13",
      titre: "Règles propres à l'autoroute",
      texte: "Sur autoroute, en circulation fluide, il est interdit de circuler à moins de 80 km/h sur la voie la plus à gauche. La marche arrière, le demi-tour et l'arrêt hors urgence y sont interdits. En cas de sortie manquée, on continue jusqu'à la sortie suivante.",
      source: "Code de la route — art. R412-8, R421-6 et R421-7",
      questions: [
        {
          q: "Sur autoroute, en circulation fluide, la vitesse minimale sur la voie la plus à gauche est :",
          choix: ["60 km/h", "80 km/h", "aucune vitesse minimale"],
          bonnes: [1],
          exp: "La voie la plus à gauche impose au moins 80 km/h en circulation fluide."
        },
        {
          q: "Sur autoroute, sont interdits :",
          choix: ["la marche arrière", "le demi-tour", "le dépassement d'un poids lourd"],
          bonnes: [0, 1],
          exp: "Marche arrière et demi-tour sont strictement interdits sur autoroute ; dépasser un poids lourd est autorisé."
        },
        {
          q: "Vous manquez votre sortie d'autoroute. Vous :",
          choix: ["reculez prudemment sur la bande d'arrêt d'urgence", "faites demi-tour par le terre-plein", "continuez jusqu'à la sortie suivante"],
          bonnes: [2],
          exp: "Aucune manœuvre de retour n'est permise : on poursuit jusqu'à l'échangeur suivant."
        }
      ]
    },
    {
      id: "T1-R14",
      titre: "Le dépassement : règle générale",
      texte: "Un dépassement s'effectue par la gauche. Le dépassement par la droite n'est autorisé que pour doubler un véhicule signalant qu'il tourne à gauche, ou un tramway selon la configuration. En circulation dense en files parallèles, l'avancement plus rapide de la file de droite n'est pas un dépassement illicite.",
      source: "Code de la route — art. R414-4 à R414-6",
      questions: [
        {
          q: "En règle générale, un dépassement s'effectue :",
          choix: ["par la droite", "par la gauche", "indifféremment"],
          bonnes: [1],
          exp: "Le Code impose le dépassement par la gauche."
        },
        {
          q: "Vous pouvez dépasser par la droite :",
          choix: ["un véhicule qui signale qu'il tourne à gauche", "un véhicule trop lent", "jamais, en aucun cas"],
          bonnes: [0],
          exp: "C'est l'exception principale : le véhicule qui se porte à gauche pour tourner se dépasse par la droite."
        },
        {
          q: "En circulation dense, les files sont ininterrompues et celle de droite avance plus vite que la vôtre : c'est un dépassement par la droite interdit.",
          choix: ["VRAI", "FAUX"],
          bonnes: [1],
          exp: "En files parallèles denses, ce différentiel de vitesse n'est pas considéré comme un dépassement."
        }
      ]
    },
    {
      id: "T1-R15",
      titre: "Dépassements interdits",
      texte: "Le dépassement est interdit sur ligne continue, à l'approche d'une intersection où l'on n'est pas prioritaire, au sommet d'une côte, lorsque la visibilité est insuffisante et aux passages à niveau non protégés. Sanction : 135 € et 3 points.",
      source: "Code de la route — art. R414-4 et suivants",
      questions: [
        {
          q: "Le dépassement est interdit :",
          choix: ["sur ligne continue", "au sommet d'une côte sans visibilité", "sur ligne discontinue", "dès qu'il pleut"],
          bonnes: [0, 1],
          exp: "Ligne continue et absence de visibilité (sommet de côte) interdisent le dépassement."
        },
        {
          q: "Dépasser en franchissant une ligne continue expose à :",
          choix: ["35 € sans retrait de point", "un simple avertissement", "135 € et 3 points"],
          bonnes: [2],
          exp: "Dépassement dangereux ou franchissement de ligne continue : 135 € et retrait de 3 points."
        },
        {
          q: "À l'approche d'une intersection où vous n'avez pas la priorité, vous pouvez dépasser un véhicule.",
          choix: ["VRAI", "FAUX"],
          bonnes: [1],
          exp: "Le dépassement est interdit aux intersections où l'on n'est pas prioritaire."
        }
      ]
    },
    {
      id: "T1-R16",
      titre: "Les distances de sécurité",
      texte: "Il faut maintenir au moins 2 secondes d'écart avec le véhicule qui précède, à doubler par mauvais temps. Sanction du non-respect : 135 € et 3 points. À moto, une marge supplémentaire s'impose, le freinage étant plus délicat qu'en voiture.",
      source: "Code de la route — art. R412-12",
      questions: [
        {
          q: "La distance de sécurité minimale avec le véhicule qui précède correspond à :",
          choix: ["1 seconde", "2 secondes", "10 mètres quelle que soit la vitesse"],
          bonnes: [1],
          exp: "La règle des 2 secondes s'adapte automatiquement à la vitesse."
        },
        {
          q: "Le non-respect des distances de sécurité est sanctionné par :",
          choix: ["135 € et 3 points", "68 € sans retrait", "11 €"],
          bonnes: [0],
          exp: "C'est une contravention de 4e classe avec retrait de 3 points."
        },
        {
          q: "À moto, par rapport à cette règle des 2 secondes, il est conseillé :",
          choix: ["de la réduire, la moto freine plus court", "d'augmenter encore la marge", "de coller le véhicule pour rester visible"],
          bonnes: [1],
          exp: "Perte d'adhérence, chaussée dégradée : le motard a besoin de plus de marge, pas moins."
        },
        {
          q: "La distance de sécurité doit être augmentée :",
          choix: ["par temps de pluie", "de nuit ou par visibilité réduite", "jamais, 2 secondes suffisent toujours", "uniquement sur autoroute"],
          bonnes: [0, 1],
          exp: "Pluie, nuit, mauvaise visibilité : les 2 secondes deviennent un strict minimum à doubler."
        }
      ]
    },
    {
      id: "T1-R17",
      titre: "Croisements difficiles",
      texte: "Quand un obstacle encombre un côté de la chaussée, le conducteur dont le côté est encombré cède le passage. En montagne, sur route étroite, le véhicule descendant facilite le passage du véhicule montant, en s'arrêtant ou en reculant si nécessaire.",
      source: "Code de la route — art. R414-2 et R414-3",
      questions: [
        {
          q: "Un véhicule en stationnement encombre votre côté de chaussée. Qui cède le passage ?",
          choix: ["vous", "le conducteur venant en face", "le premier arrivé passe"],
          bonnes: [0],
          exp: "Celui dont le côté est encombré doit céder le passage au véhicule venant en face."
        },
        {
          q: "En montagne, sur une route étroite, qui facilite le croisement ?",
          choix: ["le véhicule montant", "le véhicule descendant", "le véhicule le plus rapide"],
          bonnes: [1],
          exp: "Le descendant s'arrête ou recule : la manœuvre est plus sûre dans son sens."
        },
        {
          q: "Si un véhicule doit reculer lors d'un croisement impossible en montagne, c'est en priorité le plus léger ou le plus manœuvrable.",
          choix: ["VRAI", "FAUX"],
          bonnes: [0],
          exp: "Le Code désigne le véhicule le plus manœuvrable (ou le plus léger) pour reculer."
        }
      ]
    },
    {
      id: "T1-R18",
      titre: "Arrêt et stationnement",
      texte: "L'arrêt est une immobilisation brève, conducteur à proximité et prêt à déplacer le véhicule ; au-delà, c'est du stationnement. Stationnement gênant : 35 €. Très gênant (trottoir, passage piéton, place handicapé, piste cyclable) : 135 €. Dangereux (visibilité masquée) : 135 € et 3 points.",
      source: "Code de la route — art. R417-9 à R417-11",
      questions: [
        {
          q: "Ce qui distingue l'arrêt du stationnement :",
          choix: ["à l'arrêt, le conducteur reste à proximité, prêt à déplacer le véhicule", "l'arrêt peut durer plusieurs heures", "il n'y a aucune différence juridique"],
          bonnes: [0],
          exp: "L'arrêt est bref et le conducteur reste aux commandes ou à proximité immédiate."
        },
        {
          q: "Stationner sa moto sur un trottoir en agglomération, c'est :",
          choix: ["toléré pour les deux-roues", "un stationnement très gênant : 135 €", "un stationnement gênant : 35 €"],
          bonnes: [1],
          exp: "Le trottoir appartient aux piétons : stationnement très gênant, 135 €, même pour une moto."
        },
        {
          q: "Sont considérés comme stationnement très gênant (135 €) :",
          choix: ["sur un trottoir", "sur un passage piéton", "sur un emplacement payant non réglé"],
          bonnes: [0, 1],
          exp: "Trottoirs et passages piétons relèvent du très gênant ; le défaut de paiement est une infraction distincte et moins sévère."
        },
        {
          q: "Le stationnement masquant la visibilité à l'approche d'un virage est :",
          choix: ["gênant : 35 €", "interdit uniquement la nuit", "dangereux : 135 € et 3 points"],
          bonnes: [2],
          exp: "Le stationnement dangereux est le seul qui entraîne un retrait de points."
        }
      ]
    },
    {
      id: "T1-R19",
      titre: "Stationnement unilatéral alterné",
      texte: "En stationnement unilatéral à alternance semi-mensuelle : du 1er au 15 du mois, on se gare du côté des numéros impairs ; du 16 au dernier jour, du côté des numéros pairs. Le changement de côté s'effectue le dernier jour de chaque période, entre 20 h 30 et 21 h.",
      source: "Code de la route — art. R417-2",
      questions: [
        {
          q: "Stationnement unilatéral alterné : du 1er au 15 du mois, on se gare :",
          choix: ["côté numéros pairs", "côté numéros impairs", "indifféremment"],
          bonnes: [1],
          exp: "Première quinzaine = côté impair."
        },
        {
          q: "Du 16 à la fin du mois, on stationne :",
          choix: ["du côté des numéros pairs", "du côté des numéros impairs"],
          bonnes: [0],
          exp: "Seconde quinzaine = côté pair."
        },
        {
          q: "Le changement de côté s'effectue :",
          choix: ["à minuit pile", "librement dans la journée", "le dernier jour de la période, entre 20 h 30 et 21 h"],
          bonnes: [2],
          exp: "Le Code fixe le basculement entre 20 h 30 et 21 h le dernier jour de chaque période."
        }
      ]
    },
    {
      id: "T1-R20",
      titre: "Intersections encombrées",
      texte: "Même avec un feu vert, il est interdit de s'engager dans une intersection si l'on risque d'y être immobilisé et d'empêcher le passage des véhicules circulant sur les autres voies.",
      source: "Code de la route — art. R415-2",
      questions: [
        {
          q: "Le feu est vert mais le carrefour est saturé de véhicules à l'arrêt. Vous :",
          choix: ["ne vous engagez pas tant que vous risquez d'être bloqué au milieu", "passez : le feu est vert", "klaxonnez pour dégager le carrefour"],
          bonnes: [0],
          exp: "On ne s'engage que si l'on est sûr de pouvoir dégager l'intersection."
        },
        {
          q: "Le feu vert donne un droit absolu de s'engager dans l'intersection.",
          choix: ["VRAI", "FAUX"],
          bonnes: [1],
          exp: "Le feu vert autorise le passage seulement si l'intersection peut être dégagée."
        },
        {
          q: "S'immobiliser au milieu d'une intersection et bloquer les flux transversaux est :",
          choix: ["autorisé si le feu était vert à l'engagement", "une infraction", "recommandé pour avancer plus vite"],
          bonnes: [1],
          exp: "Bloquer une intersection est une infraction, quel que soit l'état du feu au moment de l'engagement."
        }
      ]
    },
    {
      id: "T1-R21",
      titre: "Carrefours à sens giratoire",
      texte: "Un carrefour à sens giratoire comporte un cédez-le-passage à l'entrée : la priorité appartient aux véhicules déjà engagés dans l'anneau. On sort en signalant avec le clignotant droit. Sans panneau à l'entrée (rond-point simple), la priorité à droite s'applique : ce sont les entrants qui ont la priorité.",
      source: "securite-routiere.gouv.fr — Les intersections et giratoires",
      questions: [
        {
          q: "À l'entrée d'un carrefour à sens giratoire (cédez-le-passage à l'entrée), la priorité appartient :",
          choix: ["aux véhicules qui entrent", "aux véhicules déjà engagés dans l'anneau", "aux véhicules les plus rapides"],
          bonnes: [1],
          exp: "Le cédez-le-passage à l'entrée donne la priorité à l'anneau."
        },
        {
          q: "Pour quitter le giratoire, vous actionnez :",
          choix: ["le clignotant droit", "le clignotant gauche", "aucun clignotant"],
          bonnes: [0],
          exp: "On signale sa sortie au clignotant droit, avant la sortie choisie."
        },
        {
          q: "Pour prendre la troisième sortie (direction à gauche), vous vous placez de préférence :",
          choix: ["toujours sur la voie extérieure de l'anneau", "au centre, à cheval sur les deux voies", "sur la voie intérieure de l'anneau, puis vous vous rabattez avant votre sortie"],
          bonnes: [2],
          exp: "Pour une sortie à gauche, on emprunte la voie intérieure puis on se rabat en signalant."
        },
        {
          q: "Sur un rond-point SANS panneau cédez-le-passage à l'entrée, la priorité appartient :",
          choix: ["aux véhicules qui entrent (priorité à droite)", "aux véhicules dans l'anneau"],
          bonnes: [0],
          exp: "Sans signalisation, la priorité à droite s'applique : les entrants passent — cas devenu rare mais piège classique."
        }
      ]
    },
    {
      id: "T1-R22",
      titre: "L'usage des clignotants",
      texte: "Le clignotant est obligatoire avant tout changement de direction ou de file, tout dépassement et toute insertion. À moto, beaucoup de modèles n'ont pas de rappel automatique : il faut penser à l'éteindre, un clignotant oublié induit les autres usagers en erreur.",
      source: "Code de la route — art. R412-10",
      questions: [
        {
          q: "Le clignotant est obligatoire :",
          choix: ["avant tout changement de direction ou de file", "seulement si d'autres usagers sont présents", "uniquement aux intersections"],
          bonnes: [0],
          exp: "Tout changement de direction, de file, dépassement ou insertion doit être signalé."
        },
        {
          q: "Spécificité des clignotants à moto :",
          choix: ["ils s'éteignent toujours automatiquement", "beaucoup de motos n'ont pas de rappel automatique : penser à les éteindre", "ils sont facultatifs pour les deux-roues"],
          bonnes: [1],
          exp: "Sans rappel automatique, le motard doit couper lui-même son clignotant après la manœuvre."
        },
        {
          q: "Vous venez de tourner et votre clignotant est resté allumé. Quel est le risque ?",
          choix: ["user prématurément l'ampoule", "aucun risque particulier", "induire les autres en erreur : un véhicule peut s'engager devant vous"],
          bonnes: [2],
          exp: "Un automobiliste peut croire que vous tournez et vous couper la route."
        }
      ]
    },
    {
      id: "T1-R23",
      titre: "La circulation inter-files",
      texte: "La circulation inter-files est encadrée à titre expérimental dans certains départements : uniquement entre les deux voies les plus à gauche d'une route à chaussées séparées d'au moins 2×2 voies (vitesse autorisée d'au moins 70 km/h), quand le trafic est dense, à l'arrêt ou ralenti, à 50 km/h maximum. Interdite sur chaussée en travaux ou enneigée ; on réintègre sa file dès que le trafic redevient fluide.",
      source: "securite-routiere.gouv.fr — La circulation inter-files",
      questions: [
        {
          q: "Là où elle est autorisée, la circulation inter-files se pratique :",
          choix: ["entre n'importe quelles voies", "sur la bande d'arrêt d'urgence", "entre les deux voies les plus à gauche"],
          bonnes: [2],
          exp: "Seul l'espace entre les deux voies les plus à gauche est autorisé."
        },
        {
          q: "Vitesse maximale en inter-files :",
          choix: ["50 km/h", "30 km/h", "80 km/h"],
          bonnes: [0],
          exp: "50 km/h maximum, avec un différentiel raisonnable par rapport aux files."
        },
        {
          q: "La circulation inter-files est interdite :",
          choix: ["quand la circulation est fluide", "sur chaussée en travaux ou enneigée", "sur route à 2×2 voies à chaussées séparées"],
          bonnes: [0, 1],
          exp: "Elle ne se justifie qu'en trafic dense ou arrêté, et jamais sur chaussée dégradée ou enneigée."
        },
        {
          q: "L'inter-files n'est possible que sur une route à chaussées séparées d'au moins :",
          choix: ["2×2 voies", "2×1 voie", "3×3 voies"],
          bonnes: [0],
          exp: "Il faut au minimum deux voies dans le sens de circulation, séparées du sens inverse."
        }
      ]
    },
    {
      id: "T1-R24",
      titre: "Voies réservées",
      texte: "Certaines voies sont réservées à des catégories d'usagers : bus, taxis, covoiturage (signalées par un losange blanc lumineux ou marqué au sol). Les motos n'y ont pas accès, sauf signalisation l'autorisant expressément. Circuler indûment sur une voie réservée : 135 €.",
      source: "Code de la route — art. R412-7 ; securite-routiere.gouv.fr",
      questions: [
        {
          q: "Une voie signalée par un losange blanc est réservée :",
          choix: ["aux motos", "au covoiturage et aux catégories indiquées par la signalisation", "aux véhicules électriques uniquement"],
          bonnes: [1],
          exp: "Le losange signale une voie réservée (covoiturage, bus, taxis selon les panneaux)."
        },
        {
          q: "Les motos peuvent emprunter les voies de bus :",
          choix: ["oui, toujours", "non, sauf signalisation l'autorisant expressément", "oui, aux heures creuses"],
          bonnes: [1],
          exp: "Sans autorisation explicite, la voie de bus est interdite aux motos."
        },
        {
          q: "Circuler sans y avoir droit sur une voie réservée expose à :",
          choix: ["135 €", "35 €", "aucune sanction"],
          bonnes: [0],
          exp: "C'est une contravention de 4e classe : 135 €."
        }
      ]
    },
    {
      id: "T1-R25",
      titre: "Passages à niveau et tunnels",
      texte: "On ne s'engage sur un passage à niveau que si l'on est certain de pouvoir le franchir sans s'y immobiliser. En tunnel : feux de croisement allumés et respect de l'interdistance signalée, souvent matérialisée par deux feux bleus (environ 150 m).",
      source: "Code de la route — art. R422-3 ; securite-routiere.gouv.fr — Conduite en tunnel",
      questions: [
        {
          q: "Vous ne vous engagez sur un passage à niveau que si :",
          choix: ["le feu rouge clignote", "vous êtes certain de pouvoir le franchir sans vous immobiliser", "un train vient de passer"],
          bonnes: [1],
          exp: "Rester immobilisé sur un passage à niveau est mortel : on ne s'engage que voie dégagée."
        },
        {
          q: "En tunnel, vous circulez :",
          choix: ["feux de croisement allumés", "feux de route allumés", "sans feux si le tunnel est éclairé"],
          bonnes: [0],
          exp: "Les feux de croisement sont obligatoires en tunnel, même éclairé."
        },
        {
          q: "En tunnel, il faut :",
          choix: ["respecter l'interdistance signalée (souvent 2 feux bleus, ~150 m)", "garder ses feux de croisement allumés", "activer les feux de détresse en permanence"],
          bonnes: [0, 1],
          exp: "Feux de croisement et interdistance accrue sont les deux règles de base du tunnel."
        }
      ]
    }
  ]
});
