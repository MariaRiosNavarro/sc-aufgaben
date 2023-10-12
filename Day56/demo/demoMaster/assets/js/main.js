//  # === APIs ===
// * Eine API ist eine schnittstelle zwischen front- und backend.
// * API kommunizieren in derregel mit einem Server der wiederum mit der Daten Antwortet.

// ! ===== JSON =====
// * JSON (Javascript Object Notation) ist ein gängiger format um Daten zu speichern.
// * Unterschptzt verschieden Datentypen, wie zb: String, Zahlen, Boolena, Array, Objekte, und null
// * Hirrachische Struktur: Objekte können ander Objekte oder Array entahlten.... usw ...
// * Gibt es in verschiedene Programmiersprachen
// * Weit verbreitet.
// * Google Chrome Plugin: "JSON Formatter"

// - So schaut ein JSON aus: (wie ein obejkt)

// {
//     "id": 1,
//     "name": "Leen hallo",
//     "username" : "leen123"
// }

//  ! ==== Promise & fetch ====
console.log(fetch("./fakeData.json"));
// * 1. ein fetch ist eine Promise

// * 2. eine promis ist ein Objekt
// - ----> A. eine Promis ist ein Versprächen das den eventuellen Abschluss representiert. Der kann erfolgreich oder nicht erfolgreich sein. ABERRRRR -> wir bekommen aufjedenfall was zurück (daten oder fehler)
// - ----> B. eine Promise hat drei zustände:
// : ----> <pending> (wir haben noch keine antwort erhalten)
// : ----> <resolved> (Antowrt erhaltn, alles ging gut)
// : ----> <rejected> (Antowrt erhaltn, wir haben ein error bekommen)

// * 3. fetch ist asynchron, heißt es läuft pararellel zu anderen funktion. Andere funktionen müssen nicht auf den fetch warten bis er fertig ist.

// * 4. Eien PRomise kann mit den Methoden .then() und .catch() behalndelt werden, um auf der ergeins oder den fehler zu reagieren

// : --> ".then()" - Methode wird aufgerufen, wenn der Promise erfolgreich erfüllt wurde. Sie nimmt eine Funktion entgege, die das Ergebniss des Promises verarbeitet.

// : --> ".catch()" - Methode wird aufgerufen, wenn der Promise abgeloehnt wurde. Sie nimmt eine Funktion entgegen, die den Fehler des Promises behandelt

// ! ====== Lokale Daten fetchen ======

fetch("./fakeData.json")
  // .then((response) => console.log(response)) // - Geht nicht, daten sind im Body aber kein json fromat -> darum benötigen wir "response.json()"

  .then((response) => response.json()) // Hier werden die daten in JSON ungewandelt. und bekommen nochmal ein Promises zurück

  // zweites then bekommt dann die json daten von oberen .then ( die sind sozusagen verheiratet )

  .then((data) => {
    // Die JSON Daten befinden sich nun in "data" (data ist frei wählbar)
    console.log(data); // Ausgabe console
  })

  // - Fehler ist nun in error gespeicher
  .catch((error) => {
    console.error("Fehler bein laden der JSON Datein :-(", error);
  });

//   ! ==== APIs fetchen ====
// * Mit der fetch Methode fragen wir Daten beim Server an, wenn wir es nicht anders definieren, machen wir automatisch eine GET request
// * Wir nutzen die URL/den Endpoint der API. Je nachdem wir die URL aussseiht, bekommen wir unterschiedliche Daten zurück.*
// * Wie die URL aussehen muss, steht in der Dokumentantuion :-)

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const products = data;

    products.forEach((singelProduct) => {
      let name = singelProduct.title;
      let desctiption = singelProduct.description;
      let price = singelProduct.price;
      let img = singelProduct.image;
      let id = singelProduct.id;

      let productItem = document.createElement("div");

      // Title
      let titleProduct = document.createElement("h2");
      titleProduct.textContent = name;
      productItem.appendChild(titleProduct);

      //  Beschreibung
      let beschreibungProduct = document.createElement("p");
      beschreibungProduct.textContent = desctiption;
      productItem.appendChild(beschreibungProduct);

      //  Preis
      let preisProduct = document.createElement("h4");
      preisProduct.textContent = price + "€";
      productItem.appendChild(preisProduct);

      // IMG
      let image = document.createElement("img");
      image.setAttribute("src", img);
      image.setAttribute("alt", name);
      productItem.appendChild(image);

      // Button
      let moerInfo = document.createElement("button");
      moerInfo.textContent = "Mehr infos";

      moerInfo.addEventListener("click", () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
          .then((resspons) => resspons.json())
          .then((data) => console.log(data))
          .catch((error) => {
            console.error("Fehler mein der Deteil Produkte", error);
          });
      });
      productItem.appendChild(moerInfo);

      //   Erstellt eine div für jede Produkt
      document.querySelector(".products").appendChild(productItem);
    });
  })
  .catch((error) => {
    console.error("Fehler beim laden der Produkte", error);
  });
