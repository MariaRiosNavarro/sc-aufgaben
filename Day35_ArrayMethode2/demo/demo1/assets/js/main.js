//- Anderen Arrays Mehoden

//  array.slice()--->kopiert das komplette array

const colors = ["red", "blue", "yellow"];

// ablagern, da wir eine kopie herstellen die ändern wollen

let copyColors = colors.slice();
console.log({ copyColors });

// start ist includiert, end punk excludiert

// !array.slice(start,end)->nimmt von start bis zum end index (dieser ist nicht drin)

let copyColors2 = colors.slice(1);
console.log("copyColors2", copyColors2);

let copyColors3 = colors.slice(1, 4);
console.log("copyColors3", copyColors3);

// !werte mit splice entfernen, ersetzen und/oder hinzufügen.. AUFPASSEN!! gelagert gibt ein anderen wert als direct angegeben.

// array.splice(start);
// array.splice(start, deleteCount); ->wenn ich werte weg machen will
// array.splice(start, deleteCount, item1, ...); ->wenn ich werte weg machen will und werte hinzufügen

const numbers = [10, 2, 3, 6, 7, 8, 5];

// console.log("log von numbers.splice(2)", numbers.splice(2));

// let copyNum = numbers.splice(2, 2, "sep");

// console.log("log von copyNum", copyNum);

console.log("numbers", numbers);

// !array.reverse()- kehrt werte in einem arrya um. Der erste Wert ist dann der letzte und der letzte dann der erste

const days = ["mon", "tues", "wed", "thurs", "fr"];
console.log(days.reverse());

// !array.sort() hier kann ich arrays sortiren

// utz standard sortiren mit https://www.torsten-horn.de/techdocs/ascii.htm (worte gut aber numer nein)
days.sort();
// console.log("sortierung text", days.sort());
// console.log("sortierung nummern", numbers.sort());

// Damit mit nummern funkrioniert brauchen ein callback

// // ascending
// function ascending(a, b) {
//   return a - b;
// }
// //descending
// function descending(a, b) {
//   return b - a;
// }
// // 10-2=8,  (2-3)= -1,

// console.log("mit callback funktion a-b", numbers.sort(ascending));
// // compareFN wird hier zur CallbackFN weil sort( als parameter genutz und aufgerufen)
// console.log("mit callback funktion b-a", numbers.sort(descending));

// wir können mit anonime funcion/schöner

// numbers.sort((a, b) => a - b);

// numbers.sort((a, b) => b - a);

// console.log(numbers);

// USE von slice um den erste array nicht verandern

let copy = numbers.slice();
copy.sort((a, b) => a - b);
console.log("numbers", numbers);
console.log("copy", copy);

// !ARRAY methoden , dass ein Loop darsellen .forEach() und .map()

// ! .forEach geht durch alle element, modifiziert und wiedergeben

// ! .map() genau so, modifiziert und wiedergeben aber erstellt ein neue array und  aber gibt/return diese

const numbers2 = [2, 4, 6, 8, 10];

numbers2.forEach((element) => console.log(element * 2));

const fruits = ["apple", "banana", "kiwi"];

fruits.forEach((singleFruits) => console.log(singleFruits));

//for euch gibt einzelne werte. dinamisch ausgeben

// beispiel mit gallerie

const gallery = document.querySelector("#gallery");

const picArray = [
  "https://plus.unsplash.com/premium_photo-1677101221533-52b45823a2dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
  "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
];

picArray.forEach(
  (singleImg) => (gallery.innerHTML += `<img src=${singleImg} alt="cat"/>`)
);

// so können wir daten in array hinzufügen ohne den code zu ändern. For euch gibt die inhalte

// ! .map erstellt ein neue array und gibt es zurück

console.log("numbers2", numbers2);
const modiNumbersArray = numbers2.map((elt) => elt * 2);
console.log("modiNumbersArray", modiNumbersArray);

// !in react sehr wichtig da react immer return werte braucht
