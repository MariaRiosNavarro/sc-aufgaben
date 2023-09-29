console.log("test");

const canvas = document.querySelector('[data-js="canvas"]');
const color = document.querySelector('[data-js="select-color"]');
const btn = document.querySelector('[data-js="btn"]');

btn.addEventListener("click", () => {
  event.preventDefault();
  let selectedColor = color.value.toLowerCase().split(" ").join("");
  canvas.style.backgroundColor = selectedColor;
});
