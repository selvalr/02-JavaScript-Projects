let hamburger = document.querySelector(".hamburger");
let navbar = document.getElementById("nav-link");
let linkes = document.querySelectorAll(".links");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("hide");
  hamburger.classList.toggle("lines-rotate");
});

for (i = 0; i <= linkes.length; i++) {
  linkes[i].addEventListener("click", () => {
    navbar.classList.toggle("hide");
  });
}
