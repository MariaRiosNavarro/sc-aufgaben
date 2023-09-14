let result = 0;

const input = document.querySelector("#number");
let output = document.querySelector(".output");

// function calculate() {
//   let numberInput = Number(input.value);
//   console.log({ numberInput });

//   if (numberInput < 27) {
//     result = 27 - numberInput;
//     console.log("minor 27", result);
//     output.innerHTML =
//       "<p class='yellow'> Dein Nummer " +
//       numberInput +
//       " minus 27 ist <span class='green'>" +
//       result +
//       "<span></p>";
//   } else {
//     result = (numberInput - 27) * 2;
//     console.log("mayor 27", result);
//     output.innerHTML =
//       "<p class='orange'> Dein Nummer " +
//       numberInput +
//       " minus 27 und dann plus 2 ist <span class='green'>" +
//       result +
//       "<span></p>";
//   }
// }

// Ich habe etwas mehr als in der Aufgabe erwartet um einiges zu testen
// mit ein simple ternary operator würde auch gehen:

function calculate() {
  let numberInput = Number(input.value);
  result = numberInput < 27 ? 27 - numberInput : (numberInput - 27) * 2;
  console.log({ result });
  output.innerHTML = result;
}
