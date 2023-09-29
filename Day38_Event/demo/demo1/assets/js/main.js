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
const select = document.querySelector("#select");
const submit = document.querySelector("#submit");

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

//  # Change value wid verändert

select.addEventListener("change", () => {
  console.log("ich wuude verändeert");
  out.innerHTML = select.value;
});

//  !beispiel auslagern mit INPUT, externe eventlistener, damit genereller haltem können

const inputFunction = () => {
  console.log("In mich würde etwas eingetragen");
  out.innerHTML = textInput.value;
};

textInput.addEventListener("input", inputFunction);

// !Mehode um standar verhalten eines Ereignes in ein Webbrowser zu verhindern
// # =====   event.preventDefault()  ======

submit.addEventListener("click", () => {
  event.preventDefault();
  console.log("test");

  // ! ===remove (wenn ich clicke entferne ein event listener, die ich vorher gegeben habe)

  textInput.removeEventListener("input", inputFunction);
});

// textInput.addEventListener("", () => {});
// textInput.addEventListener("", () => {});
// textInput.addEventListener("", () => {});
// textInput.addEventListener("", () => {});
// textInput.addEventListener("", () => {});
