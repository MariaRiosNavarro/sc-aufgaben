console.log("--------let x = 20, let y = 30 ------");
let x = 20;
let y = 30;
console.log("x + y =", x + y);
console.log("x - y =", x - y);
console.log("y - x =", y - x);
console.log("x * y =", x * y);
console.log("x / y =", x / y);
let z = 10;
// console.log((x * y) / z);
let resultOne = (x * y) / z;
console.log(resultOne);
let a = 15;
let b = 9;

console.log("--------let a = 15, let b = 9 ------");
console.log("a + b =", (a += b)); // = a+b
console.log("a - b =", (a -= b)); // = a-b
console.log("a * b =", (a *= b)); // = a*b
console.log("a / b =", (a /= b)); // = a/b

console.log("a % b =", (a %= b)); // = a%b
let c = 20;
console.log("let c = 20");
console.log({ a });
console.log({ b });
let resultTwo = (a + b) * c;
console.log("(a+b)*c =", resultTwo);
a++;
console.log("a++ =", a);
b--;
console.log("b-- =", b);
let resultThree = a - b;
console.log("a-b = ", resultThree);
console.log("resultOne % resultTwo =", (resultOne %= resultTwo));
