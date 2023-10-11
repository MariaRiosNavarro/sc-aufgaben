// Schreibe zuerst eine Funktion, die nach X Sekunden einen Text anzeigt. Dafür kannst du die setTimeout-Methode nutzen.
// setTimeout(() => {
//   console.log("hello");
// }, 2000);

// Schreibe anschließend eine Funktion, die das Ergebnis der Vorschau ausgibt.
//  Nutze hierfür: setInterval, clearInterval und if/else.

console.log("Start Warten für 3 Sekunden");
const endLog = () => {
  console.log("Erledigt, Du hast 3 Sekunden verschwendet");
  clearInterval(intervalIDA);
};

const intervalIDA = setInterval(endLog, 3000);

let counter = 11;

const intervalCombo = () => {
  let today = new Date();
  let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  console.log(time);
};

const intervalIDB = setInterval(() => {
  if (counter === 0) {
    return clearInterval(intervalIDB);
  } else {
    counter--;
  }
  intervalCombo();
  console.log(counter);
}, 1000);
