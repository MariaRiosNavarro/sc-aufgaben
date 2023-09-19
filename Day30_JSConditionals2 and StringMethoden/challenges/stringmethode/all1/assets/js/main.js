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

const text1 = "Sam is good at codingschool";
let text2 = text1.replace("good", "bad");
let text3 = text1.replace("Sam", "Susi");
let text4 = text1.replace("codingschool", "tennis");
console.log();
console.log();
console.log();

document.write(text1 + "<br>");
document.write(text2 + "<br>");
document.write(text3 + "<br>");
document.write(text4 + "<br>");

console.log("%c ===1_8=== toUpperCase()", "background:red; color:yellow");

const text = "Sam is going to codingschool";

let uppercaseText = text.toUpperCase();
console.log(uppercaseText);

let sam = text.slice(0, 4);
let isGoingTo = text.slice(4, 15);
console.log(isGoingTo);
let cschool = text.slice(22, 28);
console.log(cschool);

let firstText = sam.toUpperCase() + isGoingTo + " " + cschool.toUpperCase();
console.log(firstText);
let secondText = sam.toLowerCase() + isGoingTo.toUpperCase() + " " + cschool;
console.log(secondText);

//!Sam Is Going To School (efizienter mit Arrays)

let words = text.split(" "); // Den Text in Wörter in ein Array aufteilen
console.log({ words });

let capitalizedWords = words.map(
  (word) => word.charAt(0).toUpperCase() + word.slice(1)
); // Jedes Wort das erste Buchstabe großschreiben
console.log(capitalizedWords);

let thirdText = capitalizedWords.join(" "); // Die Wörter wieder zu einem Satz verbinden und dazwischen 1 leerzeichen statt ein , wie ursprunglich in der Array

console.log(thirdText);

//!Sam Is Going To School (komplizierte)

let word1Capitalize = sam.charAt(0).toUpperCase() + sam.slice(1);
console.log("word1Capitalize", word1Capitalize);

let word2 = isGoingTo.slice(0, 2);
let word2Capitalize = word2.charAt(0).toUpperCase() + word2.slice(1);
console.log("word2Capitalize", word2Capitalize);

let word3 = isGoingTo.slice(3, 9);
let word3Capitalize = word3.charAt(0).toUpperCase() + word3.slice(1);
console.log("word3Capitalize", word3Capitalize);

let word4 = isGoingTo.slice(9, 11);
let word4Capitalize = word4.charAt(0).toUpperCase() + word4.slice(1);
console.log("word4Capitalize", word4Capitalize);

let word5Capitalize = cschool.charAt(0).toUpperCase() + cschool.slice(1);
console.log("word5Capitalize", word5Capitalize);

let thirdTextVersionBad =
  word1Capitalize +
  word2Capitalize +
  " " +
  word3Capitalize +
  " " +
  word4Capitalize +
  " " +
  word5Capitalize;
console.log(thirdTextVersionBad);

console.log("%c ===1_9=== concat() ", "background:red; color:yellow");

const textA = "Sam is going to codingschool";
const textB = "Susi";
const textC = "and";

let textD = textA.replace("to codingschool", "to the movie theater");
console.log(textD);

let textE = textD.slice(13);
console.log(textE);

const output = document.querySelector('[data-js="output"]');

// Sam is going to school and to the movie theater
let sentenceA = textA + " " + textC + " " + textE;
console.log(sentenceA);
output.innerHTML += `SentenceA is = "${sentenceA}"<br>`;
// Sam is going to the movie theater
let sentenceB = textD;
console.log(sentenceB);
output.innerHTML += `SentenceB is = "${sentenceB}"<br>`;
// Susi and Sam are going to school
let sentenceC = textB + " " + textC + " " + textA.replace("is", "are");
output.innerHTML += `SentenceC is = "${sentenceC}" <br>`;
// Susi and Sam are going to gym and to the movie theater
let sentenceD =
  sentenceC.replace("to codingschool", "to gym") + " " + textC + " " + textE;
output.innerHTML += `SentenceD is = "${sentenceD}" <br>`;
// Susi is going to school and to the movie theater
let sentenceE = textA.replace("Sam", textB) + " " + textC + " " + textE;
output.innerHTML += `SentenceE is = "${sentenceE}" <br>`;
