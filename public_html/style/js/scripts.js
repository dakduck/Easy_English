var slideWidth = 960;
var slideTimer;
var counter = 0;

$(document).ready(function () {
    $('#tab-menu > li').click(function () {
        $('#tab-menu > li').removeClass('selected');
        $(this).addClass('selected');
        $('.tab-content div.tab').slideUp('slow');
        if ($('#tab-menu > li').index(this) >= $('#tab-menu > li .selected').index())
        $('.tab-content div.tab:eq(' + $('#tab-menu > li').index(this) + ')').slideDown('slow');
    }).mouseover(function () {
        $(this).addClass('mouseover');
        $(this).removeClass('mouseout');
    }).mouseout(function () {
        $(this).addClass('mouseout');
        $(this).removeClass('mouseover');
    });
    /*Устанавливаем ширину списка
     *равную произведению ширины одного слайда на общее кол-во слайдов
     *чтобы он вытянулся в одну строку*/
    $('.slidewrapper').width($('.slidewrapper').children().length * slideWidth);
    sliderTimer = setInterval(nextSlide, 3000);
    function nextSlide() {
        var currentSlide = parseInt($('.slidewrapper').data('current'));
        currentSlide++;
        if (currentSlide >= $('.slidewrapper').children().length)
        {
            currentSlide = 0;
        }
        $('.slidewrapper').animate({left: -currentSlide * slideWidth}, 1000).data('current', currentSlide);
    }
    $('.viewport').hover(function () {
        clearInterval(sliderTimer);
    }, function () {
        sliderTimer = setInterval(nextSlide, 3000);
    });

// UP button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });
    $("#toTop").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

});