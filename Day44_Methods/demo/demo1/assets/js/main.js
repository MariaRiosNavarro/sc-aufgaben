//# Date Object

//*Mit new Date() erstellen wir ein neues Date Object
// Wenn wir kein parameter geben, kriegen die Aktuelle Zeit Datum zurück
//seit 1.1.1970

let date1 = new Date();
console.log(date1);
console.log(typeof date1);
// ein object, alle string methoden  funktionieren NICHT : zb toLowercase

//* wenn wit Parameter mitgben, wird ein Object erstellt mit den durchgereichten Zeiten:

let date2 = new Date(1977, 3, 10, 16, 12, 57);
console.log(date2); //3 ist april_ wir fangen von 0 an, dann den tag, dann die uhr, min, und sec

//* wenn wir rechnen kriegen milisecunden

let date3 = date1 - date2;
console.log(date3); //1467....

// wir können es als string konvertieren

let date4 = date2.toString();
console.log(date4.toLowerCase());

let day = date4.slice(0, 4);
let month = date4.slice(4, 7);

console.log(day);
console.log(month);

//* toUTCString() - uhr in UTC (so wie in europa tag, monat, jahr)

let date5 = date2.toUTCString();
console.log("toUTCString()->", date5);

//* toLocalDateString - gibt ein Date to einer lokalisierten darstellung zurück (guck an dein computer rechner)

let date6 = new Date().toLocaleDateString();
console.log("toLocaleDateString()->", date6);

//* toLocalString - gibt ein Date to einer lokalisierten darstellung zurück
// Datum und Zeit
let date7 = new Date().toLocaleString();
console.log("toLocaleString()_>", date7);

// Daten von anderswo holen (uhrzeit) -> API oder nachrechnen, es gibt immer die gleiche zeitunterschied +2stunden, -2 etc.. Aber das ist fehler anfälliger, beeser ist Api

//* Milisecunden sein 1.1.1970 0:00

let date8 = new Date().getTime();
console.log("Date().getTime()->", date8);

//* getFullYear() - yahr

let date9 = new Date().getFullYear();
console.log("getFullYear()->", date9);

//* getMonth() - yahr

let date10 = new Date().getMonth();
console.log("getMonth()->", date10);

//* getDate() - Tag

let date12 = new Date().getDate();
console.log("getDate()->", date12); //

//* getDay() - Tag

let date13 = new Date().getDay();
console.log("getDay()->", date13); //0 Sonntag, 1 Montag, 2 Dienstag.. etc  (index)

//* getSecunde() - Tag

let date14 = new Date().getSeconds();
console.log("getSeconds()->", date14);

//*getMilliseconds() - Tag

let date15 = new Date().getMilliseconds();
console.log("getMilliseconds()->", date15);

// *Kann daten manipulierern
//* setDate() -Methode können wir das Tagesdatum einer bestimmte Date Object überschreiben

const monat = new Date();
monat.setMonth(1);
console.log(monat); //Fri Feb 10 2023 09:33:15 GMT+0100 (Mitteleuropäische Normalzeit) (also Februar)
monat.setDate(4);
console.log(monat); //Sat Feb 04 2023 09:36:14 GMT+0100 (Mitteleuropäische Normalzeit)
monat.setFullYear(1977);
console.log(monat); // Fri Feb 04 1977 09:37:00 GMT+0100 (Mitteleuropäische Normalzeit)
monat.setHours(0);
console.log(monat); //Fri Feb 04 1977 00:39:03 GMT+0100 (Mitteleuropäische Normalzeit)

// Man kann alles abändern setDay(), setYear()

//* Name von Wochentag rausbekomen
// - narrow nur eine buchstabe zb D.
// - short ->Di
// - lang ->Diesntag

let dayObj = new Date();
let weekDay = dayObj.toLocaleString("default", { weekday: "long" });
let weekDay2 = dayObj.toLocaleString("default", { weekday: "narrow" });

console.log(weekDay);
console.log(weekDay2);

// # Offnungszeiten anzeigen

const data = [
  { day: "Montag", time: "9:00-18:00" },
  { day: "Dienstag", time: "9:00-18:00" },
  { day: "Mittwoch", time: "9:00-15:00" },
  { day: "Donnerstag", time: "9:00-14:00" },
  { day: "Freitag", time: "9:00-17:00" },
  { day: "Samstag", time: "9:00-10:00" },
  { day: "Sontag", time: "Gechlossen" },
];

const out = document.querySelector(".out");

data.forEach((weekdayItem) => {
  //   hier haben dinamisch mit ternary die styles geändert
  out.innerHTML += `
<div class="${weekDay === weekdayItem.day ? "strong" : "light"}">
<h1>${weekdayItem.day}</h1>
<p>${weekdayItem.time}</p>
</div>
`;
});
