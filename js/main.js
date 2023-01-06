const menuBars = document.querySelector(".menu-bars");
const headerList = document.querySelector(".nav-header ul");
const etepamsCar = document.querySelector(".logo-etepam");

function activeMenu(e) {
  headerList.classList.toggle("active");
}

menuBars.addEventListener("click", activeMenu);

setInterval(() => {
  if (window.innerWidth < 600) {
    etepamsCar.src = "imgs/etepam-logo-fechada.png";
  } else {
    etepamsCar.src = "imgs/etepam-logo-aberta.png";
  }
  // if(screen.width > )
}, 100);
