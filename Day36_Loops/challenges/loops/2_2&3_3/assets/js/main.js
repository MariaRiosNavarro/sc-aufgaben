// A. Save variables & Outputs

const loopNumber = document.querySelector('[data-js="loopnumber"]');

const output = document.querySelector('[data-js="output"]');

// 3_2

const loopNumber2 = document.querySelector('[data-js="loopnumber2"]');

const output2 = document.querySelector('[data-js="output2"]');

// B.-Function 2_3

let smallO = "";

const saveNumber = () => {
  // C- Save Value

  let loop = Number(loopNumber.value);

  console.log(loop);

  let allOs = "";

  for (let i = 1; i <= loop; i++) {
    allOs = smallO += "o";
  }
  console.log(allOs);

  output.innerHTML = `L<span class="red">${allOs}</span>p `;
};

// B.-Function 3_3

const saveNumber2 = () => {
  // C- Save Value

  const loop = Number(loopNumber2.value);
  let newText = "";
  for (let i = 0; i < loop; i++) {
    if (i % 2 == 0) {
      newText += "o";
    } else {
      newText += "0";
    }
  }
  output2.innerHTML = `L${newText}p`;
};
