//!Arrow Functions

// ? Alte schreibweise

const bootcampTime = "Vollzeit";

function oldFunction() {
  console.log(`Wir sind in dem ${bootcampTime}`);
}

oldFunction(); // Wir sind in der Vollzeit

//  ? Neue schreibweise

const arrowFunction = () => {
  console.log(`Wir sind in dem ${bootcampTime}`);
};

arrowFunction();

const shortArrowFunction = () => console.log(`Wir sind in dem ${bootcampTime}`);

const onlyOneParameter = (a) => console.log(`Wir sind in dem ${a}`);

// function ändert sich nicht, ist immer der gleiche name und ist immer eine function, nur der inhalt/input des functionskorper

// ---------

if (false) {
  var x = 10;
} else {
  var y = 30;
}

// console.log(x);
// console.log(z);

// #hoisting - bleibt zu sehen, deswegen nutzen var NIE

// -----

const superBootcampName = "Vollzeit zum Supercoder";

const superBootcamp = () => {
  console.log(superBootcamp);
};

superBootcamp();

if (true) {
  let firstNumber = 40;
  console.log("inside", firstNumber);
} else {
  let secondNumber = 60;
}
// hier können nucht zugreifen

function withReturn() {
  if (false) {
    let number = 35;
  } else {
    let number = 75;
    return number;
  }
}

let func = withReturn();
console.log(func);

// ---------------

let firstName = "maria";

console.log(
  "------function deklarieren und globale variable drin ändern-------"
);

function getName() {
  console.log(`Hallo ${firstName}`);
  firstName = "Steffi";
  console.log("inside new name", firstName);
  console.log(`Hallo ${firstName}`);
}

console.log("-----nur aufrufen--------");
getName();
console.log("-----aufrufen und in eine variblen speichern--------");
let nam = getName();
console.log("-----log der obere variable--------");
//wir geben kein ruckgabewert deswegen bleibt alles in der function
console.log(nam);

// um das zu reparieren:
console.log("%c-----------lösung: RETURN-----------", "background-color:red");

let firstName2 = "marta";

console.log(
  "------function deklarieren und globale variable drin ändern-------"
);

function getName2() {
  console.log(`Hallo ${firstName2}`);
  firstName2 = "john";
  console.log("inside new name", firstName2);
  return `Hallo ${firstName2}`;
}

console.log("-----nur aufrufen--------");
getName2();
console.log("-----aufrufen und in eine variblen speichern--------");
let nam2 = getName2();
console.log("-----log der obere variable--------");

console.log(nam2); //undefined WHY?
