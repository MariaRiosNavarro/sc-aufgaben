//# OOP (objektorientierte Programierung)

// Schablone erstellen, zum  Beispiel für daten.
// Constructor sind super wichtig zu benutzen, so stellen wir sicher das wir immer in gleiche Form/Art unsere Objekte aufbaue. Wir erstellen sozusagen eine Template/Vorlage die wir dann nurnoch mit Parameter befüllen müssen

// # Function constructor (alte Version) beide haben gleiche funktionalitat

console.log("%c-----------Function Contructor", "background:red; color: white");

function Labtop(
  herstellerParameter,
  modelParameter,
  jahrParameter,
  austattungParameter
) {
  this.hersteller = herstellerParameter;
  this.model = modelParameter;
  this.jahr = jahrParameter;
  this.austattung = austattungParameter;
}

const microsoftLabtop = new Labtop("Microsoft", "Surfface", 2023, [
  "i8",
  "Surface",
  "500GB",
  "16GB Ram",
]);
console.log(microsoftLabtop); //ohne inhalte, wenn nichts in den klammer

const macbook = new Labtop("Apple", "Pro m1", 2023, ["M1", "1000gb"]);
console.log(macbook);

// # ----------------Class Constructor

console.log("%c-----------ClassContructor", "background:red; color: white");

class Handy {
  constructor(herstellerParam, modelParam, jahrParam) {
    this.hersteller = herstellerParam;
    this.model = modelParam;
    this.jahr = jahrParam;
  }

  description() {
    console.log(
      `${this.hersteller} hat das model ${this.model} in jahr ${this.jahr} realease`
    );
  }
}

// §rstekke neues model

const iphone15 = new Handy("Apple", "Iphone 15", 2023);
console.log(iphone15);

// ruf der description

iphone15.description();

// # ========= Class Vererbung mit extend =====

console.log(
  "%c-----------Class Vererbung mit extend",
  "background:red; color: white"
);

// extend ist das schlüsselwort für die vererbung

// !===== super =====

// Das keyword super() macht es leicht für uns ein constructor noch wiederverwendbarer zu machen.

// mit super()

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// wir wollen ein neue konstrukter das eigentlich die gleiche parameter hat:

class Student extends Person {
  constructor(name, age, schoolClass) {
    super(name, age);
    // this.name = name;
    // this.age = age;
    this.schoolClass = schoolClass;
  }
}

const student = new Student("Tim", 10, 4);

console.log(student);

// erstellen teacher

class Teacher extends Person {
  constructor(name, age, classSize) {
    super(name, age);
    // this.name = name;
    // this.age = age;
    this.classSize = classSize;
  }
}

const teacher = new Teacher("Alex", 40, 4, 28);
console.log(teacher);

//  um nicht so viel code so widerholen, können den "super" keyword arbeiten

// ! -----   Setter Nethode benutzen um Eigentschaften zu prüfen bevor es geschrieben wird--

class superHero {
  constructor(name, age) {
    this.name = name;
    this.setAge(age);
  }

  // hier prüfen ob age eine Number ist bevor wir es schreiben

  setAge(age) {
    if (typeof age === "number") {
      this.age = age;
    } else {
      this.age = "ungültige wert";
    }
  }

  hello() {
    console.log(`Ich bin ${this.name} und ich bin ${this.age} Jahre alt`);
  }
  setName(newName) {
    this.name = newName;
  }
}

const superHero1 = new superHero("Xman", "55");
const superHero2 = new superHero("Hehe", 22);
console.log(superHero1); // in age ungültige wert
console.log(superHero2); // in age 22

superHero1.hello();
superHero2.hello();

// mit diesen beispiel können ffehler beheben und in unseren logs sehen ob die werte falsch sind, wichtig in datenbanken und backend um fehler case zu untersuchen

// ! si sollten wir werte nicht überschrieben

// superHero2.name = "Superman"; //funktioniert aber ist nicht empfehlenswert
// superHero2.hello();

// !Bessere metode; so sollten wir werte ändern in ein constructor (setName() hintzufügen)

superHero2.setName("yayaax");
superHero2.hello();

// Wir mache ich eine oberklasse: Array

const data = {
  student: new Student("Thomas", 10, 2),
  teacher: new Teacher("Alex", 40),
};

// mehrfachvererbung sehr vorsichtig, es muss alles in context zusammen bleiben. geht nicht gebaude zu teacher...

//# mehrere Klassen erweitern (extenden)

// Diese Zeile gibt einen formatierten Hinweis in der Konsole aus.
// Der Text hat einen roten Hintergrund und weiße Schrift.
console.log(
  "%c mehrere Klassen erweitern (extenden)",
  "background: red; color: white"
);

// Hier wird die Basisklasse "Animal" definiert.
class Animal {
  // Der Konstruktor wird aufgerufen, wenn eine Instanz dieser Klasse erstellt wird.
  // Er nimmt den Namen des Tieres als Argument und weist ihn der Instanzvariable "name" zu.
  constructor(name) {
    this.name = name;
  }

  // Diese Methode "speak" wird in allen abgeleiteten Klassen verwendet.
  // Sie gibt eine Nachricht aus, die den Namen des Tiers enthält, gefolgt von "makes a sound".
  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

// Hier wird die Klasse "Dog" definiert, die von "Animal" erbt.
class Dog extends Animal {
  // Diese Methode "speak" wird in "Dog" überschrieben.
  // Sie gibt eine Nachricht aus, die den Namen des Hundes enthält, gefolgt von "barks".
  speak() {
    console.log(`${this.name} barks`);
  }
}

// Hier wird die Klasse "Labrador" definiert, die von "Dog" erbt.
class Labrador extends Dog {
  // Der Konstruktor nimmt den Namen und das Alter des Labradors als Argumente.
  // "super(name)" ruft den Konstruktor der übergeordneten Klasse ("Dog") auf und übergibt den Namen.
  constructor(name, age) {
    super(name); // Aufruf des Konstruktors der Elternklasse.
    this.age = age; // Das Alter des Labradors wird der Instanzvariable "age" zugewiesen.
  }

  // Diese Methode "speakLoud" ist spezifisch für Labradors.
  // Sie gibt eine Nachricht aus, die den Namen des Labradors enthält, gefolgt von "barks loudly".
  speakLoud() {
    console.log(`${this.name} barks loudly`);
  }
}

// Hier wird eine Instanz der Klasse "Labrador" mit dem Namen "Buddy" und dem Alter "5" erstellt.
const myLabrador = new Labrador("Buddy", 5);

// Die Instanz "myLabrador" wird in der Konsole ausgegeben, um ihre Eigenschaften anzuzeigen.
console.log(myLabrador);

// Die Methode "speak" der Instanz "myLabrador" wird aufgerufen und gibt "Buddy barks" aus.
myLabrador.speak(); // Ausgabe: "Buddy barks"

// Die Methode "speakLoud" der Instanz "myLabrador" wird aufgerufen und gibt "Buddy barks loudly" aus.
myLabrador.speakLoud(); // Ausgabe: "Buddy barks loudly"
