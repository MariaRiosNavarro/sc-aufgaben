// !version1 (oninput/onchange funktionieren hier genau so)

function changeColor() {
  // filter die values
  const red = document.querySelector("#red").value;
  const green = document.querySelector("#green").value;
  const blue = document.querySelector("#blue").value;
  // hinzufügen der werte in der formula von rgb
  const colorRGB = `rgb(${red},${green},${blue})`;
  //  speichern der varible
  const wrapper = document.querySelector(".wrapper");
  //   farb wechsel mit den neue wert von colorRGB
  wrapper.style.backgroundColor = colorRGB;
}

// !version .addEventListener

// die inputs variablen speichern
const inputRed = document.querySelector("#red2");
const inputGreen = document.querySelector("#green2");
const inputBlue = document.querySelector("#blue2");

// mit .addEventListener können eine sekundare Funktion aufrufen, die stattfindet, wenn der
// Ereignis passiert. In diesen fall, wenn der input sich ändert (onchange),
// soll die changeColor2 funktion aufgerufen werden

inputRed.addEventListener("onchange", changeColor2);
inputGreen.addEventListener("onchange", changeColor2);
inputBlue.addEventListener("onchange", changeColor2);

// farbfunktion die aktiviert wird durch den addEventListener die wir an der "onchange" gegeben haben
function changeColor2() {
  // die inputs waren schon gespeichert, jetzt extrahiren die values um die colorRGB zu machen.
  const colorRGB = `rgb( ${inputRed.value},  ${inputGreen.value},    ${inputBlue.value})`;
  const wrapper = document.querySelector(".wrapper");
  wrapper.style.backgroundColor = colorRGB;
}
