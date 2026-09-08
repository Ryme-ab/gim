# GIMPO — Site vitrine industriel

Site vitrine de **GIMPO / SARL GIMELEC POWER**, entreprise EPC spécialisée
dans les solutions électriques industrielles, l'automatisation, la maintenance
et l'intégration d'équipements pour l'énergie, les infrastructures et
l'industrie.

Le site est volontairement léger : il s'agit d'une application statique sans
framework ni dépendance à installer, pensée pour être rapide, responsive et
facile à maintenir.

## Fonctionnalités

- Présentation de GIMPO, de ses domaines d'activité et de ses services.
- Carrousels interactifs pour les produits, projets et actualités.
- Galerie de projets : clic sur une image pour l'ouvrir en grand format.
- Page News avec galeries photos et vidéos pour les événements Sheraton et
  POLLUTEC.
- Navigation responsive avec menu mobile.
- Interface bilingue français / anglais, mémorisée dans le navigateur.
- Animations d'apparition et interactions au survol, compatibles avec la
  préférence système « réduire les animations ».
- Liens directs vers les coordonnées, Google Maps et la page LinkedIn publique
  de l'entreprise.

## Structure du projet

```text
.
├── index.html              # Page d'accueil et présentation des solutions
├── news.html               # Actualités, événements et galeries média
├── styles.css              # Design system, responsive et animations
├── script.js               # Langues, navigation, carrousels et modales
├── assets/                 # Logo, visuels produits et projets
└── public/images/          # Partenaires et médias des événements
```

## Utilisation locale

Le projet ne nécessite aucune installation. Ouvrez simplement `index.html` dans
un navigateur moderne. Pour une expérience plus proche de la production, servez
le dossier via un serveur HTTP local, par exemple :

```bash
npx serve .
```

Ouvrez ensuite l'adresse fournie par le serveur, généralement
`http://localhost:3000`.

## Gestion des langues

Le sélecteur **FR / EN** de la navigation traduit l'accueil et la page News.
Le choix est conservé localement dans le navigateur avec la clé
`gimpo-language`.

Les contenus et libellés en anglais sont centralisés dans `script.js`. Lors de
l'ajout d'un nouveau contenu visible, prévoir sa version anglaise dans les
objets de traduction afin de conserver une interface entièrement bilingue.

## Ajouter du contenu

### Projets réalisés

Ajoutez une image dans `assets/projets/`, puis créez une nouvelle balise
`<article>` avec son image dans la section `#projects` de `index.html`. Le
carrousel, les indicateurs et l'agrandissement au clic sont générés
automatiquement.

### Actualités et événements

Les contenus de la page News se trouvent dans `news.html`.

- Ajoutez les images ou vidéos événementielles dans
  `public/images/events/<evenement>/`.
- Ajoutez chaque média dans une balise
  `.news-event-carousel__slide` du carrousel concerné.
- Les vidéos HTML5 doivent inclure `controls`, `muted`, `playsinline` et une
  source MP4 pour préserver une lecture fiable sur mobile et ordinateur.

## Déploiement

Le site peut être publié tel quel sur tout hébergement statique : GitHub Pages,
Netlify, Vercel, Cloudflare Pages ou un serveur web classique.

Avant publication, vérifiez notamment :

- les coordonnées et liens externes ;
- le bon chargement de toutes les images et vidéos ;
- l'affichage en français et en anglais ;
- le rendu mobile et desktop ;
- l'ouverture des projets et le fonctionnement des carrousels.

## Technologies

- HTML5 sémantique
- CSS3 responsive
- JavaScript natif (ES6+)

---

© GIMPO / SARL GIMELEC POWER. Tous droits réservés.
