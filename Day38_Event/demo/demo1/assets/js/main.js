// ------onclick

// !--- events & eventlistener

// ? -- Was sind?

//Aktionen und Zustandsänderungen
//ensstehen mit dem Laden der Seite, werden von Browser signalisiert und melden automatisch jeden Touch, jeden druecken einer Taste
// events greifen auf das window object zu reeprreasentiert das aktule Browserfenster und stellt eine ielzahl von fkt un informationen bereit

// ? eventlistener

// ist eine methode die beobachteh  ob ein event auf dem element ausgefuehrt würde
// event kann ales mägiche sein:klick, mouse...
// die fkt wird erst ausgeführt wenn das event eintrit

const sayHelloBtn = document.querySelector("#hallo-btn");
const out = document.querySelector("#doc");
const textInput = document.querySelector("#text");

// ! Aufbau
// !element das beobachtet wird
// !eventlistener
// !typ definieren ("click")
// !was passiert

// # click

const sayHello = () => {
  out.innerHTML = "hallo onclick";
};

sayHelloBtn.addEventListener("click", () => {
  out.innerHTML = "hallo vom Event!";
});

// # mouseover

textInput.addEventListener("mouseover", () => {
  console.log("die mause bewegt");
  textInput.style.border = "3px solid green";
});

// # mouseout

textInput.addEventListener("mouseout", () => {
  console.log("raus");
  textInput.style.border = "1px solid";
});

//  # Change

textInput.addEventListener("", () => {});
textInput.addEventListener("", () => {});
textInput.addEventListener("", () => {});
textInput.addEventListener("", () => {});
textInput.addEventListener("", () => {});
textInput.addEventListener("", () => {});
