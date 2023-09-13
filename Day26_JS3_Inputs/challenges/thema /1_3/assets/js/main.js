function calculate() {
  const year1 = Number(document.querySelector("#year1").value);
  const year2 = Number(document.querySelector("#year2").value);
  const result = year1 - year2;
  console.log(result);
  const output = document.querySelector("#output");
  //   output.innerHTML = result;

  //   extra
  if (year1 > year2) {
    const result = year1 - year2;
    output.innerHTML += `Die Differenz zwieschen den Jahr ${year1} und den Jahr  ${year2} ist ${result} Jahr/e <br> `;
  } else {
    const result = year2 - year1;
    output.innerHTML += `Die Differenz zwieschen den Jahr ${year2} und den Jahr  ${year1} ist ${result} Jahr/e <br> `;
  }
}
