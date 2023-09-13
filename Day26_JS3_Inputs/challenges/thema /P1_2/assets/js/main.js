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
