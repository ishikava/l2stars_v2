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

    var $span = $('.counter');
    $span.numberAnimate();

    $span.bind('click', function () {
        $span.numberAnimate('set', parseInt($(this).attr('data-numberanimate-value') ) + 1);
    })


});
