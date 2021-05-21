import L, { layerGroup } from 'leaflet';
import turfCircles from '@turf/circle';
import { bbox } from '@turf/turf';

var coordonnees = [46.54841, 6.51307];

const map = L.map('map').setView(coordonnees, 10)

var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors'
}).addTo(map)


var iconeCinema = L.icon({
  iconUrl: 'images/marker-cinema.svg',
  iconSize: [50, 80],
  iconAnchor: [10, 60],
  popupAnchor: [15, -40],

});
var iconeBar = L.icon({
  iconUrl: 'images/marker-bar.svg',
  iconSize: [50, 80],
  iconAnchor: [10, 60],
  popupAnchor: [15, -40],

});

const group = L.layerGroup([]).addTo(map);

const recupererDonnees = (type, contour) => {

  return fetch("https://overpass-api.de/api/interpreter", {
    "headers": {
      "accept": "*/*",
      "accept-language": "fr-CH,fr-FR;q=0.9,fr;q=0.8,en-US;q=0.7,en;q=0.6",
      "cache-control": "no-cache",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "pragma": "no-cache",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site"
    },
    "referrer": "https://overpass-turbo.eu/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `data=%2F*%0AThis+has+been+generated+by+the+overpass-turbo+wizard.%0AThe+original+search+was%3A%0A%E2%80%9C${type}%E2%80%9D%0A*%2F%0A%5Bout%3Ajson%5D%5Btimeout%3A25%5D%3B%0A%2F%2F+gather+results%0A(%0A++%2F%2F+query+part+for%3A+%E2%80%9C${type}%E2%80%9D%0A++node%5B%22amenity%22%3D%22${type}%22%5D(${contour.join('%2C')})%3B%0A)%3B%0A%2F%2F+print+results%0Aout+body%3B%0A%3E%3B%0Aout+skel+qt%3B`,
    "method": "POST",
    "mode": "cors",
    "credentials": "omit"
  }).then(r => r.json())
    .then(d => d.elements.map(d => ({ lat: d.lat, lon: d.lon, nom: d.tags.name })))
}

const ajouterMarqeurs = (type, contour) => 
  recupererDonnees(type, contour)
    .then(d => d.map(({lat, lon, nom}) => group.addLayer(L.marker([lat, lon], { icon: type==='cinema' ? iconeCinema : iconeBar}).bindPopup(nom))))


function msgErreur() {
  alert("Il y a eu une erreur, reclique!");
}

let charge = false;

map.on('click', evt => {

  if(charge){
    return;
  }

  const latitude = evt.latlng.lat;
  const longitude = evt.latlng.lng;
  
  group.clearLayers();
  charge = true;

  document.getElementById('image').classList.add('show');
  //zoom
  map.flyTo([latitude, longitude], 14)
  //délimitation du rond autour de la coordonnée
  var radius = 3;
  var point = [latitude, longitude];
  var options = { steps: 10, units: 'kilometers', properties: { foo: 'bar' } };
  var circle = turfCircles(point, radius, options);
  var contour = bbox(circle)
  Promise.all([
    ajouterMarqeurs('cinema', contour),
    ajouterMarqeurs('bar', contour)
  ]).then(() => {charge=false})
  .then(() => document.getElementById('image').classList.remove('show'))
  .catch(() => {
    charge=false;
    msgErreur();
  });
});


