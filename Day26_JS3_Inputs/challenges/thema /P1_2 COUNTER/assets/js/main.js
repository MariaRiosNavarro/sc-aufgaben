const result = document.querySelector("#result");
let count = 0;

function addOne() {
  result.innerHTML = count++;
}
function minusOne() {
  result.innerHTML = count--;
}
function addTen() {
  result.innerHTML = count += 10;
}
function minusTen() {
  result.innerHTML = count -= 10;
}
function addHundert() {
  result.innerHTML = count += 100;
}
function minusHundert() {
  result.innerHTML = count -= 100;
}
function multiplicateTwo() {
  result.innerHTML = count *= 2;
}
function remove() {
  result.innerHTML = count = 0;
}

// !version zusammenfassend

const result2 = document.querySelector("#result2");
let count2 = 0;

function superFunktion(operatoren) {
  count2 = count2 + operatoren;
  result2.innerHTML = count2;
}

function multiplicateTwo() {
  result2.innerHTML = count2 *= 2;
}
function remove() {
  result2.innerHTML = count2 = 0;
}
