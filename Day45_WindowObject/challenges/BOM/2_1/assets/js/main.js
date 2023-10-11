const counter = document.getElementById("count");
const message = document.querySelector('[data-js="paragraph"]');

let value = counter.textContent;

const interval = setInterval(() => {
  if (value === 0) {
    message.textContent = "";
    counter.innerHTML = "";
    clearInterval(interval);
  } else {
    value--;
    counter.textContent = value;
  }
}, 1000);
