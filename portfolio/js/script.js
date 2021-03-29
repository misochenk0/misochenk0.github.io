document.addEventListener('DOMContentLoaded', function() {
    $(window).on('beforeunload', function(){
        $(window).scrollTop(0);
      });
    const menu = document.querySelector('.header__menu'),
          button = document.querySelector('.button_transparent'),
          title = document.querySelector('.header__title'),
          subTitle = document.querySelector('.header__subtitle'),
          body = document.querySelector('body'),
          scale = document.querySelectorAll('.skills-item__value'),
          percent = document.querySelectorAll('.skills-item__percent'),
          overflow = document.querySelector('.overflow'),
          close = document.querySelector('.modal__close'),
          buttonModal = document.querySelector('.button_transparent'),
          form = document.querySelector('.modal__form');

        
    addBottomClass = function(item) {
        item.classList.add('bottom');
    };
    addShowedClass = function(item) {
        item.classList.add('showed');
    };
    setTimeout(addBottomClass, 3300, menu);
    setTimeout(addBottomClass, 4300, button);
    setTimeout(addShowedClass, 1000, title);
    setTimeout(addShowedClass, 2300, subTitle);
    setTimeout(function(item) {
        item.classList.add('visible');
    }, 4300, body);

    $(document).ready(function(){
        $('.portfolio__carousel').slick({
            dots: true,
        });
    });
    $(document).ready(function(){
        $("#header, #about, #skills, #portfolio").on("click",".header__link", function (event) {
            event.preventDefault();
            const id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

    $('.form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $("form").trigger("reset");
        });
        return false;
    });
    
    document.addEventListener('scroll', function() {
        if (pageYOffset > 100) {
            menu.classList.add('active');
        } else {
            menu.classList.remove('active');
        }
    });

    document.addEventListener('scroll', function() {
        if (pageYOffset >  1000) {
            percent.forEach((item, i) => {
                scale[i].style.width = item.innerHTML;
            });
        } else {
        }
    });

    modalFunction = function(item) {
        item.addEventListener('click', (e) => {
            if (e.target === item) {
                overflow.classList.toggle('overflow__active');
                body.classList.toggle('visible');
            }
        });
    };
    modalFunction(close);
    modalFunction(buttonModal);
    modalFunction(overflow);
    form.addEventListener('submit', ()=> {
        overflow.classList.toggle('overflow__active');
    });
});

