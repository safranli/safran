import csv

# Timestamp,Wochentag,Datum,Stadt,Ort,Google-Maps Link,Konzertname,Uhrzeit,Ersteller

# Use with caution! Date will be reversed, "Geschlossene Gesellschaft" has to be changed, ...

with open('events.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        Wochentag = row[1]
        Datum = row[2]
        Stadt = row[3]
        Ort = row[4]
        MapsLink = row[5]
        Konzertname = row[6]
        Uhrzeit = row[7]

        print('<div class="12u 12u(narrower) event">')
        print('<h3>' + Wochentag[0:2].upper() + ' ' + Datum + ' | ' + Stadt + '</h3>')
        print('<p><a target="_blank" href="' + MapsLink + '"><i class="fas fa-map-marker-alt fa-sm"></i>')
        print(Ort + '</a></p>')
        print('<p>' + Konzertname + ' | ' + Uhrzeit[0:5] + ' Uhr</p>')
        print('</div>')
        print()
