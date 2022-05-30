const lightButton = document.getElementById("lightMode");
const darkButton = document.getElementById("darkMode");
const mode = document.getElementById("modeSection");
const modeText = document.getElementsByClassName("lightText");

lightButton.addEventListener("click", () => {
  mode.setAttribute("class", "lightMode");
  lightButton.setAttribute("class", "mode__darkButton");
  darkButton.setAttribute("class", "mode__darkModeDarkButton");
  modeText[0].textContent = "light";
  modeText[1].textContent = "light";
});

darkButton.addEventListener("click", () => {
  mode.setAttribute("class", "darkMode");
  lightButton.setAttribute("class", "mode__lightButton");
  darkButton.setAttribute("class", "mode__darkButton");
  modeText[0].textContent = "dark";
  modeText[1].textContent = "dark";
});
