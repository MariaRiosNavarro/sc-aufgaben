function duplicate() {
  const number = Number(document.querySelector("#number").value);
  console.log(typeof number);
  const result = number * 2;
  const output = document.querySelector("#output");
  output.innerHTML += result;

  // extra:

  const firstNumber = document.querySelector("#firstNumber");
  firstNumber.innerHTML += `<p style="color:green;">Das Doppelt von ${number} ist</p>`;
}
