const lightButton = document.getElementById("lightMode");
const darkButton = document.getElementById("dark-mode");
const mode = document.getElementById("modeSection");
const modeText = document.getElementsByClassName("light-text");

export function Mode() {
  lightButton.addEventListener("click", () => {
    mode.setAttribute("class", "lightMode");
    lightButton.setAttribute("class", "mode__dark-button");
    darkButton.setAttribute("class", "mode__dark-modeDarkButton");
    modeText[0].textContent = "light";
    modeText[1].textContent = "light";
  });

  darkButton.addEventListener("click", () => {
    mode.setAttribute("class", "dark-mode");
    lightButton.setAttribute("class", "mode__light-button");
    darkButton.setAttribute("class", "mode__dark-button");
    modeText[0].textContent = "dark";
    modeText[1].textContent = "dark";
  });
}
