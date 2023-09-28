let numArr = [5, 22, 15, 100, 55];

const out = document.querySelector('[data-js="output"]');

let divisor = 1;

const searchDivider = (num) => {
  for (let i = 1; i <= 100; i++) {
    divisor = i;
    if (
      num % divisor === 0 &&
      divisor <= num &&
      divisor !== num &&
      divisor !== 1
    ) {
      let result = num / divisor;
      console.log(
        `${num} is devidable by ${divisor} . The result is ${result}`
      );
      out.innerHTML += `${num} is devidable by ${divisor} . The result is ${result} <br>`;
    }
  }
};

for (let j = 0; j < numArr.length; j++) {
  searchDivider(numArr[j]);
}
