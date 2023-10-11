console.log("Start Warten für 3 Sekunden");
const endLog = () => {
  console.log("Erledigt, Du hast 3 Sekunden verschwendet");
  clearInterval(intervalIDA);
};

const intervalIDA = setInterval(endLog, 3000);

// Man kann aber das von oben einfacher mir setTimeout machen
// setTimeout(endLog, 3000);

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
