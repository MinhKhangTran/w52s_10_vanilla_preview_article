const btn = document.querySelector(".card__footer--button");
const tooltip = document.querySelector(".tooltip");

btn.addEventListener("click", (e) => {
  tooltip.classList.toggle("active");
});
