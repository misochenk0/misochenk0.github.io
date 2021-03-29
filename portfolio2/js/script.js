const hamburger = document.querySelector(".hamburger"),
        menu = document.querySelector(".menu"),
        closeElem = document.querySelector(".menu__close"),
        overlay = document.querySelector(".menu__overlay");

hamburger.addEventListener("click", () => {
    menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
    menu.classList.remove("active");
});

overlay.addEventListener("click", () => {
    menu.classList.remove("active");
});

const counters =document.querySelectorAll(".skills-block__percent"),
        lines = document.querySelectorAll(".skills-block__amount");

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});