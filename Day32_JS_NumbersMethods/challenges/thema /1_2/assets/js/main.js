let array = [3.14, 193.4464, 0.8596433607, -2.940629089];

const rundNumber = (a) => Math.round(a);

let newArray = array.map((num) => rundNumber(num));

console.log({ newArray }); //[3, 193, 1, -1]
