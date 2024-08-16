const hamburgerIconEl = document.querySelector("[data-hamburger]");
const menuElem = document.querySelector("[data-menu]");

hamburgerIconEl.addEventListener("click", () =>
  menuElem.classList.toggle("hidden")
);
