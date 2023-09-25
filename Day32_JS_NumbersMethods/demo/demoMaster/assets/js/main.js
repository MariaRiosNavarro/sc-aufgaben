// * STRING TRENNMASCHINE

// - 1: Daten holen von input
// - 2: Output definieren
// - 3: Checken ob das Trennwort/Zeichen überhaupt im Satz vorkommt
// - 4: Ermitteln von index vom Trennwort
// - 5: länge von Trennwort herausfinden
// - 6: Neue constante erstellen wo trenn index mit trennwort länge addiert wird (für "dannach trennen")
// - 7: Abfrage welches Radio gerade aktiv ist mit If else

const trennen = () => {
  // 1 Values auslesen
  const inputZeichen = document.querySelector(".zeichenkette").value;
  const trennZeichen = document.querySelector(".trennung").value;
  const vorneOdHinten = document.querySelector(
    'input[name="davor-dannach"]:checked'
  ).value;

  console.log({ inputZeichen }, { trennZeichen }, { vorneOdHinten });

  // 2 Outputs
  const davor = document.querySelector(".davor");
  const danach = document.querySelector(".danach");

  // * 3 HIER KOMMEN WIR REIN WENN ER DAS TRENNWORD FINDET
  if (inputZeichen.includes(trennZeichen)) {
    // 4 ermittelt den indes dex suchwortes mit (indexof)
    const indexTrennung = inputZeichen.indexOf(trennZeichen);
    console.log({ indexTrennung });

    // 5 schaut wie lange das trennwort ist
    const trennlength = trennZeichen.length;
    console.log({ trennlength });

    // 6 gibt mir den indes nach das Trennwort aus.
    const afterSearchName = indexTrennung + trennlength;
    console.log({ afterSearchName });

    // * 7 HIER KOMMEN WIR REIN WENN DAVOR AUSGEWÄHLT IST & ER DAS WORT GEFUNDEN HAT
    if (vorneOdHinten == "davor") {
      // gibt den vordernetel aus
      const vorderTeil = inputZeichen.slice(0, indexTrennung);
      // gibt den hiintern teil aus
      const hinterTeil = inputZeichen.slice(indexTrennung);

      davor.innerHTML = vorderTeil;
      danach.innerHTML = hinterTeil;

      // * HIER KOMMEN WIR REIN WENN DANNACH AUSGEWÄHLT IST & ER DAS WORT GEFUNDEN HAT
    } else {
      // gibt den vordernetel aus
      const vorderTeil = inputZeichen.slice(0, afterSearchName);
      // gibt den hiintern teil aus
      const hinterTeil = inputZeichen.slice(afterSearchName);

      davor.innerHTML = vorderTeil;
      danach.innerHTML = hinterTeil;
    }

    // * HIER KOMMT ER REIN WENN ER DAS WORT NICHT IM SATZ FINDET
  } else {
    davor.innerHTML =
      "ERROR - Suchwort konnte nicht im Satz gefunden werden...";
    danach.innerHTML = "";
  }
};

// # ====== NUMBER METHODEN ========
// Nummer werde in JS immer mit einen . getrennt nicht mit einem ,

// * toFixed()
// Die toFixed( Methode rundet eine Zahl auf die nächste Ganzzahl auf oder ab + Sie Wandelt eine Zahl in einem String)

const num1 = 14.4344534;
console.log(num1.toFixed());
console.log(typeof num1.toFixed());

// So bekomme ich direkt eine nummer zurück
console.log(Number(num1.toFixed(3)));

//Als Argumnet können wir eine Nummer mitgeben wie sie gerundet werden soll
console.log(num1.toFixed(3));

// * Number()
// Die Number Methode wandelt ein Wert in einer Number um

const num2 = "2";
console.log(typeof num2);
console.log(typeof Number(num2));

const num3 = "Steffi";
console.log(Number(num3));

// # ====== MATH OBJECT METHODEN ========
// So werden alle funktionen von "Math" angezeigt
console.log(Math);

// * Math.round()
// Die Math.round Methode rundet ebenfalls wie toFixed eine Zahl auf oder ab
const num4 = 13.3;
console.log(Math.round(num4));

// * Math.ceil()
// Diese Methode rundet immer auf!
const num5 = 14.000000001;
console.log(Math.ceil(num5));

// * Math.floor()
// Diese Methode rundet immer ab!
const num6 = 15.999999;
console.log(Math.floor(num6));

// * Math.random()
// Die Math.random() Mathode gibt uns immer eine zufällig zahl zwischen 0 und 1 aus ( 1 nicht inkludiert! )
console.log(Math.random());
// Gibt dir eine radom nummer von 0 - 10
console.log(Math.round(Math.random() * 10));
// Gibt dir eine ramdiom Zahl von 1- 11 aus
console.log(Math.round(Math.random() * 10 + 1));
// Gibt uns eineZahl zwischen 0 und 10 aus ( 10 nicht inkludiert)
console.log(Math.random() * 10);

// Gibt uns eine zufällige Zahl Zwischen 1 und 10 (10 Inkludiert)
// Wenn ich zb ein Würffel Programmiere brauch ich die Seite 0 nicht. Daher bietet sich Math.ceil gut an
console.log(Math.ceil(Math.random() * 10));

// *meine test

console.log("Mein Numbers");

let numA = 0.12345;
console.log("A", numA);

let numB = 0.56789;
console.log("B", numB);

// let numC =

console.log("---------to fixed");

console.log(numA.toFixed()); //0
console.log(numA.toFixed(3)); //0.123
console.log(numB.toFixed()); //1
console.log(numB.toFixed(3)); //0.568

console.log("---------Math.round");
console.log(Math.round(numA)); //0
console.log(Math.round(numB)); //1

console.log("---------Math.ceil");
console.log(Math.ceil(numA)); //1
console.log(Math.ceil(numB)); //1

console.log("---------Math.floor");
console.log(Math.floor(numA)); //0
console.log(Math.floor(numB)); //0
