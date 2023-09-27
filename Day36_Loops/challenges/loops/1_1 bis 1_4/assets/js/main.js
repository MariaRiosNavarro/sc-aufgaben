// 1_1
console.log(
  "%c-------------------Aufgabe--1_1---------------------",
  "background-color: green; color: black;"
);
for (let i = 0; i < 10; i++) {
  console.log(i + 1, "Hello World"); //füge die i+1 vorher um die ausgabe in terminal getreent zu sehen und die zu numerieren length = index+1;
}

// 1_2
console.log(
  "%c-------------------Aufgabe--1_2---------------------",
  "background-color: green; color: black;"
);
let numArray = [];

for (let i = 0; i < 11; i++) {
  numArray.push(i);
  console.log("inside loop", numArray);
}

console.log("outside the loop", numArray);

// 1_4
console.log(
  "%c-------------------Aufgabe--1_4---------------------",
  "background-color: green; color: black;"
);

const names = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];

for (const name of names) {
  console.log(name);
}
