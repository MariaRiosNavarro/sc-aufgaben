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

//1_4

let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];

const celsiusCalc = (f) => Math.round((f - 32) / 1.8);

let copyTempF = fahrenheit.slice();
console.log(copyTempF);

let celsiusArray = copyTempF.map((f) => celsiusCalc(f));

console.log("celsiusArray", celsiusArray);
// [-18, 0, 7, 10, 24, 27, 37, 49]

// 1_5

let checkNumber = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

const plusHundertIfMoluloThreeIsNull = (a) => (a % 3 === 0 ? a + 100 : a);

let testArr = [3, 18, 25];

console.log(plusHundertIfMoluloThreeIsNull(3));
console.log(plusHundertIfMoluloThreeIsNull(18));
console.log(plusHundertIfMoluloThreeIsNull(25));

let newArrayNumber = checkNumber.map((element) =>
  plusHundertIfMoluloThreeIsNull(element)
);

console.log(newArrayNumber);

// (35) [118, 16, 80, 151, 47, 38, 95, 142, 68, 61, 34, 151, 20, 17, 56, 31, 100, 106, 5, 130, 74, 97, 28, 199, 91, 127, 73, 112, 92, 106, 127, 71, 26, 115, 178]

// 1_6

let album = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];

let copyAlbumArray = album.slice();
console.log(copyAlbumArray);

let cracyShit = copyAlbumArray.map((e) => {
  if (e.includes(".")) {
    return e.slice(0, -4);
  } else {
    return (e = "invalid");
  }
});

let cracyShitLowercase = cracyShit.map((s) => s.toLowerCase());

console.log(cracyShitLowercase);
// ['holidays', 'restaurant', 'invalid', 'rooms', 'dogatbeach']

// 1_6
