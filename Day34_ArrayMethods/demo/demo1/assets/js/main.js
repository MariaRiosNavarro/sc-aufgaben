// Primitive DataTyps : string, boolean etc...
// Arrys ist ein Object Data typ nicht Primitive

// Array gruppe von daten: Zusammenhängenden werten und gehört zu den datatypes object
// fehler unaufälliger mit const

const colors = ["red", "green", "yellow"];
console.log(colors);
// accesing array, mit hilfe des index
console.log(colors[0]);
console.log(colors[2]);
// neue werte

// keine gut practice.(unten)
colors[0] = "blue";
console.log(colors);
// so zu hinzufügen ist keine gut practice.
colors[3] = "gray";
console.log(colors);

// Obwohl die länge der array innen ändern, bleibt ein array, deswegen ist ok eine const

console.log(typeof colors); //object

// es können alle datentypen in einem array abgelegt werden
// Aber so ist nicht zu empfehelen, normalerweiser sind nicht so wild
const array = [
  42,
  "Isa",
  true,
  function sum(a, b) {
    return a + b;
  },
  undefined,
  null,
];

console.log(array[3]);

// use a function in ein array

let a = array[3](1, 2);

console.log(a);

// multidimensional arrays. Daten werden abgelegt wie eine tabelle

const classArray = [
  "Meli",
  "Isa",
  "Oli",
  "Maria",
  "Carina",
  "Andre",
  "Moti",
  "Steffi",
  "Steffen",
  "Yan",
];

const classOrder = [
  ["Yan", "Oli"],
  ["Isa", "Maria"],
  ["Carina", "Andre"],
  ["Moti", "Meli"],
  ["Steffi", "Steffen"],
];

console.log(classOrder);

// zusammenhängende werte in ordner, so holen wir werte von verschachtelte Arrays

console.log(classOrder[2][1]); //Andre

// ---ARRAY METHODS

//! Basic Methods

// !array.length -> number

let length = array.length;
console.log(length);

// AUFPASSEN length fängt von 1 an und Index von 0 an
// . Also wenn length 10 ist, der letzte index ist 9

// !array.indexOf()

console.log(classArray.indexOf("Moti")); //->number (6)

// #Typisch von Array

// # array.push(a); -> wert am ende hinzufügen

classArray.push("marzio");
console.log(classArray);

// #array.pop(); -> entferne am ende (und kann ich den wert benutzen, wenn ich speichere)

let lastvalue = classArray.pop();
console.log(classArray);
console.log(lastvalue);

// # array.shift();-> entfernen vorne (und kann ich den wert benutzen, wenn ich speichere)

let firstPerson = classArray.shift();
console.log(firstPerson);

// # array.unshift(), ->hinzufügen vorne

classArray.unshift("HAHA");
console.log(classArray);

// --

let emailArr = [
  "batman@batcave.gotham",
  "flash@superspeed.nyc",
  "C3PO@droids.com",
  "R2D2@droid.com",
  "steffen@super-code.de",
];

// ---

const emailInput = document.querySelector("#email");
console.log({ emailInput });
const output = document.querySelector("footer");

const emailCheck = () => {
  const email = emailInput.value;
  console.log(email);
  let findEmail = emailArr.indexOf(email);

  console.log({ findEmail });

  findEmail === -1
    ? (output.innerHTML = `${email} was Not found`)
    : (output.innerHTML = `${email} was found`);
};

// Anderen Metoden : split & join - Sind String Methoden,

// split- dass ein Array zuruck gibt

const text = "hallo heute lernen arrays";

console.log(text);
const textArray1 = text.split();
// console.log(textArray); //["hallo heute lernen arrays methoden"]

const textArray2 = text.split(""); //jede buchastabe
console.log(textArray2);

const textArray3 = text.split(" "); //der text wird durch die leerzeichen getreent
console.log(textArray3);

const text2 = "Hallo;ihr;lieben;wir;lernen";
const textToArr = text2.split(";"); //entfern die ;
console.log(textToArr);
const arrToText = textToArr.join(" "); //zusamenfügen mit ein leerzeichen verbinden
console.log({ arrToText });

// interessant un csv datein umzuwandeln

// zb:
//

const tabelle =
  "id;palettennummer;x-koordinate;y-koordninate;aktion;datum;uhrzeit 1;4711;1;2;auslagerung;31.10.2019;14:14 2;4800;3;4;einlagerung;31.10.2019:14:21 3;4801;6;1;einlagerung;31.10.2019;14:25";

let texttrennen = tabelle.split(";");
let newarray = texttrennen.join(" ");
console.log(newarray);
