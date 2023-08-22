function feeling() {
  let range = document.querySelector("input[type='range']").value;
  let output = document.querySelector(".output");
  output.innerHTML = `ich fühle mich wie ein ${range}`;
}
