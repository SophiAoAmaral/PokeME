const menuList = document.querySelector(".list-inicio");
const menuButton = document.querySelector(".button");

function openMenu(){
    menuList.classList.toggle('active');
  menuButton.classList.toggle('active');
}

menuButton.addEventListener('click', openMenu)