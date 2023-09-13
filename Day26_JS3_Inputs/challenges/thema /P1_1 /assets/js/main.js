const wrapper = document.querySelector("#wrapper");

function changeColor() {
  const color = document.querySelector("#color").value;
  console.log({ color });
  console.log(typeof color);
  wrapper.style.backgroundColor = color;
}
