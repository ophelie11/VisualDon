# Projet
## 16 avril
Projet en collaboration avec Lionel Urfer. Nous sommes en train de choisir un sujet.

## 23 avril
Idée pour le travail : faire une appli qui nous indique les cinémas et/ou musées dans un rayon de 5km.

## 30 avril
Mise en place du projet. Nous avons créer le visuel de l'application, géré le clic de l'utilisateur (affichage du rayon de recherche uniquement pour l'instant). Nous avons ensuite travaillé pour récupérer le bbox autour de l'utilisateur afin de pouvoir faire une requête pour afficher les cinémas aux alentours. Il nous restera à afficher visuellement les cinémas, puis de faire la même chose avec les bars et les musées.

## 07 mai
Nous avons ajouté un effet de zoom à la carte et affiché visuellement les cinémas. Il nous reste à afficher les musées et bar, à réfléchir à l'utilité de notre rond et à rendre l'app responsive. Il faudra aussi qu'on gère les groupes de marker. Lien utiles pour nous : https://leafletjs.com/reference-1.7.1.html#marker (pour les marker) et : https://leafletjs.com/examples/layers-control/ (pour les groupes)

## 21 mai
Nous avons décidé d'abandonner les musées, nous avons revu le texte et adapté l'app en responsive. Il nous reste à faire un retour visuel pour l'utilisateur lors du chargement et en cas d'erreur. Nous n'avons pas encore réussi à enlevé les markers (à les grouper)

# Rendu du projet 
Notre site est accessible à l'adresse : http://barcifun.surge.sh/

Ce projet a été réalisé en collaboration avec Lionel Urfer, le code est accessible sur ce projet github.

## Les données - nos méthodes
Pour afficher la carte de notre application, nous avons choisi de travailler avec la librairie Leaflet. Nous l'avons choisie car c'était celle qui nous attirait le plus. Au niveau de la récupération des données (bars et cinéma), nous avons effectué des requêtes sur overpass en passant des arguments (type de données recherché + latitude/longitude du click) afin que notre requête soit modulable pour divers lieux (bars et cinémas dans notre cas).

L'enjeu a ensuite été d'afficher les markers dans des groupes afin qu'ils disparaissent en cas de re-click sur l'application. Nous avons également réalisé un retour visuel lors du chargement des données.

Nous avons voulu donner un ton un peu fun au niveau des textes pour rendre l'app un peu plus vivante et en adéquation avec les données affichées.