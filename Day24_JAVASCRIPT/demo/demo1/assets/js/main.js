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

// * werte in variablen speichern

const addScore = num4 + num1;
console.log(`addScore ${addScore}`);
console.log({ addScore });

// !Datentypen

// ?String

console.log("HALLOOO");
// WIr können auch zahlen als String geben
console.log("10");

// Strings werden in der Konsole weiß angezeigt

// ?Numbers

// Numbers werden in der Konsole blau/lia ausgegeben

console.log(10);
console.log(10 + 4);
console.log("10" + "4"); // 104
console.log("10" + 4); // 104
// JS macht automatisch eine unwandlung zu string von 4 zu "4"
// + hat 2 bedeutungen für zeichenkettn oder nummern und JS fragt sich was ist was wir wollen,
// aber wennn wir *, / oder % benutzen, werden die numerische operationen gemacht, da nur diese bedeutung haben

let firstN = "maria";

let lastN = "Rios";

console.log(firstN + " " + lastN);

// ?Boolean -blau-lila

console.log(true);
console.log(false);

// ! ----- Konventionen

//selbserklärende Namen -nicht zu kurz, aber nicht zu lang
//niemals mit nummern anfangen
// !Case sensitive let a != let A

let a = 10;
let A = 100;
console.log({ a });
console.log({ A });

// schreiben in camelCase - erste buchstabe klein , die nechsten Größ

let meineErsteVariable;

//am bestens immer auf ENGLISCH

let myFirstVariable;

// andere möglichkeiten aber am bestens nicht benutzen: let my_first_variable; let MyFirstVariable;

//NIEMALS!!: let $myfirstvariable; let myfirstvariable;

//!String Concatiantion

const name1 = "bruce";
const name2 = "wayne";
let adress1 = "Gothan City";

console.log("ich bin " + name1 + " " + name2 + " und lebe in " + adress1);

// =

console.log(`ich bin ${name1} ${name2} und lebe im ${adress1}`);

//!aritmetisch

let x = 5;
let y = 3;
let z = 15;

//adieren

console.log(x + y);
//substrahieren
console.log(x - y);
//multiplizieren
console.log(y * x);
//dividieren
console.log(x / y);
//module _ Restwert
console.log(15 % 5); // 0
console.log(5 % 2); // 1
console.log(10 % 5); // 0
console.log(10 % 4); // 2
console.log(15 % 4); // 3

// - Increment ++ wird eins zum vorherigen hinzugefügt
let zahl1 = 3;

console.log({ zahl1 });
zahl1++;
console.log({ zahl1 });
zahl1++;
console.log({ zahl1 });
zahl1++;
console.log({ zahl1 });

//  -Decrement --

let zahl2 = 99;
console.log({ zahl2 });
zahl2--;
console.log({ zahl1 });
zahl2--;
console.log({ zahl1 });
zahl2--;
console.log({ zahl1 });

// ! Output mit consolo.log in der console, aber in HTML

//- document.write(); Können elemente in unsere HTML einfügen. (AM ENDER DER HTML HINZUGEFÜGT)

document.write("Hallo leute");

//--Wir können aber auch direkt html code schreiben

document.write("<h2 class='test' style='color:red'> hallo mit klasse </h2>");

// -window.alert() -POP UP

// window.alert("Achtung!!");

//- window.prompt() -POP UP INPUT

// window.prompt("Bitte deine name");

// Wir können alles in eine Variable speichern

// let windowInput = window.prompt("Name", "Vor- Nachname");

//2te wert ist platzhalter

// console.log({ windowInput }); //sehen was geschrieben worden ist in der console

//- window.confirm();

// window.confirm("Stimmen Sie die Cookies zu");

// let confirmStatus = window.confirm("Stimmen Sie die Cookies zu");
// console.log(confirmStatus);

//mit den wert können wir weiter arbeiten;
