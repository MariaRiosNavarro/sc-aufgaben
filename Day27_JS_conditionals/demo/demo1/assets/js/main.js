function checkInput() {
  const value = document.querySelector(".text-input").value;
  console.log("value");

  const checkedInput = document.querySelector(".checkInput").checked;
  console.log("checkedInput");
}

const text = document.querySelector(".text");

function add() {
  text.classList.add("green");
}

function remove() {
  text.classList.remove("red");
}

function add() {
  text.classList.toggle("blue");
}
