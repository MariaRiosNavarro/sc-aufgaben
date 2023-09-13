let content = document.getElementById("contain");

function hero(heroName, heroPower, heroEnemy) {
  let name = `Mein:e Lieblingsheld:in ist: ${heroName}`;
  let power = `Er/sie hat die Fähigkeit: ${heroPower}`;
  let enemy = `Sein/ihr größte/r Gegner:in ist: ${heroEnemy}`;
  let result = name + power + enemy;
  console.log(result);
  //   extra
  content.innerHTML += `<h3 style="color:red">${result}</h3>`;
}

hero("Black Widow", "Spionage und Kampfkunst", "Taskmaster");
hero("Captain Marvel", "Übermenschliche Kräfte und Flugfähigkeit", "Skrulls");
hero("Scarlet Witch", "Hexenkräfte und Realitätsveränderung", "Thanos");
// not marvel but better
hero(
  "Superwoman",
  "Übermenschliche Kräfte, Flugfähigkeit und Hitzeblick",
  "Lex Luthor"
);
