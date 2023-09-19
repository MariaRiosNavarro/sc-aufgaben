// save variables
const input = document.querySelector('[data-js="input"]');
console.log({ input });

const outputText = document.querySelector('[data-js="output"]');
console.log({ outputText });
console.log(outputText);

function passwordCheck() {
  let value = input.value;

  let valid = '<span style="color:red;">Password is too short</span>';
  let invalid = '<span style="color:green;">Welcome to your account</span>';

  //   if (value.length < 8) {
  //     outputText.innerHTML = "Password is too short";
  //     outputText.style.color = "red";
  //   } else {
  //     outputText.innerHTML = "Welcome to your account";
  //     outputText.style.color = "green";
  //   }

  value.length < 8
    ? (outputText.innerHTML = valid)
    : (outputText.innerHTML = invalid);
}

// remove everything in the input when we clik another time to give a new password
input.addEventListener("mouseover", function () {
  input.value = "";
});
