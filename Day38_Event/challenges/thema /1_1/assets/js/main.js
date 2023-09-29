// 1_4

const text = document.querySelector('[data-js="text"]');

text.addEventListener("click", () => {
  console.log("Du hast auf den Event-Paragraphen geklickt.");
  text.classList.toggle("green");
});

// 1_5

const btn = document.querySelector('[data-js="clickMe"]');
const counter = document.querySelector('[data-js="output"]');

let count = 0;
btn.addEventListener("click", () => {
  count++;
  counter.innerHTML = count;
});

// 1_6

const select = document.querySelector('[data-js="select"]');
const selectOut = document.querySelector('[data-js="select-output"]');

select.addEventListener("change", () => {
  //   event.preventDefault;
  //   selectOut.innerHTML = event.target.value;
  event.preventDefault;
  selectOut.innerHTML = `Sie haben die option ${select.value} ausgewählt`;
});

// 1_7
const selectColor = document.querySelector('[data-js="select-color"]');
const removeColor = document.querySelector('[data-js="remove-color"]');

removeColor.addEventListener("click", () => {
  event.preventDefault;
  selectColor.remove(selectColor.selectedIndex);
});
