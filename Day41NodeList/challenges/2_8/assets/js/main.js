const list = document.body.querySelector("ul");
console.log(list);

const input = document.body.querySelector("input[type='text']");
const button = document.body.querySelector("input[type='submit']");

button.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = input.value;
  list.appendChild(newItem);
});
