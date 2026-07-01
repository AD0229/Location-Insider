// Location Insider Konfiguration
// Version 1.2: Weltkarte -> Deutschland -> Bundeslaender -> Locations
//
// WICHTIG FUER DICH:
// - Neue SharePoint-Seite erstellen, z. B. Berlin.aspx oder Dresden.aspx
// - URL kopieren
// - unten beim passenden Bundesland oder bei der passenden Location in "link" einfuegen
// - Kommas und Anfuehrungszeichen bitte beibehalten
//
// Logik:
// - Berlin oeffnet direkt die hinterlegte SharePoint-Seite.
// - Alle anderen Bundeslaender zeigen rechts die verfuegbaren Locations.
// - Hat eine Location einen Link, wird dieser geoeffnet.
// - Ist der Link leer, erscheint ein freundlicher Hinweis.

window.LOCATION_INSIDER_CONFIG = {
  "settings": {
    "title": "Location Insider",
    "subtitle": "Discover event locations and insider pages worldwide.",
    "colors": {
      "grey": "#9d9d9c",
      "active": "#3ec1cf",
      "hover": "#9f4c97",
      "orange": "#f39200"
    }
  },
  "countries": [
    { "name": "Deutschland", "country": "Deutschland", "svgId": "DE", "active": true, "order": 1, "link": "" },
    { "name": "USA", "country": "USA", "svgId": "US", "active": true, "order": 2, "link": "" },
    { "name": "Spanien", "country": "Spanien", "svgId": "ES", "active": true, "order": 3, "link": "" },
    { "name": "Österreich", "country": "Österreich", "svgId": "AT", "active": true, "order": 4, "link": "" },
    { "name": "VAE", "country": "VAE", "svgId": "AE", "active": true, "order": 5, "link": "" },
    { "name": "Schweiz", "country": "Schweiz", "svgId": "CH", "active": true, "order": 6, "link": "" },
    { "name": "Italien", "country": "Italien", "svgId": "IT", "active": true, "order": 7, "link": "" }
  ],
  "states": [
    { "name": "Baden-Württemberg", "svgId": "DE-BW", "country": "Deutschland", "active": true, "order": 10, "link": "" },
    { "name": "Bayern", "svgId": "DE-BY", "country": "Deutschland", "active": true, "order": 20, "link": "" },
    { "name": "Berlin", "svgId": "DE-BE", "country": "Deutschland", "active": true, "order": 30, "link": "https://friedrichswalde37.sharepoint.com/:u:/s/Know-HowIntranet/IQB93Wue2eWSSYsiOPONcqUQAb7MLEUt6jMmPpMjicXDeF8?e=EFfPHF" },
    { "name": "Brandenburg", "svgId": "DE-BB", "country": "Deutschland", "active": true, "order": 40, "link": "" },
    { "name": "Bremen", "svgId": "DE-HB", "country": "Deutschland", "active": true, "order": 50, "link": "" },
    { "name": "Hamburg", "svgId": "DE-HH", "country": "Deutschland", "active": true, "order": 60, "link": "" },
    { "name": "Hessen", "svgId": "DE-HE", "country": "Deutschland", "active": true, "order": 70, "link": "" },
    { "name": "Mecklenburg-Vorpommern", "svgId": "DE-MV", "country": "Deutschland", "active": true, "order": 80, "link": "" },
    { "name": "Niedersachsen", "svgId": "DE-NI", "country": "Deutschland", "active": true, "order": 90, "link": "" },
    { "name": "Nordrhein-Westfalen", "svgId": "DE-NW", "country": "Deutschland", "active": true, "order": 100, "link": "" },
    { "name": "Rheinland-Pfalz", "svgId": "DE-RP", "country": "Deutschland", "active": true, "order": 110, "link": "" },
    { "name": "Saarland", "svgId": "DE-SL", "country": "Deutschland", "active": true, "order": 120, "link": "" },
    { "name": "Sachsen", "svgId": "DE-SN", "country": "Deutschland", "active": true, "order": 130, "link": "" },
    { "name": "Sachsen-Anhalt", "svgId": "DE-ST", "country": "Deutschland", "active": true, "order": 140, "link": "" },
    { "name": "Schleswig-Holstein", "svgId": "DE-SH", "country": "Deutschland", "active": true, "order": 150, "link": "" },
    { "name": "Thüringen", "svgId": "DE-TH", "country": "Deutschland", "active": true, "order": 160, "link": "" }
  ],
  "cities": {
    "Baden-Württemberg": [
      { "name": "Stuttgart", "link": "" },
      { "name": "Mannheim", "link": "" },
      { "name": "Karlsruhe", "link": "" },
      { "name": "Freiburg", "link": "" }
    ],
    "Bayern": [
      { "name": "München", "link": "" },
      { "name": "Nürnberg", "link": "" },
      { "name": "Augsburg", "link": "" },
      { "name": "Regensburg", "link": "" }
    ],
    "Brandenburg": [
      { "name": "Potsdam", "link": "" }
    ],
    "Bremen": [
      { "name": "Bremen", "link": "" }
    ],
    "Hamburg": [
      { "name": "Hamburg", "link": "" }
    ],
    "Hessen": [
      { "name": "Frankfurt am Main", "link": "" },
      { "name": "Wiesbaden", "link": "" },
      { "name": "Darmstadt", "link": "" }
    ],
    "Mecklenburg-Vorpommern": [
      { "name": "Rostock", "link": "" },
      { "name": "Schwerin", "link": "" }
    ],
    "Niedersachsen": [
      { "name": "Hannover", "link": "" },
      { "name": "Braunschweig", "link": "" },
      { "name": "Oldenburg", "link": "" }
    ],
    "Nordrhein-Westfalen": [
      { "name": "Köln", "link": "" },
      { "name": "Düsseldorf", "link": "" },
      { "name": "Dortmund", "link": "" },
      { "name": "Essen", "link": "" },
      { "name": "Bonn", "link": "" }
    ],
    "Rheinland-Pfalz": [
      { "name": "Mainz", "link": "" },
      { "name": "Koblenz", "link": "" }
    ],
    "Saarland": [
      { "name": "Saarbrücken", "link": "" }
    ],
    "Sachsen": [
      { "name": "Dresden", "link": "" },
      { "name": "Leipzig", "link": "" },
      { "name": "Chemnitz", "link": "" }
    ],
    "Sachsen-Anhalt": [
      { "name": "Magdeburg", "link": "" },
      { "name": "Halle (Saale)", "link": "" }
    ],
    "Schleswig-Holstein": [
      { "name": "Kiel", "link": "" },
      { "name": "Lübeck", "link": "" }
    ],
    "Thüringen": [
      { "name": "Erfurt", "link": "" },
      { "name": "Jena", "link": "" },
      { "name": "Weimar", "link": "" }
    ]
  }
};
