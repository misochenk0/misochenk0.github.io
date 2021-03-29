window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header-mobile'),
    menuItem = document.querySelectorAll('.header-mobile__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header-mobile_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header-mobile_active');
        })
    })
})


$(document).ready(function(){
    $('.inspiration__slider').slick({
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        autoplay: true,
        adaptiveHeight: true,
        arrows: false,
        autoplaySpeed: 3000
    });
})


$(window).scroll(function(e) {
    const height = $(this).scrollTop();
    $('.header-about__fixed')[height >= 100 ? 'addClass' : 'removeClass']('header-about_scroll');
  });