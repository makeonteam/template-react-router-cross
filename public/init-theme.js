// initialize theme from localStorage
const initTheme = () => {
  const htmlElement = document.documentElement;

  const storedTheme = localStorage.getItem("theme");
  if (!storedTheme || storedTheme === "system") {
    // theme => system
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      htmlElement.dataset.theme = "dark";
    } else {
      htmlElement.dataset.theme = "light";
    }
  } else {
    // theme => light | dark | e-ink
    htmlElement.dataset.theme = storedTheme;
  }
};

initTheme();
