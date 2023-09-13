const headline = document.querySelector("#headline");

const change = () => headline.classList.add("bck-red");
// the same as:
// function change(){
//     headline.classList.add("bck-red");
// }
const reset = () => headline.classList.remove("bck-red");
