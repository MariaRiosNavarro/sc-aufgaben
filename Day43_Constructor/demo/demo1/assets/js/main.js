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
    this.modelParam = modelParam;
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
