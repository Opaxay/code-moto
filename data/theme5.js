// data/theme5.js — Thème 5 : Réglementation générale et divers
CM.theme({
  id: 5,
  nom: "Réglementation générale et divers",
  regles: [
    {
      id: "T5-R01",
      titre: "Catégories A1 et A2",
      texte: "Le permis A1 s'obtient dès 16 ans et autorise les motos jusqu'à 125 cm³ et 11 kW (rapport puissance/poids ≤ 0,1 kW/kg). Le permis A2 s'obtient dès 18 ans et autorise les motos jusqu'à 35 kW (rapport ≤ 0,2 kW/kg) ; le bridage d'un modèle plus puissant n'est possible que si sa version d'origine ne dépasse pas 70 kW.",
      source: "service-public.fr — Permis moto A1/A2",
      questions: [
        {
          q: "La puissance maximale autorisée avec un permis A2 est de :",
          choix: ["25 kW", "35 kW", "47 kW"],
          bonnes: [1],
          exp: "Le permis A2 limite la puissance à 35 kW, avec un rapport puissance/poids maximal de 0,2 kW/kg."
        },
        {
          q: "Le permis A1 s'obtient à partir de :",
          choix: ["14 ans", "16 ans", "18 ans"],
          bonnes: [1],
          exp: "Dès 16 ans, le permis A1 autorise les motos de 125 cm³ maximum et 11 kW."
        },
        {
          q: "En A2, une moto bridée à 35 kW est autorisée seulement si sa version d'origine ne dépasse pas :",
          choix: ["50 kW", "70 kW", "95 kW"],
          bonnes: [1],
          exp: "Le bridage n'est admis que depuis un modèle développant au plus 70 kW d'origine."
        },
        {
          q: "Le rapport puissance/poids maximal d'une moto A2 est de :",
          choix: ["0,1 kW/kg", "0,2 kW/kg", "0,5 kW/kg"],
          bonnes: [1],
          exp: "35 kW maximum ET 0,2 kW/kg maximum : les deux conditions doivent être respectées."
        }
      ]
    },
    {
      id: "T5-R02",
      titre: "Passerelle A2 vers A",
      texte: "Le permis A s'obtient après 2 ans de permis A2 et une formation passerelle de 7 heures en moto-école, sans nouvel examen. L'âge minimal est donc d'environ 20 ans.",
      source: "service-public.fr — Permis A",
      questions: [
        {
          q: "Pour passer du permis A2 au permis A, il faut :",
          choix: ["repasser l'examen plateau et circulation", "2 ans de permis A2 et une formation de 7 heures", "simplement une demande en préfecture"],
          bonnes: [1],
          exp: "La passerelle A2 vers A repose sur 2 ans d'expérience et 7 h de formation, sans examen."
        },
        {
          q: "La formation passerelle A2 vers A se conclut par un examen.",
          choix: ["vrai", "faux"],
          bonnes: [1],
          exp: "C'est une formation obligatoire de 7 h, mais il n'y a aucune épreuve à valider."
        },
        {
          q: "L'âge minimal pour obtenir le permis A par la passerelle est d'environ :",
          choix: ["18 ans", "20 ans", "24 ans"],
          bonnes: [1],
          exp: "A2 dès 18 ans + 2 ans d'ancienneté = 20 ans minimum pour accéder au permis A."
        }
      ]
    },
    {
      id: "T5-R03",
      titre: "Permis B et 125 cm³",
      texte: "Un titulaire du permis B peut conduire une 125 (L3e, 11 kW maximum) à deux conditions : avoir le permis B depuis au moins 2 ans et avoir suivi une formation de 7 heures (sauf antériorité d'assurance d'un deux-roues entre 2006 et 2010).",
      source: "service-public.fr — Conduire une 125 avec le permis B",
      questions: [
        {
          q: "Pour conduire une 125 avec un permis B, il faut :",
          choix: ["avoir le permis B depuis 2 ans et suivre une formation de 7 heures", "uniquement avoir plus de 21 ans", "passer l'examen du permis A1"],
          bonnes: [0],
          exp: "Deux ans de permis B et la formation de 7 h sont exigés ; aucun examen supplémentaire."
        },
        {
          q: "La puissance maximale d'une 125 conduite avec un permis B est de :",
          choix: ["11 kW", "15 kW", "35 kW"],
          bonnes: [0],
          exp: "Comme pour le permis A1 : 125 cm³ et 11 kW maximum."
        },
        {
          q: "Le permis B seul, dès son obtention, suffit pour conduire une 125.",
          choix: ["vrai", "faux"],
          bonnes: [1],
          exp: "Il faut 2 ans d'ancienneté de permis ET la formation de 7 heures."
        }
      ]
    },
    {
      id: "T5-R04",
      titre: "L'ETM : l'examen théorique moto",
      texte: "Depuis le 1er mars 2020, l'ETM est obligatoire pour les permis A1 et A2, même si l'on détient déjà le code voiture. L'examen comporte 40 questions (30 images fixes et 10 vidéos), avec 20 secondes par question ; il faut 35 bonnes réponses sur 40. Le bénéfice est valable 5 ans et permet 5 présentations aux épreuves pratiques.",
      source: "securite-routiere.gouv.fr — Passer le permis A1 ou A2",
      questions: [
        {
          q: "Pour réussir l'ETM, il faut au minimum :",
          choix: ["30 bonnes réponses sur 40", "35 bonnes réponses sur 40", "38 bonnes réponses sur 40"],
          bonnes: [1],
          exp: "Le seuil de réussite est fixé à 35/40, soit 5 erreurs maximum."
        },
        {
          q: "Le bénéfice de l'ETM est valable :",
          choix: ["5 ans et 5 présentations aux épreuves pratiques", "3 ans sans limite de présentations", "à vie"],
          bonnes: [0],
          exp: "Comme le code voiture : 5 ans de validité et 5 présentations aux épreuves pratiques."
        },
        {
          q: "Titulaire du code voiture récent, vous êtes dispensé de l'ETM pour le permis A2.",
          choix: ["vrai", "faux"],
          bonnes: [1],
          exp: "Depuis mars 2020, l'ETM est spécifique et obligatoire pour les catégories A1 et A2, code voiture ou pas."
        },
        {
          q: "À l'ETM, vous disposez pour répondre à chaque question de :",
          choix: ["20 secondes", "45 secondes", "d'un temps illimité"],
          bonnes: [0],
          exp: "Chaque question laisse 20 secondes de réponse, sur tablette individuelle avec casque audio."
        }
      ]
    },
    {
      id: "T5-R05",
      titre: "Les épreuves pratiques moto",
      texte: "Après l'ETM viennent deux épreuves pratiques : l'épreuve hors circulation (le « plateau » : maîtrise à allure lente et rapide, avec et sans passager) puis l'épreuve en circulation d'environ 40 minutes. La réussite du plateau est nécessaire pour se présenter à la circulation.",
      source: "securite-routiere.gouv.fr — Passer le permis A1 ou A2",
      questions: [
        {
          q: "L'épreuve dite du « plateau » se déroule :",
          choix: ["hors circulation", "en circulation", "sur simulateur"],
          bonnes: [0],
          exp: "Le plateau est l'épreuve hors circulation : maîtrise de la moto à allure lente et plus rapide."
        },
        {
          q: "L'épreuve en circulation du permis moto dure environ :",
          choix: ["15 minutes", "40 minutes", "2 heures"],
          bonnes: [1],
          exp: "Le candidat est suivi par l'examinateur et guidé par radio pendant environ 40 minutes."
        },
        {
          q: "On peut passer l'épreuve en circulation avant d'avoir réussi le plateau.",
          choix: ["vrai", "faux"],
          bonnes: [1],
          exp: "L'ordre est imposé : hors circulation d'abord, circulation ensuite."
        }
      ]
    },
    {
      id: "T5-R06",
      titre: "Le permis probatoire",
      texte: "Un nouveau conducteur démarre avec un capital de 6 points. Sans infraction, il gagne 2 points par an pour atteindre 12 points au bout de 3 ans (ou 2 ans en suivant la formation complémentaire post-permis entre le 6e et le 12e mois). Les limitations de vitesse réduites du jeune conducteur s'appliquent pendant 3 ans ; le disque « A » n'est pas exigé à moto, mais les règles du probatoire s'appliquent intégralement.",
      source: "service-public.fr — Permis probatoire",
      questions: [
        {
          q: "Le capital de points initial d'un permis probatoire est de :",
          choix: ["6 points", "8 points", "12 points"],
          bonnes: [0],
          exp: "Le probatoire démarre à 6 points et monte progressivement vers 12."
        },
        {
          q: "Sans infraction, le capital de 12 points est atteint au bout de :",
          choix: ["1 an", "3 ans", "5 ans"],
          bonnes: [1],
          exp: "+2 points par année sans infraction : 6, 8, 10 puis 12 points à 3 ans."
        },
        {
          q: "La formation complémentaire post-permis permet de :",
          choix: ["réduire la période probatoire à 2 ans", "gagner immédiatement 12 points", "supprimer les limitations de vitesse jeune conducteur"],
          bonnes: [0],
          exp: "Suivie entre le 6e et le 12e mois, elle ramène la période probatoire de 3 à 2 ans."
        },
        {
          q: "Pendant la période probatoire, les limitations de vitesse applicables sont :",
          choix: ["110 sur autoroute, 100 sur voie rapide, 80 hors agglomération", "les mêmes que pour tous les conducteurs", "130 sur autoroute uniquement par beau temps"],
          bonnes: [0],
          exp: "Le jeune conducteur applique en permanence les vitesses « temps de pluie », pendant 3 ans."
        }
      ]
    },
    {
      id: "T5-R07",
      titre: "Le système de points",
      texte: "Le capital maximal est de 12 points. Une infraction à 1 point est restituée après 6 mois sans nouvelle infraction ; la totalité du capital se reconstitue après 2 ou 3 ans sans infraction selon la gravité. Un stage de sensibilisation volontaire permet de récupérer 4 points, une fois par an au maximum. Un solde nul entraîne l'invalidation du permis.",
      source: "service-public.fr — Points du permis de conduire",
      questions: [
        {
          q: "Un stage volontaire de sensibilisation permet de récupérer :",
          choix: ["2 points", "4 points", "6 points"],
          bonnes: [1],
          exp: "Le stage restitue jusqu'à 4 points, dans la limite du plafond et une fois par an."
        },
        {
          q: "Après une infraction ayant retiré 1 seul point, celui-ci est restitué :",
          choix: ["après 6 mois sans nouvelle infraction", "après 5 ans", "jamais"],
          bonnes: [0],
          exp: "Les infractions à 1 point s'effacent en 6 mois sans récidive."
        },
        {
          q: "Quand le solde de points atteint zéro :",
          choix: ["le permis est invalidé", "une simple amende est due", "le permis est suspendu 1 mois"],
          bonnes: [0],
          exp: "Solde nul = invalidation : interdiction de conduire et obligation de repasser le permis."
        }
      ]
    },
    {
      id: "T5-R08",
      titre: "L'assurance",
      texte: "La responsabilité civile est obligatoire pour tout deux-roues motorisé, même à l'arrêt dans un garage. Depuis le 1er avril 2024, la carte verte et la vignette ont disparu : le contrôle se fait via le Fichier des Véhicules Assurés (FVA). Conduire sans assurance est un délit puni de 3 750 € d'amende.",
      source: "service-public.fr — Assurance d'un deux-roues",
      questions: [
        {
          q: "Une moto qui ne roule jamais, stockée dans un garage privé, doit être assurée.",
          choix: ["vrai", "faux"],
          bonnes: [0],
          exp: "Tout véhicule terrestre à moteur doit être couvert en responsabilité civile, même immobile."
        },
        {
          q: "Le défaut d'assurance est :",
          choix: ["une contravention de 135 €", "un délit puni de 3 750 € d'amende", "une simple mise en garde au premier contrôle"],
          bonnes: [1],
          exp: "Conduire sans assurance est un délit : amende lourde, et peines complémentaires possibles."
        },
        {
          q: "Depuis le 1er avril 2024, la preuve d'assurance repose sur :",
          choix: ["la carte verte collée sur la moto", "le Fichier des Véhicules Assurés, consulté par les forces de l'ordre", "une attestation papier à présenter sous 5 jours"],
          bonnes: [1],
          exp: "Carte verte et vignette ont été supprimées : le FVA fait foi lors des contrôles."
        }
      ]
    },
    {
      id: "T5-R09",
      titre: "Documents à présenter",
      texte: "En cas de contrôle, le conducteur présente son permis de conduire et le certificat d'immatriculation (carte grise). Le certificat provisoire d'immatriculation (CPI) permet de circuler pendant 1 mois en attendant la carte définitive.",
      source: "service-public.fr — Contrôle routier",
      questions: [
        {
          q: "Lors d'un contrôle, vous devez pouvoir présenter :",
          choix: ["le permis de conduire", "le certificat d'immatriculation", "la facture d'achat de la moto"],
          bonnes: [0, 1],
          exp: "Permis et carte grise sont exigibles ; l'assurance est vérifiée via le FVA."
        },
        {
          q: "Le certificat provisoire d'immatriculation (CPI) permet de circuler pendant :",
          choix: ["15 jours", "1 mois", "6 mois"],
          bonnes: [1],
          exp: "Le CPI couvre la circulation en France pendant 1 mois, le temps de recevoir la carte grise."
        },
        {
          q: "Une attestation d'assurance papier est obligatoire à bord.",
          choix: ["vrai", "faux"],
          bonnes: [1],
          exp: "Depuis avril 2024, plus de document d'assurance à présenter : le FVA est consulté directement."
        }
      ]
    },
    {
      id: "T5-R10",
      titre: "La plaque d'immatriculation",
      texte: "La plaque moto a un format réglementaire unique de 210 × 130 mm. Elle doit être fixée de manière inamovible, parfaitement lisible et conforme. Une plaque non conforme, réduite ou illisible est sanctionnée de 135 €.",
      source: "service-public.fr — Plaque d'immatriculation",
      questions: [
        {
          q: "Le format réglementaire de la plaque moto est :",
          choix: ["210 × 130 mm", "275 × 200 mm", "au choix du propriétaire"],
          bonnes: [0],
          exp: "Un seul format est autorisé pour les motos : 210 × 130 mm."
        },
        {
          q: "Rouler avec une plaque réduite dite « plaque déco » est :",
          choix: ["toléré hors agglomération", "interdit et sanctionné de 135 €", "autorisé si la moto est ancienne"],
          bonnes: [1],
          exp: "Toute plaque non conforme au format réglementaire expose à une amende de 4e classe."
        },
        {
          q: "Une plaque illisible (boue, support plié) peut être sanctionnée.",
          choix: ["vrai", "faux"],
          bonnes: [0],
          exp: "La plaque doit rester lisible en toutes circonstances : son entretien incombe au conducteur."
        }
      ]
    },
    {
      id: "T5-R11",
      titre: "Carte grise : délais à respecter",
      texte: "Après l'achat d'un véhicule d'occasion, la carte grise doit être mise au nom du nouveau propriétaire sous 1 mois. Le vendeur déclare la cession sous 15 jours. Un changement d'adresse doit être déclaré sous 1 mois.",
      source: "service-public.fr — Certificat d'immatriculation",
      questions: [
        {
          q: "Après l'achat d'une moto d'occasion, vous devez refaire la carte grise sous :",
          choix: ["15 jours", "1 mois", "3 mois"],
          bonnes: [1],
          exp: "Le nouveau propriétaire dispose d'1 mois pour immatriculer le véhicule à son nom."
        },
        {
          q: "Le vendeur d'un véhicule déclare la cession sous :",
          choix: ["15 jours", "1 mois", "48 heures"],
          bonnes: [0],
          exp: "La déclaration de cession doit être faite dans les 15 jours suivant la vente."
        },
        {
          q: "Vous déménagez. Le changement d'adresse sur la carte grise doit être déclaré sous :",
          choix: ["1 semaine", "1 mois", "1 an"],
          bonnes: [1],
          exp: "Comme pour l'immatriculation après achat : 1 mois pour déclarer la nouvelle adresse."
        }
      ]
    },
    {
      id: "T5-R12",
      titre: "Contrôle technique des deux-roues",
      texte: "Le contrôle technique des deux-roues motorisés est obligatoire depuis le 15 avril 2024, selon un calendrier fondé sur l'année d'immatriculation, puis renouvelable tous les 3 ans. Pour vendre un deux-roues d'occasion à un particulier, le contrôle technique doit dater de moins de 6 mois.",
      source: "service-public.fr — Contrôle technique des 2-3 roues",
      questions: [
        {
          q: "Le contrôle technique moto est obligatoire en France depuis :",
          choix: ["le 15 avril 2024", "le 1er janvier 2020", "il n'est pas obligatoire"],
          bonnes: [0],
          exp: "Le CT 2RM est entré en vigueur le 15 avril 2024, avec un calendrier progressif selon l'âge du véhicule."
        },
        {
          q: "Une fois le premier contrôle technique passé, il se renouvelle tous les :",
          choix: ["2 ans", "3 ans", "5 ans"],
          bonnes: [1],
          exp: "La périodicité du contrôle technique des deux-roues est de 3 ans."
        },
        {
          q: "Pour vendre votre moto d'occasion à un particulier, le contrôle technique doit dater de moins de :",
          choix: ["6 mois", "1 an", "aucun contrôle exigé"],
          bonnes: [0],
          exp: "Comme pour une voiture : CT de moins de 6 mois au moment de la vente."
        }
      ]
    },
    {
      id: "T5-R13",
      titre: "Les classes d'amendes",
      texte: "Les amendes forfaitaires vont de 11 € (1re classe) à 35 € (2e), 68 € (3e) et 135 € (4e classe). Un paiement rapide minore certaines amendes (135 € devient 90 €), un paiement tardif les majore.",
      source: "service-public.fr — Amendes forfaitaires",
      questions: [
        {
          q: "Le montant de l'amende forfaitaire de 4e classe est de :",
          choix: ["68 €", "135 €", "375 €"],
          bonnes: [1],
          exp: "La 4e classe correspond à 135 € : feu rouge, téléphone, vitesse, etc."
        },
        {
          q: "Payée rapidement, une amende de 135 € est minorée à :",
          choix: ["90 €", "45 €", "aucune minoration possible"],
          bonnes: [0],
          exp: "Le paiement dans les délais courts ramène l'amende forfaitaire de 135 € à 90 €."
        },
        {
          q: "L'amende forfaitaire de 3e classe s'élève à :",
          choix: ["35 €", "68 €", "135 €"],
          bonnes: [1],
          exp: "3e classe = 68 €, comme le défaut de gants certifiés à moto."
        }
      ]
    },
    {
      id: "T5-R14",
      titre: "Excès de vitesse : le barème",
      texte: "Excès de moins de 20 km/h : 1 point (68 €, ou 135 € en agglomération). De 20 à 29 km/h : 2 points. De 30 à 39 km/h : 3 points. De 40 à 49 km/h : 4 points et suspension possible. 50 km/h ou plus : 6 points, suspension, et délit en cas de récidive avec confiscation possible du véhicule.",
      source: "service-public.fr — Excès de vitesse",
      questions: [
        {
          q: "Un excès de vitesse de moins de 20 km/h entraîne le retrait de :",
          choix: ["1 point", "2 points", "aucun point"],
          bonnes: [0],
          exp: "Même un petit excès coûte 1 point, et 135 € en agglomération."
        },
        {
          q: "Un excès de 50 km/h ou plus entraîne :",
          choix: ["le retrait de 6 points", "une suspension possible du permis", "un simple avertissement au premier excès"],
          bonnes: [0, 1],
          exp: "Grand excès : 6 points, suspension possible, et délit avec confiscation en récidive."
        },
        {
          q: "Un excès de vitesse de 35 km/h au-dessus de la limite coûte :",
          choix: ["2 points", "3 points", "4 points"],
          bonnes: [1],
          exp: "La tranche 30-39 km/h entraîne un retrait de 3 points."
        },
        {
          q: "Pour un excès compris entre 40 et 49 km/h, le conducteur risque :",
          choix: ["4 points et une suspension possible", "1 point seulement", "la confiscation immédiate sans autre sanction"],
          bonnes: [0],
          exp: "La tranche 40-49 km/h : 4 points, amende de 4e classe et suspension possible jusqu'à 3 ans."
        }
      ]
    },
    {
      id: "T5-R15",
      titre: "Rétention, suspension, annulation, invalidation",
      texte: "La rétention est le retrait immédiat du permis par les forces de l'ordre, pour une durée maximale de 72 heures. La suspension (administrative ou judiciaire) est une interdiction temporaire de conduire. L'annulation est prononcée par un juge. L'invalidation résulte d'un solde de points nul : il faut repasser le permis (code, et conduite si le permis a moins de 3 ans).",
      source: "service-public.fr — Sanctions du permis de conduire",
      questions: [
        {
          q: "La rétention du permis par les forces de l'ordre dure au maximum :",
          choix: ["24 heures", "72 heures", "1 mois"],
          bonnes: [1],
          exp: "La rétention est une mesure immédiate limitée à 72 heures, le temps d'une décision administrative."
        },
        {
          q: "L'invalidation du permis résulte :",
          choix: ["d'un solde de points nul", "d'une décision du maire", "d'un simple excès de vitesse"],
          bonnes: [0],
          exp: "Quand le capital tombe à zéro, le permis est invalidé : il faut le repasser."
        },
        {
          q: "L'annulation du permis est prononcée par :",
          choix: ["un juge", "l'assureur", "l'école de conduite"],
          bonnes: [0],
          exp: "L'annulation est une sanction judiciaire, à la différence de la suspension administrative du préfet."
        }
      ]
    },
    {
      id: "T5-R16",
      titre: "Débridage : interdit",
      texte: "Débrider une moto est interdit : le véhicule ne correspond plus à sa catégorie. Un titulaire du permis A2 qui conduit une moto débridée conduit un véhicule que son permis ne couvre pas, et son assurance peut refuser la prise en charge en cas d'accident.",
      source: "securite-routiere.gouv.fr — Réglementation moto",
      questions: [
        {
          q: "Titulaire du A2, vous conduisez une moto dont le bridage a été retiré. Vous êtes en situation de :",
          choix: ["simple contravention de stationnement", "conduite d'un véhicule non couvert par votre permis", "parfaite légalité si la carte grise mentionne le bridage"],
          bonnes: [1],
          exp: "Sans bridage effectif, la moto excède les limites du permis A2 : c'est assimilable à une conduite sans permis valable."
        },
        {
          q: "En cas d'accident avec une moto débridée, l'assurance :",
          choix: ["indemnise normalement", "peut refuser la prise en charge", "double la franchise au maximum"],
          bonnes: [1],
          exp: "Le véhicule n'étant plus conforme à la déclaration, l'assureur peut opposer une déchéance de garantie."
        },
        {
          q: "Débrider sa moto est autorisé si on ne dépasse jamais les limitations de vitesse.",
          choix: ["vrai", "faux"],
          bonnes: [1],
          exp: "Le débridage est interdit en soi, indépendamment de l'usage qui en est fait."
        }
      ]
    },
    {
      id: "T5-R17",
      titre: "Transporter un passager",
      texte: "Le transport d'un passager exige une selle biplace et des repose-pieds. Le passager doit porter un casque attaché et des gants certifiés, et pouvoir poser les pieds sur les repose-pieds. Un enfant de moins de 5 ans doit être installé dans un siège adapté.",
      source: "service-public.fr — Transport de passager à moto",
      questions: [
        {
          q: "Pour transporter un passager, la moto doit être équipée :",
          choix: ["d'une selle biplace", "de repose-pieds passager", "d'un top-case"],
          bonnes: [0, 1],
          exp: "Selle biplace et repose-pieds sont les équipements obligatoires du transport de passager."
        },
        {
          q: "Un enfant de moins de 5 ans transporté à moto doit :",
          choix: ["être simplement tenu par un adulte", "être installé dans un siège adapté", "ne jamais monter sur une moto, quelle que soit l'installation"],
          bonnes: [1],
          exp: "Le transport d'un enfant de moins de 5 ans impose un siège spécialement conçu pour lui."
        },
        {
          q: "Votre passager peut rouler en baskets et sans gants si le trajet est court.",
          choix: ["vrai", "faux"],
          bonnes: [1],
          exp: "Casque attaché et gants certifiés sont obligatoires pour le passager, quel que soit le trajet."
        }
      ]
    },
    {
      id: "T5-R18",
      titre: "Conformité des équipements du véhicule",
      texte: "Tous les équipements homologués d'origine (échappement, plaques, rétroviseurs, avertisseur) doivent rester conformes. Un échappement non homologué ou modifié expose à une amende et à une immobilisation possible du véhicule.",
      source: "securite-routiere.gouv.fr — Réglementation moto",
      questions: [
        {
          q: "Monter un échappement non homologué pour la route expose à :",
          choix: ["une amende et une immobilisation possible", "rien si le bruit reste raisonnable", "une simple remarque au contrôle technique"],
          bonnes: [0],
          exp: "L'échappement doit être homologué : à défaut, amende et immobilisation possible du véhicule."
        },
        {
          q: "Un échappement portant seulement un marquage CE générique suffit pour rouler légalement.",
          choix: ["vrai", "faux"],
          bonnes: [1],
          exp: "C'est l'homologation routière (marquage d'homologation) qui compte, pas un simple marquage CE."
        },
        {
          q: "Quels équipements doivent rester conformes à l'homologation d'origine ?",
          choix: ["l'échappement", "les rétroviseurs et l'avertisseur sonore", "les autocollants de décoration"],
          bonnes: [0, 1],
          exp: "Tout équipement réglementé (échappement, rétroviseurs, avertisseur, éclairage, plaque) doit rester conforme."
        }
      ]
    }
  ]
});
