// Nutze: querySelector(),
//  addEventListener(),
//  let counter = 0;,
//   createElement(),

//   textContent(),
//    appendChild()
//     und classList.

const button = document.body.querySelector("button");
const container = document.body.querySelector("div");

let counter = 0;

button.addEventListener("click", () => {
  let box = document.createElement("span");
  box.textContent = counter;
  box.classList.add("rechteck");
  container.appendChild(box);

  //   circle for the first
  container.firstElementChild.classList.add("weiss");
  //   circle for the rest of that you can /10
  if (counter % 10 === 0) {
    box.classList.add("weiss");
  }
  //add points
  counter++;
});
