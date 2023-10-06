let edelMetallPreise = [
  { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
  { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
  { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
  { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
  { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
  { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
  { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
  { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
  { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];

let metalNameArray = [];
let preiseArray = [];
let changeArray = [];

// Alle arrays af einmal erstellen

edelMetallPreise.forEach((metal) => {
  let metalName = metal.name;
  metalNameArray.push(metalName);
  let preise = metal.preiseGramEuro;
  preiseArray.push(preise);
  let change = metal.veraenderung;
  changeArray.push(change);
});

console.log("///////////Namen/////////////");

metalNameArray.map((item, index) => {
  console.log(item, "index->", index);
});

console.log("///////////preise/////////////");

preiseArray.map((item, index) => {
  console.log(item, "index->", index);
});

console.log("///////////change/////////////");

changeArray.map((item, index) => {
  console.log(item, "index->", index);
});

console.log("///////////preise >50/////////////");

preiseArray.filter((item) => (item > 50 ? console.log(item) : ""));

//---------////////table/////////////

const table = document.createElement("table");
table.style.margin = "4rem";
table.style.outline = "9px double green";
document.body.children[1].appendChild(table);

//--------/////////Extract Keys////////////

let titles = [];

// in allen objecten von dem array
for (let i = 0; i < edelMetallPreise.length; i++) {
  // sucht alle keys
  for (const key in edelMetallPreise[i]) {
    // wenn die key NICHT in den array titles ist,
    // füge die hinzu, ansonsten macht nicht
    !titles.includes(key) ? titles.push(key) : "";
  }
}

//---------////////header der table///////////

titles.map((title) => {
  let th = document.createElement("th");
  table.appendChild(th);
  th.style.outline = "3px solid gray";
  th.style.padding = "1rem";
  th.textContent = title;
});

// ----------- Zellen---

let row = edelMetallPreise.forEach((metal) => {
  // --- Lang Version
  //   let metalName = metal.name;
  //   let preis = metal.preiseGramEuro;
  //   let change = metal.veraenderung;
  //   let tr = document.createElement("tr");
  //   table.appendChild(tr);
  //   let thName = document.createElement("td");
  //   thName.style.border = "1px solid gray";
  //   let thPreis = document.createElement("td");
  //   thPreis.style.border = "1px solid gray";
  //   let thChange = document.createElement("td");
  //   thChange.style.border = "1px solid gray";
  //   tr.appendChild(thName);
  //   tr.appendChild(thPreis);
  //   tr.appendChild(thChange);
  //   thName.textContent = metalName;
  //   thPreis.textContent = preis;
  //   thChange.textContent = change;
  // --- Compact Version
  let tr = document.createElement("tr"); //row erstellen
  table.appendChild(tr); //zum  table hintufügen
  for (const key in metal) {
    // von jede value des Objects
    const value = metal[key];
    // wir  machen eine zelle
    let td = document.createElement("td");
    // wir fügen diese zelle an den row von oben
    tr.appendChild(td);
    // wir geben der value
    td.textContent = value;
    // styles
    td.style.border = "1px solid gray";
  }
});

// #ELISAS VERSION:

// Erstelle ein Array aller Namen der Edelmetalle

// const allNames = [];
// edelMetallPreise.map(elt => allNames.push(elt.name));

// Erstelle ein Array aller Preise in Euro pro Gramm
// const allPreise = [];
// edelMetallPreise.map(elt => allPreise.push(elt.preiseGramEuro));

//Preise filtern
// console.log(
// 	"Edelmetalle über 50 Euro:",
// 	allPreise.filter(elt => elt > 50),
// );

// Erstelle ein Array aller Veraenderungen
// const allVeraenderungen = [];
// edelMetallPreise.map(elt => allVeraenderungen.push(elt.veraenderung));

// Ziehe die Schlüssel (Keys) aus dem ersten Objekt
// const keys = Object.keys(edelMetallPreise[0]);
// console.log("Keys:", keys);

// Erstelle eine HTML-Tabelle mit den Schlüsseln als Spaltenüberschriften
// const table = `<table>
//     <tr>
//         <th>${keys[0]}</th>
//         <th>${keys[1]}</th>
//         <th>${keys[2]}</th>
//     </tr>
// </table>`;

// Füge die Tabelle in den Body des Dokuments ein
// document.body.insertAdjacentHTML("afterbegin", table);

// Iteriere über die Edelmetall-Objekte und füge sie als Zeilen in die Tabelle ein
// edelMetallPreise.forEach(elt => {
// 	const tablerow = `<tr>
//         <td>${elt.name}</td>
//         <td>${elt.preiseGramEuro}</td>
//         <td>${elt.veraenderung}</td>
//     </tr>`;

// Hier füge ich die Zeile zur Tabelle hinzu
// 	document.body.children[0].children[0].insertAdjacentHTML(
// 		"beforeend",
// 		tablerow,
// 	);
// });

//! WICHTIGER HINWEIS :
// - In meinem Beispiel habe ich `insertAdjacentHTML`
// anstelle von `appendChild` verwendet, um HTML-Inhalte
// zu einem `table`-Element hinzuzufügen. Dies liegt daran,
// dass `insertAdjacentHTML` dazu dient, HTML-Text in ein
// DOM-Element einzufügen, während `appendChild` verwendet
// wird, um ein vorhandenes DOM-Element als Kind zu einem
// anderen DOM-Element hinzuzufügen. Es gibt einen
// entscheidenden Unterschied zwischen diesen beiden Methoden:

// - `insertAdjacentHTML`: Diese Methode erwartet eine
// Zeichenfolge mit HTML-Tags und fügt diese Tags in das
// DOM-Element ein. Sie ermöglicht die Einfügung von
// HTML-Text an verschiedenen Stellen innerhalb des
// Elements, wie "beforebegin", "afterbegin", "beforeend"
// und "afterend". In meinem Beispiel habe ich "beforeend"
// verwendet, um die `tablerow` am Ende der Tabelle hinzuzufügen.

// - `appendChild`: Diese Methode erwartet ein
// vorhandenes DOM-Element und fügt dieses Element als
// Kind zu einem anderen DOM-Element hinzu. Normalerweise
// wird sie verwendet, um DOM-Elemente hinzuzufügen,
//  nicht jedoch HTML-Text.

// - Da ich HTML-Text (die `tablerow`)
// in ein `table`-Element einfüge,
// ist `insertAdjacentHTML` die geeignete Methode dafür.
// Wenn ich stattdessen `appendChild` verwendet hätte,
// müsste ich zuerst DOM-Elemente für `table`,
// `tr` und `td` erstellen und dann die
// entsprechenden Inhalte zu diesen DOM-Elementen
// hinzufügen,bevor ich sie mit `appendChild`
//  der Tabelle hinzufüge.
//!Komentar von mir, ich habe mit AppendChild gemacht und konnte ohne Inhalt hinzufügen?!,
// !DIE TABELLE  IST AM ENDE SICHBAR??!

// - In meinem Fall bietet `insertAdjacentHTML`
// eine einfachere Möglichkeit, den HTML-Text
// (die `tablerow`) der Tabelle hinzuzufügen,
//  ohne zusätzliche DOM-Elemente manuell
//  erstellen zu müssen.
