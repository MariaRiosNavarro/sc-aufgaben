let content = document.getElementById("wrapper");

function intro3(name, alter, stadt) {
  let result = `Hallo, mein Name ist ${name}. Ich bin ${alter} Jahre alt und ich komme aus ${stadt}`;
  console.log(result);
  //   extra:
  content.innerHTML += `<p>Der Ninja Turtel sagt:" ${result} "</p>`;
}

intro3("Leonardo", 13, "New York");
intro3("Michelangelo", 14, "New York");
intro3("Donatello", 15, "New York");
