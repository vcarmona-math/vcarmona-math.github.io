const root = document.documentElement;
const toggle = document.querySelector("#theme-toggle");

if (localStorage.getItem("site-theme") === "light") {
  root.dataset.theme = "light";
}

if (toggle) {
  function updateButton() {
    const isLight = root.dataset.theme === "light";
    toggle.textContent = isLight ? "Dark" : "Light";
    toggle.setAttribute(
      "aria-label",
      isLight ? "Cambiar a modo oscuro" : "Cambiar a modo claro"
    );
  }

  updateButton();

  toggle.addEventListener("click", () => {
    const isLight = root.dataset.theme === "light";

    if (isLight) {
      delete root.dataset.theme;
      localStorage.setItem("site-theme", "dark");
    } else {
      root.dataset.theme = "light";
      localStorage.setItem("site-theme", "light");
    }

    updateButton();
  });
}
