import L from 'leaflet';
import turf from '@turf/circle';

var coordonnees = [46.537368, 6.333769];

//On peut changer les coordonnées pour changer le lieu du fond
const map = L.map('map').setView(coordonnees, 17)

var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors'
}).addTo(map)

//délimitation du rond autour de la coordonnée
var radius = 5;
var options = {steps: 10, units: 'kilometers', properties: {foo: 'bar'}};
var circle = turf(coordonnees, radius, options);
console.log(circle)