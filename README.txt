Location Insider v9 Complete
============================

Diese Version ist bewusst kompakt aufgebaut.

In den SharePoint-Ordner GlobalMap muessen nur diese Dateien:

1. index.html
   - Die eigentliche Karte / Anwendung.
   - Weltkarte und Deutschlandkarte sind direkt eingebettet.

2. location-insider-config.js
   - Diese Datei ist kuenftig deine Pflege-Datei.
   - Hier werden Laender, Bundeslaender, Staedte und Links gepflegt.

3. config.json
   - Backup / Vorlage der Konfiguration.
   - Wird von der Anwendung nicht zwingend benoetigt, hilft aber zur Uebersicht.

Optional:
4. README.txt
   - Diese Anleitung.

Alte Dateien koennen aus GlobalMap entfernt werden, z. B.:
- locations-data.js
- locations.json
- alte index.html-Versionen

Wichtig:
Wenn SharePoint die Datei location-insider-config.js nicht laedt, nutzt index.html automatisch die eingebauten Fallback-Daten. Dann funktioniert die Karte trotzdem, aber Aenderungen in der Konfigurationsdatei erscheinen nicht.

Pflege von Links:
In location-insider-config.js bei dem jeweiligen Land oder Bundesland den Wert link ergaenzen, z. B.
link: "https://friedrichswalde37.sharepoint.com/sites/Know-HowIntranet/SitePages/Sachsen.aspx"

Danach Datei speichern/ersetzen und index.html neu laden.
