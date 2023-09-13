const result = document.querySelector("#result");
let resultValue = result.innerHTML;

function addOne() {
  let newValue = resultValue++;
  console.log(newValue);
  return (result.textContent = newValue);
}
function minusOne() {
  let newValue = resultValue--;
  console.log(newValue);
  return (result.textContent = newValue);
}
function addTen() {
  let newValue = (resultValue += 10);
  console.log(newValue);
  return (result.textContent = newValue);
}
function minusTen() {
  let newValue = (resultValue -= 10);
  console.log(newValue);
  return (result.textContent = newValue);
}
function addHundert() {
  let newValue = (resultValue += 100);
  console.log(newValue);
  return (result.textContent = newValue);
}
function minusHundert() {
  let newValue = (resultValue -= 100);
  console.log(newValue);
  return (result.textContent = newValue);
}
function multiplicateTwo() {
  let newValue = (resultValue *= 2);
  console.log(newValue);
  return (result.textContent = newValue);
}
function remove() {
  //   let newValue = 0;
  //   console.log(newValue);
  //   return (result.innerHTML = newValue);
}
