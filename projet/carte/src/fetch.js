const choppeDonnees = (type, bbox) => {

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
  "body": `data=%2F*%0AThis+has+been+generated+by+the+overpass-turbo+wizard.%0AThe+original+search+was%3A%0A%E2%80%9C${type}%E2%80%9D%0A*%2F%0A%5Bout%3Ajson%5D%5Btimeout%3A25%5D%3B%0A%2F%2F+gather+results%0A(%0A++%2F%2F+query+part+for%3A+%E2%80%9C${type}%E2%80%9D%0A++node%5B%22amenity%22%3D%22cinema%22%5D(46.14273425000931%2C6.14410400390625%2C46.76056154244133%2C6.860961914062499)%3B%0A)%3B%0A%2F%2F+print+results%0Aout+body%3B%0A%3E%3B%0Aout+skel+qt%3B`,
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
}).then(r => r.json())
    .then(d => d.elements['lat']) //tableau (filtrer ici les données)

}
//changer dans body le cinema et bbox (46.)
