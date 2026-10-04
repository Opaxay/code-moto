// data/theme6.js — Thème 6 : Porter secours
CM.theme({
  id: 6,
  nom: "Porter secours",
  regles: [
    {
      id: "T6-R01",
      titre: "PAS : Protéger, Alerter, Secourir",
      texte: "Face à un accident, la conduite à tenir suit toujours le même ordre : Protéger, Alerter, Secourir (PAS). Protéger d'abord les lieux pour éviter le sur-accident, puis alerter les secours, puis porter secours aux victimes. Inverser l'ordre peut aggraver la situation, par exemple en secourant sans avoir sécurisé la zone.",
      source: "securite-routiere.gouv.fr — Que faire en cas d'accident ?",
      questions: [
        {
          q: "Vous arrivez le premier sur un accident. Dans quel ordre devez-vous agir ?",
          choix: ["Secourir, puis alerter, puis protéger", "Alerter, puis secourir, puis protéger", "Protéger, puis alerter, puis secourir", "Secourir, puis protéger, puis alerter"],
          bonnes: [2],
          exp: "L'ordre est toujours PAS : Protéger, Alerter, Secourir — on sécurise avant tout pour éviter le sur-accident."
        },
        {
          q: "La première chose à faire en arrivant sur un accident est de porter secours aux victimes.",
          choix: ["Vrai", "Faux"],
          bonnes: [1],
          exp: "Faux : la première action est de protéger les lieux, sinon on s'expose soi-même et les victimes à un sur-accident."
        },
        {
          q: "Que signifie le sigle PAS ?",
          choix: ["Prévenir, Attendre, Surveiller", "Protéger, Alerter, Secourir", "Protéger, Appeler, Signaler"],
          bonnes: [1],
          exp: "PAS = Protéger, Alerter, Secourir, dans cet ordre."
        }
      ]
    },
    {
      id: "T6-R02",
      titre: "Protéger les lieux de l'accident",
      texte: "Protéger consiste à garer son véhicule en sécurité, allumer ses feux de détresse, enfiler le gilet haute visibilité et baliser à distance suffisante (environ 150 à 200 m sur voie rapide). Il faut couper le contact des véhicules accidentés et interdire de fumer. Sur autoroute, les témoins doivent se placer derrière la glissière de sécurité.",
      source: "securite-routiere.gouv.fr — Que faire en cas d'accident ?",
      questions: [
        {
          q: "Sur autoroute, où devez-vous placer les témoins de l'accident ?",
          choix: ["Sur la bande d'arrêt d'urgence", "Derrière la glissière de sécurité", "Sur la voie de droite, pour arrêter le trafic"],
          bonnes: [1],
          exp: "Derrière la glissière : c'est le seul endroit qui protège du sur-accident."
        },
        {
          q: "Pour protéger les lieux d'un accident, vous devez :",
          choix: ["couper le contact des véhicules accidentés", "laisser les moteurs tourner pour les feux", "interdire de fumer autour des véhicules", "retirer immédiatement les victimes des véhicules"],
          bonnes: [0, 2],
          exp: "On coupe le contact et on interdit de fumer (risque d'incendie avec le carburant répandu). On ne déplace pas les victimes sauf danger immédiat."
        },
        {
          q: "À quelle distance environ faut-il baliser un accident sur voie rapide ?",
          choix: ["20 à 30 m", "50 m", "150 à 200 m"],
          bonnes: [2],
          exp: "150 à 200 m en amont, pour laisser aux véhicules arrivant vite le temps de ralentir."
        },
        {
          q: "Vous vous arrêtez pour protéger un accident. Quel équipement devez-vous enfiler avant tout ?",
          choix: ["Vos gants de moto", "Le gilet haute visibilité", "Votre casque"],
          bonnes: [1],
          exp: "Le gilet haute visibilité rend visible des autres usagers : on le met avant d'intervenir sur la chaussée."
        }
      ]
    },
    {
      id: "T6-R03",
      titre: "Alerter les secours",
      texte: "Les numéros d'urgence sont le 112 (numéro européen), le 15 (SAMU), le 17 (police/gendarmerie), le 18 (pompiers) et le 114 (SMS pour les personnes malentendantes). Sur autoroute, il faut privilégier la borne d'appel d'urgence, qui localise automatiquement l'appel. Le message doit préciser le lieu exact, le nombre et l'état des victimes et les risques particuliers ; on ne raccroche que sur consigne des secours.",
      source: "securite-routiere.gouv.fr — Que faire en cas d'accident ?",
      questions: [
        {
          q: "Quel est le numéro d'urgence européen ?",
          choix: ["15", "911", "112", "114"],
          bonnes: [2],
          exp: "Le 112 fonctionne dans toute l'Union européenne ; le 114 est réservé aux SMS des personnes malentendantes."
        },
        {
          q: "Sur autoroute, pour alerter les secours après un accident, il est préférable d'utiliser :",
          choix: ["votre téléphone portable", "la borne d'appel d'urgence", "les feux de détresse de votre moto"],
          bonnes: [1],
          exp: "La borne d'appel localise automatiquement l'appel et prévient directement les services de l'autoroute."
        },
        {
          q: "Lors de l'appel aux secours, vous devez :",
          choix: ["raccrocher rapidement pour libérer la ligne", "indiquer le lieu exact et le nombre de victimes", "attendre la consigne des secours pour raccrocher", "donner uniquement votre identité"],
          bonnes: [1, 2],
          exp: "Le message d'alerte doit être précis (lieu, victimes, risques) et on ne raccroche jamais avant d'y être invité."
        },
        {
          q: "Le 114 permet :",
          choix: ["d'alerter les secours par SMS pour les personnes malentendantes", "de joindre les renseignements autoroutiers", "d'appeler un dépanneur agréé"],
          bonnes: [0],
          exp: "Le 114 est le numéro d'urgence accessible par SMS, destiné notamment aux personnes sourdes ou malentendantes."
        }
      ]
    },
    {
      id: "T6-R04",
      titre: "Ne pas retirer le casque d'un motard blessé",
      texte: "On ne retire jamais le casque d'un motard accidenté : la manœuvre peut aggraver une lésion de la colonne vertébrale. La seule exception est une victime qui ne respire pas et dont le casque empêche la réanimation ; le retrait se fait alors de préférence à deux, en maintenant l'axe tête-cou.",
      source: "securite-routiere.gouv.fr — Que faire en cas d'accident ?",
      questions: [
        {
          q: "Un motard est au sol, inconscient mais il respire. Que faites-vous de son casque ?",
          choix: ["Vous le retirez délicatement pour l'aider à respirer", "Vous le laissez en place", "Vous ouvrez seulement la visière et le laissez en place"],
          bonnes: [1, 2],
          exp: "On ne retire pas le casque d'un blessé qui respire : risque d'aggraver une lésion cervicale. Ouvrir la visière pour faciliter la respiration est possible."
        },
        {
          q: "Dans quel cas peut-on retirer le casque d'un motard accidenté ?",
          choix: ["S'il se plaint de douleurs à la nuque", "S'il ne respire pas et que le casque empêche la réanimation", "Dès que les secours sont alertés"],
          bonnes: [1],
          exp: "Seule exception : victime en arrêt respiratoire quand le casque empêche la réanimation. Retrait à deux si possible, en maintenant l'axe tête-cou."
        },
        {
          q: "Le retrait du casque d'un motard blessé se fait de préférence :",
          choix: ["à deux, en maintenant l'axe tête-cou", "rapidement, par une seule personne", "en tournant la tête sur le côté"],
          bonnes: [0],
          exp: "À deux : l'un maintient la tête dans l'axe, l'autre retire le casque — uniquement si la réanimation l'exige."
        }
      ]
    },
    {
      id: "T6-R05",
      titre: "Victime inconsciente qui respire : PLS",
      texte: "Une victime inconsciente qui respire doit être placée en position latérale de sécurité (PLS) : sur le côté, la tête en arrière, la bouche vers le sol, pour éviter qu'elle ne s'étouffe avec sa langue ou ses vomissements. On desserre ce qui gêne la respiration et on surveille la victime en continu jusqu'aux secours.",
      source: "securite-routiere.gouv.fr — Que faire en cas d'accident ?",
      questions: [
        {
          q: "Une victime est inconsciente mais respire normalement. Vous devez :",
          choix: ["la mettre en position latérale de sécurité", "la laisser sur le dos, tête surélevée", "la redresser en position assise"],
          bonnes: [0],
          exp: "La PLS empêche l'étouffement (langue, vomissements) chez une victime inconsciente qui respire."
        },
        {
          q: "Pourquoi place-t-on une victime inconsciente en PLS ?",
          choix: ["Pour faciliter le massage cardiaque", "Pour éviter qu'elle ne s'étouffe", "Pour réduire la douleur des fractures"],
          bonnes: [1],
          exp: "Sur le côté, les voies respiratoires restent dégagées : la langue et les liquides ne peuvent pas obstruer la gorge."
        },
        {
          q: "Après avoir mis une victime en PLS, vous devez :",
          choix: ["la laisser pour chercher d'autres victimes sans surveillance", "desserrer ce qui gêne sa respiration", "surveiller sa respiration jusqu'à l'arrivée des secours"],
          bonnes: [1, 2],
          exp: "On desserre col et ceinture et on surveille en continu : l'état d'une victime peut se dégrader à tout moment."
        }
      ]
    },
    {
      id: "T6-R06",
      titre: "Victime qui ne respire pas : réanimation",
      texte: "Si la victime ne respire pas, il faut alerter puis pratiquer le massage cardiaque : 100 à 120 compressions par minute au centre du thorax, sans interruption. Un défibrillateur automatisé externe (DAE) doit être utilisé dès qu'il est disponible : toute personne, même non formée, est autorisée à s'en servir.",
      source: "securite-routiere.gouv.fr — Que faire en cas d'accident ?",
      questions: [
        {
          q: "Quel est le rythme du massage cardiaque chez l'adulte ?",
          choix: ["40 à 60 compressions par minute", "100 à 120 compressions par minute", "160 à 180 compressions par minute"],
          bonnes: [1],
          exp: "100 à 120 compressions par minute, au centre du thorax, en appuyant fort et sans interruption."
        },
        {
          q: "Seules les personnes formées ont le droit d'utiliser un défibrillateur (DAE).",
          choix: ["Vrai", "Faux"],
          bonnes: [1],
          exp: "Faux : toute personne peut utiliser un DAE. L'appareil guide l'utilisateur par instructions vocales."
        },
        {
          q: "Une victime ne respire plus. Après avoir alerté, vous devez :",
          choix: ["la mettre en PLS", "commencer immédiatement le massage cardiaque", "attendre les secours sans la toucher"],
          bonnes: [1],
          exp: "Sans respiration, chaque minute compte : massage cardiaque immédiat et défibrillateur dès que possible."
        }
      ]
    },
    {
      id: "T6-R07",
      titre: "Hémorragie : compression directe",
      texte: "Face à une hémorragie visible, il faut appuyer fort et en continu sur la plaie avec la main protégée (gant, sac plastique) ou un tissu propre, allonger la victime et alerter les secours. La compression ne doit pas être relâchée avant l'arrivée des secours.",
      source: "securite-routiere.gouv.fr — Que faire en cas d'accident ?",
      questions: [
        {
          q: "Une victime saigne abondamment de la jambe. Que faites-vous en priorité ?",
          choix: ["Vous désinfectez la plaie", "Vous comprimez la plaie fortement et en continu", "Vous lui donnez à boire pour compenser"],
          bonnes: [1],
          exp: "La compression directe et continue arrête l'hémorragie ; on ne donne jamais à boire à un blessé."
        },
        {
          q: "Pour comprimer une plaie qui saigne, vous pouvez utiliser :",
          choix: ["votre main protégée par un gant ou un plastique", "un tissu propre", "un garrot systématiquement"],
          bonnes: [0, 1],
          exp: "Main protégée ou tissu propre : la compression directe est le geste de base. Le garrot n'est pas le premier geste."
        },
        {
          q: "Pendant la compression d'une hémorragie, la victime doit être :",
          choix: ["assise", "debout, appuyée contre un support", "allongée"],
          bonnes: [2],
          exp: "Allonger la victime limite les effets de la perte de sang (malaise, chute)."
        }
      ]
    },
    {
      id: "T6-R08",
      titre: "Ne pas déplacer la victime",
      texte: "On ne déplace pas un blessé, on ne lui donne pas à boire, on ne retire ni son casque ni un vêtement collé à une brûlure. La seule exception est un danger immédiat (incendie, risque de sur-accident) : on pratique alors un dégagement d'urgence en tirant la victime dans l'axe du corps.",
      source: "securite-routiere.gouv.fr — Que faire en cas d'accident ?",
      questions: [
        {
          q: "Dans quel cas peut-on déplacer une victime d'accident ?",
          choix: ["Si elle le demande", "En cas de danger immédiat, comme un début d'incendie", "Pour la mettre plus confortablement sur le bas-côté"],
          bonnes: [1],
          exp: "Seul un danger immédiat justifie un dégagement d'urgence, en tirant la victime dans l'axe du corps."
        },
        {
          q: "Une victime consciente vous demande de l'eau. Vous :",
          choix: ["lui en donnez en petite quantité", "refusez de lui donner à boire", "lui donnez une boisson sucrée contre le choc"],
          bonnes: [1],
          exp: "On ne donne jamais à boire ni à manger à un blessé : cela peut compliquer une anesthésie en urgence."
        },
        {
          q: "Comment s'effectue un dégagement d'urgence ?",
          choix: ["En tirant la victime dans l'axe du corps", "En la portant par les bras et les jambes", "En la faisant rouler sur le côté"],
          bonnes: [0],
          exp: "Tirer dans l'axe tête-cou-tronc limite le risque d'aggraver une lésion de la colonne."
        }
      ]
    },
    {
      id: "T6-R09",
      titre: "Couvrir, rassurer, surveiller",
      texte: "En attendant les secours, il faut couvrir la victime (le blessé se refroidit vite, même en été), lui parler et la rassurer, et surveiller en permanence son état de conscience et sa respiration. Une victime qui parle doit être gardée éveillée et informée que les secours arrivent.",
      source: "securite-routiere.gouv.fr — Que faire en cas d'accident ?",
      questions: [
        {
          q: "En attendant les secours, vous devez :",
          choix: ["couvrir la victime", "lui parler et la rassurer", "la laisser se reposer sans la solliciter"],
          bonnes: [0, 1],
          exp: "Couvrir évite le refroidissement ; parler permet de rassurer et de surveiller l'état de conscience."
        },
        {
          q: "Pourquoi faut-il couvrir une victime d'accident, même en été ?",
          choix: ["Pour masquer ses blessures", "Parce qu'un blessé se refroidit rapidement", "Pour la protéger du soleil"],
          bonnes: [1],
          exp: "L'état de choc fait chuter la température corporelle : couvrir la victime limite ce refroidissement."
        },
        {
          q: "La surveillance d'une victime s'arrête :",
          choix: ["dès qu'elle reprend connaissance", "dès que l'alerte a été donnée", "à l'arrivée des secours"],
          bonnes: [2],
          exp: "On surveille conscience et respiration en continu jusqu'à la prise en charge par les secours."
        }
      ]
    },
    {
      id: "T6-R10",
      titre: "Obligation légale de porter assistance",
      texte: "Porter assistance à une personne en péril est une obligation légale : la non-assistance à personne en danger est un délit puni de jusqu'à 5 ans de prison et 75 000 € d'amende. Si d'autres témoins secourent déjà, il faut au minimum s'assurer que l'alerte a été donnée.",
      source: "legifrance.gouv.fr — Code pénal, art. 223-6",
      questions: [
        {
          q: "Ne pas s'arrêter pour porter assistance à une personne en danger est :",
          choix: ["une simple contravention", "un délit", "toléré si l'on est pressé"],
          bonnes: [1],
          exp: "La non-assistance à personne en danger est un délit : jusqu'à 5 ans de prison et 75 000 € d'amende."
        },
        {
          q: "Vous passez devant un accident déjà pris en charge par plusieurs témoins. Vous devez :",
          choix: ["vous arrêter obligatoirement pour aider", "vous assurer que l'alerte a été donnée", "continuer sans ralentir pour ne pas gêner"],
          bonnes: [1],
          exp: "Si les secours sont déjà organisés, l'essentiel est de vérifier que l'alerte a été donnée ; s'arrêter en masse peut créer un sur-accident."
        },
        {
          q: "Quelles peines encourt l'auteur d'une non-assistance à personne en danger ?",
          choix: ["135 € d'amende et 3 points", "Jusqu'à 5 ans de prison et 75 000 € d'amende", "Un simple avertissement"],
          bonnes: [1],
          exp: "C'est un délit pénal lourdement sanctionné : jusqu'à 5 ans d'emprisonnement et 75 000 € d'amende."
        }
      ]
    }
  ]
});
