window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu_wrapper'),
    menuItem = document.querySelectorAll('.menu_active_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_wrapper_open');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_wrapper_open');
        })
    })
})