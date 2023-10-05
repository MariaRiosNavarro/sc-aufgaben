// Ich habe meine eigene Styles für die Aufgabe benutzt

const headline = document.body.querySelector("h1");
const element = document.body.querySelector("#element");

console.log(element);

const small = () => {
  headline.classList.toggle("small-text");
  element.classList.toggle("small-box");
};
const middle = () => {
  headline.classList.toggle("middle-text");
  element.classList.toggle("middle-box");
};
const bigCracy = () => {
  headline.classList.toggle("big-text");
  element.classList.toggle("big-box");
};
