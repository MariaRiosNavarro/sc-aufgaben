// Apis, Basic Promises- Fech: Versprechen

// # =========APIS (Schnittstellen Frontend/BAckend)

//# Selber machen in werden wir in Backend - RESTAPI

// gibt es viele kostenlos aber es gibt viele bezahlen

// zb news api

// Bezahlen, geht nach verkehr.. wie viele anfragen

//getrakt- registrieren, kriege ein key und dann kann ich alles nutzen
// Aufpassen mit loops und fetch...Wenn ein Loop ist dass man nicht ewig fetch, sonst wenn eine creditkarte dabei ist, kann teuer werden.

// Fake Store
// https://fakestoreapi.com/products  Jason Formatter chrome extension um besser zu sehen

// Egal welche programiersprache, der standar format für die information ist der JSON

// #===========   JSON

//* JSON ist eine gängiger format um Daten zu speichern
//* Unterchätz verschiedene Datentypen, wie zb. String, Zahlen, Boolean, Array, Objecte und null
//* Hierarkische Struktur: Objekte können andere Objekte oder Array enthalten..- usw...
// * Weit verbreitet
// * Google Chrome Plugin um die Daten besser zu sehen. "JSON Formatter"

// So sieht ein Json an:

//

// !==== Promise & fetch ====

// Pending, Result, Rejected. Fetch is asyncron. Wir müssen sicher stellen ob die daten angekommen sind
// Während JS läuft cronologisch, wird eine Promise/Asyncorn (Die daten werden eventuell geschickt), die normale code von JS lauft weiter:

// console.log(fetch("../filmData.json")); //Jetzt Promise {<pending>}

//* 1- ein fetch ist eine Promise

//*2, eine promis ist ein Object

//* Promis ist ein Versprechen, des eventuell präsentieren wird. Derkann erfolgreih oder nicht sein.
//* ABER wir bekommen immer was, daten ode fehler

// :---- <pending>
// :---- <resolved>
// :---- <rejected>

// * 3. fetch ist asyncron, heiß es läuft paralell zu anderen Funktion. Andere funktionen müssen nicht auf den fetch warten

// *4. Promise 2 methoden: then() und catch(), um der ergebniss oder den fehler zu reagieren

// : ----> then()
// : ----> catch()

// .then((response) => console.log(response));im body sind die daten aber kann ich nicht lesen, ich muss die in json unwandeln

// fetch("./assets/js/db/filmData.json") // wenn data in assets/js/db/filmData.js
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

let films;

fetch("./filmData.json")
  .then((response) => response.json()) // wenn data neben index.html
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error Message", error);
  });

console.log(films);

// Wir fetchen was echtes
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const products = data;
    products.forEach((element) => {
      let name = element.title;
      let description = element.description;
      let price = element.price;
      let id = element.id;
      let title = document.createElement("h3");
      title.textContent = name;
      let desc = document.createElement("p");
      desc.textContent = description;
      let pric = document.createElement("p");
      pric.textContent = price;
      let idr = document.createElement("span");
      idr.textContent = id;

      let card = document.createElement("section");
      card.append(title, desc, pric, idr);

      document.body.append(card);

      // Und wenn wir ein button in jeder element wollen? Mussen hier machen und ein fetch hier machen (fetch in fetch)

      let moreInfo = document.createElement("button");
      moreInfo.textContent = "More Infos";
      moreInfo.addEventListener("click", () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then((response) => response.json())
          .then((data) => console.log(data));
      });

      card.append(moreInfo);
    });
  });

//# Um die daten RAUS zu holen müssen drin in then bleiben

let url = "https://fakestoreapi.com/products";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error Message", error);
  });
