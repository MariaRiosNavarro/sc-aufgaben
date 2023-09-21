// Erstell eine Funktion roundTo(Zahl, Genauigkeit){...},
//  die eine Zahl auf genaue Dezimalstellen rundet.
//  So können die User:innen selber bestimmen,
//   auf wie viele Nachkommastellen sie runden möchten.
// Um es zu testen, schreibe:
// console.log(roundTo(3.1415926535, 5)); // 3.14159

// #(impizit return) https://demirels-organization.gitbook.io/javascript-tutorial/implicit-return

const roundTo = (a, b) => a.toFixed(b);

// the same as :

// const roundTo = (a, b) => {
//   return a.toFixed(b);
// };

console.log(roundTo(3.1415926535, 5)); //3.14159
