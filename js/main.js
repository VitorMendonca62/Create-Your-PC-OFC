const menuBars = document.querySelector(".menu-bars");
const headerList = document.querySelector(".nav-header ul");
const etepamsCar = document.querySelector(".logo-etepam");

function activeMenu(e) {
  headerList.classList.toggle("active");
}

menuBars.addEventListener("click", activeMenu);

setInterval(() => {
  if (window.innerWidth < 600) {
    etepamsCar.src = "/imgs/etepam-logo-fechada.png";
  } else {
    etepamsCar.src = "/imgs/etepam-logo-aberta.png";
  }
}, 100);

const start = document.querySelector("#inicio");

function goTheStart(e) {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

start.addEventListener("click", goTheStart);
