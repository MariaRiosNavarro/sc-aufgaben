const output1 = document.querySelector('[data-js="concatenation"]');
const output2 = document.querySelector('[data-js="literal"]');

vorname = "Natasha";
nachname = "Romanova";
alter = 34;
geburtsort = "St. Petersburg, Russland";
groesse = 1.7;
gewicht = 58;
hobbys = ["Kampfkunst", "Spionage", "Motorradfahren"];
lieblingsessen = "Borschtsch";

let textConcatenation1 =
  "Black Widow is " +
  vorname +
  nachname +
  ", Sie ist " +
  alter +
  " Jahre alt. Sie ist aus " +
  geburtsort +
  " und Sie ist " +
  groesse +
  " meter Groß, und " +
  gewicht +
  " Kilo schwer. ";
let textConcatenation2 =
  "Ihre Hobbys sind " +
  hobbys[0] +
  ", " +
  hobbys[1] +
  " und " +
  hobbys[2] +
  ". Ihre Lieblingsspeise ist " +
  lieblingsessen;

let concatenationText = textConcatenation1 + textConcatenation2;
console.log(concatenationText);

output1.innerHTML = concatenationText;

let literal = `Black Widow is ${vorname} ${nachname}, Sie ist ${alter} Jahre alt. Sie ist aus ${geburtsort} und Sie ist ${groesse} Meter groß, und ${gewicht} Kilo schwer. Ihre Hobbys sind ${hobbys[0]}, ${hobbys[1]} und ${hobbys[2]}. Ihre Lieblingsspeise ist ${lieblingsessen}.`;

output2.innerHTML = literal;
