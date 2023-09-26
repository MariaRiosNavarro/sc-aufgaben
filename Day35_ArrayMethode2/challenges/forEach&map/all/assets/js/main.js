// 1_1

console.log("test");

let getraenke = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

let copyGetranke = getraenke.slice();
let output = copyGetranke.sort();

output.forEach((drink) => document.write(drink, "<br>"));

// 1_2

let upperDrinks = copyGetranke.map((getraenke) => getraenke.toUpperCase());
console.log(upperDrinks);
