// Timer

const timeOutput = document.getElementById("time");
const minutesInput = document.getElementById("minutes");

const date = new Date(1970, 1);

let minutes = 0;

// Nehmen den Value

minutesInput.addEventListener("input", () => {
  minutes = minutesInput.value;
  date.setMinutes(minutes);
  const outSeconds = date.getSeconds();
  timeOutput.innerHTML = `${date.getMinutes()}:${
    outSeconds < 10 ? `0${outSeconds}` : outSeconds
  }`;
  return minutes, date;
});

// Value wird für den Timer zu updaten - 1

const updateTimer = () => {
  const outSeconds = date.getSeconds();
  timeOutput.innerHTML = `${date.getMinutes()}:${
    outSeconds < 10 ? `0${outSeconds}` : outSeconds
  }`;
  date.setSeconds(date.getSeconds() - 1);
};

// Interval startMinCountdown & restartMinCountdown sind die gleiche funktion

let interval;

const startMinCountdown = () => {
  interval = setInterval(updateTimer, 1000);
  console.log(date);
  return interval;
};

const pauseMinCountdown = () => {
  clearInterval(interval);
};
const restartMinCountdown = () => {
  interval = setInterval(updateTimer, 1000);
  console.log(date);
  return interval;
};
