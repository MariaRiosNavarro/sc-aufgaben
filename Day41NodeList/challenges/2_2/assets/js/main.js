console.log(document.forms);

let myForm = document.forms.loginForm;

const button = myForm.lastElementChild;

button.addEventListener("click", () => {
  console.log(
    `Full name : ${myForm.vorname.value} ${myForm.nachname.value}, Land:${myForm.land.value} `
  );
});
