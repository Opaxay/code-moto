# SPEC — Banque de questions Code Moto (ETM)

Projet : micro-appli de révision de l'Épreuve Théorique Moto (ETM), l'examen officiel requis pour les permis A1/A2 depuis le 1er mars 2020.

## Faits officiels (securite-routiere.gouv.fr)
- 40 questions par examen : 30 images fixes + 10 vidéos, tirées d'une banque d'environ 500 questions.
- 20 secondes pour répondre à chaque question. Durée totale ~30 min, sur tablette individuelle.
- Réussite : 35 bonnes réponses sur 40. Résultat valable 5 ans, 5 présentations aux épreuves pratiques.
- 9 thématiques officielles (listées ci-dessous).

## Format des fichiers de données
Un fichier par thème : `data/theme<N>.js`. JavaScript pur, AUCUNE dépendance. Chaque fichier appelle `CM.theme({...})` (le registre `CM` est défini par index.html avant le chargement). Chaînes JS **entre guillemets doubles** (apostrophes françaises libres à l'intérieur ; échapper les guillemets doubles internes avec \"). Écrire les fichiers via heredoc Bash quoté (`cat >> fichier <<'EOF'`).

```js
// data/theme8.js — Thème 8 : Équipement du motard
CM.theme({
  id: 8,
  nom: "Équipement du motard et sécurité du véhicule",
  regles: [
    {
      id: "T8-R01",
      titre: "Gants certifiés obligatoires",
      texte: "Depuis le 20 novembre 2016, le port de gants certifiés CE est obligatoire pour le conducteur ET le passager d'un deux-roues motorisé. En cas d'infraction : amende forfaitaire de 68 € et retrait d'un point pour le conducteur. Les gants limitent l'abrasion et les fractures des mains, touchées dans la majorité des chutes.",
      source: "securite-routiere.gouv.fr — Équipements obligatoires à moto",
      questions: [
        {
          q: "Le port de gants certifiés est obligatoire :",
          choix: ["pour le conducteur uniquement", "pour le conducteur et le passager", "uniquement hors agglomération", "uniquement par temps de pluie"],
          bonnes: [1],
          exp: "Depuis 2016, conducteur ET passager doivent porter des gants certifiés CE, partout et par tout temps."
        },
        { q: "...", choix: ["...", "..."], bonnes: [0], exp: "..." },
        { q: "...", choix: ["...", "...", "...", "..."], bonnes: [0, 2], exp: "..." }
      ]
    }
  ]
});
```

## Règles de rédaction des questions
- **3 questions minimum par règle, 4 si la règle est riche.** Varier les angles : (a) connaissance directe, (b) mise en situation (« Vous roulez sous la pluie à 80 km/h... »), (c) piège classique ou vrai/faux de l'examen réel.
- 2 à 4 choix par question. 1 ou 2 bonnes réponses (`bonnes` = indices, jamais tous les choix). Mélanger la position de la bonne réponse (pas toujours l'indice 0 !). Environ 15-20 % de questions à 2 bonnes réponses.
- Style ETM réel : énoncé court et net, pas d'ambiguïté, vocabulaire du Code de la route. `exp` : 1-2 phrases qui justifient la réponse.
- `texte` de la règle (mode révision) : 2-5 phrases précises et chiffrées — c'est la fiche de cours.
- `source` : citer la source réelle la plus pertinente (securite-routiere.gouv.fr, service-public.fr, Code de la route art. R.xxx si connu avec certitude, legifrance.gouv.fr). Ne jamais inventer un numéro d'article : en cas de doute, citer juste le site.
- Exactitude avant tout : si un chiffre de sanction est incertain, rester générique (« contravention », « amende forfaitaire ») plutôt que d'inventer.

## Les 9 thématiques et leurs règles (couverture OBLIGATOIRE, ids dans l'ordre)

### Thème 1 — « Dispositions légales en matière de circulation routière » (~25 règles)
T1-R01 Panneaux de danger : triangle, implantés ~150 m avant le danger hors agglo, ~50 m en agglo.
T1-R02 Panneaux d'interdiction (rond cerclé rouge) et fin d'interdiction (barre oblique) ; interdictions valant jusqu'à la prochaine intersection sauf indication.
T1-R03 Panneaux d'obligation (rond bleu) ; fin d'obligation.
T1-R04 Stop : arrêt complet obligatoire au niveau de la ligne, même si la voie semble libre ; redémarrer seulement si la voie est dégagée.
T1-R05 Cédez-le-passage (AB3a) : ralentir, s'arrêter si nécessaire, sans obligation d'arrêt complet si la voie est libre.
T1-R06 Priorité à droite : règle par défaut en l'absence de signalisation, y compris en agglomération.
T1-R07 Axes prioritaires : panneau AB6 (route prioritaire, valable jusqu'au AB7 fin de route prioritaire) vs AB2 (priorité ponctuelle à la prochaine intersection).
T1-R08 Feux tricolores : rouge = arrêt ; jaune fixe = arrêt sauf impossibilité de s'arrêter sans danger ; jaune clignotant = prudence, les règles de priorité s'appliquent. Franchissement de feu rouge : 135 € + 4 points.
T1-R09 Agent de circulation : ses indications priment sur les feux ET les panneaux.
T1-R10 Vitesses maximales (conditions normales) : 50 en agglomération, 80 hors agglo sur route bidirectionnelle sans séparateur (90 possible sur décision locale), 110 sur route à chaussées séparées, 130 sur autoroute.
T1-R11 Vitesses par temps de pluie : 110 sur autoroute, 100 sur voie rapide, 80 hors agglo. Visibilité < 50 m (brouillard) : 50 km/h partout.
T1-R12 Jeune conducteur (permis probatoire) : 110 au lieu de 130, 100 au lieu de 110, 80 au lieu de 90 — mêmes limites que par temps de pluie.
T1-R13 Autoroute : vitesse minimale de 80 km/h sur la voie la plus à gauche en circulation fluide ; marche arrière, demi-tour et arrêt interdits.
T1-R14 Dépassement : par la gauche en règle générale ; par la droite uniquement si le véhicule devant tourne à gauche, ou tramway (selon configuration).
T1-R15 Dépassements interdits : ligne continue, intersection sans priorité, sommet de côte, visibilité insuffisante, passage à niveau non protégé ; sanction 135 € + 3 points.
T1-R16 Distance de sécurité : au moins 2 secondes avec le véhicule qui précède (doubler par mauvais temps) ; sanction 135 € + 3 points. À moto, marge supplémentaire car freinage plus délicat.
T1-R17 Croisement difficile / rétrécissement : celui dont le côté est encombré cède ; en montagne, le descendant facilite le passage au montant.
T1-R18 Arrêt vs stationnement : arrêt = conducteur à proximité, immobilisation brève ; stationnement gênant (35 €), très gênant (135 € — trottoir, passage piéton, place handicapé, piste cyclable), dangereux (135 € + 3 points).
T1-R19 Stationnement unilatéral alterné : du 1 au 15 côté impair, du 16 au 31 côté pair.
T1-R20 Intersection encombrée : ne pas s'engager si l'on risque d'être immobilisé et de bloquer le carrefour.
T1-R21 Carrefour à sens giratoire (panneau cédez-le-passage à l'entrée) : priorité à l'anneau ; clignotant droit pour sortir ; se placer selon sa sortie.
T1-R22 Clignotants : obligatoires avant tout changement de direction ou de file, dépassement, insertion — à moto, penser à les ÉTEINDRE (pas de rappel automatique sur beaucoup de modèles).
T1-R23 Circulation inter-files : encadrée/expérimentale — uniquement entre les 2 voies les plus à gauche d'une route à chaussées séparées à 2×2 voies minimum (vitesse autorisée ≥ 70), circulation dense à l'arrêt ou ralentie, max 50 km/h, interdite si chaussée en travaux ou enneigée ; replonger dans la file dès que le trafic redevient fluide.
T1-R24 Voies réservées : bus, taxis, covoiturage (losange blanc) — interdites aux motos sauf signalisation contraire.
T1-R25 Passage à niveau et tunnels : ne jamais s'engager sur un passage à niveau si l'on risque d'y être immobilisé ; en tunnel, feux de croisement, respecter l'interdistance signalée (souvent 2 feux bleus / 150 m).

### Thème 2 — « Le conducteur » (~15 règles)
T2-R01 Alcool : limite 0,5 g/L de sang (0,25 mg/L d'air expiré) ; permis probatoire : 0,2 g/L (≈ zéro verre). De 0,5 à 0,8 : 135 € + 6 points ; ≥ 0,8 g/L : délit (jusqu'à 4 500 €, retrait 6 points, suspension). À moto, l'alcool dégrade l'équilibre — sur-risque mortel majeur.
T2-R02 Effets de l'alcool : champ visuel rétréci, temps de réaction allongé, euphorie/surconfiance, équilibre dégradé ; élimination ~0,10-0,15 g/L par heure, rien ne l'accélère (ni café ni douche).
T2-R03 Stupéfiants : tolérance zéro, dépistage salivaire ; délit : jusqu'à 4 500 €, 6 points, suspension 3 ans ; cannabis multiplie le risque d'accident mortel (×2), alcool+cannabis ×29.
T2-R04 Fatigue : pause toutes les 2 heures ; signes = paupières lourdes, raideurs de nuque, regard qui se fige ; seul remède = s'arrêter et dormir (15-20 min). À moto, la fatigue arrive plus vite (froid, bruit, vibrations, concentration).
T2-R05 Médicaments : pictogrammes — niveau 1 jaune (prudence), niveau 2 orange (avis médical), niveau 3 rouge (conduite interdite).
T2-R06 Téléphone et oreillettes : téléphone tenu en main interdit (135 € + 3 points) ; port de tout dispositif audio à l'oreille (écouteurs, oreillette, casque audio) interdit en conduisant — l'intercom intégré au casque moto reste autorisé.
T2-R07 Le regard : regarder loin dans la direction voulue — la moto va où va le regard ; contrôles réguliers des rétroviseurs et contrôle direct (angle mort) par rotation de la tête avant tout changement de direction.
T2-R08 Temps de réaction : ~1 seconde en bonne forme ; distance parcourue pendant ce temps ≈ 3 × la dizaine de la vitesse en mètres (50 km/h → 15 m). Allongé par alcool, fatigue, distracteurs.
T2-R09 Distance d'arrêt = distance de réaction + distance de freinage ; ordre de grandeur sur sol sec ≈ dizaine de la vitesse multipliée par elle-même (50 km/h → 25 m ; 90 → 81 m ; 130 → 169 m) ; sur sol mouillé, distance de freinage ×1,5 à 2.
T2-R10 Freinage moto : frein avant = majorité de la puissance (~70 %), toujours combiner les deux freins, freiner progressivement moto redressée ; freiner fort en virage = risque de chute (transférer le freinage avant le virage).
T2-R11 Position de conduite et placement : se placer visible dans la voie (généralement tiers gauche sur la voie de droite), jamais dans les angles morts ; adapter le placement aux circonstances.
T2-R12 Trajectoire de sécurité en virage : entrer large (extérieur), regarder le point de sortie, se rapprocher de l'intérieur après le point de corde, ré-accélérer progressivement en sortie — priorité à la visibilité, pas à la vitesse.
T2-R13 État émotionnel : colère, stress, euphorie dégradent le jugement — différer le départ si émotion forte ; l'agressivité au guidon multiplie les prises de risque.
T2-R14 Accidentalité des motards : les 2RM représentent ~2 % du trafic mais ~22 % des tués ; risque d'être tué par km parcouru ~20 fois supérieur à la voiture ; sur-risque maximal les premiers mois et chez les 18-24 ans.
T2-R15 Conduite de nuit : vision réduite, éblouissement (ne pas fixer les phares, regarder le bord droit), fatigue accrue entre 2 h et 5 h ; s'assurer d'être vu (feux propres, équipement rétro-réfléchissant).

### Thème 3 — « La route » (~15 règles)
T3-R01 Adhérence réduite : pluie (surtout les premières minutes qui remontent les hydrocarbures), gasoil (traces irisées), gravillons, feuilles mortes, boue — à moto, perte d'adhérence = chute.
T3-R02 Surfaces glissantes par temps humide : marquages au sol (passages piétons, bandes), plaques d'égout, pavés, rails de tram — les franchir moto droite, sans freiner ni accélérer.
T3-R03 Rails et saignées : traverser les rails de tram ou les raccords longitudinaux avec l'angle le plus proche de la perpendiculaire possible.
T3-R04 Aquaplaning : pellicule d'eau entre pneu et chaussée ; favorisé par vitesse élevée, pneus usés/sous-gonflés, eau stagnante ; réaction = décélérer en douceur sans freiner brutalement ni braquer.
T3-R05 Vent latéral : rafales en sortie de tunnel, sur pont, viaduc, lors du dépassement d'un poids lourd ; anticiper en se décalant au vent et en gardant une poigne souple.
T3-R06 Brouillard : feux de croisement + feux de brouillard avant éventuels ; visibilité < 50 m → 50 km/h maxi sur tout réseau ; feu de brouillard arrière interdit sous la pluie (éblouit).
T3-R07 Pluie : vitesses abaissées (110/100/80), distances de sécurité doublées, distance de freinage jusqu'à doublée ; visière traitée ou essuyée.
T3-R08 Neige et verglas : adhérence quasi nulle pour un 2RM — renoncer à rouler ; plaques de verglas probables sur ponts et zones ombragées même par température légèrement positive.
T3-R09 Lecture de virage : panneaux de danger, chevrons, balises J1/J4 (les chevrons marquent l'extérieur du virage) ; ajuster l'allure AVANT l'entrée du virage.
T3-R10 Chaussée dégradée : nids-de-poule, bandes de ralentissement, ralentisseurs, déformations — danger spécifique aux 2RM (déséquilibre) ; alléger le guidon, se lever légèrement si besoin.
T3-R11 La nuit sur route non éclairée : feux de route dès que possible, repasser en croisement au croisement d'un autre usager ; détection tardive des obstacles et animaux.
T3-R12 Routes de campagne : animaux sauvages (collisions au lever/coucher du soleil), engins agricoles lents et larges, végétation masquant les intersections.
T3-R13 En agglomération : masques de visibilité (véhicules en stationnement, bus à l'arrêt), piétons surgissant entre les véhicules — réduire l'allure, se tenir prêt à freiner.
T3-R14 Insertion sur voie rapide : utiliser TOUTE la voie d'accélération pour atteindre la vitesse du flux, céder le passage aux véhicules sur la voie ; sortie = décélérer DANS la voie de décélération, pas avant.
T3-R15 Travaux et obstacles temporaires : signalisation jaune temporaire prime sur la signalisation permanente ; prudence accrue (gravillons, décalages de voie, personnel).

### Thème 4 — « Les autres usagers » (~12 règles)
T4-R01 Angles morts des poids lourds et bus : zones avant, arrière et latérales étendues — ne jamais y stationner, dépasser franchement ; si vous ne voyez pas les rétroviseurs du camion, son conducteur ne vous voit pas.
T4-R02 Piétons : priorité dès qu'un piéton est engagé OU manifeste l'intention de traverser ; refus de priorité = 135 € + 6 points ; ne jamais dépasser un véhicule arrêté devant un passage piéton.
T4-R03 Cyclistes : écart latéral minimal de 1 m en agglomération, 1,50 m hors agglomération ; attention aux écarts (vent, obstacle) ; sas vélo aux feux à respecter (ne pas s'y arrêter en moto).
T4-R04 EDPM (trottinettes électriques) : limités à 25 km/h, interdits aux trottoirs (sauf exception), conducteurs parfois imprévisibles — distance et anticipation.
T4-R05 Usagers vulnérables : enfants, personnes âgées, PMR = comportements moins prévisibles, temps de traversée allongé — ralentir, se tenir prêt à s'arrêter.
T4-R06 Véhicules d'urgence (sirène + gyrophare) : faciliter immédiatement le passage, se ranger ; corridor de sécurité : s'écarter d'une voie (ou ralentir fortement) au passage d'un véhicule d'intervention arrêté sur la bande d'arrêt d'urgence.
T4-R07 Bus quittant un arrêt en agglomération : lui faciliter la réinsertion (il a priorité quand il signale son départ).
T4-R08 Automobiliste tournant à gauche : première cause d'accident moto en intersection — l'automobiliste ne voit pas ou mal la moto ; anticiper le refus de priorité, ralentir, chercher le contact visuel.
T4-R09 Être vu : feu de croisement allumé de jour obligatoire à moto, se placer dans le champ des rétroviseurs, éviter de circuler dans les angles morts des voitures, équipement clair/rétro-réfléchissant recommandé.
T4-R10 Dooring : portière qui s'ouvre le long des véhicules en stationnement — garder un mètre de marge en longeant une file de voitures garées.
T4-R11 Véhicules lents et convois : engins agricoles, convois exceptionnels — patience, dépasser uniquement avec visibilité et espace suffisants.
T4-R12 Autres motards : l'entraide motarde ne dispense d'aucune règle ; en groupe, rouler en quinconce, jamais côte à côte sur la même voie de nuit ou par visibilité réduite (le Code impose la file simple la nuit).

### Thème 5 — « Réglementation générale et divers » (~18 règles)
T5-R01 Permis A1 : dès 16 ans — motos ≤ 125 cm³, ≤ 11 kW, rapport puissance/poids ≤ 0,1 kW/kg. Permis A2 : dès 18 ans — ≤ 35 kW, rapport ≤ 0,2 kW/kg, bridage possible uniquement depuis un modèle d'origine ≤ 70 kW.
T5-R02 Permis A : accessible après 2 ans de permis A2 + formation passerelle de 7 h (sans examen), donc 20 ans minimum.
T5-R03 Permis B et 125 : conduire une 125 (L3e ≤ 11 kW) avec permis B possible après 2 ans de permis ET formation de 7 h (sauf antériorité d'assurance 2RM 2006-2010).
T5-R04 ETM : 40 questions (30 images + 10 vidéos), 35/40 pour réussir, 20 s par question ; résultat valable 5 ans et 5 présentations aux épreuves pratiques ; obligatoire même si on a déjà le code voiture.
T5-R05 Épreuves pratiques moto : hors circulation (« plateau ») puis circulation (40 min) ; réussite plateau valable pour se présenter à la circulation.
T5-R06 Permis probatoire : capital initial de 6 points, +2 points par an sans infraction → 12 points en 3 ans (2 ans si formation complémentaire post-permis suivie entre 6e et 12e mois) ; « A » non requis à moto, mais limitations de vitesse jeune conducteur applicables 3 ans.
T5-R07 Points : capital maximal 12 ; récupération automatique d'1 point à 6 mois (infraction à 1 point), totalité en 2 ou 3 ans sans infraction ; stage volontaire = +4 points, 1 fois par an maximum ; solde nul = invalidation.
T5-R08 Assurance : responsabilité civile obligatoire pour tout 2RM même à l'arrêt ; depuis le 1er avril 2024, plus de carte verte ni vignette — contrôle via le Fichier des Véhicules Assurés ; défaut d'assurance = délit, 3 750 € d'amende.
T5-R09 Documents à présenter en cas de contrôle : permis de conduire, certificat d'immatriculation ; CPI (certificat provisoire) valable 1 mois.
T5-R10 Plaque d'immatriculation moto : format réglementaire unique 210 × 130 mm, fixe et lisible ; plaque non conforme/illisible : 135 €.
T5-R11 Carte grise : immatriculation à jour, changement d'adresse déclaré sous 1 mois ; achat d'occasion → carte grise au nouveau nom sous 1 mois ; vente → certificat de cession déclaré sous 15 jours.
T5-R12 Contrôle technique 2RM : obligatoire depuis le 15 avril 2024, selon calendrier basé sur l'année d'immatriculation, puis renouvellement périodique (3 ans) ; vente d'occasion → CT de moins de 6 mois.
T5-R13 Classes d'amendes forfaitaires : 11 € (1re), 35 € (2e), 68 € (3e), 135 € (4e) ; minoration si paiement rapide (ex. 135 → 90 €), majoration en cas de retard.
T5-R14 Excès de vitesse : < 20 km/h = 1 point (68 € ou 135 € en agglo) ; 20-29 = 2 points ; 30-39 = 3 points ; 40-49 = 4 points + suspension possible ; ≥ 50 = 6 points, délit en récidive, confiscation possible.
T5-R15 Rétention / suspension / annulation / invalidation : rétention = 72 h par les forces de l'ordre ; suspension = administrative ou judiciaire, temporaire ; annulation = décision judiciaire ; invalidation = solde de points nul → repasser le permis (code + conduite si permis < 3 ans).
T5-R16 Débridage : interdit — moto non conforme à sa catégorie ; en A2, conduire une moto débridée = conduite sans permis valable + assurance caduque en cas d'accident.
T5-R17 Transport de passager : selle biplace + repose-pieds + casque attaché ET gants certifiés pour le passager ; enfant de moins de 5 ans : siège adapté obligatoire ; le passager doit pouvoir poser les pieds sur les repose-pieds.
T5-R18 Plaques, rétro, klaxon, échappement : tout équipement d'origine homologué doit rester conforme ; échappement non homologué ou débridé = amende, immobilisation possible.

### Thème 6 — « Porter secours » (~10 règles)
T6-R01 PAS : Protéger, Alerter, Secourir — dans cet ordre, obligatoirement.
T6-R02 Protéger : se garer en sécurité, warnings, gilet haute visibilité, baliser à distance suffisante (~150-200 m sur voie rapide), couper le contact des véhicules accidentés, interdire de fumer ; sur autoroute, mettre les témoins derrière la glissière.
T6-R03 Alerter : 112 (européen), 15 (SAMU), 17 (police), 18 (pompiers), 114 (SMS malentendants) ; sur autoroute, privilégier la borne d'appel d'urgence (localisation automatique) ; message : lieu précis, nombre de victimes, état, risques particuliers ; ne raccrocher que sur consigne.
T6-R04 Casque d'un motard blessé : NE PAS le retirer — seulement si la victime ne respire pas et que le casque empêche la réanimation (retrait à deux si possible, en maintenant l'axe tête-cou).
T6-R05 Victime inconsciente qui respire : position latérale de sécurité (PLS), desserrer ce qui gêne la respiration, surveiller en continu.
T6-R06 Victime qui ne respire pas : alerter, puis massage cardiaque 100-120 compressions/min au centre du thorax, défibrillateur (DAE) dès que disponible — toute personne peut l'utiliser.
T6-R07 Hémorragie visible : compression directe et continue de la plaie (main protégée ou tissu propre), allonger la victime, alerter.
T6-R08 Ne pas déplacer un blessé, ne pas lui donner à boire, ne pas retirer un casque ni un vêtement collé — sauf danger immédiat (incendie, sur-accident) : dégagement d'urgence en tirant dans l'axe.
T6-R09 Couvrir, rassurer, parler à la victime, surveiller son état jusqu'à l'arrivée des secours.
T6-R10 Porter assistance est une obligation légale : la non-assistance à personne en danger est un délit (jusqu'à 5 ans de prison et 75 000 € d'amende) ; s'arrêter au moins pour alerter si d'autres secourent déjà.

### Thème 7 — « Éléments mécaniques liés à la sécurité » (~14 règles)
T7-R01 Pression des pneus : à vérifier à froid, environ 1 fois par mois et avant long trajet, valeurs constructeur ; sous-gonflage = échauffement, usure anormale, guidonnage, éclatement ; ajuster en duo/chargé.
T7-R02 Usure des pneus : témoins d'usure dans les sculptures ; profondeur minimale légale 1 mm pour les motos ; usure irrégulière = contrôle (parallélisme, pression, amortisseur).
T7-R03 Pneus neufs : fine pellicule de démoulage glissante — rouler ~100 km en douceur avant de solliciter l'adhérence (angle, freinage fort).
T7-R04 Freins : contrôler l'usure des plaquettes et l'état des disques ; liquide de frein hygroscopique → remplacement environ tous les 2 ans ; niveau dans le maître-cylindre ; levier spongieux = purge nécessaire.
T7-R05 Kit chaîne : tension correcte (flèche ~2-3 cm selon modèle), graissage régulier (tous les ~500 km et après pluie) ; chaîne détendue = risque de déraillement et blocage de roue.
T7-R06 Niveaux : huile moteur (moto verticale, à froid ou selon notice — hublot ou jauge), liquide de refroidissement ; manque d'huile = casse moteur.
T7-R07 Éclairage : vérifier avant de partir — feu de croisement (allumé en permanence), feu de route, position, stop, clignotants, éclairage de plaque ; une ampoule morte = être moins vu.
T7-R08 ABS : obligatoire sur les motos neuves de plus de 125 cm³ (UE, depuis 2016) ; empêche le blocage des roues au freinage d'urgence ; ne réduit pas la distance d'arrêt sur tous les revêtements — ne dispense pas d'anticiper.
T7-R09 Commandes : câbles (embrayage, gaz) sans point dur, poignée de gaz qui revient seule, leviers réglés à la main.
T7-R10 Suspensions : fourche sans fuite d'huile, amortisseur efficace ; précharge à ajuster quand on charge la moto ou prend un passager.
T7-R11 Rétroviseurs : propres et réglés AVANT de partir — on doit voir la voie et le plus loin possible derrière soi, en limitant les angles morts.
T7-R12 Batterie et coupe-circuit : connaître l'emplacement du coupe-circuit (arrêt d'urgence du moteur) ; batterie entretenue, surtout après hivernage.
T7-R13 Contrôles avant départ (« minute moto ») : pneus, freins, chaîne, niveaux, éclairage, rétroviseurs — un contrôle visuel rapide systématique.
T7-R14 Entretien périodique : respecter le carnet constructeur (révisions, vidanges) ; une moto mal entretenue = danger et contre-visite au contrôle technique.

### Thème 8 — « Équipement du motard et sécurité du véhicule » (~14 règles)
T8-R01 Casque : homologué (norme ECE 22-05 ou 22-06), ATTACHÉ, à la taille ; non-port ou non attaché = 135 € + 3 points ; conducteur et passager.
T8-R02 Stickers du casque : 4 autocollants rétro-réfléchissants obligatoires en France (avant, arrière, côtés).
T8-R03 Remplacement du casque : après TOUT choc (même sans dégât visible) et environ tous les 5 ans (vieillissement des matériaux) ; éviter l'occasion.
T8-R04 Gants certifiés CE : obligatoires conducteur et passager depuis le 20 novembre 2016 ; 68 € + 1 point (conducteur) ; adaptés à la saison.
T8-R05 Gilet haute visibilité : obligation de DÉTENIR un gilet sur soi ou dans un rangement de la moto, et de le PORTER en cas d'arrêt d'urgence ; non-port en situation d'urgence : 135 €.
T8-R06 Blouson et pantalon : fortement recommandés — protections certifiées CE (EN 1621) coudes/épaules/genoux, dorsale recommandée ; le jean et le tee-shirt n'offrent aucune protection à la glisse.
T8-R07 Chaussures : montantes, maintien de la cheville et du bas du tibia, semelle rigide — les baskets basses exposent malléoles et pieds.
T8-R08 Airbag moto : gilet ou blouson airbag (filaire ou électronique) — non obligatoire mais protège thorax, abdomen et colonne ; recommandé par la Sécurité routière.
T8-R09 Visière et vision : écran propre et non rayé, antibuée (pinlock) ; écran teinté/fumé interdit la nuit ; lunettes de soleil inadaptées en conduite nocturne.
T8-R10 Être vu : équipement clair ou éléments rétro-réfléchissants, feu de croisement de jour — le motard est détecté plus tard qu'une voiture (silhouette étroite).
T8-R11 Équipement du passager : strictement les mêmes obligations (casque attaché + gants certifiés) ; lui expliquer les consignes (tenir le conducteur ou les poignées, accompagner les mouvements, pieds sur les repose-pieds).
T8-R12 Chargement et bagages : top-case/sacoches homologués, charge limitée (voir notice), bien arrimée ; modifier la répartition des masses change le comportement — adapter pression des pneus et précharge ; rien d'instable ni de dépassant.
T8-R13 Antivol : recommandé (homologué SRA/NF) ; attention à l'antivol de disque oublié = chute au démarrage (témoin de rappel).
T8-R14 Catadioptre et plaque : catadioptre arrière rouge obligatoire, plaque éclairée et lisible ; avertisseur sonore conforme et audible.

### Thème 9 — « Environnement » (~8 règles)
T9-R01 Conduite souple et anticipation : accélérations progressives, frein moteur, regarder loin pour éviter les freinages inutiles — moins de carburant, moins d'usure, moins de pollution.
T9-R02 Régime moteur : passer les rapports sans attendre le haut du compte-tours, éviter les surrégimes et les coups de gaz à l'arrêt (bruit + pollution inutiles).
T9-R03 Entretien et pollution : filtre à air propre, carburation/injection réglée, pneus à la bonne pression, chaîne propre = consommation et émissions réduites.
T9-R04 Bruit : échappement non homologué ou débridé interdit — amende, immobilisation possible ; le bruit excessif est la première cause de rejet des motards par les riverains.
T9-R05 Crit'Air et ZFE : vignette Crit'Air obligatoire pour circuler dans les zones à faibles émissions ; les 2RM sont classés selon leur norme Euro/date d'immatriculation ; se renseigner avant d'entrer dans une ZFE.
T9-R06 Arrêt prolongé : couper le moteur (attente longue, livraison, passage à niveau fermé) — rouler au pas inutilement moteur chaud à l'arrêt = pollution évitable.
T9-R07 Déchets d'entretien : huiles usagées, batteries, pneus = déchetterie ou reprise par le garage, JAMAIS dans la nature ni l'évier.
T9-R08 Choix et usage du véhicule : adapter la cylindrée au besoin, envisager l'électrique en usage urbain ; l'éco-conduite réduit la consommation de 10 à 20 %.

## Validation obligatoire
Après écriture : `cd ~/Blackbird/CodeMoto && node tools/validate.js data/themeX.js ...` → doit afficher OK.
