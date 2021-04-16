const xlsx = require('xlsx')

const file = xlsx.readFile('data.xlsx')
const json = xlsx.utils.sheet_to_json(file.Sheets['data'])

const donnees = json.filter(d => d.Kanton === 'VD' && d.DTV_2018 >= 3856)
                .map(d => ({gare: d.Bahnhof_Haltestelle, passagersMoyens: d.DTV_2018}))

console.log(donnees)