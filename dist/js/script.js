
document.addEventListener('DOMContentLoaded', function() {
    
    const menu = document.querySelector('.header__menu'),
          button = document.querySelector('.button_transparent'),
          title = document.querySelector('.header__title'),
          subTitle = document.querySelector('.header__subtitle'),
          body = document.querySelector('body');

    addBottomClass = function(item) {
        item.classList.add('bottom');
    };
    addShowedClass = function(item) {
        item.classList.add('showed');
    };

    setTimeout(addBottomClass, 3300, menu);
    setTimeout(addBottomClass, 2300, button);
    setTimeout(addShowedClass, 1000, title);
    setTimeout(addShowedClass, 2300, subTitle);
    setTimeout(function(item) {
        item.classList.add('visible');
    }, 4000, body);

    $(document).ready(function(){
        $('.portfolio__carousel').slick({
        });
    });
    $(document).ready(function(){
        $("#header, #about, #skills, #portfolio").on("click","a", function (event) {
            event.preventDefault();
            const id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

    
    
    document.addEventListener('scroll', function() {
        if (pageYOffset > 200) {
            menu.classList.add('active');
        } else {
            menu.classList.remove('active');
        }
    });
});

