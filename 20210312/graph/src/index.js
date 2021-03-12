import {
  select,
  pie,
  arc,
} from 'd3'

const DATA = [
  { nom: 'Lausanne', population: 138905 },
  { nom: 'Yverdon-les-Bains', population: 30143 },
  { nom: 'Montreux', population: 26574 },
  { nom: 'Renens', population: 21036 },
  { nom: 'Nyon', population: 20533 },
  { nom: 'Vevey', population: 19827 },
]

const getPieData = pie().value(d => d.population)
const pieData = getPieData(DATA)

const WIDTH = 1000
const HEIGHT = 500

const svg = select('body')
  .append('svg')
  .attr('viewBox', `0 0 ${WIDTH} ${HEIGHT}`)

// une fonction pour transformer les angles en attribut d
const arcCreator = arc()
  .innerRadius(0)
  .outerRadius(HEIGHT / 2)

// une fonction pour la couleur
const color = ({ data }) => {
  switch (data.nom) {
    case 'Lausanne': return 'gold'
    case 'Yverdon-les-Bains': return 'grey'
    case 'Montreux': return 'limegreen'
    case 'Renens': return 'blue'
    case 'Nyon': return 'brown'
    default: return 'indianred'
  }
}

// un groupe pour centrer le camembert
const pieCenter = svg.append('g')
  .attr('transform', `translate(${HEIGHT / 2}, ${HEIGHT / 2})`)


pieCenter.selectAll('path')
  .data(pieData) // créé plus haut
  .enter()
  .append('path')
  .attr('d', arcCreator)
  .attr('fill', color)

// un texte pour chaque tranche
pieCenter.selectAll('text')
.data(pieData)
.enter()
.append('text')
// .centroid permet de trouver le centre de la tranche
.attr('transform', d => `translate(${arcCreator.centroid(d)})`)
.attr('text-anchor', 'middle')
.text(d => d.data.nom)

// la légende
const legend = svg.append('g')
.attr('transform', `translate(${HEIGHT-10})`)

const RECT_WIDTH = 20

// les carrés de couleur3.line()
legend.selectAll('rect')
.data(pieData)
.enter()
.append('rect')
.attr('y', (d, i) => i * RECT_WIDTH)
.attr('width', RECT_WIDTH)
.attr('height', RECT_WIDTH)
.attr('fill', color)

// les noms de fruits
legend.selectAll('text')
.data(pieData)
.enter()
.append('text')
.attr('x', RECT_WIDTH * 1.5)
.attr('y', (d, i) => i * RECT_WIDTH + RECT_WIDTH * 0.75)
.attr('width', RECT_WIDTH)
.attr('height', RECT_WIDTH)
.text(d => d.data.nom)