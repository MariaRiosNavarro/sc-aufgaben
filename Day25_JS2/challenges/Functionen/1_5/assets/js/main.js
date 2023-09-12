let content = document.querySelector(".text");

function mathematik(a, b) {
  let multiplicationText = `Multiplikation von ${a} und ${b}: `;
  let divisionText = `Division von ${a} und ${b}: `;
  let multiplication = a * b;
  let division = a / b;
  let resultMultiplication = multiplicationText + multiplication;
  console.log(resultMultiplication);
  let resultDivision = divisionText + division;
  console.log(resultDivision);
  //   extra
  let result = resultMultiplication + "<br>" + resultDivision;
  content.innerHTML += `<h3>Die Ergebnisse sind: <br> <span style="color:green">${result}</span></h3>`;
}

mathematik(10, 5);
mathematik(30, 20);
mathematik(300, 7);
mathematik(18, 3);
