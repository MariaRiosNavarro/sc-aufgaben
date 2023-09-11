//Let vs const

let x = 34;
x = 67;
console.log({ x });

// Das let-Schlüsselwort wurde in ES6 (2015) eingeführt.

// Mit let definierte Variablen können nicht neu deklariert werden

// Mit let definierte Variablen müssen vor der Verwendung deklariert werden

// Mit let definierte Variablen haben Block-Scope

const y = 34;
y = 67; // Fehler: Variable kann nicht verändert werden,
//  da sie mit const definiert ist!

//Das Schlüsselwort wurde in ES6 (2015)const eingeführt.

// Mit const definierte Variablen können nicht erneut deklariert  werden

// Mit const definierte Variablen können nicht neu zugewiesen werden

// Mit const definierte Variablen haben einen Blockbereich

// !Wann sollte JavaScript const verwendet werden?

// !Deklarieren Sie eine Variable immer mit const, wenn Sie wissen, dass der Wert nicht geändert werden sollte.

// !Verwenden Sie es const, wenn Sie Folgendes deklarieren:

// !Ein neues Array
// !Ein neues Objekt
// !Eine neue Funktion
// !Ein neuer RegExp
