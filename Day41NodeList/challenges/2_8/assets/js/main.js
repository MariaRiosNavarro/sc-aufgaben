const list = document.body.children[0].querySelector("ul");
console.log(list);

let input = document.body.children[0].querySelector("input[type='text']");
let button = document.body.children[0].querySelector("input[type='submit']");

button.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = input.value;
  list.appendChild(newItem);
});
