let numArr = [5, 22, 15, 100, 55];

const out = document.querySelector('[data-js="output"]');

let divisor = 1;

// const searchDivider = (num) => {
//   for (let i = 1; i <= 100; i++) {
//     divisor = i;
//     if (
//       num % divisor === 0 &&
//       divisor < num &&
//       divisor !== num &&
//       divisor !== 1
//     ) {
//       let result = num / divisor;
//       console.log(
//         `${num} is devidable by ${divisor} . The result is ${result}`
//       );
//       out.innerHTML += `${num} is devidable by ${divisor} . The result is ${result} <br>`;
//     }
//   }
// };

// for (let j = 0; j < numArr.length; j++) {
//   searchDivider(numArr[j]);
// }

// version for of

const searchDivider = () => {
  for (const element of numArr) {
    // einzelne werte von array
    for (let i = 0; i <= element; i++) {
      if (element % i === 0 && i !== 1 && i !== element) {
        console.log(i);
        console.log(
          ` ${element} ist telibar durch ${i}. Ergebnis ist ${element / i}`
        );
        out.innerHTML += `${element} is devidable by ${i} . The result is ${
          element / i
        } <br>`;
      }
    }
  }
};

searchDivider();

// version mit continue (um werte zu überspringen)

// let numArr = [5, 22, 15, 100, 55];

// for (let i = 0; i < numArr.length; i++) {
//   for (let j = 0; j < numArr[i]; j++) {
//     if (j === 1) {
//       continue;// wenn mit sich selbst teilbar ist, brauchen wir den wert nicht, dann überspringen den if teil von unten und machen weiter mit den nächsten loop
//     }

//     if (numArr[i] % j === 0) {
//       console.log(`${numArr[i]} is devidable by ${j}. The result is: ${numArr[i] / j}`);
//     }
//   }
// }


