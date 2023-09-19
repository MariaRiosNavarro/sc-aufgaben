console.log(
  "%c ===1_1 lenght propierty (!Method)===",
  "background:red; color:yellow"
);

let firstName = "Maria";
let lastName = "Rios Navarro";

console.log(firstName.length); //5
console.log(lastName.length); //12

let fullName = firstName + " " + lastName;
console.log(fullName.length); //18

console.log("%c ===1_2=== indexOf()", "background:red; color:yellow");

const txt =
  "How inappropriate to call this planet Earth, when clearly it is Ocean.";

console.log(txt.indexOf("h")); //27
console.log(txt.indexOf("Earth")); //38
console.log(txt.indexOf("Moon")); //-1 meaning not found

console.log("%c ===1_3=== search()", "background:red; color:yellow");

console.log("%c ===1_4=== slice()", "background:red; color:yellow");

console.log("%c ===1_7=== replace()", "background:red; color:yellow");

console.log("%c ===1_8=== toUpperCase()", "background:red; color:yellow");

console.log("%c ===1_9=== concat() ", "background:red; color:yellow");
