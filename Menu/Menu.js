
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
  // menu.classList.toggle('menu--open');
  if(menu.style.left === "0px") {
    $(".menu").animate({left: '-350px'});
  } else {
    $(".menu").animate({left: '0px'});
  }
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', function() {
  toggleMenu();
});

document.addEventListener('click', function() {
  if(menu.style.left === "0px") {
    toggleMenu();
  }
});