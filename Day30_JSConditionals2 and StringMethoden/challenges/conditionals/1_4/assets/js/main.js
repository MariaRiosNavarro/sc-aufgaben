// save variables
const input = document.querySelector('[data-js="input"]');
console.log({ input });

const outputText = document.querySelector('[data-js="output"]');
console.log({ outputText });
console.log(outputText);

function passwordCheck() {
  let value = input.value;

  if (value.length < 8) {
    outputText.innerHTML = "Password is too short";
    // outputText.sytle.color = "red";
  } else {
    outputText.innerHTML = "Welcome to your account";
    // outputText.sytle.color = "green";
  }
}
