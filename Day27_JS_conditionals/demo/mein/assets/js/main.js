// function formValues() {
//   const checkInput = document.querySelector(".check-input").checked;
//   console.log(checkInput);
//   const valueText = document.querySelector(".text-input").value;
//   console.log(valueText);
// }

// const text = document.querySelector(".textHeadline");

// function add() {
//   text.classList.add("green");
// }

// function remove() {
//   text.classList.remove("green");
//   text.classList.remove("blue");
// }

// function toggle() {
//   text.classList.toggle("blue");
// }

// !conditional if-else

// if (bedienung) {wenn die bedienung wahr is}
// else {wenn die bedienung false ist}

// function checkNumber() {
//   let num = Number(document.querySelector(".check-num").value);
//   console.log({ num });
//   let out = document.querySelector(".output-num");

//   if (num > 0) {
//     out.innerHTML = "die zahl ist positiv";
//   } else if (num === 0) {
//     out.innerHTML = "die zahl ist 0";
//   } else {
//     out.innerHTML = "die zahl ist negativ";
//   }
// }

// logiin

const username1 = "maria12345";
const password1 = "98765";

function loginUser() {
  let nameUser = document.querySelector("#name-user").value;
  let pass2 = document.querySelector("#pass").value;

  let mess2 = document.querySelector("#mess");
  console.log({ name2 }, { pass2 });
  if (nameUser === username1 && pass2 === password1) {
    mess2.innerHTML = "yes";
  } else {
    mess2.innerHTML = "no";
  }
}
