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
