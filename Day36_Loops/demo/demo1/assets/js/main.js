// Loops: in sich widerholendes prozess bis en bestimmtes punkt

// for loop und for of

// --- For Loop

//  - for (expresion1(start/before); expresion2(conditional); expresion3(wie das prozes läuft/steps/after)){
//  -   //code
//  -  }

// console.log("test");

// for (let i = 0; i < 5; i++) {
//   console.log(`lop ${i}`);
// }

// -!expresion1: Eine von uns definierte Varriable,
//  die eine startwert beinhaltet.
//  Diese wird nur zum starten des
//   loops angerufen;

// -!expresion2: beinhaltet eine conditional: NICHT VERGESSEN-sonst infinity loop!!
//  und wird vor JEDEM ausführen des codeblocks
//  in den {}-klammern geprüft.

//-!expresion 3: Diese wird benötigt um
// die am anfang definierte Variable mit en Startwert
//  zu verändern, zb hoch- oder ruterzahlen.
//   Diese wird nach jedem ausführen des Codeblocks
//    in den {}-Klammern

// for (let i = 0; i < 5; i++) {
//   console.log(`lopB ${i + 1}`);
// }

const numbers = [2, 4, 6, 8, 10];

console.log("length", numbers.length);

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}

console.log("%c---AUFGABE1---", "background-color: lightgreen; color: black");
// Aufgabe1 5 mal 8 seterne

for (let i = 0; i < 5; i++) {
  console.log(`****${i}****`);
}

console.log("%c---AUFGABE2---", "background-color: lightgreen; color: black");

// 5 bis 8 hochzahlen erste ist 5

for (let i = 5; i <= 9; i++) {
  console.log(i);
}

console.log("%c---AUFGABE3---", "background-color: lightgreen; color: black");

for (let i = 50; i >= 45; i--) {
  console.log(i);
}

for (let i = 0; i < 6; i++) {
  let spaces = " ".repeat(6 - i); // Leerzeichen vor den Sternen
  let stars = "*".repeat(i * 2 + 1); // Sterne
  console.log(spaces + stars);
}

for (let i = 0; i < 7; i++) {
  let stars = "*".repeat(i);
  console.log(stars);
}

// andere metode
let startbase = "";

for (let i = 0; i < 7; i++) {
  startbase += "*";
  console.log(startbase);
}

console.log("%c---AUFGABE5---", "background-color: lightgreen; color: black");

for (let i = 0; i < 3; i++) {
  let stars = "";
  for (let j = 0; j < 5; j++) {
    stars += "*";
    console.log("j", j, stars, "end");
  }
  //   console.log(i, stars);
}
// start muss drin sein sonst wird hinzugefügt, also in cada durchgang kein 20 sonder 40 und so weiter

// wo den log ist, sehen wir den ganzen prozess, wenn nicht nur das ende

// ! FOR OF

// kurs & bundig
// kann über alles iterieren was iterierbar ist, zb ein string

// for each was eine reine array methode ist

const numbersArr = [1, 2, 3, 4, 5];

numbersArr.forEach((elt) => console.log(elt));

// for of loop, kann über ein array gehen, sowie über eine string und vermeidet infinities

for (const i of numbersArr) {
  console.log(i);
}

// die können mit string auch funktioniert. Also forof braucht keine condition, geht so lange wie den text, array oder was es ist, wenn ich spezifische ist brauche for loop

let text = "hello";

for (const element of text) {
  console.log(element);
}

// Aufgabe - verdopple die zahlen aus den array mit allen methoden

const num = [10, 20, 30];

for (let i = 0; i < num.length; i++) {
  console.log(num[i] * 2);
}

for (const i of num) {
  console.log(i * 2);
}

// ARRAY methoden

num.forEach((elt) => console.log(elt * 2));

const doble = num.map((n) => n * 2);
console.log(doble); //ARRAY as result
