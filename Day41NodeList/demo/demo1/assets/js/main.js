// # ==== HTML Collection ====
// Eine HTML Collection ist eine objektähnliches Array von HTML Elementenknoten. Es wird in JS verwendet um eine Gruppe von Elementen im DOM = (Document Object Model) zuzugreifen

// - HTMLCollections sind live! Sobald sich das HTML ändert, ändert sich auch die collection
// - index Basiert - Das erste Element ist 0
// - Wir oft beim document.getElementByClassName(), document.getElementByTagName() oder elment.children benutzt. (da bekommen wir eine collection zurück)

// * So bekomme ich zugriff auf die einzelne HTML Elemente
console.log(document.forms);

// Holt ganze Collection von From
let myForm = document.forms.loginForm;
console.log(myForm);

// Holt Input feld raus
console.log(myForm.username);

// Holt Value von input raus
console.log(myForm.username.value);

// Holt Value aus email
console.log(myForm.email.value);

// Holt button
console.log(myForm.button.value);

// # ==== NodeList & HTML Collection ====
// Eine NodeList ist eien Sammlung von Knote, darum Nodes. Img Gegensatz von HTML Collection können Nodelist alle Arten von DOM Knoten enthalten

// - Node können statisch oder live sein.
// - index Basiert - Das erste Element ist 0
// - NodeList unterstüzt mehrer Methoden als HTML Collections. Mann kannn zb forEach-Methoden verwenden, um durch die List zu loopen.
// - NodeList werden oft als Rückgabewerte von DOM Methoden wie document.quarySelectorAll() oder Node.childeNodes erhalten.

// * WICHTG
// mit dem quarySelectortAll() bekommen wir in der regel eine NodeList zurück!
// mit dem getElementByTagName bekommen wir in der regel eine HTML Collection zurück.

const liHTMLCollection = document.getElementsByTagName("li");
const liNodelist = document.querySelectorAll("li");

console.log("%c Collection vs Node", "color: red");
console.log(liHTMLCollection);
console.log(liNodelist);

// So bekomme ich einzelene Child Elemente
console.log(document.body.children[0]); // Ich beekomm das ganze From
console.log(document.body.children[0].children); // Ich bekomme die Inputs
console.log(document.body.children[1].children); // Ich bekomme die li´s raus

// - So fügen wir weas in unseren childern ein
document.body.children[0].innerHTML += "<p> Ich bin im From Element </p>";
document.body.children[1].innerHTML +=
  "<li> Ich bin noch ein li Tag :-))) </li>";

// - So  machen wir den Text von dem Input Feld rot
// Ich Navigiere mit der erste [0] und der zweiten [0] zu meinen objekt hinein
document.body.children[0].children[0].style.color = "red";

// # ==== fristElementChild & lastElementChild ====
console.log(document.body.firstElementChild); //form -> gibt das ERSTE element von mein HTML
console.log(document.body.lastElementChild); //Script -> gibt das LETZTE Element von HTML zurück
console.log(document.body.children[0].lastElementChild); // So kann man auch erst reinnavigieren und dann lastElementChild zb benutzen

// ! ==== createElement, appendChild =====
console.log("%c createElement, appendChild ", "color: red");

// * Element in das HTML Einfügen

// 1. erstellt ein Element deiner wahl
let div = document.createElement("div");

// 2. erstellt Text für dein Div
div.textContent = "Test Div über textContent";

// 3. styled dein element
div.style.height = "100px";
div.style.backgroundColor = "red";

// 4. fügt ein Element an das ende des bodys hinzu. Ich kann natürlich auch statt body eine Variabel benutzen wo ich es sspeziell reinschieben möchte
document.body.appendChild(div);

// # ===== forEach & creatElement, appendChild ====
let socialMedia = ["meta", "tw", "ig"];

console.log(socialMedia);

socialMedia.forEach((elt) => {
  console.log(elt);
  //  wo soll es erstellt werden
  let listItem = document.createElement("li");
  // in elt sind die Daten gespeichet und werden nun in Listiem gepusht
  listItem.textContent = elt;
  // "ListItem wird in das HTML Geschrieben"
  document.body.firstElementChild.appendChild(listItem);
});

// # ==== setAtteribute("attribute", "attribute-inhalt") ====
// So kann ich ein Bild in das HTML schreiben mit den Set Attribute

let image = document.createElement("img");
// Hier definiere ich die quelle
image.setAttribute("src", "https://picsum.photos/200/300");
// Hier definiere ich mein alt text
image.setAttribute("alt", "radomImg :-)");
// Hier füge ich eine klasse hinzu
image.setAttribute("class", "radom-class-img");
// Hier schriebe in es in das HTML
document.body.appendChild(image);

// - so kann ich es mit innerHTML machen
document.body.innerHTML +=
  '<img class="hallo" src="https://picsum.photos/200/300" alt="testtt" >';

//  # ==== setAttribut & forEach ====

let imgArr = [
  "https://picsum.photos/200",
  "https://picsum.photos/201",
  "https://picsum.photos/202",
  "https://picsum.photos/203",
  "https://picsum.photos/204",
  "https://picsum.photos/205",
  "https://picsum.photos/206",
  "https://picsum.photos/207",
];

console.log(imgArr.length);

// 1 Schleife erstellen
imgArr.forEach((elt) => {
  //  2 erstellen von img
  let img = document.createElement("img");
  console.log(img);

  //   version mit src und alt

  img.src = elt;
  img.alt = "alt test";
  img.className = "class-test";

  //  Andere
  //   img.setAttribute("src", elt);
  //   // 4 alt text hinzufügen
  //   img.setAttribute("alt", "random");

  //  version 1
  //   img.setAttribute("class", "nochmal-carinas-klasse");
  //   //  version 2
  //   img.className = "carinas-klasse";

  // 5 schreibt es ins html
  document.body.appendChild(img);

  // - so machen wir es mit innerHTML
  document.body.innerHTML += `<img src=${elt} alt="noch mehr random bilder" >`;
});
