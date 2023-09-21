// # Numbers Methoden

// * toFixed() rundet zu die nächste Ganzazhlt. ERGEBNIS IST EIN STRING!!! ACHTUNG

const num1 = 12.876374;
console.log(num1.toFixed());
console.log(typeof num1.toFixed());

// Als argument können wir die Nummer mitgebe wie sie abgerundet werden soll

console.log(num1.toFixed(3)); //

//* Number() wandelt to Number

const num2 = "2";
console.log(typeof num2);
console.log(typeof Number(num2));

const num3 = "Steffi";
console.log(Number(num3)); //NaN

// # Math Objecet Methoden (die wichigsten). Alle sind in console.log(Math);

console.log(Math);

// * Math.round(); -wie toFixed aber bleibt als NUmber!. Hier kann ich aber NICHT die komma stellen bestimmen so wie .toFixed();

const num4 = 13.39;
console.log(Math.round(num4)); //13

// * Math.ceil rundet immer auf

const num5 = 14.00000001;
console.log(Math.ceil(num5)); //15

// * Math.floor() - rundet immer ab

const num6 = 19.999999;
console.log(Math.floor(num6)); //19

// * Math.random() - immer eine zufallszahl zwieschen 0 und 1 aus (1 nicht inkludiert!);

let random = Math.random();
console.log(random);

//# MAn kann konbinieren

// gibt mir ein random numer von 0 -10

console.log(Math.round(random * 10)); //

console.log(Math.round(random * 10 + 1));

// zwieschen zahl 1-10 ohne 10

console.log("test", random * 10);

// zufallszahl 1-10 (inklusive. wurfel kein 0. Daher Math.ceil, die nach oben rundet, also nie nach unter zu 0)

console.log(Math.ceil(random * 10));
