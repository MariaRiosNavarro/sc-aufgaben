let numArray2 = [36, 324, 122, 62, 98, 88, 99, 1000, 82731987238917937812];

let copyOriginal = numArray2.slice();

console.log(copyOriginal.sort((a, b) => a - b));
