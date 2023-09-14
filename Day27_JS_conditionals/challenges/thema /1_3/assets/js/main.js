let legalAge = 18;

function greaterThan() {
  event.preventDefault();
  const message = document.querySelector(".output");
  const age = Number(document.getElementById("input").value);

  //   if (age >= legalAge) {
  //     message.innerHTML = "<p class='green'>Ja, Du kannst Shisha rauchen 💨</p>";
  //   } else {
  //     message.innerHTML =
  //       "<p class='red' >Du darfst noch nicht Shisha rauchen 🎡 </p>";
  //   }

  // !Version with ternary operator:

  age >= legalAge
    ? (message.innerHTML =
        "<p class='green'>Ja, Du kannst Shisha rauchen 💨</p>")
    : (message.innerHTML =
        "<p class='red' >Du darfst noch nicht Shisha rauchen 🎡 </p>");
}
