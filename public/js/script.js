$(document).ready(function () {

    //menu
    $('.menuitem').hover(function () {
        $('.menuiteminner').hide();
        $(this).find('.menuiteminner').show();
    }, function () {
        $('.menuiteminner').hide();
    }).bind("click", function () {
        $(this).find('.menuiteminner').toggle();
    });

    //data-href
    $("[data-href]").bind("click", function () {
        window.open($(this).attr("data-href"), '_blank');
        return false;
    });

    // //clickunder
    // if (typeof $.cookie('click') === 'undefined'){
    //     $('a[href]').bind('click', function () {
    //         $.cookie('dwpopup', 'true', { expires: 1, path: '/' });
    //         //window.location = 'https://l2op.ru/#linedia';
    //         window.location = 'https://ketrawars.net/page/x1ru';
    //         window.open(this.href);
    //         return false;
    //     });
    // }

    //numbers animate
    let $span = $('.counter');
    $span.numberAnimate();

    $('.countercont').bind('click', function () {
        let id = $('.countercont').index(this);
        $span.eq(id).numberAnimate('set', parseInt($span.eq(id).attr('data-numberanimate-value')) + 1);
        $(this).unbind('click');
    });

    //scroll top
    $("a[href='#top']").click(function () {
        $("html, body").animate({scrollTop: 0}, "slow");
        return false;
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $('.scrolltop').fadeIn(300);
        } else {
            $('.scrolltop').fadeOut(300);
        }
    });


    let wrapper = $('.wrapper');
    let height = wrapper.height();
    let newheight = $('.heighter').height();
    let opened = false;

    //index height wrapper
    $('.moreservers').bind('click', function () {
        if(!opened){
            wrapper.stop().animate({height: newheight}, 700);
            opened = true;
        } else {
            wrapper.stop().animate({height: height}, 700);
            opened = false;
        }
    });


});
