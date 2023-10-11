const output = document.querySelector('[data-js="out"]');

const now = new Date();

output.innerHTML = ` ${now.getDate()} / ${
  now.getMonth() + 1
} / ${now.getFullYear()}`;
