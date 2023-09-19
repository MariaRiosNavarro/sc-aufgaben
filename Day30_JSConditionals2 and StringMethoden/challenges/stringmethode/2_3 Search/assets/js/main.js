// --------!save variables

const search = document.querySelector('[data-js="search-input"]');
console.log({ searchInput });

const textArticle = document.querySelector('[data-js="text"]');
// * extract the string of the article:
console.log({ textArticle });
let articleString = textArticle.innerHTML;
console.log({ articleString });
// console.log(articleString);
console.log(typeof articleString);

// *

//---------!function

let searchText = " ";

function searchInput() {
  // extract searchInput value

  let searchWord = search.value;
  console.log(searchWord);

  //   save the answer (raplaced String)in one variable
  searchText = articleString.replaceAll(
    `${searchWord}`,
    `<span class="highlight">${searchWord}</span>`
  );
  console.log(searchText);

  //   give the new answer AS innerHtml for the article

  textArticle.innerHTML = searchText;
}
