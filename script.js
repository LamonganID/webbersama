const nav = document.querySelector(".nav");
/* Togle */
document.querySelector("#menu").onclick = () => {
  nav.classList.toggle("active");
};

const Menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!Menu.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("active");
  }
});
