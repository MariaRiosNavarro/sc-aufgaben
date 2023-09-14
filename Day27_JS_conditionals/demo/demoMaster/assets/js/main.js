// # ===== WIEDERHOLUNG =====

// - Wie kann ich ein Inputfeld auslesen?

function checkInput() {
  // So lesen wir Inputs aus
  const value = document.querySelector(".text-input").value;
  console.log(value);
  // So lesen wir Checkboxen aus
  const checkInput = document.querySelector(".check-input").checked;
  console.log(checkInput);
}

// - Wie kann ich eine Klasse hinzufügen
const content = document.querySelector("h5");

function addClass() {
  content.classList.add("fett");
}

// - Wie kann ich eine Klasse löschen
function removeClass() {
  content.classList.remove("fett");
}

// - Wie kann ich eine Klasse Toggeln
function toggleClass() {
  content.classList.toggle("toggle");
}

// ! Couter

let outputVal = 0;
const output = document.querySelector(".output");
// - OPT 1

function plusEins() {
  outputVal++;
  output.innerHTML = outputVal;
}

function minusEins() {
  outputVal--;
  output.innerHTML = outputVal;
}

function plusZehn() {
  outputVal = outputVal + 10;
  output.innerHTML = outputVal;
}

function minusZehn() {
  outputVal = outputVal - 10;
  output.innerHTML = outputVal;
}

function malZwei() {
  outputVal = outputVal * 2;
  output.innerHTML = outputVal;
}

function reset() {
  outputVal = 0;
  output.innerHTML = outputVal;
}

//- OPT2
function superFunk(operatoren) {
  outputVal = outputVal + operatoren;
  output.innerHTML = outputVal;
}

function malZwei() {
  outputVal = outputVal * 2;
  output.innerHTML = outputVal;
}

function reset() {
  outputVal = 0;
  output.innerHTML = outputVal;
}

// ! NEUE Themen

// # ==== Conditional Statments ====

// if (hier kommt die bedingung) {
//  hier kommt der Code rein wenn die bedingung richtig ist
// } else{
// hier kommt der code rein wen die bedingung nicht richtig ist
// }

// - Check Alter
let age = 29;

if (age >= 18) {
  console.log("Du bist volljährig");
} else {
  console.log("Du bist minderjährig");
}

// - Check Nummer ob Positiv oder Negativ oder null

function checkNumber() {
  let num = Number(document.querySelector(".check-num").value);

  // typeof gibt mir den datentypen zurück
  console.log(typeof num);

  let outputFürAussage = document.querySelector(".output-check-num");

  if (num > 0) {
    outputFürAussage.innerHTML = "Die Zahl ist Positiv ";
  } else if (num === 0) {
    outputFürAussage.innerHTML = "Die Zahl ist 0!";
  } else {
    outputFürAussage.innerHTML = "Die Zahl ist Negativ";
  }
}

// - Check ob Zugangsdaten richtig sind
const username = "marzio";
const password = "123";

// * window Objekt
// console.log(window);
// * globales Objekt, das den Browser fester oder den Frame darstellt, der den JS Code enthält. Es ist das Top-Level-Objekt in der JS Hierachie
console.log(window.location);
console.log(window.location.href);

function checkUserData() {
  let loginUserName = document.querySelector("#username").value;
  let loginUserPassword = document.querySelector("#password").value;
  const outputLogin = document.querySelector(".login-output");

  // Checkt ob die daten ankommen.
  // console.log({ loginUserName }, { loginUserPassword });

  if (username === loginUserName && password === loginUserPassword) {
    outputLogin.innerHTML = "<p class='green'> Login war erfolgreich. </p>";
    window.location.replace("./secret.html");
  } else {
    outputLogin.innerHTML = "<p class='red'> Login war NICHT erfolgreich, </p>";
  }
}
