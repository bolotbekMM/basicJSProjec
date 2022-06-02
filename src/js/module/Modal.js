import { clearForm } from "./Validation.js";

const modal = document.getElementById("myModal");
const btn = document.getElementsByClassName("pricing__by-now");
const closeBtn = document.getElementsByClassName("modal__close-btn")[0];
const standart = document.getElementById("standart");
const premium = document.getElementById("premium");
const lifetime = document.getElementById("lifetime");

export function Modal() {
  for (let button of btn) {
    button.addEventListener("click", openModalFunc);
  }
  closeBtn.addEventListener("click", closeModalFunc);
  window.addEventListener("click", backDropCloseModalFunc);
}

export function openModalFunc(event) {
  modal.style.display = "block";
  document.body.classList.add("overflow-h");

  event.target.name == "standartBtn"
    ? (standart.checked = true)
    : event.target.name == "premiumBtn"
    ? (premium.checked = true)
    : (lifetime.checked = true);
}

export function closeModalFunc() {
  clearForm();
}

function backDropCloseModalFunc(event) {
  event.target == modal && clearForm();
}
