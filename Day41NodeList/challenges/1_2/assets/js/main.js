let div = document.children[0].children[1].children[0];

const myFunction = () => {
  for (let i = 0; i < div.children.length; i++) {
    let child = div.children[i];
    child.classList.toggle("red");
  }
};
