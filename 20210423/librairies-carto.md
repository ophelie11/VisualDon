# Pourquoi doit-on projeter des données cartographiques?
Pour créer des cartes, représenter une surface non plane.

# Qu'est ce qu'Open street map?
C'est une carte du monde, qui permet de télécharger des oms qu'on va pouvoir utiliser une fois transformée en geojson

# Quelles fonctions D3 sont spécifiques à la cartographie?
- geopath() : pour mettre une projection dans le PathCreator
- geoMercator() : pour définir la projection Mercator (créer la carte)
- geoGraticule() : pour rajouter les méridiens
- geoTransform() : permet de modifier des éléments de la carte, comme des coordonnées.

# À quoi sert le format topojson? En quoi est-il différent du geojson?
la différence entre topojson, c'est que lui est une séries d'arc alors que geojson est une série de point.
Topojson prend une liste de geojson et il va créer des données moins importantes (il rassemble les données à double).
Par exemple, dans le cas de pays limitrophes, il y aura des coordonnées à double, topojson permet de diminuer le volume des données.
On peut également facilement lier des éléments (grâce à merge).

# À quoi sert turf? Décrivez ce que font trois fonctions de cette libraire
C'est comme une librairie d3, ça permet de faire des fonctions sur les données geojson.
## along 
Permet de calculer suivre un tracé. Ex mettre un point tous les km d'un parcours à vélo
## aria
Calculer la surface
## distance
Donne la distance entre 2 points (en km)
## union
permet de mettre ensemble, un peu comme topojson
## circle
Permet de mettre un rayon autour d'une position 