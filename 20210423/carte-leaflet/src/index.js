import L from 'leaflet'
import batiments from './batiments.json'

//On peut changer les coordonnées pour changer le lieu du fond
const map = L.map('map').setView([46.537368, 6.333769], 17)

var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors'
}).addTo(map)


L.geoJSON(
  batiments,
  {
    style: feature =>
      feature.properties['layer'] === '1'
        ? { color: 'indianred' }
        : { color: 'steelblue' },
    onEachFeature: (feature, layer) =>
      layer.bindPopup(feature.properties.name || feature.properties['addr:street'] || feature.properties.uid)
      
  },
).addTo(map)