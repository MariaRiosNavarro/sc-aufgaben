// inputsvalue
// ohne submit funktioniert mit drucken de taste enter bei text input

function formValues() {
  const checkInput = document.querySelector(".check-input").checked;
  console.log(checkInput);
  const valueText = document.querySelector(".text-input").value;
  console.log(valueText);
}

// classList
const text = document.querySelector(".textHeadline");

function add() {
  text.classList.add("green");
}

function remove() {
  text.classList.remove("green");
  text.classList.remove("blue");
}

function toggle() {
  text.classList.toggle("blue");
}

// !conditional if-else

// if (bedienung) {wenn die bedienung wahr is}
// else {wenn die bedienung false ist}

function checkNumber() {
  let num = Number(document.querySelector(".check-num").value);
  console.log({ num });
  let out = document.querySelector(".output-num");

  if (num > 0) {
    out.innerHTML = "die zahl ist positiv";
  } else if (num === 0) {
    out.innerHTML = "die zahl ist 0";
  } else {
    out.innerHTML = "die zahl ist negativ";
  }
}

// logiin

const username2 = "maria12345";
const password2 = "98765";

function userCheck() {
  let nameUserForm = document.querySelector("#name-user2").value;
  let passUserForm = document.querySelector("#pass2").value;
  const outputLogin2 = document.querySelector(".mess2");
  // console.log({ nameUserForm }, { passUserForm });

  if (username2 === nameUserForm && password2 === passUserForm) {
    outputLogin2.innerHTML = "yes";
  } else {
    outputLogin2.innerHTML = "no";
  }
}
// ----version
const username = "mazio";
const password = "123";

function checkUserData() {
  let loginUserName = document.querySelector("#username").value;
  let loginUserPassword = document.querySelector("#password").value;
  const outputLogin = document.querySelector(".login-output");

  // Checkt ob die daten ankommen.
  console.log({ loginUserName }, { loginUserPassword });

  if (username === loginUserName && password === loginUserPassword) {
    outputLogin.innerHTML = "<p class='green'> Login war erfolgreich. </p>";
    window.location.replace("./secret.html");
  } else {
    outputLogin.innerHTML = "<p class='red'> Login war NICHT erfolgreich, </p>";
  }
}
