function returnOne() {
  return 1;
}

let x = 1;
let y = returnOne();

if (x === y) {
  console.log("Wird das gedruckt?");
}

// extra

function one() {
  1;
}

function oneLog() {
  console.log(1);
}

let z = one();
let i = oneLog();

if (x === z) {
  console.log("was ist passiert?");
} else {
  console.log({ z }); // undefined
}

if (x === i) {
  console.log("was ist passiert?");
} else {
  console.log({ i }); // undefined
}
