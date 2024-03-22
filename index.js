const menuBtn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

menuBtn.addEventListener("click", (e) => {
  menuBtn.classList.toggle("open");
  if (menu.classList.contains("hidden")) {
    menu.classList.replace("hidden", "flex");
  } else {
    menu.classList.replace("flex", "hidden");
  }
});
