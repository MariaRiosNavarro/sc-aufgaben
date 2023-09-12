// !version 1

// function intro2(paramName) {
//   let name = "Supercoder:in";
//   console.log("Hi" + name + ". Mein Name ist " + paramName);
// }

// let resultMaria = intro2("Maria");
// let resultMarzio = intro2("Marzio");
// let resultSteffi = intro2("Steffi");
// let resultJan = intro2("Jan");

// let content = document.getElementById("container");
// content.innerHTML = "<h2>" + resultMaria + "</h2>";

// Die Funktion intro2 gibt nichts explizit zurück,
// daher sind resultMaria, resultMarzio, resultSteffi
// und resultJan alle undefined und so in HTML sichbar, nicht in der console.
//  Wenn wir den Inhalt
// in Ihr HTML-Dokument einfügen möchten, müssen
// die Funktion so ändern, dass sie einen Wert zurückgibt,
// den wir dann in das HTML einfügen können.

// !version2

// function intro2(paramName) {
//   let name = "Supercoder:in";
//   let result = "Hi " + name + ". Mein Name ist " + paramName;
//   console.log(result);
//   return result;
// }

// Komentiere der console log und guck der ergebniss in der Preview/console
// Das gleiche mit den return result

// let resultMaria = intro2("Maria");
// let resultMarzio = intro2("Marzio");
// let resultSteffi = intro2("Steffi");
// let resultJan = intro2("Jan");

// let content = document.getElementById("container");
// content.innerHTML = "<h2>" + resultMaria + "</h2>";
// content.innerHTML += "<h2>" + resultMarzio + "</h2>";
// content.innerHTML += "<h2>" + resultSteffi + "</h2>";
// content.innerHTML += "<h2>" + resultJan + "</h2>";

// !version 3

let content = document.getElementById("container");

function intro2(paramName) {
  let name = "Supercoder:in";
  let result = "Hi " + name + ". Mein Name ist " + paramName;
  console.log(result);
  content.innerHTML += "<h2>" + result + "</h2>";
}

intro2("Maria");
intro2("Marzio");
intro2("Steffi");
intro2("Jan");
