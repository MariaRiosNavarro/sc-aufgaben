let txt2 =
  "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";
let positionSemikolon = txt2.search(";");
console.log({ positionSemikolon }); // 168

let positionGreen = txt2.search("green");
console.log({ positionGreen }); // 6

let positionBlue = txt2.search("blue");
console.log({ positionBlue }); // -1
