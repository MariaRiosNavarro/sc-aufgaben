//# ==== Window Object ======
// das window object repraesentiert das geoeffnete Fenster im Browser
// JS window greift auf das Browserfenster zu mit u.a. Breite / Hoehe des Viewports, Events und Timern zu

//console.log(window);

// zB ⬇️

// * innerHeight
// Werte in sin px
// Browserzeile und Devtools sind NICHT einbegriffen

//console.log("innerHeight", window.innerHeight);

// * innerWidht
// Werte in sin px
// Browserzeile und Devtools sind NICHT einbegriffen

//console.log("innerWidth", window.innerWidth);

// * outerHeight
// Groesse des Fensters mit allen Elementen wie Borwoserzeile und DevTools
//console.log("outerHeight", window.outerHeight);

// * outerWidth
// Groesse des Fensters mit allen Elementen wie Borwoserzeile und DevTools
//console.log("outerWidth", window.outerWidth);

// * location
// die URL - Adresse der aktuellen Seite
//console.log(window.location);

// * so bekommen wir die Domain zurueck
//console.log(window.location.host);

// * so bekommen wir den Pfad zurueck
//console.log(window.location.pathname);

// - Screen Object
// * screen
// Das Screen Object befindet sich im Window Object. Es gibt uns Informationen ueber den Bildschirm/ Monitor , auf dem das Browserfenster geoeffnet ist

//console.log(window.screen);

// * screen.height
// wir bekommen die Hoehe zurueck in px-> gesamte Hoehe mit Taskleiste
//console.log("screen height", window.screen.height);

// * screen.width
// wir bekommen die Breite zurueck in px -> gesamte Breite mit Taskleiste
//console.log("screenWidth", window.screen.width);

// * screen.availHeight
// wir bekommen die Hoehe des Screens OHNE Taskleiste zurueck, also nur den nutzbaren Bereich
//console.log("availHeight", window.screen.availHeight);

// * screen.availWidth
//wir bekommen die Breite des Screens zurueck -> nur den nutzbaren Bereich
//console.log("availWidth", window.screen.availWidth);

//! ---- Window Methoden ------

// * window.alert()
// es oeffnet sich ein Popup in dem ein Text steht
//window.alert("Hallo Partypeople");

// * window.promt()
//es oeffnet sich ein Popup wo der User etwas eintragen kann
//window.prompt("Was machst du heute?");

// * um auf die Texteingabe zugreifen zu koennen muessen wir es in einer Variablen speichern
//let promtAnswer = window.prompt("Und was macht du heute wirklich?");
//console.log(promtAnswer);

// * window.open
// mit window.open koenen wir auf eine andere seite weiterleiten
// Achtung: wir koenenn nicht mehr auf den zurueckpfeil klicken
// default wird die Seite immer in einem neuen Tab geoeffnet

//window.open("https://www.super-code.de");

//- oeffnet im selben Tab
//window.open("https://www.super-code.de", "_self");

//- oeffnet im neuen Tab
//window.open("https://www.super-code.de", "_blank");

// * window.onload
// wenn die Seite komplett geladen wurde, dann soll etwas passieren
//window.onload = console.log("Die Seite wurde geladen");

// * window.scrollTo
// mit window.scrollTo koennen wir zu einem bestimmten Punkt auf der Seite scrollen

document.querySelector("#scroll").addEventListener("click", () => {
  // 1. Wert: px auf der x Achse
  // 2. Wert: px auf der y Achse
  window.scrollTo(0, 1000);
});

// * location.reload()
// damit koennen wir die aktuelle Seite neu laden lassen

document.querySelector("#reload").addEventListener("click", () => {
  window.location.reload();
});

//* loacation.replace()
// wir koennen auf eine andere URL weiterleiten

document.querySelector("#redirect").addEventListener("click", () => {
  window.location.replace("https://www.super-code.de");
});

//* window.history
console.log(window.history);
document.querySelector("#back").addEventListener("click", () => {
  history.back();
});

// * Infortmation
// - mit window.open wird die Historie gelöscht, wir können history.back() nicht verwenden
// - mit window.location.replace() bleibt die Historie bestehen

// # === JS Timing Events =====
// Window Object ermoeglicht die Ausfuehrung von Code zu bestimmten Zeitinervallen

// die beiden wichtigsten Methoden, die wir in JS verwenden sind

// - setTimeout(Funktion, Millisekunden)
// fuehrt eine Funktion aus, nachdem eine angegebene Anzahl von Millisekunden gewartet wurde

// - setInterval(Funktion, Millisekunden)
// gleich wie setTimeout(), wiederholt jedocj die Ausfuehrung der Funktion kontinuierlich

const konsolenAusgabe = () => {
  console.log("Hier steht was in der Console");
};

const konsolenAusgabeLoeschen = () => {
  console.clear();
};

// - Wert 1: welche funktion soll ausgefuehrt werden
// - Wert 2: Nach wievielen Millisekunden soll die Funktion ausgefuehrt werden
//setTimeout(konsolenAusgabe, 2000); // hier wird nach 2 Sek. etwas in die console geschrieben
//setTimeout(konsolenAusgabeLoeschen, 4000); // nach 4 Sek. wird die console geloescht

// * setInterval
// wir koenenn eine Funktion in einem bestimmten Intervall immer wieder ausfuehren lassen
//setInterval(konsolenAusgabe, 1000);

// * clearInterval
//loescht ein Interval wieder
//- WICHTIG: wir muessen das setInterval in einer Variablen speichern, damit wir das spaeter wieder loeschen koennen

//const interval = setInterval(konsolenAusgabe, 1000);

document.querySelector("#interval-loeschen").addEventListener("click", () => {
  clearInterval(interval);
});

// * so kann man ein setInterval in einer Callback Fkt. schreiben

// Neu
// setInterval(() => {
// 	console.log("Henlooo");
// }, 1000);

// Alt
// setInterval(function () {
// 	console.log("Moin Moin");
// }, 1000);

//! "Event Timer"

const zieldatum = new Date(2023, 10, 1); // 1. Nov

const timerAktualisieren = () => {
  const heute = new Date();
  const differenz = zieldatum - heute; // Millisek. ze den beiden Daten
  //console.log(differenz);
  const verbleibendeTage = Math.ceil(differenz / (1000 * 60 * 60 * 24)); // millisekunden wieder umrechnen in Tage
  //console.log(verbleibendeTage);

  //Anzeige aktualisieren
  document.querySelector(
    "#timer"
  ).innerHTML = `Noch ${verbleibendeTage} Tage bis zum naechsten Feiertag 🥳`;
};

timerAktualisieren();

setInterval(timerAktualisieren, 3600000); //stuendlich wieder ausfuehren
