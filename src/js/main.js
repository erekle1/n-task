(jQuery)(function ($) {
    // $('.carousel').carousel({
    //   interval: 10000,
    //   pause: false
    // })
    // response navigation
    $(function () {
        $('#dl-menu').dlmenu({
            animationClasses: {
                classin: 'dl-animate-in-2',
                classout: 'dl-animate-out-2'
            }
        });
    });
    if (!is_touch_device()) {
        $(window).scroll(function () {
            var position = $(this).scrollTop();
        });
    }
    // scroll to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });

    $('.scroll-up').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
    function is_touch_device() {
        return Modernizr.touch;
    }
});


















