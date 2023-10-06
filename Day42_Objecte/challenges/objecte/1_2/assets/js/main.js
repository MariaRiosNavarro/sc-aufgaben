const person = {
  name: "Walter Mathau",
  age: 62,
  sagNameAlterReturn: function () {
    return `Person name is ${this.name} und ${this.age}`;
  },
  test: "hallo",
  sagNameAlterLog: function () {
    console.log(`Person name is ${this.name} und ${this.age}`);
  },
  test2: "no",
  sagNameAlterUndefined: function () {
    `Person name is ${this.name} und ${this.age}`;
  },
};

// Meine Tests

let namePerson = person.name;
// console.log(namePerson);
console.log("1", person.sagNameAlterReturn());
// console.log("2", person.sagNameAlterLog());//2 logs davon:  der log von drin, und dannach // 2 undefined!!
person.sagNameAlterLog();

// console.log("3", person.sagNameAlterUndefined());
person.sagNameAlterUndefined(); // nichts raus

//  Aufgabe

window.alert(person.sagNameAlterReturn());
