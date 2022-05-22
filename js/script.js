const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelector(".nav-links li");

  let arr = [1, 2, 3, 4, 5];
  const [a, b, ...gest] = arr;
  console.log();
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
  });
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forward ${
        index / 4 + 0.3
      }s`;
    }
  });
};

navSlide();
