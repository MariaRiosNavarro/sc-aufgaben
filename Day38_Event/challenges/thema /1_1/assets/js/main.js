const text = document.querySelector('[data-js="text"]');

text.addEventListener("click", () => {
  console.log("Du hast auf den Event-Paragraphen geklickt.");
  text.classList.toggle("green");
});
