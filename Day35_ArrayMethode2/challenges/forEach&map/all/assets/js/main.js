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

// 1_3

let array = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

let copyArray = array.slice();

let sortedArray = copyArray.sort((a, b) => a - b);

console.log(sortedArray);

let newArray = sortedArray.map((a) => a * 2);
console.log(newArray);

// to remove copys

let noDuplicates = new Set(newArray);

console.log(noDuplicates);

// or with for each

let noDuplicates2 = [];

newArray.forEach((element) => {
  if (!noDuplicates2.includes(element)) {
    noDuplicates2.push(element);
  }
});

console.log(noDuplicates2);
