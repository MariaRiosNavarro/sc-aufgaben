let unsereHaustiere = [
  {
    tiertyp: "Katze",
    names: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    names: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);

unsereHaustiere[1].names = ["snoopy", "dada"];

console.log(unsereHaustiere[1]);
console.log(unsereHaustiere[1].names);
