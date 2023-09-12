// --- NEU

// !------COMPARATION/logische Operatoren____

// = zuweisung
// == gleiche werte
// === gleiche werte und typ

// console.log(3 === 3);
// console.log(3 == "3"); //true
// console.log(3 === "3"); //false
// console.log(3 == 5); //false
// console.log(3 == "three"); //false

// != NICHT GLEICHE WERT
// !== NICHT GLEICHE WERT UND DATENTYP
console.log(3 != 3); //false
console.log(3 !== "3"); //false
console.log(3 !== "3"); //true

// > größer als
// < kleiner als
// >= großer gleich
// <= kleine gleich

// console.log(1 > 2); //false
// console.log(3 >= 3); //true
// console.log(5 <= 10); //true
console.log("B" > "A"); // true-> A ist in JS kleiner als B und so weiter
console.log("B" > "a"); // false->klein buchastaben sind großer als die Großer in JS

// element selektieren

// .getElementById();
// id in HTML : main-headline

const mainHeadline = document.getElementById("main-headline");
console.log({ mainHeadline });
console.log(mainHeadline.innerHTML);
console.log(mainHeadline.clientWidth);
console.log(mainHeadline.baseURI);

// Wir bekomment den Inhalt des Elementes zurück
//  -querySelector() können elemente Ansprechen  mit "#" ids "." klassen, oder elemente "h2", "p", etc

const secondHeadline = document.querySelector("#second-headline");
const secondHeadline2 = document.querySelector(".test");
const secondHeadline3 = document.querySelector("h2");

// alle 3 sind der gleiche wert

console.log(secondHeadline);
console.log(secondHeadline2);
console.log(secondHeadline3);

// -  .innerHTML   inhalte überschreiben

mainHeadline.innerHTML = "New Text";
// wenn ich ein + gebe wird nicht überschrieben, sondern bleibt der neue wert hinzu

mainHeadline.innerHTML += "<br> New Line!";

// ! .style

mainHeadline.style.color = "red";

mainHeadline.style.backgroundColor = "yellow";
mainHeadline.style.fontSize = "20px";

//document.write nur am ende des documents. Aber mit document.write kann ich auf existierende elemente zugreifen

const divContainer = document.querySelector(".div");
console.log(divContainer);
divContainer.innerHTML = "<p>ein p hinzugefügt von js</p>";
divContainer.innerHTML += "<h4>ein neue H4 hinzugefügt von js</h4>";

// divContainer.innerText += "<h4>ein neue H4 hinzugefügt von js</h4>";
// reagiert nicht aug h4, nur text mit den schriftliche tags zu sehen. Reagiert nicht auf code

// * Unterchiede document.write() vs .innerHTML
// document.write immer am ende
// mit .innerHTML können gezielt Elemente ansprechen und deren Inhalte verändern/überschreiben

// !FUNCTIONEN

function sayHi() {
  console.log("hola");
}

sayHi();

console.log("A:----console log drin------");

function addNumbers(a, b) {
  return console.log(a + b);
}

addNumbers(1, 5); //console.log drin

console.log("B:----console log draußen-----");

function addNumbers2(a, b) {
  return a + b;
}

console.log(addNumbers2(2, 3));

console.log("C:-------Ohne console log");

function addNumbers3(a, b) {
  return a + b;
}
addNumbers3(5, 6);

console.log("-------Ohne console log kriegen kein ergebnis, trotz return");

console.log("D:------ohne return mit console.log drin");

function addNumbers4(a, b) {
  console.log(a + b);
}

addNumbers4(5, 6);

console.log("E------ohne return mit console.log draupen");
function addNumbers5(a, b) {
  a + b;
}
console.log(addNumbers5(5, 6));

// -----------

// parameter: platzhalter für die werte

function addMe(num1, num2) {
  console.log(num1 + num2);
}

addMe(2, 5);
addMe(20, 30);
addMe("martha", " victor");

// ein wert eine funktion in html zeigen

// möglichkeit1

function multiplyMe(num1, num2, num3) {
  console.log(num1, num2, num3);
  let result = num1 * num2 * num3;
  divContainer.innerHTML += "<p>" + result + "</p>";
}

multiplyMe(1, 2, 5); //wir sehen in html der ergebniss, bevozugte version, da wir damit die werte weiterverarbeiten können mit "result".

// möglichkeit2

function multiplyMe2(num1, num2, num3) {
  console.log(num1, num2, num3);
  divContainer.innerHTML += "<p>" + num1 * num2 * num3 + "</p>";
}

multiplyMe2(2, 3, 1); //wir sehen in html der ergebniss

let numA = 7;
console.log({ numA });
multiplyMe(numA, 1, 2);
// man kann mit variablen/parameter und werten zusamen arbeiten
