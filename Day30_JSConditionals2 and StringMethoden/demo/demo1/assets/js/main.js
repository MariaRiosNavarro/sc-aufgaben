// #switch

let zahl = 1; //(mit break geht nicht weiter)

switch (zahl) {
  case 1:
    console.log("Die Zahl ist 1");
    break;
  //nach jeden Case brauchen IMMER ein break,
  // sonst geht weiter, egal es stimmt oder nicht
  case 2:
    console.log("Die Zahl ist 2");
    break;
  case 3:
    console.log("Die Zahl ist 1");
    break;
  default:
    console.log("Die Zahl ist nicht 1,2 oder 3");
}

// Beispiel wie man evt. den break nicht brauchen:
// Wenn den gleichen code für die fälle ausgeführt werden soll
// let benutzerRolle = "Admin";

// switch (benutzerRolle) {
//   case "Admin":
//     console.log("du hast alle rechte“);
//   case "Moderator":
//      console.log("du hast alle rechte“);
//     break;
//   case "Benutzer":
//     console.log("Als Benutzer können Sie Beiträge lesen und kommentieren. Rechte limitiert");
//     break;
//   default:
//     console.log("Bitte melden sich an.");
// }

// -Frucht raten

// -Wochentag vs Wochenende

let day = "Montag";

switch (day) {
  case "Montag":
  case "Dienstag":
  case "Mittwoch":
  case "Donnerstag":
  case "Freitag":
    console.log("Es ist Wochentag");
    break;
  case "Samstag":
  case "Sonntag":
    console.log("Es ist Wochenende");
    break;
  default:
    console.log("Ungültige Wert");
}

let num = 300;

// funktioniert nicht (wenn mann 300 gebe erkennt es nicht),
// deswegen muss man dass der case die true wert sucht
// also nicht switch(num) sondern switch(true)

switch (true) {
  case num > 50:
    console.log("--Zahl ist großer als 50");
    break;
  case num < 50:
    console.log("--Zahl ist kleiner als 50");
    break;
  default:
    console.log("--Zahl ist 50");
    break;
}

// #Ternary Operator

console.log("%c ===Ternary Operator===", "background:red; color:yellow");

let hungry = false;
hungry
  ? console.log("Ich habe Hunger") //true
  : console.log("Ich habe kein Hunger"); //false

// !WIr brauchen IMMER ein alternativ wert zu true,
// !egal welche

// hungry? console.log('ich habe Hunger'): "";
// hungry? console.log('ich habe Hunger'): null;
// hungry? console.log('ich habe Hunger'): undefined;

// -check num

let zahl2 = 5;

// Ternary in einer Varible

let result =
  zahl2 >= 5 ? "Ja, ist größer als 5 oder  5" : "Nein, ist nicht Großer als 5";

console.log(result);

// #Template Literal

console.log("%c ===Template Literal===", "background:red; color:yellow");

let firstName = "John";
let lastName = "Doe";
let city = "Los Angeles";
let satz = firstName + lastName + " ist aus " + city;

// mit template literal

let newSatz = `${firstName} ${lastName} ist aus ${city}`;

console.log("newSatz");

// #String Methoden

let curryString = "Hallo leute ich heiße Maria. Maria geht es gut ";
document.write(curryString);

// (leerzeichen haben auch index)

// Index startet immer bei 0 . In dem beispiel H ist index 0;

//  * concat() verbindet 2 strings
let moreText = "Ich bin mehr text";
console.log(curryString.concat(moreText));
console.log(curryString.concat(" neu text auch"));
console.log(curryString.concat(` ${moreText}`));

//  * chartAt() liefert die das jeweilge Character zurück, das in einer Zeichenkette an einer bestimmte position ist. Start bei 0

console.log(curryString.charAt(1)); //a

// * includes() schaut  ob das wort/zeichen in der String vorkommt.

console.log(curryString.includes("hallo")); //false
console.log(curryString.includes("Hallo")); //true

// * indexOf() sucht ab welchen Index das i das erste mal vorkommt (leerzeichen werden mitgezählt)

console.log(curryString.indexOf("leute"));
console.log(curryString.indexOf("H"));
console.log(curryString.indexOf("geht"));

// optional, 2te parameter, ab wo er suchen soll
console.log(curryString.indexOf("Maria")); // 22
console.log(curryString.indexOf("Maria", 23)); // 29

// * lenght gibt mir die länge eines strings zurück
// ist eine propierty, kein methode, deswegen keine ()

console.log(curryString.length); //47

// * replace() ersetzt ein teil von einem String und gibt wieder zurück

// console.log(curryString.replace("Maria", "Steffi"));

// * replaceAll() hat nicht alles ersetz nur der ertse, deswegen gitb es replaceAll

console.log(curryString.replaceAll("Maria", "Steffi"));

// alternativ:

// console.log(curryString.replace(/Maria/g, "Steffi"));

// Interessant: regex for password. Mit regex kann man alle string methoden ersetzen aber sehr complex.

// * slice() schneidet bis der eingegebene Index alle Zeichen und gibt den rest zurück

console.log(curryString.slice(5));

console.log(curryString.slice(2));

console.log(curryString.slice(10));

// schneidet uns index 6 - 11

console.log(curryString.slice(6, 11));

// * substring() schneidet

console.log(curryString.substring(5));
console.log(curryString.substring(6, 11));
// so wie slice, aber die unterschied ist , mit slice kann ich mit -werte arbeiten

console.log(curryString.slice(-5));
console.log("sub", curryString.substring(-5)); //funktioniert nicht, kommt der gleiche string

// * toLowerCase() & toUpperCase() wandelt in den entsprechende Buchstaben;

console.log(curryString.toUpperCase());

// * string() zahlen in string unwandeln

let zahl3 = 555;
console.log(typeof zahl3);
let StringZahl = String(zahl3);
console.log(typeof StringZahl);

// # RETURN
console.log("%c ===RETURN===", "background:red; color:yellow");
// !Damit kann ich mit den wert eine funktion weiter arbeiten;
// !return beendet die funktion
// !BS!

function returnSomething() {
  return console.log("Hello Welt");
  console.log("Hello das ist nicht erreichbar");
}

returnSomething();

// !BSP2

function gehtNicht(a, b) {
  let outputGehtNicht = a + b;
  // hier kann ich den Output sehen aber ist in der function gefangen
  console.log(outputGehtNicht);
}

gehtNicht(5, 6);
// console.log({ outputGehtNicht }); //outputGehtNicht uncaucgt, undefine

// Hier kann ich den Wert aus der funktion rausgeben

function add(a, b) {
  let outputAdd = a + b;
  return outputAdd;
}
//hier speichern wir den wert in einer neuen Variable zum weiter verarbeiten
let returnOutput = add(3, 5);
console.log({ returnOutput });

// ! bSP3 check gerade/ungerade

let numA = 4;

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

let resultA = isEven(numA)
  ? `die Zahl ${numA} is gerade`
  : `die Zahl ${numA} is ungerade`;

console.log({ resultA });
