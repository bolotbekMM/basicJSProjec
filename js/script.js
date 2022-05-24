const navSlide = () => {
  const burger = document.querySelector(".nav__burger");
  const nav = document.querySelector(".nav__links");
  const navLinks = document.querySelector(".nav__links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forward ${
          index / 4 + 0.3
        }s`;
      }
    });

    burger.classList.toggle("toggle");
  });
};

navSlide();
