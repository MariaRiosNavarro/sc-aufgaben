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

let txt2 =
  "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

console.log(txt2.search(";")); //34
console.log(txt2.search("green")); //6
console.log(txt2.search("blue")); //-1 meaning not found

console.log("%c ===1_4=== slice()", "background:red; color:yellow");

const A = "Susi is going to codingschool";

let susi = A.slice(0, 4);
// console.log(susi.length);
console.log(susi);

let is = A.slice(5, 7);
console.log(is);

let isGoingToSchool = A.slice(5, 17) + A.slice(23, 29);
console.log(isGoingToSchool);
let school = A.slice(23, 29);
console.log(school);
let susiIsSchool = `${susi}  ${is}  ${school}`;
console.log(susiIsSchool);

document.write(
  susi + " " + is + " " + isGoingToSchool + " " + school + " " + susiIsSchool
);

console.log("%c ===1_7=== replace()", "background:red; color:yellow");

const text = "Sam is good at codingschool";
console.log(text.replace("good", "bad"));
console.log(text.replace("Sam", "Susi"));
console.log(text.replace("codingschool", "tennis"));

console.log("%c ===1_8=== toUpperCase()", "background:red; color:yellow");

console.log("%c ===1_9=== concat() ", "background:red; color:yellow");
