// save variables
const input = document.querySelector('[data-js="input"]');
console.log({ input });
console.log(input);

const outputText = document.querySelector('[data-js="output"]');
console.log({ outputText });
console.log(outputText);

// function

function adultAsk() {
  let outputAdult = "You are Adult";
  let outputMinor = "You are minderage";

  console.log("input", input);
  console.log("input value", input.value);

  //   if (input.value >= 18) {
  //     outputText.innerHTML = outputAdult;
  //   } else {
  //     outputText.innerHTML = outputMinor;
  //   }

  input.value >= 18
    ? (outputText.innerHTML = outputAdult)
    : (outputText.innerHTML = outputMinor);
}
