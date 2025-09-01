const burger_menu = document.querySelector(".hamburger-icon");
const sidebar_menu = document.querySelector(".sidebar-nav");
const sidebar_head = document.querySelector('.sidebar-head');
const sidebar_x = sidebar_head.querySelector(':scope > svg');

burger_menu.addEventListener("click", () =>{
    sidebar_menu.classList.toggle('sidebar-nav-reveal');
});

sidebar_x.addEventListener("click", () => {
    sidebar_menu.classList.toggle('sidebar-nav-reveal');
});