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

    //data-link
    $("[data-link]").bind("click", function () {
        window.location = $(this).attr('data-link');
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


    //datepicker
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: 'Предыдущий',
        nextText: 'Следующий',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };

    $.datepicker.setDefaults($.datepicker.regional['ru']);

    $(function () {
        $("#datepicker").datepicker({
            onSelect: function (date) {
                $('.moreservers').hide();
                window.location = "/#date_" + $(this).datepicker('getDate').getDate() + "_" + ($(this).datepicker('getDate').getMonth() + 1);
                sortServersDate($(this).datepicker('getDate').getDate(), $(this).datepicker('getDate').getMonth() + 1);
            },
            beforeShowDay: function (date) {
                if ($.inArray(date.getDate() + "|" + (date.getMonth() + 1), dates) >= 0) {
                    return [true, 'highlight', ''];
                } else {
                    return [false, '', ''];
                }
            }
        });
        $("#datepicker").datepicker("setDate", $('#datepicker_value').val());
    });


    //sort servers
    let sortServersChronicles = function (key, value) {
        $('.supervipserverscont').hide();
        $('.vipserver, .server').removeClass('visible').hide();
        $('.vipserver, .server').each(function (index) {
            if ($(this).attr(key) == value) {
                $(this).addClass('visible').show();
            }
        });
        $('.supervipserverscont').each(function (index) {
            if ($(this).find('.visible').length) {
                $(this).show();
            }
        });

        $('.wrapper').stop().animate({height: $('.heighter').height()}, 500);
    };

    let sortServersRates = function (min, max) {
        $('.supervipserverscont').hide();
        $('.vipserver, .server').removeClass('visible').hide();
        $('.vipserver, .server').each(function (index) {
            let str = $(this).attr('data-rates');
            let rate = str.substring(1, str.strlen);
            if (!isNaN(rate) && parseInt(rate) >= parseInt(min) && parseInt(rate) <= parseInt(max)) {
                $(this).addClass('visible').show();
            }
        });
        $('.supervipserverscont').each(function (index) {
            if ($(this).find('.visible').length) {
                $(this).show();
            }
        });

        $('.wrapper').stop().animate({height: $('.heighter').height()}, 500);
    };

    let sortServersRvr = function () {
        $('.supervipserverscont').hide();
        $('.vipserver, .server').removeClass('visible').hide();
        $('.vipserver, .server').each(function (index) {
            if ($(this).attr('data-rates') === 'RVR') {
                $(this).addClass('visible').show();
            }
        });
        $('.supervipserverscont').each(function (index) {
            if ($(this).find('.visible').length) {
                $(this).show();
            }
        });

        $('.wrapper').stop().animate({height: $('.heighter').height()}, 500);
    };

    let sortServersGve = function () {
        $('.supervipserverscont').hide();
        $('.vipserver, .server').removeClass('visible').hide();
        $('.vipserver, .server').each(function (index) {
            if ($(this).attr('data-rates') === 'GVE') {
                $(this).addClass('visible').show();
            }
        });
        $('.supervipserverscont').each(function (index) {
            if ($(this).find('.visible').length) {
                $(this).show();
            }
        });

        $('.wrapper').stop().animate({height: $('.heighter').height()}, 500);
    };

    let sortServersDate = function (day, month) {
        $('.supervipserverscont').hide();
        $('.vipserver, .server').removeClass('visible').hide();
        $('.vipserver, .server').each(function (index) {
            let dataday = $(this).attr('data-day');
            let datamonth = $(this).attr('data-month');
            if (parseInt(dataday) == parseInt(day) && parseInt(datamonth) == parseInt(month)) {
                $(this).addClass('visible').show();
            }
        });
        $('.supervipserverscont').each(function (index) {
            if ($(this).find('.visible').length) {
                $(this).show();
            }
        });

        $('.wrapper').stop().animate({height: $('.heighter').height()}, 500);
    };


    $('[data-chronicles]').bind('click', function () {
        $('.moreservers').hide();
        sortServersChronicles('data-chronicle', $(this).attr('data-chronicles'));
    });

    $('.rates').bind('click', function () {
        $('.moreservers').hide();
        sortServersRates($(this).attr('data-min'), $(this).attr('data-max'));
    });

    $('[data-rvr]').bind('click', function () {
        $('.moreservers').hide();
        sortServersRvr();
    });

    $('[data-gve]').bind('click', function () {
        $('.moreservers').hide();
        sortServersGve();
    });

    $('.filter_clear').bind('click', function () {
        $('.supervipserverscont, .vipserver, .server').show();
        $('.wrapper').stop().animate({height: height}, 500);
        $('.moreservers').show();
    });

    $('.filterbtn').bind('click', function () {
        $('.filtercont').toggle(300, function () {
            if($(this).is(':visible')) {
                $.cookie('showtopmenu', 'true',{ path: '/' });
            } else{
                $.removeCookie('showtopmenu');
            }
        });
    });

    //parse url to find if redirect needed on page load
    var uri = decodeURI(window.location.toString()).split('#');
    var request = "";
    if (uri[1]) {
        request = uri[1].split('_');
    }
    switch (request[0]) {
        case 'chronicles' :
            sortServersChronicles('data-chronicle', request[1]);
            break;
        case 'rates' :
            sortServersRates(request[1], request[2]);
            break;
        case 'date' :
            sortServersDate(request[1], request[2]);
            break;
        case 'rvr' :
            sortServersRvr();
            break;
        case 'gve' :
            sortServersGve();
            break;
    }

});
