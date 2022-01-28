function menuhanburgue() {
  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menuItem");
  const hamburger = document.querySelector(".hamburger");
  const closeIcon = document.querySelector(".closeIcon");
  const menuIcon = document.querySelector(".menuIcon");

  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }
  hamburger.addEventListener("click", toggleMenu);
}
menuhanburgue();
//navegação planet

function navegacaoplanet() {
  const planet = document.querySelectorAll(".js-menutab li");
  const planetlista = document.querySelectorAll(".js-content section");
  planetlista[0].classList.add("ativo");

  function activetab(index) {
    planetlista.forEach((section) => {
      section.classList.remove("ativo");
    });
    planetlista[index].classList.add("ativo");
  }

  planet.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activetab(index);
    });
  });
}
navegacaoplanet();
//link ativo border100%
function linkativo() {
  const ativomenu = document.querySelectorAll(".js-menutab li");
  ativomenu[0].classList.add("ativo");
  function activetab(index) {
    ativomenu.forEach((section) => {
      section.classList.remove("ativo");
    });

    ativomenu[index].classList.add("ativo");
  }

  ativomenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activetab(index);
    });
  });
}
linkativo();

function ativarlinkmenu() {
  const linkMenu = document.querySelectorAll(".js-menu li");
  console.log(ativarlinkmenu);
}
