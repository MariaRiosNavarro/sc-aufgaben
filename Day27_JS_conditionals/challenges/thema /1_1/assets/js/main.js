let legalAge = 18;

function askUnderage() {
  const age = Number(document.querySelector("#age").value);
  console.log({ age });
  const message = document.querySelector(".output");

  //   if (age < legalAge) {
  //     message.innerHTML = "<p class='red'>Miderjährig</p>";
  //   } else {
  //     message.innerHTML = "<p class='green' >Volljährig</p>";
  //   }

  // Version with ternary operator:

  age < legalAge
    ? (message.innerHTML = "<p class='red'>Miderjährig</p>")
    : (message.innerHTML = "<p class='green' >Volljährig</p>");
}
