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
