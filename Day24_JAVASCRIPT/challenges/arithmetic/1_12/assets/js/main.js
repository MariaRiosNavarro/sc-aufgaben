// Mit arithmetischen Operatoren kann man nicht nur einfache Rechnungen durchführen,
//  sondern auch noch einen Schritt weitergehen.

// Schaue dir die Beispiele unter Hinweise an und versuche Folgendes umzusetzen:
// Inkrementierung und Dekrementierungen können wie folgt verwendet werden:
let zahl = 1;
zahl = zahl + 1;
zahl += 1;
// Verwende Inkrement-Operatoren:
zahl++;
console.log("increment: " + zahl);
// Verwende Dekrement-Operatoren:
zahl--;
console.log("dekrement: " + zahl);

//Multiplikation geht vor und so wird 5 * 10 zuerst durchgeführt:
let score = 5 + 5 * 10;
console.log("Ergebnis ohne Klammern(score)- 5+5*10= " + score);
// Du kannst Klammern() hinzufügen, um die Reihenfolge der Prioritäten zu ändern:
let score2 = (5 + 5) * 10;
console.log("Ergebnis mit klammern(score2)-> (5+5)*10= " + score2);
// Du kannst Werte auf Variablen addieren:
let score3 = 0;
score3 = score + 10;
console.log("Ergebnis (score3): " + score3);
// Hiervon gibt es eine verkürzte Version:
let score4 = 5;
score4 += 10;
console.log("Ergebnis: score4 += 10,  " + score);
