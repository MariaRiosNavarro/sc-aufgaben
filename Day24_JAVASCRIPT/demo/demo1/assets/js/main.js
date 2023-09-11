// console.log("hallo, ich bin maria");
// ! -----  console.log() ---

// -- damit können wir uns sachen in der Konsole ausgeben lassen. Das werden wir viel zum Testen benötigen.
// -- Am Ende jedes Befehl muss immer ein Semikolon;

//! ---- Variablen ---

// -- werte werden in kasten gespeichert mit einen namen, die man manchmal überschreiben darf;

const location2 = "Barcelona";
let location1 = "Cologne";
let location3 = "Sevilla";
const location4 = "Berlin";
var location5 = "München";

console.log(location1);
console.log(location2);
console.log(location3);
console.log(location4);
console.log(location5);

// -- Die erste kann man ändern und neue Werte speichern
// -- const - variablen sollen für werte verwendet werden, die sich nicht ändert
// -- let - Variablen für Werte die ich später wieder ändern kann (zb spielstand)
// -- var - Varibale sind veraltet aber noch von den Browsern unterstützt

// * CONST - Ist ein wert unveränderbar sein sollte, sollte 'const' benutz werden. zb: const name = "Maria";

// * LET - sollte man ein wert sich verändern (zb Punkte eines Spieles), sollte "let" verwendet werden. zb: let score = 8 ;

let num1 = 33;
console.log("num1", num1);

let num2 = 55;

console.log("num2", num2);

// * wir können den name der variablen in der log integrieren.
// * Aber kann man aber auch destrukturieren und becomen das object

let num3 = 44;

console.log({ num3 });

// * andern werte. Wir bekommen erst den 33 und dann der 105, da JS von oben nach unten arbeitet.

num1 = 105;
console.log({ num1 });

const num4 = 343;

console.log({ num4 });

// * hier kann ich NICHT ein neue WERT geben, weil ein CONST ist
