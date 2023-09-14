let qualityValue = 0;

const range = document.querySelector("#air-quality");
const content = document.querySelector(".content");
const wrapper = document.querySelector(".wrapper");

// !version1

// function qualityMessage() {
//   let rangeNumber = Number(range.value);
//   console.log({ rangeNumber });

//   if (rangeNumber <= 50) {
//     content.innerHTML =
//       "<h3>Level of health concern: Good</h3> <h3>Level of health effect: Little or no risk</h3><p>🍀</p>";
//     wrapper.classList.remove("yellow");
//     wrapper.classList.add("green");
//   } else if (rangeNumber > 50 && rangeNumber < 100) {
//     content.innerHTML =
//       "<h3>Level of health concern: Moderate </h3> <h3>Level of health effect: Acceptable quality</h3><p>💨</p>";
//     wrapper.classList.remove("green");
//     wrapper.classList.remove("orange");
//     wrapper.classList.add("yellow");
//   } else if (rangeNumber > 100 && rangeNumber < 150) {
//     content.innerHTML =
//       "<h3>Level of health concern: Unhealthy for sensitive groups </h3> <h3>Level of health effect: Generable publics not likely affected</h3><p>😷</p>";
//     wrapper.classList.remove("yellow");
//     wrapper.classList.remove("red");
//     wrapper.classList.add("orange");
//   } else {
//     content.innerHTML = "<p>☠️</p>";
//     wrapper.classList.remove("orange");
//     wrapper.classList.add("red");
//   }
// }

// !version2 (easier)

function qualityMessage() {
  let rangeNumber = Number(range.value);
  console.log({ rangeNumber });
  if (rangeNumber <= 50) {
    content.innerHTML =
      "<h3>Level of health concern: Good</h3> <h3>Level of health effect: Little or no risk</h3><p>🍀</p>";
    wrapper.style.backgroundColor = "green";
  } else if (rangeNumber < 100) {
    content.innerHTML =
      "<h3>Level of health concern: Moderate </h3> <h3>Level of health effect: Acceptable quality</h3><p>💨</p>";
    wrapper.style.backgroundColor = "yellow";
  } else if (rangeNumber < 150) {
    content.innerHTML =
      "<h3>Level of health concern: Unhealthy for sensitive groups </h3> <h3>Level of health effect: Generable publics not likely affected</h3><p>😷</p>";
    wrapper.style.backgroundColor = "orange";
  } else {
    content.innerHTML = "<p>☠️</p>";
    wrapper.style.backgroundColor = "red";
  }
}
