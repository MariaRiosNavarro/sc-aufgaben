// # Window Object: representiert das geöffnete fensterr im Browser
// JS window greift auf das Browserfenster zu mit u.a. Breite /
// Hoehe des Viewports, Event und Timern zu

// console.log(window); //viele propierties, die zugreifen können // große Object

//Bekannteste oder häufig benutze Propierties:

// * innerHeight : werte in sin px, Browserzeile und devtools sind nicht inbegrifen

// console.log("innerHeight", window.innerHeight);

// * innerWidtht:

// console.log("innerWidth", window.innerWidth);

// * outerHeight & outerWidth //mit browserzeile und dev tools (muss nicht in dev tools der responsive/geräte ausgewählt werden (icon mit computer und handy), sonst erkennt man nicht die unterschied, da die gleiche ist)

// console.log(
//   "outerWidth",
//   window.outerWidth,
//   "vs innerWidth",
//   window.innerWidth
// );

// console.log(
//   "outerHeight",
//   window.outerHeight,
//   "vs innerHeight",
//   window.innerHeight
// );

// *location

// console.log("window.location", window.location);

// * domain
// console.log("window.location.host", window.location.host);
// location.host

// *Screen object  (px)

// console.log(window.screen);
// console.log("window.screen.height", window.screen.height);
// console.log("window.screen.width", window.screen.width);

// .height, .width, .availHeight (hoehe ohne Taskleiste, nur nutzbare bereich), geht auch für die breite

// console.log("availHeight", window.screen.availHeight);
// console.log("availWidth", window.screen.availWidth);

// #Window methoden

// -PopUps:

// *window.alert()
// window.alert("hey!");
// *window.prompt() (user kann was eintragen)
// window.prompt("Was machst du heute?");
// wir müssen in eine variable speichen, um an den eingabe zu greifen:

// let promptAnswer = window.prompt("Was machst du heute?");

// console.log(promptAnswer);//sehen der ergebnisse in der Console

// *window.opem können wir auf eine andere seite weiterleiten, wir können nicht mehr aud den zurückpfeil klicken
// default in anderen tab

// window.open("https://www.super-code.de");

// mit "_self" bleibt in fenster, mit "_blank" in andere

// window.open("https://www.super-code.de", "_blank");

// console.log("test");

//* window.onload

//wenn die Seite komplett geladen wurde, dann soll etwas passieren

window.onload = console.log("hello");

// *window.scrollTo(XAchsePixels, YAchsePixels)
// Wir haben den body zu 5000 px als height gegeben, damit
document.querySelector("#scroll").addEventListener("click", () => {
  window.scrollTo(0, 1000);
});

// * Andere möglichkeiten: https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
// * https://www.w3schools.com/jsref/prop_element_offsettop.asp

// * location.reload() reload der seite

document.querySelector("#reload").addEventListener("click", () => {
  window.location.reload();
});

// *Andere location weiterleiten, auch hier geht nicht zurückpfeil, dafür window history..

document.querySelector("#redirect").addEventListener("click", () => {
  window.location.replace("https://www.super-code.de");
});

// * window.history

console.log(window.history); //wir kriegen nicht die besuchten seiten aber können ein zurückbutton machen

document.querySelector("#back").addEventListener("click", () => {
  history.back();
});

// wenn jemand in unsere seite besucht und ein button für zurück click zb beim ein katalog

// # Javascript Time Events

//code nach zeit intervale

//Window Object ermöglich die Ausführung von Code zu bestimmten Zeitintervalen. Die Wichtigsten Methoden

//* setTimeout(Funktion, intervelInMilisekunden) führt eine funktion aus, nach dem an ein angegebene Anzahl von Milisekunden gewartet würde

const konsole = () => {
  console.log("hier was");
};

const konsoleAusgabeLoeschen = () => {
  console.clear();
};

// setTimeout(konsole, 2000);
// setTimeout(konsoleAusgabeLoeschen, 4000);

//* setInterval(Funktion, intervelInMilisekunden)

// const interval = setInterval(konsole, 2000);
// setInterval(konsoleAusgabeLoeschen, 10000);

document.querySelector("#interval-loeschen").addEventListener("click", () => {
  clearInterval(interval);
});

// *so kann man ein setIntervall in eine callback schreiben

// Neu

// setInterval(()=>{
//     console.log("hello");
// }, 1000)

// alt

// setInterval(function(){
//     console.log('Moin');
// }, 3000)

// !EventTimer

const zieldatum = new Date(2023, 10, 1); //1 nov nächste feiertag

const timeraktualisiert = () => {
  const heute = new Date();
  const differenzMilisekunden = zieldatum - heute; //milisek
  console.log(differenzMilisekunden);
  const verbleibendeTage = Math.floor(
    differenzMilisekunden / (1000 * 60 * 60 * 24)
  ); //milisekunden umrechenen in tage
  console.log(verbleibendeTage); //20 tage
  //Anzeige Aktualisieren
  document.querySelector(
    "#timer"
  ).innerHTML = `Noch ${verbleibendeTage} bis frei 🍀`;
};

// Um das zu automatieren dass immer läuft

timeraktualisiert();

setInterval(timeraktualisiert, 360000);
