let differenz = 0;

const input = document.querySelector("#number");
let output = document.querySelector(".output");

function calculate() {
  let numberInput = Number(input.value);
  console.log({ numberInput });

  if (numberInput < 27) {
    differenz = 27 - numberInput;
    console.log("minor 27", differenz);
    output.innerHTML =
      "<p class='yellow'> Dein Nummer " +
      numberInput +
      " minus 27 ist <span class='green'>" +
      differenz +
      "<span></p>";
  } else {
    differenz = (numberInput - 27) * 2;
    console.log("mayor 27", differenz);
    output.innerHTML =
      "<p class='orange'> Dein Nummer " +
      numberInput +
      " minus 27 und dann plus 2 ist <span class='green'>" +
      differenz +
      "<span></p>";
  }
}
