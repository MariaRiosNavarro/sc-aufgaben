// DARK MODE

function getDark() {
  console.log("Klicken geht");
  const wrapper = document.querySelector(".wrapper");
  wrapper.classList.toggle("dark");

  // das gleiche=  document.querySelector(".wrapper").classList.toggle("dark");
}

// um den standar verhalten der browser zu umgehen:

// - return false - an den html:
// - oder event.preventDefault(); in der funktion
// function getInputValue(event) {
//   event.preventDefault();
//   console.log("Input work");
// }

function getInputValue() {
  console.log("Input work");
  const nameId = document.querySelector("#textid");
  const nameValue = document.querySelector("#textid").value;
  //   ohne value kriegen nur der impur object nicht den value die wir brauchen
  console.log(nameId);
  console.log("nameValue");

  const age = document.querySelector("#num").value;
  const range = document.querySelector("#range").value;
  const checkbox = document.querySelector("#checkbox").value;
  const date = document.querySelector("#bday").value;
  console.log({ nameValue }, { age }, { range }, { checkbox }, { date });
  console.log(nameValue, age, range, checkbox, date);
  console.log(
    typeof nameValue,
    typeof age,
    typeof range,
    typeof checkbox,
    typeof date
  );
}

//wir müssen immer checken was von typ die werte haben, besonders beim nummern ist nicht selten , dass sie string sind und weiter umwandeln müssen
