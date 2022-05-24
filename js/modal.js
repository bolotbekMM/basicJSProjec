const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const closeBtn = document.getElementsByClassName("modal__closeBtn")[0];

btn.onclick = function () {
  modal.style.display = "block";
};
closeBtn.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
