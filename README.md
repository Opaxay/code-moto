# Code Moto — révision de l'ETM

Micro-appli de révision de l'**Épreuve Théorique Moto** (ETM), l'examen officiel
requis pour les permis A1 / A2 depuis le 1er mars 2020.

**419 questions · 131 règles · les 9 thématiques officielles** (sources :
securite-routiere.gouv.fr).

## Lancer l'appli

Aucune installation, aucune dépendance, aucun serveur, aucun accès internet requis.

### En une commande

```bash
git clone https://github.com/Opaxay/code-moto.git && open code-moto/index.html
```

Sur Windows (PowerShell ou cmd) :

```
git clone https://github.com/Opaxay/code-moto.git && start code-moto\index.html
```

### Sans git

Bouton vert **Code** → **Download ZIP** → extraire → double-cliquer sur `index.html`.

Fonctionne sur Chrome, Edge, Firefox et Safari, sur ordinateur comme sur téléphone.
Garder `index.html` et le dossier `data/` dans le même dossier.

## Les 3 modes

- **Fiches de révision** — les 131 règles classées par thème, avec recherche.
- **Séries libres** — questions illimitées, sans chrono, correction immédiate et expliquée.
- **Examen blanc** — 40 questions, 20 secondes chacune, seuil de réussite à 35/40,
  correction détaillée à la fin (les conditions réelles de l'examen).

En série libre, une mauvaise réponse affiche la leçon complète juste en dessous,
source comprise : rien à cliquer, on lit et on enchaîne.

Les boutons 🌃 et 🎧 de la barre du haut activent une ambiance « night ride »
(vidéo de fond et musique lues depuis YouTube — nécessite une connexion ;
tout le reste de l'appli fonctionne hors ligne).

La progression est enregistrée localement dans le navigateur (`localStorage`) :
elle reste sur l'appareil et n'est envoyée nulle part.

## Structure

```
index.html        l'appli entière (HTML + CSS + JS, zéro dépendance)
data/theme1-9.js  la banque de questions, un fichier par thématique
SPEC.md           le programme officiel et les 131 règles sourcées
tools/validate.js contrôle d'intégrité de la banque
```

Valider la banque après modification :

```bash
node tools/validate.js data/theme*.js
```

## Avertissement

Outil de révision personnel, sans aucun lien avec la Sécurité routière ni avec
un organisme agréé. Les questions sont rédigées d'après les textes officiels mais
ne sont pas les questions de l'examen. En cas de doute, se référer à
[securite-routiere.gouv.fr](https://www.securite-routiere.gouv.fr).
