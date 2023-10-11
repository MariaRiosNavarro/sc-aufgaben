// Timer

const timeOutput = document.getElementById("time");
const minutesInput = document.getElementById("minutes");

const date = new Date(1970, 1); // date fängt schon von 0 min 0 sec 0 milisec

let minutes = 0;

//# 1-Nehmen den Value, wichtig return date, um bei der updateTimer zu nutzen

minutesInput.addEventListener("input", () => {
  minutes = minutesInput.value;
  date.setMinutes(minutes);
  const outSeconds = date.getSeconds();
  //   0 hinzufügen bei der sekunden, wenn der nummer < 10 ist
  timeOutput.innerHTML = `${date.getMinutes()}:${
    outSeconds < 10 ? `0${outSeconds}` : outSeconds
  }`;
  return minutes, date;
});

//#2- Update Timer immer - 1 secunde, bis 00:00

const updateTimer = () => {
  const outSeconds = date.getSeconds();
  //   0 hinzufügen bei der sekunden, wenn der nummer < 10 ist, so wie oben
  timeOutput.innerHTML = `${date.getMinutes()}:${
    outSeconds < 10 ? `0${outSeconds}` : outSeconds
  }`;
  //   wenn die Timer zu ende kommt, bleibt so wie es ist, ansonstens immer -1;
  if (date.getSeconds() === 0 && date.getMinutes() === 0) {
    date.setSeconds(date.getSeconds());
  } else {
    date.setSeconds(date.getSeconds() - 1);
  }
};

// #3 - Interval startMinCountdown & restartMinCountdown sind die gleiche funktion
// # wichtig return interval, damit wir danach enfernen können

let interval;

const startMinCountdown = () => {
  interval = setInterval(updateTimer, 1000);
  minutesInput.value = ""; //Enfernen der value aus der Input feld
  return interval;
};

const pauseMinCountdown = () => {
  clearInterval(interval);
};
const restartMinCountdown = () => {
  interval = setInterval(updateTimer, 1000);
  return interval;
};
