const button = document.querySelector('[data-js="button"]');
const valueContent = document.querySelector('[data-js="value"]');

button.addEventListener("click", () => {
  let value = valueContent.textContent;
  const interval = setInterval(() => {
    if (value === 0) {
      clearInterval(interval);
    } else {
      value--;
      valueContent.textContent = value;
    }
  }, 100);
});
