// function feeling() {
//   let range = document.querySelector("input[type='range']").value;
//   let output = document.querySelector(".output");
//   output.innerHTML = `ich fühle mich wie ein ${range}`;
// }


// Event listener, der ausgelöst wird, wenn sich der Wert des Bereichs ändert
document.addEventListener("DOMContentLoaded", function () {
  // Funktion, die den Wert des Bereichs in das .output-Element einfügt
  function feeling() {
    let range = document.querySelector("input[type='range']").value;
    let output = document.querySelector(".output");
    output.innerHTML = `Ich fühle mich wie eine ${range}`;
  }

  // Hinzufügen des Event Listeners zum "input" Element vom Typ "range"
  let rangeInput = document.querySelector("input[type='range']");
  rangeInput.addEventListener("input", feeling);
});
