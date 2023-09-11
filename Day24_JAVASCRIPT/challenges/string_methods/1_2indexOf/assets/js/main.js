//introduction of indexOF()
const txt =
  "How inappropriate to call this planet Earth, when clearly it is Ocean.";
let letterIndexSmallH = txt.indexOf("h");
console.log({ letterIndexSmallH }); //27
let letterIndexUppercaseH = txt.indexOf("H");
console.log({ letterIndexUppercaseH }); //0
console.log("Remember: CASE SENSITIVE");
//
let earthIndex = txt.indexOf("Earth");
console.log("earth index is", earthIndex); // 38

let moonIndex = txt.indexOf("Moon");
console.log("moon index is", moonIndex); // -1
