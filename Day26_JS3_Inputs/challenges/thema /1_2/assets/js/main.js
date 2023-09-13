// version one

function calculate() {
  const year = Number(document.querySelector("#year").value);
  console.log(typeof year);
  const old = 2023 - year;
  const output = document.querySelector("#output");
  output.innerHTML = old;
}

// version two

// !function calculate2() {
//   const dateInput = document.querySelector("#date").value;
//   console.log({ dateInput });

//   // Das eingegebene Datum in ein Date-Objekt parsen
//   const date = new Date(dateInput);

//   // Aktuelles Datum
//   const today = new Date();

//   // Die Differenz zwischen den beiden Datumswerten in Millisekunden berechnen
//   const differenceInMilliseconds = today - date;

//   // Die Differenz in Jahren, Monaten, Tagen, Stunden, Sekunden und Millisekunden aufteilen
//   const millisecondsPerSecond = 1000;
//   const millisecondsPerMinute = millisecondsPerSecond * 60;
//   const millisecondsPerHour = millisecondsPerMinute * 60;
//   const millisecondsPerDay = millisecondsPerHour * 24;
//   const millisecondsPerMonth = millisecondsPerDay * 30.44; // Durchschnittliche Anzahl von Tagen pro Monat
//   const millisecondsPerYear = millisecondsPerDay * 365.25; // Durchschnittliche Anzahl von Tagen pro Jahr

//   const years = Math.floor(differenceInMilliseconds / millisecondsPerYear);
//   const remainingMilliseconds1 = differenceInMilliseconds % millisecondsPerYear;

//   const months = Math.floor(remainingMilliseconds1 / millisecondsPerMonth);
//   const remainingMilliseconds2 = remainingMilliseconds1 % millisecondsPerMonth;

//   const days = Math.floor(remainingMilliseconds2 / millisecondsPerDay);
//   const remainingMilliseconds3 = remainingMilliseconds2 % millisecondsPerDay;

//   const hours = Math.floor(remainingMilliseconds3 / millisecondsPerHour);
//   const remainingMilliseconds4 = remainingMilliseconds3 % millisecondsPerHour;

//   const minutes = Math.floor(remainingMilliseconds4 / millisecondsPerMinute);
//   const remainingMilliseconds5 = remainingMilliseconds4 % millisecondsPerMinute;

//   const seconds = Math.floor(remainingMilliseconds5 / millisecondsPerSecond);
//   const milliseconds = remainingMilliseconds5 % millisecondsPerSecond;

//   console.log(
//     `${years} Jahre, ${months} Monate, ${days} Tage, ${hours} Stunden, ${seconds} Sekunden, ${milliseconds} Millisekunden`
//   );
// }

// !Erklärungen von calculate2():

// const jetzt = new Date(); // Erstellt ein Date-Objekt, das den aktuellen Zeitpunkt darstellt
// console.log(jetzt); // Gibt das aktuelle Datum und die Uhrzeit aus

// const bestimmtesDatum = new Date("2023-09-13"); // Erstellt ein Date-Objekt für ein bestimmtes Datum
// console.log(bestimmtesDatum); // Gibt das spezifische Datum aus

// const benutzerDatum = new Date(2023, 8, 13); // Erstellt ein Date-Objekt für ein benutzerdefiniertes Datum (Jahr, Monat, Tag)
// console.log(benutzerDatum);

//  Math.floor() ist eine eingebaute JavaScript-Funktion, die dazu verwendet wird,
//  eine Dezimalzahl auf die nächstkleinere ganze Zahl (Ganzzahl) abzurunden.
//  Wenn du beispielsweise Math.floor(3.9) aufrufst, erhältst du 3
