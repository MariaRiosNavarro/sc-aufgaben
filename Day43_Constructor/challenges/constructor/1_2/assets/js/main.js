class Person {
  constructor(name, age) {
    this.setName(name);
    this.setAge(age);
  }

  info() {
    console.log(`${this.name} is ${this.age} years old`);
  }

  setName(name) {
    if (typeof name === "string") {
      this.name = name;
    } else {
      this.name = "ungültige wert";
    }
  }

  setAge(age) {
    if (typeof age === "number") {
      this.age = age;
    } else {
      this.age = "ungültige wert";
    }
  }
}

let newPerson = new Person("Emanuela", 18);

newPerson.info();
