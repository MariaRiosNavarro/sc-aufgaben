// # Objecten literal
// Neben Array ein weiter wichtiger Datentyp
// Objecten sind eine zentrale Leistungstarke Funktions/Datentyp in JS

// # Objecten erstellen

const person = {
  //Ein Object hat immer ein Key und ein Value
  // name: Key
  // "Max Muller": value
  name: "Max",
  age: 35,
  adult: true,
  city: "Berlin",
  // keys können auch string sein,
  // aber best practice ist das alle
  // keys gleich sind von ein object
  //   "admin":"true" (bei mir wenn
  //   ich speichre werden automatisch entfernt)
  admin: true,
};

const person2 = {
  //   admin: true,
  //   german: false,
  country: "UK",
};

console.log(person);
console.log(typeof person);

// #zugrif

// *dot notation
console.log(person.name);
// mit
//* bracket notation
console.log(person["age"]);
// wenn der Key string ist müssen wie unds
// so die Daten holen
console.log(person["admin"]);

//*neu zuweisen

person.name = "Uwe";
console.log(person);

// * werte hinzufügen

person.job = "Trainer";
console.log(person.job);
// *löschen

delete person.job;
console.log(person);

// *Methoden in Objecten

const calculator = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  namen: "superMario",
  alter: 33,
  write: (a, b) => `Hello my name is ${a} and i am ${b} old`,
  greet: () => {
    return `Hallo mein name ist ${person2.name}`;
  },
  //   Aber dann können nicht vielseitiger anwenden, geht nicht für alle
  // deswegen nutzen das wort this
};

console.log(calculator.add(2, 4));
console.log(calculator.sub(10, 1));
console.log(calculator.write(calculator.namen, calculator.alter));

// # This machen funktionen dynamischer

const hund1 = {
  name: "Rex",
  rasse: "Schäffer",
  //   wenn ich this benutzen FUNKTIONIERT NICHT MIT ARROY FUNCTION.
  //   dann muss man die alte schreibt weise
  belle: function () {
    console.log(`Wuff, ich bin ${this.name}`);
  },
};

hund1.belle();

const hund2 = {
  name: "Bella",
  rasse: "Labrador",
};

hund2.belle = hund1.belle;

hund2.belle();

console.log(hund2);

// So haben die propierties auch an bella weitergeben

// # Schleifen und daten weiterverarbeiten

// neue schleife

const person3 = {
  name: "Marzio",
  age: 30,
  adult: true,
  city: "Tutzing",
};

// keys raus:

for (let currywurst in person3) {
  // alle keys
  console.log(currywurst);
  //   alle vallues
  console.log(person3[currywurst]);
  console.log("test", person3.currywurst); //undefine.. geht nur mit []
  console.log(currywurst + ": " + person3[currywurst]);
}

// # Objekte => Keys

// So bekomen wir in eine OBJECT KEY RAUS.
console.log("----------------");

const keys = Object.keys(person3);
console.log(keys);

// # Objecte => Values

const values = Object.values(person3);
console.log(values);
console.log(Object.values(person));

// Wir kreigen arrays und damit können, mapen, und arrays methoden verwenden

// #Objecte => Entries

// So wandeln wir ein object in einem Array um,
// wobei jeder Key/Value paar viederum Array ist

const entries = Object.entries(person3);
console.log("entries", entries);

// wir können die elemente raus kriegen

console.log("einzelne entrie->", entries[3][1]);

// Verschachtelte Array

// const array = [2, 3,

// console.log("array zeigen->", array);
// console.log(array[3][2][1]);

// # Object in Object -> werden SEHR OFT

const person4 = {
  name: "Andre",
  city: "Göttingen",
  job: "Frontend",
  sozialMedia: {
    linkedin: "link",
    insta: {
      link: "inst",
      bild: "pic",
    },
  },
  hobbies: ["code", "spazieren"],
};

// Es kann so veiterverschachtel sein wie man mocehcte

// * Zugrif auf verschachtelte

console.log(person4.sozialMedia.insta.bild);

// Beide geben das gleiche raus

console.log(person4["sozialMedia"].linkedin);
console.log(person4.sozialMedia["linkedin"]);
